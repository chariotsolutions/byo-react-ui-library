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
  border-radius: ${makeRem(4)};
  padding: 0 ${makeRem(24)};

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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { csVariant, csColor, children, className, ...restProps },
    ref
  ) {
    return (
      <StyledButton
        {...restProps}
        ref={ref}
        className={clsx(className, {
          base: !csVariant && !csColor,
          contained: csVariant === "contained",
          text: csVariant === "text",
          primary: csColor === "primary",
          secondary: csColor === "secondary"
        })}
      >
        {children}
      </StyledButton>
    );
  }
);
