import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import useSWR from "swr";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    }
  }
};

const labels = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

const fetcher = (url) => fetch(url).then((r) => r.json());

export function App() {
  const { data: pingData } = useSWR(
    "https://ping.solana.com/mainnet-beta/last6hours",
    fetcher
  );

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: labels.map((g, index) =>
          pingData ? pingData[index].mean_ms : [1, 2, 3, 4]
        ),
        backgroundColor: "green"
      }
    ]
  };

  return <Bar options={options} data={data} />;
}
