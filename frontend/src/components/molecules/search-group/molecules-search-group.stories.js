import MoleculesSearchGroup from "./molecules-search-group.vue";

export default {
    title: "Molecules/SearchGroup",
    components: MoleculesSearchGroup,
    decorators: [
        () => ({
            template:
                "<div class=\"storybook-container\"><h2 class=\"storybook-title\">다중 항목 선택 시 사용합니다.</h2><div class=\"storybook-group\"><story /></div></div>"
        })
    ]
};

export const Default = () => ({
    components: { MoleculesSearchGroup },
    template:
        `
      <div class="v-group">
        <div class="h-group">
          <strong class="storybook-group__title">size: lg</strong>
          <molecules-search-group class="checkbox--lg" name="checkbox-test" checkboxId="checkbox1">
          </molecules-search-group>
        </div>       
      </div>
    `
});

