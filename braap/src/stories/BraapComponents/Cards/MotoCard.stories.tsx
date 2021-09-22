import React from 'react';
import { Story, Meta } from '@storybook/react';
import MotoCard, { MotoCardProps } from './MotoCard';
import { Avatar, Typography } from '@material-ui/core';

export default {
  title: 'UI Components/MotoCards',
  component: MotoCard,
} as Meta;

const Template: Story<MotoCardProps> = (args) => <MotoCard {...args} />;

export const BasicCard = Template.bind(this);
BasicCard.args = {    
    bikeImage: "http://api-motorcycle.makingdatameaningful.com/files/Yamaha/2021/Yamaha%20YZF-R1/Yamaha_2021_Yamaha%20YZF-R1.jpg", 
    bikeYear: "YEAR",
    bikeMake: "MAKE",
    bikeModel: " MODEL",
    bikeSpecs: 
        <div>
        <Typography variant="body2" gutterBottom>
            Category: Sport,
            </Typography>
            <Typography variant="body2" gutterBottom>
            engineType: "In-line four, four-stroke",
            </Typography>
            <Typography variant="body2" gutterBottom>
            power: "200.0 HP (146.0  kW)) @ 13500 RPM",
            </Typography>
            <Typography variant="body2" gutterBottom>
            torque: "112.4 Nm (11.5 kgf-m or 82.9 ft.lbs) @ 11500 RPM",
            </Typography>
            <Typography variant="body2" gutterBottom>
            displacement: "998.0 ccm (60.90 cubic inches)",
            </Typography>
            <Typography variant="body2" gutterBottom>
            compression: "13.0:1",
            </Typography>
            <Typography variant="body2" gutterBottom>
            boreXStroke: "79.0 x 50.9 mm (3.1 x 2.0 inches)",
            </Typography>
            <Typography variant="body2" gutterBottom>
            fuelConsumption: "7.13 litres/100 km (14.0 km/l or 32.99 mpg)"
        </Typography>
        </div>
};