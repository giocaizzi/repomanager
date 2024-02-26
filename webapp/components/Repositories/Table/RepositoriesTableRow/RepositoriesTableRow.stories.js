import RepositoriesTableRow from './RepositoriesTableRow';

export default {
    title: 'Repositories/RepositoriesTableRow',
    component: RepositoriesTableRow,
    args : {
        url: '/repo',
        name: 'repo',
        description: 'This is a repo',
        isPrivate: false,
        language: 'Python',
        stars: 10,
        pages: true
    }
};


export const Default = {};