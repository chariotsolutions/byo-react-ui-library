import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";

export type ButtonProps = {
  variant?: "contained" | "text";
  color?: "primary" | "secondary";
  children: ReactNode;
};

const StyledButton = styled.button`
  &.contained {
  }
  &.text {
  }
  &.primary {
  }
  &.secondary {
  }
`;

export const Button: FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  children
}) => {
  return (
    <StyledButton
      className={clsx({
        variant,
        color
      })}
    >
      {children}
    </StyledButton>
  );
};
