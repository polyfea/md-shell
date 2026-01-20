import{j as e,M as a,S as s}from"./blocks-BNxiuf1u.js";import{useMDXComponents as i}from"./index-4w8Q4YF4.js";import"./preload-helper-BXAtxqEK.js";import"./iframe-B2ViYexA.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Introduction/Usage"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@polyfea/polyfea-md-shell"})," package provides a set of Material Design 3 enabled components designed to build responsive, micro-frontend ready application shells."]}),`
`,e.jsx(n.h2,{id:"core-components",children:"Core Components"}),`
`,e.jsx(n.p,{children:"The architecture revolves around three main elements that structure your application layout."}),`
`,e.jsxs(n.h3,{id:"1-the-shell-polyfea-md-shell",children:["1. The Shell (",e.jsx(n.code,{children:"<polyfea-md-shell>"}),")"]}),`
`,e.jsx(n.p,{children:"This is the top-level container for your application. It handles the responsive layout grid, theming, localization context, and global navigation areas (Top Bar, Drawer, Rail)."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsiveness"}),": Automatically switches between Navigation Drawer (desktop) and Navigation Rail (tablet/mobile)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Theming"}),": Hosts the design tokens and theme providers. See ",e.jsx(n.a,{href:"/docs/features-theming--docs",children:"Theming"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context"}),": Provides slots and ",e.jsx(n.a,{href:"https://polyfea.github.io/documentation/core-concepts/browsercore/",rel:"nofollow",children:"Polyfea context areas"})," for injecting content."]}),`
`]}),`
`,e.jsx(s,{code:`
<polyfea-md-shell application-headline="My App">
<!-- Content goes here -->
</polyfea-md-shell>
`,language:"html"}),`
`,e.jsxs(n.h3,{id:"2-the-app-switcher-polyfea-md-apps",children:["2. The App Switcher (",e.jsx(n.code,{children:"<polyfea-md-apps>"}),")"]}),`
`,e.jsx(n.p,{children:'Designed for the landing page or a "dashboard" view. It displays a grid of available applications or modules as cards. It is responsive and adjusts the grid columns based on available screen width.'}),`
`,e.jsx(s,{code:`
<polyfea-md-shell>
<polyfea-md-apps>
  <polyfea-md-app name="inventory" icon="inventory_2" label="Inventory"></polyfea-md-app>
  <polyfea-md-app name="users" icon="group" label="User Management"></polyfea-md-app>
</polyfea-md-apps>
</polyfea-md-shell>
`,language:"html"}),`
`,e.jsxs(n.h3,{id:"3-the-navigation-item-polyfea-md-app",children:["3. The Navigation Item (",e.jsx(n.code,{children:"<polyfea-md-app>"}),")"]}),`
`,e.jsx(n.p,{children:"A versatile navigation element that adapts its appearance based on where it is placed."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["In ",e.jsx(n.code,{children:"<polyfea-md-apps>"})]}),": Renders as a Card (Entry point)."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["In ",e.jsx(n.code,{children:'slot="drawer"'})]}),": Renders as a Navigation Drawer Item."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["In ",e.jsx(n.code,{children:'slot="rail"'})]}),": Renders as a Navigation Rail Item."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["In ",e.jsx(n.code,{children:'slot="navigation"'})]}),": Renders as a Navigation Bar Item (bottom nav)."]}),`
`]}),`
`,e.jsx(n.p,{children:"This polymorphic behavior allows you to reuse the same component definition across different navigation contexts."}),`
`,e.jsx(s,{code:`
<polyfea-md-shell>
<!-- Sidebar Navigation -->
<div slot="drawer">
  <polyfea-md-app name="home" icon="home" label="Home" active></polyfea-md-app>
  <polyfea-md-app name="settings" icon="settings" label="Settings"></polyfea-md-app>
</div>

<!-- Content -->
<h1>Welcome Home</h1>
</polyfea-md-shell>
`,language:"html"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"integration-via-polyfea-controller",children:"Integration via Polyfea Controller"}),`
`,e.jsxs(n.p,{children:["While these components can be used standalone in any HTML/Lit page, they are optimized for the ",e.jsx(n.a,{href:"https://polyfea.github.io/documentation/",rel:"nofollow",children:"Polyfea Controller"}),"."]}),`
`,e.jsx(n.p,{children:"When used with the controller:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Context Injection"}),": The shell defines ",e.jsx(n.code,{children:"context"})," zones (e.g., ",e.jsx(n.code,{children:"topbar-trailing-icon"}),", ",e.jsx(n.code,{children:"drawer-content"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Micro-frontends"}),`: Independent modules can target these zones to inject their own UI elements (e.g., a "User Profile" widget in the top bar) without modifying the shell's code.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.a,{href:"/docs/introduction-deployment--docs",children:"Deployment"}),` for examples of how to deploy micro-frontends into the shell using Polyfea Controller.
See `,e.jsx(n.a,{href:"/docs/introduction-localization--docs",children:"Localization"})," for details on how micro-frontends can contribute translations dynamically."]})]})}function c(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{c as default};
