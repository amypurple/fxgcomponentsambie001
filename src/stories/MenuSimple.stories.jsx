import React from 'react';
import './style.css'

import { MenuSimple } from '../../lib/components/MenuSimple/MenuSimple';

export default {
  title: 'Components-TP1/Menu',
  component: MenuSimple
};

const Template = (args) => <MenuSimple {...args} />;

const items = [
  { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  { label: 'item 2', key: 'item-2' }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];

export const MenuHorizontal = Template.bind({});
MenuHorizontal.args = {
  size: "small",
  items: items,
  mode: 'horizontal'
};

export const MenuInline = Template.bind({});
MenuInline.args = {
  size: "default",
  items: items,
  mode: 'inline'
};

export const MenuVertical = Template.bind({});
MenuVertical.args = {
  size: "large",
  items: items,
  mode: 'vertical'
};