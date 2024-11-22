import { ChevronDown, Globe, LogOut } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../components/ui/Button";
// import { useToast } from "../components/ui/useToast";

const AssignCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLecturer, setSelectedLecturer] = useState("");
  // const { toast } = useToast();

  const handleAssign = () => {
    if (!selectedCourse || !selectedLecturer) {
      // toast({
      //   title: "Error",
      //   description: "Please select both a course and a lecturer",
      //   variant: "destructive",
      // });
      return;
    }

    console.log("Assigning course:", selectedCourse, "to lecturer:", selectedLecturer);
    // toast({
    //   title: "Success",
    //   description: "Course assigned successfully",
    // });
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <nav className="bg-secondary/50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-white font-semibold text-lg">Acme University</div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Globe className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <LogOut className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4">
        <div className="text-gray-400 text-sm">
          Dashboard / Lecturers / Assign courses
        </div>
      </div>
=
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">
          Assign courses to lecturer
        </h1>

        <div className="space-y-8 max-w-xl">
          <div className="space-y-4">
            <h2 className="text-xl text-white">Select a course</h2>
            <div className="space-y-2">
              <label className="text-gray-400">Course</label>
              <Select onValueChange={setSelectedCourse} value={selectedCourse}>
                <SelectTrigger className="w-full bg-[#2A2F3C] border-0 text-white">
                  <SelectValue placeholder="Search for a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cs101">CS101 - Introduction to Programming</SelectItem>
                  <SelectItem value="cs102">CS102 - Data Structures</SelectItem>
                  <SelectItem value="cs103">CS103 - Algorithms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl text-white">Select a lecturer</h2>
            <div className="space-y-2">
              <label className="text-gray-400">Lecturer</label>
              <Select onValueChange={setSelectedLecturer} value={selectedLecturer}>
                <SelectTrigger className="w-full bg-[#2A2F3C] border-0 text-white">
                  <SelectValue placeholder="Search for a lecturer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="bob">Bob Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleAssign}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Assign
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssignCourses;