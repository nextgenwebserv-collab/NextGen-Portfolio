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
      <div className="absolute -top-0 -left-10 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-80 right-0 w-96 h-96 bg-lime-300 rounded-full blur-3xl opacity-60"></div>

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
          <div className="bg-black text-white rounded-2xl p-6 sm:p-10 max-w-md w-full">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg px-4 py-3 text-black outline-none bg-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg px-4 py-3 text-black outline-none bg-white"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project"
                required
                className="w-full rounded-lg px-4 py-3 text-black outline-none resize-none bg-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-100 transition disabled:opacity-60"
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
