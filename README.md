
# Micro-Frontend Framework

A minimalistic micro-frontend framework designed to load and display micro-frontends from specified URLs. This framework allows you to register multiple micro-frontends and display them within a host application.

## Features

- **Simple Registration and Loading**: Easily register and load micro-frontends by URL.
- **Dynamic Script Execution**: Ensures that JavaScript included in your micro-frontend HTML is executed upon loading.

## Installation

Install the package via npm:

```bash
npm install anatolievich-micro-frontend-framework
```

## Usage

First, include the framework in your HTML file.

```html
<script src="node_modules/anatolievich-micro-frontend-framework/microFrontendFramework.js"></script>
```

Initialize the framework and register your micro-frontends:

```javascript
const framework = new MicroFrontendFramework();
framework.registerApp('app1', 'http://example.com/app1.html');
framework.registerApp('app2', 'http://example.com/app2.html');
```

Load a micro-frontend into a specified DOM element:

```javascript
framework.loadApp('app1', 'app1'); // Loads the app1 into the div with id 'app1'
framework.loadApp('app2', 'app2'); // Loads the app2 into the div with id 'app2'
```

## API Reference

### `registerApp(name, url)`

Registers a micro-frontend with a unique name and URL.

- **name**: A string that uniquely identifies the micro-frontend.
- **url**: A string URL from where the micro-frontend can be fetched.

### `loadApp(name, elementId)`

Loads the registered micro-frontend into the specified DOM element.

- **name**: The name of the registered micro-frontend.
- **elementId**: The DOM element ID where the micro-frontend will be displayed.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```

This README file provides a clear overview of the package, including installation instructions, usage examples, API details, and contribution guidelines. Adjust the `npm install` command and other parts as necessary based on the actual details of your package.