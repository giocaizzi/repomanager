import Icon from './Icon'

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        src: {
            control: 'text'
        },
        alt: {
            control: 'text'
        }
    }
}

const Template = (args) => <Icon {...args} />