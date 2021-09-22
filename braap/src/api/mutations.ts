import { gql } from "@apollo/client";
import * as fragments from "./fragments";


export const ADD_MOTORBIKE = gql`
  mutation AddMotorbike(
    $make: String!
    $model: String!
    $year: String!
    $youTubeReviewLink: String!
    $companyId: String!
  ) {
    addMotorbike(input: {make: $make, model: $model, year: $year, youTubeReviewLink: $youTubeReviewLink, companyId: $companyId}){
      ...motorbikeFields
    }
  }
  ${fragments.MOTORBIKE}
`;

export const EDIT_MOTORBIKE = gql`
  mutation EditMotorbike(
    $motorbikeId: String!
    $make: String!
    $model: String!
    $year: String!
    $youTubeReviewLink: String
   
  ) {
    editMotorbike(input: {motorbikeId: $motorbikeId, make: $make, model: $model, year: $year, youTubeReviewLink: $youTubeReviewLink}){
      ...motorbikeFields
    }
  }
  ${fragments.MOTORBIKE}
`;

export const ADD_COMPANY = gql`
  mutation AddCompany(
    $companyName: String!
    $webURL: String!
    $countryOfOrigin: String
  ) {
    addCompany(input: {companyName: $companyName, webURL: $webURL, countryOfOrigin: $countryOfOrigin}){
      ...companyFields
    }
  }
  ${fragments.COMPANY}
`;

export const EDIT_COMPANY = gql`
  mutation EditCompany(
    $companyId: String!
    $companyName: String!
    $webURL: String!
    $countryOfOrigin: String
   
  ) {
    editCompany(input: {companyId: $companyId, companyName: $companyName, webURL: $webURL, countryOfOrigin: $countryOfOrigin}){
      ...companyFields
    }
  }
  ${fragments.COMPANY}
`;


  export const ADD_REVIEW = gql`
  mutation AddReview(
    $content: String!
    $motorbikeId: String!
    $braapUserId:String!
  ){
    addReview(input: {content: $content, motorbikeId: $motorbikeId, braapUserId: $braapUserId}){
      ...reviewFields
    }
  }
  ${fragments.REVIEW}
  `;

  export const EDIT_REVIEW=gql`
    mutation EditReview(
      $reviewId: String!
      $content: String!
    ){
      editReview(input: {reviewId: $reviewId, content: $content}){
        ...reviewFields
      }
    }
    ${fragments.REVIEW}
  `;

  export const LOGIN = gql`
  mutation Login($code: String!) {
    login(input: { code: $code }) {
      user {
        ...braapuserFields
      }
      jwt
    }
  }
  ${fragments.BRAAPUSER}
`;

export const EDIT_SELF = gql`
  mutation EditSelf($name: String, $imageURI: String) {
    editSelf(input: { name: $name, imageURI: $imageURI }) {
      ...braapuserFields
    }
  }
  ${fragments.BRAAPUSER}
`;
