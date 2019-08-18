import React from 'react';
import axios from 'axios';
import { RevieweDiv, ReviewUserImage } from './MainDiv.js';
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
                <p>{this.props.review.UserName}</p>
                <p>{this.props.review.ReviewDescription}</p>
                <StarRatingComponent
                    name="recipeRate"
                    starCount={5}
                    starColor="rgba(255,200,40,.85)"
                    emptyStarColor="grey"
                    value={this.props.review.ReviewNumber}
                />
            </RevieweDiv>
        );
    }

}