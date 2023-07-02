import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import toy from '../../../assets/toy.jpg';
import knowledge from '../../../assets/3.jpg';
import a from '../../../assets/2.jpg';
import { Helmet } from "react-helmet";

const Projects = () => {

    return (
        <div>

            <Helmet>

                <title>Portfolio | Projects</title>

            </Helmet>


            <h1 className="text-5xl py-10  font-semibold  text-center text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
             to-pink-500">

                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                                  to-pink-500  rounded-xl mb-10' style={{ fontWeight: 'bold', marginLeft: '30px' }}>

                    <Typewriter
                        words={['Projects']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </span>

            </h1>


            <div className="md:flex gap-5 md:ml-20 px-5 py-2">

                {/* ------------------------------- projects 1--------------------- */}



                <div className="card lg:card-side mb-5 ">

                    <div className="  rounded-xl  p-3 border-4 border-purple-500/100">
                        <img className="w-[300px] rounded-xl " src={toy} alt="" />
                        <h2 className="card-title font-bold text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                                  to-pink-500 pt-3">My Toy</h2>

                        <p className='font-semibold text-slate-800 p-3'>
                            • User can Sign up, Sign in, also can see toy and it’s details. <br /> <br />

                            • Users can add, update, and delete toy, here use can sale and buy toys. <br /><br />

                            • <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500">Technologies:</span> React JS
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            React-router
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            MongoDb
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            Firebase
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            CSS(Bootstrap)
                        </p>


                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-pink-500">

                                <Link
                                    to="https://github.com/taslimaakterpapia/my-toy-client-side"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Client <FaGithub />
                                </Link>
                            </button>
                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-pink-500">

                                <Link
                                    to="https://github.com/taslimaakterpapia/my-toy-server-side"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Server <FaGithub />
                                </Link>
                            </button>
                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-pink-500">

                                <Link
                                    to="https://assignment-project-e51eb.web.app/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Live Demo <BsBoxArrowInUpRight />
                                </Link>
                            </button>


                        </div>





                    </div>

                </div>
                <div className="card lg:card-side mb-5 ">

                    <div className="  rounded-xl border-4 border-purple-500/100 p-3">
                        <img className="w-[300px] rounded-lg" src={knowledge} alt="" />
                        <h2 className="card-title font-bold text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                                  to-pink-500 pt-3">Knowledge Cafe</h2>

                        <p className='font-semibold text-slate-800 p-3'>
                            • This website is about a restaurant , there are preview chef details and their recipes. <br /> <br />
                            • This website has a login and firebase authentication system. <br /> <br />

                            • <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500">Technologies: </span>
                            React JS
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            Tailwind
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            Express
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            Firebase

                        </p>


                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-pink-500">

                                <Link
                                    to="https://github.com/taslimaakterpapia/Knowledge-Cafe"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Git Link <FaGithub />
                                </Link>
                            </button>

                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-pink-500">

                                <Link
                                    to="https://symphonious-sfogliatella-b829e2.netlify.app/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Live Demo <BsBoxArrowInUpRight />
                                </Link>
                            </button>


                        </div>





                    </div>

                </div>
                <div className="card lg:card-side mb-5">

                    <div className="  rounded-xl border-4 border-purple-500/100 p-3">
                        <img className="w-[300px] rounded-lg" src={a} alt="" />
                        <h2 className="card-title font-bold text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                                  to-pink-500 pt-3">AI Universe Hub</h2>

                        <p className='font-semibold text-slate-800 p-3'>
                            • This website is about a Blog  related site. Here add Features, sort button and see more button.   <br />
                            <br />
                            • There are preview info. Click arrow btn also can see details . <br />
                            <br />
                            • <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500">Technologies: </span>
                            HTML
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            CSS
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            Bootstrap
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            Font Awesome
                            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 to-pink-500"> | </span>
                            JavaScript

                        </p>


                        <div className="card-actions justify-center">
                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-pink-500">

                                <Link
                                    to="https://github.com/taslimaakterpapia/AI-Universe-Hub"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Git Link <FaGithub />
                                </Link>
                            </button>

                            <button className="btn btn-primary bg-gradient-to-r from-indigo-600 to-pink-500">

                                <Link
                                    to="https://luxury-sprite-d93f50.netlify.app/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    Live Demo <BsBoxArrowInUpRight />
                                </Link>
                            </button>


                        </div>





                    </div>

                </div>






                {/* ---------------------done---------------------- */}




            </div>

        </div>
    );
};

export default Projects;