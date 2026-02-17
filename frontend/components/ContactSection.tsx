"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-white/65 max-w-xl mx-auto leading-relaxed"
        >
          If you want to collaborate, discuss internships, or talk about building products — reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
        >
          <a
            href="mailto:adarsh@example.com"
            className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-singh-mlg/"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
