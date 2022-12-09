import AtomButton from "./atom-button.vue";

export default {
  title: "Atoms/Button",
  components: AtomButton,
  decorators: [
    () => ({
      template:
          "<div class=\"storybook-container\"><h2 class=\"storybook-title\">다중 항목 선택 시 사용합니다.</h2><div class=\"storybook-group\"><story /></div></div>"
    })
  ]
};

export const Default = () => ({
  components: { AtomButton },
  template: `<atom-button>
	<span class="button__text">Button</span>
  </atom-button>`
});

export const Primary = () => ({
    components: { AtomButton },
    template: `<atom-button class="button--primary">
    <span class="button__text">Button</span>
    </atom-button>`
});

export const Secondary = () => ({
    components: { AtomButton },
    template: `<atom-button class="button--secondary">
		<span class="button__text">Button</span>
    </atom-button>`
});

export const Tertiary = () => ({
    components: { AtomButton },
    template: `<atom-button class="button--link">
		<span class="button__text">Button</span>
    </atom-button>`
});