import Link from "next/link";
import React from "react";
import Button from "./Button";

export function Card({ children, className = "" }) {
  return <div className={`card`}>{children}</div>;
}

export const IconString = ({ children }) => {
  return <div className={"flex flex-row"}>{children}</div>;
};

export const CardActionsContent = ({ post, role }) => {
  if (role == "therapist") {
    return (
      <div className="flex flex-col">
        <Link passHref href={`/c/posts/${post.id}`}>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
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
        <Link passHref href={Routes.ClientShowPostPage({ postId: post.id })}>
          <Button text={"View"} disabled={false} onClick={""} />
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

export const TextList = ({ children }) => {
  return <div className="flex-col max-w-5xl mt-7">{children}</div>;
};
export const TLElement = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};
export const TLTitle = ({ children }) => {
  return <h2 className="mt-5 text-2xl prose">{children}</h2>;
};

export const TLBody = ({ children, prose = true }) => {
  return (
    <p className={`py-1 pb-2  max-w-none ${prose ? "prose" : ""} `}>
      {children}
    </p>
  );
};
