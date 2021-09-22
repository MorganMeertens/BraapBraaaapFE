/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditReview
// ====================================================

export interface EditReview_editReview {
  __typename: "Review";
  id: string;
  content: string;
  modified: any;
  created: any;
}

export interface EditReview {
  editReview: EditReview_editReview;
}

export interface EditReviewVariables {
  reviewId: string;
  content: string;
}
