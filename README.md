<p>
  <h1 align="center" style="color: #008080">next-red-emo-mat</h1>
</p>

A scalable, highly opinionated [next.js](https://nextjs.org/) boilerplate featuring [redux-saga](https://redux-saga.js.org/), [Emotion](https://emotion.sh/), [Material UI](https://material-ui.com/), and most importantly, 🔥 dark mode.

To use this template, `cd` into either `javascript` or `typescript` directory and run the following command:

```bash
yarn dev

# or

npm run dev
```

# Demo

![demo.gif](demo.gif)


# Structure

Below is the tree structure of this template (files and sub-directories that are irrelevant are excluded):


<pre>
  <code>
.
├── README.md
├── <span style="font-weight: bold; color: red;">javascript</span>
│   ├── .babelrc
│   ├── .nvmrc
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package.json
│   ├── public
│   ├── <span style="display: inline; font-weight: bold; color: blue;">src</span>
│   │   ├── <span style="font-weight: bold; color: green;">assets</span>
│   │   │   └── jss
│   │   │       └── themes
│   │   │           ├── base.ts
│   │   │           ├── dark.ts
│   │   │           ├── index.ts
│   │   │           ├── light.ts
│   │   │           └── teal.ts
│   │   ├── <span style="font-weight: bold; color: green;">components</span>
│   │   │   ├── Header
│   │   │   │   └── Header.jsx
│   │   │   └── TextPlaceholder
│   │   │       └── TextPlaceholder.jsx
│   │   ├── <span style="font-weight: bold; color: green;">lib</span>
│   │   │   └── redux
│   │   │       ├── modules
│   │   │       │   ├── index.ts
│   │   │       │   └── theme.ts
│   │   │       └── store.ts
│   │   └── <span style="font-weight: bold; color: green;">pages</span>
│   │       ├── _app.jsx
│   │       ├── _document.jsx
│   │       └── index.jsx
│   ├── yarn-error.log
│   └── yarn.lock
└── <span style="font-weight: bold; color: red">typescript</span>
    ├── .babelrc
    ├── .nvmrc
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── public
    ├── <span style="font-weight: bold; color: blue;">src</span>
    │   ├── <span style="font-weight: bold; color: green;">assets</span>
    │   │   └── jss
    │   │       └── themes
    │   │           ├── base.ts
    │   │           ├── dark.ts
    │   │           ├── index.ts
    │   │           ├── light.ts
    │   │           └── teal.ts
    │   ├── <span style="font-weight: bold; color: green;">components</span>
    │   │   ├── Header
    │   │   │   └── Header.tsx
    │   │   └── TextPlaceholder
    │   │       └── TextPlaceholder.tsx
    │   ├── <span style="font-weight: bold; color: green;">lib</span>
    │   │   └── redux
    │   │       ├── modules
    │   │       │   ├── index.ts
    │   │       │   └── theme.ts
    │   │       └── store.ts
    │   └── <span style="font-weight: bold; color: green;">pages</span>
    │       ├── _app.tsx
    │       ├── _document.tsx
    │       └── index.tsx
    ├── tsconfig.json
    ├── yarn-error.log
    └── yarn.lock
  </code>
</pre>


# Redux (Redux-saga)
Redux store and (theme) module are defined in `src/lib/redux`

# Theming

Theme-specific styles are located in `src/assets/jss/themes`. They are in seperate files: `light.(j/t)s`, `dark.(j/t)s`, and `teal.(j/t)s`. Each theme extends the base style defined in `base.(j/t)s`.

# ETC

There are only two components defined in this template: `Header` and `TextPlaceholder` components which are used in `index` page to show how Emotion theming works.




> Further documentation is on the way...

