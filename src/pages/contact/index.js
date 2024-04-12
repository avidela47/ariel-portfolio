// components
import HireMe from "../../components/HireMe";
import { WhatsappIcon } from "../../components/Icon";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] mt-10">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center xl:mb-12 sm:mb-[70px]"
          >
            Contac<span className="text-accent">tame</span>!
          </motion.h2>
          <motion.div
          className="flex items-center z-[100] xl:mb-2 sm:mb-16 xl:ml-[60px] sm:ml-2 sm:text-sm"
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
          +54 9 351 289-0110
        </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 w-full mx-auto z-50 xl:mb-0 sm:mb-16"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Nombre" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Asunto" className="input" />
            <textarea placeholder="mensaje" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="text-accent group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
      <div>
      <HireMe />      
      </div>      
    </div>    
  );
};

export default Contact;
