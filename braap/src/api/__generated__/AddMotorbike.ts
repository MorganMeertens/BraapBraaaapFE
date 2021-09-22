/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddMotorbike
// ====================================================

export interface AddMotorbike_addMotorbike {
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

export interface AddMotorbike {
  addMotorbike: AddMotorbike_addMotorbike;
}

export interface AddMotorbikeVariables {
  make: string;
  model: string;
  year: string;
  youTubeReviewLink: string;
  companyId: string;
}
