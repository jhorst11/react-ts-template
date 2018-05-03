# create-react-app typescript with hot module reload

This is a Typescript template project made with Create React App that supports hot module reload (without eject).

Here's what it does:

- create-react-app with Typescript support
- Hot Module Reload support
- Theming with styled components
- Linting
- Prettier settings

## Debugging

I've opted out of debugging in vs-code in favor of the chrome debugger.

## Recommended vscode setup

I recommend these plugins with vscode
- Prettier
- Toggle Excluded Files
- TsLint
- vscode-styled-components: gives css intellisense in styled components
- Auto Close Tag
- Auto Import
- Auto Rename Tag
- Bracket Pair Colorizer
- Typescript Hero

Prettier is run as a pre-commit script, I also like to format on save and paste:

```
"tslint.autoFixOnSave": true,
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
``` 
