import SimpleLink from "./SimpleLink";

export default {
    title: "SimpleLink",
    component: SimpleLink,
    args: {
        text: "Hello",
        href: "https://www.google.com"
    },
};

export const Default = {};

export const WithClickHandler = {
    args: {
        handleClick: () => { alert("Clicked!") }
    }
};