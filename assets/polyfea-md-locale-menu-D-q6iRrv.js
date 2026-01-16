import{i as L,a as C,b as f}from"./iframe-COkunwa9.js";import{n as u,m as b,s as $,t as O}from"./property-nuuqNUcm.js";import{r as w}from"./state-CRD9jzTh.js";import{e as P}from"./query-x48B6FB_.js";import"./icon-button-A8NcbOWo.js";import"./icon-ITA9BrOZ.js";import"./menu-B6P27oSE.js";import"./menu-item-DP9GOg34.js";import{P as g}from"./polyfea-md-theme-control-XyeGF3ka.js";import{L as S}from"./localization-CQ6Qfdx9.js";function*k(e,t){if(e!==void 0){let n=0;for(const a of e)yield t(a,n++)}}var M=Object.defineProperty,x=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},l=(e,t,n,a)=>{for(var o=a>1?void 0:a?x(t,n):t,c=e.length-1,m;c>=0;c--)(m=e[c])&&(o=(a?m(t,n,o):m(o))||o);return a&&o&&M(t,n,o),o},I=(e,t,n)=>t.has(e)||y("Cannot "+n),N=(e,t,n)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),i=(e,t,n)=>(I(e,t,"access private method"),n),s,v,_,p,h;const d={cs:"cz",en:"gb","en-US":"us","en-GB":"gb",sk:"sk",de:"de",hu:"hu",pl:"pl",uk:"ua",es:"es"};let r=class extends C{constructor(){super(...arguments),N(this,s),this.locales=["en"],this.currentLocale="en",this.flagIconsPath="./assets/flag-icons/css/flag-icons.min.css",this.menuOpen=!1}connectedCallback(){super.connectedCallback();const e=g.loadTheme();if(e.locale)this.currentLocale=e.locale;else{let t=navigator.languages||[navigator.language];this.currentLocale=S.resolveSupportedLocale(t,new Set(this.locales))}}render(){const e=i(this,s,h).call(this,this.currentLocale),t=i(this,s,p).call(this,this.currentLocale);return f`
      <link rel="stylesheet" href="${this.flagIconsPath}" />
      <md-menu-item
        @click=${()=>this.menu.open=!this.menu.open}
        id="locale-anchor"
        keep-open
        aria-haspopup="menu"
        aria-expanded="${this.menuOpen?"true":"false"}"
        aria-controls="locale-menu"
        aria-label=${b($`Change language, currently ${t}`,{id:"polyfea.change-language-label"})}
      >
        <div slot="headline" class="menu-content">
          <span class="flag-icon fi fi-${e}"></span>
          <span class="lang-name">${t}</span>
        </div>
        <md-icon slot="end">arrow_right</md-icon>
      </md-menu-item>
      <md-menu id="locale-menu" anchor="locale-anchor" .open="${this.menuOpen}"> ${k(this.locales,n=>i(this,s,v).call(this,n))} </md-menu>
    `}};s=new WeakSet;v=function(e){const t=this.currentLocale===e,n=i(this,s,h).call(this,e),a=i(this,s,p).call(this,e);return f`
      <md-menu-item @click="${()=>i(this,s,_).call(this,e)}" ?selected="${t}" role="menuitemradio" aria-checked=${t?"true":"false"}>
        <div slot="headline" class="menu-content">
          <span class="flag-icon fi fi-${n}"></span>
          <span class="lang-name">${a}</span>
        </div>
      </md-menu-item>
    `};_=function(e){if(this.menuOpen=!1,this.currentLocale===e)return;this.currentLocale=e;const t={...g.loadTheme(),locale:e};localStorage.setItem("theme",JSON.stringify(t)),this.dispatchEvent(new CustomEvent("theme-changed",{detail:t,bubbles:!0,composed:!0}))};p=function(e){let t;try{t=new Intl.DisplayNames([e],{type:"language"}).of(e),t=t?t.charAt(0).toUpperCase()+t.slice(1):e}catch{}return t||e};h=function(e){return d[e]?d[e]:e.includes("-")?e.split("-")[1].toLowerCase():"un"};r.styles=L`
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
  `;l([u({type:Array})],r.prototype,"locales",2);l([u({type:String,attribute:"current-locale",reflect:!0})],r.prototype,"currentLocale",2);l([u({type:String,attribute:"flag-icons-path"})],r.prototype,"flagIconsPath",2);l([P("md-menu")],r.prototype,"menu",2);l([w()],r.prototype,"menuOpen",2);r=l([O("polyfea-md-locale-menu")],r);
