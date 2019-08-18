import React from 'react';
import axios from 'axios';
import { BackButton } from './MainDiv.js';
import StarRatingComponent from 'react-star-rating-component';

export default class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                {
                    this.props.recipeData != null ?
                        <div>
                            <BackButton onClick={this.props.back.bind(this)}>BACK</BackButton>
                            <h1>Hi this is recipe for  {this.props.recipeData.RecipeTitle}</h1>
                        </div>
                        : <div>Loading</div>
                }
            </div>
        );
    }

}