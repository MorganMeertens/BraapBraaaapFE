import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomePage } from './HomePage';
import * as HomeHeaderStories from '../Header/HomeHeader.stories';

export default {
  title: 'Home Components/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const PageForHome = Template.bind({});