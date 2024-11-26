import { useState } from "react";
import { Search, LayoutDashboard, BookOpen, Users, BarChart2, Settings, HelpCircle, Plus, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: BookOpen, label: "Courses", path: "/courses"},
  { icon: Users, label: "Lecturers",  path: "/lecturers" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const data = [
  { id: 1, name: "Programming", code: "COSC 111",  createdAt: "01/01/2023" },
  { id: 2, name: "Math", code: "MTH 111",  createdAt: "01/01/2023" },
  { id: 3, name: "English", code: "GEDS 111",  createdAt: "01/01/2023" },
  { id: 4, name: "Statistics", code: "STAT 111",  createdAt: "01/01/2023" },
  { id: 5, name: "Biology", code: "SCI 111",  createdAt: "01/01/2023" },
  { id: 6, name: "Physics", code: "PHY 111",  createdAt: "01/01/2023" },
];

const LecturersTable = () => {
  const [activeNav, setActiveNav] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAssign = () => {
    navigate("/signup");
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

      <button 
        onClick={handleAssign} 
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Add
      </button>

      <button className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <HelpCircle size={20} />
        Help & feedback
      </button>
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

      <div className="flex-1 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Courses</h1>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for courses"
              className="w-full md:w-[500px] bg-[#2A2F3C] text-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Table */}
          <div className="bg-transparent rounded-lg overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-[#1E2330] border-b border-gray-700">
                <tr>
                  <th className="px-6 py-4 text-gray-400">Name</th>
                  <th className="px-6 py-4 text-gray-400">Code</th>
                  <th className="px-6 py-4 text-gray-400">Created at</th>
                  <th className="px-6 py-4 text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-gray-700 hover:bg-[#2A2F3C] transition-colors">
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4 text-gray-400">{item.code}</td>
                    <td className="px-6 py-4 text-gray-400">{item.createdAt}</td>
                    <td className="px-6 py-4">
                      <button
                        className="text-gray-400 hover:text-white"
                        onClick={() => console.log('Actions clicked', item.id)}
                      >
                        View / Edit / Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturersTable;