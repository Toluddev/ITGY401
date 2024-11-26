import { useState } from "react";
import { ChevronRight, LayoutDashboard, BookOpen, Users, BarChart2, Settings, HelpCircle, Plus, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  // { icon: LayoutDashboard, label: "Overview" },
  { icon: BookOpen, label: "Courses", path: "/courses"},
  { icon: Users, label: "Lecturers",  path: "/lecturers" },
  // { icon: BarChart2, label: "Analytics" },
  // { icon: Settings, label: "Settings" },
];

const courses = [
  { id: 1, name: "Course 101" },
  { id: 2, name: "Course 102" },
];

const lectures = [
  { id: 1, title: "Lecture 1: Introduction to the course" },
  { id: 2, title: "Lecture 2: How to write a good essay" },
  { id: 3, title: "Lecture 3: The history of the United States" },
];

const options = [
  { id: 1, label: "Assign new course" },
  { id: 2, label: "Edit lecturer info" },
  { id: 3, label: "Delete lecturer" },
];

const LecturerPortal = () => {
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
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-14 transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Add
      </button> */}

      {/* <button className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
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

      <div className="flex-1 p-4 lg:p-8 ">
        <div className="glass p-4 lg:p-8 mb-1 flex gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold mb-2">Dr. Jane Smith</h1>
            <p className="text-gray-400">janesmith@gmail.com</p>
          </div>
          <div className="flex gap-2 flex-1">
            <button 
              onClick={() => navigate('/lecturers/admin/assign-course')} 
              className="h-12 bg-blue-600 text-white py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
            <Plus size={20} />
              Assign Course
            </button>
            <button 
              onClick={() => navigate('/lecturers/admin/assign-class-content')} 
              className="h-12 bg-blue-600 text-white py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
            <Plus size={20} />
              Add Class Content
            </button>
          </div>

        </div>
        <div className="space-y-6 lg:space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Assigned courses</h2>
            <div className="space-y-2">
              {courses.map((course) => (
                <button
                  key={course.id}
                  className="w-full glass p-3 lg:p-4 flex items-center justify-between hover:bg-white/10 transition-colors text-sm lg:text-base"
                >
                  <span>{course.name}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Class content</h2>
            <div className="space-y-2">
              {lectures.map((lecture) => (
                <button
                  key={lecture.id}
                  className="w-full glass p-3 lg:p-4 flex items-center justify-between hover:bg-white/10 transition-colors text-sm lg:text-base"
                >
                  <span className="text-left">{lecture.title}</span>
                  <ChevronRight size={20} className="text-gray-400 flex-shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </section>

          {/* <section>
            <h2 className="text-xl font-semibold mb-4">Options</h2>
            <div className="space-y-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  className="w-full glass p-3 lg:p-4 flex items-center justify-between hover:bg-white/10 transition-colors text-sm lg:text-base"
                >
                  <span>{option.label}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default LecturerPortal;