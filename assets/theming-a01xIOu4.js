import{j as e,M as i,S as o}from"./blocks-3YCeRlcD.js";import{useMDXComponents as l}from"./index-DYfpfeSU.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-COkunwa9.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction/Theming"}),`
`,e.jsx(n.h1,{id:"theming-system",children:"Theming System"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"polyfea-md-shell"})," implements Material Design 3 (Material You) dynamic theming. It automatically generates a complete set of design tokens (CSS variables) based on a few seed colors and font selections provided via attributes."]}),`
`,e.jsx(n.h2,{id:"1-color-customization",children:"1. Color Customization"}),`
`,e.jsxs(n.p,{children:['You do not need to define every single color variable manually. Instead, provide key "seed" colors, and the shell will generate tonal palettes for both light and dark modes automatically using algorithms from ',e.jsx(n.code,{children:"@material/material-color-utilities"}),"."]}),`
`,e.jsx(o,{code:`
<polyfea-md-shell
theme-primary-color="#415F91"
theme-secondary-color="#565F71"
theme-tertiary-color="#705575"
theme-error-color="#B3261E"
>
<!-- Application Content -->
</polyfea-md-shell>
`,language:"html"}),`
`,e.jsx(n.h3,{id:"seed-colors",children:"Seed Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"}),": The source for the primary color palette. Used for FABs, active states, and prominent buttons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary"}),": Used for less prominent components like filter chips."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tertiary"}),": Used for contrasting accents."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error"}),": Used for error states and warnings."]}),`
`]}),`
`,e.jsx(n.p,{children:"If these attributes are omitted, the standard Material 3 baseline colors are used."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-typography-customization",children:"2. Typography Customization"}),`
`,e.jsxs(n.p,{children:["The shell organizes typography into three logical roles: ",e.jsx(n.strong,{children:"Brand"}),", ",e.jsx(n.strong,{children:"Plain"}),", and ",e.jsx(n.strong,{children:"Icons"}),"."]}),`
`,e.jsx(o,{code:`
<polyfea-md-shell
theme-brand-font="'Roboto Slab', serif"
theme-plain-font="'Roboto Flex', sans-serif"
theme-icon-font="'Material Symbols Outlined'"
>
</polyfea-md-shell>
`,language:"html"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Brand Font"}),": Applied to expressive headlines (Display, Headline, Title Large)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Plain Font"}),": Applied to body text and UI labels (Body, Label, Title Medium/Small)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon Font"}),": Applied to ",e.jsx(n.code,{children:"<md-icon>"})," elements."]}),`
`]}),`
`,e.jsx(n.h3,{id:"️-important-font-loading-responsibility",children:"⚠️ Important: Font Loading Responsibility"}),`
`,e.jsxs(n.p,{children:["The attributes above only set the CSS ",e.jsx(n.code,{children:"font-family"})," property. ",e.jsx(n.strong,{children:"The shell does not download font files automatically."})," You must ensure the fonts are loaded in your page."]}),`
`,e.jsx(n.h4,{id:"option-a-use-the-bundled-fonts",children:"Option A: Use the Bundled Fonts"}),`
`,e.jsx(n.p,{children:"The package provides a CSS file containing the default font stack (Roboto Flex, Roboto Slab, and Material Symbols). You can link this in your HTML:"}),`
`,e.jsx(o,{code:`
<link rel="stylesheet" href="node_modules/@polyfea/md-shell/assets/fonts.css" />
`,language:"html"}),`
`,e.jsx(n.h4,{id:"option-b-load-manually",children:"Option B: Load Manually"}),`
`,e.jsxs(n.p,{children:["You can load fonts from any source, such as Google Fonts or a corporate CDN, as long as the names match what you pass to ",e.jsx(n.code,{children:"polyfea-md-shell"}),"."]}),`
`,e.jsx(o,{code:`
<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..900&display=swap" rel="stylesheet">
<!-- Then use theme-plain-font="'Roboto Flex', sans-serif" -->
`,language:"html"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-design-tokens",children:"3. Design Tokens"}),`
`,e.jsx(n.p,{children:"The shell acts as a global theme provider for your micro-frontend application. It injects standard Material Design 3 CSS custom properties into its scope, making them available to all child components (slotted content)."}),`
`,e.jsx(n.h3,{id:"generated-variables",children:"Generated Variables"}),`
`,e.jsx(n.p,{children:"Any web component inside the shell can consume these variables to match the active theme:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Colors"}),": ",e.jsx(n.code,{children:"--md-sys-color-primary"}),", ",e.jsx(n.code,{children:"--md-sys-color-surface"}),", ",e.jsx(n.code,{children:"--md-sys-color-on-primary"}),", etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typography"}),": ",e.jsx(n.code,{children:"--md-sys-typescale-body-medium"}),", ",e.jsx(n.code,{children:"--md-sys-typescale-headline-large"}),", etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shape"}),": ",e.jsx(n.code,{children:"--md-sys-shape-corner-medium"}),", etc."]}),`
`]}),`
`,e.jsxs(n.p,{children:["This creates a seamless integration with standard libraries like ",e.jsx(n.code,{children:"@material/web"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-runtime-user-preferences",children:"4. Runtime User Preferences"}),`
`,e.jsx(n.p,{children:"The shell supports runtime theme switching (Light/Dark mode) and accessibility enhancements (Text Scaling)."}),`
`,e.jsxs(n.p,{children:["You can control these features using the ",e.jsx(n.code,{children:"<polyfea-md-theme-control>"})," component, which can be placed inside menus or settings pages. The shell listens for ",e.jsx(n.code,{children:"theme-changed"})," events and updates all CSS tokens instantly without a page reload."]}),`
`,e.jsx(o,{code:`
<!-- Switch between Light/Dark theme -->
<polyfea-md-theme-control control="theme-toggle"></polyfea-md-theme-control>

<!-- Increase base font size for accessibility -->
<polyfea-md-theme-control control="text-increase"></polyfea-md-theme-control>
`,language:"html"}),`
`,e.jsxs(n.p,{children:["You can enable built-in menu items for these controls by setting the ",e.jsx(n.code,{children:"theme-menu"})," attribute on the shell:"]}),`
`,e.jsx(o,{code:`
<polyfea-md-shell theme-menu>
<!-- Application Content -->
</polyfea-md-shell>
`,language:"html"})]})}function c(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{c as default};
