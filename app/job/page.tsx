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
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Courses vs Categories",
        // TypeScript-safe font spec
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <Bar data={data} options={options} />
      <p className="mt-4 text-gray-600 text-center">
        This graph shows the progress of 3 different courses across 4 categories.
      </p>
    </div>
  );
}
