import RepositoriesTableRowCell from "./RepositoriesTableRowCell";

export default {
    title: "Repositories/RepositoriesTableRowCell",
    component: RepositoriesTableRowCell,
    args :{
        children: "Hello"
    },
    parameters: {
        layout: "centered",
    }
};

export const Default = {}

export const TextLink = {
    args: {
        link: "/"
    }
}

export const TextCentered = {
    args: {
        centered: true
    }
}

export const TextLinkCentered = {
    args: {
        link: "/",
        centered: true
    }
}

export const NonTextChildren = {
    args: {
        children: <div>Some div</div>
    }
}
