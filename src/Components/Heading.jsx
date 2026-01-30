import { memo } from 'react';

const Heading = (props) => {
  return (
    <div>
        <div className='w-full h-[90px] bg-[#061f3e] text-white font-bold  xl:text-5xl flex items-center justify-center mt-15 sm:text-2xl md:text-2xl lg:text-4xl'>
       {props.name}
    </div>
    </div>
  );
};

export default memo(Heading);