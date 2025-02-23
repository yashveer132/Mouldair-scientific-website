import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    const { name, email, subject, message } = formState;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!emailRegex.test(email)) errors.email = "Invalid email address";
    if (!subject.trim()) errors.subject = "Subject is required";
    if (!message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      toast.success("Your message has been sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFormState(initialFormState);
      setFormErrors({});
    } else {
      setFormErrors(errors);
      toast.error("Please fill in all the required fields correctly.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const inputClasses =
    "w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <Layout>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
              Get in <span className="text-indigo-600">Touch</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have a question about our
              products, pricing, or just want to say hello, we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform transition"
            >
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Send us a message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className={labelClasses}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={inputClasses}
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <motion.button
                      type="submit"
                      className="w-full py-2 sm:py-3 px-4 text-sm sm:text-base border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-8 flex justify-center"
                >
                  <motion.img
                    src="/Black on Transparent.png"
                    alt="ModuVac Logo"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white shadow-xl rounded-lg overflow-hidden transform transition"
              >
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start sm:items-center">
                      <MdLocationOn className="text-xl sm:text-2xl text-indigo-600 mr-3 sm:mr-4 mt-1 sm:mt-0" />
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          Address
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          44 Happy Residency B/H Narmada Hotel, Zadeshwar,
                          Bharuch, Gujarat 392011, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MdPhone className="text-xl sm:text-2xl text-indigo-600 mr-3 sm:mr-4" />
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          Phone
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          +076986 60715
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MdEmail className="text-xl sm:text-2xl text-indigo-600 mr-3 sm:mr-4" />
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          Email
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          info@mouldairscientific.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white shadow-xl rounded-lg overflow-hidden transform transition"
              >
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                    Follow Us
                  </h2>
                  <div className="flex justify-center space-x-3 sm:space-x-4">
                    {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                      (Icon, index) => (
                        <motion.a
                          key={index}
                          href="#"
                          className="bg-indigo-600 text-white p-2 sm:p-3 rounded-full hover:bg-indigo-700 transition duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="text-lg sm:text-xl" />
                        </motion.a>
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white shadow-xl rounded-lg overflow-hidden transform transition"
              >
                <div className="aspect-w-16 aspect-h-9 h-[300px] sm:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14825.231225323734!2d73.0288011!3d21.7295895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f8b428ea21a85%3A0xb6a14a7dfb8db901!2sMouldAir%20Scientific%20%26%20Lab%20Equipments!5e0!3m2!1sen!2sin!4v1684659417317!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
