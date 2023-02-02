## What is the difference between a named export, Default export and \* as export?

- there can be many named exports but only on defualt export per file. named exports are imported with same name and within {} braces. Default export can be exported directly without the curly braces. we can give any other name to defaultexport but good practise is to give same name as exported module. we should give same name to moduled that are named exports. when we do \* as export we are exporting everything from the file.

## what is the importance of config.js file?

- Config.js file contains all the hard coded values and the constants that are neded. it is a good practise to have config.js or constants.js file in project.

## What are React Hooks?

- Hooks are a feature provided by react for perforning various activities like rerendering the UI, performing side effects, persisting values across rerenders. Hooks are basically JS functions.

## Why do we need useState hook?

- we need useState to trigger re rendering when the state changes and when we want to store any value that persist across rerenders.
