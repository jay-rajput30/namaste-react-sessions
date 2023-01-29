## How do you creates nested routes react router dom configuration?

- We can create nested routes using children attribute. We can use <oullet> as placeholder for nested routes.

```
const approuter = createBrowserRouter({
    {
        path: "/",
        element:<Parent/>,
        children:[
            {
                path:"secondroute",
                element:<Child/>,
                children:[
                    {
                        path:"nestedchild",
                        element:<NestedChild/>
                    }
                ]
            }
        ]
    }
});

```

## what is the order of lifecycle menthods called call in class components?

- when a class component is invoked first construction method called, the the render method is called, then the conmponentDidMount method is called and finally when the component is unmounted or the DOM node is destroyed the componentWillUnmount method is called. We should give network calls and other side effectsin componentDidMount and we should give our cleanup activities like clearing timer, aborting network call in comonentWillUnmount method. We also have a componentDidUpdate method that is not called for first render but for every subsequent render. We usually us componentDidUpdate to do network requests.

## Why do we use componentDidMount ?

- We use componentDidMount to make network requests. this lifecycle method is called before the DOM is painted on screen. this is called during the render phase aftr the component just mounts. if we invoke setStae inside componentDidMount it will cause rerender but we will not be able to see the intermediate state as the render will happen before the DOM is painted on the screen.

## Why do we use componentWillUnmount ? Explain with example.

- We use componentWillUnmount to abort network requests or any other side-effect like clearing out any timer we have set.

```
componentDidMount(){
    timer = setTimout(()=> console.log("timer is called),2000)
}


componentWillUnmount(){)_{
    clearTimeout();
}

```

## Why do we use super(props) in constructor?

- in JS super() is used in constructor method to access the parent class constructor, in react class component we have to use super(props) to access the props coming from the parent compoenent in the constructor function the child.

## Why cant we have to callback function of useEffect async?

- react useEffect expects callback clean up function to be called when the component is unmount. if we use aync for useEffect hook then the clean up function will not run when expected. this will create a bug and is not the intended use. We should istead give a async callback function nested inside the useEffect hook callback and call the nested function.
