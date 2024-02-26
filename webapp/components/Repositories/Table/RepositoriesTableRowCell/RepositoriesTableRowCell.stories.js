import RepositoriesTableRowCell from "./RepositoriesTableRowCell";

export default {
    title: "Repositories/RowCell",
    component: RepositoriesTableRowCell,
    args :{
        children: "Hello"
    },
    parameters: {
        layout: "centered",
    }
};

export const Default = {}

export const Link = {
    args: {
        link: ""
    }
}

export const Centered = {
    args: {
        centered: true
    }
}