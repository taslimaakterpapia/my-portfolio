import { FaFigma, FaGithub, FaReact, FaUbuntu, FaWindows } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet";

const Skill = () => {
    return (
        <div className="bg-white ">

            <Helmet>

                <title>Portfolio | Skill</title>

            </Helmet>

            <div>
                <div >

                    <div className="mx-10 gap-20 text-gray-200 mb-10">


                        <h1 className="text-5xl text-center font-semibold  md:mx-72 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                  to-pink-500  rounded-xl mb-10 ">
                            <FaReact />


                            <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                  to-pink-500  rounded-xl mb-10' style={{ fontWeight: 'bold', marginLeft: '50px' }}>

                                <Typewriter
                                    words={['SKills']}
                                    loop={false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>



                        </h1>


                        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600
                  to-pink-500 mb-2 pb-3 rounded-xl md:ml-16 md:px-5 pt-2 w-[150px]">Expertise</h2>

                        <div className="flex flex-wrap gap-3 md:ml-20">
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                Html
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                CSS
                            </span>
                            
                            
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                Bootstrap
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                React JS
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                TailwindCSS
                            </span>
                            
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                DaisyUi
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                JavaScript
                            </span>
                            
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                React-Bootstrap
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                Firebase

                            </span>

                        </div>



                    </div>
                </div>

                <div>
                    <div className="mx-10  gap-20 text-gray-200 ">
                        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600
                  to-pink-500 mb-2 pb-3 rounded-xl md:ml-16 md:px-5 pt-2 w-[200px]">Comfortable</h2>


                        <div className="flex flex-wrap gap-3 md:ml-16 md:px-5">
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                Express js
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                MongoDB
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                MySql
                            </span>




                        </div>
                    </div>
                </div>

                <div>
                    <div className="mx-10 mt-10 gap-20 text-gray-200 ">
                        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600
                  to-pink-500 mb-2 pb-3 rounded-xl md:ml-16 md:px-5 pt-2 w-[200px]">Familiar</h2>


                        <div className="flex flex-wrap gap-3 md:ml-16 md:px-5">

                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                Node
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                JWT
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                Cors
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                npm Packages
                            </span>
                            
                            <span className="bg-gradient-to-r from-indigo-600
                  to-pink-500 rounded-md hover:text-gray-100 transition px-5 py-3 text-lg font-semibold">
                                Problem solving

                            </span>




                        </div>
                    </div>
                </div>


                <div>
                    <div className="md:mx-10 mt-10 gap-20 text-gray-200 pb-10">
                        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600
                  to-pink-500 mb-2 pb-3 rounded-xl md:ml-16 px-5 pt-2 w-[400px]">Deploy Tools and Platform</h2>


                        <div className="flex flex-wrap gap-3 md:ml-16 ml-10 px-5">
                            <div className="bg-gradient-to-r from-indigo-600
to-pink-500 p-5 rounded-md">
                                <FaFigma className="text-4xl" />
                            </div>
                            <div className="bg-gradient-to-r from-indigo-600
to-pink-500 p-5 rounded-md">
                                <FaGithub className="text-4xl" />
                            </div>
                            <div className="bg-gradient-to-r from-indigo-600
to-pink-500 p-5 rounded-md">
                                <BiLogoNetlify className="text-4xl" />
                            </div>

                            <div className="bg-gradient-to-r from-indigo-600
to-pink-500 p-5 rounded-md">
                                <SiVercel className="text-4xl" />
                            </div>
                            <div className="bg-gradient-to-r from-indigo-600
to-pink-500 p-5 rounded-md">
                                <FaWindows className="text-4xl" />
                            </div>
                            <div className="bg-gradient-to-r from-indigo-600
to-pink-500 p-5 rounded-md">
                                <FaUbuntu className="text-4xl" />
                            </div>



                        </div>
                    </div>
                </div>
            </div>








        </div>
    );
};

export default Skill;