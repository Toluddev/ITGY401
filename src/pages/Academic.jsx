import React from 'react';
import { useNavigate } from 'react-router-dom';
const Academic = () => {
    const navigate = useNavigate();
    const handleAssign = () => {
      navigate("/courses"); 
    };
    return (
        <div className="min-h-screen flex flex-col bg-[#000] text-white">
            {/* Header */}
            <header className="flex items-center justify-between py-4 bg-[#000] text-white border-b-2 border-white px-4 sm:px-6 md:px-10">
                {/* Left Section: Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/Logo.png" // Replace with your image path
                        alt="Vector"
                        className="w-[16px] h-[16px] object-cover"
                    />
                    <span className="font-bold text-lg">Lecturer's Portfolio</span>
                </div>

                {/* Right Section: Navigation */}
                <ul className="hidden sm:flex space-x-6 text-white font-medium">
                    <li className="hover:underline cursor-pointer" onClick={() => navigate('/lecturers')}>Lecturers</li>
                    <li className="hover:underline cursor-pointer" onClick={() => navigate('/courses')}>Courses</li>
                </ul>
            </header>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center space-y-6 px-4 sm:px-6">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold">Create a New Course</h1>
                    <h2 className="text-lg sm:text-xl mt-2">
                        Please provide the following information to create a new course
                    </h2>
                </div>

                {/* Course Creation Form */}
                <div className=" text-white rounded-lg p-6 shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
                    <form className="space-y-4">
                        {/* Course Name Input */}
                        <div>
                            <label
                                htmlFor="course-name"
                                className="block text-lg font-medium"
                            >
                                Course Name
                            </label>
                            <input
                                type="text"
                                id="course-name"
                                placeholder="Enter course name"
                                className="mt-1 block w-full px-4 py-2 bg-[#293038] text-black border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Course Description Input */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-lg font-medium"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                placeholder="Enter course description"
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 bg-[#293038] text-white border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleAssign}
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md  focus:ring-2 focus:ring-opacity-50"
                        >
                            Create Course
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Academic;
