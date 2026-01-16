---
agent: edit
---
Refactor the class structure to follow this specific order of members:

1. Fields decorated with `@property` (Lit reactive properties)
2. Fields decorated with `@state` or `@query`
3. Public fields (properties)
4. Private fields (properties)
5. Constructor
6. Lifecyle callbacks (e.g., `connectedCallback`, `render`, `firstUpdated`)
7. Public methods
8. Private methods

**Method Ordering:**
Within their respective visibility groups (public/private), organize methods based on their order of execution or dependency (callees appear after callers). If no clear dependency exists, sort them alphabetically by name.

**Documentation (JSDoc):**
*   Add descriptive JSDoc comments to all public methods and fields.
*   Focus documentation on the *intended purpose* or contract of the member, not implementation details.
*   For LitElement lifecycle methods (e.g., `render`, `updated`) or any members starting with an underscore (`_`), add the `@ignore` tag to exclude them from generated documentation.