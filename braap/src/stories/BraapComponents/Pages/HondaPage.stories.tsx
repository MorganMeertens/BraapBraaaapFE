import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  HondaPage  from './hondaPage'
import * as HomeHeaderStories from '../Header/HomeHeader.stories';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default {
  title: 'UI Components/HondaPage',
  component: HondaPage,
} as ComponentMeta<typeof HondaPage>;


const mockedClient = new ApolloClient({
  uri: 'https://braapbraapbe.azurewebsites.net/graphql/',
  cache: new InMemoryCache(),
 
});


const Template: ComponentStory<typeof HondaPage> = (args) => (
<ApolloProvider client={mockedClient}>
    <HondaPage  />;
</ApolloProvider>);


export const PageForHonda = Template.bind({});