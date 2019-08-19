import styled from 'styled-components';

export const MainHeader = styled.div`
  font-size: 72px;
  fonr-weight:500;
  text-align :center
  width:100%;
  height:100%;
  color:#e05050;
  text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
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

export const Button = styled.button`
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
  float:left;
  margin:20px;
`;
export const RecipeDetailShortDescription = styled.div`
  width:820px;
  height:300px;
  font-family: "Lato",Aerial;
  font-size: 20px;
  display:inline-block;
  margin:20px;
  line-height: 1.62em;
  background-color:#d3d3d34a;
  padding:50px 20px 0px 20px;
`;

export const RecipeInfoDiv = styled.div`
  max-width:1300px; 
  font-family: "Lato",Aerial;
  font-size: 20px;  
  bottom:200px;
  margin:20px;
  line-height: 1.62em;
  background-color:#d3d3d34a;
  padding:20px;
`;

export const RecipeSubText = styled.h2`
  font-family: "Lato",Aerial;
  font-size: 25px;    
  line-height: 1.62em;   
  color:red;
  padding-left:20px;
`;


export const ReviewMainDiv = styled.div`
  font-family: "Lato",Aerial;
  font-size: 20px;    
  line-height: 1.62em;   
  background-color:#d3d3d34a;
  padding:20px;
  max-width:1260px; 
  margin:20px;
`;

export const RevieweDiv = styled.div`
  background-color:#fff;
  padding:20px;
  border:1px solid black;
  width:96%; 
  margin-bottom:10px; 
`;

export const ReviewUserImage = styled.img`
width:150px;
height:100px
float:left;

`

export const ReviewUserName = styled.p`
color:#c1c1c1
`

export const ReviewReviewDiv = styled.div`
float:right;
position:relative;
bottom:110px;
`
export const AddRecipeDiv = styled.div`
margin:20px;
display:block;
`

export const FormHeader = styled(RecipeSubText)`
text-align:center;
`


export const FormMainDiv = styled.div`
max-width:1300px;
margin:0px auto;
height:1000px;
background-color:#d3d3d34a;
`
export const FormDiv = styled.div`
max-width:800px;
margin:0px auto;
align-items: center;
flex-direction: column;
`
export const FormLabel = styled.div`
color:Red;
font-size: 30px;    
font-weight:500px;
align-items: center;
text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
`
export const FormInput = styled.input`
width: 750px;
margin:20px 0px;
height: 35px;
border: 1px solid #ccc;
background-color: #fff;
padding:1px 5px
`

export const FormTextArea = styled.textarea`
width: 750px;
margin:20px 0px;
height: 80px;
border: 1px solid #ccc;
background-color: #fff;
padding:1px 5px
`

export const FormError = styled.p`
color:red;
`