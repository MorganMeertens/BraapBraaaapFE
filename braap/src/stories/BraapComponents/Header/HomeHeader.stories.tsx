import React from 'react';
import {HeaderProps, HomeHeader} from "./HomeHeader";
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Home Components/HomeHeader',
    component: HomeHeader,
} as Meta;

const Template: Story<HeaderProps> = (args) => <HomeHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    __typename: "BraapUser",
    id: "1",
    userName: "John Doe",
    gitHub: "johndoe",
    imageURI: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
};
