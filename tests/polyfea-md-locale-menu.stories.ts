import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import { within as withinShadow } from 'shadow-dom-testing-library';
// Ensure the component is imported to register the custom element
import '../src/polyfea-md-locale-menu';
import { expect, fn, waitFor } from 'storybook/test';
import { PolyfeaMdLocaleMenu } from '../src/polyfea-md-locale-menu';
import { getLocale, LocalizationRegistry, setLocale, LOCALE_STORAGE_KEY } from '../src/localization';


// Define the interface for the component's properties for better type safety in Storybook
interface LocaleMenuProps {
  locales: string[];
}

const meta: Meta<LocaleMenuProps> = {
  title: 'Custom Elements/polyfea-md-locale-menu',
  component: 'polyfea-md-locale-menu',
  tags: ['autodocs'],
  argTypes: {
    locales: { table: { disable: false } }, // Allow array editing if supported, or at least viewing
  },
  // Default arguments
  args: {
    locales: ['en-us', 'sk', 'cs', 'de'],
  },
  // Define how the story is rendered
  render: (args) => html`
    <div style="height: 200px; display: flex; justify-content: flex-end; align-items: flex-start;">
      <polyfea-md-locale-menu
        .locales=${args.locales}
      ></polyfea-md-locale-menu>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        component: 'A locale switcher menu using Material Web components and flag-icons.',
      },
    },
  },

  beforeEach: async (context) => {
    // Clear locale before each story
    localStorage.removeItem(LOCALE_STORAGE_KEY);
    const registry = new LocalizationRegistry();
    registry.configureLocalization(
      ['en', 'sk', 'cs', 'de', 'es', 'pl', 'hu', 'uk'],
      './locales/'
    );
  }
};

export default meta;
type Story = StoryObj<LocaleMenuProps>;

export const Default: Story = {
    decorators: [
    (story) => {
        localStorage.removeItem('theme');
        return story();
    },
],
  args: {
    // Uses default args
  },
};

export const CzechSelected: Story = {
  play : async ({ canvasElement, step, args }) => {
    const canvas = withinShadow(canvasElement);
    const menu = canvasElement.querySelector('polyfea-md-locale-menu') as PolyfeaMdLocaleMenu;

    await step('Set locale and check selected locale in menu', async () => {
        setLocale('cs-CZ');
        const anchor = menu.shadowRoot?.querySelector(`#locale-anchor`);
        await waitFor(() => expect(anchor).toHaveAttribute('locale', 'cs-CZ'));
    });
  }
};

export const ManyLocales: Story = {
  args: {
    locales: ['en-US', 'sk', 'cs', 'de', 'es', 'pl', 'hu', 'uk', 'unknw'],
  },

play: async ({ canvasElement, step, args }) => {
    const canvas = withinShadow(canvasElement);
    const menu = canvasElement.querySelector('polyfea-md-locale-menu') as PolyfeaMdLocaleMenu;

    await step('Initialize  localStorage and locale', async () => {
        localStorage.setItem(LOCALE_STORAGE_KEY, 'hu');
        setLocale('hu');
        const anchor = menu.shadowRoot?.querySelector(`#locale-anchor`);
        await waitFor(() => expect(anchor).toHaveAttribute('locale', 'hu'), { timeout: 3000 });
    });

    await step('Open menu and check selected locale', async () => {
        const anchor = menu.shadowRoot?.querySelector(`#locale-anchor`);
        anchor?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
        const mdmenu = menu.shadowRoot?.querySelector('md-menu');

        const sk = await withinShadow(menu).findByShadowText('Slovenčina');
        sk.click();

        await waitFor(async() => await expect(getLocale()).toBe('sk'));
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

        const anchor = menu.shadowRoot?.querySelector(`#locale-anchor`);
        await expect(anchor).toHaveAttribute('data-aria-expanded', 'false');
        await expect(anchor).toHaveAttribute('locale', 'sk');
    });

    


}
};

export const SingleLocale: Story = {
  args: {
    locales: ['en'],
  },
};
