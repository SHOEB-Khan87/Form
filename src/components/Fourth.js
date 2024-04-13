import React, { useState } from 'react'
import { mathPic } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { accessData } from '../Action'
function Fourth() {
    let dispatch = useDispatch();
    let state = useSelector(state => state.reducer)
    let [border, setBorder] = useState()
    let click = (data) => {
        dispatch(accessData())
        setBorder(data)
    }
    return (
        <div>
            <div className='max-w-[1400px] mx-auto'>
                <div className='flex justify-center marg0 mx-[2px] mt-24'>
                    <p className='font-bold center marg0 text-4xl'>What is your match comfort level?</p>
                </div>
                <div className='flex w-full justify-center marg0 mx-[2px] mt-6'>
                    <p className='font-semibold center marg0 text-[20px]'>choose the highest level you feel confident in -- you can always adjust later.</p>
                </div>
                <div className='w-full flex math md:justify-center gap-4 m-4'>
                    {mathPic.map((elem, id) => {
                        return <div key={id} onClick={() => click(elem.id)} className={` cursor-pointer`}>
                            <img src={elem.image} className={`${border === elem.id ? "border-green-600 border-2" : ""} border border-gray-500 rounded-[15px] p-4`} alt='math' height="200" width="200" />
                        </div>

                    })}
                </div>
            </div>

        </div>
    )
}

export default Fourth