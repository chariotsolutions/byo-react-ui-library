import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Buttons / Button",
  component: Button
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "just a regular button"
};

export const VariantsAndColors = () => {
  return (
    <>
      <Button>Base</Button>
      <Button variant="contained">Contained - Primary</Button>
      <Button variant="contained" color="secondary">
        Contained - Secondary
      </Button>
      <Button variant="text">Text - Primary</Button>
      <Button variant="text" color="secondary">
        Text - Secondary
      </Button>
    </>
  );
};
