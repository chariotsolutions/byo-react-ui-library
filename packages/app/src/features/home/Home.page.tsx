import { Button } from "@internal/components";
import { FC } from "react";

export const PageHome: FC = () => {
  return (
    <div
      style={{
        padding: "4rem",
      }}
    >
      <h1>Welcome to the home page!</h1>
      <Button variant="contained" color="primary">
        Button!
      </Button>
    </div>
  );
};
