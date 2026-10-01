// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// React Router uses TextEncoder/TextDecoder, but the test environment in react-scripts 5 (jsdom) doesn't provide them.
// Node.js has its own copies in its built-in "util" module, so the tests borrow those.
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
