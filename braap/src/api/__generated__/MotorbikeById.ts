/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MotorbikeById
// ====================================================

export interface MotorbikeById_motorbikeById_reviews {
  __typename: "Review";
  id: string;
  content: string;
  modified: any;
  created: any;
}

export interface MotorbikeById_motorbikeById {
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
  reviews: MotorbikeById_motorbikeById_reviews[];
}

export interface MotorbikeById {
  motorbikeById: MotorbikeById_motorbikeById;
}

export interface MotorbikeByIdVariables {
  id: number;
}
