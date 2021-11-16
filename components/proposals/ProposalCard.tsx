import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ClientDescriptionTable from "../clients/ClientDescriptionTable";

export const ProposalCard = ({
  proposal,
  inDialog = false,
  inPost = false,
}) => {
  let router = useRouter();
  console.log(proposal);

  let { post } = proposal;
  let { client } = post;
  return (
    <div>
      <div>
        <div>
          <ClientDescriptionTable post={post} client={client} />

          <div>
            <div>
              {!inPost && (
                <Link passHref href={`/t/proposals/${post.id}/edit`}>
                  <button>View Post</button>
                </Link>
              )}
              <Link passHref href={`/t/proposals/${proposal.id}/edit`}>
                <button>Edit Proposal</button>
              </Link>

              {/* <DeleteProposalButton className={classes.actionButton} proposal={proposal} /> */}
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h5>Your Message</h5>
              <p>{proposal.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
