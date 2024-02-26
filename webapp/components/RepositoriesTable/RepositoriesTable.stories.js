import RepositoriesTable from "./RepositoriesTable";

export default {
    title: "RepositoriesTable",
    component: RepositoriesTable,
}

const repositories = [
    {
        name: "repo1",
        description: "description1",
        isPrivate: true,
        language: "javascript",
        stars: 10,
        pages: false,
    },
    {
        name: "repo2",
        description: "description2",
        isPrivate: false,
        language: "java",
        stars: 20,
        pages: true,
    },
    {
        name: "repo3",
        description: "description3",
        isPrivate: true,
        language: "python",
        stars: 30,
        pages: false,
    
    }
]


export const Default = () => <RepositoriesTable repositories={repositories}/>;