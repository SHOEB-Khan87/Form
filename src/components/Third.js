import React from 'react'
import crain from "../Assets/crain.PNG"
function Third() {
    return (
        <>
            <div className='max-w-[1000px] mx-auto'>
                <div className='flex flex-col gap-[120px] items-center mt-20 md:flex-row'>
                    <div className='relative crain h-full w-full'>
                        <img src={crain} alt='crain' style={{ objectFit: "cover", }} />
                    </div>
                    <div>
                        <p className='font-bold text-4xl center mb-8'>You're in the right place</p>
                        <p className='font-semibold w-full center text-lg'>
                            Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third