import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useRef } from "react";

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
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button>Base</Button>
      <Button csVariant="contained">Contained - Primary</Button>
      <Button csVariant="contained" csColor="secondary">
        Contained - Secondary
      </Button>
      <Button csVariant="text">Text - Primary</Button>
      <Button csVariant="text" csColor="secondary">
        Text - Secondary
      </Button>
      <Button ref={buttonRef} csVariant="contained">
        New button
      </Button>
    </>
  );
};
