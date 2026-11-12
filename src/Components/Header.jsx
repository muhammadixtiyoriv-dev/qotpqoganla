import React from 'react'
import logo from '../assets/logo.png'
import row from '../assets/row.png'
import app from '../assets/app.png'
import laptop from '../assets/laptop.png'
import google from '../assets/google.png'
import avast from '../assets/avast.png'
import ebay from '../assets/ebay.png'
import pay from '../assets/pay.png'
import spot from '../assets/spot.png'

const Header = () => {
  return (
    <div>
        <header className='w-[1440px] h-[100%] '>
        <nav className='w-[1155px] h-[57px] flex justify-around items-center mt-[35px] ml-[227px]'>
            <div className='flex w-[147px] h-[30px] justify-between'>
            <h1 className='text-[rgba(36,220,159,1)] text-[20px] font-semibold '>SOFT POINT</h1>
            </div>
            <ul className='flex justify-evenly items-center gap-[53px] text-[rgba(2,18,6,1)] text-[18px] font-normal'>
                <li>Feature</li>
                <li>Download</li>
                <li>Pricing</li>
            </ul>
            <div className='flex gap-[23px] items-center'>
            <p className='text-[rgba(2,18,6,1)] text-[18px] font-medium'>Login</p>
            <button className='text-[rgba(255,255,255,1)] text-[18px] font-medium w-[129px] h-[57px] bg-[rgba(244,69,69,1)] rounded-[6px]'>Sign up</button>
            </div>
        </nav>

        <div className='mt-[157px] ml-[226px] flex justify-between items-center'>

          <div className="">
            <h1 className="text-[54px] text-[rgba(2,18,6,1)] font-semibold mt-[]">Develop Your Life <br /> With <span className='text-[rgba(36,220,159,1)]'>One Step...</span></h1>
            <p className="text-[21px] text-[rgba(2,18,6,1)] font-normal mt-[25.4px]">Pushing the possibilities of the internet. Good for <br /> the last software. Make it A software night.</p> 
            <div className='flex items-center w-[472px] h-[65px] gap-[176px] mt-[30px]'>
            <input type="text" placeholder='Enter your email'  className='w-[146px] h-[27px]'/>
            <button className='text-[21px] text-[rgba(255,255,255,1)] font-medium w-[120px] h-[53px] bg-[rgba(244,69,69,1)] rounded-[6px]'>Send</button>
            </div>
            <img src={app} alt="" className='mt-[35px]'/>
          </div>

          <div className="w-[746px] h-[440px]">
            <img src={laptop} alt="" className="" /> 
            
          </div>
        </div>

        <div className="w-[1440px] h-[163px]  flex justify-around items-center ml-[80px]">
          <img src={google} alt="" className="w-[170px] h-[57px]" />
          <img src={avast} alt="" className="w-[170px] h-[54px]" />
          <img src={ebay} alt="" className="w-[126px] h-[53px]" />
          <img src={pay} alt="" className="w-[170px] h-[43px]" />
          <img src={spot} alt="" className="w-[170px] h-[49px]" />
        </div>
        </header>
    </div>
  ) 
}

export default Header