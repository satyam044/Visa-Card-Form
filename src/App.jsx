import React from 'react';
import './App.css';
import worldmap from '../public/worldmap.webp';
import chippng from '../public/card-chip-800x450.png';
import visapng from '../public/Visa-Symbol.webp';
import pattern from '../public/pattern.png';

const App = () => {
  return (
    <div className='h-screen w-screen bg-[#000000] flex items-center justify-center'>
      <div className="container h-[80%] w-[80%] flex">
        <div className="c-left h-[100%] w-[25%] bg-gradient-to-tr from-[#902ae0] via-[#cb1eb5] to-[#e417a1] rounded-tl-2xl rounded-bl-2xl relative flex items-center">
          <div className='h-52 w-80 absolute left-[30%]'>
            <div className="card h-[100%] w-[100%]">
              <div className='card-inner h-[100%] w-[100%]' >
                <div className="front h-[100%] w-[100%] absolute flex flex-col justify-between items-center overflow-hidden rounded-2xl">
                  <img src={worldmap} className='absolute -z-10 brightness-50' />
                  <div className="absolute h-[100%] w-[100%] bg-gradient-to-r from-[#821fce] via-[#1e9acb] to-[#e417a1] -z-10 opacity-50"></div>
                  <div className="top w-[90%] flex justify-between items-center">
                    <img src={chippng} className='w-12 h-12 object-cover' alt="Chip" />
                    <img src={visapng} className='w-20 h-20 object-contain relative' alt="Visa" />
                  </div>
                  <div className="middle w-[90%] relative bottom-4 flex justify-center">
                    <input type="text" value="####   ####   ####   ####" className='w-[100%] bg-transparent text-white text-2xl pointer-events-none' />
                  </div>
                  <div className="bottom w-[90%] relative bottom-4 text-white flex justify-between">
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
                <div className="back h-[100%] w-[100%] absolute flex flex-col justify-between items-center overflow-hidden rounded-2xl">
                  <img src={worldmap} className='absolute brightness-50' />
                  <div className="absolute h-[100%] w-[100%] bg-gradient-to-r from-[#821fce] via-[#1e9acb] to-[#e417a1] opacity-50"></div>
                  <div className="top w-[100%] h-9 relative top-5 bg-[#0000008c] z-10"></div>
                  <div className="middle w-[100%] flex justify-center items-center z-10">
                    <img src={pattern} className='w-[80%]' alt="Pattern" />
                    <input type="text" value="***" className='text-black pointer-events-none w-[10%]' />
                  </div>
                  <div className="bottom w-[100%] h-[10%] relative bottom-2 flex justify-end z-10">
                    <img src={visapng} className='w-[30%] h-4 object-contain' alt="Visa" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right pl-40 h-[100%] w-[75%] bg-[#ece6e6] rounded-tr-2xl rounded-br-2xl">
          <div className="c-r-form h-[100%] flex flex-col">
            <div className="c-r-top mt-16 h-[40%] w-[100%] flex flex-col justify-around items-center">
              <span className='flex flex-col w-[100%]'>Card Number<input type="number" className='w-[80%] p-2 rounded-md border-2 border-[#00000032] outline-none' /></span>
              <span className='flex flex-col w-[100%]'>Card Holder <input type="text" className='w-[80%] p-2 rounded-md border-2 border-[#00000032] outline-none' /></span>
            </div>
            <div className="c-r-btm w-[80%] flex items-center justify-around">
              <span className='flex flex-col'>Expiration MM<select name="Month" className='p-1 rounded-md border-2 border-[#00000032] outline-none'></select></span>
              <span className='flex flex-col'>Expiration YY<select name="Year" className='p-1 rounded-md border-2 border-[#00000032] outline-none'></select></span>
              <span className='flex flex-col'>Cvv <input type="number"  className='p-1 rounded-md border-2 border-[#00000032] outline-none'/></span>
            </div>
            <button className='w-[80%] mt-7 p-2 text-white bg-gradient-to-r from-[#902ae0] via-[#cb1eb5] to-[#e417a1] rounded-2xl'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
