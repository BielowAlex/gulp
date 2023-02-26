import ghPages from 'gh-pages'

export const git = () => {
    return ghPages.publish(`${app.path.buildFolder}`, {
        branch: 'master',
        repo: `https://github.com/BielowAlex/${'repositoryName'}.git`,
    })
}