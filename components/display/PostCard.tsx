import Link from "next/link";
import React from "react";
import ClientDescriptionTable from "../clients/ClientDescriptionTable";
import { displayDependingOnAgeOfItem } from "./displayTime";

export default function PostCard({ post, role }) {
  let { client, _count } = post;
  return (
    <div className="pb-3 card">
      <div className={" pl-3"}>
        <div className={"flex flex-row justify-between mr-3"}>
          <div>
            <h1 className={"text-3xl pb-1"}>??</h1>
            <p className={"text-secondary pb-5"}>
              {post.specializedIssues.map((i) => i.name)}
            </p>
          </div>
          <span className="text-gray-400">
            Posted {displayDependingOnAgeOfItem(post.createdAt)}
          </span>
          <CardActionsContent post={post} role={role} />
        </div>
        <ClientDescriptionTable post={post} client={client} />
        <h2 className={"text-xl pt-4 pb-2"}>
          {`The Problem ${role == "client" ? "You're" : "They're"} Facing`}
        </h2>
        <CardBodyTextLimiter text={post.problems} post={post} />

        <div>
          <br />
          {/* <p className={"prose-xs"}>{_count.proposals} Proposals Sent</p> */}
        </div>
      </div>
    </div>
  );
}

const CardBodyTextLimiter = ({ text, post, clipLength = 300 }) => {
  if (text.length > clipLength) {
    return (
      <div className="inline">
        <span className="inline antialiased ">{`${text.slice(
          0,
          clipLength
        )}... `}</span>
        <Link passHref href={`/t/posts/${post.id}`}>
          <span className="bg-primary-500" style={{ cursor: "pointer" }}>
            {">> Read More"}
          </span>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p className="antialiased ">{text}</p>
      </div>
    );
  }
};

export const CardActionsContent = ({ post, role }) => {
  if (role == "therapist") {
    return (
      <div className="flex flex-col">
        <Link passHref href={`/t/posts/${post.id}`}>
          <button type="button" className="btn-primary">
            <p className={" antialiased font-medium font-sans"}>View</p>
          </button>
        </Link>
        {/* <Button variant="contained" size="small" className={classes.actionButton}>
          Save
        </Button>
        <Button variant="contained" size="small" className={classes.actionButton}>
          Hide
        </Button> */}
      </div>
    );
  } else if (role == "client") {
    return (
      <div className="grid grid-rows-2">
        <Link passHref href={`/c/posts/${post.id}`}>
          <button className="btn-primary">View</button>
        </Link>
        {/* <Button variant="contained" size="small" className={classes.actionButton}>
        Save
      </Button>
      <Button variant="contained" size="small" className={classes.actionButton}>
        Hide
      </Button> */}
      </div>
    );
  } else {
    return <>{""}</>;
  }
};
