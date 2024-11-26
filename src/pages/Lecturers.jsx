import { Search } from "lucide-react";
import { Sparkles } from "lucide-react";
import LecturersTable from "./LecturersTable";
import { useNavigate } from "react-router-dom";

const Lecturers = () => {
  const navigate = useNavigate();
  const handleAssign = () => {
    navigate("/"); 
  };
  return (
    <div className="min-h-screen bg-[#000] p-8">
      <div className="w-full mx-auto space-y-8">
        <LecturersTable />
      </div>
    </div>
  );
};

export default Lecturers;
