import React from "react";

import { FormFieldText } from "./FormFieldText";

export default {
  title: "Molecules / Forms / FormFields"
};

export const AllFields = () => {
  return (
    <>
      <FormFieldText id="fftext" />
      <FormFieldText id="fftest2" csLabel="Input label" />
    </>
  );
};
