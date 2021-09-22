/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReviewsForMotorbikeId
// ====================================================

export interface ReviewsForMotorbikeId_reviewsForMotorbikeId_pageInfo {
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

export interface ReviewsForMotorbikeId_reviewsForMotorbikeId_edges {
  __typename: "ReviewEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface ReviewsForMotorbikeId_reviewsForMotorbikeId_nodes {
  __typename: "Review";
  id: string;
  content: string;
  modified: any;
  created: any;
}

export interface ReviewsForMotorbikeId_reviewsForMotorbikeId {
  __typename: "ReviewConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: ReviewsForMotorbikeId_reviewsForMotorbikeId_pageInfo;
  /**
   * A list of edges.
   */
  edges: ReviewsForMotorbikeId_reviewsForMotorbikeId_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: ReviewsForMotorbikeId_reviewsForMotorbikeId_nodes[] | null;
}

export interface ReviewsForMotorbikeId {
  reviewsForMotorbikeId: ReviewsForMotorbikeId_reviewsForMotorbikeId | null;
}

export interface ReviewsForMotorbikeIdVariables {
  id: number;
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
