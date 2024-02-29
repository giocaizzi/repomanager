import Repository from './Repository';

export default {
    title: 'Repository',
    component: Repository,
};

export const Default = {}

export const WithData = {
    args: {
        props: {
            description: null,
            fork: false,
            language: "Jupyter Notebook",
            name: "aecom_3dmodels",
            pages: false,
            private: true,
            stars: 0,
            url: "https://github.com/giocaizzi/aecom_3dmodels"
        }
    }
}


