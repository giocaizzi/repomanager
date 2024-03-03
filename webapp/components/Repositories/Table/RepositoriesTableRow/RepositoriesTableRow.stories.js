import RepositoriesTableRow from './RepositoriesTableRow';

export default {
    title: 'Repositories/Table/RepositoriesTableRow',
    component: RepositoriesTableRow,
    args : {
        url: '/repo',
        name: 'repo',
        description: 'This is a repo',
        isPrivate: false,
        language: 'Python',
        stars: 10,
        pages: true,
        owner: 'owner'
    }
};


export const Default = {};

export const Empty = {
    args: {
        url: '',
        name: '',
        description: '',
        isPrivate: false,
        language: '',
        stars: "",
        pages: false,
        owner: ''
    }
};