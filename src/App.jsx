// import { Toaster } from "./components/ui/toaster";
// import { Toaster as Sonner } from "./components/ui/sonner";
// import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Lecturers from "./pages/Lecturers";
import Courses from "./pages/Courses";
import AddCourse from "./pages/./AddCourse";
import AssignCourses from "./pages/AssignCourses";
import Landing from "./pages/Landing";
import Welcome from "./pages/Welcome";
import Academic from "./pages/Academic";
import LecturerPortal from "./pages/LecturerPortal";
import AddClassContent from "./pages/AddClassContent";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider>
      <Toaster />
      <Sonner /> */}
      <BrowserRouter>
        <Routes>
        <Route default path="/login" element={<Welcome />} />
          <Route path="/add-lecturer" element={<Index />} />
          {/* <Route path="/academic" element={<Academic />} /> */}
          <Route path="/lecturers/:lecturerId" element={<Landing />} />
          <Route path="/lecturers" element={<Lecturers />} />
          <Route path="/lecturers/admin/assign-course" element={<AssignCourses />} />
          <Route path="/lecturers/admin/assign-class-content" element={<AddClassContent />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/add" element={<Academic />} />

          <Route path="/lecturers/admin/view" element={<LecturerPortal />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;