# Simple Gulp build

My personal Gulp build. Adjusted for yourself, with the possibility of uploading the finished result to your GitHub
repository. With ready-made SASS mixins and a library for Gsap animations. ES6, live reload, file compression, SASS, etc

## Plugin list :

* [SCSS](https://www.npmjs.com/package/sass)
* [Javascript modules (webpack)](https://www.npmjs.com/package/webpack)
* [GH-PAGES load project on gitHub](https://www.npmjs.com/package/gh-pages)
* HTML include
* [Error notify](https://www.npmjs.com/package/gulp-notify)
* [Live reload](https://www.npmjs.com/package/browser-sync)
* [Compress and clear css](https://www.npmjs.com/package/gulp-clean-css)
* [Gsap.js](https://www.npmjs.com/package/gsap)
* [Swiper](https://www.npmjs.com/package/swiper)


## Build mods:

The build has two types of launch in developer mode (light work of gulp for fast work and easy development) and
production mode (compression and processing of all files for creating an already finished project)

### The command to run the project in developer mode

```
npm run dev
```

### The command to run the project in production mode

```
npm run build
```

## gh-pages:

The plug-in is launched when starting in production mode. Before starting, you should specify the URL of the repository
and the branch in file

````
./gulp/tasks/git.js
`````

```js
import ghPages from 'gh-pages'

export const git = () => {
    return ghPages.publish(`${app.path.buildFolder}`, {
        branch: 'master',
        repo: 'https://github.com/GIT_USERNAME/REPOSITORY_NAME.git',
    })
}
```



