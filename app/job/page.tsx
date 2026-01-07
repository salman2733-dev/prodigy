"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraphComponent() {
  const data = {
    labels: ["Frontend", "Backend", "Marketing", "E-commerce"],
    datasets: [
      {
        label: "Course 1",
        data: [80, 60, 70, 90],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderRadius: 6,
      },
      {
        label: "Course 2",
        data: [70, 80, 60, 85],
        backgroundColor: "rgba(16, 185, 129, 0.7)",
        borderRadius: 6,
      },
      {
        label: "Course 3",
        data: [60, 75, 80, 70],
        backgroundColor: "rgba(234, 179, 8, 0.7)",
        borderRadius: 6,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false, // important for mobile
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Courses vs Categories",
        font: {
          size: 20,
          weight: "bold" as const,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto p-4 sm:p-6 bg-white shadow-xl rounded-2xl h-[400px] sm:h-[450px] md:h-[500px]">
      <Bar data={data} options={options} />
      <p className="mt-4 text-gray-600 text-center text-sm sm:text-base">
        This graph shows the progress of 3 different courses across 4 categories.
      </p>
    </div>
  );
}
