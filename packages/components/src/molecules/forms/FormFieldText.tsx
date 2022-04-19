import { forwardRef } from "react";

import { InputText, InputTextProps } from "../../atoms/inputs/InputText";

export type FormFieldTextProps = InputTextProps & {
  error?: boolean;
  label?: string;
  id: string;
};

export const FormFieldText = forwardRef<HTMLInputElement, FormFieldTextProps>(
  function FormFieldText({ label, error, id, ...restInputTextProps }, ref) {
    return (
      <div>
        {typeof label !== "undefined" && <label htmlFor={id}>{label}</label>}
        <InputText {...restInputTextProps} ref={ref} />
        {error && <div>There was an error</div>}
      </div>
    );
  }
);
