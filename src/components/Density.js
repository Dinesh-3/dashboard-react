import React, { Component } from 'react';
import fetchData from "../services/fetchData"
import { Bar } from 'react-chartjs-2';

class Density extends Component{
    constructor() {
        super()
        this.state = {
            density: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        fetchData().then(
            data => {
                this.setState({
                    density: data.densityChart
                })
            }
        )
    }

    render() {
        return (
            <div id="density">
                <Bar data={this.state.density} options={{ title:{ display: true, text: "Density" , fontSize:25,
                    fontColor: "black", responsive: true }, legend:{ display:true, position: 'bottom' } }} />
            </div>
        );
    }
}

export default Density;
