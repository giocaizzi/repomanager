import Button from './Button'
import SimpleLink from '@/components/SimpleLink/SimpleLink';

export default {
    title: 'Button',
    component: Button,
    args: {
        text: "Hello"
    }
};

export const Default = {};

export const secondary = {
    args: {
        type: "secondary"
    }
};

export const withLink = {
    render: (args) => (
        <>
            <SimpleLink href="/">
                <Button {...args} />
            </SimpleLink>
        </>
    )
};

