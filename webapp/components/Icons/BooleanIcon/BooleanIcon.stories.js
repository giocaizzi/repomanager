import BooleanIcon from "./BooleanIcon";

export default {
    title: 'Icons/BooleanIcon',
    component: BooleanIcon,
    argTypes: {
        topic : {
            control: {
                type: 'select',
                options: ['privacy', 'truth']
            }
        },
        value : {
            control: 'text'
        }
    }
}

export const Public = {
    args: {
        topic: 'privacy',
        value: 'Public'
    }
}

export const Private = {
    args: {
        topic: 'privacy',
        value: 'Private'
    }
}

export const True = {
    args: {
        topic: 'truth',
        value: 'True'
    }
}

export const False = {
    args: {
        topic: 'truth',
        value: 'False'
    }
}