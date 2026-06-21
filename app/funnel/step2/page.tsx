// Updated Step2 page with DB submission, cleaned up implementation, and Meta tracking

'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SLOTS, type Slot } from "../data/slots";
import { trackMetaEvent } from "@/lib/meta-track";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Helpers for slot dates
const getUniqueDates = (slots: Slot[]) => {
  const dates: string[] = [];
  slots.forEach((s) => {
    if (!dates.includes(s.date)) dates.push(s.date);
  });
  return dates;
};

const getDefaultDate = (slots: Slot[]) => {
  const dates = getUniqueDates(slots);
  for (const d of dates) {
    if (slots.some((s) => s.date === d && s.status === "available")) return d;
  }
  return dates[0] ?? "";
};

export default function Step2Page() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    consultancy: "",
    whatsapp: "",
    email: "",
  });

  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  });

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Initialise default date on mount
  useEffect(() => {
    const def = getDefaultDate(SLOTS);
    setSelectedDate(def);
  }, []);

  const timeSlots = SLOTS.filter((s) => s.date === selectedDate);
  const isExploring = answers.q1 === "Just exploring";

  // Form validation – when exploring we only need basic fields + q1
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const phoneValid = /^\d{11}$/.test(formData.whatsapp);

  // Show validation errors when user interacts
  const [showValidation, setShowValidation] = useState(false);

  const isFormValid = isExploring
    ? formData.name && formData.consultancy && formData.whatsapp && formData.email &&
      answers.q1 && emailValid && phoneValid
    : formData.name && formData.consultancy && formData.whatsapp && formData.email &&
      answers.q1 && answers.q2 && answers.q3 && answers.q4 && selectedDate && selectedTime &&
      emailValid && phoneValid;

  // Lock downstream questions when exploring
  useEffect(() => {
    if (isExploring) {
      setAnswers((prev) => ({ ...prev, q2: "", q3: "", q4: "" }));
      setSelectedTime("");
    }
  }, [isExploring]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          answers,
          selectedDate,
          selectedTime,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit lead");

      // Fire Meta Pixel + CAPI together — this is the real conversion event
      trackMetaEvent(isExploring ? "Lead" : "CompleteRegistration", {
        email: formData.email,
        phone: formData.whatsapp,
      });

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  const renderSuccess = () => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-center py-12"
    >
      <div className="text-5xl mb-4 text-[#069BAF] animate-bounce">✔️</div>
      {isExploring ? (
        <>
          <h2 className="text-2xl font-[Clash_Display] font-bold mb-2">
            Walkthrough Sent!
          </h2>
          <p className="text-gray-600 mb-4">
            We’ll WhatsApp a short recorded walkthrough to {formData.whatsapp} shortly.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-[Clash_Display] font-bold mb-2">
            You&apos;re Booked!
          </h2>
          <p className="text-gray-600 mb-4">
            We’ll WhatsApp you at {formData.whatsapp} to confirm your slot.
          </p>
        </>
      )}
      <Link
        href="https://wa.me/923704640009"
        className="text-[#069BAF] font-medium underline hover:text-[#057f91] transition-colors"
      >
        Chat with us on WhatsApp →
      </Link>
    </motion.div>
  );

  const radioQuestions = [
    {
      key: "q1",
      question: "How soon are you willing to set up your CRM?",
      options: ["Now", "Later", "Just exploring"],
    },
    {
      key: "q2",
      question: "Do you currently have a system to manage leads?",
      options: ["No system at all", "Excel", "WhatsApp only", "Some other software"],
    },
    {
      key: "q3",
      question: "How many counselors does your consultancy have?",
      options: ["Just me", "2–5", "5+"],
    },
    {
      key: "q4",
      question: "How many leads do you receive per month?",
      options: ["Under 50", "50–150", "150+"],
    },
  ];

  return (
    <div className="font-[Clash_Display] bg-white text-[#0a0a0a] min-h-screen py-12 px-4">
      {/* Branding */}
      <header className="flex justify-center mb-8">
        <h1 className="text-2xl font-bold text-[#069BAF] hover:text-[#057f91] transition-colors cursor-pointer">
          Consulty
        </h1>
      </header>

      {/* Hero */}
      <motion.section
        className="max-w-3xl mx-auto text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="font-[Clash_Display] text-4xl md:text-5xl font-bold mb-4">
          Book Your 1-on-1 <span className="text-[#069BAF]">Demo</span> Call
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get personalized guidance from the Consulty team and see exactly how it fits your consultancy.
        </p>
      </motion.section>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-md transition-shadow"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#069BAF] focus:ring-1 focus:ring-[#069BAF]/30 outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Consultancy Name *</label>
            <input
              type="text"
              value={formData.consultancy}
              onChange={(e) => setFormData({ ...formData, consultancy: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#069BAF] focus:ring-1 focus:ring-[#069BAF]/30 outline-none"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">WhatsApp Number *</label>
            <input
            onBlur={() => setShowValidation(true)}
            type="tel"
            placeholder="03001234567"
            pattern="\d{11}"
            title="Enter 11 digit phone number"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            className={`w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#069BAF]/30 outline-none ${!phoneValid && showValidation ? 'border-red-500 focus:border-red-500' : 'border-gray-300'}`}
            required
          />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address *</label>
            <input
            onBlur={() => setShowValidation(true)}
            type="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Enter a valid email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full border rounded-lg px-4 py-3 focus:ring-1 focus:ring-[#069BAF]/30 outline-none ${!emailValid && showValidation ? 'border-red-500 focus:border-red-500' : 'border-gray-300'}`}
            required
          />
          </div>
        </div>

        {/* Radio questions */}
        {radioQuestions.map((q) => {
          const locked = isExploring && q.key !== "q1";
          return (
            <div key={q.key} className={`bg-[#fafafa] rounded-xl p-5 space-y-2 ${locked ? "opacity-40 pointer-events-none" : ""}`}>
              <p className="font-medium mb-2">{q.question}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center p-2 rounded-full transition border ${answers[q.key as keyof typeof answers] === opt ? "bg-[#069BAF] text-white border-[#069BAF]" : "border-gray-300 bg-white text-gray-700 hover:border-[#069BAF]/50"}`}
                  >
                    <input
                      type="radio"
                      name={q.key}
                      value={opt}
                      checked={answers[q.key as keyof typeof answers] === opt}
                      onChange={() => setAnswers({ ...answers, [q.key]: opt })}
                      disabled={locked}
                      className="mr-2 accent-[#069BAF]"
                    />
                    {opt}
                  </label>
                ))}
              </div>
              {q.key === "q1" && isExploring && (
                <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 mt-2 text-sm">
                  No problem — we’ll send you a short recorded walkthrough so you can explore at your own pace.
                </div>
              )}
            </div>
          );
        })}

        {/* Date & Time picker - disabled when exploring */}
        <div className={`${isExploring ? "opacity-40 pointer-events-none" : ""} mt-6`}>
          <p className="font-[Clash_Display] text-xl font-bold mb-2">Select Date &amp; Time (PKT)</p>
          <p className="text-gray-600 text-sm mb-3">All times shown in Pakistan Time (PKT)</p>
          <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
            {getUniqueDates(SLOTS).map((date) => {
              const dayLabel = SLOTS.find((s) => s.date === date)?.day ?? date;
              const isSel = selectedDate === date;
              return (
                <button
                  key={date}
                  type="button"
                  onClick={() => { setSelectedDate(date); setSelectedTime(""); }}
                  className={`px-4 py-2 rounded-full border ${isSel ? "bg-black text-white" : "border-gray-300 text-gray-700 hover:border-[#069BAF]/50"}`}
                >
                  {dayLabel}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {timeSlots.map((slot) => {
              const isAvailable = slot.status === "available";
              const isSel = selectedTime === slot.time;
              if (!isAvailable) {
                return (
                  <div
                    key={slot.id}
                    className="bg-gray-50 border-gray-200 text-gray-400 line-through rounded-lg py-2 text-sm flex items-center justify-center gap-2"
                  >
                    {slot.time}
                    <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">Booked</span>
                  </div>
                );
              }
              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setSelectedTime(slot.time)}
                  className={`border rounded-lg py-2 text-sm flex items-center justify-center transition ${isSel ? "bg-[#069BAF] text-white border-[#069BAF]" : "border-[#069BAF]/50 text-[#0a0a0a] hover:bg-[#069BAF]/10"}`}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
         onClick={() => { if (!isFormValid) setShowValidation(true); }}
          disabled={loading}
          className={`w-full rounded-full px-6 cursor-pointer py-3 font-semibold transition ${!isFormValid ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : (isFormValid && !loading ? 'bg-black text-white hover:bg-gray-800' : '')}`}
        >
          {loading ? "Submitting…" : isExploring ? "Send Me the Walkthrough →" : "Confirm Booking & Lock My Slot →"}
        </button>
        {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
      </motion.form>

      {/* Success message */}
      {submitted && renderSuccess()}

      {/* Footer note */}
      <motion.div
        className="text-center text-sm text-gray-500 mt-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        No spam ever · Real demo, not a sales pitch · Response within 1 hour
      </motion.div>
    </div>
  );
}