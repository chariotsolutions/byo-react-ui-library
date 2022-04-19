import { styled } from "@linaria/react";
import clsx from "clsx";
import React, { ReactNode, forwardRef } from "react";

import { makeRem } from "../../theme/theme.utils";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  csVariant?: "contained" | "text";
  csColor?: "primary" | "secondary";
  children: ReactNode;
};

const StyledButton = styled.button`
  display: block;
  background: none;
  border: none;

  &:not(.base) {
    height: ${makeRem(32)};
  }

  &.contained {
    &.primary {
      background-color: var(--color-primary);
      color: white;
    }
    &.secondary {
      background-color: var(--color-secondary);
    }
  }

  &.text {
    &.primary {
      color: var(--color-primary);
    }
    &.secondary {
      color: var(--color-secondary);
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ csVariant, csColor = "primary", children }, ref) {
    return (
      <StyledButton
        className={clsx({
          base: !csVariant && !csColor,
          contained: csVariant === "contained",
          text: csVariant === "text",
          primary: csColor === "primary",
          secondary: csColor === "secondary"
        })}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  }
);
