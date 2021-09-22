import { gql } from "@apollo/client";
import * as fragments from "./fragments";

export const MOTORBIKES = gql`
    query AllMotorbikes($first: Int, $after: String, $last: Int, $before: String) {
        allMotorbikes(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...motorbikeFields
            }
        }
    }
    ${fragments.MOTORBIKE}
    ${fragments.PAGE_INFO}
    ${fragments.REVIEW}
`

export const MOTORBIKE  = gql`
    query MotorbikeById($id: Int!) {
        motorbikeById(id: $id) {
            ...motorbikeFields
            reviews{
                ...reviewFields
            }
        }
    }
    ${fragments.MOTORBIKE}
    ${fragments.REVIEW}
`

export const BRAAPUSERS = gql`
    query AllBraapUsers($first: Int, $after: String, $last: Int, $before: String) {
        allBraapUsers(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
            ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...braapuserFields
            }
        }
    }
    ${fragments.BRAAPUSER}
    ${fragments.PAGE_INFO}
`

export const BRAAPUSER = gql`
    query BraapUserById($id: Int!) {
        braapUserById(id: $id){
            ...braapuserFields
        }
    }
    ${fragments.BRAAPUSER}
`

export const MOTORBIKESBYCOMPANY = gql`
    query AllMotorbikesByCompany($company: String!, $first: Int, $after: String, $last: Int, $before: String) {
        allMotorbikesByCompany(company: $company, first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...motorbikeFields
            }
        }
    }
    ${fragments.MOTORBIKE}
    ${fragments.PAGE_INFO}
    ${fragments.REVIEW}
`

export const COMPANIES = gql`
    query AllCompanies($first: Int, $after: String, $last: Int, $before: String) {
        allCompanies(first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
            ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...companyFields
            }
        }
    }
    ${fragments.COMPANY}
    ${fragments.PAGE_INFO}
`

export const COMPANY = gql`
    query CompanyById($id: Int!) {
        companyById(id: $id){
            ...companyFields
        }
    }
    ${fragments.COMPANY}
`

export const REVIEWSFORMOTORBIKE = gql`
    query ReviewsForMotorbikeId($id: Int!, $first: Int, $after: String, $last: Int, $before: String) {
        reviewsForMotorbikeId(id: $id, first: $first, after: $after, last: $last, before: $before) {
            pageInfo{
                ...pageInfoFields
            }
            edges{
                cursor
            } 
            nodes { 
                ...reviewFields
                }
            }
        }

    ${fragments.PAGE_INFO}
    ${fragments.REVIEW}
`