import UserRepositories from "./UserRepositories";

export default {
    title: "User/Repositories",
    component: UserRepositories,
    argTypes: {
        repositories: { control: "object" }
    }
};

export const Default = (args) => <UserRepositories {...args} />;