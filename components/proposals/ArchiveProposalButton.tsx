import { Button } from "@material-ui/core"
import { useMutation, useRouter, Routes } from "blitz"
import React from "react"
import archiveProposal from "../mutations/archiveProposal"
import { useSnackbar } from "notistack"

export const ArchiveProposalButton = ({ proposal, className = "" }) => {
  const [archiveProposalMutation] = useMutation(archiveProposal)
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      className={className}
      onClick={async () => {
        if (window.confirm("This will be archived")) {
          await archiveProposalMutation({ id: proposal.id, postId: proposal.post.id })
          enqueueSnackbar("Proposal Archived", {
            variant: "warning",
            autoHideDuration: 3000,
          })
        }
      }}
    >
      Archive Proposal
    </Button>
  )
}
