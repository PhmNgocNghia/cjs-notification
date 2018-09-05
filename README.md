# vue-bounce-checkbox
[Document and demo](https://phmngocnghia.github.io/vue-bounce-checkbox)
[Npm](https://github.com/PhmNgocNghia/vue-bounce-checkbox)
[React-bounce-checkbox](https://github.com/PhmNgocNghia/react-bounce-checkbox)

# Install
```
yarn install vue-bounce-checkbox
```

# Usage ES6
```js
import checkbox from 'vue-bounce-checkbox/dist/Checkbox.umd.js'
import 'vue-bounce-checkbox/dist/checkbox.css'
```

# Usage Non node environment
```html
<script src="https://unpkg.com/vue-bounce-checkbox@0.1.2/dist/Checkbox.umd.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-bounce-checkbox@0.1.2/dist/Checkbox.css"/>
```

Then

```html
<div id="app">
  <demo></demo>
</div>

<script>
new Vue({
  components: {
    demo: Checkbox
  }
}).$mount('#app')
</script>

```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
* yarn run serve = develop mode
* yarn run serve:docs = docs mode


### Compiles and minifies for production
* yarn run build:lib = build library library
* yarn run build:docs = build document 

### Lints and fixes files
yarn run lint

### Run your unit tests
* yarn run test:unit = Unit test
* yarn run test:debug = Debug with --inspect--break
* yarn run test:coverage = Test with code coverage
