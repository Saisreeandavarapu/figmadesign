import { memo } from 'react';
import Heading from './Heading';

const Services = () => {
  return (
    <div>
     
    <div className='bg-white w-full h-screen'>
    <div className='grid grid-cols-3 pt-10 ps-20 pr-20 pl-50'>
        <div className='w-[250px] h-[340px] border-2 rounded-xl border-gray-400 relative'>
            <img src="image.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Building Constructions
            </div>
            <div className='text-center pt-5'>
                "From vision to reality,
                    we construct your dreams."      
            </div>
            <div className='w-[150px] h-[30px] bg-[#1d3a76] rounded-md text-white text-center absolute top-[95%] right-[20%]'>View more</div>
        </div>
        <div className='w-[250px] h-[340px] border-2 rounded-xl border-gray-400 relative'>
            <img src="image copy.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
               Gated Communities
            </div>
            <div className='text-center pt-5'>
                "From vision to reality,
                    we construct your dreams."      
            </div>
            <div className='w-[150px] h-[30px] bg-[#1d3a76] rounded-md text-white text-center absolute top-[95%] right-[20%]'>View more</div>
        </div>
        <div className='w-[250px] h-[340px] border-2 rounded-xl border-gray-400 relative'>
            <img src="image copy 2.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Apartment Development
            </div>
            <div className='text-center pt-5'>
                "From vision to reality,
                    we construct your dreams."      
            </div>
            <div className='w-[150px] h-[30px] bg-[#1d3a76] rounded-md text-white text-center absolute top-[95%] right-[20%]'>View more</div>
        </div>
    </div>
    <div className='grid grid-cols-3 ps-20 pr-20 pt-15 pl-50'>
        <div className='w-[250px] h-[340px] border-2 rounded-xl border-gray-400 relative'>
            <img src="image copy 3.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Factory Constructions
            </div>
            <div className='text-center pt-5'>
                "From vision to reality,
                    we construct your dreams."      
            </div>
            <div className='w-[150px] h-[30px] bg-[#1d3a76] rounded-md text-white text-center absolute top-[95%] right-[20%]'>View more</div>
        </div>
        <div className='w-[250px] h-[340px] border-2 rounded-xl border-gray-400 relative'>
            <img src="image copy 4.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
               Renovation
            </div>
            <div className='text-center pt-5'>
                "From vision to reality,
                    we construct your dreams."      
            </div>
            <div className='w-[150px] h-[30px] bg-[#1d3a76] rounded-md text-white text-center absolute top-[95%] right-[20%]'>View more</div>
        </div>
        <div className='w-[250px] h-[340px] border-2 rounded-xl border-gray-400 relative'>
            <img src="image copy 5.png" alt="" />
            <div className='bg-[#def1ff] text-center font-medium text-lg p-1'>
                Map Projects
            </div>
            <div className='text-center pt-5'>
                "From vision to reality,
                    we construct your dreams."      
            </div>
            <div className='w-[150px] h-[30px] bg-[#1d3a76] rounded-md text-white text-center absolute top-[95%] right-[20%]'>View more</div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default memo(Services);