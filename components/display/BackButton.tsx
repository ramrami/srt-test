import useRouter from "next/router";
import React from "react";

type ButtonPropsWithText = {
  text?: string;
  className?: any;
};

export const BackButton = ({ text = "Back", path = false }) => {
  let router = useRouter;
  return (
    <button
      onClick={() => {
        if (path) {
          router.push(path);
        } else {
          router.back();
        }
      }}
    >
      {text}
    </button>
  );
};
