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
                    data: [100*props.carboidratos, 100*props.proteinas,100*props.gorduras],
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
                width={50}
                height={200}
                options={{ maintainAspectRatio: false }} />

        );

    }







}