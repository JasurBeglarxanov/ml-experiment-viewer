import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Legend);

function ChartViewer({ data, selectedExperiments }) {
  const metrics = [...new Set(data.map((d) => d.metric_name))];

  return (
    <div>
      {metrics.map((metric) => {
        const chartData = {
          labels: [],
          datasets: [],
        };

        selectedExperiments.forEach((exp) => {
          const points = data
            .filter((d) => d.experiment_id === exp && d.metric_name === metric)
            .sort((a, b) => Number(a.step) - Number(b.step));

          if (points.length === 0) return;

          chartData.labels = points.map((p) => p.step);
          chartData.datasets.push({
            label: exp,
            data: points.map((p) => parseFloat(p.value)),
            borderWidth: 2,
            fill: false,
          });
        });

        return (
          <div key={metric} style={{ marginTop: "30px" }}>
            <h3>{metric}</h3>
            <Line data={chartData} />
          </div>
        );
      })}
    </div>
  );
}

export default ChartViewer;