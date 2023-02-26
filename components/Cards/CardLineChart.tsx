import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

export default function CardLineChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const option: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    responsive: true,
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: {
        // ticks: {
        //   fontColor: "rgba(255,255,255,.7)",
        // },
        display: true,
        // scaleLabel: {
        //   display: false,
        //   labelString: "Month",
        //   fontColor: "white",
        // },
        // gridLines: {
        //   display: false,
        //   borderDash: [2],
        //   borderDashOffset: [2],
        //   color: "rgba(33, 37, 41, 0.3)",
        //   zeroLineColor: "rgba(0, 0, 0, 0)",
        //   zeroLineBorderDash: [2],
        //   zeroLineBorderDashOffset: [2],
        // },
      },

      yAxes: {
        // ticks: {
        //   fontColor: "rgba(255,255,255,.7)",
        // },
        display: true,
        // scaleLabel: {
        //   display: false,
        //   labelString: "Value",
        //   fontColor: "white",
        // },
        // gridLines: {
        //   borderDash: [3],
        //   borderDashOffset: [3],
        //   drawBorder: false,
        //   color: "rgba(255, 255, 255, 0.15)",
        //   zeroLineColor: "rgba(33, 37, 41, 0)",
        //   zeroLineBorderDash: [2],
        //   zeroLineBorderDashOffset: [2],
        // },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "2022",
        backgroundColor: "#4c51bf",
        borderColor: "#4c51bf",
        data: [65, 78, 66, 44, 56, 67, 75],
        fill: false,
      },
      {
        label: "2023",
        fill: false,
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: [40, 68, 86, 74, 56, 60, 87],
      },
    ],
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <Line data={data} options={option} />
          </div>
        </div>
      </div>
    </>
  );
}
