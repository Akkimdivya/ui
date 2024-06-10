import React, { useEffect, useState ,useMemo} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('January');

  const monthsData =useMemo(() => ({
    January: {
      user: [100, 400, 150, 420, 250,200],
      guest: [150, 300, 400, 350, 200,400],
      product:{
       basicTees: 33,
        customShorts: 33,
        superHoodies: 34,
      }
    },
    February: {
      user: [200, 100, 350, 250, 400,256],
      guest: [150, 250, 300, 250, 400,356],
      product:{
         basicTees: 45,
        customShorts: 20,
        superHoodies: 35,
      }
    },
    March: {
      user: [150, 350, 168, 451, 267,265],
      guest: [ 250, 456, 253, 156, 241,354],
            product:{
        basicTees: 25,
        customShorts: 30,
        superHoodies: 45,
      }
    },
    April: {
      user: [320, 456, 152, 351, 423,461],
      guest: [350, 123, 456, 250, 360,120],
            product:{
          basicTees: 40,
        customShorts: 30,
        superHoodies: 30,
      }
    },
    May: {
      user: [260, 124, 350, 456, 460,354],
      guest: [150, 360, 450, 123, 450,126],
            product:{
            basicTees: 21,
        customShorts: 30,
        superHoodies: 49,
      }
    }
  }),[])


  useEffect(() => {
    // Get the data for the selected month
    const dataForSelectedMonth = monthsData[selectedMonth];

    // Check if the data is available for the selected month
    if (dataForSelectedMonth) {
      const userDataSet = {
        label: 'User Dataset',
        data: dataForSelectedMonth.user,
        borderColor: '#9BDD7C',
      };

      const guestDataSet = {
        label: 'Guest Dataset',
        data: dataForSelectedMonth.guest,
        borderColor: '#E9A0A0',
      };

      const newChartData = {
        labels: ['', 'week1', 'week2', 'week3', 'week4', ''],
        datasets: [userDataSet, guestDataSet],
      };

      setChartData(newChartData);
    }
  }, [selectedMonth, monthsData]);
  

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: false,
        grid: {
          display: false, // Hide vertical gridlines
        },
        ticks: {
          font: {
            family: "Lato", 
            weight: 400, 
            size: 14, 
          },
        },
      },
      y: {
        
        beginAtZero: true,
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 100, // Set the step size between ticks
          max: 500, // Set the maximum value of the y-axis
          font: {
            family: "Lato", 
            weight: 400, 
            size: 14, 
          },
          padding: 10,
          
        },
      },
    },
    
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0, // Set the radius of the plot dots to 0 to remove them
      },
      line: {
        tension: 0.3, 
        borderWidth: 3,// Controls the curve of the line
      },
    },
  };
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  if (mediaQuery.matches) {
    chartOptions.scales.x.ticks.font.size = 10;
    chartOptions.scales.y.ticks.font.size = 10;
    chartOptions.elements.line.borderWidth = 2;
  }
  return (
    <div className='chartContainer'>
    <h3>Activities</h3>
    <div className='actIndicators'>
      <select value={selectedMonth} onChange={handleMonthChange}   >
        <option value="January">January-February 2021</option>
        <option value="February">February-March 2021</option>
        <option value="March">March-April 2021</option>
        <option value="April">April-May 2021</option>
        <option value="May">May-June 2021</option>
      </select>
      <div className='userIndicator'>
        <div className='alignInd'>
          <div style={{backgroundColor:"#E9A0A0"}} className='dot'></div>
        <p>Guest</p>
        </div>
        <div className='alignInd'>
          <div style={{backgroundColor:"#9BDD7C"}}  className='dot'></div>
        <p>User</p>
        </div>
        
      </div>
    </div>
    <div className='lineChart'>
    {chartData && <Line  data={chartData} options={chartOptions} />}
    </div>
    {/* <div style={{ height: "100%"}}>
      {chartData && <Line data={chartData} options={chartOptions} />}
    </div> */}
    </div>
  );
};

export default ChartComponent;
