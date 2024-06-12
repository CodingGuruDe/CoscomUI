# CoscomBase/Coscom-UI

Coscom UI is a lightweight UI components library for VueJS made for internal use. It offers a set of easily customisable components and doesn't depend on any specific style or CSS framework. More components will be added in the future.

## Download

Coscom UI is available at [npm](https://www.npmjs.com/package/coscom/coscom-ui).

```
# Using npm
npm install @coscom/coscom-ui

# Using yarn
yarn add @coscom/coscom-ui

# Using pnpm
pnpm add @coscom/coscom-ui
```

## Explanation

````
# npm run build:lib
it create dist folder with all components exported

# npm run generate
it creates .output/public to output to any static hosting

# npm run preview
Generates a single html page with all available components.

## Plugin

Coscom UI plugin is required to be installed with the **use** function to set up the default [configuration](https://coscom-ui.org/theming).

```javascript
import { createApp } from 'vue';
import Coscom from 'coscom/config';
const app = createApp(App);

app.use(Coscom);
````

## Documentation

Note: the documentation source code is in the `docs` directory, it serves as the demo as well.

## Theming

Coscom UI has two theming has modes; styled or unstyled.

**Styled Mode**

No dependency on a specific CSS framework/library but you can easily integrate the components with one of them because they are fully customizable in different ways.

```javascript
// theme
import 'coscom-ui/resources/themes/light-blue/theme.css';
```

**Unstyled Mode**

Unstyled mode is disabled by default for all components. Using the Coscom UI plugin during installation, set `unstyled` as true to enable it globally.

```javascript
import { createApp } from 'vue';
import Coscom from 'coscom/config';
const app = createApp(App);

app.use(Coscom, { unstyled: true });
```

## Usage

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
import Button from '@coscom-ui/button';
import Editor from '@coscom/coscom-ui/editor';
import Toast from '@coscom/coscom-ui/toast';

const app = createApp(App);
app.component('Button', Button);
app.component('Editor', Editor);
app.component('Toast', Toast);
```

## Prop Cases

Component prop names are described as camel case throughout the documentation however kebab-case is also fully supported. Events on the other hand should always be kebab-case.

```vue
<Dialog :showHeader="false"></Dialog>

<!-- can be written as -->

<Dialog :show-header="false"></Dialog>
```

Whether to install the Coscom UI plugin, defaults to true. Disable this option if you prefer to configure Coscom UI manually e.g. with a Nuxt plugin.

```javascript
coscom: {
    useCoscom: true;
}
```

The names of the components, directives and composables to import and register are provided using the include property. When the value is ignored or set using the \* alias, all of the components, directives and composables are registered respectively.

```javascript
coscomui: {
    components: {
        include: ['Button', 'DataTable']
    },
    directives: {
        include: ['Ripple', 'Tooltip']
    },
    composables: {
        include: ['useStyle']
    }
}
```

In styled mode, the theme can be defined at Nuxt configuration with the css property. Note that this only applies to styled mode, in unstyled mode a theme file is not required as styling is done externally.

```javascript
export default defineNuxtConfig({
    css: ['coscom-ui/resources/themes/light-blue/theme.css']
});
```
