/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCompany
// ====================================================

export interface AddCompany_addCompany {
  __typename: "Company";
  id: string;
  companyName: string;
  webURL: string;
  countryOfOrigin: string;
}

export interface AddCompany {
  addCompany: AddCompany_addCompany;
}

export interface AddCompanyVariables {
  companyName: string;
  webURL: string;
  countryOfOrigin?: string | null;
}
