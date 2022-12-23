import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Secondary } from '../Button.stories';

export default {
    title: "UI/MyLabel",
    component: MyLabel
} as ComponentMeta<typeof MyLabel>;

const template : ComponentStory <typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basica = template.bind({});
Basica.args = {
    size: "normal",

};

export const AllCaps = template.bind({});
AllCaps.args = {
    allCaps: true
};

export const Second = template.bind({});
Second.args = {
    color: "secondary"
};
export const Primary = template.bind({});
Primary.args = {
    color: "primary"
};
export const Tertiary = template.bind({});
Tertiary.args = {
    color: "tertiary"
};
