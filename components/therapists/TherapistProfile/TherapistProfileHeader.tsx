import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../../helpers/tailwindHelpers/Button";
import TailwindBlitzImage from "../../display/TailwindBlitzImage";

export const TherapistProfileHeader = ({ therapist }) => {
  const router = useRouter();
  return (
    <div className="grid items-center items-left sm:flex sm:items-start sm:justify-between">
      <div className="flex-shrink-0 mr-8 text-left sm:inline-block">
        <TailwindBlitzImage
          className="mx-auto rounded-full sm:items-center"
          h={23 * 9}
          w={23 * 9}
          src={therapist.profileImageUrl}
          alt=""
        />
      </div>
      <div className="content-between flex-grow grid-cols-2 sm:space-x-5 items-left sm:flex sm:flex-row sm:items-start sm:justify-between">
        <div className="mt-4 text-left row sm:mt-0 sm:pt-1 sm:text-left">
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
            {" "}
            {`${therapist.firstName} ${therapist.lastName}` || "X. X"}
          </p>
          <p className="font-medium prose text-gray-600">
            Psychotherspist, LMFT
          </p>
          <div className="grid grid-cols-2 pt-3 gap-y-4 md:grid-cols-2">
            <div className="col-span-1">
              <dt className="attribute-label">Location</dt>
              <dd className="attribute-body">
                {" Vancouver, British Columbia, Canada"}
              </dd>
            </div>
            <div className="col-span-1">
              <dt className="attribute-label">Languages Spoken</dt>
              <dd className="attribute-body">English, Spanish</dd>
            </div>
            <div className="col-span-1">
              <dt className="attribute-label">Settings Provided</dt>
              <dd className="attribute-body">Online</dd>
            </div>
            <div className="col-span-1">
              {therapist.age && (
                <>
                  <dt className="attribute-label">Age</dt>
                  <dd className="attribute-body">{therapist.age} Years Old</dd>
                </>
              )}
            </div>
          </div>
        </div>

        <Button className={"justify-self-end"}>Book Appointment</Button>

        {!router.pathname.includes("therapistId") && (
          <Link passHref href={`/c/therapists/${therapist.id}`}>
            <Button className="text-center">View profile</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
