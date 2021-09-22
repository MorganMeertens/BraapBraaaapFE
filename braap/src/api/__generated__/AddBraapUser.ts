/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBraapUser
// ====================================================

export interface AddBraapUser_addBraapUser {
  __typename: "BraapUser";
  id: string;
  userName: string;
  gitHub: string;
  imageURI: string;
}

export interface AddBraapUser {
  addBraapUser: AddBraapUser_addBraapUser;
}

export interface AddBraapUserVariables {
  userName: string;
  gitHub: string;
  imageURI?: string | null;
}
