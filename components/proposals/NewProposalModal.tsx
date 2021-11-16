import {
  Link,
  useRouter,
  useMutation,
  BlitzPage,
  Routes,
  useParams,
  useAuthenticatedSession,
} from "blitz"
import Layout from "app/core/layouts/Layout"
import createProposal from "app/proposals/mutations/createProposal"
import { ProposalForm, FORM_ERROR } from "app/proposals/components/ProposalForm"
import { CreateProposalSchema } from "app/validators/proposalValidators"
import { zodSchemaAdaptorForFormik } from "app/helpers/zodFormikAdaptor"
import { getTherapistIdAndValidate } from "app/auth/helpers/getTherapistIdAndValidate"
import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { useSnackbar } from "notistack"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalContainer: {
      paddingBottom: "3ch",
    },
    buttonContainer: {
      justifyContent: "flex-end",
      alignItems: "baseline",
    },
  })
)
export const NewProposalModal = ({ postId, cancel }) => {
  const router = useRouter()
  const [createProposalMutation] = useMutation(createProposal)
  const session = useAuthenticatedSession()
  const therapistId = getTherapistIdAndValidate(session)
  const { enqueueSnackbar } = useSnackbar()
  const classes = useStyles()
  return (
    <div className={classes.modalContainer}>
      <ProposalForm
        submitText="Send Proposal"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        parentClasses={classes}
        cancel={cancel}
        schema={zodSchemaAdaptorForFormik(CreateProposalSchema)}
        initialValues={{ message: "", postId, therapistId }}
        onSubmit={async (values) => {
          try {
            const proposal = await createProposalMutation(values)

            enqueueSnackbar("Your Proposal Has Been Sent", {
              variant: "success",
              autoHideDuration: 3000,
            })
            router.push(Routes.TherapistShowProposalPage({ proposalId: proposal.id }))
          } catch (error) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
    </div>
  )
}

// NewProposalModal.authenticate = true
// NewProposalPage.getLayout = (page) => <Layout>{page}</Layout>

// export default NewProposalModal
