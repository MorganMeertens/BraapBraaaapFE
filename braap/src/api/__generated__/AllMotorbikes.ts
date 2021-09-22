/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllMotorbikes
// ====================================================

export interface AllMotorbikes_allMotorbikes_pageInfo {
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

export interface AllMotorbikes_allMotorbikes_edges {
  __typename: "MotorbikeEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface AllMotorbikes_allMotorbikes_nodes {
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

export interface AllMotorbikes_allMotorbikes {
  __typename: "MotorbikeConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: AllMotorbikes_allMotorbikes_pageInfo;
  /**
   * A list of edges.
   */
  edges: AllMotorbikes_allMotorbikes_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: AllMotorbikes_allMotorbikes_nodes[] | null;
}

export interface AllMotorbikes {
  allMotorbikes: AllMotorbikes_allMotorbikes | null;
}

export interface AllMotorbikesVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
