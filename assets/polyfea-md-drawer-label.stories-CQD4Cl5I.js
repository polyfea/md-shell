import{b as d,c as r}from"./iframe-B2ViYexA.js";import"./polyfea-md-drawer-label-B4WhMxhc.js";import"./preload-helper-BXAtxqEK.js";import"./custom-element-safe-Bg5r26EH.js";import"./localization-CjRd4umN.js";const{expect:l}=__STORYBOOK_MODULE_TEST__,y={title:"Custom Elements/polyfea-md-drawer-label",component:"polyfea-md-drawer-label",tags:["autodocs"],render:e=>d`
    <polyfea-md-drawer-label headline=${e.headline}>
      ${e.slotContent}
    </polyfea-md-drawer-label>
  `,argTypes:{headline:{control:"text"},slotContent:{control:"text"}},args:{headline:"Section Title",slotContent:""}},t={parameters:{docs:{description:{story:"Default usage of the drawer label showing just the headline property."}}},args:{headline:"Main Menu"},play:async({canvasElement:e,args:a,step:o})=>{r(e),await o("Check headline is rendered",async()=>{const s=e.querySelector("polyfea-md-drawer-label");await l(s?.shadowRoot?.textContent).toContain(a.headline)})}},n={parameters:{docs:{description:{story:"Demonstrates using the slot content. The slot content is appended after the headline."}}},args:{headline:"",slotContent:"Custom Label Content"},play:async({canvasElement:e,args:a,step:o})=>{r(e),await o("Check slot content is rendered",async()=>{const s=e.querySelector("polyfea-md-drawer-label");await l(s).toHaveTextContent(a.slotContent)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default usage of the drawer label showing just the headline property.'
      }
    }
  },
  args: {
    headline: 'Main Menu'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    await step('Check headline is rendered', async () => {
      // The headline is rendered directly in the shadow root text content
      const label = canvasElement.querySelector('polyfea-md-drawer-label');
      await expect(label?.shadowRoot?.textContent).toContain(args.headline);
    });
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the slot content. The slot content is appended after the headline.'
      }
    }
  },
  args: {
    headline: '',
    slotContent: 'Custom Label Content'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = withinShadow(canvasElement);
    await step('Check slot content is rendered', async () => {
      const label = canvasElement.querySelector('polyfea-md-drawer-label');
      await expect(label).toHaveTextContent(args.slotContent);
    });
  }
}`,...n.parameters?.docs?.source}}};const u=["Default","WithSlotContent"];export{t as Default,n as WithSlotContent,u as __namedExportsOrder,y as default};
