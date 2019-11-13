import React, { Component } from 'react';
import Pie from 'react-chartjs-2';








export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    'Carboidratos',
                    'Proteínas',
                    'Gorduras'
                ],
                datasets: [{
                    data: [props.numc, props.nump, props.numg],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ]
                }]
            }
        } 
    }

    componentDidMount() {


        this.loadProducts();

    }

    loadProducts = async () => {







    };
    render() {

        return (
            <Pie data={this.state.chartData}
                width={100}
                height={430}
                options={{ maintainAspectRatio: false }} />

        );

    }







}