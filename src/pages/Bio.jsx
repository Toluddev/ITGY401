import React from "react";

const Bio = () => {
    return (
        <div className="p-6 rounded-lg space-y-8 px-[60px]">
            {/* Bio Section */}
            <div className="text-left">
                <h1 className="text-2xl font-bold mb-4">Bio</h1>
                <h2 className="leading-relaxed">
                    Jennifer Smith is a physician-scientist in the Division of Pulmonary and Critical Care Medicine at UCSF. She completed her medical degree and internal medicine residency at UCSF, and fellowship in pulmonary and critical care medicine at Harvard Medical School. Her research focuses on understanding the role of the lung microbiome in health and disease. She has received funding from the National Institutes of Health, American Lung Association, and Cystic Fibrosis Foundation. She is also passionate about medical education and serves as the associate program director for the pulmonary and critical care fellowship.
                </h2>
            </div>

            {/* Hobbies Section */}
            <div className="text-left">
                <h1 className="text-2xl font-bold mb-4">Hobbies</h1>
                <ul className="flex flex-wrap gap-4">
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Running</li>
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Traveling</li>
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Cooking</li>
                    <li className="bg-gray-600 text-white px-4 py-2 rounded-lg">Reading</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="text-left">
                <h1 className="text-2xl font-bold mb-4">Contact</h1>
                <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                        <div>
                            <strong className="block">Office Address:</strong> UCSF, 505 Parnassus Ave, Rm M-917, San Francisco, CA 94143
                        </div>
                        <span className="text-white text-2xl">→</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <div>
                            <strong className="block">Email:</strong> jennifer.smith@ucsf.edu
                        </div>
                        <span className="text-white text-2xl">→</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <div>
                            <strong className="block">Phone:</strong> 415-476-1234
                        </div>
                        <span className="text-white text-2xl">→</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <div>
                            <strong className="block">LinkedIn:</strong>
                            <a href="https://linkedin.com/in/jennifersmith" className="text-blue-600 hover:underline">
                                linkedin.com/in/jennifersmith
                            </a>
                        </div>
                        <span className="text-white text-2xl">→</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <div>
                            <strong className="block">Publications:</strong>
                            <a href="https://scholar.google.com/citations?user=12345" className="text-blue-600 hover:underline">
                                scholar.google.com/citations?user=12345
                            </a>
                        </div>
                        <span className="text-white text-2xl">→</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Bio;
