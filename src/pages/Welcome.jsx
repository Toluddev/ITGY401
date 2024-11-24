

const Welcome = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#121417] text-white">
            {/* Header */}
            <header className="flex items-center justify-between py-4 bg-[#121417] text-white border-b-2 border-white px-[60px]">
                {/* Left Section: Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/Logo.png" // Replace with your image path
                        alt="Vector"
                        className="w-[16px] h-[16px] object-cover"
                    />
                    <span className="font-bold text-lg">Dr. Jane Smith</span>
                </div>

                {/* Right Section: Sign Up Button */}
                <button
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                    Sign Up
                </button>
            </header>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center justify-center space-y-8 px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Welcome Back</h1>
                    <h2 className="text-xl mt-2">Log in to continue</h2>
                </div>

                {/* Login Form */}
                <div className="text-black rounded-lg p-6 shadow-lg w-full max-w-sm">
                    <form className="space-y-4">
                        {/* Username Input */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-lg font-medium text-white"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-lg font-medium text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
