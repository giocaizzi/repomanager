import RepositoriesTable from "./RepositoriesTable";


export default {
    title: "Repositories/RepositoriesTable",
    component: RepositoriesTable,
    args: {
        repositories : [
            {
                name: "repo1",
                description: "description1",
                isPrivate: false,
                language: "JavaScript",
                stars: 0,
                pages: false,
                owner : "owner",
                url : "/repo1"
            },
            {
                name: "repo2",
                description: "This is a really long description of the repository.his is a really long description of the repository.",
                isPrivate: false,
                language: "Java",
                stars: 20,
                pages: true,
                owner : "owner",
                url : "/repo2"
            },
            {
                name: "repo3",
                description: "description3",
                isPrivate: true,
                language: "Python",
                stars: 30,
                pages: false,
                owner : "owner",
                url : "/repo3"

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


