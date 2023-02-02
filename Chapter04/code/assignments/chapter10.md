## Explore all the ways of writing CSS.

```
// inline css
<Component style={{backgroundColor:"red", padding: "1rem"}}>

// CSS in JS libraries

import styled from 'styled-components';

const Heading = styled.h1`
    padding: 1rem,
    color: red
`
const Heading = ()=>{
    return <Heading>this is Styled component heading</Heading>
}

// from external stylesheet as classes

import "./styles.css"

const Heading = ()=>{
    return <h1 className="heading">this is a heading</h1>
}

```

## How do we configure tailwind?

- to configure tailwind we have to:

1. install tailwind and postcss as dev dependencies
2. initialize the tailwind config file and update the content to field that it track the tailwind class names in our html, js files
3. add the .postcssrc file which will compile the tailwind classnames into css properties

## in tailwind.config.js, what does all the key mean (content, theme, extends, plugins)?

1. content: content specifc the location and type of files where we will use tailwind,
2. theme: theme specifies the default theme for our project. we can add default values for color, spacing, screen. tailwind has a list of core theme that can be used here.
3. extends: if we want to preserve the default theme and and add new values to existing theme then we can use extends key under theme. example

```
//add new breakpoint in addition to default breakpoint

module.exports={
    theme:{
        extend:{
            screens:{
                "3xl":"1600px"
            }
        }
    }
}
```

4. plugins: plugins lets you add new third party styles on top on existing styles. We can use plugin for typography, form, lime-clamp, etc.

```
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}

```

## Why do we have .postcssrc file?

- PostCSS is a pre processor what will help us to convert the tailwind assests into CSS. the .postcssrc file is used to provide configurations for PostCSS.
