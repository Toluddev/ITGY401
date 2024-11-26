import { useState } from "react";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  BarChart2, 
  Settings, 
  HelpCircle, 
  Plus, 
  Menu, 
  X, 
  Upload 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: BookOpen, label: "Courses" },
  { icon: Users, label: "Students" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const App = () => {
  const [activeNav, setActiveNav] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAdd = () => {
    navigate("/add-faculty");
  };

  const Sidebar = ({ className = "" }) => (
    <div className={`bg-[#000] p-6 flex flex-col ${className}`}>
      <h2 className="text-xl font-semibold mb-8">Faculty Portal</h2>

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
        onClick={handleAdd} 
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Add Faculty
      </button>

      <button className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <HelpCircle size={20} />
        Help & feedback
      </button>
    </div>
  );

    return (
      <div className="flex-1 p-4 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Add Faculty</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Faculty Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#2A2F3C] text-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium mb-1"
              >
                Department
              </label>
              <input
                type="text"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                className="w-full bg-[#2A2F3C] text-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#2A2F3C] text-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-1">
                Faculty Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full bg-[#2A2F3C] text-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };


  // return (
  //   <div className="flex min-h-screen">
  //     <button
  //       className="lg:hidden p-4 bg-[#000] text-white fixed z-50"
  //       onClick={toggleMobileMenu}
  //     >
  //       {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
  //     </button>

  //     <Sidebar
  //       className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-[250px] lg:w-[300px] z-40 ${
  //         isMobileMenuOpen ? "block" : "hidden"
  //       } lg:block`}
  //     />

  //     <FacultyForm />
  //   </div>
  // );
export default App;
