'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, MessageCircle, Sparkles, CheckCircle2, Clock, Globe } from 'lucide-react';
import { COMPANY_INFO } from '@/data/productsData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Wholesale Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-b border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c]">
            <Sparkles className="w-3.5 h-3.5 text-[#34070c]" />
            <span>GLOBAL & DOMESTIC INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            GET IN TOUCH WITH <span className="crimson-gradient-text inline-flex items-center"><span>UNITED FOODS</span><sup className="text-base sm:text-2xl font-bold ml-0.5 align-super">TM</sup></span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Whether you are a retailer, bulk importer, distributor, or food service partner, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & WhatsApp Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Quick Connect Card */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">Instant WhatsApp Connect</h3>
                  <p className="text-xs text-slate-600">Fast response for wholesale orders & price list</p>
                </div>
              </div>

              <p className="text-xs text-slate-600">
                Connect directly with our sales team via WhatsApp for instant catalog PDFs, sample requests, and export quotes.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20would%20like%20to%20inquire%20about%20your%20product%20catalog%20and%20wholesale%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Wholesale%20%26%20Export%20Inquiry%20-%20United%20Foods`}
                  className="flex-1 py-3 px-4 rounded-full bg-[#34070c] hover:bg-[#4e0b12] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Mail className="w-4 h-4 text-[#f5d77f]" />
                  <span>Email Directly</span>
                </a>
              </div>
            </div>

            {/* Direct Info List */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200 space-y-5 bg-white shadow-sm">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-[#34070c]/20 flex items-center justify-center text-[#34070c] flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Direct Telephone & WhatsApp</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-slate-900 hover:text-[#34070c] transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-[#34070c]/20 flex items-center justify-center text-[#34070c] flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Official Inquiry Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-slate-900 hover:text-[#34070c] transition-colors break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-[#34070c]/20 flex items-center justify-center text-[#34070c] flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Official Website</p>
                  <span className="text-sm font-bold text-slate-900">
                    {COMPANY_INFO.website}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-[#34070c]/20 flex items-center justify-center text-[#34070c] flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Business Hours</p>
                  <p className="text-sm font-semibold text-slate-700">
                    Mon – Sat: 9:00 AM – 7:00 PM (PKT)
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white relative shadow-sm">
              
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Send a Business Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out the form below and our export & sales representative will get back to you within 24 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-slate-900">Inquiry Received</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to United Foods™. Our sales team has received your message and will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs !py-2 !px-5 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#34070c] focus:bg-white text-slate-900 text-xs outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#34070c] focus:bg-white text-slate-900 text-xs outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#34070c] focus:bg-white text-slate-900 text-xs outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Inquiry Type</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#34070c] focus:bg-white text-slate-900 text-xs outline-none transition-all"
                      >
                        <option value="Wholesale Inquiry">Domestic Wholesale Order</option>
                        <option value="Export Inquiry">International Export Inquiry</option>
                        <option value="Distributor Partnership">Distributor Partnership</option>
                        <option value="Pickles & Spices">Pickles & Spices Catalog</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Your Message / Requirement Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please specify desired products, estimated quantities, and delivery location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#34070c] focus:bg-white text-slate-900 text-xs outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-center text-xs !py-3.5 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
