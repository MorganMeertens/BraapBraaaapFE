/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddReview
// ====================================================

export interface AddReview_addReview {
  __typename: "Review";
  id: string;
  content: string;
  modified: any;
  created: any;
}

export interface AddReview {
  addReview: AddReview_addReview;
}

export interface AddReviewVariables {
  content: string;
  motorbikeId: string;
  braapUserId: string;
}
