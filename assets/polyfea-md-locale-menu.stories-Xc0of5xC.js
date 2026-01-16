import{b as u,c as m}from"./iframe-COkunwa9.js";import"./polyfea-md-locale-menu-D-q6iRrv.js";import"./polyfea-md-theme-control-XyeGF3ka.js";import{L as p}from"./localization-CQ6Qfdx9.js";import"./preload-helper-PPVm8Dsz.js";import"./property-nuuqNUcm.js";import"./state-CRD9jzTh.js";import"./query-x48B6FB_.js";import"./icon-button-A8NcbOWo.js";import"./tslib.es6-kHcLnhpD.js";import"./md-focus-ring-BrDRz4hH.js";import"./animation-D6uxkkp3.js";import"./ripple-DcTYAG17.js";import"./static-Vz6p4yrX.js";import"./delegate-C9amHCxT.js";import"./icon-ITA9BrOZ.js";import"./menu-B6P27oSE.js";import"./elevation-C-Fy3i-6.js";import"./shared-_oCurrS6.js";import"./menu-item-DP9GOg34.js";import"./localized-controller-CwSega-m.js";const{expect:o,fn:h,waitFor:w}=__STORYBOOK_MODULE_TEST__,z={title:"Custom Elements/polyfea-md-locale-menu",component:"polyfea-md-locale-menu",tags:["autodocs"],argTypes:{locales:{table:{disable:!1}},currentLocale:{control:"text"}},args:{locales:["en-us","sk","cs","de"],currentLocale:"en-us",onThemeChanged:h()},render:e=>u`
    <div style="height: 200px; display: flex; justify-content: flex-end; align-items: flex-start;">
      <polyfea-md-locale-menu
        .locales=${e.locales}
        current-locale=${e.currentLocale}
        @theme-changed=${e.onThemeChanged}
      ></polyfea-md-locale-menu>
    </div>
  `,parameters:{docs:{description:{component:"A locale switcher menu using Material Web components and flag-icons."}}}},c={decorators:[e=>(localStorage.removeItem("theme"),e())],args:{}},r={args:{currentLocale:"cs"}},s={args:{locales:["en-US","sk","cs","de","es","pl","hu","uk","unknw"],currentLocale:"sk"},decorators:[e=>(localStorage.setItem("theme",JSON.stringify({locale:"hu"})),e())],play:async({canvasElement:e,step:n,args:i})=>{m(e);const t=e.querySelector("polyfea-md-locale-menu");await n("Locale is set from localStorage",async()=>{const a=t.currentLocale;await o(a).toBe("hu")}),await n("Open menu and check selected locale",async()=>{const a=t.shadowRoot?.querySelector("#locale-anchor");a?.dispatchEvent(new MouseEvent("click",{bubbles:!0,composed:!0})),t.shadowRoot?.querySelector("md-menu"),(await m(t).findByShadowText("Slovenčina")).click(),await o(t.currentLocale).toBe("sk"),await o(localStorage.getItem("theme")).toContain('"locale":"sk"'),await w(async()=>await o(i.onThemeChanged).toHaveBeenCalled()),await o(a).toHaveAttribute("data-aria-expanded","false")}),await n("Select the same locale again and verify no event is fired",async()=>{const a=t.shadowRoot?.querySelector("md-menu"),d=await m(a).findByShadowText("Slovenčina");i.onThemeChanged.mockClear(),d.click(),await o(t.currentLocale).toBe("sk"),await o(i.onThemeChanged).not.toHaveBeenCalled()}),await n("Test resolution of locales",async()=>{const a=p.resolveSupportedLocale(["de-DE"],new Set(["en","de","fr"]));await o(a).toBe("de")})}},l={args:{locales:["en"],currentLocale:"en"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [story => {
    localStorage.removeItem('theme');
    return story();
  }],
  args: {
    // Uses default args
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    currentLocale: 'cs'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    locales: ['en-US', 'sk', 'cs', 'de', 'es', 'pl', 'hu', 'uk', 'unknw'],
    currentLocale: 'sk'
  },
  decorators: [story => {
    localStorage.setItem('theme', JSON.stringify({
      locale: 'hu'
    }));
    return story();
  }],
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = withinShadow(canvasElement);
    const menu = canvasElement.querySelector('polyfea-md-locale-menu') as PolyfeaMdLocaleMenu;
    await step('Locale is set from localStorage', async () => {
      const selectedLocale = menu.currentLocale;
      await expect(selectedLocale).toBe('hu');
    });
    await step('Open menu and check selected locale', async () => {
      const anchor = menu.shadowRoot?.querySelector(\`#locale-anchor\`);
      anchor?.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        composed: true
      }));
      const mdmenu = menu.shadowRoot?.querySelector('md-menu');
      const sk = await withinShadow(menu).findByShadowText('Slovenčina');
      sk.click();
      await expect(menu.currentLocale).toBe('sk');
      await expect(localStorage.getItem('theme')).toContain('"locale":"sk"');
      await waitFor(async () => await expect(args.onThemeChanged).toHaveBeenCalled());
      await expect(anchor).toHaveAttribute('data-aria-expanded', 'false');
    });
    await step('Select the same locale again and verify no event is fired', async () => {
      const mdmenu = menu.shadowRoot?.querySelector('md-menu');
      const sk = await withinShadow(mdmenu!).findByShadowText('Slovenčina');
      (args.onThemeChanged as any).mockClear();
      sk.click(); // select same locale again

      await expect(menu.currentLocale).toBe('sk'); // should remain the same
      await expect(args.onThemeChanged).not.toHaveBeenCalled();
    });
    await step('Test resolution of locales', async () => {
      const resolved = LocalizationRegistry.resolveSupportedLocale(['de-DE'], new Set(['en', 'de', 'fr']));
      await expect(resolved).toBe('de');
    });
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    locales: ['en'],
    currentLocale: 'en'
  }
}`,...l.parameters?.docs?.source}}};const U=["Default","CzechSelected","ManyLocales","SingleLocale"];export{r as CzechSelected,c as Default,s as ManyLocales,l as SingleLocale,U as __namedExportsOrder,z as default};
