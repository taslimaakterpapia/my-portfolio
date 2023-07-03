import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Social = () => {
  const styles = {
    darkButton: {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease",
    },
    darkButtonHover: {
      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
        <div className="max-w-[2520px] mx-auto xl:px-80  sm:px-2 px-4">
      <div
        className="my-4 grid grid-cols-1 gap-5 md:flex md:gap-6 justify-between text-gray-200"
        id="social"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-gradient-to-r from-indigo-600
          to-pink-500 border flex items-center justify-center text-2xl py-6 font-bold  rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://github.com/taslimaakterpapia" target="_blank" className=" flex items-center gap-2 px-6">
            <FaGithub /> Github
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-gradient-to-r from-indigo-600
          to-pink-500 border flex items-center justify-center text-2xl py-6 font-bold  rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://www.linkedin.com/in/taslima-akter-papia-1852a8280/" target="_blank" className=" flex items-center gap-2 px-6">
            <FaLinkedin /> Linkedin
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-gradient-to-r from-indigo-600
          to-pink-500 border flex items-center justify-center text-2xl py-6 font-bold  rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://www.instagram.com/s.u.n.f.y/" target="_blank" className=" flex items-center gap-2 px-6">
            <FaInstagram /> Instagram
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          style={styles.darkButton}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = styles.darkButtonHover.boxShadow)
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = styles.darkButton.boxShadow)
          }
          className="w-full bg-gradient-to-r from-indigo-600
          to-pink-500 border flex items-center justify-center text-2xl py-6 font-bold  rounded-md cursor-pointer hover:shadow-md"
        >
          <Link to="https://www.facebook.com/taslimapapiasunfy2/" target="_blank" className=" flex items-center gap-2 px-6">
            <FaFacebookF /> Facebook
          </Link>
        </motion.div>
      </div>
      </div>
  );
};

export default Social;
