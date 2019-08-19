import React from 'react';
import axios from 'axios';
import { MainHeader, ReviewUserImage, Button, AddRecipeDiv } from './MainDiv.js';
import RecipeTab from './RecipeTab.jsx'
import RecipeDetails from './RecipeDetails.jsx'
import RecipeAddForm from './RecipeAddForm.jsx'
import Logo from '../Img/Logo.jpg'

export default class RecipeJar extends React.Component {
    constructor() {
        super();
        this.state = {
            RecipeList: [],
            showRecipe: false,
            recipeInfo: null,
            recipeReview: null,
            addNewRecipe: false
        }
        this.recipeTabClick = this.recipeTabClick.bind(this);
        this.ToggleRecipe = this.ToggleRecipe.bind(this);
        this.ShowForm = this.ShowForm.bind(this);
        this.HideForm = this.HideForm.bind(this);
    }

    async componentDidMount() {
        try {
            debugger;
            let response = await axios.get('/getallRecipes');
            this.setState({
                RecipeList: response.data
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    async recipeTabClick(recipe) {
        try {
            let response = await axios.get('/getRecipe', {
                params: {
                    ID: recipe.RecipeId
                }
            });
            let review = await axios.get('/getReview', {
                params: {
                    ID: recipe.RecipeId
                }
            });

            this.setState({
                showRecipe: true,
                recipeInfo: response.data[0],
                recipeReview: review.data
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    ToggleRecipe() {
        this.setState({
            showRecipe: false
        });
    }

    ShowForm() {
        this.setState({
            addNewRecipe: true
        });
    }

    async HideForm() {
        try {
            this.setState({
                addNewRecipe: false
            });
            let response = await axios.get('/getallRecipes');
            this.setState({
                RecipeList: response.data
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    render() {
        return (
            <div>
                <MainHeader>Recipes in a Jar </MainHeader>

                {
                    !this.state.addNewRecipe ?
                        <AddRecipeDiv><Button onClick={this.ShowForm}>ADD RECIPE</Button></AddRecipeDiv>
                        : <RecipeAddForm hideForm={this.HideForm}></RecipeAddForm>
                }

                {
                    !this.state.addNewRecipe ?
                        !this.state.showRecipe ?
                            this.state.RecipeList.length > 0 ?
                                this.state.RecipeList.map((recipe, index) => (
                                    <RecipeTab key={index} recipeInfo={recipe} recipeClick={this.recipeTabClick} > </RecipeTab>
                                ))
                                : <p>Loading...</p>
                            : <RecipeDetails recipeData={this.state.recipeInfo} recipeReview={this.state.recipeReview} back={this.ToggleRecipe}></RecipeDetails>
                        : ""
                }
            </div>
        );

    }

}