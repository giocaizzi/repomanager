import RepositoriesTable from "./RepositoriesTable";


export default {
    title: "Repositories/RepositoriesTable",
    component: RepositoriesTable,
    args: {
        repositories : [
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
                description: "This is a really long description of the repository.his is a really long description of the repository.",
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
    }
}

export const Default = {
    args : {
    repositories: [],
    }
}

export const WithData = {
}


