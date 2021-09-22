/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BraapUserById
// ====================================================

export interface BraapUserById_braapUserById {
  __typename: "BraapUser";
  id: string;
  userName: string;
  gitHub: string;
  imageURI: string;
}

export interface BraapUserById {
  braapUserById: BraapUserById_braapUserById;
}

export interface BraapUserByIdVariables {
  id: number;
}
