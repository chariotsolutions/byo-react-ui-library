import { styled } from "@linaria/react";
import clsx from "clsx";
import { forwardRef } from "react";

import { makeRem } from "../../theme/theme.utils";

export type InputTextProps = JSX.IntrinsicElements["input"] & {
  csSize?: "default" | "dense";
};

const SInputText = styled.input`
  &.default {
    height: ${makeRem(44)};
  }

  &.dense {
    height: ${makeRem(36)};
  }
`;

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText({ csSize = "default", className, ...restProps }, ref) {
    return (
      <SInputText
        type="text"
        {...restProps}
        className={clsx(className, {
          dense: csSize === "dense",
          default: csSize === "default"
        })}
        ref={ref}
      />
    );
  }
);
