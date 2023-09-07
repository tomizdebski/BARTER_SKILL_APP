import DonutChart from 'react-donut-chart';


const DonutChartt = ({score}) => {
  return (
    
    <DonutChart
      data={[
        {
          label: "Dobrych odpowiedzi",
          value: (score *10) ,
        },
        {
          label: "Błędnych odpowiedzi ",
          value: (100 - (score* 10)),
          // isEmpty: true,
        },
      ]}
    />

  );
};

export default DonutChartt;
