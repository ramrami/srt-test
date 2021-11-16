import Link from "next/link";
import React from "react";
export const SendOrViewProposalButton = ({ post, handleClick }) => {
  if (!!post.myProposal) {
    return (
      <Link passHref href={`/t/proposals/${post.myProposal.id}`}>
        <button className="btn-primary">View Proposal</button>
      </Link>
    );
  } else {
    return (
      <button className="btn-primary" onClick={handleClick}>
        Send Proposal
      </button>
    );
  }
};
