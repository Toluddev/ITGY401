import { useState } from "react";
import { ChevronDown, Globe, LogOut, Plus, HelpCircle, Menu, X, LayoutDashboard, BookOpen, Users, BarChart2, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  // { icon: LayoutDashboard, label: "Overview" },
  { icon: BookOpen, label: "Courses", path: "/courses"},
  { icon: Users, label: "Lecturers",  path: "/lecturers" },
  // { icon: BarChart2, label: "Analytics" },
  // { icon: Settings, label: "Settings" },
];

const AssignCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLecturer, setSelectedLecturer] = useState("");
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAssign = () => {
    navigate("/lecturers");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Sidebar = ({ className = "" }) => (
    <div className={`bg-[#000] p-6 flex flex-col ${className}`}>
      <h2 className="text-xl font-semibold mb-8">Lecturer's Portal</h2>
      
      <nav className="flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveNav(item.label);
              setIsMobileMenuOpen(false);
              navigate(item.path)
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeNav === item.label
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:bg-white/5"
            }`}
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* <button 
        onClick={handleAssign} 
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Add
      </button>

      <button className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <HelpCircle size={20} />
        Help & feedback
      </button> */}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#000] flex flex-col lg:flex-row">
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#000] border-b border-white/10">
        <h2 className="text-xl font-semibold">Lecturer's Portal</h2>
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu}>
              <X size={24} className="text-white" />
            </button>
          </div>
          <Sidebar />
        </div>
      )}

      <div className="hidden lg:block lg:w-64">
        <Sidebar className="h-screen sticky top-0" />
      </div>

      <div className="flex-1">
        <div className="border border-gray-900" />
        <div className="container mx-auto px-4 py-4">
          <div className="text-gray-400 text-sm">
            Dashboard / Lecturers / Assign courses
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">
            Assign course
          </h1>

          <div className="space-y-8 max-w-xl">
            <div className="space-y-4">
              <h2 className="text-xl text-white">Select a course</h2>
              <div className="space-y-2">
                <label className="text-white">Course</label>
                <select
                  id=""
                  name=""
                  className="block w-[450px] h-[50px] rounded-[10px] bg-[#2a2f3c] text-white border border-gray-700"
                >
                  <option value="">Select a Course</option>
                  <option value="workshop">COSC 111 Programming</option>
                  <option value="conference">Math 111 Mathematics</option>
                  <option value="certification">STAT 111 Statistics</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl text-white">Select a lecturer</h2>
              <div className="space-y-2">
                <label className="text-white">Lecturer</label>
                <select
                  id=""
                  name=""
                  className="block w-[450px] h-[50px] rounded-[10px] bg-[#2a2f3c] text-white border border-gray-700"
                >
                  <option value="">Select a Lecturer</option>
                  <option value="workshop">Dr Jerry Nzewata</option>
                  <option value="conference">Dr Idowu</option>
                  <option value="certification">Dr Abel</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleAssign}
              className="w-[60px] h-[40px] md:w-auto px-6 py-3 bg-blue-600 text-white text-center align-items rounded-[10px]"
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignCourses;