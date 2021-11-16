import gql from "graphql-tag";

export const POST_PROPOSALS_QUERY = gql`
  query PostProposals(
    $postId: Int!
    $first: Int
    $after: String
    $before: String
  ) {
    postProposals {
      postProposalsConnection(
        postId: $postId
        first: $first
        after: $after
        before: $before
      ) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            status
            message
            therapist {
              id
              firstName
              lastName
              profileImageUrl
              age
            }
          }
        }
      }
    }
  }
`;
export const SENT_PROPOSALS_QUERY = gql`
  query SentProposals($first: Int, $after: String, $before: String) {
    asTherapist {
      proposals(first: $first, after: $after, before: $before) {
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
export const RECEIVED_PROPOSALS_QUERY = gql`
  query ReceivedProposals($first: Int, $after: String, $before: String) {
    asClient {
      proposals(first: $first, after: $after, before: $before) {
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
export const PROPOSAL_QUERY = gql`
  query Proposal($id: Int!) {
    proposal(id: $id) {
      id
      message
      post {
        id
        createdAt
        environment
        specializedIssues {
          name
        }
        client {
          city
          state
          age
          languages {
            name
          }
        }
      }
    }
  }
`;
