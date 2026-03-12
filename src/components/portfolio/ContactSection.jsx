import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, ArrowUpRight, Loader2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';

const socials = [
  { icon: Github, label: 'GitHub', href: '#', handle: '@alexchen-ai' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', handle: 'Alex Chen' },
  { icon: Twitter, label: 'Twitter', href: '#', handle: '@alexchen_ml' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Contact"
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-gradient text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {sending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : sent ? (
                'Message Sent! ✓'
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-5"
        >
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/40">Email</span>
            </div>
            <a href="mailto:alex@aidev.com" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">
              alex@aidev.com
            </a>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/40">Location</span>
            </div>
            <span className="text-white/70 text-sm">San Francisco, CA</span>
          </div>

          <div className="glass rounded-2xl p-6">
            <h4 className="text-sm font-medium text-white/40 mb-4">Connect</h4>
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <s.icon className="w-4 h-4 text-white/50 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{s.label}</span>
                    <p className="text-xs text-white/25">{s.handle}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/15 group-hover:text-cyan-400 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
