import UserRepositories from "./UserRepositories";

export default {
    title: "User/UserRepositories",
    component: UserRepositories,
    args : {
        repositories: [
            { name: "repo1", description: "This is the first repo" },
            { name: "repo2", description: "This is the second repo" },
            { name: "repo3" },
        ]
    }
};

export const Default = {};

export const EmptyListOfRepos = {
    args: {
        repositories: [{},{},{}]
    }
};

export const WithNoRepos = {
    args: {
        repositories: []
    }
};