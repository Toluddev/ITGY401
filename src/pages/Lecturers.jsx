import { Search } from "lucide-react";
import LecturersTable from "./LecturersTable";


const Lecturers = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-white">Lecturers</h1>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Create new
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          {/* <Input
            placeholder="Search for lecturers"
            className="w-full pl-10 bg-secondary/50 border-gray-700 text-white placeholder:text-gray-400"
          /> */}
        </div>

        <LecturersTable />
      </div>
    </div>
  );
};

export default Lecturers;
