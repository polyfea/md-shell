import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { expect } from 'storybook/test';
import { html } from 'lit';
import { within as withinShadow } from 'shadow-dom-testing-library';
import '../src/polyfea-md-drawer-label';
import { PolyfeaMdDrawerLabel } from '../src/polyfea-md-drawer-label';

interface PolyfeaMdDrawerLabelProps {
  headline: string;
  slotContent: string;
}

const meta = {
  title: 'Custom Elements/polyfea-md-drawer-label',
  component: 'polyfea-md-drawer-label',
  tags: ['autodocs'],
  render: (args) => html`
    <polyfea-md-drawer-label headline=${args.headline}>
      ${args.slotContent}
    </polyfea-md-drawer-label>
  `,
  argTypes: {
    headline: { control: 'text' },
    slotContent: { control: 'text' },
  },
  args: {
    headline: 'Section Title',
    slotContent: '',
  },
} satisfies Meta<PolyfeaMdDrawerLabelProps>;

export default meta;
type Story = StoryObj<PolyfeaMdDrawerLabelProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default usage of the drawer label showing just the headline property.',
      },
    },
  },
  args: {
    headline: 'Main Menu',
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    await step('Check headline is rendered', async () => {
        // The headline is rendered directly in the shadow root text content
        const label = canvasElement.querySelector('polyfea-md-drawer-label');
        await expect(label?.shadowRoot?.textContent).toContain(args.headline);
    });
  },
};

export const WithSlotContent: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates using the slot content. The slot content is appended after the headline.',
      },
    },
  },
  args: {
    headline: '',
    slotContent: 'Custom Label Content',
  },
   play: async ({ canvasElement, args, step }) => {
    const canvas = withinShadow(canvasElement);
    await step('Check slot content is rendered', async () => {
       const label = canvasElement.querySelector('polyfea-md-drawer-label');
       await expect(label).toHaveTextContent(args.slotContent);
    });
  },
};
