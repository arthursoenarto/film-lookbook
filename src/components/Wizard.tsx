import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import WizardComponents from './WizardComponents';
import InputField from './InputField';
import TextOnly from './TextOnly';
import './Wizard.css';
import Lighting from './Lighting';
import VisualEffects from './VisualEffects';
import Makeup from './Makeup';
import SetDesign from './SetDesign';

interface MyComponentProps {
    props: string[];
    costumes: string[];
}

interface MyComponentProps2 {
    costumes: string[];
}

const Wizard: React.FC<MyComponentProps> = ({props, costumes}) => {

    return (
        <div className="wizard">
            <Tabs className="Tabs">
                <TabList>
                    <Tab>Props/Costumes</Tab>
                    <Tab>Lighting</Tab>
                    <Tab>Visual Effects</Tab>
                    <Tab>Set Design</Tab>
                    <Tab>Makeup</Tab>
                </TabList>
                <TabPanel>
                    <TextOnly props={props} costumes={costumes}></TextOnly>
                </TabPanel>
                <TabPanel>
                    <Lighting></Lighting>
                </TabPanel>
                <TabPanel>
                    <VisualEffects></VisualEffects>
                </TabPanel>
                <TabPanel>
                    <SetDesign></SetDesign>
                </TabPanel>
                <TabPanel>
                    <Makeup></Makeup>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Wizard
