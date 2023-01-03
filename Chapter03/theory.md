## What is JSX?

- JSX is a way developed by FB devs to write more HTML inside javascript file. It is a combination of HTML like syntax and JS that is eaiser to read and helps to write HTML in JS efficiently.

## Superpowers of JSX?

- it makes the code elegant and clean.
- it makes the process of building UI simpler.
- JSX makes some optimizations to source code when they are coverted to JS to it is sill bit faster.

## Role of type attribute in the script tag? What options can i use there?

- type attribute specifying why type of script we are going to use. there are various options:

1. text/javascript: with this value browser will treat our script as classic js script

2. importmap: this allows use to control the behaviour js imports that we use in our file. it is a json object. when we write import xys from "xyz", the import specifier name "xyz" is mapped to the specific module version we are trying to use by node.js runtime or a build tool like parcel, webpack. using importmaps helps to avoid this build step as we specify the import mapping explicitly. importmap helps to map the import specifier name to a relative or absolute URL, this helps to control the resolution of module without the application of a build step.

```
<script type="importmap">
{
  "imports": {
    "dayjs": "https://cdn.skypack.dev/dayjs@1.10.7",
  }
}
</script>
<script type="module">
  import dayjs from 'dayjs';

  console.log(dayjs('2019-01-25').format('YYYY-MM-DDTHH:mm:ssZ[Z]'));
</script>
```

3. default: default value of script type is text/javascript.

4. module: type value of module tells the browser that we are using js module in script. browser by default does not understand the es module we have to explicity tell the browser that we are using js modules using typ in script tag.

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}

- <TitleComponent/> with self closing tag is used when the tag is empty and we dont need to provide any data to TitleComponent as props. {<TitleComponent></TitleComponent>} is suitable when we want to specify some data as props to <TitleComponent/>, this data is usually accessed props.children. {Title}
