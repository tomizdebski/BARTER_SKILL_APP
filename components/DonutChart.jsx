import DonutChart from 'react-donut-chart';


const DonutChart = () => {
  return (
    <DonutChart
      data={[
        {
          label: "Give you up",
          value: 25,
        },
        {
          label: "",
          value: 75,
          isEmpty: true,
        },
      ]}
    />
  );
};

export default DonutChart;
