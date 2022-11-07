import React from 'react';
import './style.css'

import { Liste } from '../components/Liste/Liste';

export default {
  title: 'Components-TP1/Liste',
  component: Liste
};

const Template = (args) => <Liste {...args} />;

var data = [];

data.push('Ligne 1');
data.push('Ligne 2');
data.push('Ligne 3');

var header = "Entête";
var footer = "Pied de page";

export const ListePetite = Template.bind({});
ListePetite.args = {
  size: "small",
  data: data,
  header: header,
  footer: footer
};

export const ListeDefault = Template.bind({});
ListeDefault.args = {
  size: "default",
  data: data,
  header: header,
  footer: footer
};

export const ListeGrande = Template.bind({});
ListeGrande.args = {
  size: "large",
  data: data,
  header: header,
  footer: footer
};