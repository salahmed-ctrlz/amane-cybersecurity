import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useLanguage';
import { GlassCard } from './GlassCard';
import { Linkedin, Mail, MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      id: 'linkedin',
      icon: <Linkedin className="w-6 h-6" />,
      label: 'Amane Cybersecurity',
      value: 'https://www.linkedin.com/company/amane-cybersecurity/',
      isLink: true,
      color: 'bg-blue-900'
    },
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'contact@amane.dz',
      isLink: false,
      color: 'bg-purple-900'
    },
    {
      id: 'address',
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      value: '23 Boulevard de la Révolution, Annaba 23000, Algeria',
      isLink: false,
      color: 'bg-red-900'
    },
    {
      id: 'phone',
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+213 38 45 12 67',
      isLink: false,
      color: 'bg-green-900'
    }
  ];

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Copied to clipboard!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
        toast.error('Failed to copy text. Please try again.', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <section id="contact" className="py-20 font-arabic">
        <GlassCard className="p-8 md:p-12 overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple/20 rounded-full blur-6xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue/20 rounded-full blur-6xl" />

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            {t.contact.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <motion.div
                  whileHover="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/5 backdrop-blur-xl border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/5 backdrop-blur-xl border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover="focus"
                  variants={inputVariants}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/5 backdrop-blur-xl border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    required
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: 'rgb(171, 81, 255)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-3 bg-purple-500 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40"
                >
                  <span>{t.contact.form.submit}</span>
                  <Send className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Info - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="grid gap-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: contactInfo.indexOf(info) * 0.1 }}
                    onMouseEnter={() => setIsHovering(info.id)}
                    onMouseLeave={() => setIsHovering(null)}
                    className={`relative overflow-hidden rounded-xl backdrop-blur-xl transition-all duration-300 ${
                      isHovering === info.id ? 'bg-white/10 scale-105' : 'bg-white/5'
                    }`}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      className={`absolute inset-0 opacity-0 ${info.color}`}
                      initial={{ opacity: 0, x: '-100%' }}
                      animate={{
                        opacity: isHovering === info.id ? 0.1 : 0,
                        x: isHovering === info.id ? 0 : '-100%'
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {info.isLink ? (
                      <a
                        href={info.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start p-5 space-x-4 group"
                      >
                        <div className={`p-3 rounded-full ${info.color} bg-opacity-20 text-white`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-gray-400">{info.label}</p>
                          <p className="font-semibold flex items-center">
                            {info.value.split('//')[1].split('/')[0]}
                            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start p-5 space-x-4">
                        <div className={`p-3 rounded-full ${info.color} bg-opacity-20 text-white`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm text-gray-400">{info.label}</p>
                          <p className="font-semibold cursor-pointer" onClick={() => handleCopyToClipboard(info.value)}>
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Map-like element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 rounded-xl overflow-hidden h-48 relative bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] opacity-40 bg-cover bg-center">
                  {/* This would be replaced with an actual map or image */}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-xl p-3 rounded-xl flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span className="font-medium">Annaba, Algeria</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </GlassCard>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};