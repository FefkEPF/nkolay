import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, Check, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "../data";
import { COMPANY } from "../lib/constants";
import { useReducedMotion } from "../lib/useReducedMotion";

interface ContactFormProps {
  prefilledService?: string;
}

export default function ContactForm({ prefilledService = "" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(prefilledService || "Genel Teklif Talebi");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const validate = () => {
    const next: { name?: string; email?: string; phone?: string; message?: string } = {};
    if (!name.trim()) next.name = "Adınızı soyadınızı girin.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Geçerli bir e-posta adresi girin.";
    if (!/^[0-9+\s()-]{7,}$/.test(phone)) next.phone = "Geçerli bir telefon numarası girin.";
    if (!message.trim()) next.message = "Mesajınızı yazın.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormStatus({ type: "loading", message: "Mesajınız iletiliyor, lütfen bekleyin..." });

    try {
      // SECURITY: no client-side SMTP config is sent. The server uses
      // environment variables exclusively for mail transport.
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (response.ok && result?.success) {
        setFormStatus({
          type: "success",
          message: "Mesajınız başarıyla bize ulaştı! Sizi en kısa sürede arayacağız.",
        });

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setFormStatus({
          type: "error",
          message: result?.error || "Gönderim sırasında bir sorun oluştu. Lütfen doğrudan bizi arayın.",
        });
      }
    } catch (err: unknown) {
      console.error(err);
      setFormStatus({
        type: "error",
        message: "Bağlantı hatası oluştu. Lütfen doğrudan telefon veya WhatsApp ile bize ulaşın.",
      });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-surface" id="contact-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary-light border border-primary/10 rounded-full px-4 py-1.5 shadow-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-[13px] font-medium text-primary tracking-wide">
              İletişim
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight">
            Bize <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Ulaşın</span>
          </h2>
          <p className="font-sans text-gray-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Bizimle iletişime geçmek ve ücretsiz fiyat teklifi almak çok kolay. Formu doldurun, hemen arayalım.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto text-left">

          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-gray-200/60 p-8 rounded-3xl shadow-sm space-y-8">
              <h3 className="font-display font-semibold text-xl text-gray-900">
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light border border-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans font-medium text-gray-900 text-sm">Adres</p>
                    <p className="leading-relaxed text-gray-600 text-[15px] font-light">{COMPANY.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <a href={COMPANY.phoneHref} className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary-light border border-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans font-medium text-gray-900 text-sm">Bizi Arayın</p>
                    <p className="text-gray-600 text-[15px] font-light group-hover:text-primary transition-colors">{COMPANY.phoneDisplay}</p>
                  </div>
                </a>

                {/* Email */}
                <a href={`mailto:${COMPANY.email}`} className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-primary-light border border-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans font-medium text-gray-900 text-sm">E-posta Gönderin</p>
                    <p className="text-gray-600 text-[15px] font-light group-hover:text-primary transition-colors">{COMPANY.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Process alert */}
            <div className="bg-primary-light border border-primary/10 p-6 rounded-3xl shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
              <div>
                <p className="font-sans font-medium text-gray-950 mb-1 text-sm">Süreç Nasıl İlerliyor?</p>
                <p className="text-[14px] text-gray-700 leading-relaxed font-light">
                  Talebinizi aldıktan sonra uzman ekiplerimizle Esenyurt'taki ofisimizde markanıza özel planı hazırlar ve sizi ararız.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200/60 shadow-sm p-8 md:p-10 rounded-3xl">
            <h3 className="font-display font-semibold text-2xl text-gray-900 mb-8 tracking-tight">
              Teklif Talebi Formu
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {/* Name */}
                 <div className="space-y-2">
                   <label htmlFor="contact-name" className="text-[13px] font-medium text-gray-700">Adınız Soyadınız *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Adınızı yazın"
                     aria-describedby={errors.name ? "contact-name-error" : undefined}
                     className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 text-sm outline-none text-gray-900 placeholder-gray-400 transition-all ${errors.name ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10" : "border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"}`}
                   />
                   {errors.name && <p id="contact-name-error" role="alert" className="text-rose-600 text-[12px] mt-1">{errors.name}</p>}
                </div>

                 {/* Email */}
                 <div className="space-y-2">
                   <label htmlFor="contact-email" className="text-[13px] font-medium text-gray-700">E-posta Adresiniz *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="mail@adresiniz.com"
                     aria-describedby={errors.email ? "contact-email-error" : undefined}
                     className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 text-sm outline-none text-gray-900 placeholder-gray-400 transition-all ${errors.email ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10" : "border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"}`}
                   />
                   {errors.email && <p id="contact-email-error" role="alert" className="text-rose-600 text-[12px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {/* Phone */}
                 <div className="space-y-2">
                   <label htmlFor="contact-phone" className="text-[13px] font-medium text-gray-700">Telefon Numaranız *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     placeholder="05XX XXX XX XX"
                     aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                     className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 text-sm outline-none text-gray-900 placeholder-gray-400 transition-all ${errors.phone ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10" : "border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"}`}
                   />
                   {errors.phone && <p id="contact-phone-error" role="alert" className="text-rose-600 text-[12px] mt-1">{errors.phone}</p>}
                </div>

                 {/* Subject */}
                 <div className="space-y-2">
                   <label htmlFor="contact-subject" className="text-[13px] font-medium text-gray-700">İlgilendiğiniz Hizmet</label>
                   <select
                     id="contact-subject"
                     value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-xl px-4 py-3.5 text-sm outline-none text-gray-900 transition-all cursor-pointer"
                  >
                    <option value="Genel Teklif Talebi" className="bg-white">Genel Teklif Talebi</option>
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={service.title} className="bg-white">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

               {/* Message */}
               <div className="space-y-2">
                 <label htmlFor="contact-message" className="text-[13px] font-medium text-gray-700">Mesajınız / Sorunuz *</label>
                  <textarea
                    id="contact-message"
                    required
                   rows={5}
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                   placeholder="Hedeflerinizi bize kısaca anlatın..."
                   aria-describedby={errors.message ? "contact-message-error" : undefined}
                   className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 text-sm outline-none text-gray-900 placeholder-gray-400 transition-all resize-none ${errors.message ? "border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10" : "border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10"}`}
                  />
                  {errors.message && <p id="contact-message-error" role="alert" className="text-rose-600 text-[12px] mt-1">{errors.message}</p>}
              </div>

              {/* Form Status Notification */}
              {formStatus.type !== "idle" && (
                <motion.div
                  initial={reduced ? noMotion : { opacity: 0, y: -10 }}
                  animate={reduced ? noMotion : { opacity: 1, y: 0 }}
                  className={`p-4 text-sm font-medium rounded-xl flex items-start gap-3 border ${
                    formStatus.type === "loading"
                      ? "bg-gray-50 border-gray-200 text-gray-700"
                      : formStatus.type === "success"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                      : "bg-rose-50 border-rose-200 text-rose-700"
                  }`}
                >
                  {formStatus.type === "loading" ? (
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0 mt-0.5" />
                  ) : formStatus.type === "success" ? (
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p>{formStatus.message}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formStatus.type === "loading"}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium text-[15px] py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Teklif Talebini Gönder</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
