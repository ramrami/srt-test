import gql from "graphql-tag";

export const THERAPISTS_QUERY = gql`
  query Therapists($first: Int, $after: String, $before: String) {
    therapists {
      therapistsConnection(first: $first, after: $after, before: $before) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
          }
        }
      }
    }
  }
`;

export const THERAPIST_QUERY = gql`
  query Therapist($id: Int!) {
    therapist(id: $id) {
      country
      createdAt
      description
      firstName
      id
      languages {
        name
      }
      lastName
      modalities {
        name
      }
      insurances {
        name
        state
        country
      }
      paymentOptions {
        minRate
        maxRate
        slidingScale
      }
      credentials {
        id
        year
        level
        location
        major
        scope
        verified
      }
      specializedIssues {
        name
      }
      profileImageUrl
      environments
      therapyProcess
      websiteUrl
    }
  }
`;
