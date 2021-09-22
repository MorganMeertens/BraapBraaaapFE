/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CompanyById
// ====================================================

export interface CompanyById_companyById {
  __typename: "Company";
  id: string;
  companyName: string;
  webURL: string;
  countryOfOrigin: string;
}

export interface CompanyById {
  companyById: CompanyById_companyById;
}

export interface CompanyByIdVariables {
  id: number;
}
