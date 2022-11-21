import { h, ref } from 'vue';
import MyTabPage from './MyTabPage';
import { DxTabs } from 'devextreme-vue/tabs';

interface Item {
  key: string;
  text: string;
  item: MyTabPage;
}

export default {
  setup(props: any, context: any) {
    const current = ref<number>(0);

    return () => {
      const items = (context.slots.default?.() || [])
        .filter((i: any) => i.type === MyTabPage)
        .map(
          (i: any) =>
            ({
              key: i.props.key,
              text: i.props.title,
              item: i,
            } as Item)
        );

      const tabs = () =>
        h(
          DxTabs,
          {
            items: items.map((i) => ({
              key: i.key,
              text: i.text,
            })),
            keyExpr: 'key',
            itemTemplate: 'itemtemplate',
            selectedIndex: current.value,
            onInitialized: (ev: any) => {
              console.log('initialized');
            },
            onItemClick: (ev: any) => {
              current.value = ev.itemIndex;
              console.log(`current changed to ${current.value}`);
            },
          },
          {
            itemtemplate: (el) => {
              console.log(el);
              return h('div', null, h('div', null, el.data.text));
            },
          }
        );

      console.log('render');

      return [tabs(), items[current.value].item];
    };
  },
};
