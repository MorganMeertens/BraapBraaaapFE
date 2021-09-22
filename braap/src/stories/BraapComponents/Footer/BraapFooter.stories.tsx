import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BraapFooter from './BraapFooter';

export default {
    title: 'UI Components/BraapFooter',
    component: BraapFooter,
} as ComponentMeta<typeof BraapFooter>;

const Template: ComponentStory<typeof BraapFooter> = () => <BraapFooter />;

export const BasicFooter = Template.bind({});

