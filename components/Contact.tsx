"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      'service_eo37dta',
      'template_pgje27m',
      formData,
      'F11CTNDb1HPiSMLoV'
    )
    .then(
      () => {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
};

  return (
    <section id="contact" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#111827] mb-8">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Details */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
              GET IN TOUCH
            </h3>
            
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed max-w-sm">
              I am open to freelance opportunities, frontend projects, and full-time positions. Drop a message and let&apos;s discuss your ideas!
            </p>

            <div className="space-y-3 pt-2 text-[11px] sm:text-xs">
              <div>
                <span className="font-bold uppercase text-slate-800 block text-[10px] tracking-wider">
                  EMAIL
                </span>
                <a
                  href="mailto:contact@example.com"
                  className="text-[#1a4b56] hover:underline font-medium"
                >
                  julietokenwa100@gmail.com
                </a>
              </div>

              <div>
                <span className="font-bold uppercase text-slate-800 block text-[10px] tracking-wider">
                  LOCATION
                </span>
                <span className="text-slate-600 font-medium">Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#1a4b56] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#1a4b56] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#1a4b56] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#1a4b56] hover:bg-[#133942] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 rounded shadow-sm transition-all duration-200 active:scale-95"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}