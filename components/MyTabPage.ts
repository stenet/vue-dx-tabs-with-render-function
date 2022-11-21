import { h } from 'vue';

export default {
  setup(props: any, context: any) {
    return () => h('div', null, context.slots.default?.());
  },
};
