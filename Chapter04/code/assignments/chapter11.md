## What is prop drilling?

- When we want to pass any data from parent component down the tree to any child component then we have to pass the data as a prop. if the child component is deeply nested we have to pass the data from parent component down the tree through each nested component as a prop till it reaches the child component. this passing of data through each component till it reaches the intended child component is called prop drilling.

## What is lifting the state up?

- there may be cases when we want the multiple child component to share same state. in such cases we have to lift the state up to the parent component and pass it down to child components as a prop.

## What is Context Provider and Context Consumer?

- We enable pass data directly to the child component down the tree using context provider and context consumer combination. on the parent we have to specify the context provider with the value that needs to be shared and in the child component we have to use context consumer to read the value from the parent context that we created using useContext.

```
import {useContext,createContext} from 'react'

//create context
const DummyContext = createContext();

const Parent = () =>{
    return (
        //create a provider for context at parent with value that needs to be shared
        <DummyContext.Provider value={{contextValue:100}}>
            <Child/>
        </DummyContext.Provider>)
}

const Child = () =>{
    //consume the context value in child component
    const {contextValue} = useContext(DummyContext);

    return <p>the value is {contextValue}</p>
}

```

## If you dont pass a value to the provider does it take the default value?

- If we dont pass a value prop to the provider and try to get the context value in the child component the value of context will be undefined. if we try to use the context value in a child component where there is no paretn provider specified the context value will be the default value which we provide in createContext.

```
import {useContext,createContext} from 'react'

const DummyContext = createContext();

const Parent = () =>{
    return (<>
        <DummyContext.Provider value={{contextValue:100}}>
            <Child/>
        </DummyContext.Provider>
        //no provider present for this child so context value will be default value that we give
        <Child2/>
        </>)
}

const Child = () =>{
    const {contextValue} = useContext(DummyContext);

    return <p>the value is {contextValue}</p>
}

const Child2 = () =>{
    const {contextValue} = useContext(DummyContext);

    return <p>the value is {contextValue}</p>
}

```
