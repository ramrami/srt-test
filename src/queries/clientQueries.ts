import gql from "graphql-tag";
export const CLIENT_QUERY = gql`
  query ShowClient {
    client {
      id
    }
  }
`;
