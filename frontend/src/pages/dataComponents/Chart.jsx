import React, { useEffect } from 'react';

const Chart = ({seedData}) => {
    
    useEffect(() => {
        // Load Google Charts library
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;

        script.onload = () => {
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const dataArr=seedData.map(data=>[data.name,data.count]);
    dataArr.unshift(['Tasks','Hours per Day']);

    const drawChart = () => {
        var data = google.visualization.arrayToDataTable(dataArr);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    };

    return (
        <div id="piechart" style={{ width: '900px', height: '500px' }}></div>
    );
}

export default Chart;
