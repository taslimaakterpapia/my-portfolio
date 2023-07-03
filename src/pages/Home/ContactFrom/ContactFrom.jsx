
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaTelegramPlane } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet";
import phn from '../../../assets/phn.png';
import email from '../../../assets/email.png';
import address from '../../../assets/address.png';
import './ContactFrom.css';
import Swal from 'sweetalert2'



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
                Swal.fire({
                    title: 'Send',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  });
                  navigate(from, { replace: true });
                      
    }, (error) => {
        console.log(error.text);
    });
};


return (
    <div>

        <Helmet>
            <title>Portfolio | Contact </title>
        </Helmet>

        
        <div className='bg-white pt-12'>

<h1 className="about text-3xl text-center pt-5 font-semibold text-white  bg-gradient-to-r from-indigo-600
                      to-pink-500 mb-2 pb-3 rounded-xl mx-8 md:mx-52 ">GET IN TOUCH </h1>


<h1 className='text-3xl font-bold h-10 text-center py-6 pb-10' style={{ margin: 'auto 0' }}>
    <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600 
                      to-pink-500  rounded-xl ml-2' style={{ fontWeight: 'bold' }}>

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






<div className='md:px-48'>
    
<div className="w-full  md:mt-0  sm:h-[450px] lg:flex  items-center bg-smallTextColor px-4 lg:px-8 pt-8 ">


          
<form ref={form} onSubmit={sendEmail} className="w-full ">
    <div className="mb-5">
        <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            className="w-full input border-purple-700 bg-white p-3 focus:outline-none rounded-[5px]"
        />
    </div>
    <div className="mb-5">
        <input
            type="email"
            name="from_email"
            placeholder="Enter your Email"
            className="w-full input border-purple-700 bg-white p-3 focus:outline-none rounded-[5px]"
        />
    </div>
   
    <div className="mb-5 ">
        <textarea
            type="text"

            name="message"
            placeholder="Write your message"
            className="w-full py-16 input border-purple-700 bg-white p-3 focus:outline-none  rounded-[5px]"
        />
    </div>

    <button className="w-full p-3 focus:outline-none rounded-[5px]  bg-gradient-to-r from-indigo-600 to-pink-500 input border-purple-700 text-white hover:text-white font-semibold btn-outline ease-linear duration-150 mb-24 ">
        Send Message

    </button>
</form>


</div>
</div>





</div>
        </div>

    



);
};

export default ContactFrom;