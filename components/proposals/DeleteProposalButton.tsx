import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "urql";
import Button from "../../helpers/tailwindHelpers/Button";

export const DeleteProposalButton = ({ proposal, className }) => {
  const [deleteProposalMutation] = useMutation(deleteProposal);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Button
      className={className}
      onClick={async () => {
        if (window.confirm("This will be deleted")) {
          await deleteProposalMutation({ id: proposal.id });
          enqueueSnackbar("Proposal Deleted", {
            variant: "error",
            autoHideDuration: 3000,
          });
          router.push(Routes.TherapistProposalsPage());
        }
      }}
    >
      Delete Proposal
    </Button>
  );
};
