import{b as l,c as d}from"./iframe-COkunwa9.js";import"./polyfea-md-drawer-Du9kcEL6.js";import"./polyfea-md-app-nH4KmJr8.js";import"./polyfea-md-drawer-label-kG1pTz8M.js";import"./preload-helper-PPVm8Dsz.js";import"./property-nuuqNUcm.js";import"./state-CRD9jzTh.js";import"./localization-CQ6Qfdx9.js";import"./localized-controller-CwSega-m.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,{expect:c}=__STORYBOOK_MODULE_TEST__,D={title:"Custom Elements/polyfea-md-drawer",component:"polyfea-md-drawer",tags:["autodocs"],render:e=>l`
    <div style="height: 400px; width: 300px; border: 1px solid var(--md-sys-color-outline); background: var(--md-sys-color-surface);">
      <polyfea-md-drawer
        .closeDisabled=${e.closeDisabled}
        @drawer-closed=${e.onDrawerClosed}
      >
        ${e.slotContent}
      </polyfea-md-drawer>
    </div>
  `,argTypes:{closeDisabled:{control:"boolean"},onDrawerClosed:{action:"drawer-closed"},slotContent:{control:"text",name:"unnamed slot",table:{category:"Slots"},description:'Content to be placed in the default slot of the drawer, typically navigation links and labels. Links may be represented using <polyfea-md-app> elements with mode set to "drawer".'}},args:{closeDisabled:!1,onDrawerClosed:p(),slotContent:l`
      <polyfea-md-drawer-label headline="Main"></polyfea-md-drawer-label>
      <polyfea-md-app mode="drawer" short-headline="Home" material-icon="home" href="#home" context="drawer-content"></polyfea-md-app>
      <polyfea-md-app mode="drawer" short-headline="Search" material-icon="search" href="#search" context="drawer-content"></polyfea-md-app>
      <polyfea-md-drawer-label headline="Library"></polyfea-md-drawer-label>
      <polyfea-md-app mode="drawer" short-headline="Favorites" material-icon="favorite" href="#fav" context="drawer-content"></polyfea-md-app>
    `}},a={parameters:{docs:{description:{story:"Default rendering of the drawer with a close button and navigation content."}}}},o={parameters:{docs:{description:{story:"Renders the drawer without the close button, useful for persistent navigation rails."}}},args:{closeDisabled:!0},play:async({canvasElement:e,step:n})=>{d(e),await n("Verify close button is absent",async()=>{const t=e.querySelector("polyfea-md-drawer");d(t);const s=t?.shadowRoot?.querySelector("md-icon-button");c(s).toBeNull()})}},r={parameters:{docs:{description:{story:"Tests the interaction of the close button."}}},play:async({canvasElement:e,args:n,step:t})=>{const s=e.querySelector("polyfea-md-drawer"),i=d(s);await t("Click close button",async()=>{await(await i.findByShadowRole("button")).click()}),await t("Verify event dispatched",async()=>{c(n.onDrawerClosed).toHaveBeenCalled()})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default rendering of the drawer with a close button and navigation content.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Renders the drawer without the close button, useful for persistent navigation rails.'
      }
    }
  },
  args: {
    closeDisabled: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    await step('Verify close button is absent', async () => {
      const drawer = canvasElement.querySelector('polyfea-md-drawer');
      const drawerShadow = withinShadow(drawer as HTMLElement);
      const button = drawer?.shadowRoot?.querySelector('md-icon-button');
      expect(button).toBeNull();
    });
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tests the interaction of the close button.'
      }
    }
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const drawer = canvasElement.querySelector('polyfea-md-drawer');
    const drawerShadow = withinShadow(drawer as HTMLElement);
    await step('Click close button', async () => {
      const button = await drawerShadow.findByShadowRole('button');
      await button.click();
    });
    await step('Verify event dispatched', async () => {
      expect(args.onDrawerClosed).toHaveBeenCalled();
    });
  }
}`,...r.parameters?.docs?.source}}};const C=["Default","CloseDisabled","InteractionTest"];export{o as CloseDisabled,a as Default,r as InteractionTest,C as __namedExportsOrder,D as default};
