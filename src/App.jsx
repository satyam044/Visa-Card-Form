import React from 'react'
import worldmap from '../public/worldmap.webp'
import chippng from '../public/card-chip-800x450.png'
import visapng from '../public/Visa-Symbol.webp'

const App = () => {
  return (
    <div className='h-screen w-screen bg-[#0a1e30] flex items-center justify-center'>
      <div className="container h-[80%] w-[80%] flex">
        <div className="c-left h-[100%] w-[25%] bg-gradient-to-tr from-[#902ae0] via-[#cb1eb5] to-[#e417a1] rounded-tl-2xl rounded-bl-2xl relative flex items-center">
          <div className='h-52 w-80 absolute left-[30%] flex flex-col justify-between items-center z-10'>
            <img src={worldmap} className='absolute -z-10 rounded-2xl brightness-50' />
            <div className="absolute h-[103%] w-[100%] rounded-2xl bg-gradient-to-r from-[#821fce] via-[#1e9acb] to-[#e417a1] -z-10 opacity-50"></div>
            <div className="top w-[90%] flex justify-between items-center">
              <img src={chippng} className='w-12 h-12 object-cover' />
              <img src={visapng} className='w-20 h-20 object-contain relative ' />
            </div>
            <div className="middle w-[90%] relative bottom-2 flex justify-center">
              <input type="text" value="####   ####   ####   ####" className='w-[100%] bg-transparent text-white text-2xl pointer-events-none' />
            </div>
            <div className="bottom w-[90%] relative bottom-2 text-white flex justify-between">
              <div className="cardholder">
                <p className='text-xs'>Card Holder</p>
                <p>Full Name</p>
              </div>
              <div className="expires">
                <p className='text-xs'>Expires on</p>
                <p>MM / YY</p>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right h-[100%] w-[75%] bg-[#ece6e6] rounded-tr-2xl rounded-br-2xl"></div>
      </div>
    </div>
  )
}

export default App