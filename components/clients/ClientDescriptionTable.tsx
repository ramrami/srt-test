import router from "next/router";
import React from "react";

export default function ClientDescriptionTable({ client, post }) {
  return (
    <div className="grid grid-cols-1 pt-3 gap-x-12 gap-y-4 sm:grid-cols-2">
      <div className="col-span-1">
        <dt className="attribute-label">Location</dt>
        <dd className="attribute-body">{`${client.city}, ${client.state}, ${
          client.country
        }`}</dd>
      </div>
      <div className="col-span-1">
        <dt className="attribute-label">Languages</dt>
        <dd className="attribute-body">
          {client.languages.map((l) => l.name)}
        </dd>
      </div>
      <div className="col-span-1">
        <dt className="attribute-label">Age</dt>
        <dd className="attribute-body">{`${client.age} Years Old`}</dd>
      </div>
      <div className="col-span-1">
        <dt className="attribute-label">Setting Preference</dt>
        <dd className="attribute-body">{post.environment}</dd>
      </div>
      {router.pathname.includes("/t/") && (
        <>
          <div className="col-span-1">
            <dt className="attribute-label">Taking Medication</dt>
            <dd className="attribute-body">{post.onMeds ? "Yes" : "No"}</dd>
          </div>
          <div className="col-span-1">
            <dt className="attribute-label">Has Seen Therapist</dt>
            <dd className="attribute-body">
              {post.seenTherapist ? "Yes" : "No"}
            </dd>
          </div>
        </>
      )}
    </div>
  );
}
