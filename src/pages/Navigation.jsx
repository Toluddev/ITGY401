import { Settings, Sun } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-primary rounded" />
          <span className="text-white font-semibold text-lg">
            University of California, San Francisco
          </span>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">People</a>
          <a href="#" className="text-gray-300 hover:text-white">Departments</a>
          <a href="#" className="text-gray-300 hover:text-white">Schools</a>
          <a href="#" className="text-gray-300 hover:text-white">Programs</a>
          <a href="#" className="text-gray-300 hover:text-white">Courses</a>
          <a href="#" className="text-gray-300 hover:text-white">Academic Calendar</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white">
            <Settings className="w-5 h-5" />
          </button>
          {/* <button className="text-gray-300 hover:text-white">
            <Sun className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;