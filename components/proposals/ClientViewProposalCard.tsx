import Link from "next/link";
import React from "react";
import Button from "../../helpers/tailwindHelpers/Button";
import { TherapistProfileHeader } from "../therapists/TherapistProfile/TherapistProfileHeader";

export const ClientViewProposalCard = ({
  proposal,
  inDialog = false,
  inPost = false,
}) => {
  let { therapist } = proposal;
  return (
    <div className="card">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="p-6 bg-white">
        <TherapistProfileHeader therapist={therapist} />

        <div className="mt-5 mb-5 text-xl font-medium text-gray-900">
          {`Message from ${therapist.lastName}`}
        </div>
        <div className="max-w-5xl font-medium prose text-gray-600">
          {proposal.message}
        </div>

        <div className="inline-block lg:hidden">
          <Link passHref href={`/c/therapists/${therapist.id}`}>
            <Button className="text-center">View profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
