import React from 'react';
import { ComponentStory, ComponentMeta, Story, Meta } from '@storybook/react';

import  HomePage  from './HomePage';
import * as HomeHeaderStories from '../Header/HomeHeader.stories';
import { PageProps } from './HomePage';

export default {
  title: 'Home Components/HomePage',
  component: HomePage,
} as Meta;

const Template: Story<PageProps> = (args) => <HomePage />;


export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HomeHeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HomeHeaderStories.LoggedOut.args,
};
