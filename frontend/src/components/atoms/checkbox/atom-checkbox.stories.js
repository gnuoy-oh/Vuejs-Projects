import AtomCheckbox from "./atom-checkbox.vue";

export default {
    title: "Styled/Atoms/[PCFI] 체크 박스",
    components: AtomCheckbox,
    decorators: [
        () => ({
            template:
                "<div class=\"storybook-container\"><h2 class=\"storybook-title\">다중 항목 선택 시 사용합니다.</h2><div class=\"storybook-group\"><story /></div></div>"
        })
    ]
};

export const Default = () => ({
    components: { AtomCheckbox },
    template:
        `
      <div class="v-group">
        <div class="h-group">
          <strong class="storybook-group__title">size: lg</strong>
          <atom-checkbox class="checkbox--lg" name="checkbox-test" checkboxId="checkbox1">
          </atom-checkbox>
        </div>       
      </div>
    `
});

