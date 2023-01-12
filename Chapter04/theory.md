## Is JSX mandatory for React?

- no JSX is not mandatory for React. JSX is internally complied to react.createElement() function calls. We can directly use React.createElement() for building UI elements.

## Is ES6 mandatory for react?

- no ES6 is not mandatory for react. the code that we write is transpiled by Babel to a version of javascript browser understands.

## How can I write comments in JSX?

- we can write comment in JSX inside { } using /\* \*/ syntax for comments as below

```
{
    { /* this is a comment */}
}

```

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}

- <TitleComponent/> is a react component. {<TitleComponent></TitleComponent>} is also a react component that can contain nested elements, we can access the nested elements using props.children in TitleComponent component. {TitleComponent} inserts the react element inside the JS curly braces{}.

## What is <React.Fragment></React.Fragment> and <></>?

- Fragment is a wrapper that groups multiple elements together. A component can return a single element. Fragment is usually used in such places. the benefit of Fragment is that it does not effects the DOM. No extra DOM node is created. <></> is shorthad syntax for writing Fragments.

## What is Virtual DOM?

- Virtual DOM is a concept in which an copy of DOM tree is stored in memory, it is a lighter representation of actualt DOM in the form of object. this copy is synced with the actual DOM UI using a process call reconciliation.

## What is Reconciliation in react?

- reconciliation is a process by which react compares the Virtual DOM with actual DOM and updates the actual DOM by a rerender. Only the DOM nodes that have changed are updated on the actual DOM.

## What is React Fiber?

-
