/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { PageUnderConstruction } from './PageUnderConstruction';

export default {
  title: 'Atoms/PageUnderConstruction',
  component: PageUnderConstruction,
};

const Template = (args) => <PageUnderConstruction />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
