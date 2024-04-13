import React, { useState } from 'react'
import circle from "../Assets/circle.PNG"
import machine from "../Assets/machine.PNG"
import { Link } from 'react-router-dom'
function Sixth() {
  let [show, setShow] = useState(false)
  setTimeout(() => {
    setShow(true)
    console.log("chal gaya")
  }, 5000)


  const DisplayLast = () => {
    return (
      <>
        <div className='max-w-[900px] mx-auto'>
          <div className='flex justify-center'>
            {/* IF WE  USE LINK SO THAT OUR PAGE WILL NOT RELOAD
          <Link to="/" ><button hre className='bg-green-400 px-4 py-[2px] mt-10 rounded-[15px]'>Home</button></Link> */}
            {/* but i have use a tag so that my page will reload */}
            <a href="/" ><button hre className='bg-green-400 px-4 py-[2px] mt-10 rounded-[15px]'>Home</button></a>
          </div>
          <div className='flex justify-center mt-[150px]'>
            <p className='font-bold text-[42px] center tracking-wide'>
              Learning paths based on your answers
            </p>
          </div>
          <div className='flex justify-center'>
            <p className='text-lg text-gray-500 center tracking-widest font-medium mt-5'>
              Choose one to get started. You can switch anytime.

            </p>
          </div>
          <div className='flex gap-5 mx-4 card mt-10'>
            <div className='flex items-center cards border border-gray-300 relative rounded-[10px] p-5'>

              <div className='absolute bg-yellow-400 tooltip left-[40%] rounded-[50px] py-[1px] px-2 -top-[10%]'>
                Most Popular
              </div>
              <div>
                <p className='botspace'>
                  Foundational Math Build<br />
                  your foundational skills in<br /> algebra, geometry, and<br /> probability.
                </p>
              </div>
              <div>
                <img src={machine} height="150px" width="150px" alt='mach' />
              </div>
            </div>
            <div className='cards'>
              <div className='flex items-center cards border border-gray-300 rounded-[10px] p-5'>
                <div>
                  <p className='botspace'>
                    Mathematical Thinking<br />
                    Build your foundational<br /> skills in algebra, geometry,<br /> and probability.
                  </p>
                </div>
                <div>
                  <img src={machine} height="150px" width="150px" alt='mach' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }


  return (
    <>

      <div className='max-w-[900px] mx-auto'>

        {show === false ? <>  <div className='flex justify-center mt-[200px]'>
          <img src={circle} height="150px" width="150px" alt='circle' />
        </div>
          <div className='flex justify-center text-center '>
            <p className='font-bold text-3xl '>Finding learning path recommendations for you based on<br /> your responses</p>
          </div></> : <>{DisplayLast()}</>}
      </div>


    </>
  )
}

export default Sixth