import axios from 'axios';
import {chartModel} from "../services/chartModel"
import { cloneDeep } from "lodash"

const URL = "https://data-server-api-v2.herokuapp.com/data"

const fetchData = async () => {
    // console.log(data)
    try {
    const data = (await axios.get(URL)).data.result
    console.log(data);
    return data
    } catch (error) {
        // console.log({error});
        return false
    }
}

const getData = async () => {
    const populationData = await fetchData()
    const xAxis = []
    const density = []
    const landArea = []
    const population = []
    populationData.forEach((element, index) => {
        if (index < 40) {
        xAxis.push(element.country)
        density.push(element.density)
        landArea.push(element.land_area)
        population.push(element.population)   
        }
    });

    chartModel["labels"] = xAxis

    const populationChart = cloneDeep(chartModel)
    populationChart["datasets"][0]["data"] = population

    const densityChart = cloneDeep(chartModel)
    densityChart["datasets"][0]["data"] = density

    const landAreaChart = cloneDeep(chartModel)
    landAreaChart["datasets"][0]["data"] = landArea

    
    return {
        populationChart,
        densityChart,
        landAreaChart
    }
}
export default getData;