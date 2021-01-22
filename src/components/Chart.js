import React, { Component } from 'react';
import fetchData from "../services/fetchData"
import { Bar, Line } from 'react-chartjs-2';

class ChartData extends Component{
    constructor() {
        super()
        this.state = {
            population: {},
            density: {},
            landArea: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        fetchData().then(
            data => {
                this.setState({
                    population: data.populationChart,
                    density: data.densityChart,
                    landArea: data.landAreaChart
                })
            }
        )
    }

    render() {
        return (
            <div className="chart">
            <div id="population">
                <Line data={this.state.population} options={{ title:{ display: true, text: "Population" , fontSize:25,
                    fontColor: "black",responsive: true }, legend:{ display:true, position: 'bottom' } }} />
            </div>
            <div id="density">
                <Bar data={this.state.density} options={{ title:{ display: true, text: "Density" , fontSize:25,
                    fontColor: "black", responsive: true }, legend:{ display:true, position: 'bottom' } }} />
            </div>
            <div id="landArea">
                <Line data={this.state.landArea} options={{ title:{ display: true, text: "Land Area" ,
                    fontSize:25, fontColor: "black", responsive: true }, legend:{ display:true,
                    position: 'bottom' } }} />
            </div>
</div>
        );
    }
}

export default ChartData;