import AtomButton from "./atom-button.vue";

export default {
    title: "Atoms/Button",
    components: AtomButton,
    argTypes: {
        label: {
            control: 'text'
        },
        disabled: {
            type: 'boolean'
        },
        theme: {
            type: "select",
            options: ["primary", "secondary", "link", "negative", "underline", "underline-negative"]
        },
        size: {
            type: "select",
            options: ["sm", "button", "lg"]
        },
        onClick: {action: 'handleClick'}

    },
    decorators: [
        () => ({
            template:
                "<div class=\"storybook-container\"><h2 class=\"storybook-title\">다중 항목 선택 시 사용합니다.</h2><div class=\"storybook-group\"><story /></div></div>"
        })
    ]
};

const Template = (args) => ({
    components: {AtomButton},
    setup() {
        return {args};
    },
    template:
        `
      <div class="v-group">
        <div class="h-group">
          <atom-button v-bind="args"></atom-button>
        </div>       
      </div>
    `
});

export const Default = Template.bind({});
