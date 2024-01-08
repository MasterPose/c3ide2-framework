# C3IDE2 Type Definitions

[Construct 3 IDE 2](https://github.com/ConstructFund/c3ide2-framework) is a framework that makes creating Addons for Construct 3 easier.

In this repository you'll find TypeScript Interface definitions for the configurations of the various types of AddOns supported by the IDE.

## Installation

You can install this package via NPM:

```
npm i c3ide2-types -D
```

## Usage

After installing you'll have access to the types.

Using JSDoc, you'll be able to type the config:

![image](https://github.com/MasterPose/c3ide2-types/assets/46875694/a5bf2aa6-632c-4827-8488-331add4a60e2)

You should have something like this:

```js
/** @type {import("c3ide2-types").Behavior} */
const Behavior = { 
  //...
};

module.exports = Behavior;
```

>[!CAUTION]
> Do not import Types as a JS module like this: `import { Behavior } from "c3ide2-types";`. They're TypeScript interfaces, and are not understood by JavaScript. Use them only with JSDoc.

---

After that, your code editor IntelliSense should start autocompleting the options.

![image](https://github.com/MasterPose/c3ide2-types/assets/46875694/4ac7eebd-006f-4401-acef-3b164b8ceb53)
