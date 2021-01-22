import React, { Component } from 'react';
import fetchData from "../services/fetchData"
import { Line } from 'react-chartjs-2';

class ChartData extends Component{
    constructor() {
        super()
        this.state = {
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
                    landArea: data.landAreaChart
                })
            }
        )
    }

    render() {
        return (
            <div className=".chart">
                <Line data={this.state.landArea} options={{ title:{ display: true, text: "Land Area" ,
                    fontSize:25, fontColor: "black", responsive: true }, legend:{ display:true,
                    position: 'bottom' } }} />
            </div>
        );
    }
}

export default ChartData;