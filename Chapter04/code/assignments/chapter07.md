## What are various ways to add image to our App? Explain with code examples.

- We can add images to our application with these options:

1. We can give the url of the image stored on CDN to the src atrritube on image tag
2. we can save the image locally in any of the app folder and then import them as a module and give it in src attribute.
3. we can use ReactComponent and do named import and use the image in our file as a react component. this can be done for SVG images only.

```
import logo from "../assets/images/logo.png"
import {ReactComponent as ReactLogo} from "./logo.svg"
const Main = () =>{
        return(<>
        //importing local image as a module ans using in src attribute
        <img src={logo}/>

        //use CDN url for image in src attribute
        <img src="https://images.unsplash.com/photo-1674414163668-5fa253833b64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>

        //using svg as a react component
        <ReactLogo/>
        <>
        </>)
}

export default Main

```

## What would happen if we do console.log(useState())?

- console logging useState() gives us an array of two items. one item is the use state variable, second one is the setter function for this useState variable

## How will useEffect behave if we dontadd a depemndency array?

- If we dont add a dependency array useEffect callback will be executed after every rerender.

## What is a SPA?

- SPA is a web app where only a single HTML page is requested from server. During the first HTML page request all the js, css and other required assets that are reuired for the file to run are loaded. First request usually take some more time but on subsequent changees only the part of the page that is changing is updated.for subsequent updates a new request to server is not made and a full page relod does not happens.

## What are teh difference between Server side and Client side routing?

- in Client side routing the routing part is handled internally by the javascript loaded in the browser. for every route change new request is not made to the server. the JS render the component specified for the ruote and request me data from server if needed to load the HTML elements. In Server side routing, for every route change a new request is made to the server. it result in a full page refresh.
