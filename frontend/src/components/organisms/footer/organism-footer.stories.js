import OrganismFooter from "./organism-footer.vue";

export default {
  title: "Organisms/Footer",
  component: OrganismFooter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: "fullscreen"
  }
};

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { OrganismFooter },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<organism-footer :user="user" />'
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe"
  }
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null
};
