/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditCompany
// ====================================================

export interface EditCompany_editCompany {
  __typename: "Company";
  id: string;
  companyName: string;
  webURL: string;
  countryOfOrigin: string;
}

export interface EditCompany {
  editCompany: EditCompany_editCompany;
}

export interface EditCompanyVariables {
  companyId: string;
  companyName: string;
  webURL: string;
  countryOfOrigin?: string | null;
}
