import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BraapHeader from "./BraapHeader";

export default {
    title: 'UI Components/BraapHeader',
    component: BraapHeader,
} as ComponentMeta<typeof BraapHeader>;

const Template: ComponentStory<typeof BraapHeader> = () => <BraapHeader />;

export const BasicHeader = Template.bind({});

