/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Self
// ====================================================

export interface Self_self {
  __typename: "BraapUser";
  id: string;
  userName: string;
  gitHub: string;
  imageURI: string;
}

export interface Self {
  self: Self_self;
}