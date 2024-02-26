import BaseIcon from './BaseIcon'

export default {
    title: 'Icons/BaseIcon',
    component: BaseIcon,
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
