import StarCounter from "./StarCounter";

export default {
    title: "Icons/StarCounter",
    component: StarCounter,
    args : {
        count: 5
    }
};

export const Default = {};

export const Zero = {
    args: {
        count: 0
    }
};

export const Null = {
    args: {
        count: null
    }
};
