import styled from 'styled-components';

export const MainHeader = styled.div`
  font-size: 72px;
  fonr-weight:500;
  text-align :center
  width:100%;
  height:100%;
  color:black;
  text-shadow: -1px 0 lightblue, 0 1px lightblue, 1px 0 lightblue, 0 -1px lightblue;
`;

export const RecipePanel = styled.div`  
  text-align :center
  width:300px;
  height:380px;
  background-color:lightGray;
  display:inline-block;  
  margin:20px;
  cursor:pointer
  border:1px solid lightGray;
  padding:5px;
`;

export const RecipeTiTle = styled.p`
  color:white
  background-color:#000000b5;
  font-size: 20px;
  fonr-weight:500;
  height:50px;
  margin-bottom:10px;
  margin-top:0px;
  padding-top:25px;
  text-align:center
`;

export const RecipeReview = styled.div`
  color:white
  background-color:#000000b5;
  font-size: 18px;
  fonr-weight:500;
  height:42px;
  margin-bottom:10px;
  margin-top:-6px;
  padding-top:5px;
  text-align:center
`;

export const RecipeImg = styled.img`
  width:300px;
  height:250px;
`;

export const RecipeReviewCount = styled.span`
  display:block;
  position:relative;
  bottom:23px;
  left:45px;
  font-size:15px;
`;

export const BackButton = styled.button`
width: 150px;
height: 35px;
background-color: #000000b5;
color: #fff;
border-radius: 3px;
`;

export const RecipeDiv = styled.div`
max-width:1300px;
margin:0px auto;
`;

export const RecipeHeader = styled.h1`
font-family: "Lato Light",sans-serif;
letter-spacing: -.02em;
line-height: 1.1em;
padding-bottom: 0;
font-size: 40px;
padding-bottom: 20px;
border-bottom:1px solid gray;
-webkit-font-smoothing: antialiased;
color: #383838;
font-weight: normal`;

export const RecipeDetailImg = styled.img`
  width:350px;
  height:350px;
  margin:20px;
`;
export const RecipeDetailShortDescription = styled.div`
  width:820px;
  height:300px;
  font-family: "Lato",Aerial;
  font-size: 20px;
  display:inline-block;
  position:relative;
  bottom:200px;
  margin:20px;
  line-height: 1.62em;
  background-color:lightGray;
  padding:50px 20px 0px 20px;
`;