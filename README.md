# ephemeral-shadow-dom

A lightweight, secure, and ephemeral content display web component built with LitElement. Perfect for temporary messages, notifications, or any content that needs to vanish after a set duration, all encapsulated within a shadow DOM for style and script isolation.

## Features

- **Ephemeral Content**: Automatically hides content after a specified duration.
- **Secure Content Rendering**: Uses DOMPurify to sanitize content and prevent XSS attacks.
- **Shadow DOM Encapsulation**: Styles and scripts are encapsulated, preventing external interference.

## Installation

Install `ephemeral-shadow-dom` via npm:

```bash
npm install ephemeral-shadow-dom
```

## Usage

1. Import `ephemeral-shadow-dom` in your project:

```javascript
import 'ephemeral-shadow-dom';
```

2. Add the component to your HTML with the `content` and `duration` attributes:

```html
<ephemeral-shadow-dom content="Your temporary message here" duration="5000"></ephemeral-shadow-dom>
```

- `content`: The HTML content to be displayed temporarily.
- `duration`: The duration in milliseconds before the content is hidden (default is 5000ms).

## Styling

The component can be styled using CSS Shadow Parts or global styles targeting the class `.temporary-content` for transitional effects.

## API

### Properties

- `content`: (String) The content to display temporarily. Supports HTML content.
- `duration`: (Number) Duration in milliseconds before the content disappears.

## Example

Here's a simple example of how to use `ephemeral-shadow-dom`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ephemeral Shadow DOM Example</title>
  <script type="module">
    import 'ephemeral-shadow-dom';
  </script>
</head>
<body>

<ephemeral-shadow-dom content="<strong>Hello, World!</strong>" duration="3000"></ephemeral-shadow-dom>

</body>
</html>
```

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](link-to-your-contributing-guidelines) for details on how to submit pull requests and more.

## License

This project is licensed under the [MIT License](LICENSE.md).
