import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { useForm } from "react-hook-form";
import { useUpdateProposalMutation } from "../../src/generated/graphql";
import { proposalSchema } from "../../src/schemas/proposals";

export const ProposalForm = ({proposal}) => {
  let {message, id} = proposal
  console.log('a1', id);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues:{ message},
    resolver: zodResolver(proposalSchema),
  });

  const onSubmit = data => {
    console.log('firing');
    console.log('b', id);
    console.log(typeof id);
    
    executeMutation({
      input: { message: data.message, proposalId: parseInt(id)}
    })
  }
  let [state, executeMutation] = useUpdateProposalMutation();
  
  return <form onSubmit={handleSubmit((d) => {
    onSubmit(d)
  }
  )}>
  <input type="text" {...register('message')} />
  {errors.message?.message && <p>{errors.message?.message}</p>}
  <input type="submit" />
</form>;
};
