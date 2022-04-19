import { ComponentMeta } from "@storybook/react";
import React from "react";

import { InputText } from "./InputText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Inputs / InputText",
  component: InputText
} as ComponentMeta<typeof InputText>;

export const VariantsAndColors = () => {
  return (
    <>
      <InputText />
    </>
  );
};
