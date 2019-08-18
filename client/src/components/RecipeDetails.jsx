import React from 'react';
import axios from 'axios';
import { Button, RecipeHeader, RecipeDiv, RecipeDetailImg, RecipeDetailShortDescription, RecipeInfoDiv, RecipeSubText, ReviewMainDiv } from './MainDiv.js';
import Review from './Review.jsx';

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
                            <Button onClick={this.props.back.bind(this)}>HOME</Button>
                            <RecipeHeader>{this.props.recipeData.RecipeTitle}</RecipeHeader>
                            <RecipeDetailImg src={this.props.recipeData.RecipeImageURL}></RecipeDetailImg>
                            <RecipeDetailShortDescription>{this.props.recipeData.ShortDescription}</RecipeDetailShortDescription>
                            <RecipeSubText>INGREDIENTS:</RecipeSubText>
                            <RecipeInfoDiv>{this.props.recipeData.Ingredients.split('.').map((ingredients) => ingredients ? <li>{ingredients}</li> : '')}</ RecipeInfoDiv>
                            <RecipeSubText>INSTRUCTIONS:</RecipeSubText>
                            <RecipeInfoDiv>{this.props.recipeData.Instructions.split('.').map((ingredients) => ingredients ? <li>{ingredients}</li> : '')}</RecipeInfoDiv>
                            <RecipeSubText>NOTES:</RecipeSubText>
                            <RecipeInfoDiv>{this.props.recipeData.Notes}</RecipeInfoDiv>
                            {
                                this.props.recipeReview !== null ?
                                    <RecipeSubText>REVIEWS:</RecipeSubText> : ""
                            }{
                                this.props.recipeReview !== null ?
                                    <ReviewMainDiv>
                                        {
                                            this.props.recipeReview.map((review, index) => (
                                                <Review review={review}></Review>
                                            ))
                                        }
                                    </ReviewMainDiv>
                                    : ""

                            }
                        </RecipeDiv>
                        : <div>Loading</div>
                }
            </div>
        );
    }

}