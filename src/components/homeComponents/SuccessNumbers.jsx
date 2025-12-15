import React from 'react'
import { items } from '../../constants/cons'


const SuccessNumbers = () => {
  return (
    <div className=' w-[84%] laptop:w-[90%] container flex flex-col items-center gap-7 rounded-[20px] translate-x-8 bg-gradient py-2 mr-15 
       tablet:rounded-[30px] tablet:p-0 tablet:self-center tablet:w-[50%]
      lg:h-62 lg:p-5 '>
      <div className=" flex justify-center ">
        <p className='text-[35px] text-[white] normal-futura text-center '>Our Success By The Numbers</p>
      </div>
      <div className="flex justify-around flex-col tablet:flex-wrap py-2 tablet:py-0 tablet:px-30 gap-10 tablet:gap-5! lg:gap-10 lg:flex-nowrap lg:flex-row ">
        {/* item */}
        {
          items.map((data, index) => (
            <div key={index} className={`h-36 min-w-50 max-w-70 flex flex-col items-center text-center `}>
              {/* img */}
              <img src={data.icon} className='h-9 tablet:h-7 lg:h-9 ' alt="" />
              {/* price */}
              <p className='text-[30px] laptop:text-[25px] text-[white] font-semibold mt-2 '>{data.numbers}</p>
              {/* title */}
              <p className={`text-[white] text-[18px] laptop:text-[15px] w-[90%] italic-futura ${index === 3 && "w-30! "} `}>{data.text}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default SuccessNumbers