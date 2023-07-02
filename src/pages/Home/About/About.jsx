import './About.css'
import papia from '../../../assets/papia.png';
import Social from '../../Shared/Social/Social';
import { FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet";


const About = () => {


    const handleDownload = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "Taslima akter papia resume.pdf";
        downloadLink.download = "Taslima akter papia resume.pdf";
        downloadLink.click();
    };

    return (
        <div className='pb-1'>

            <Helmet>

                <title>Portfolio | About </title>

            </Helmet>


            <h1 className="about text-5xl text-center pt-6 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600
             to-pink-500">
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                                  to-pink-500  rounded-xl mb-10' style={{ fontWeight: 'bold', marginLeft: '30px' }}>

                    <Typewriter
                        words={['About Me']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </span>

            </h1>



            <div className=' md:flex mx-5 md:mx-3'>


                <img className='w-[300px] md:ml-8 ' src={papia} alt="" />




                <div className='mx-6 mt-3 md:mt-20 md:mr-10 bg-gradient-to-r from-indigo-600
                      to-pink-500 p-4 rounded-lg text-white'>


                    <motion.div
                        variants={fadeIn("bottom", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.1 }}


                    >

                        <p >Hi, <br /> I am Taslima Akter Papia, a frontend developer specializing in the MERN stack. I am also a Masters student in the Fisheries department. I love creating visually appealing and user-friendly websites that leave a lasting impression. With expertise in HTML, CSS, JavaScript, and React.js, I craft seamless interfaces for an optimal user experience. Let's collaborate and bring your ideas to life!
                        </p>

                        <button
                            onClick={handleDownload}
                            className="bg-pink-600 mt-2 px-3 py-2 flex items-center gap-2 rounded-md hover:bg-purple-700 transition duration-300 shadow-md hover:text-white "
                        >
                            Download Resume <FaDownload />
                        </button>

                    </motion.div>
                </div>


            </div>


            <Social></Social>




        </div >
    );
};

export default About;