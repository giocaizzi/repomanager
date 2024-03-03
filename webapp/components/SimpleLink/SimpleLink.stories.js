import SimpleLink from "./SimpleLink";

import BaseIcon from "../Icons/BaseIcon/BaseIcon";

export default {
    title: "SimpleLink",
    component: SimpleLink,
    args: {
        children: "Hello",
        href: "https://www.google.com"
    },
};

export const Default = {};

export const TextWithClickHandler = {
    args: {
        handleClick: () => { alert("Clicked!") }
    }
};

export const Icon = {
    args: {
        children: <BaseIcon src="/github.png" alt="Github" />
    }
};

export const IconWithClickHandler = {
    args: {
        children: <BaseIcon src="/github.png" alt="Github" />,
        handleClick: () => { alert("Clicked!") }
    }
};