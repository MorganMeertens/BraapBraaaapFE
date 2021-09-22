/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCompanies
// ====================================================

export interface AllCompanies_allCompanies_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether more edges exist prior the set defined by the clients arguments.
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface AllCompanies_allCompanies_edges {
  __typename: "CompanyEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface AllCompanies_allCompanies_nodes {
  __typename: "Company";
  id: string;
  companyName: string;
  webURL: string;
  countryOfOrigin: string;
}

export interface AllCompanies_allCompanies {
  __typename: "CompanyConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: AllCompanies_allCompanies_pageInfo;
  /**
   * A list of edges.
   */
  edges: AllCompanies_allCompanies_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: AllCompanies_allCompanies_nodes[] | null;
}

export interface AllCompanies {
  allCompanies: AllCompanies_allCompanies | null;
}

export interface AllCompaniesVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
