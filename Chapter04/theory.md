## Is JSX mandatory for React?

- no JSX is not mandatory for React. JSX is internally complied to react.createElement() function calls. We can directly use React.createElement() for building UI elements.

## Is ES6 mandatory for react?

- no ES6 is not mandatory for react. the code that we write is transpiled by Babel to a version of javascript browser understands.

## How can I write comments in JSX?

- we can write comment in JSX inside { } using /\* \*/ syntax for comments as below

```
{
    { /* enter comment here */}
}

```

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}

- <TitleComponent/> is a react component. {<TitleComponent></TitleComponent>} is also a react component that can contain nested elements, we can access the nested elements using props.children in TitleComponent component. {TitleComponent} inserts the react element inside the JS curly braces{}.

##
