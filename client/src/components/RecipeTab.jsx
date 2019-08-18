import React from 'react';
import axios from 'axios';
import { RecipePanel, RecipeTiTle, RecipeImg, RecipeReview, RecipeReviewCount } from './MainDiv.js';
import StarRatingComponent from 'react-star-rating-component';

export default class RecipeTab extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        console.log(props);
    }

    render() {
        return (
            <RecipePanel>
                <RecipeImg src={this.props.recipeInfo.RecipeImageURL} />
                <RecipeTiTle>{this.props.recipeInfo.RecipeTitle}</RecipeTiTle>
                <RecipeReview>
                    <StarRatingComponent
                        name="recipeRate"
                        starCount={5}
                        starColor="white"
                        emptyStarColor="grey"
                        value={this.props.recipeInfo.Review}
                    />
                    <RecipeReviewCount>({this.props.recipeInfo.NoOfReview})</RecipeReviewCount>
                </RecipeReview>
            </RecipePanel>
        );
    }

}