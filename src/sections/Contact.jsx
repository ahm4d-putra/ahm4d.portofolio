import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-burgundy/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Contact"
            title="Let's Build Something"
            description="Have a project in mind or just want to chat? I'm always open to discussing new opportunities and interesting ideas."
            align="center"
          />

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <div className="glass rounded-xl p-6">
                <h4 className="font-display text-lg font-semibold text-light mb-4">
                  Quick Info
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span className="text-sm">ahmdptrarmdhn@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <span className="text-sm">Jakarta, Ciganjur</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h4 className="font-display text-lg font-semibold text-light mb-2">
                  Response Time
                </h4>
                <p className="text-muted text-sm">
                  I typically respond within 24 hours. For urgent matters, reach
                  out via instagram.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="md:col-span-3 glass rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-muted/20 rounded-lg text-light placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-light mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark/50 border border-muted/20 rounded-lg text-light placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-light mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark/50 border border-muted/20 rounded-lg text-light placeholder-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isSubmitted ? 1 : 0 }}
                  className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-accent text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
