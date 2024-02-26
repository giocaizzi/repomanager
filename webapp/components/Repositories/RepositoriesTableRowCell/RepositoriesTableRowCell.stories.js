import RepositoriesTableRowCell from "./RepositoriesTableRowCell";

export default {
    title: "Repositories/RowCell",
    component: RepositoriesTableRowCell
}

export const Default = () => <RepositoriesTableRowCell>Some text here</RepositoriesTableRowCell>;

export const Linked = () => <RepositoriesTableRowCell link={true}>Linked content</RepositoriesTableRowCell>;

export const Centered = () => <RepositoriesTableRowCell centered={true}>Centered content</RepositoriesTableRowCell>;

export const LinkedAndCentered = () => <RepositoriesTableRowCell link={true} centered={true}>Linked and centered content</RepositoriesTableRowCell>;

