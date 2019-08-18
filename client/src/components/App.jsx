import React from 'react';
import axios from 'axios';
import { MainHeader } from './MainDiv.js';
import RecipeTab from './RecipeTab.jsx'

export default class RecipeJar extends React.Component {
    constructor() {
        super();
        this.state = {
            RecipeList: []
        }
        this.recipeTabClick = this.recipeTabClick.bind(this);
    }

    async componentDidMount() {
        try {
            debugger;
            let response = await axios.get('/allRecipesList');
            //console.log(response.data);
            this.setState({
                RecipeList: response.data
            });
        } catch (ex) {
            console.log(ex);
        }
    }

    recipeTabClick(recipe) {
        debugger;
        console.log(recipe);
    }

    render() {
        return (
            <div>
                <MainHeader>Recipes in a Jar</MainHeader>
                {
                    this.state.RecipeList.length > 0 ?
                        this.state.RecipeList.map((recipe, index) => (
                            <RecipeTab key={index} recipeInfo={recipe} recipeClick={this.recipeTabClick} > </RecipeTab>
                        )) : <p>Loading...</p>
                }
            </div>
        );

    }

}