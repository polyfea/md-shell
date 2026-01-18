import{A as p,b as i,c}from"./iframe-D8eooYpM.js";import"./polyfea-md-apps-BqFRyxdm.js";import"./polyfea-md-app-CiWjtSwU.js";import"./preload-helper-BXAtxqEK.js";import"./custom-element-safe-BOSCndex.js";import"./state-B0vBtcDD.js";import"./localization-DAS3aXNc.js";import"./localized-controller-DJm-aJjz.js";const{expect:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,x={title:"Custom Elements/polyfea-md-apps",component:"polyfea-md-apps",tags:["autodocs"],render:t=>i` <polyfea-md-apps applications-context=${t.applicationsContext||p}> ${t.slotContent} </polyfea-md-apps> `,argTypes:{applicationsContext:{control:"text"},slotContent:{control:"text",description:"Content to be placed in the default slot of the component. Typically used to display a message when no applications are available from the specified context.",name:"slot"}},args:{applicationsContext:p},parameters:{layout:"padded"}},a={parameters:{docs:{description:{story:"Default behavior set the context name to `applications`, and uses polyfea backend to fetch and display available applications."}}},args:{slotContent:i` <div style="padding: 1rem; color: var(--md-sys-color-on-surface-variant);">No applications available.</div> `},play:async({canvasElement:t,step:o})=>{const s=t.querySelector("polyfea-md-apps");await o("Verify apps are shown",async()=>{await r(async()=>{const e=await c(s).findAllByShadowRole("link");await l(e.length).toBeGreaterThan(3)})})}},n={parameters:{docs:{description:{story:"Illustrates the component's behavior when provided with a context ID that has no associated applications (`non-existing-context`).\n\n This story demonstrates how to utilize the default slot to render custom fallback content (e.g., an empty state message or illustration) when the `applicationsContext` yields no results."}}},args:{applicationsContext:"non-existing-context",slotContent:i` <div style="padding: 1rem; color: var(--md-sys-color-on-surface-variant);">No applications available.</div> `},play:async({canvasElement:t,step:o})=>{const s=t.querySelector("polyfea-md-apps");await o("Verify slotted element",async()=>{let e=null;await r(async()=>{e=s.shadowRoot?.querySelector("slot"),await l(e).toBeInTheDocument(),await l(e.assignedElements()[0]).toHaveTextContent("No applications available.")})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default behavior set the context name to \`applications\`, and uses polyfea backend to fetch and display available applications.'
      }
    }
  },
  args: {
    slotContent: html\` <div style="padding: 1rem; color: var(--md-sys-color-on-surface-variant);">No applications available.</div> \`
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const element = canvasElement.querySelector('polyfea-md-apps') as PolyfeaMdApps;
    await step('Verify apps are shown', async () => {
      await waitFor(async () => {
        const apps = await withinShadow(element).findAllByShadowRole('link');
        await expect(apps.length).toBeGreaterThan(3);
      });
    });
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Illustrates the component\\'s behavior when provided with a context ID that has no associated applications (\`non-existing-context\`).\\n\\n This story demonstrates how to utilize the default slot to render custom fallback content (e.g., an empty state message or illustration) when the \`applicationsContext\` yields no results.'
      }
    }
  },
  args: {
    applicationsContext: 'non-existing-context',
    slotContent: html\` <div style="padding: 1rem; color: var(--md-sys-color-on-surface-variant);">No applications available.</div> \`
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const element = canvasElement.querySelector('polyfea-md-apps') as PolyfeaMdApps;
    await step('Verify slotted element', async () => {
      let slot: HTMLSlotElement | null = null;
      await waitFor(async () => {
        slot = element.shadowRoot?.querySelector('slot') as HTMLSlotElement;
        await expect(slot).toBeInTheDocument();
        await expect(slot.assignedElements()[0]).toHaveTextContent('No applications available.');
      });
    });
  }
}`,...n.parameters?.docs?.source}}};const g=["Default","Empty"];export{a as Default,n as Empty,g as __namedExportsOrder,x as default};
