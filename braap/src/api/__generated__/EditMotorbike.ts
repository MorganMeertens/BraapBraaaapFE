/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditMotorbike
// ====================================================

export interface EditMotorbike_editMotorbike {
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

export interface EditMotorbike {
  editMotorbike: EditMotorbike_editMotorbike;
}

export interface EditMotorbikeVariables {
  motorbikeId: string;
  make: string;
  model: string;
  year: string;
  youTubeReviewLink?: string | null;
}
