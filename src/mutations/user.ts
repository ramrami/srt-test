import gql from "graphql-tag";

export const SIGNUP_MUTATION = gql`
  mutation CreateUser($input: CreateUserMutationInput!) {
    createUser(input: $input) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation SignInUser($input: SignInUserMutationInput!) {
    signInUser(input: $input) {
      token
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($input: DeleteUserMutationInput!) {
    deleteUser(input: $input) {
      user {
        id
      }
    }
  }
`;
