import RepositoriesTableRowCell from "./RepositoriesTableRowCell";

export default {
    title: "Repositories/Table/RepositoriesTableRowCell",
    component: RepositoriesTableRowCell,
    args :{
        children: "Hello"
    },
    parameters: {
        layout: "centered",
    }
};

export const Default = {}


export const TextCentered = {
    args: {
        centered: true
    }
}

export const NonTextChildren = {
    args: {
        children: <div>Some div</div>
    }
}
