import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BreweryChart = () => {
  const chartData = [
    { name: "micro", total: "4266" },
    { name: "nano", total: "11" },
    { name: "regional", total: "255" },
    { name: "brewpub", total: "2489" },
    { name: "large", total: "87" },
    { name: "planning", total: "691" },
    { name: "contract", total: "193" },
    { name: "proprietor", total: "69" },
    { name: "closed", total: "191" },
  ];

  return (
    <div className="chart">
      <BarChart
        width={800}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 4500]}/>
        <Tooltip />
        <Bar
          dataKey="total"
          fill="orange"
          activeBar={<Rectangle fill="pink" stroke="red" />}
        />
      </BarChart>
    </div>
  );
};

export default BreweryChart;
