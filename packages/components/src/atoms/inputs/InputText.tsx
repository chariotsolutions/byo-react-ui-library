import { styled } from "@linaria/react";
import clsx from "clsx";
import { forwardRef } from "react";

import { makeRem } from "../../theme/theme.utils";

export type InputTextProps = JSX.IntrinsicElements["input"] & {
  csSize?: "dense" | "default";
};

const SInputText = styled.input`
  &.default {
    height: ${makeRem(44)};
    padding: 0 ${makeRem(16)};
  }
  &.dense {
    height: ${makeRem(36)};
  }
`;

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText({ csSize = "default", className, ...restProps }, ref) {
    return (
      <SInputText
        {...restProps}
        type="text"
        ref={ref}
        className={clsx(className, {
          dense: csSize === "dense",
          default: csSize === "default"
        })}
      />
    );
  }
);
