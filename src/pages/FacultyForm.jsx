import { useState } from "react";
import { Upload } from "lucide-react";
// import { useToast } from "../components/ui/useToast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Add New Faculty</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
  {/* First Name Field */}
  <div className="space-y-2">
    <label className="text-gray-300 m-5">First Name*</label>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      className="w-[750px]  p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
      required
    />
  </div>

  {/* Last Name Field */}
  <div className="space-y-2">
    <label className="text-gray-300 m-5">Last Name*</label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      className="w-[750px] p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
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
          <label className="text-gray-300">Bio*</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none h-32"
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
            className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-gray-300">Office Number*</label>
            <input
              type="text"
              name="officeNumber"
              value={formData.officeNumber}
              onChange={handleChange}
              className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
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
              className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
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
              className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
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
              className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
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
      className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
    />
  </div>
  
  <div className="space-y-2">
    <label className="text-gray-300">Publication Link</label>
    <input
      type="url"
      name="publicationLink"
      value={formData.publicationLink}
      onChange={handleChange}
      className="w-full p-3 rounded bg-secondary text-white border border-gray-700 focus:border-primary focus:outline-none"
    />
  </div>
  
  <div className="space-y-2">
    <label className="text-gray-300">Professional Development</label>
    <Select
      value={formData.professionalDevelopment}
      onValueChange={(value) => handleSelectChange(value, "professionalDevelopment")}
    >
      <SelectTrigger className="w-[750px] bg-secondary text-white border-gray-700">
        <SelectValue placeholder="Choose a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="workshop">Workshop</SelectItem>
        <SelectItem value="conference">Conference</SelectItem>
        <SelectItem value="certification">Certification</SelectItem>
        <SelectItem value="training">Training Program</SelectItem>
      </SelectContent>
    </Select>
  </div>
  
  <div className="space-y-2 md:col-span-2">
    <label className="text-gray-300">Continuing Education</label>
    <Select
      value={formData.continuingEducation}
      onValueChange={(value) => handleSelectChange(value, "continuingEducation")}
    >
      <SelectTrigger className="w-[750px] bg-secondary text-white border-gray-700">
        <SelectValue placeholder="Choose a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="course">Online Course</SelectItem>
        <SelectItem value="degree">Advanced Degree</SelectItem>
        <SelectItem value="seminar">Seminar</SelectItem>
        <SelectItem value="webinar">Webinar</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <div className="space-y-2 md:col-span-2">
          <label className="text-gray-300">Honors</label>
          <Select
            value={formData.honors}
            onValueChange={(value) => handleSelectChange(value, "honors")}
          >
            <SelectTrigger className="w-full bg-secondary text-white border-gray-700">
              <SelectValue placeholder="Choose a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deans-list">Dean's List</SelectItem>
              <SelectItem value="honors-society">Honors Society</SelectItem>
              <SelectItem value="distinction">Distinction</SelectItem>
              <SelectItem value="excellence">Excellence Award</SelectItem>
            </SelectContent>
          </Select>
        </div>

  <div className="space-y-2 md:col-span-2">
    <label className="text-gray-300">Awards</label>
    <Select
      value={formData.awards}
      onValueChange={(value) => handleSelectChange(value, "awards")}
    >
      <SelectTrigger className="w-full bg-secondary text-white border-gray-700">
        <SelectValue placeholder="Choose a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="teaching">Teaching Award</SelectItem>
        <SelectItem value="research">Research Award</SelectItem>
        <SelectItem value="service">Service Award</SelectItem>
        <SelectItem value="innovation">Innovation Award</SelectItem>
      </SelectContent>
    </Select>
  </div>
</div>


        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-grey text-white rounded hover:bg-primary/90 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FacultyForm;
