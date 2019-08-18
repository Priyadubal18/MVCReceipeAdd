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

    render() {
        return (
            <div>
                <MainHeader>Recipes in a Jar</MainHeader>
                {
                    this.state.RecipeList.length > 0 ?
                        this.state.RecipeList.map((recipe, index) => (
                            <RecipeTab key={index} recipeInfo={recipe} />
                        )) : <p>Loading...</p>
                }
            </div>
        );

    }

}