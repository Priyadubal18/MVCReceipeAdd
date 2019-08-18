import React from 'react';
import axios from 'axios';
import { RevieweDiv, ReviewUserImage, ReviewUserName, ReviewReviewDiv } from './MainDiv.js';
import User from '../Img/User.png'
import StarRatingComponent from 'react-star-rating-component';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RevieweDiv>
                <ReviewUserImage src={User}></ReviewUserImage>
                <ReviewUserName>{this.props.review.UserName}</ReviewUserName>
                <p>{this.props.review.ReviewDescription}</p>
                <ReviewReviewDiv>
                    <StarRatingComponent
                        name="recipeRate"
                        style="float:right"
                        starCount={5}
                        starColor="rgba(255,200,40,.85)"
                        emptyStarColor="grey"
                        value={this.props.review.ReviewNumber}
                    />
                </ReviewReviewDiv>
            </RevieweDiv>
        );
    }

}