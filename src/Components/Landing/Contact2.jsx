import React from 'react';
import assets from '../../Assets/assets';

export const Contact2 = () => {
    return (
        <div>
            <div 
                style={{ backgroundImage: `url(${assets.assembly})`, backgroundPosition: '', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} 
                className='relative max-w-4xl mx-auto lg:rounded-3xl my-6 px-3 py-10 text-center h-[500px] text-white flex justify-center overflow-hidden'
            >
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-white/20 rounded-3xl"></div>

                <div className="relative w-[90%] lg:w-[80%] space-y-6 z-10">
                    <h1 className='text-4xl font-semibold'>Government + CatchUp = Societal Transformation</h1>
                    <p>Are you interested in making a change with CatchUp? CatchUp partners with government bodies to foster initiatives that contribute to societal impact through education.</p>
                    <button className='w-60 font-semibold bg-white text-black rounded-full p-4'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};
