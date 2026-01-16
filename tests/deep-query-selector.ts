
export function deepQuerySelector(
  selector: string, 
  root: Document | Element | ShadowRoot = document
): Element | null {
  const result = root.querySelector(selector);  
  if (result) {
    return result;
  }
const allElements = root.querySelectorAll('*');

  for (const element of Array.from(allElements)) {
    if (element.shadowRoot) {
      const found = deepQuerySelector(selector, element.shadowRoot);
      if (found) {
        return found;
      }
    }
  }

  return null;
}

export function deepQuerySelectorAll(
  selector: string, 
  root: Document | Element | ShadowRoot = document
): Element[] {
  const results: Element[] = [];

  const localMatches = root.querySelectorAll(selector);
  results.push(...Array.from(localMatches));

  const allElements = root.querySelectorAll('*');

  for (const element of Array.from(allElements)) {
    if (element.shadowRoot) {
      const deepMatches = deepQuerySelectorAll(selector, element.shadowRoot);
      results.push(...deepMatches);
    }
  }

  return results;
}

