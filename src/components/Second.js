import React, { useState } from 'react'
import { data1 } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { accessData } from '../Action'

function Second() {
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
          {data1.map((elem, id) => {
            return <div key={id} onClick={() => click(elem.id)} className={`${border === elem.id ? "border-green-600" : ""} flex cursor-pointer items-center w-full md:w-[700px] mt-5 mx-auto p-1 gap-3 border rounded-[8px] border-gray-200 `}>
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

export default Second