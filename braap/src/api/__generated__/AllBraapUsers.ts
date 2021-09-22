/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllBraapUsers
// ====================================================

export interface AllBraapUsers_allBraapUsers_pageInfo {
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

export interface AllBraapUsers_allBraapUsers_edges {
  __typename: "BraapUserEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface AllBraapUsers_allBraapUsers_nodes {
  __typename: "BraapUser";
  id: string;
  userName: string;
  gitHub: string;
  imageURI: string;
}

export interface AllBraapUsers_allBraapUsers {
  __typename: "BraapUserConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: AllBraapUsers_allBraapUsers_pageInfo;
  /**
   * A list of edges.
   */
  edges: AllBraapUsers_allBraapUsers_edges[] | null;
  /**
   * A flattened list of the nodes.
   */
  nodes: AllBraapUsers_allBraapUsers_nodes[] | null;
}

export interface AllBraapUsers {
  allBraapUsers: AllBraapUsers_allBraapUsers | null;
}

export interface AllBraapUsersVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}
