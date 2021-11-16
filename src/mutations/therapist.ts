import gql from "graphql-tag";

export const UPDATE_THERAPIST_MUTATION = gql`
  mutation UpdateTherapist($input: TherapistUpdateInput!) {
    therapistUpdate(input: $input) {
      therapist {
        id
      }
    }
  }
`;
export const DELETE_THERAPIST_MUTATION = gql`
  mutation DeleteTherapist($input: TherapistDeleteInput!) {
    therapistDelete(input: $input) {
      therapist {
        id
      }
    }
  }
`;
