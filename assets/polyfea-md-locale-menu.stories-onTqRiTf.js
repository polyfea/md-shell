import{b as g,c as i}from"./iframe-B2ViYexA.js";import"./polyfea-md-locale-menu-C4m_9LYW.js";import{L as m,a as k,s as h,g as p}from"./localization-CjRd4umN.js";import"./preload-helper-BXAtxqEK.js";import"./custom-element-safe-Bg5r26EH.js";import"./state-DD2bYZYH.js";import"./query-x48B6FB_.js";import"./menu-DWG4P7OE.js";import"./tslib.es6-JmFdVVob.js";import"./elevation-CyG7O1Y5.js";import"./md-focus-ring-BxbHXH6C.js";import"./animation-DHo3Jvhe.js";import"./shared-_oCurrS6.js";import"./localized-controller-DDNZhp4S.js";const{expect:a,fn:C,waitFor:u}=__STORYBOOK_MODULE_TEST__,I={title:"Custom Elements/polyfea-md-locale-menu",component:"polyfea-md-locale-menu",tags:["autodocs"],argTypes:{locales:{table:{disable:!1}}},args:{locales:["en-us","sk","cs","de"]},render:e=>g`
    <div style="height: 200px; display: flex; justify-content: flex-end; align-items: flex-start;">
      <polyfea-md-locale-menu
        .locales=${e.locales}
      ></polyfea-md-locale-menu>
    </div>
  `,parameters:{docs:{description:{component:"A locale switcher menu using Material Web components and flag-icons."}}},beforeEach:async e=>{localStorage.removeItem(m),new k().configureLocalization(["en","sk","cs","de","es","pl","hu","uk"],"./locales/")}},c={decorators:[e=>(localStorage.removeItem("theme"),e())],args:{}},s={play:async({canvasElement:e,step:n,args:w})=>{i(e);const o=e.querySelector("polyfea-md-locale-menu");await n("Set locale and check selected locale in menu",async()=>{h("cs-CZ");const t=o.shadowRoot?.querySelector("#locale-anchor");await u(()=>a(t).toHaveAttribute("locale","cs-CZ"))})}},l={args:{locales:["en-US","sk","cs","de","es","pl","hu","uk","unknw"]},play:async({canvasElement:e,step:n,args:w})=>{i(e);const o=e.querySelector("polyfea-md-locale-menu");await n("Initialize  localStorage and locale",async()=>{localStorage.setItem(m,"hu"),h("hu");const t=o.shadowRoot?.querySelector("#locale-anchor");await u(()=>a(t).toHaveAttribute("locale","hu"),{timeout:3e3})}),await n("Open menu and check selected locale",async()=>{const t=o.shadowRoot?.querySelector("#locale-anchor");t?.dispatchEvent(new MouseEvent("click",{bubbles:!0,composed:!0})),o.shadowRoot?.querySelector("md-menu"),(await i(o).findByShadowText("Slovenčina")).click(),await u(async()=>await a(p()).toBe("sk")),await a(localStorage.getItem(m)).toBe("sk"),await a(t).toHaveAttribute("data-aria-expanded","false"),await u(async()=>await a(t).toHaveAttribute("locale","sk"))}),await n("Select the same locale again and verify no event is fired",async()=>{const t=o.shadowRoot?.querySelector("md-menu");(await i(t).findByShadowText("Slovenčina")).click(),await new Promise(S=>setTimeout(S,1e3)),await a(p()).toBe("sk"),await a(localStorage.getItem(m)).toBe("sk");const d=o.shadowRoot?.querySelector("#locale-anchor");await a(d).toHaveAttribute("data-aria-expanded","false"),await a(d).toHaveAttribute("locale","sk")})}},r={args:{locales:["en"]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [story => {
    localStorage.removeItem('theme');
    return story();
  }],
  args: {
    // Uses default args
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = withinShadow(canvasElement);
    const menu = canvasElement.querySelector('polyfea-md-locale-menu') as PolyfeaMdLocaleMenu;
    await step('Set locale and check selected locale in menu', async () => {
      setLocale('cs-CZ');
      const anchor = menu.shadowRoot?.querySelector(\`#locale-anchor\`);
      await waitFor(() => expect(anchor).toHaveAttribute('locale', 'cs-CZ'));
    });
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    locales: ['en-US', 'sk', 'cs', 'de', 'es', 'pl', 'hu', 'uk', 'unknw']
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = withinShadow(canvasElement);
    const menu = canvasElement.querySelector('polyfea-md-locale-menu') as PolyfeaMdLocaleMenu;
    await step('Initialize  localStorage and locale', async () => {
      localStorage.setItem(LOCALE_STORAGE_KEY, 'hu');
      setLocale('hu');
      const anchor = menu.shadowRoot?.querySelector(\`#locale-anchor\`);
      await waitFor(() => expect(anchor).toHaveAttribute('locale', 'hu'), {
        timeout: 3000
      });
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
      await waitFor(async () => await expect(getLocale()).toBe('sk'));
      await expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe('sk');
      await expect(anchor).toHaveAttribute('data-aria-expanded', 'false');
      await waitFor(async () => await expect(anchor).toHaveAttribute('locale', 'sk'));
    });
    await step('Select the same locale again and verify no event is fired', async () => {
      const mdmenu = menu.shadowRoot?.querySelector('md-menu');
      const sk = await withinShadow(mdmenu!).findByShadowText('Slovenčina');
      sk.click(); // select same locale again

      // delay to give chance for changes
      await new Promise(resolve => setTimeout(resolve, 1000));
      await expect(getLocale()).toBe('sk'); // should remain the same
      await expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe('sk');
      const anchor = menu.shadowRoot?.querySelector(\`#locale-anchor\`);
      await expect(anchor).toHaveAttribute('data-aria-expanded', 'false');
      await expect(anchor).toHaveAttribute('locale', 'sk');
    });
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    locales: ['en']
  }
}`,...r.parameters?.docs?.source}}};const M=["Default","CzechSelected","ManyLocales","SingleLocale"];export{s as CzechSelected,c as Default,l as ManyLocales,r as SingleLocale,M as __namedExportsOrder,I as default};
