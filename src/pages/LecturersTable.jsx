import React from 'react';
import { Search } from 'lucide-react';

const LecturersTable = () => {
  const data = [
    { id: 1, name: "Alice Smith", email: "alice.smith@gmail.com", title: "AI Researcher", createdAt: "01/01/2023" },
    { id: 2, name: "Bob Johnson", email: "bob.johnson@gmail.com", title: "Data Scientist", createdAt: "01/01/2022" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@gmail.com", title: "Software Engineer", createdAt: "01/01/2021" },
    { id: 4, name: "David Miller", email: "david.miller@gmail.com", title: "Product Manager", createdAt: "01/01/2020" },
    { id: 5, name: "Eva Davis", email: "eva.davis@gmail.com", title: "UX Designer", createdAt: "01/01/2019" }
  ];

  return (
    <div className="min-h-screen bg-[#000] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Lecturers</h1>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for lecturers"
            className="w-[500px] bg-[#2A2F3C] text-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-[470px] top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Table */}
        <div className="bg-transparent rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-[#1E2330] border-b border-gray-700">
              <tr>
                <th className="px-6 py-4 text-gray-400">Name</th>
                <th className="px-6 py-4 text-gray-400">Email</th>
                <th className="px-6 py-4 text-gray-400">Title</th>
                <th className="px-6 py-4 text-gray-400">Created at</th>
                <th className="px-6 py-4 text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b border-gray-700 hover:bg-[#2A2F3C] transition-colors">
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4 text-gray-400">{item.email}</td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4 text-gray-400">{item.createdAt}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-gray-400 hover:text-white"
                      onClick={() => console.log('Actions clicked', item.id)}
                    >
                      View / Edit / Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LecturersTable;