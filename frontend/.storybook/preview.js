import Vue from 'vue';
import _ from "lodash";
import '!style-loader!css-loader!sass-loader!../src/assets/main.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}