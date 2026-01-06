"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsGeoAlt, BsCashStack, BsPerson, BsBookmark, BsCode } from "react-icons/bs";

interface Job {
  id: number;
  title: string;
  location: string;
  salary: string;
  level: string;
  description: string;
  category: string;
}

// Sample jobs data
const jobsData: Job[] = [
  
  { id: 1, title: "Frontend Developer", location: "New York", salary: "$80k", level: "Junior", description: "Build amazing UIs with React and TailwindCSS. Participate in code reviews, improve code quality, and enhance performance.", category: "Development" },
  { id: 2, title: "Marketing Manager", location: "Los Angeles", salary: "$90k", level: "Senior", description: "Lead marketing campaigns and social media strategy. Optimize conversion funnels and track metrics.", category: "Marketing" },
  { id: 3, title: "UI Designer", location: "Chicago", salary: "$75k", level: "Junior", description: "Design beautiful interfaces, prototypes, and collaborate with frontend developers.", category: "Designing" },
  { id: 4, title: "Cyber Security Analyst", location: "Miami", salary: "$95k", level: "Mid-level", description: "Protect company assets, monitor threats, and implement security solutions.", category: "Cyber Security" },
  { id: 5, title: "Project Manager", location: "Boston", salary: "$100k", level: "Senior", description: "Manage multiple projects, coordinate with teams, and deliver results on time.", category: "Management" },
  { id: 6, title: "Backend Developer", location: "Seattle", salary: "$85k", level: "Junior", description: "Develop REST APIs, integrate databases, and maintain server-side logic.", category: "Development" },
  { id: 7, title: "AI Specialist", location: "San Francisco", salary: "$120k", level: "Senior", description: "Design AI algorithms, train models, and deploy ML solutions.", category: "Development" },
  { id: 8, title: "Content Writer", location: "Dallas", salary: "$60k", level: "Junior", description: "Write marketing content, blogs, and promotional materials.", category: "Marketing" },
  { id: 9, title: "UX Designer", location: "Boston", salary: "$80k", level: "Mid-level", description: "Improve user experience, create wireframes, and conduct usability tests.", category: "Designing" },
];


const categories = ["Marketing", "Development", "Designing", "Cyber Security", "Management"] ;
const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Dallas", "San Francisco", "Boston", "Seattle", "Denver"];

export default function JobPortal() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [salaryFilter, setSalaryFilter] = useState<"high" | "low" | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setVisibleCount(6);
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
    );
    setVisibleCount(6);
  };

  const clearSelections = () => {
    setSelectedCategories([]);
    setSelectedLocations([]);
    setVisibleCount(6);
  };

  let filteredJobs = jobsData.filter(job =>
    (selectedCategories.length === 0 || selectedCategories.includes(job.category)) &&
    (selectedLocations.length === 0 || selectedLocations.includes(job.location))
  );

  if (salaryFilter === "high") {
    filteredJobs.sort((a, b) => parseInt(b.salary.slice(1)) - parseInt(a.salary.slice(1)));
  } else if (salaryFilter === "low") {
    filteredJobs.sort((a, b) => parseInt(a.salary.slice(1)) - parseInt(b.salary.slice(1)));
  }

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-auto mt-15 gap-8 "id="job-portal" >
      {/* Left Sidebar */}
      <div className="w-full md:w-[20%] shrink-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-xl">Categories</h2>
          <button
            onClick={clearSelections}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {categories.map(cat => (
            <div
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`flex items-center gap-2 cursor-pointer p-2 rounded border ${
                selectedCategories.includes(cat)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-50 border-gray-200 hover:bg-blue-50"
              } transition-colors duration-200`}
            >
              <input type="checkbox" checked={selectedCategories.includes(cat)} readOnly className="accent-blue-500" />
              {cat}
            </div>
          ))}
        </div>

        <h2 className="font-bold text-xl mt-6 mb-2" >Locations</h2>
        <div className="flex flex-col gap-2">
          {locations.slice(0, 6).map(loc => (
            <div
              key={loc}
              onClick={() => toggleLocation(loc)}
              className={`flex items-center gap-2 cursor-pointer p-2 rounded border ${
                selectedLocations.includes(loc)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-50 border-gray-200 hover:bg-blue-50"
              } transition-colors duration-200`}
            >
              <input type="checkbox" checked={selectedLocations.includes(loc)} readOnly className="accent-blue-500" />
              {loc}
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button below locations */}
        {filteredJobs.length > 6 && (
          <div className="flex justify-center mt-4">
            {visibleCount < filteredJobs.length ? (
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(6)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[70%] flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
          <div>
            <h2 className="text-2xl font-bold">Available Jobs</h2>
            <p className="text-gray-600">{filteredJobs.length} jobs available</p>
          </div>

          <div>
            <select
              className="border p-2 rounded hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={e => setSalaryFilter(e.target.value as "high" | "low" | null)}
              value={salaryFilter || ""}
            >
              <option value="">Sort by Salary</option>
              <option value="high">High Salary</option>
              <option value="low">Low Salary</option>
            </select>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleJobs.map(job => (
            <div
              key={job.id}
              className="border border-gray-200 bg-white rounded-lg p-5 shadow-lg transition-shadow duration-300 min-h-70 flex flex-col justify-between"
            >
              {/* Heading with coding icon */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <BsCode className="text-gray-600 w-6 h-6" />
                  <h3 className="font-bold text-lg">{job.title}</h3>
                </div>
                <button className="text-gray-400 hover:text-blue-500">
                  <BsBookmark size={20} />
                </button>
              </div>

              {/* Job Details */}
              <div className="flex items-center gap-4 text-gray-600 mb-2">
                <div className="flex items-center gap-1 text-blue-500">
                  <BsGeoAlt /> {job.location}
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <BsCashStack /> {job.salary}
                </div>
                <div className="flex items-center gap-1 text-pink-500">
                  <BsPerson /> {job.level}
                </div>
              </div>

              <p className="text-gray-700 mb-3">{job.description}</p>

              {/* Buttons at bottom */}
         <div className="flex gap-2 mt-auto">
  {/* Learn More */}
  <Link href={`/job`}>
    <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
      Learn More
    </button>
  </Link>

  {/* Apply Now */}
  <Link href={`/portal`}>
    <button className="flex-1 px-3 py-2 border border-blue-500 text-blue-600 rounded-xl hover:bg-blue-100 transition">
      Apply Now
    </button>
  </Link>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
