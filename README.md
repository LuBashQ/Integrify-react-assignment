# Integrify react assigment

This is my submission to integrify's react pre-assignment, found [here](https://docs.google.com/document/d/1eSIhICngtdovY7-iVcQL_7ygu1zjzN15oP1ll69yyjg/edit#). It's goals were to test:

1. Basic react concepts
2. React components
3. React hooks

I have done this exercise as a way to learn stilying with [tailwind-css](https://tailwindcss.com/).

## Getting started

### Requirements

This project was developed on node 16 LTS, newer or older versions might not be supported.

### Development build

Firstly, fetch the necessary `node modules` with the command
```sh
npm install
```
in the root directory.

To start the server in development mode, execute
```sh
npm run dev
```
### Production build

Alternatively you can build the project and run a local production instance, using either `nginx` or `serve`. 

To create a production build execute
```sh
npm run build
```

To serve it with `serve`, then execute
```sh
npm install -g serve
npx serve -s build -l :PORT
```

where `:PORT` is a custom port number.