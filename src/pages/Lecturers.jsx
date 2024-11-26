import { Search } from "lucide-react";
import { Sparkles } from "lucide-react";
import LecturersTable from "./LecturersTable";
import { useNavigate } from "react-router-dom";

const Lecturers = () => {
  const navigate = useNavigate();
  const handleAssign = () => {
    navigate("/assign"); 
  };
  return (
    <div className="min-h-screen bg-[#000] p-8">
      <div className="w-full mx-auto space-y-8">
        <div className="flex justify-between items-center">
        <Sparkles className="absolute left-3 top-[44px] text-gray-400 h-4 w-4" />
          <h1 className="text-[20px] font-semibold text-white">Lecturer's Portfolio</h1>
          <div className="flex relative gap-10">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            placeholder="Search"
            className="w-[300px] h-[40px] rounded-[10px] pl-10 bg-[#2A2F3C] border-gray-700 text-white placeholder:text-gray-400"
          />
           <button  onClick={handleAssign} className=" bg-[#2A2F3C] p-[7px] rounded-[8px] text-white hover:bg-primary/90 transition-colors">
            Create new
          </button>
          <div className="w-[40px] h-[40px] bg-[#2a2f3c] rounded-full items-center"></div>
        </div>
        </div>
        <div className="border border-gray-900 "/>
        <LecturersTable />
      </div>
    </div>
  );
};

export default Lecturers;
