import { forwardRef } from "react";

import { InputText, InputTextProps } from "../../atoms/inputs/InputText";

export type FormFieldTextProps = InputTextProps & {
  id: string;
  csLabel?: string;
};

export const FormFieldText = forwardRef<HTMLInputElement, FormFieldTextProps>(
  function FormFieldText({ csLabel, id, ...restProps }, ref) {
    return (
      <div>
        {csLabel && <label htmlFor={id}>{csLabel}</label>}
        <InputText id={id} {...restProps} ref={ref} />
      </div>
    );
  }
);
