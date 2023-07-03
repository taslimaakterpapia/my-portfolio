
import { Typewriter } from 'react-simple-typewriter';
import papia from '../../../assets/papia.png';
import './Home.css';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";


const Home = () => {

    const handleDownload = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "Taslima akter papia resume.pdf";
        downloadLink.download = "Taslima akter papia resume.pdf";
        downloadLink.click();
    };

    return (
        <div>
            <Helmet>
                <title>Portfolio | Home </title>
            </Helmet>

            
            <div className='pt-10'>
                <div className="lg:flex lg:space-y-0 lg:space-x-10 items-center justify-center ml-10">


                    <div className='text-Black  max-w-lg'>
                        <h1 className="text-3xl text-slate-600 font-bold pt-16 md:pt-5">Hi, I am <br /> TASLIMA AKTER PAPIA</h1>
                        <h1 className='text-3xl font-bold h-10' style={{ margin: 'auto 0' }}>
                            <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                                  to-pink-500  rounded-xl mb-10' style={{ fontWeight: 'bold' }}>

                                <Typewriter
                                    words={['WEB DEVELOPER', 'MERN STACK DEVELOPER', 'FRONT-END DEVELOPER']}
                                    loop={false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>
                        <p className="py-8 md:py-3 text-slate-600 font-semibold">To excel as a web developer by utilizing my technical expertise and creative mindset, contributing to the
                            development of user-friendly and visually captivating websites.</p>

                        <div className='md:flex md:gap-5'>
                            <Link
                                to='/about'
                                className="text-white bg-gradient-to-r from-indigo-600
                            to-pink-500 mt-2 px-3 py-2 flex items-center gap-2 rounded-md w-[180px] "
                            >
                                More About Me <FaTelegramPlane size={20} color='white' className='bg-pink-500 rounded-full  ' />
                            </Link>
                            <button
                                onClick={handleDownload}
                                className="text-white bg-gradient-to-r from-indigo-600
                            to-pink-500 mt-2 px-3 py-2 flex items-center gap-2 rounded-md  "
                            >
                                Download Resume <FaDownload />
                            </button>
                        </div>

                        <div className="flex justify-start items-center my-4 mt-4 text-purple-600/100 text-3xl mr-6">
                            <p className='text-xl md:pl-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600
                  to-pink-500'>Follow Me: </p>
                            <Link to="https://www.facebook.com/taslimapapiasunfy2/"  className='pl-3' target="_blank"><FaFacebook></FaFacebook></Link>
                            
                            <hr className="md:w-12  w-8 h-1 md:mx-4 mx-1 my-2 bg-gradient-to-r from-indigo-600
                            to-pink-500 border-0 rounded  "></hr>

                            <Link to="https://www.linkedin.com/in/taslima-akter-papia-1852a8280/" target="_blank"><FaLinkedin></FaLinkedin></Link>

                            <hr class="md:w-12  w-8 h-1 md:mx-4 mx-1 my-2 bg-gradient-to-r from-indigo-600
                            to-pink-500 border-0 rounded "></hr>


                            <Link to="https://github.com/taslimaakterpapia" target="_blank"><FaGithub></FaGithub></Link>
                            
                        </div>
                    </div>

                    <div className='relative pb-6'>

                        <img src={papia} className=" w-[350px] pt-2 pb-20 md:pt-20" />

                    </div>

                </div>


               

            </div>
            </div>




        
    );
};

export default Home;
