import { LitElement, html, css } from 'lit-element';
import { nanoid } from 'nanoid';
import DOMPurify from 'dompurify';

class EphemeralShadowDom extends LitElement {
  static get styles() {
    return css`
      :host { display: block; }
      .temporary-content { transition: opacity 0.5s ease-in-out; }
    `;
  }

  static get properties() {
    return {
      content: { type: String },
      duration: { type: Number } // Duration in milliseconds
    };
  }

  constructor() {
    super();
    this.content = '';
    this.duration = 5000; // Default duration 5 seconds
  }

  render() {
    return html`
      <div id="container" class="temporary-content">${this.safeContent()}</div>
    `;
  }

  safeContent() {
    return html`${DOMPurify.sanitize(this.content)}`;
  }

  firstUpdated() {
    this.setupEphemeralContent();
  }

  setupEphemeralContent() {
    setTimeout(() => {
      this.removeContent();
    }, this.duration);
  }

  removeContent() {
    this.content = ''; // Clears the content
    this.requestUpdate(); // Request update to re-render
  }

  createRenderRoot() {
    // Use Shadow DOM
    return this.attachShadow({ mode: 'open' });
  }
}

// Define the new element
if (!customElements.get('ephemeral-shadow-dom')) {
  customElements.define('ephemeral-shadow-dom', EphemeralShadowDom);
}
