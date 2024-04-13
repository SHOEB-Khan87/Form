import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faL, fas } from "@fortawesome/free-solid-svg-icons"
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import { Link } from 'react-router-dom';
import Sixth from './Sixth'
import { useSelector } from 'react-redux'
function Form() {
  let state = useSelector(state => state.reducer)
  let [progress, setProgress] = useState(20)
  let [page, setPage] = useState(1)
  let prev = () => {
    if (progress === 20) {

    } else {
      setProgress(progress => progress - 20)
      setPage(pre => pre - 1)
    }

  }

  let next = () => {
    setProgress(progress => progress + 20)
    setPage(nex => nex + 1)
  }
  let DisplayPage = () => {
    if (page == 1) {
      return <First />
    } else if (page == 2) {
      return <Second />
    } else if (page == 3) {
      return <Third />
    } else if (page == 4) {
      return <Fourth />
    } else if (page === 5) {
      return <><Fifth /> </>
    }
  }

  return (
    <div className='max-w-[1400px]  mt-16 mx-auto'>
      <div className='flex relative  mx-4  items-center'>
        {progress === 20 ? <div></div> : <div className='absolute'>
          <button disabled={progress === 20} onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></button>
        </div>}
        <div className='w-full h-[5px]rounded bg-gray-400 ml-4'>
          <div className='h-[5px] bg-green-600 transition-width rounded duration-1000 ease-in-out' style={{ width: `${progress}%` }}>  </div>
        </div>
      </div>

      <div>
        {DisplayPage()}
      </div>

      <div className='flex  mt-10 justify-center mb-8' >
        {page === 5 ? <Link to="/SIxth" className='bg-black text-white py-[5px] px-6 rounded-[8px]' > <button onClick={next}>Continue</button></Link> :
          <button disabled={state === false} className={`bg-black ${state === false ? "bg-slate-300 " : <></>} text-white py-[5px] px-6 rounded-[8px]`} onClick={next}>Continue</button>}

      </div>
    </div>



  )
}

export default Form
