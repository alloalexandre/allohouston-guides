/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
    "*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write", "eslint --fix"],
};
