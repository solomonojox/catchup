import React from 'react'
import assets from '../../Assets/assets';

const DownloadSection = () => {
    return (
        <div>
            <div className='bg-purple-900 text-white lg:rounded-3xl max-w-4xl mx-auto flex flex-col gap-10 items-center my-10 px-6 md:px-10 py-20 md:text-center relative overflow-hidden'>
                <h1 className='text-3xl font-semibold text-white w-[70%]'>Download the learning app for <span className='text-yellow-500'>better school grades</span></h1>
                <div className="flex gap-4 items-center flex-col md:flex-row">
                    <button className='bg-white hover:bg-gray-100 h-12 w-60 lg:w-auto text-purple-900 font-semibold px-6 py-3 rounded-full'>Sign Up on Web</button>
                    <button className='bg-white hover:bg-gray-100 text-gray-900 w-60 lg:w-40 h-12 py-3 rounded-full flex gap-2 justify-center items-center'>
                        <img src={assets.playstore} alt="" className='w-4' />
                        <div>
                            <p className='text-[8px]'>Download on</p>
                            <p className='font-semibold text-xs'>Google Play</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection