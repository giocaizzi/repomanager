import UserOverview from "./UserOverview";

export default {
    title: "User/UserOverview",
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