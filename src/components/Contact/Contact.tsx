"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  // Contact info
  const contactItems = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      value: "+8801796427670",
      color: "#00ff94",
      link: "tel:+8801796427670",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: "najimuddinhelal96@gmail.com",
      color: "#00d1ff",
      link: "mailto:najimuddinhelal96@gmail.com",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      value: "Mdnajimuddinhelal70",
      color: "#a855f7",
      link: "https://github.com/Mdnajimuddinhelal70",
      isExternal: true,
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "najimuddin",
      color: "#00ff94",
      link: "https://www.linkedin.com/in/najim-uddin-helal-7994a1363/",
      isExternal: true,
    },
    // https://www.linkedin.com/in/nazmulxdev
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      value: "Chat Now",
      color: "#00d1ff",
      link: "https://wa.me/+8801796427670",
      isExternal: true,
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Address",
      value: "Birendranagar, Dowarabazar, Sunamganj - 1216, Bangladesh",
      color: "#a855f7",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  // Handle input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit (UI only)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#00ff94]">
            {"Let's Connect"}
          </h2>
          <p className="dark:text-gray-400">
            Have a project in mind? Send me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl dark:bg-gray-800/50 border dark:border-gray-700 border-primary/80 flex items-center gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: `${item.color}20`,
                    border: `2px solid ${item.color}`,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="dark:text-gray-300 font-semibold">
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.isExternal ? "_blank" : "_self"}
                      className="dark:text-gray-400 hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="dark:text-gray-400">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            className="p-8 rounded-2xl dark:bg-gray-900 border dark:border-gray-800 border-primary/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#00ff94]">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 dark:bg-gray-800 border dark:border-gray-700 border-primary/80 rounded-lg dark:text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 dark:bg-gray-800 border dark:border-gray-700 border-primary/80 rounded-lg dark:text-white"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 dark:bg-gray-800 border dark:border-gray-700 border-primary/80 rounded-lg dark:text-white"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 dark:bg-gray-800 border dark:border-gray-700 border-primary/80 rounded-lg dark:text-white"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#00ff94] text-black font-bold rounded-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
