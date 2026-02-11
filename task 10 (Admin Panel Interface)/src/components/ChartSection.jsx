import { LineChart, Line, XAxis, YAxis } from "recharts";

function ChartSection({ data }) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="users" stroke="#2563eb" />
    </LineChart>
  );
}

export default ChartSection;