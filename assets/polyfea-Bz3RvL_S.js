import{j as e,M as l,S as o}from"./blocks-syIMpFOP.js";import{useMDXComponents as s}from"./index-B3rd_wV4.js";import"./preload-helper-BXAtxqEK.js";import"./iframe-YCl51QGZ.js";function i(t){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Introduction/Deployment"}),`
`,e.jsx(n.h1,{id:"kubernetes-deployment-via-polyfea-controller",children:"Kubernetes Deployment via Polyfea Controller"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"polyfea-md-shell"})," is designed to be deployed as a ",e.jsx(n.strong,{children:"MicroFrontend"})," resource within a Kubernetes cluster managed by the ",e.jsx(n.a,{href:"https://polyfea.github.io/documentation",rel:"nofollow",children:"Polyfea Controller"}),"."]}),`
`,e.jsx(n.p,{children:"In this architecture, the Shell plays a dual role:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UI Container"}),": It provides the visible layout (Top Bar, Drawer, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Platform Provider"}),": It serves shared dependencies (Lit, Material Web) and global assets to other micro-frontends in the cluster."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," This guide assumes you have a working Polyfea Controller setup. Refer to the ",e.jsx(n.a,{href:"https://polyfea.github.io/documentation/getting-started/",rel:"nofollow",children:"Polyfea documentation"})," for initial setup instructions."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-defining-the-microfrontend",children:"1. Defining the MicroFrontend"}),`
`,e.jsxs(n.p,{children:["To make the shell available to the platform, apply a ",e.jsx(n.code,{children:"MicroFrontend"})," Custom Resource. This registers the assets and shared libraries."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File:"})," ",e.jsx(n.code,{children:"deploy/manifests/base/md-shell.microfrontend.yaml"})]}),`
`,e.jsx(o,{code:`
apiVersion: polyfea.github.io/v1alpha1
kind: MicroFrontend
metadata:
name: polyfea-md-shell
spec:
frontendClass: fea
service: http://polyfea-md-shell.default.svc.cluster.local

# Entry point exporting the web components (Shell, App Switcher, Title, etc.)
modulePath: elements.js

# Global assets injected into the <head> of the main document
staticPaths:
  - kind: stylesheet
    path: assets/fonts.css 
    
# Shared libraries offered to other micro-frontends
importMap:
  imports:
    lit: /imports/lit/index.js
    lit/: /imports/lit/
    lit-html: /imports/lit-html/lit-html.js
    "@lit/context": /imports/@lit/context/context.js
    "@material/web/": /imports/@material/web/
`,language:"yaml"}),`
`,e.jsx(n.h3,{id:"key-configuration-concepts",children:"Key Configuration Concepts"}),`
`,e.jsx(n.p,{children:"The configuration above solves specific challenges in micro-frontend architectures:"}),`
`,e.jsxs(n.h4,{id:"a-shared-runtime--singleton-state-importmap",children:["A. Shared Runtime & Singleton State (",e.jsx(n.code,{children:"importMap"}),")"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," If every micro-frontend bundles its own version of ",e.jsx(n.code,{children:"lit"})," or ",e.jsx(n.code,{children:"@lit/context"}),", the application becomes heavy, and communication features (Context API) break because different instances of the library don't recognize each other."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," The Shell configures an ",e.jsx(n.code,{children:"importMap"}),". This tells the browser: ",e.jsxs(n.em,{children:['"When any micro-frontend asks for ',e.jsx(n.code,{children:"lit"}),", do not download a new copy. Use the one shared by ",e.jsx(n.code,{children:"polyfea-md-shell"})," at ",e.jsx(n.code,{children:"/imports/lit/..."}),'."']}),`
This ensures that:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance:"})," Code is downloaded once and cached."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stability:"})," All components share the same Context and State management."]}),`
`]}),`
`,e.jsxs(n.h4,{id:"b-global-asset-injection-staticpaths",children:["B. Global Asset Injection (",e.jsx(n.code,{children:"staticPaths"}),")"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Problem:"})," Web Components use Shadow DOM, which encapsulates styles. However, fonts (",e.jsx(n.code,{children:"@font-face"}),") must be defined in the global document scope to be visible to all shadow roots."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Solution:"})," The ",e.jsx(n.code,{children:"staticPaths"})," array instructs the Polyfea Controller to inject the ",e.jsx(n.code,{children:"assets/fonts.css"})," link tag into the main document ",e.jsx(n.code,{children:"<head>"}),". This loads Roboto and Material Symbols fonts globally."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-instantiating-the-shell",children:"2. Instantiating the Shell"}),`
`,e.jsxs(n.p,{children:["Once the MicroFrontend is registered, it doesn't appear on the screen automatically. you must create a ",e.jsx(n.code,{children:"WebComponent"})," resource to instantiate it in the ",e.jsx(n.code,{children:"shell"})," context."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File:"})," ",e.jsx(n.code,{children:"deploy/manifests/base/md-shell.webcomponent.yaml"})]}),`
`,e.jsx(o,{code:`
apiVersion: polyfea.github.io/v1alpha1
kind: WebComponent
metadata:
name: polyfea-md-shell
spec:
microFrontend: polyfea-md-shell
element: polyfea-md-shell
attributes: 
  - name: application-headline
    value: "Mission Control"
  - name: locale-menu
    value: "true"
  - name: locales
    value: '["en", "sk", "de"]'
displayRules:
  - anyOf:
    - context-name: shell # The root context provided by the platform
`,language:"yaml"}),`
`,e.jsxs(n.p,{children:["Once instantiated, the ",e.jsx(n.strong,{children:"Shell creates new context areas"})," for other applications to inhabit:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"drawer-content"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"rail-content"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"navigation-content"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"main-content"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"topbar-actions"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-populating-the-shell",children:"3. Populating the Shell"}),`
`,e.jsx(n.p,{children:"You can now compose your application by deploying specific components into the context areas created by the shell."}),`
`,e.jsx(n.h3,{id:"a-the-app-launcher-dashboard",children:"A. The App Launcher (Dashboard)"}),`
`,e.jsxs(n.p,{children:["Displays a grid of available applications on the root path ",e.jsx(n.code,{children:"/"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File:"})," ",e.jsx(n.code,{children:"deploy/manifests/base/applications.webcomponent.yaml"})]}),`
`,e.jsx(o,{code:`
apiVersion: polyfea.github.io/v1alpha1
kind: WebComponent
metadata:
name: applications
spec:
microFrontend: polyfea-md-shell
element: polyfea-md-apps
attributes: 
  - name: applications-context
    value: applications # Defines a new context area for cards
displayRules:
  - allOf:
    - context-name: main-content
    - path: "^(\\.?/)?$"  # Matches root path /
`,language:"yaml"}),`
`,e.jsx(n.h3,{id:"b-adding-a-feature-application",children:"B. Adding a Feature Application"}),`
`,e.jsx(n.p,{children:'This example adds a "Saturn Mission" feature. It registers a navigation tile (in drawer/rail) and the actual content view.'}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File:"})," ",e.jsx(n.code,{children:"deploy/manifests/with-sample-apps/saturn.webcomponent.yaml"})]}),`
`,e.jsx(o,{code:`
# 1. The Navigation Tile
apiVersion: polyfea.github.io/v1alpha1
kind: WebComponent
metadata:
name: saturn-nav-link
spec:
microFrontend: polyfea-md-shell
element: polyfea-md-app
attributes: 
  - name: headline
    value: Saturn Mission
  - name: material-icon
    value: public
  - name: href
    value: ./saturn
priority: 20 
displayRules:
  - anyOf:
    # Show in app launcher, rail, and drawer simultaneously
    - context-name: applications
    - context-name: rail-content
    - context-name: drawer-content
---
# 2. The Main Content
apiVersion: polyfea.github.io/v1alpha1
kind: WebComponent
metadata:
name: saturn-content-view
spec:
microFrontend: polyfea-md-shell
element: img
attributes: 
  - name: src
    value: https://live.staticflickr.com/5506/30737246655_1da181f436_o.jpg
displayRules:
  - allOf:
    - context-name: main-content
    - path: "^(\\.?/)?saturn(/.*)?$" # Matches /saturn path
`,language:"yaml"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"deployment-workflow",children:"Deployment Workflow"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Build Docker Image"}),': The shell is built in "Library Mode" (Vite). The ',e.jsx(n.code,{children:"dist/"})," folder is wrapped in an Nginx container."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Deploy Service"}),": Apply standard Kubernetes Deployment and Service manifests for the pod."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Apply MicroFrontend"}),": Apply the CRD. The Polyfea Controller will detect it, update the specific Import Map, and begin serving assets."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configuration"}),": Apply ",e.jsx(n.code,{children:"WebComponent"})," CRDs to construct the UI layout structure defined above."]}),`
`]})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
