import React from 'react';
import axios from 'axios';
import { Button } from './MainDiv.js';

export default class RecipeAddForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button onClick={this.props.hideForm.bind(this)}>HOME</Button>
        );
    }

}