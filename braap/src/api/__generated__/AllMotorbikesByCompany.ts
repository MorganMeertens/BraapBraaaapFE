/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllMotorbikesByCompany
// ====================================================

export interface AllMotorbikesByCompany_allMotorbikesByCompany_pageInfo {
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

export interface AllMotorbikesByCompany_allMotorbikesByCompany_edges {
  __typename: "MotorbikeEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface AllMotorbikesByCompany_allMotorbikesByCompany_nodes {
  __typename: "Motorbike";
  id: string;
  make: string;
  model: string;
  category: string;
  year: string;
  imageURL: string;
  youTubeReviewLink: string;
  youTubeThumbnailURL: string;
  engineType: string;
  power: string;
  torque: string;
  displacement: string;
  compression: string;
  boreXStroke: string;
  fuelConsumption: string;
  modified: any;
  created: any;
}

export interface AllMotorbikesByCompany_allMotorbikesByCompany {
  __typename: "MotorbikeConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: AllMotorbikesByCompany_allMotorbikesByCompany_pageInfo;
  /**
   * A list of edges.
   */
  edges: AllMotorbikesByCompany_allMotorbikesByCompany_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: AllMotorbikesByCompany_allMotorbikesByCompany_nodes[] | null;
}

export interface AllMotorbikesByCompany {
  allMotorbikesByCompany: AllMotorbikesByCompany_allMotorbikesByCompany | null;
}

export interface AllMotorbikesByCompanyVariables {
  company: string;
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
