import MyHeader from "./Header.vue";

type User = {
  name: string;
};
type Args = {
  user: User;
};

export default {
  title: "Layouts/Header",
  component: MyHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ["autodocs"],
  render: (args: Args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      MyHeader,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<my-header :user="user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/vue/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {
  args: {
    user: null,
  },
};
