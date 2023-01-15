import CowButton from "./CowButton.vue";
import type { StoryFn } from "@storybook/vue3";
export default {
  title: "Atoms/Button/Variants",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "<h3>*Buttons* allow the user to take actions or make choices. Here are the different variants of button. You can also play around this button from playground story.</h3>",
      },
    },
    controls: {
      exclude: /.*/g,
    },
  },
};

type Args = {
  additionalStyles?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    textTransform?: string;
    fontWeight?: string;
    opacity?: number;
  };
  outline?: boolean;
  outlineColor?: string;
  block?: boolean;
  loader?: boolean;
  shadow?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  slotContent?: string;
};

const Template: StoryFn = (args: Args) => ({
  components: { CowButton },
  // props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `
  <div style="display: flex; justify-content:space-start; gap: 10px">
    <template v-for="(arg, index) in args" :key="index">
    <CowButton v-bind="arg">
    <template v-slot:default>
    <span v-html="arg.slotContent"></span>
    </template>
  </CowButton>
    </template>
  </div>
`,
  props: {
    args: {
      type: Array,
      default: () => args,
    },
    slotContent: {
      type: String,
      default: args.slotContent,
    },
  },
});
export const Default = Template.bind({});
Default.args = [{}];
export const Solid = Template.bind({});
Solid.args = [
  { additionalStyles: { backgroundColor: "#6419E6" } },
  { additionalStyles: { backgroundColor: "#D926A9" } },
  { additionalStyles: { backgroundColor: "#1FB2A6" } },
  { additionalStyles: { backgroundColor: "#F87272" } },
  { additionalStyles: { backgroundColor: "#FBBD23" } },
  { additionalStyles: { backgroundColor: "#3ABFF8" } },
];
export const Outline = Template.bind({});
Outline.args = [
  { outline: true, additionalStyles: { borderColor: "#6419E6" } },
  { outline: true, additionalStyles: { borderColor: "#D926A9" } },
  { outline: true, additionalStyles: { borderColor: "#1FB2A6" } },
  { outline: true, additionalStyles: { borderColor: "#F87272" } },
  { outline: true, additionalStyles: { borderColor: "#FBBD23" } },
  { outline: true, additionalStyles: { borderColor: "#3ABFF8" } },
];
export const Block = Template.bind({});
Block.args = [
  {
    block: true,
  },
];
export const Loader = Template.bind({});
Loader.args = [
  {
    loader: true,
  },
];
export const Shadow = Template.bind({});
Shadow.args = [
  {
    shadow: true,
  },
];
export const Shapes = Template.bind({});
Shapes.args = [
  {
    rounded: "none",
    label: "none",
  },
  {
    rounded: "sm",
    label: "small",
  },
  {
    rounded: "md",
    label: "medium",
  },
  {
    rounded: "lg",
    label: "large",
  },
  {
    rounded: "xl",
    label: "extra large",
  },
  {
    rounded: "2xl",
    label: "2x large",
  },
  {
    rounded: "3xl",
    label: "3x large",
  },
];
export const Sizes = Template.bind({});
Sizes.args = [
  {
    size: "sm",
    label: "Small",
  },
  {
    size: "md",
    label: "Medium",
  },
  {
    size: "lg",
    label: "Large",
  },
];
export const Disabled = Template.bind({});
Disabled.args = [
  {
    disabled: true,
  },
];

export const Icon = Template.bind({});
Icon.args = [
  {
    slotContent:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="13px" class="cow-inline-block" fill="white"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>',
    label: "Icon",
  },
  {
    slotContent:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="17px" class="cow-inline-block" fill="white"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>',
    label: "",
  },
  {
    slotContent:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="17px" class="cow-inline-block" fill="white"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>',
    label: "",
    rounded: "full",
    additionalStyles: { opacity: 0.8 },
  },
  {
    slotContent:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="17px" class="cow-inline-block" fill="white"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>',
    label: "",
    rounded: "none",
  },
  {
    slotContent:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" class="cow-inline-block" fill="white" ><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>',
    label: "Continue with Facebook",
    rounded: "none",
    additionalStyles: { backgroundColor: "#3C57A4" },
  },
  {
    slotContent:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px" class="cow-inline-block" fill="black" ><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>',
    label: "Continue with Google",
    rounded: "none",
    outline: true,
    additionalStyles: { borderColor: "#C3C7C7", color: "#000000" },
  },
];

export const AdditionalClasses = Template.bind({});
AdditionalClasses.args = [
  {
    additionalClasses:
      "cow-w-72 cow-bg-white cow-bg-opacity-20 cow-backdrop-blur-lg cow-rounded cow-drop-shadow-md cow-opacity-75 cow-font-bold cow-tracking-widest",
    backgroundColor: "#89e7fa",
    color: "#000000",
    rounded: "lg",
    label: "Wide",
  },
];
