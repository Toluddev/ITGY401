import { useState } from "react";
import { ChevronRight, LayoutDashboard, BookOpen, Users, BarChart2, Settings, HelpCircle, Plus } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: BookOpen, label: "Courses" },
  { icon: Users, label: "Students" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Settings, label: "Settings" },
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

  return (
    <div className="min-h-screen bg-[#000] flex">
      <div className="w-64 bg-[#000] p-6 flex flex-col">
        <h2 className="text-xl font-semibold mb-8">Lecturer's Portal</h2>
        
        <nav className="flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
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

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Plus size={20} />
          Add
        </button>

        <button className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <HelpCircle size={20} />
          Help & feedback
        </button>
      </div>

      <div className="flex-1 p-8">
        <div className="glass p-8 mb-1">
          <h1 className="text-3xl font-semibold mb-2">Dr. Jane Smith</h1>
          <p className="text-gray-400">janesmith@gmail.com</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Assigned courses</h2>
            <div className="space-y-2">
              {courses.map((course) => (
                <button
                  key={course.id}
                  className="w-full glass p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
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
                  className="w-full glass p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <span>{lecture.title}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Options</h2>
            <div className="space-y-2">
              {options.map((option) => (
                <button
                  key={option.id}
                  className="w-full glass p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <span>{option.label}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LecturerPortal;