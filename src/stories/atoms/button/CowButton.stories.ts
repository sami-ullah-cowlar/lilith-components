import CowButton from "./CowButton.vue";

type Args = {
  label: string;
  backgroundColor: string;
  additionalClasses: string;
  additionalStyles?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    fontWeight?: string;
    opacity?: number;
  };
  outline: boolean;
  outlineColor: string;
  color: string;
  block: boolean;
  loader: boolean;
  shadow: boolean;
  rounded: string;
  size: string;
  disabled: boolean;
};

type ArgTypes = {
  argTypes: Record<string, unknown>;
};

const Template = (args: Args, { argTypes }: ArgTypes) => ({
  components: { CowButton },
  props: Object.keys(argTypes),
  setup() {
    return { args, argTypes };
  },
  template: '<CowButton v-bind="args" />',
});

export default {
  title: "Atoms/Button",
  component: CowButton,
  tags: ["autodocs"],
  argTypes: {
    additionalClasses: {
      control: {
        type: "text",
      },
    },
    outline: {
      control: {
        type: "boolean",
      },
    },
    block: {
      control: {
        type: "boolean",
      },
    },
    loader: {
      control: {
        type: "boolean",
      },
    },
    shadow: {
      control: {
        type: "boolean",
      },
    },
    rounded: {
      control: {
        type: "select",
      },
      options: ["full", "3xl", "2xl", "xl", "lg", "md", "sm", "none"],
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    additionalStyles: {
      name: "Custom Styles",
      description: "",
      type: { name: "object", required: false },
      table: {
        category: "Styling",
      },
      control: "object",
    },
  },
  args: {
    label: "Button",
    additionalClasses: "m-0",
    additionalStyles: {},
    outline: false,
    block: false,
    loader: false,
    shadow: false,
    rounded: "none",
    size: "md",
    disabled: false,
  },
  parameters: {
    docs: {
      page: null,
    },
  },
};

export const Playground = Template.bind({});
