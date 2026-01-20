import{b as n,c as l}from"./iframe-YCl51QGZ.js";import"./polyfea-md-navigation-bar-DgV2uzPB.js";import"./polyfea-md-app-xQ-UFoZ-.js";import"./preload-helper-BXAtxqEK.js";import"./custom-element-safe-BAAqKlB5.js";import"./state-QEA-qLZY.js";import"./localization-DXaVgzLv.js";import"./localized-controller-DeZmdXlP.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,v={title:"Custom Elements/polyfea-md-navigation-bar",component:"polyfea-md-navigation-bar",tags:["autodocs"],render:e=>n`
    <div style="width: 100%; height: 200px; position: relative; display: flex; align-items: flex-end; border: 1px solid var(--md-sys-color-outline);">
      <polyfea-md-navigation-bar>
        ${e.slotContent}
      </polyfea-md-navigation-bar>
    </div>
  `,argTypes:{slotContent:{control:"text",name:"unnamed slot",table:{category:"Slots"},description:'Content to be placed in the default slot of the drawer, typically navigation links, eg. <polyfea-md-app> elements with mode set to "navigation".'}},args:{slotContent:n`
      <polyfea-md-app context="navigation-content" short-headline="Mail" material-icon="mail" href="#mail" is-active-prefix></polyfea-md-app>
      <polyfea-md-app context="navigation-content" short-headline="Chat" material-icon="chat" href="#chat"></polyfea-md-app>
      <polyfea-md-app context="navigation-content" short-headline="Rooms" material-icon="group" href="#rooms"></polyfea-md-app>
      <polyfea-md-app context="navigation-content" short-headline="Meet" material-icon="videocam" href="#meet"></polyfea-md-app>
    `}},t={parameters:{docs:{description:{story:"Default rendering of the navigation bar with `polyfea-md-app` items in navigation mode."}}},play:async({canvasElement:e,step:i})=>{l(e);const s=e.querySelector("polyfea-md-navigation-bar");await i("Verify items are rendered",async()=>{const a=s?.shadowRoot?.querySelector("slot");o(a).toBeTruthy();const r=a.assignedElements();o(r.length).toBe(4)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default rendering of the navigation bar with \`polyfea-md-app\` items in navigation mode.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    const navBar = canvasElement.querySelector('polyfea-md-navigation-bar');
    await step('Verify items are rendered', async () => {
      const slot = navBar?.shadowRoot?.querySelector('slot');
      expect(slot).toBeTruthy();
      const assignedElements = (slot as HTMLSlotElement).assignedElements();
      expect(assignedElements.length).toBe(4);
    });
  }
}`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,v as default};
