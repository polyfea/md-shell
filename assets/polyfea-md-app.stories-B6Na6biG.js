import{b as B,c as p}from"./iframe-D8eooYpM.js";import"./polyfea-md-app-CiWjtSwU.js";import"./preload-helper-BXAtxqEK.js";import"./custom-element-safe-BOSCndex.js";import"./state-B0vBtcDD.js";import"./localization-DAS3aXNc.js";import"./localized-controller-DJm-aJjz.js";const{expect:a,waitFor:l}=__STORYBOOK_MODULE_TEST__,P={title:"Custom Elements/polyfea-md-app",component:"polyfea-md-app",tags:["autodocs"],render:e=>B`
    <polyfea-md-app
      headline=${e.headline}
      short-headline=${e.shortHeadline}
      supporting-text=${e.supportingText}
      tile-img-src=${e.tileImgSrc}
      icon-src=${e.iconSrc}
      material-icon=${e.materialIcon}
      tile-img-disabled=${e.tileImgDisabled}
      href=${e.href}
      ?is-active-prefix=${e.isActivePrefix}
      context=${e.context}
      mode=${e.mode}
    ></polyfea-md-app>
  `,argTypes:{mode:{control:{type:"select"},options:["tile","drawer","rail","navigation"]},context:{control:{type:"select"},options:["","drawer-content","rail-content","navigation-content"]},tileImgDisabled:{control:"boolean"},isActivePrefix:{control:"boolean"}},args:{headline:"Application Name",shortHeadline:"App",supportingText:"Description of the application goes here.",tileImgSrc:"https://picsum.photos/300/200",iconSrc:"https://picsum.photos/48/48",href:"#42"}},g={parameters:{docs:{description:{story:`Mode is determined either by "mode" attribute or by context name prefix.
                    
                    Tile mode displays headline, supporting text, and an image. If no image is specified, a colored content area is shown instead.
                    `}}},args:{mode:"tile"},play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);e.querySelector("polyfea-md-app");const i=e.querySelector("polyfea-md-app")?.shadowRoot;await o("Check tile elements are rendered",async()=>{const s=await t.findByShadowText(n.headline);await a(s).toBeInTheDocument();const r=await t.findByShadowText(n.supportingText);await a(r).toBeInTheDocument();const c=await t.findByShadowRole("link");await a(c).toBeInTheDocument(),await l(()=>a(c).toHaveAttribute("href",n.href));const d=i?.querySelector("img");await a(d).toBeInTheDocument(),await a(d).toHaveAttribute("src",n.tileImgSrc)})}},w={parameters:{docs:{description:{story:"This story demonstrates the tile mode when the image is explicitly disabled via the `tile-img-disabled` property. Only text content is shown."}}},args:{mode:"tile",tileImgDisabled:!0},play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);e.querySelector("polyfea-md-app");const i=e.querySelector("polyfea-md-app")?.shadowRoot;await o("Check tile elements are rendered",async()=>{const s=await t.findByShadowText(n.headline);await a(s).toBeInTheDocument();const r=await t.findByShadowText(n.supportingText);await a(r).toBeInTheDocument();const c=await t.findByShadowRole("link");await a(c).toBeInTheDocument(),await l(()=>a(c).toHaveAttribute("href",n.href));const d=i?.querySelector("img");await a(d).toBeFalsy()}),await o("Simulate navigation and check isActive updates",async()=>{})}},m={parameters:{docs:{description:{story:"Demonstrates the drawer rendering mode, typically used in side navigation drawers. It displays an icon (image source) and the short headline."}}},args:{context:"drawer-content",mode:"drawer"},play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);e.querySelector("polyfea-md-app");const i=e.querySelector("polyfea-md-app")?.shadowRoot;await o("Check icon elements are rendered",async()=>{const s=await t.findByShadowText(n.shortHeadline);await a(s).toBeInTheDocument();const r=await t.findByShadowRole("link");await a(r).toBeInTheDocument(),await l(()=>a(r).toHaveAttribute("href",n.href));const c=i?.querySelector("img");await a(c).toBeInTheDocument(),await a(c).toHaveAttribute("src",n.iconSrc)})}},h={parameters:{docs:{description:{story:"Shows the drawer mode using a Material Symbol name provided via the `material-icon` property instead of an image source."}}},args:{context:"drawer-content",mode:"drawer",iconSrc:"",materialIcon:"search"},play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);e.querySelector("polyfea-md-app");const i=e.querySelector("polyfea-md-app")?.shadowRoot;await o("Check icon elements are rendered",async()=>{const s=await t.findByShadowText(n.shortHeadline);await a(s).toBeInTheDocument();const r=await t.findByShadowRole("link");await a(r).toBeInTheDocument(),await l(()=>a(r).toHaveAttribute("href",n.href));const c=i?.querySelector("img");await a(c).not.toBeInTheDocument();const d=i?.querySelector("md-icon");await a(d).toBeInTheDocument(),await a(d).toHaveTextContent(n.materialIcon)})}},y={parameters:{docs:{description:{story:"Shows the drawer mode using a custom icon provided via the `icon` slot. The slot takes precedence over `icon-src` and `material-icon`."}}},args:{context:"drawer-content",iconSrc:"",materialIcon:""},render:e=>B`
    <polyfea-md-app
      .headline=${e.headline}
      .shortHeadline=${e.shortHeadline}
      .supportingText=${e.supportingText}
      .tileImgSrc=${e.tileImgSrc}
      .iconSrc=${e.iconSrc}
      .materialIcon=${e.materialIcon}
      .tileImgDisabled=${e.tileImgDisabled}
      .href=${e.href}
      .isActivePrefix=${e.isActivePrefix}
      .context=${e.context}
      .mode=${e.mode}
    >
      <md-icon slot="icon">home</md-icon>
    </polyfea-md-app>
  `,play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);e.querySelector("polyfea-md-app");const i=e.querySelector("polyfea-md-app")?.shadowRoot;await o("Check icon elements are rendered",async()=>{const s=await t.findByShadowText(n.shortHeadline);await a(s).toBeInTheDocument();const r=await t.findByShadowRole("link");await a(r).toBeInTheDocument(),await l(()=>a(r).toHaveAttribute("href",n.href));const c=i?.querySelector("img");await a(c).not.toBeInTheDocument();const d=i?.querySelector('slot[name="icon"]');await a(d).toBeInTheDocument(),await a(d.assignedElements()[0]).toHaveTextContent("home")})}},u={parameters:{docs:{description:{story:"Demonstrates the rail rendering mode, a compact vertical navigation style. It typically shows an icon with a label underneath."}}},args:{context:"rail-content",mode:"rail"},play:m.play},v={parameters:{docs:{description:{story:"Demonstrates the navigation rendering mode, typically used in bottom navigation bars. Centers the icon and text."}}},args:{mode:"navigation",iconSrc:"",materialIcon:"download"},play:h.play},f={tags:["test","!autodocs"],name:"🧪 History API Coverage",args:{mode:"tile",tileImgDisabled:!0},play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);await o("Simulate navigation and check isActive updates",async()=>{const i=globalThis.navigation;globalThis.navigation=null;const s=window.history.pushState;let r=!1;window.history.pushState=()=>{r=!0};try{await(await t.findByShadowRole("link")).click(),await l(()=>{a(r).toBe(!0)})}finally{globalThis.navigation=i,window.history.pushState=s}})}},S={tags:["test","!autodocs"],name:"🧪 Navigation API Coverage for tile mod",args:{mode:"tile",tileImgDisabled:!0},play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);await o("Simulate navigation and check isActive updates",async()=>{const i=globalThis.navigation.navigate;let s=!1;globalThis.navigation.navigate=()=>{s=!0};try{await(await t.findByShadowRole("link")).click(),await l(()=>{a(s).toBe(!0)})}finally{globalThis.navigation.navigate=i}})}},T={tags:["test","!autodocs"],name:"🧪 Navigation API Coverage for icon mod",args:{mode:"drawer",materialIcon:"search"},play:async({canvasElement:e,args:n,step:o})=>{const t=p(e);await o("Simulate navigation and check isActive updates",async()=>{const i=globalThis.navigation.navigate;let s=!1;globalThis.navigation.navigate=()=>{s=!0};try{await(await t.findByShadowRole("link")).click(),await l(()=>{a(s).toBe(!0)})}finally{globalThis.navigation.navigate=i}})}},x={tags:["test","!autodocs"],name:"🧪 Active Prefix Property",args:{mode:"tile",tileImgDisabled:!0,isActivePrefix:!0,href:"/"},play:async({canvasElement:e,args:n,step:o})=>{p(e);const t=e.querySelector("polyfea-md-app");e.querySelector("polyfea-md-app")?.shadowRoot,await o("Verify in active mode",async()=>{await l(()=>a(t.isActive).toBe(!0))})}},I={tags:["test","!autodocs"],name:"🧪 Active Flag set on navigationsuccess",args:{mode:"tile",tileImgDisabled:!0,isActivePrefix:!0,href:"/nix"},play:async({canvasElement:e,args:n,step:o})=>{p(e);const t=e.querySelector("polyfea-md-app");e.querySelector("polyfea-md-app")?.shadowRoot,await o("Verify in inactive mode",async()=>{await l(()=>a(t.isActive).toBe(!1))}),await o("Verify in active mode after navigatesuccess",async()=>{t.href="/",globalThis.navigation?.dispatchEvent(new Event("navigatesuccess")),await l(()=>a(t.isActive).toBe(!0))})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`Mode is determined either by "mode" attribute or by context name prefix.
                    
                    Tile mode displays headline, supporting text, and an image. If no image is specified, a colored content area is shown instead.
                    \`
      }
    }
  },
  args: {
    mode: 'tile'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;
    await step('Check tile elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.headline);
      await expect(headline).toBeInTheDocument();
      const supportingText = await canvas.findByShadowText(args.supportingText);
      await expect(supportingText).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).toBeInTheDocument();
      await expect(img).toHaveAttribute('src', args.tileImgSrc);
    });
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the tile mode when the image is explicitly disabled via the \`tile-img-disabled\` property. Only text content is shown.'
      }
    }
  },
  args: {
    mode: 'tile',
    tileImgDisabled: true
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;
    await step('Check tile elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.headline);
      await expect(headline).toBeInTheDocument();
      const supportingText = await canvas.findByShadowText(args.supportingText);
      await expect(supportingText).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).toBeFalsy();
    });
    await step('Simulate navigation and check isActive updates', async () => {});
  }
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the drawer rendering mode, typically used in side navigation drawers. It displays an icon (image source) and the short headline.'
      }
    }
  },
  args: {
    context: 'drawer-content',
    mode: 'drawer'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;
    await step('Check icon elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.shortHeadline);
      await expect(headline).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).toBeInTheDocument();
      await expect(img).toHaveAttribute('src', args.iconSrc);
    });
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the drawer mode using a Material Symbol name provided via the \`material-icon\` property instead of an image source.'
      }
    }
  },
  args: {
    context: 'drawer-content',
    mode: 'drawer',
    iconSrc: '',
    materialIcon: 'search'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;
    await step('Check icon elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.shortHeadline);
      await expect(headline).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).not.toBeInTheDocument();
      const icon = shadow?.querySelector('md-icon');
      await expect(icon).toBeInTheDocument();
      await expect(icon).toHaveTextContent(args.materialIcon);
    });
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the drawer mode using a custom icon provided via the \`icon\` slot. The slot takes precedence over \`icon-src\` and \`material-icon\`.'
      }
    }
  },
  args: {
    context: 'drawer-content',
    iconSrc: '',
    materialIcon: ''
  },
  render: args => html\`
    <polyfea-md-app
      .headline=\${args.headline}
      .shortHeadline=\${args.shortHeadline}
      .supportingText=\${args.supportingText}
      .tileImgSrc=\${args.tileImgSrc}
      .iconSrc=\${args.iconSrc}
      .materialIcon=\${args.materialIcon}
      .tileImgDisabled=\${args.tileImgDisabled}
      .href=\${args.href}
      .isActivePrefix=\${args.isActivePrefix}
      .context=\${args.context}
      .mode=\${args.mode}
    >
      <md-icon slot="icon">home</md-icon>
    </polyfea-md-app>
  \`,
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;
    await step('Check icon elements are rendered', async () => {
      const headline = await canvas.findByShadowText(args.shortHeadline);
      await expect(headline).toBeInTheDocument();
      const link = await canvas.findByShadowRole('link');
      await expect(link).toBeInTheDocument();
      await waitFor(() => expect(link).toHaveAttribute('href', args.href));
      const img = shadow?.querySelector('img');
      await expect(img).not.toBeInTheDocument();
      const iconSlot = shadow?.querySelector('slot[name="icon"]') as HTMLSlotElement;
      await expect(iconSlot).toBeInTheDocument();
      await expect(iconSlot.assignedElements()[0]).toHaveTextContent('home');
    });
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the rail rendering mode, a compact vertical navigation style. It typically shows an icon with a label underneath.'
      }
    }
  },
  args: {
    context: 'rail-content',
    mode: 'rail'
  },
  play: DrawerMode.play
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the navigation rendering mode, typically used in bottom navigation bars. Centers the icon and text.'
      }
    }
  },
  args: {
    mode: 'navigation',
    iconSrc: '',
    materialIcon: 'download'
  },
  play: DrawerModeWithMaterialIcon.play
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs'],
  name: '🧪 History API Coverage',
  args: {
    mode: 'tile',
    tileImgDisabled: true
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    await step('Simulate navigation and check isActive updates', async () => {
      const oldNavigation = (globalThis as any).navigation;
      (globalThis as any).navigation = null;
      const oldHistoryPush = window.history.pushState;
      let pushedStateCalled = false;
      window.history.pushState = () => {
        pushedStateCalled = true;
      };
      try {
        const link = await canvas.findByShadowRole('link');
        await link.click();
        await waitFor(() => {
          expect(pushedStateCalled).toBe(true);
        });
      } finally {
        (globalThis as any).navigation = oldNavigation;
        window.history.pushState = oldHistoryPush;
      }
    });
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs'],
  name: '🧪 Navigation API Coverage for tile mod',
  args: {
    mode: 'tile',
    tileImgDisabled: true
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    await step('Simulate navigation and check isActive updates', async () => {
      const oldNavigationNavigate = (globalThis as any).navigation.navigate;
      let navigateCalled = false;
      (globalThis as any).navigation.navigate = () => {
        navigateCalled = true;
      };
      try {
        const link = await canvas.findByShadowRole('link');
        await link.click();
        await waitFor(() => {
          expect(navigateCalled).toBe(true);
        });
      } finally {
        (globalThis as any).navigation.navigate = oldNavigationNavigate;
      }
    });
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs'],
  name: '🧪 Navigation API Coverage for icon mod',
  args: {
    mode: 'drawer',
    materialIcon: 'search'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    await step('Simulate navigation and check isActive updates', async () => {
      const oldNavigationNavigate = (globalThis as any).navigation.navigate;
      let navigateCalled = false;
      (globalThis as any).navigation.navigate = () => {
        navigateCalled = true;
      };
      try {
        const link = await canvas.findByShadowRole('link');
        await link.click();
        await waitFor(() => {
          expect(navigateCalled).toBe(true);
        });
      } finally {
        (globalThis as any).navigation.navigate = oldNavigationNavigate;
      }
    });
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs'],
  name: '🧪 Active Prefix Property',
  args: {
    mode: 'tile',
    tileImgDisabled: true,
    isActivePrefix: true,
    href: "/"
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;
    await step('Verify in active mode', async () => {
      await waitFor(() => expect(appElement.isActive).toBe(true));
    });
  }
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs'],
  name: '🧪 Active Flag set on navigationsuccess',
  args: {
    mode: 'tile',
    tileImgDisabled: true,
    isActivePrefix: true,
    href: "/nix"
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const appElement = canvasElement.querySelector('polyfea-md-app') as PolyfeaMdApp;
    const shadow = canvasElement.querySelector('polyfea-md-app')?.shadowRoot;
    await step('Verify in inactive mode', async () => {
      await waitFor(() => expect(appElement.isActive).toBe(false));
    });
    await step('Verify in active mode after navigatesuccess', async () => {
      appElement.href = "/";
      (globalThis as any).navigation?.dispatchEvent(new Event('navigatesuccess'));
      await waitFor(() => expect(appElement.isActive).toBe(true));
    });
  }
}`,...I.parameters?.docs?.source}}};const H=["TileMode","TileModeWithDisabledImage","DrawerMode","DrawerModeWithMaterialIcon","DrawerModeWithIconSlot","RailMode","NavigationMode","TEST_HistoryAPI_Coverage","TEST_TileWithNavigationAPI_Coverage","TEST_IconWithNavigationAPI_Coverage","TEST_ActivePrefix","TEST_ActiveOnNavigationPrefix"];export{m as DrawerMode,y as DrawerModeWithIconSlot,h as DrawerModeWithMaterialIcon,v as NavigationMode,u as RailMode,I as TEST_ActiveOnNavigationPrefix,x as TEST_ActivePrefix,f as TEST_HistoryAPI_Coverage,T as TEST_IconWithNavigationAPI_Coverage,S as TEST_TileWithNavigationAPI_Coverage,g as TileMode,w as TileModeWithDisabledImage,H as __namedExportsOrder,P as default};
