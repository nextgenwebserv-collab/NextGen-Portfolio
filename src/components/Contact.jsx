'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const sendEmail = e => {
    e.preventDefault();

    if (!formRef.current) return;

    if (formRef.current.email.value === 'nextgenwebserv@gmail.com') {
      toast.error('Please check your email.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      })
      .catch(error => {
        toast.error('Failed to send message.');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="about" className="relative py-18 sm:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-50  left-20 sm:left-80 -translate-x-1/2 w-60 sm:w-96 h-60 sm:h-96 bg-violet-500/60 rounded-full blur-[100px] opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-16">
        <span className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-full text-sm mb-6 bg-white">
          Contact NextGen
        </span>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Let’s{' '}
              <span className="bg-black text-white px-3 py-0.5 rounded-lg">Work Together</span>
            </h2>

            <p className="max-w-xl text-gray-700 mb-6">
              Have a project in mind or looking to build something impactful? We’d love to hear from
              you. Share your ideas and let’s turn them into high-performing digital experiences.
            </p>

            <div className="space-y-3 text-md text-gray-700">
              <p className="flex items-center gap-2">
                <FaEnvelope size={18} /> nextgenwebservices@gmail.com
              </p>
              <p>⚡ Fast response & clear communication</p>
            </div>
          </div>
          {/* Contact Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-violet-500/40 bg-white/[0.08] backdrop-blur-2xl p-6 sm:p-10 max-w-md w-full transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]">
            {/* Purple Glow */}
            <div className="absolute top-60 sm:-top-20 -right-20 w-60 h-60 bg-violet-500/30 rounded-full blur-[90px] group-hover:bg-violet-500/50 transition-all duration-500"></div>

            <form ref={formRef} onSubmit={sendEmail} className="relative space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl px-4 py-3 text-black outline-none bg-white/90 backdrop-blur-md border border-white/20 focus:ring-2 focus:ring-violet-400 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl px-4 py-3 text-black outline-none bg-white/90 backdrop-blur-md border border-white/20 focus:ring-2 focus:ring-violet-400 transition"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project"
                required
                className="w-full rounded-xl px-4 py-3 text-black outline-none resize-none bg-white/90 backdrop-blur-md border border-white/20 focus:ring-2 focus:ring-violet-400 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-violet-500/30 disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
