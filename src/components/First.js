import React, { useState } from 'react'
import image1 from "../Assets/image1.PNG"
import image2 from "../Assets/image1.PNG"
import image3 from "../Assets/image1.PNG"
import image4 from "../Assets/image1.PNG"
import image5 from "../Assets/image1.PNG"
import image6 from "../Assets/image1.PNG"
import { data } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { accessData } from '../Action'
function First() {
  let dispatch = useDispatch();
  let state = useSelector(state => state.reducer)
  let [border, setBorder] = useState()
  let click = (data) => {
    dispatch(accessData())
    setBorder(data)
  }
  return (
    <>
      <div className='max-w-[800px] mx-auto mt-8'>
        <div className='flex justify-center '>
          <h1 className='font-bold tracking-widest text-center text-[33px]'>Which describe you best?</h1>

        </div>
        <div>
          <p className='text-center text-xl mt-6 font-normal text-gray-600'> This will help us personalize your experience.</p>
        </div>

        <div className='flex-col  m-5' >
          {data.map((elem, id) => {
            return <div key={id} onClick={() => click(elem.id)} className={`flex ${border === elem.id ? "border-green-600" : ""} cursor-pointer items-center w-full md:w-[700px] mt-5 mx-auto p-1 gap-3 border rounded-[8px] border-gray-200 `}>
              <div>

                <img src={elem.image} alt='image' height="70px" width="70px" />
              </div>
              <div>
                <p className=''>{elem.text}</p>
              </div>
            </div>
          })}

        </div>

      </div>
    </>
  )
}

export default First