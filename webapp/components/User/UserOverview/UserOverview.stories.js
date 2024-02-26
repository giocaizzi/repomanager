import UserOverview from "./UserOverview";

export default {
    title: "User/Overview",
    component: UserOverview,
};

export const Default = {};

export const GithubUser = {
    args: {
        name: "Github User",
        login: "githubuser",
        avatar_url: "https://avatars.githubusercontent.com/u/9919?v=4" 
    },
};

export const WithDifferentUser = {
    args: {
        name: "Jane Doe",
        login: "janedoe",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
    }
};
