import { memo } from 'react';
import Heading from './Heading';

const Hiring = () => {
  return (
    <div>
    <Heading name="WE ARE HIRING"/>
    <section className='bg-white w-full h-auto xl:flex xl:justify-around sm:grid sm:grid-cols-1 md:grid-cols-2 '>
      <img src="/image copy 29.png" alt="" className='xl:w-[650px] xl:h-[650px] ps-10 pt-20 w-[400px] h-[400px]'/>
      <div className='text-[#d97f61] xl:text-6xl font-bold p-20 xl:leading-20 xl:pt-40 tracking-wide text-2xl'>"Ready to make your
mark in construction?
<span className='text-[#455A64]'>Apply today</span> and
let’s build together!"</div>
    </section>
    <Heading name="OPENING POSITIONS"/>
    <section className='bg-white h-auto w-full'>
    <div className='xl:flex xl:justify-around xl:pt-20 sm:grid sm:grid-cols-1 p-30 md:grid-cols-2'>
      <div className='w-[280px] h-[400px] '>
        <img src="/image copy 30.png" alt="" className='w-' />
        <hr className='border-dashed mt-5'/>
       <ul className=''>
        <li className='text-xl leading-10'>
         <span className='font-semibold'>Position : </span> Quality Engineer
        </li>
         <li className='text-xl leading-10'>
         <span className='font-semibold'>Experience : </span>  0 - 2 Year’s
        </li> <li className='text-xl leading-10'>
         <span className='font-semibold'>Location  : </span> Visakhapatnam
        </li>
       </ul>
      </div>
      <div className='w-[280px] h-[400px]'>
        <img src="/image copy 31.png" alt="" className='w-' />
        <hr className='border-dashed mt-5'/>
       <ul className=''>
        <li className='text-xl leading-10'>
         <span className='font-semibold'>Position : </span> Safety Engineer
        </li>
         <li className='text-xl leading-10'>
         <span className='font-semibold'>Experience : </span>  0 - 2 Year’s
        </li> <li className='text-xl leading-10'>
         <span className='font-semibold'>Location  : </span> Visakhapatnam
        </li>
       </ul>
      </div>
      <div className='w-[280px] h-[400px] '>
        <img src="/image copy 32.png" alt="" className='w-' />
        <hr className='border-dashed mt-5'/>
       <ul className=''>
        <li className='text-xl leading-10'>
         <span className='font-semibold'>Position : </span> Building Supervisor
        </li>
         <li className='text-xl leading-10'>
         <span className='font-semibold'>Experience : </span>  0 - 2 Year’s
        </li> <li className='text-xl leading-10'>
         <span className='font-semibold'>Location  : </span> Visakhapatnam
        </li>
       </ul>
      </div>
      <div className='w-[280px] h-[400px] '>
        <img src="/image copy 33.png" alt="" className='w-' />
        <hr className='border-dashed mt-5'/>
       <ul className=''>
        <li className='text-xl leading-10'>
         <span className='font-semibold'>Position : </span> Building Engineer
        </li>
         <li className='text-xl leading-10'>
         <span className='font-semibold'>Experience : </span>  0 - 2 Year’s
        </li> <li className='text-xl leading-10'>
         <span className='font-semibold'>Location  : </span> Visakhapatnam
        </li>
       </ul>
      </div>
    </div>
    </section>
    <Heading name="APPLY FOR THE POSTION"/>
    <section className='w-full h-auto bg-white p-20'>
    <div className='xl:flex xl:gap-50 grid sm:grid-cols-1 md:grid-cols-2'>
      <input type="text" placeholder='First Name' className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2' />
       <input type="text" placeholder='Middle Name' className='xl:w-1/2 xl:mt-0 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2 md:ms-10' />
        <input type="text" placeholder='Last Name' className='xl:w-1/2 xl:mt-0 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2' />
    </div>
     <div className='xl:flex xl:gap-50 mt-10 grid sm:grid-cols-1 md:grid-cols-2'>
      <input type="date" placeholder='D.O.B' className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-10  rounded-sm w-full m-2' />
      <select name="" id="" className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2 md:ms-10' >
        <option value="0">Gender</option>
        <option value="1">Female</option>
        <option value="2">Male</option>
        <option value="3">others</option>
      </select>
        <input type="text" placeholder='Contact No' className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2 ' />
    </div>
     <div className='xl:flex xl:gap-50 mt-10 grid sm:grid-cols-1 md:grid-cols-2'>
      <input type="text" placeholder='Email' className='xl:w-1/4 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2 ' />
      <textarea name="" id="" placeholder='Message' className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-30 rounded-sm w-full m-2 md:ms-10' ></textarea>     
    </div>
      <div className='text-3xl mt-5'>Education</div>
    <div className='xl:flex xl:gap-50 mt-10 grid sm:grid-cols-1 md:grid-cols-2'>
    
      <input type="text" placeholder='Qualification' className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2' />
       <input type="text" placeholder='Year of Passout' className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2 md:ms-10' />
        <input type="text" placeholder='Stream' className='xl:w-1/2 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full m-2' />
    </div>
    <div className='text-3xl mt-5'>Apply For</div>
    <div className='xl:flex xl:gap-50 mt-10 grid sm:grid-cols-1 md:grid-cols-2'>
    
      <select name="" id="" className='xl:w-1/4 text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm w-full' >
        <option value="0">Positions</option>
        <option value="1">j</option>
        <option value="2">Q</option>
        <option value="3">W</option>
      </select>
      <div className='flex  m-2 md:ms-10'>
      <div className='w-200px h-10 bg-gray-500 text-white/80 p-1 rounded-l-sm' >Upload</div>  <input type="file" placeholder='Stream' className=' text-gray-600 px-5 border-[1px] border-gray-500 h-10 rounded-sm border-l-0' /></div>
    </div>
    <div className='text-center'>
    <button className='w-[200px] h-10 text-white uppercase bg-[#17AAA3] rounded-full font-semibold mt-10'>Submit</button></div>
    </section>
    </div>
  );
};

export default memo(Hiring);