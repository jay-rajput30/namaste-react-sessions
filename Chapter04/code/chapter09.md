## When and why do we need lazy()?

- For large web apps where we have a huge bundle size, we can use optimization technique to improve performance. Lazy loading/code splitting/dynamic bundling is one such optimization technique. lazy() is part of react core features to implement optimization. In lazy loading only the necessary components are loaded on the screen as part of the bundle. the lazy loaded components are loaded separately when they are invoked. lazy loading decreases bundle size, increases app load time, reduce workload of browser.

## What is suspense?

- When we lazy load a component, that component will not be loaded until it is invoked. Using Suspense makes the page to wait till the lazy component loads. We can also use a fallback placeholder to display till the lazy component is loaded.

## Why we got this error :A component suspended while responding to synchronous input. This will cause the UI to be replaced with aloading indicator. To fix, updates that suspend should bewrapped with startTransition? How does suspense fix this error?

-

## advantages and disadavantages of using this code splitting pattern?

- advantages of code splitting: decreased bundle size, increased app load time, reduced workload of browser. disadvantages: css selectors might break or not work as predicted.
