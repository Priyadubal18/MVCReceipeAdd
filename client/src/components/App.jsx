import React from 'react';
import axios from 'axios';
import { MainHeader } from './MainDiv.js';
import RecipeTab from './RecipeTab.jsx'
import RecipeDetails from './RecipeDetails.jsx'

export default class RecipeJar extends React.Component {
    constructor() {
        super();
        this.state = {
            RecipeList: [],
            showRecipe: false,
            recipeInfo: null
        }
        this.recipeTabClick = this.recipeTabClick.bind(this);
        this.ToggleRecipe = this.ToggleRecipe.bind(this);
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
            this.setState({
                showRecipe: true,
                recipeInfo: response.data[0]
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    ToggleRecipe() {
        debugger;
        this.setState({
            showRecipe: false
        });
    }
    render() {
        return (
            <div>
                <MainHeader>Recipes in a Jar</MainHeader>
                {
                    !this.state.showRecipe ?
                        this.state.RecipeList.length > 0 ?
                            this.state.RecipeList.map((recipe, index) => (
                                <RecipeTab key={index} recipeInfo={recipe} recipeClick={this.recipeTabClick} > </RecipeTab>
                            )) : <p>Loading...</p>
                        :
                        <RecipeDetails recipeData={this.state.recipeInfo} back={this.ToggleRecipe}></RecipeDetails>
                }
            </div>
        );

    }

}