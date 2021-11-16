import gql from "graphql-tag";

export const MY_POSTS_QUERY = gql`
  query MyPosts($first: Int, $after: String, $before: String) {
    asClient {
      posts(first: $first, after: $after, before: $before) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            createdAt
            specializedIssues {
              name
            }
            problems
            environment
            client {
              age
              city
              state
              country
              languages {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const ALL_POSTS_QUERY = gql`
  query AllPosts($first: Int, $after: String, $before: String) {
    asTherapist {
      allPosts(first: $first, after: $after, before: $before) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            createdAt
            specializedIssues {
              name
            }
            problems
            environment
            client {
              age
              city
              state
              country
              languages {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const POST_QUERY = gql`
  query Post($id: Int!) {
    post(id: $id) {
      id
      problems
      expectations
      createdAt
      environment
      onMeds
      seenTherapist
      specializedIssues {
        name
      }
      client {
        id
        languages {
          name
        }
        age
        city
        state
        country
      }
      proposals {
        message
      }
      proposalCount
      myProposal {
        id
      }
    }
  }
`;
