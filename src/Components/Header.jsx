import { memo, useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <header className="fixed top-0 left-0 w-full h-[100px] bg-[#fbf5df] shadow-2xl z-50 flex items-center px-4 md:px-10">
        
        
        <div className="flex items-center gap-3">
          
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

         
        </div>

        
        <nav className="hidden md:flex gap-8 font-semibold ml-10">
          <a className="hover:border-b-2">Home</a>
          <a className="hover:border-b-2">About</a>
          <a className="hover:border-b-2">Projects</a>
          <a className="hover:border-b-2">Services</a>
          <a className="hover:border-b-2">Career</a>
        </nav>

        <div className="flex-1" />

        
        <div className="hidden sm:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] md:w-[350px] h-[40px] border rounded-l-full px-4 text-sm"
          />
          <button className="w-[50px] h-[40px] bg-[#1c4d74] rounded-r-full flex items-center justify-center">
            <Search className="text-white w-5 h-5" />
          </button>
        </div>
      </header>

      
      {open && (
        <div className="fixed top-[80px] left-0 w-full bg-[#fbf5df] shadow-lg z-40 md:hidden">
          <nav className="flex flex-col items-center gap-6 py-6 font-semibold">
            <a onClick={() => setOpen(false)}>Home</a>
            <a onClick={() => setOpen(false)}>About</a>
            <a onClick={() => setOpen(false)}>Projects</a>
            <a onClick={() => setOpen(false)}>Services</a>
            <a onClick={() => setOpen(false)}>Career</a>
          </nav>
        </div>
      )}

      
      <div className="pt-[80px]" />
    </>
  );
};

export default memo(Header);
