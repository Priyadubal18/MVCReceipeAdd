import React from 'react';
import axios from 'axios';
import { BackButton, RecipeHeader, RecipeDiv, RecipeDetailImg, RecipeDetailShortDescription } from './MainDiv.js';
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
                        <RecipeDiv>
                            <BackButton onClick={this.props.back.bind(this)}>BACK</BackButton>
                            <RecipeHeader>{this.props.recipeData.RecipeTitle}</RecipeHeader>
                            <div>
                                <RecipeDetailImg src={this.props.recipeData.RecipeImageURL}></RecipeDetailImg>
                                <RecipeDetailShortDescription>{this.props.recipeData.ShortDescription}</RecipeDetailShortDescription>
                            </div>
                        </RecipeDiv>
                        : <div>Loading</div>
                }
            </div>
        );
    }

}