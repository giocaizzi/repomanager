import Repository from './Repository';

export default {
    title: 'Repository',
    component: Repository,
    args: {
        props: {
            name: "name",
            description: "description",
            url: "url",
        }

    }
};

export const Short = {
}

export const Long = {
    args: {
        props: {
            name: "name",
            description: "description",
            url: "url",
            forks: "forks",
            stars: "stars",
            language: "language",
            license: "license",
            updated: "updated",
        }
    }
}

export const ReallyLong = {
    args: {
        props:
        {
            name: "name",
            description: "description",
            url: "url",
            forks: "forks",
            stars: "stars",
            language: "language",
            license: "license",
            updated: "updated",
            issues: "issues",
            pullRequests: "pullRequests",
            releases: "releases",
            contributors: "contributors",
            commits: "commits",
            branches: "branches",
            tags: "tags",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            pushedAt: "pushedAt",
            homepageUrl: "homepageUrl",
            openGraphImageUrl: "openGraphImageUrl",
        }
    }
}


