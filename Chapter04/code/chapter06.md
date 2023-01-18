## What is a microservice?

- Microservice is a independent unit of system tha deals with a single business requirement. in microservice architecture the system is broken down into individual services which can be developed and deployed independently from other services. for example a ecommerce app can be broken down into UI, profile management service, backend service, user authentication. communication between microservices happens using a simple API.

## What is monolith architecture?

- monolith architecture is where the system consists of a single large code base containing all the different business services together.

## What is the difference between monolithic and microservice?

- in microservice architecture the system is broken down into independent services which deals with single business requirement. in monolithic architecture we have a single system which contains all the different service. for small scale applications, monolith is good as it helps is development and deployment but for large scale applications it is not suitable as a small change would need us to develop, test, deploy the entier application. for large scale applications microrservices are good as they help in developing and deploying individuals service independently.

## Why do we need useEffect hooks?

- We need useEffect hook to perform side effects in react. side effects are activities that do not trigger render like making API call, setting local storage. in these cases if when we want to synchronize the UI after performing a side effect with latest data we need to use useEffect hook.

## What is optiional chaining?

- optional chaining is a special syntax to safely access nested properties which can be null or undefined. we can use it on nested objects to check for properties and methods that does not exists. if the value before the ?. is undefined or null we will get undefined as a result. It is usually used in cases when we want to get undefined value for accessing a nested property for a null/undefined value.We can also use optional chaining to call a function that does not exists.

```
    const user = {
        firstName: 'jay',
        lastName: 'rajput',
        address:{
          city:"mumbai"
        }
    }

    const newUser = {
      firstName: 'John',
      lastName: 'Wood',
    }
    // we are trying to access street property of address which is not present,
    // normally trying to access property of a value that foes not exists gives us an error
    // but with optional chaining if value does not exists then trying access it nested property gives us undefined value.
    console.log(newUser.address?.city)
```

## What is shimmer UI?

- Simmer UI is a placeholder that we use to display till the content is fetched and loaded on screen. it is UI/UX feature.

## What is the difference between JS epression and JS statement.

- statements are instructions that we give to computers. expression evaluates to a value. We slot expression as part of statement or provide expression as a independent entity. we can say our program is a sequence of statements with slots in betwween for expressions

```
alert("this is a JS statement")
//calling alert function is a JS statement
//the argument we provide to alter function is a expression since that evaluates to a string value.
```

## What is conditional rendering. explain with a code example

- conditional rendering is used when we want to display different data depending on a certain condition.

```
//suppose we want a component to show the price of a item depending on its type.
//we can render it conditionally like this:

const Price = ({item}) => {
    let itemPrice = item === "tea"? 20: 50;

    return <p>Rs. {itemPrice}</p>
}
```

## What is CORS?

- CORS is a method by which web browser can access the resources from a different domain. by default resource sharing is allowed on the same domain. local server has a list of allowed origins in CORS header as Access-Control-Allow-Origin header.

## what is async and await?

- async and await is a cleaner way of handling promises. we give async for function. async functions will always return a promise. await is helps us to provide synchronous behaviour to our async function. await expression will pause the function execution until the promise is resolved/rejected. the value of await expression will be resolved value from the promise. async and await are used together in combination.

## What is the use of "const json = await data.json()"in getRestaurants()?

- the resolved value of the promise received by await expression is not in readable format. We have to use data.json() to convert to json format sp that we can iterate over.
