"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const testimonials = [
  {
    quote:
      "We switched from scattered WhatsApp groups and Excel sheets to Consulty — now I can see every lead, every counselor's activity, and every student's status in one place. It's transformed how we operate.",
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
];

export default function HomePage() {
  return (
    <div className="font-[Clash_Display] text-[#0a0a0a] bg-[#ffffff]">
      {/* TOP BRANDING */}
      <motion.header
        className="p-4 flex justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-2xl font-bold text-[#069BAF] hover:text-[#057f91] transition-colors cursor-pointer">
          Consulty
        </h1>
      </motion.header>

      {/* HERO SECTION */}
      <motion.section
        className="py-20 px-8 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="inline-block bg-[#069BAF]/10 text-[#069BAF] rounded-full px-4 py-1.5 text-sm mb-4">
          30–40% of Consultancy Leads Are Lost Every Month
        </div>
        <h1 className="text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Run Your <span className="text-[#069BAF]">Consultancy</span>. We&apos;ll Handle the Chaos.
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Consulty is the CRM built specifically for study abroad consultancies — every lead, every counselor, every student, in one place.
        </p>
        <Link
          href="/funnel/step1"
          className="bg-black text-white rounded-full px-6 py-3 font-semibold hover:bg-[#069BAF] transition-colors inline-block"
        >
          Book Free Demo →
        </Link>

        {/* YOUTUBE VIDEO PLACEHOLDER */}
        <div className="mt-12 flex justify-center">
          <div className="relative bg-gray-900 rounded-2xl aspect-video w-full max-w-4xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#069BAF] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-sm">
              See Consulty in action — 2 min walkthrough
            </p>
          </div>
        </div>
      </motion.section>

      {/* FEATURES GRID */}
      <motion.section
        className="py-20 px-8 bg-[#fafafa]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-center text-3xl font-bold mb-12">
          Everything You Need to Stay in <span className="text-[#069BAF]">Control</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Lead Pipeline", desc: "Track every lead through custom stages. Nothing falls through the cracks." },
            { title: "Counselor Tracking", desc: "See every counselor's leads, follow-ups, and performance in real time." },
            { title: "Student Profiles", desc: "Full student history — documents, notes, status, all in one place." },
            { title: "Follow-up Reminders", desc: "Automated alerts so no lead ever goes cold again." },
            { title: "Analytics Dashboard", desc: "Know exactly where leads drop off and which counselor is converting." },
            { title: "Multi-Tenant & Secure", desc: "Each branch or team has its own isolated workspace." },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#069BAF]/40 transition flex flex-col"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-3">
                <span className="inline-block w-2 h-2 bg-[#069BAF] rounded-full mr-2" />
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SOCIAL PROOF — MULTIPLE TESTIMONIALS */}
      <motion.section
        className="py-20 px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-center text-3xl font-bold mb-12">
          Trusted by Real <span className="text-[#069BAF]">Consultancies</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white border-l-4 border-[#069BAF] border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="italic mb-4 text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-medium text-gray-600 text-sm">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FINAL CTA SECTION */}
      <motion.section
        className="py-20 px-8 bg-[#fafafa] text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Stop Losing <span className="text-[#069BAF]">Leads</span>?
        </h2>
        <p className="text-gray-600 mb-6">
          Book a free demo and see exactly how Consulty fits your consultancy.
        </p>
        <Link
          href="/funnel/step1"
          className="bg-black text-white rounded-full px-6 py-3 font-semibold hover:bg-[#069BAF] transition-colors inline-block"
        >
          Book Your Free Demo →
        </Link>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-white text-center">
        <p className="font-bold mb-2 text-[#069BAF]">Consulty</p>
        <p className="text-sm text-gray-600 mb-2">CRM built for study abroad consultancies.</p>
        <p className="text-sm text-gray-600">devclyst@gmail.com • +92 370 4640009</p>
        <p className="text-xs text-gray-500 mt-4">© 2026 Consulty. All rights reserved.</p>
      </footer>
    </div>
  );
}