import React from 'react';
import axios from 'axios';
import { Button, FormMainDiv, FormHeader, FormDiv, FormLabel, FormInput, FormTextArea, FormError } from './MainDiv.js';

export default class RecipeAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RecipeObj: {
                Title: '',
                ImageUrl: '',
                ShortDescription: '',
                Ingredients: '',
                Instructions: '',
                Notes: ''
            },
            errorMessage: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.SubmitRecipe = this.SubmitRecipe.bind(this);
    }

    handleChange(event, value) {
        debugger;
        let test = event.target.id;
        let data = event.target.value;
        this.setState(prevState => ({
            RecipeObj: {                   // object that we want to update
                ...prevState.RecipeObj,    // keep all other key-value pairs
                [test]: data    // update the value of specific key
            }
        }))
    }

    async SubmitRecipe(event) {
        debugger;
        for (var key in this.state.RecipeObj) {
            if (this.state.RecipeObj[key] == "") {
                this.setState({
                    errorMessage: `Please fill the required field: ${key}`
                });
                return;
            }
        }
        this.setState({
            errorMessage: ""
        });
        try {
            let response = await axios.post('/addRecipe', {
                addRecipe: this.state.RecipeObj
            });
            console.log(response);
        } catch (ex) {
            console.log(ex);
        }
        this.props.hideForm();

    }

    render() {
        return (
            <div>
                <Button onClick={this.props.hideForm.bind(this)}>HOME</Button>
                <FormMainDiv>
                    <FormHeader>ADD RECIPE</FormHeader>
                    <FormDiv>
                        <FormLabel>Title: </FormLabel>
                        <FormInput type="text" id="Title" name="Title" placeholder="Title" value={this.state.RecipeObj.Title} onChange={this.handleChange} ></FormInput>
                        <FormLabel>Image URL: </FormLabel>
                        <FormInput type="text" id="ImageUrl" name="ImageUrl" placeholder="Image URL" value={this.state.RecipeObj.ImageUrl} onChange={this.handleChange}></FormInput>
                        <FormLabel>Short Description: </FormLabel>
                        <FormTextArea id="ShortDescription" placeholder="Short Description" value={this.state.RecipeObj.ShortDescription} onChange={this.handleChange} ></FormTextArea>
                        <FormLabel>Ingredients: </FormLabel>
                        <FormTextArea id="Ingredients" placeholder="Ingredients" value={this.state.RecipeObj.Ingredients} onChange={this.handleChange} ></FormTextArea>
                        <FormLabel>Instructions: </FormLabel>
                        <FormTextArea id="Instructions" placeholder="Instructions" value={this.state.RecipeObj.Instructions} onChange={this.handleChange} ></FormTextArea>
                        <FormLabel>Notes: </FormLabel>
                        <FormTextArea id="Notes" placeholder="Notes" value={this.state.RecipeObj.Notes} onChange={this.handleChange} ></FormTextArea>
                        <Button onClick={this.SubmitRecipe.bind(this)}>SUBMIT</Button>
                        <FormError>{this.state.errorMessage}</FormError>
                    </FormDiv>
                </FormMainDiv>
            </div>
        );
    }

}