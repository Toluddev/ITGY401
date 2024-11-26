import { useState } from "react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// import { useToast } from "../components/ui/useToast";
const FacultyForm = () => {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    hobbies: "",
    officeNumber: "",
    homeAddress: "",
    email: "",
    phoneNumber: "",
    profileLink: "",
    publicationLink: "",
    professionalDevelopment: "",
    continuingEducation: "",
    honors: "",
    awards: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Success",
      description: "Faculty member added successfully",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value, name) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const handleAssign = () => {
    navigate("/lecturers");
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-2 cursor-pointer">
        <ArrowLeft onClick={() => navigate('/lecturers')} />
        <h1 className="text-3xl font-bold text-white mb-8">Add New Lecturer</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
  <div className="space-y-2">
  <label className="text-gray-300 m-5">First Name*</label>
  <input
    type="text"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
    required
  />
  </div>
  <div className="space-y-2">
    <label className="text-gray-300 m-5">Last Name*</label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
      required
    />
  </div>
</div>

        <div className="space-y-2">
          <label className="text-gray-300">Upload a professional photo</label>
          <button
            type="button"
            className="flex items-center space-x-2 px-4 py-2 bg-secondary text-gray-300 rounded border border-gray-700 hover:border-primary"
          >
            <Upload className="w-5 h-5" />
            <span>Upload</span>
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-gray-300 m-5">Bio*</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none h-32"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-gray-300">Hobbies*</label>
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
            required
          />
        </div>


        <div className="grid grid-cols-2 md:grid-cols-2 gap-[10px]">
          <div className="space-y-2">
            <label className="text-gray-300">Office Number*</label>
            <input
              type="text"
              name="officeNumber"
              value={formData.officeNumber}
              onChange={handleChange}
              className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-300">Home Address*</label>
            <input
              type="text"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleChange}
              className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-gray-300">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-300">Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="space-y-2">
    <label className="text-gray-300">Profile Link</label>
    <input
      type="url"
      name="profileLink"
      value={formData.profileLink}
      onChange={handleChange}
      className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
    />
  </div>
  
  <div className="space-y-2">
    <label className="text-gray-300">Publication Link</label>
    <input
      type="url"
      name="publicationLink"
      value={formData.publicationLink}
      onChange={handleChange}
      className="block w-[400px] p-3 rounded-[10px] bg-transparent text-white border border-gray-700 focus:border-primary focus:outline-none"
    />
  </div>
  </div>
  
  <div className="space-y-2">
    <label className="text-gray-300 m-2">Professional Development</label>
    <select
            id="professionalDevelopment"
            name="professionalDevelopment"
            className="block w-[400px] h-[60px] rounded-[10px] bg-transparent  text-white border border-gray-700"
            value={formData.professionalDevelopment}
            onChange={handleChange}
          >
            <option value="">Choose a type</option>
            <option value="workshop">Workshop</option>
            <option value="conference">Conference</option>
            <option value="certification">Certification</option>
          </select>
  </div>
  
  <div className="space-y-2 md:col-span-2">
    <label className="text-gray-300">Continuing Education</label>
    <select
            id="professionalDevelopment"
            name="professionalDevelopment"
            className="block w-[400px] h-[60px] rounded-[10px] bg-transparent  text-white border border-gray-700"
            value={formData.professionalDevelopment}
            onChange={handleChange}
          >
            <option value="">Choose a type</option>
            <option value="workshop">Workshop</option>
            <option value="conference">Conference</option>
            <option value="certification">Certification</option>
          </select>
  </div>
  <div className="space-y-2 md:col-span-2">
          <label className="text-gray-300">Honors</label>
          <select
            id="professionalDevelopment"
            name="professionalDevelopment"
            className="block w-[400px] h-[60px] rounded-[10px] bg-transparent  text-white border border-gray-700"
            value={formData.professionalDevelopment}
            onChange={handleChange}
          >
            <option value="">Choose a type</option>
            <option value="workshop">Workshop</option>
            <option value="conference">Conference</option>
            <option value="certification">Certification</option>
          </select>
        </div>

  <div className="space-y-2 md:col-span-2">
    <label className="text-gray-300">Awards</label>
    <select
            id="professionalDevelopment"
            name="professionalDevelopment"
            className="block w-[400px] h-[60px] rounded-[10px] bg-transparent  text-white border border-gray-700"
            value={formData.professionalDevelopment}
            onChange={handleChange}
          >
            <option value="">Choose a type</option>
            <option value="workshop">Workshop</option>
            <option value="conference">Conference</option>
            <option value="certification">Certification</option>
          </select>
  </div>


        <button
        onClick={handleAssign}
          type="submit"
          className="w-[60px] h-[40px] rounded-[10px] ml-[1000px] md:w-auto px-6 py-3 bg-blue-500 text-white text-center align-itemsrounded-[10px] hover:bg-primary/90 transition-colors"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default FacultyForm;
