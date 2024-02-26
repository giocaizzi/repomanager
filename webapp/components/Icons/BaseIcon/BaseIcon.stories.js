import BaseIcon from './BaseIcon'

export default {
    title: 'Icons/BaseIcon',
    component: BaseIcon,
    argTypes: {
        type : {
            control: {
                type: 'select',
                options: ['img', 'text']
            }
        },
        text : {
            control: 'text',
        },
        src: {
            control: 'text'
        },
        alt: {
            control: 'text'
        }
    }
}

export const Default = {}

export const ImageIcon = {
    args: {
        type: 'img',
        src: '/github.png',
        alt: 'Github Icon'
    }
}

export const TextIcon = {
    args: {
        type: 'text',
        text: 'TextIcon 🚀'
    }
}
