import{j as e,M as s}from"./blocks-CcS3Falo.js";import{useMDXComponents as t}from"./index-BBZKG8Dh.js";import"./preload-helper-BXAtxqEK.js";import"./iframe-D8eooYpM.js";function i(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Introduction/Overview"}),`
`,e.jsx(n.h1,{id:"polyfea-material-shell",children:"Polyfea Material Shell"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Polyfea Material Shell"})," (",e.jsx(n.code,{children:"@polyfea/md-shell"}),") is a specialized library of Web Components designed to provide a robust, responsive application shell based on ",e.jsx(n.a,{href:"https://m3.material.io/",rel:"nofollow",children:"Material Design 3"}),"."]}),`
`,e.jsx(n.h2,{id:"purpose",children:"Purpose"}),`
`,e.jsxs(n.p,{children:["The primary purpose of this project is to serve as the foundational layout layer for web applications, specifically functionality within the ",e.jsx(n.strong,{children:"Polyfea"})," ecosystem. It abstracts away the complexity of managing responsive layouts, navigation states, and systemic theming, allowing developers to focus on building the specific business logic and content of their micro-applications."]}),`
`,e.jsx(n.h2,{id:"goals",children:"Goals"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Consistency"}),": To ensure applications look and behave correctly across all device sizes—transitioning seamlessly from a bottom navigation bar on mobile, to a navigation rail on tablets, to a full drawer on desktops."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Microfrontend Integration"}),": To provide ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/slot",rel:"nofollow",children:'"slots"'})," and ",e.jsx(n.a,{href:"https://polyfea.github.io/documentation/core-concepts/browsercore/",rel:"nofollow",children:'"context areas"'})," that allow decoupled microfrontends to inject navigation items, top-bar actions, and main content without hard dependencies on the shell implementation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Material Design 3 Compliance"}),": To provide a strict implementation of MD3 guidelines, including dynamic color systems, elevation, and typography scales."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility & Localization"}),": To include built-in support for theme modes, font scaling controls, and internationalization (i18n)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"key-components",children:"Key Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"polyfea-md-shell"})}),": The root container that orchestrates the layout grid and manages the visibility of navigation areas."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"polyfea-md-apps"})}),": The application launcher component that displays registered microfrontends in a grid or list format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"polyfea-md-app"})}),": A polymorphic link component that automatically renders as a card, list item, or icon depending on where it is placed (Launcher, Drawer, or Rail)."]}),`
`]})]})}function d(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{d as default};
