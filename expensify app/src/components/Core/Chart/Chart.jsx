import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const chartValueList = props.chartDataPoints.map((data) => data.value);
  const maxValue = Math.max(...chartValueList);
  return (
    <div className="chart">
      {props.chartDataPoints.map((chart) => (
        <ChartBar key={chart.label} maxValue={maxValue} chart={chart} />
      ))}
    </div>
  );
};

export default Chart;
