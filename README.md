<p>
  <h1 align="center" style="color: #008080">next-red-emo-mat</h1>


A scalable, highly opinionated [next.js](https://nextjs.org/) boilerplate featuring [redux-saga](https://redux-saga.js.org/), [Emotion](https://emotion.sh/), [Material UI](https://material-ui.com/), and most importantly, π₯ dark mode.

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
βββ README.md
ββββ­javascript
βΒ Β  βββ .babelrc
βΒ Β  βββ .nvmrc
βΒ Β  βββ next-env.d.ts
βΒ Β  βββ next.config.js
βΒ Β  βββ package.json
βΒ Β  βββ public
βΒ Β  ββββ­src
βΒ Β  βΒ Β  βββ assets
βΒ Β  βΒ Β  βΒ Β  βββ jss
βΒ Β  βΒ Β  βΒ Β      βββ themes
βΒ Β  βΒ Β  βΒ Β          βββ base.ts
βΒ Β  βΒ Β  βΒ Β          βββ dark.ts
βΒ Β  βΒ Β  βΒ Β          βββ index.ts
βΒ Β  βΒ Β  βΒ Β          βββ light.ts
βΒ Β  βΒ Β  βΒ Β          βββ teal.ts
βΒ Β  βΒ Β  βββ components
βΒ Β  βΒ Β  βΒ Β  βββ Header
βΒ Β  βΒ Β  βΒ Β  βΒ Β  βββ Header.jsx
βΒ Β  βΒ Β  βΒ Β  βββ TextPlaceholder
βΒ Β  βΒ Β  βΒ Β      βββ TextPlaceholder.jsx
βΒ Β  βΒ Β  βββ lib
βΒ Β  βΒ Β  βΒ Β  βββ redux
β   βΒ Β  βΒ Β      βββ modules
β   βΒ Β  βΒ Β      βΒ Β  βββ index.ts
β   βΒ Β  βΒ Β      βΒ Β  βββ theme.ts
β   βΒ Β  βΒ Β      βββ store.ts
βΒ Β  βΒ Β  βββ pages
βΒ Β  βΒ Β      βββ _app.jsx
βΒ Β  βΒ Β      βββ _document.jsx
βΒ Β  βΒ Β      βββ index.jsx
βΒ Β  βββ yarn-error.log
βΒ Β  βββ yarn.lock
ββββ­typescript
    βββ .babelrc
    βββ .nvmrc
    βββ next-env.d.ts
    βββ next.config.js
    βββ package.json
    βββ public
    ββββ­src
    βΒ Β  βββ assets
    βΒ Β  βΒ Β  βββ jss
    βΒ Β  βΒ Β      βββ themes
    βΒ Β  βΒ Β          βββ base.ts
    βΒ Β  βΒ Β          βββ dark.ts
    βΒ Β  βΒ Β          βββ index.ts
    βΒ Β  βΒ Β          βββ light.ts
    βΒ Β  βΒ Β          βββ teal.ts
    βΒ Β  βββ components
    βΒ Β  βΒ Β  βββ Header
    βΒ Β  βΒ Β  βΒ Β  βββ Header.tsx
    βΒ Β  βΒ Β  βββ TextPlaceholder
    βΒ Β  βΒ Β      βββ TextPlaceholder.tsx
    βΒ Β  βββ lib
    βΒ Β  βΒ Β  βββ redux
    βΒ Β  βΒ Β      βββ modules
    βΒ Β  βΒ Β      βΒ Β  βββ index.ts
    βΒ Β  βΒ Β      βΒ Β  βββ theme.ts
    βΒ Β  βΒ Β      βββ store.ts
    βΒ Β  βββ pages
    βΒ Β      βββ _app.tsx
    βΒ Β      βββ _document.tsx
    βΒ Β      βββ index.tsx
    βββ tsconfig.json
    βββ yarn-error.log
    βββ yarn.lock
  </code>
</pre>


# Redux (Redux-saga)
Redux store and (theme) module are defined in `src/lib/redux`

# Theming

Theme-specific styles are located in `src/assets/jss/themes`. They are in seperate files: `light.(j/t)s`, `dark.(j/t)s`, and `teal.(j/t)s`. Each theme extends the base style defined in `base.(j/t)s`.

# ETC

There are only two components defined in this template: `Header` and `TextPlaceholder` components which are used in `index` page to show how Emotion theming works.




> Further documentation is on the way...

