import { gql } from "@apollo/client";

export const BRAAPUSER = gql`
    fragment braapuserFields on BraapUser {
        id
        userName
        gitHub
        imageURI
    }
`;

export const COMPANY = gql`
    fragment companyFields on Company {
        id
        companyName
        webURL
        countryOfOrigin
    }
`;

export const MOTORBIKE = gql`
    fragment motorbikeFields on Motorbike {
        id
        make
        model
        category
        year
        imageURL
        youTubeReviewLink
        youTubeThumbnailURL
        engineType
        power
        torque
        displacement
        compression
        boreXStroke
        fuelConsumption
        modified
        created
    }
`;

export const REVIEW = gql`
    fragment reviewFields on Review {
        id
        content
        modified
        created
    }
`;

export const PAGE_INFO = gql`
    fragment pageInfoFields on PageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
`;