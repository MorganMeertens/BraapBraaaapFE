import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {HomeHeader} from "./HomeHeader";

export default {
    title: 'Home Components/HomeHeader',
    component: HomeHeader,
} as ComponentMeta<typeof HomeHeader>;

const Template: ComponentStory<typeof HomeHeader> = () => <HomeHeader />;

export const HeaderForHome = Template.bind({});

