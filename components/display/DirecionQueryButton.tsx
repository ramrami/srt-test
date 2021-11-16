import React, { PropsWithoutRef } from "react";
import Button from "../../helpers/tailwindHelpers/Button";

type DirectionQuerryButtonProps = {
  buttonProps: {
    page: number;
    hasMore: boolean;
    goToNextPage: Function;
    goToPreviousPage: Function;
    className?: string;
  };
} & PropsWithoutRef<any>;

export const DirectionQueryButton = ({
  buttonProps,
}: DirectionQuerryButtonProps) => {
  let { page, hasMore, goToNextPage, goToPreviousPage } = buttonProps;
  let className = buttonProps.className || "mt-4";
  return (
    <div className={`flex flex-row gap-x-5 ${className}`}>
      <Button
        disabled={page === 0}
        onClick={goToPreviousPage}
        text={"Previous"}
      />
      <Button disabled={!hasMore} onClick={goToNextPage} text={"Next"} />
    </div>
  );
};
