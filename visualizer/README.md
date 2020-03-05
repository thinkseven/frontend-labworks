# Add below code snippet to postman
```javascript
const template = `
<div id="root"></div>
<script src="file:///.../labworks/visualizer/build/visualizer.js">
</script>
`;

pm.visualizer.set(template, pm.response.json());
```

```json
    "tailwind:css":"tailwind build src/components/tailwind.src.css -o src/components/tailwind.css",
    "start": "npm run tailwind:css && cross-env NODE_ENV=development BABEL_ENV=development SIMULATOR=true webpack-dev-server --hot --open",
    "build": "npm run tailwind:css && cross-env NODE_ENV=production NODE_ENV=production SIMULATOR=false webpack --config webpack.config.js --mode production --watch"
```