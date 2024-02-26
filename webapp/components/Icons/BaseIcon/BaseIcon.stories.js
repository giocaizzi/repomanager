import BaseIcon from './BaseIcon'

export default {
    title: 'BaseIcon',
    component: BaseIcon,
    argTypes: {
        src: {
            control: 'text'
        },
        alt: {
            control: 'text'
        }
    }
}

const Default = (args) => <Icon {...args} />