import ghPages from 'gulp-gh-pages'

export const git = () => {
    return app.gulp.src(app.path.build.all)
        .pipe(ghPages({
            remoteUrl:'https://github.com/BielowAlex/repo',
            branch:'master'
        }))
}