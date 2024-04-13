import React from 'react'
import stars from "../Assets/stars.PNG"
import hulk from "../Assets/hulk.PNG"
function Fifth() {
    return (
        <>
            <div className='max-w-[1400px] mx-auto'>
                <div className='flex gap-[10px] hulk items-center mt-20'>
                    <div className='relative hulkcenter w-full h-full'>
                        <img src={hulk} alt='hulk' className='object-fill marg0 ml-[120px]' />
                    </div>
                    <div className=' w-full'>
                        <p className='font-bold hulktext text-4xl'>You're on your way!</p>
                        <div className='stcenter'>
                              <img src={stars}  height="100px" />
                        </div>
                      
                        <p className='mt-3 font-medium hulktext text-lg tracking-wide'>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that
                            I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
                        <p className='mt-8 font-medium hulktext text-xl'>-- Jacob S.</p>

                    </div>
                </div>

            </div>
        </>
    )
}




export default Fifth