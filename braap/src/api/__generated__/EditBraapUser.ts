/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditBraapUser
// ====================================================

export interface EditBraapUser_editBraapUser {
  __typename: "BraapUser";
  id: string;
  userName: string;
  gitHub: string;
  imageURI: string;
}

export interface EditBraapUser {
  editBraapUser: EditBraapUser_editBraapUser;
}

export interface EditBraapUserVariables {
  braapUserId: string;
  userName: string;
  gitHub: string;
  imageURI?: string | null;
}
