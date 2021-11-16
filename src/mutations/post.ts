import gql from "graphql-tag";

export const UPDATE_POST_MUTATION = gql`
  mutation UpdatePost($postUpdateInput: PostUpdateInput!) {
    postUpdate(input: $postUpdateInput) {
      post {
        id
      }
    }
  }
`;
export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($postCreateInput: PostCreateInput!) {
    postCreate(input: $postCreateInput) {
      post {
        id
      }
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation deletePost($postDeleteInput: PostDeleteInput!) {
    postDelete(input: $postDeleteInput) {
      post {
        id
      }
    }
  }
`;
