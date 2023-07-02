import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaTelegramPlane } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet";

import './ContactFrom.css';

const ContactFrom = () => {



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_70ciwpu',
            'template_s1zzp5g',
            form.current,
            'CfqXy9QSIXtOoRhc2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>

            <Helmet>
                <title>Portfolio | Contact </title>
            </Helmet>
            
            <form ref={form} onSubmit={sendEmail} >
                <div className="hero min-h-screen bg-white ">
                    <div className="hero-content flex flex-col lg:flex-row md:mt-5 ">


                        <div className="card flex-shrink-0 w-full max-w-sm drop-shadow-2xl bg-white ">

                            <h1 className="about text-3xl text-center pt-5 font-semibold text-white  bg-gradient-to-r from-indigo-600
                                  to-pink-500 mb-2 pb-3 rounded-xl">GET IN TOUCH </h1>


                            <h1 className='text-3xl font-bold h-10' style={{ margin: 'auto 0' }}>
                                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                                  to-pink-500  rounded-xl mb-10 ml-14' style={{ fontWeight: 'bold' }}>

                                    <Typewriter
                                        words={['Contact Me']}
                                        loop={false}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span>
                            </h1>

                            <div className="w-[200] ">
                                <div className="form-control mb-2 ">
                                    <input type="text" placeholder="Name" name="user_name" className="input border-purple-700 bg-white w-[300px]" />
                                </div>

                                <div className="form-control mb-2">

                                    <input type="text" placeholder="Email" name="user_email" className="input border-purple-700 bg-white" />
                                </div>

                                <div className="form-control">
                                    <input type="text" placeholder="Message" name="message" className="input  border-purple-700 bg-white py-12 " />
                                </div>

                                <div className="form-control mt-3 items-center">
                                    <button className="btn btn-outline btn-secondary rounded-full hover:bg-gradient-to-r from-indigo-500 to-pink-500  w-[200px]">Send Message

                                        <FaTelegramPlane size={40} color='white' className='bg-pink-500 rounded-full p-2 ' />

                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </form>



        </div>
    );
};

export default ContactFrom;