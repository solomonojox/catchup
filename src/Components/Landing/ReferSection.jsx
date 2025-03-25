import React from 'react'
import assets from '../../Assets/assets'
// import { IoCall } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";

const ReferSection = () => {
    return (
        <div className='py-10 px-4'>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                <div className="relative">
                    <div className="rounded-3xl w-full lg:w-96 h-96 overflow-hidden relative">
                        <img src={assets.refer} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="absolute lg:-left-10 left-4 bottom-4 shadow-xl bg-white border flex items-center gap-4 px-6 py-3 rounded-full">
                        <FaCircleDollarToSlot className='text-4xl text-yellow-500' />
                        <p className='font-semibold text-purple-900'>Refer and Earn</p>
                    </div>
                </div>

                <div className='w-full lg:w-96'>
                    <p>CatchUp Referral Programme</p>
                    <h1 className="text-4xl font-bold mb-4 text-purple-900">Refer and Earn up to</h1>
                    <h1 className="text-4xl font-bold mb-4 text-yellow-500">₦ 10,000</h1>
                    <p className="text-lg mb-6">Refer students in primary and secondary school to learn on the uLesson app. Start earning when they subscribe!</p>
                    <button className='w-60 font-semibold bg-purple-900 hover:bg-purple-800 text-white rounded-full p-4'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default ReferSection