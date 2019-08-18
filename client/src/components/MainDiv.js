import styled from 'styled-components';

export const MainHeader = styled.div`
  font-size: 72px;
  fonr-weight:500;
  text-align :center
  width:100%;
  height:100%;
  color:red;
  text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
`;

export const RecipePanel = styled.div`  
  text-align :center
  width:300px;
  height:380px;
  background-color:white;
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

export const RecipeReview = styled.p`
  color:white
  background-color:#000000b5;
  font-size: 18px;
  fonr-weight:500;
  height:45px;
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