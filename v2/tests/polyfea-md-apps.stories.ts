import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { within as withinShadow } from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/polyfea-md-apps';
import '../src/polyfea-md-app';
import { PolyfeaMdApps } from '../src/polyfea-md-apps';

const meta = {
  title: 'Polyfea MD Shell/polyfea-md-apps',
  component: 'polyfea-md-apps',
  tags: ['autodocs'],
  render: args => html` <polyfea-md-apps applications-context=${args.applicationsContext || nothing}> ${args.slotContent} </polyfea-md-apps> `,
  argTypes: {
    applicationsContext: { control: 'text' },
    slotContent: { 
        control: 'text', 
        description: 'Content to be placed in the default slot of the component. Typically used to display a message when no applications are available from the specified context.',
        name: 'slot'
     },
  },
  args: {
    applicationsContext: nothing,
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    slotContent: html` <div style="padding: 1rem; color: var(--md-sys-color-on-surface-variant);">No applications available.</div> `,
  },

  play: async ({ canvasElement, step }) => {
    const element = canvasElement.querySelector('polyfea-md-apps') as PolyfeaMdApps;

    await step('Verify apps are shown', async () => {
      await waitFor(async () => {
        const apps = await withinShadow(element).findAllByShadowRole('link');
        await expect(apps.length).toBeGreaterThan(3);
      });
    });
  },
};

export const Empty: Story = {
  args: {
    applicationsContext: 'non-existing-context',
    slotContent: html` <div style="padding: 1rem; color: var(--md-sys-color-on-surface-variant);">No applications available.</div> `,
  },

  play: async ({ canvasElement, step }) => {
    const element = canvasElement.querySelector('polyfea-md-apps') as PolyfeaMdApps;

    await step('Verify slotted element', async () => {
      let slot: HTMLSlotElement | null = null;
      await waitFor(async () => {
        slot = element.shadowRoot?.querySelector('slot') as HTMLSlotElement;
        await expect(slot).toBeInTheDocument();
        await expect(slot.assignedElements()[0]).toHaveTextContent('No applications available.');
      });
    });
  },
};
