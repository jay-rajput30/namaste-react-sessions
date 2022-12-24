# what is emmet?

- emmet is a tool which provided shortcuts what we can used to generate full HTML mark up, css or or any language code. it helps in reducing time and providing correct syntax code by autogenerating code as per the emmet shortcuts we provide.

---

# difference between library and framework?

- library is a collection of predefined features which is already coded and tested and can be used in our programs; when and wherever we need.
- framework defines the overall architecture and flow of the application. framework provides guidelines and conventions to write code and build the application.
- for example: react as a UI library provides methods functions for building UI interfaces and adding interactivity to them. but react as a framework does not specifc how to route between multiples pages (react router library), how to work with network requests (axios library). angular is a framework because it provide overall architecture and guidelines using which we can write our code.

---

# What is CDN? Why do we use it?

- CDN is a group of servers spread across the globe which are optimized for delivering resources fast. it contains cached copies of data that are needed by end user
- CDN group of servers exists around the origin server. when a end user request data it contacts the nearest server from the CDN network. they are ususally spread across a region
- the server checks if it has a cached copy of the resource needed, if it does then it fulfils the end users request by providing that resource.
- if required resource is not present on its cache, it will request that data from origin server, fulfil the end user request and store it in cache for future use.
- unused resources from cache are also removed by purging and cache eviction.

---

# why is react know as react?

- react is a UI library using we can create components that change overtime. react as a library can react to changes in view using its feature like state and props,that is why it is know as react.

---

# What is crossorigin in script tag?

- this attribute is used to handle CORS. CORS checks if it is safe to allow sharing of resources from a different domain. it has two values: 1 **anonymous**: which will send requests without the credential information; 2 **user-credentials**: request will be sent with cookies, credentials, certificates.

---

# What is diference between React and ReactDOM

- react package contains only the react source code for state, props and creating react components.
- react-dom package is the glue between react and DOM. it contains methods that can only be used for web applications which run in browser DOM environment

---

# What is difference between react.development.js and react.production.js files via CDN?

- development version is not optimized version used for development. it has eatures like hot reloading, debugging feature.
- production version is optimized compressed/minified version that can be run on client browser.

---

# What is async and defer?

- when we run web page in the browser two things happens: HTML parsing and scripting fetching/scripting execution
- in normal flow when html i sparsing whenver the script tag is encountered the html parsing stops and script fetching starts. once script is fetched it starts executing the script. only after the script executing ends the html parsing resumes. this be blocking behaviour.
- async/defer helps us to avoid this blocking behaviour.
- async keyword html parsing and script fetching happens in parallel and when the script fetch completed html parsing is paused and script start executing.
- defer keyword html parsing and script fetch happens in parallel. after the script fetch is completed the browser waits for HTML parsing completion and then only executes the script.
- order of execution is not fixed with async. order of script executing is fixed in defer
