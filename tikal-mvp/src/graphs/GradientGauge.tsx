//@ts-nocheck
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  RadialLinearScale,
  // radialLinear,

} from "chart.js";
import { Doughnut} from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  ArcElement,
  RadialLinearScale,
  // radialLinear,

)

const GradientGauge = () => {


// chartText plugin block
  const gaugeChartText = {
    id: 'gaugeChartText',
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {ctx, data, chartArea: {top, bottom, left, right, width, height}, scales: {r} } = chart
      ctx.save()
      console.log(r)
      ctx.restore();
      // const xCoordinate = chart.getDatasetMeta(0).data[0].x
      // const yCoordinate = chart.getDatasetMeta(0).data[0].y

      // ctx.fillRect(xCoordinate, yCoordinate, 400, 5)
    }

  }



  const chartData = {
    labels: ['Score', 'Gray Area'],
    datasets: [
      {
        label: "",
        data: [650, 200],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', //red
          'rgba(201, 203, 207, 0.2)' //gray
        ],
        borderColor: [
          'rgb(255, 99, 132, 0.2)', //red
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
      scales: {
        // r:{
        //   display: true,
        //   beginAtZero: true,
        //   grid: {
        //     display: false,
        //   },
        //   ticks: {
        //     display: false, 
        //   }
        // }
      },
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
    },
    plugins: [gaugeChartText]
  }

  return (
    <section className="">
      <div>
        <h1 className="text-xl font-bold py-8  text-amber-950"> Lead water level</h1>
      </div>
      <div>
        <Doughnut 
          data={chartData}
          options={chartData.options}
        />
        {/* you need to fix the pointLabel  */}
        <div className="flex justify-between ">
          <div className="border-2 border-red-500 ">
          <p>label 1</p>
          </div>
          <div className=" border-2 border-red-500">
          <p>label 2</p>
          </div>

        </div>

      </div>
    </section>
  
  );
}

export default GradientGauge;