import React from 'react';
import './style.css'

import { CaseCocher } from '../components/CaseCocher/CaseCocher';

export default {
  title: 'Components-TP1/CaseCocher',
  component: CaseCocher
};

const Template = (args) => <CaseCocher {...args} />;

export const UneCaseCochee = Template.bind({});
UneCaseCochee.args = {
  label: "Case Non Cochée",
  checked: false,
  disabled: false
};
export const UneCaseInactive = Template.bind({});
UneCaseInactive.args = {
  label: "Case Désactivée",
  checked: false,
  disabled: true
};