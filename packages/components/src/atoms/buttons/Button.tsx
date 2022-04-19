import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";

export type ButtonProps = {
  variant?: "contained" | "text";
  color?: "primary" | "secondary";
  children: ReactNode;
};

const StyledButton = styled.button`
  display: block;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 0 24px;

  & + & {
    margin-bottom: 16px;
  }

  &:not(.base) {
    height: 2rem;
  }

  &.contained {
    &.primary {
      background-color: #20a4f3;
      color: white;
    }
    &.secondary {
      background-color: #59f8e8;
    }
  }

  &.text {
    &.primary {
      color: #20a4f3;
    }
    &.secondary {
      color: #59f8e8;
    }
  }
`;

/**
 * Let's go about refactoring this...
 * 1. DOM Attribute Inheitance
 * 2. Style forwarding
 * 3. Class forwarding
 * 4. Make a utility to handle relatve sizing better
 */

export const Button: FC<ButtonProps> = ({
  variant,
  color = "primary",
  children
}) => {
  return (
    <StyledButton
      className={clsx({
        base: !variant && !color,
        contained: variant === "contained",
        text: variant === "text",
        primary: color === "primary",
        secondary: color === "secondary"
      })}
    >
      {children}
    </StyledButton>
  );
};
