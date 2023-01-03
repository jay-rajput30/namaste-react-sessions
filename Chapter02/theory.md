## What is NPM?

- A package is single file or a collection of files that represents a specific function. for example: react-router for adding routing functionality to our react app, axios for sending async network requests, etc. There is no specific full form of NPM. it does few things like: NPM is a registry that contains the all the open source package/modules and their metadata. we can set up a private registry for a company also containing packages/modules only that company can access. NPM is a package manager for developers to easily share open source JS projects. NPM is a command line utility for installing packages, maintaining package version and dependencies.
- [cartoon guide to modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

## What is parcel/webpack? Why do we need it?

- Parcel/Webpack are bundlers. The code that we write on our machine are not optimised production ready code. Bundlers takes our all our files which can be css, font file, js files and converts then into a single file which can be run on the browser andis production ready. Bundlers does various operations on the files that we provide like cleaning, minifying, optimizing,compressing out code and creates a single production ready file for use to load and run.

## What is "parcel-cache"?

- parcel-cache is a temporary cache directory that contains information about our project when we parcel builds it using build command. this folder helps to run parcel fast in development mode. when parcel needs to rebuild project it does not reparses or re-analyses everything from scratch. it uses the parcel-cache to build itfaster again using existing information.

##What is NPX?

- NPM is a tool what will execute node package. it does not matters if the package is installed locally or globally. it will execute the package name we ive without installing it.
- npm will install node package but to execute it we have to configure the path in package.json or include it in script section.

## What is difference between `dependencies` vs `devDependencies`?

- devDependencies will be available only during the development phase. dependencies are modules which will be required during runtine in production environment.

## What is Tree Shaking?

- When we import modules from a package most of the times there we used modules floating. Tree shaking means removing the dead code from the bundle during the build process. Using tree shaking and dead code elimination will reduce our code size and improve performance.
- [tree shaking reference guide](https://www.smashingmagazine.com/2021/05/tree-shaking-reference-guide/)

## What is Hot Module Replacement?

- HMR aids development process by reducing pages refreshes. whenever code change on the modules that are changing are updated during runtime instead of doing a full refresh.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

- few super powers of the BEAST parcel are:

1. minifying
2. Hot Module Replacement
3. Image Optimization
4. caching while in development mode
5. bundling
6. Zero Config

- HMR helps in development process by updating only changed modules during runtime. caching in development using parcel-cache decrease build time for code changes. minification reduces the file size by renaming variables to shorter names, reducing white spaces and performing other optimization.

## What is `.gitignore`? What should we add and not add into it?

- .gitignore file tells git which files to ignore whilecommiting project to git repository. we should not add files that needs to be added to the git respoitory.
- we should add parcel-cache, dist, mode_modules to .gitignore as they dont need to be updated to git repo.
- We should not add package.json, package-lock-json to .gitignore file as the should be added to git repository.

## What is the difference between `package.json` and `package-lock.json`?

- packge.json contains the version of package with ^ or ~ sign. package-lock.json will install the exact version of the package.
- when we do npm i <package-name> -save, packge-lock.json will install the exact version of this package and package.json will save the package details like "^5.4.3" meaning it will support all higher major versions like 5.5, 5.6 and so on. package-lock.json is created for locking the dependency with the current version.

## Why should I not modify `package-lock.json`?

- when we do npm install <package-name> it fetches the required dependency and installs them in the node_modules folder. package-lock.json contains the snapshot of the dependency tree and all the information needs to recreate the state of node_modules folder.
- when package-lock.json is present npm install with install the exact versions specified. package-lock.json contains details of all the top level dependencies that we install using npm and the associated dependencies in the form of a dependency tree.
- whenever we alter the dependencies the package-lock.json file is updated to reflect the current state of the dependency tree.

## What is `node_modules` ? Is it a good idea to push that on git?

- node_modules is a directory where the dependencies gets installed when we run install packge using npm i command. we should not add node_modules files as it is very huge.
- we can instead add the package.json and package-lock.json files to the git repo using which we can install all the dependencies needed to run the project.

## What is the `dist` folder?

- dist folder contains dynamically generated files created by parcel. it connect bundled/build html,css, js files created by parcel when we run npx parcel command. it also contains a map file which is source map file that tell the browser how to locate our original source code from bundled code.

## what is browserslist?

- it is a tool that allows us to specify why browsers can be supported by our application.

## ^ and ~ in package.json?

- if our dependency has ^ version mentioned ni package.json then npm install will install the lastest minor version and likewise having ~ will install the latest patch version.

## Script type in html

- there are various script types like module, importmap and default. Default script type will treat script as classical jacscript script.
- type module will specify that the script we are trying to use will support js module. Broswer does not understand es modules. We have to explicity specify type="module" in script fro browser to understand es6 modules.
