import React from 'react';
import './style.css'

import { Bouton } from '../components/Bouton/Bouton';

export default {
  title: 'Components-TP1/Bouton',
  component: Bouton
};

const Template = (args) => <Bouton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  size: "large",
  shape: "circle",
  text: "Primary Large Circle",
};

export const Dashed = Template.bind({});
Dashed.args = {
  type: "dashed",
  size: "small",
  shape: "round",
  text: "Dashed Small Round",
};

export const Default = Template.bind({});
Default.args = {
  text: "Default Default Default",
};

export const Text = Template.bind({});
Text.args = {
  type: "text",
  text: "Text Default Default",
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  text: "Link Default Default",
  link: "http://google.ca"
};
