import React from 'react'
import assets from '../../Assets/assets'
import { IoCall } from "react-icons/io5";

const ContactSection = () => {
    return (
        <div className='py-10 px-4'>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                <div className="rounded-3xl w-full lg:w-96 h-96 overflow-hidden">
                    <img src={assets.contact_us} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='w-full lg:w-96'>
                    <h1 className="text-4xl font-bold mb-4 text-purple-900">Contact Us</h1>
                    <p className="text-lg mb-6">Have a question or suggestion? We'd love to hear from you!</p>
                    <div>
                        <p className='text-xl font-medium text-yellow-900'>Call us:</p>
                        <div className='flex items-center text-4xl text-purple-900'>
                            <IoCall /> <p className="font-semibold">+234 812 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection