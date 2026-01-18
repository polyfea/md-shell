import{j as e,M as o,S as l}from"./blocks-CcS3Falo.js";import{useMDXComponents as r}from"./index-BBZKG8Dh.js";import"./preload-helper-BXAtxqEK.js";import"./iframe-D8eooYpM.js";function i(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction/Localization"}),`
`,e.jsx(n.h1,{id:"localization-system",children:"Localization System"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"polyfea-md-shell"})," includes a dynamic, decentralized localization system built on top of ",e.jsx(n.code,{children:"@lit/localize"}),". It is designed for micro-frontend architectures where individual modules (web components) load their translations only when needed, while the Shell orchestrates the current active locale and applies global overrides."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dynamic Loading"}),": Translation chunks are loaded lazily. If a user switches to French, only the French resources for currently registered modules are fetched."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Decentralized Registry"}),": Each functional module/component registers its own localization loader. The Shell does not need to know about all translations at build time."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Runtime Overrides"}),`: Translations can be patched via external files (served from static pages or by dedicated microfrontend registered
in `,e.jsx(n.a,{href:"https://polyfea.github.io/documentation/",rel:"nofollow",children:"Polyfea Controller"}),") without rebuilding the application code."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-locale-selection-logic",children:"1. Locale Selection Logic"}),`
`,e.jsx(n.p,{children:"The active locale is resolved in the following priority:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User Selection"}),": Explicitly set via the ",e.jsx(n.code,{children:"setLocale"})," method or the UI menu in the Shell."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browser Preference"}),": If no user selection exists, the system checks ",e.jsx(n.code,{children:"navigator.languages"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fallback"}),": If no match is found, the system displays the original strings defined in the source code (typically English)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"resolution-algorithm",children:"Resolution Algorithm"}),`
`,e.jsxs(n.p,{children:["When loading a resource for a specific module, the system uses a ",e.jsx(n.strong,{children:"best-match strategy"}),":"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exact Match"}),": Tries to load ",e.jsx(n.code,{children:"en-GB"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Base Language"}),": If ",e.jsx(n.code,{children:"en-GB"})," is not found, tries ",e.jsx(n.code,{children:"en"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": If neither exists in the module's registration list, it keeps the source text."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-registering-dynamic-translations",children:"2. Registering Dynamic Translations"}),`
`,e.jsxs(n.p,{children:["Third-party components or features should register themselves using ",e.jsx(n.code,{children:"registerLocaleModule"}),". This is usually done in the ",e.jsx(n.code,{children:"connectedCallback"})," of the component."]}),`
`,e.jsx(l,{code:`
import { registerLocaleModule } from '@polyfea/polyfea-md-shell';

class MyFeature extends HTMLElement {
connectedCallback() {
  super.connectedCallback();

  // Register translation loader for this module
  registerLocaleModule(
    '@my-org/auth-module',      // Unique module namespace
    ['en', 'sk', 'de'],         // List of supported locales in this module
    (locale) => import(\`./generated/locales/\${locale}.js\`) // Dynamic import returning Promise
  );
}

render() {
  // Usage with standard lit/localize msg function
  return html\`<button>\${msg('Sign In')}</button>\`;
}
}
`,language:"typescript"}),`
`,e.jsx(n.p,{children:"When the global locale changes, the Shell automatically calls the loader function for the new locale and merges the templates."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-server-overrides",children:"3. Server Overrides"}),`
`,e.jsx(n.p,{children:`You can override any text in the application (shell or registered modules) by serving external translation files.
This is useful for adding new translations , or fixing typos or changing terminology without a new release of microfrontend modules.`}),`
`,e.jsx(n.h3,{id:"configuration",children:"Configuration"}),`
`,e.jsx(n.p,{children:"Configure the shell to look for overrides:"}),`
`,e.jsx(l,{code:`
<polyfea-md-shell
locales-path="/assets/i18n" 
locales='["en", "sk", "cz"]'>
</polyfea-md-shell>
`,language:"html"}),`
`,e.jsxs(n.p,{children:["You can also enable language selection menu in shell actions by setting the ",e.jsx(n.code,{children:"locale-menu"})," attribute:"]}),`
`,e.jsx(l,{code:`
<polyfea-md-shell
  locales-path="/assets/i18n"
  locales='["en", "sk", "cz"]'
  locale-menu>
</polyfea-md-shell>
`,language:"html"}),`
`,e.jsx(n.h3,{id:"override-file-format",children:"Override File Format"}),`
`,e.jsxs(n.p,{children:["An override file is a standard JS module exporting a ",e.jsx(n.code,{children:"templates"}),` object. The keys are the translation IDs (generated by lit-localize).
It is recommended to use specific message IDs to avoid accidental overwrites when the source text changes.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File:"})," ",e.jsx(n.code,{children:"/assets/i18n/sk.js"})]}),`
`,e.jsx(l,{code:`
export const templates = {
// Overriding a specific message ID
's4513f8b8f36d33': 'Vlastný nadpis aplikácie', 
};
`,language:"javascript"}),`
`,e.jsxs(n.p,{children:["The Shell loads this file ",e.jsx(n.em,{children:"after"})," module translations and merges it on top, effectively replacing the specific strings."]}),`
`,e.jsxs(n.p,{children:["To apply translated strings in your components, always use the ",e.jsx(n.code,{children:"msg"})," function from ",e.jsx(n.a,{href:"https://lit.dev/docs/localization/overview/",rel:"nofollow",children:e.jsx(n.code,{children:"@lit/localize"})}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"summary-of-data-flow",children:"Summary of Data Flow"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input"}),": User selects 'sk' (Slovak)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shell"}),": Dispatches ",e.jsx(n.code,{children:"loading"})," status."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Loaders"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Shell loads internal ",e.jsx(n.code,{children:"sk"})," core translations."]}),`
`,e.jsxs(n.li,{children:["Shell loads ",e.jsx(n.code,{children:"sk.js"})," from ",e.jsx(n.code,{children:"locales-path"})," (Overrides)."]}),`
`,e.jsxs(n.li,{children:["Registered modules (e.g., ",e.jsx(n.code,{children:"@my-org/auth"}),") load their own ",e.jsx(n.code,{children:"sk.js"})," via their registered loader function."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Merge"}),": All templates are merged. ",e.jsx(n.code,{children:"Overrides"})," > ",e.jsx(n.code,{children:"Module Translations"})," > ",e.jsx(n.code,{children:"Source"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Render"}),": Shell dispatches ",e.jsx(n.code,{children:"ready"})," status and Lit elements re-render with new strings."]}),`
`]})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
