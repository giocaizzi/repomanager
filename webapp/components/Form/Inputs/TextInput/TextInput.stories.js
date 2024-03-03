import TextInput from './TextInput';

export default {
    title: 'Forms/TextInput',
    component: TextInput,
    args : {
        id: "text-input",
        name: "text-input",
        labelText: "Text Input",    
    }
};

export const Default = (args) => <TextInput {...args} />;