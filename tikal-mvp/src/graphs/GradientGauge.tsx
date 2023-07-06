//@ts-nocheck
//@ts-nocheck
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  // Tooltip,  
  // Legend,
} from "chart.js";
import data from '/src/data/data.json'
import { Bar , Doughnut} from "react-chartjs-2"


ChartJS.register(
  CategoryScale,
  LinearScale,
  // BarElement,
  Title,
  // Tooltip,
  ArcElement,
  // Legend,
)

const GradientGauge = () => {

  // get the day values
  const getDay = (weekday) => {
    return [weekday.day]
  }

  // hold the values that will be labels 
  const labels = data.map(getDay)

  // get the amount values
  const getAmount = (cost) => {
    return [cost.amount]
  }

  // what we want to show in the data field (the bars)
  const amountSpent = data.map(getAmount)


  // console.log(labels)

  const chartData = {
    labels,
    datasets: [
      {
        label: "",
        data: [43.28, 55.81],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', //red
          // 'rgba(255, 159, 64, 0.2)', // orange
          // 'rgba(255, 205, 86, 0.2)', //yellow?
          // 'rgba(75, 192, 192, 0.2)', //green
          // 'rgba(54, 162, 235, 0.2)', // blue
          // 'rgba(153, 102, 255, 0.2)', //purple
          'rgba(201, 203, 207, 0.2)' //gray
        ],
        borderColor: [
          'rgb(255, 99, 132, 0.2)', //red
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          'rgb(201, 203, 207, 0.2)' //gray
        ],
        borderWidth: 1, 
        cutout: '90%',
        circumference: 180,
        rotation: 270,   
        // backgroundColor: 'hsl(10, 79%, 65%)',
        // borderRadius: 4,
        // hoverBackgroundColor: 'hsl(186, 34%, 60%)'
      }
    ],
    options: {
      aspectRatio: 1.5,
      // scales: {
      //   x: {
      //     grid: {
      //       display: false, 
      //     },
      //     border: {
      //       color: 'white'
      //     },
      //   },
      //   y: {
      //     grid: {
      //       display: false,
      //     },
      //     ticks: {
      //       display: false,
      //     },
      //     border: {
      //       color: 'white'
      //     }
      //   }
      // },
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    }
  }

  return (
    <section className="">
      <div>
        <h1 className="text-xl font-bold py-8  text-amber-950"> Spending - Last 7 days</h1>
      </div>
      <div>
        <Doughnut data={chartData} options={chartData.options} />

      </div>
      {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
    

    </section>
  
  );
}

export default GradientGauge;