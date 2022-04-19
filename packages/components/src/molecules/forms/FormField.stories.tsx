import React from "react";

import { FormFieldText } from "./FormFieldText";

export default {
  title: "Molecules / Forms / FormFields"
};

export const AllFields = () => {
  return (
    <>
      <FormFieldText label="This is an input" id="text-label" />
    </>
  );
};
