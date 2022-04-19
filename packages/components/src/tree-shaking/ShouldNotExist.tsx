import React, { FC } from "react";

export const ShouldNotExist: FC = () => {
  return <div>THIS SHOULD NOT BE IN THE PRODUCTION BUNDLE</div>;
};
