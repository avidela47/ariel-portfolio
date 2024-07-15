import { useState } from "react";
import emailjs from "emailjs-com";
import HireMe from "../../components/HireMe";
import { WhatsappIcon, WhatsappIconQr } from "../../components/Icon";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] mt-10">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center xl:mb-12 sm:mb-[70px]"
          >
            Contac<span className="text-accent">tame</span>!
          </motion.h2>
        
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-4 w-full mx-auto z-50 xl:mb-0 sm:mb-[60px]"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                className="input"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto"
                className="input"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
              className="textarea"
              required
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="text-accent group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
        <motion.div
          className="flex items-center xl:mb-2 sm:mb-1 xl:ml-[70px] sm:ml-2 sm:text-[10px] xl:text-lg xl:z-[30]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.a
            href="https://api.whatsapp.com/send?phone=3512890110&text=Hola"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 mr-3"
          >
            <WhatsappIcon className="flex items-center justify-center" />
          </motion.a>
          351-289-0110
        </motion.div> 
      </div>
      <div>
        <HireMe />
      </div>
    </div>
  );
};

export default Contact;
