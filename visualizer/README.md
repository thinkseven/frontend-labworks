# Add below code snippet to postman
```javascript
const template = `
<div id="root"></div>
<script src="file:///.../labworks/visualizer/build/visualizer.js">
</script>
`;

pm.visualizer.set(template, pm.response.json());
```