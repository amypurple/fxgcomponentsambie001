import React from 'react';
import './style.css'

import { PaginationSimple } from '../../lib/components/PaginationSimple/PaginationSimple';

export default {
  title: 'Components-TP1/Pagination',
  component: PaginationSimple
};

const Template = (args) => <PaginationSimple {...args} />;

export const PaginationPetite = Template.bind({});
PaginationPetite.args = {
  size: "small",
  current:1,
  total:50
};

export const PaginationDefault = Template.bind({});
PaginationDefault.args = {
  size: "default",
  current:2,
  total: 50
};
