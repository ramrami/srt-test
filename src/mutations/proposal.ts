import gql from "graphql-tag";

export const CREATE_PROPOSAL_MUTATION = gql`
  mutation CreateProposal($input: ProposalCreateInput!) {
    proposalCreate(input: $input) {
      proposal {
        id
      }
    }
  }
`;
export const UPDATE_PROPOSAL_MUTATION = gql`
  mutation UpdateProposal($input: ProposalUpdateInput!) {
    proposalUpdate(input: $input) {
      proposal {
        id
      }
    }
  }
`;
export const DELETE_PROPOSAL_MUTATION = gql`
  mutation DeleteProposal($input: ProposalDeleteInput!) {
    proposalDelete(input: $input) {
      proposal {
        id
      }
    }
  }
`;
