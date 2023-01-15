# Cowlar Vue Components Library

The Cowlar Vue Components library includes components that can be used by cowlar projects as a package.

## Project Setup

- clone the repository

```
git clone  https://gitlab.com/cowlar/iotcore-gen2/iotcore-vue-components.git
```

- Install dependencies

```
npm install
```

- Run the Project

```
npm run dev
```

## How to create and publish your component?

Follow the steps below to create and publish your component in Cowlar Vue Components Library.

1.  Create a component/layout/pages with in the stories directory
2.  Import and export the component from index.ts file located in the root of src directory.

```
export { default as Button } from "./stories/Button.vue";
```

3.  Change the version of application in package.json file. If the version was 1.0.1 previosly, then we will make it 1.0.2

```
"version": "1.0.2"
```

4.  Create a build by running the following command in terminal

```
npm run build
```

6.  Last step is to publish the package, run the following commands

```
npm login
export CI_JOB_TOKEN=your_gitlab_personal_access_token_here
npm publish
```

## How to test your component in another project without publishing it?

1. Run the following command in your components library project

```
npm link
```

2. Now in the project where you want to test your component, run the following command

```
npm link packageName
```

You can found packageName in the package.json of your components library project. In our case it is _iotcore-vue-components_

## Todo

- [ ] Git commit message hook (to avoid irrelavant commit messages)
- [ ] Update the Architecture of application (most probably will be using atomic design pattern)
- [ ] Tailwind Integration (required T&D if we really need this)
- [ ] Components testing
- [ ] Code Guidelines documentation (create a checklist that must be follow when creating compnent)
