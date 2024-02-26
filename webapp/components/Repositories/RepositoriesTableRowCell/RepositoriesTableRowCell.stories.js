import RepositoriesTableRowCell from "./RepositoriesTableRowCell";

export default {
    title: "Repositories/RowCell",
    component: RepositoriesTableRowCell,
    argTypes: {
        link: { control: "boolean" },
        centered: { control: "boolean" },

    }
};

export const Default = (args) => <RepositoriesTableRowCell {...args}>Default</RepositoriesTableRowCell>;