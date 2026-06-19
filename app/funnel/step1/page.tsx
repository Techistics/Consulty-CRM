// app/funnel/step1/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Animation config used on all sections
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Step1Page() {
  return (
    <div className="font-[Clash_Display] text-[#0a0a0a] bg-white">

      {/* HERO SECTION */}
      <motion.section
        className="py-20 px-4 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-5xl font-[Clash_Display] font-bold mb-3 max-w-3xl mx-auto">
          Stop&nbsp;&nbsp;Losing&nbsp;&nbsp; Leads.
        </h1>
        <h1 className="text-[#069BAF] text-3xl font-semibold mb-3 font-[Clash_Display] max-w-6xl mx-auto">Start&nbsp;&nbsp;Running Your Consultancy Like a Machine.</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We help study abroad consultancies track leads, manage counselors, and convert more students — without the WhatsApp chaos.
        </p>

        {/* YOUTUBE VIDEO PLACEHOLDER */}
        <div className="relative rounded-2xl aspect-video w-full max-w-2xl border-[#069BAF] border-2 mx-auto overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/HVoUkdoPm3k"
            title="Consulty Walkthrough Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </motion.section>

      {/* CHECKLIST SECTION */}
      <motion.section
        className="bg-[#fafafa] py-16 px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-[Clash_Display] font-bold text-center mb-8">
          We don&apos;t just give you software — we set up your entire <span className="text-[#069BAF]">system</span>, ready to use.
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Full Lead Pipeline Setup",
            "Counselor Accounts & Permissions",
            "Student Profile System",
            "Custom Pipeline Stages for Your Consultancy",
            "Analytics Dashboard",
            "Dedicated Onboarding & Support",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#069BAF]/40 hover:shadow-md shadow-[#069BAF]/50 transition">
              <span className="mt-1 inline-block w-3 h-3 bg-[#069BAF] rounded-full mr-4 flex-shrink-0" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* STATS / SOCIAL PROOF SECTION */}
      <motion.section
        className="py-20 px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-[Clash_Display] font-bold text-center mb-12">
          Built From Real Consultancy <span className="text-[#069BAF]">Operations</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-between max-w-5xl mx-auto mb-12 space-y-6 sm:space-y-0">
          {[
            { num: "100+", label: "Leads Tracked Daily" },
            { num: "Zero", label: "Leads Lost to Excel Sheets" },
            { num: "Real-Time", label: "Counselor Visibility" },
            { num: "1 System", label: "Replaces 5 Scattered Tools" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold text-[#069BAF] mb-2">{stat.num}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* MULTIPLE TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote:
                "We switched from scattered WhatsApp groups and Excel sheets to Consulty — now I can see every lead, every counselor's activity, and every student's status in one place.",
              author: "Regional Head, Leading Study Abroad Consultancy — Pakistan",
            },
            {
              quote:
                "Before Consulty, half our leads went cold because no one followed up in time. Now every counselor knows exactly who to call and when.",
              author: "Operations Manager, Study Abroad Consultancy — Lahore",
            },
            {
              quote:
                "I finally know which counselor is actually converting and which one is just sitting on leads. That visibility alone paid for itself.",
              author: "Branch Owner, Education Consultancy — Karachi",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-[#069BAF] border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <p className="italic mb-4 text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-medium text-gray-600 text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PRICING SECTION */}
      <motion.section
        className="bg-[#fafafa] py-20 px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-[Clash_Display] font-bold text-center mb-4">
          Pricing That Doesn&apos;t Match What You&apos;re <span className="text-[#069BAF]">Getting</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          For a complete CRM system built specifically for your consultancy, this is significantly below market rate — and that&apos;s intentional while we onboard our first partners.
        </p>
        <div className="max-w-md mx-auto bg-white border-2 border-[#069BAF] rounded-2xl p-8 shadow-md">
          <div className="inline-block bg-[#069BAF] text-white rounded-full px-3 py-1 text-xs mb-4">
            Limited Onboarding Pricing
          </div>
          <h3 className="text-2xl font-bold mb-2">Consulty CRM</h3>
          <p className="text-2xl font-bold mb-2">PKR 25,000 (one‑time)</p>
          <p className="text-gray-600 mb-4">PKR 6,500 / month</p>
          <ul className="space-y-2 mb-6">
            {[
              "Full CRM Setup & Onboarding",
              "Unlimited Leads & Students",
              "Counselor Management & Timesheets",
              "Analytics & Reports",
              "Dedicated Support",
              "No Contract — Cancel Anytime",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#069BAF] rounded-full mt-2 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/funnel/step2"
            className="block w-full text-center bg-black text-white rounded-full px-6 py-3 font-semibold hover:bg-[#069BAF] transition-colors"
          >
            Claim This Pricing — Book Demo →
          </Link>
        </div>
      </motion.section>

      {/* FINAL CTA SECTION */}
      <motion.section
        className="bg-[#fafafa] py-20 px-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-[Clash_Display] font-bold mb-4">
          This Pricing Won&apos;t Last as We Onboard More <span className="text-[#069BAF]">Consultancies</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Book your free demo now and lock in this rate.
        </p>
        <Link
          href="/funnel/step2"
          className="bg-black text-white rounded-full px-6 py-3 font-semibold hover:bg-[#069BAF] transition-colors inline-block"
        >
          Book Your Free Demo →
        </Link>
      </motion.section>
    </div>
  );
}