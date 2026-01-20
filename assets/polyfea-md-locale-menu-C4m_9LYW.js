import{i as $,a as C,b as h}from"./iframe-B2ViYexA.js";import{e as M,d as O,a as S,i as L,n as d,m as P,s as b,c as w}from"./custom-element-safe-Bg5r26EH.js";import{r as I}from"./state-DD2bYZYH.js";import{e as k}from"./query-x48B6FB_.js";import"./menu-DWG4P7OE.js";import{g,s as x}from"./localization-CjRd4umN.js";import{u as N}from"./localized-controller-DDNZhp4S.js";function*z(e,n){if(e!==void 0){let a=0;for(const t of e)yield n(t,a++)}}var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},l=(e,n,a,t)=>{for(var s=t>1?void 0:t?D(n,a):n,c=e.length-1,m;c>=0;c--)(m=e[c])&&(s=(t?m(n,a,s):m(s))||s);return t&&s&&A(n,a,s),s},E=(e,n,a)=>n.has(e)||y("Cannot "+a),T=(e,n,a)=>n.has(e)?y("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,a),o=(e,n,a)=>(E(e,n,"access private method"),a),i,v,_,p,u;M();O();S();L();const f={cs:"cz",en:"gb","en-US":"us","en-GB":"gb",sk:"sk",de:"de",hu:"hu",pl:"pl",uk:"ua",es:"es"};let r=class extends C{constructor(){super(),T(this,i),this.locales=["en"],this.flagIconsPath="./assets/flag-icons/css/flag-icons.min.css",this.menuOpen=!1,N(this)}render(){const e=g()||(navigator.languages||[navigator.language||"en"])[0],n=o(this,i,u).call(this,e),a=o(this,i,p).call(this,e);return h`
      <link rel="stylesheet" href="${this.flagIconsPath}" />
      <md-menu-item
        @click=${()=>this.menu.open=!this.menu.open}
        id="locale-anchor"
        keep-open
        aria-haspopup="menu"
        aria-expanded="${this.menuOpen?"true":"false"}"
        aria-controls="locale-menu"
        aria-label=${P(b`Change language, currently ${a}`,{id:"polyfea.change-language-label"})}
        locale=${e}
      >
        <div slot="headline" class="menu-content">
          <span class="flag-icon fi fi-${n}"></span>
          <span class="lang-name">${a}</span>
        </div>
        <md-icon slot="end">arrow_right</md-icon>
      </md-menu-item>
      <md-menu id="locale-menu" anchor="locale-anchor" .open="${this.menuOpen}">
        ${z(this.locales,t=>o(this,i,v).call(this,t,e))}
      </md-menu>
    `}};i=new WeakSet;v=function(e,n){const a=n===e,t=o(this,i,u).call(this,e),s=o(this,i,p).call(this,e);return h`
      <md-menu-item
        @click="${()=>o(this,i,_).call(this,e)}"
        ?selected="${a}"
        role="menuitemradio"
        aria-checked=${a?"true":"false"}
        locale="${e}"
      >
        <div slot="headline" class="menu-content">
          <span class="flag-icon fi fi-${t}"></span>
          <span class="lang-name">${s}</span>
        </div>
      </md-menu-item>
    `};_=function(e){this.menuOpen=!1,!(!e||e===g())&&x(e)};p=function(e){let n;try{n=new Intl.DisplayNames([e],{type:"language"}).of(e),n=n?n.charAt(0).toUpperCase()+n.slice(1):e}catch{}return n||e};u=function(e){return f[e]?f[e]:e.includes("-")?e.split("-")[1].toLowerCase():"un"};r.styles=$`
    :host {
      display: inline-block;
      position: relative;
    }

    .flag-icon {
      border-radius: 2px;
      margin-right: 0.75rem;
      font-size: 1.125rem;
      line-height: 1.125rem;
    }

    .menu-content {
      display: flex;
      align-items: center;
      min-width: 150px;
    }

    .lang-name {
      font-family: var(--md-sys-typescale-label-large-font, sans-serif);
      font-size: var(--md-sys-typescale-label-large-size, 14px);
    }
  `;l([d({type:Array})],r.prototype,"locales",2);l([d({type:String,attribute:"flag-icons-path"})],r.prototype,"flagIconsPath",2);l([k("md-menu")],r.prototype,"menu",2);l([I()],r.prototype,"menuOpen",2);r=l([w("polyfea-md-locale-menu")],r);
