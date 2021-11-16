import gql from "graphql-tag";

export const UPDATE_CLIENT_MUTATION = gql`
  mutation UpdateClient($input: ClientUpdateInput!) {
    clientUpdate(input: $input) {
      client {
        id
      }
    }
  }
`;
