import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const PieChart = () => {
    const [chartData, setChartData] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState('January');
    const [Values,setValues]=useState([])

    useEffect(() => {
        if (selectedMonth !== '') {
            fetch(`https://caring-brainy-hubcap.glitch.me/api/chart-data?month=${selectedMonth}`)
                .then(response => response.json())
                .then(data => {
                    const productData = data.productChartData.datasets[0].data;
                    const chartData = {
                        labels: [],
                        datasets: [
                            {
                                data: Object.values(productData),
                                backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
                                hoverBackgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
                            },
                        ],
                    };
                    setValues(Object.values(productData));
                    setChartData(chartData);
                })
                .catch(error => {
                    console.error('Error fetching chart data:', error);
                });
        }
    }, [selectedMonth]);
    


    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };



    return (
        <div className='productChart'>
            <div className='productTop'>
                <h3>Top products</h3>
                <select value={selectedMonth} onChange={handleMonthChange}   >
                    <option value="January">January-February 2021</option>
                    <option value="February">February-March 2021</option>
                    <option value="March">March-April 2021</option>
                    <option value="April">April-May 2021</option>
                    <option value="May">May-June 2021</option>
                </select>
            </div>
            <div className='productData'>
                <div className='pieChart'>
                    {chartData && <Pie data={chartData} />}
                </div>

                <div className='productIndicator'>
                    <div className='data-content'>
                        <div className='alignProduct'>
                            <div style={{ backgroundColor: "#98D89E" }} className='dot'></div>
                            <h6>Basic Tees</h6>
                        </div>
                        <p>`{Values[0]}%`</p>
                    </div>
                    <div className='data-content'>
                        <div className='alignProduct'>
                            <div style={{ backgroundColor: "#F6DC7D" }} className='dot'></div>
                            <h6>Custom Short Pants</h6>
                        </div>
                        <p>`{Values[1]}%`</p>
                    </div>
                    <div className='data-content'>
                        <div className='alignProduct'>
                            <div style={{ backgroundColor: "#EE8484" }} className='dot'></div>
                            <h6>Super Hoodies</h6>
                        </div>
                        <p>`{Values[2]}%`</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PieChart;
