import React from 'react';
import axios from 'axios';

export default class ProductBuyer extends React.Component {
    constructor() {
        super();
    }

    async componentDidMount() {
        try {
            debugger;
            let response = await axios.get('/allRecipesList')
            console.log(response.response);
        } catch (ex) {
            console.log(ex);
        }
    }

    render() {
        return <h1>Hello, Priya,Good Job. You be positive.</h1>;
    }

}