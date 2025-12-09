import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-slate-100 py-16 px-6 md:px-16" id="about">
      <div className="bg-slate-50 max-w-4xl mx-auto p-4 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          About <span className="text-blue-600">E-Recorder</span>
        </h2>

        <p className="text-slate-700 text-lg font-semibold leading-relaxed mb-6">
          E-Recorder is a digital platform designed to make financial
          record-keeping simple, accurate, and accessible. Whether you want to
          track personal expenses, monitor business spending, or maintain
          organized records, E-Recorder provides an intuitive solution tailored
          for all users.
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 mb-3">
          Our Mission
        </h3>
        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          To help individuals and businesses manage their expenses with clarity,
          confidence, and efficiency.
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 mb-3">
          What We Offer
        </h3>

        <ul className="list-disc pl-6 text-slate-700 text-lg space-y-2 mb-6">
          <li>Easy Expense Entry – Add and manage records with a clean interface.</li>
          <li>Smart Categorization – Organize expenses for better understanding.</li>
          <li>Visual Insights – Charts and summaries that show where your money goes.</li>
          <li>Secure Storage – Your data stays protected and accessible anytime.</li>
          <li>Responsive Design – Works smoothly on all devices.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-slate-900 mb-3">
          Why Choose E-Recorder?
        </h3>
        <p className="text-slate-700 text-lg leading-relaxed">
          Because managing expenses should be simple — not stressful.
        </p>
      </div>
    </section>
  );
}
