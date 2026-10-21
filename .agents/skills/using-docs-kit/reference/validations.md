# What fails the build

`lobedocs build` fails fast on content errors, then runs a full artifact audit on `dist/`.
`lobedocs dev` surfaces the content errors too, so fix them before building.

## Content manifest (`Invalid MDX documents:`)

| Rule                                                      | Fix                                                          |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| No YAML frontmatter / invalid YAML                        | Add a `---` block at the very top (`CHANGELOG.md` is exempt) |
| `title` or `description` missing or empty                 | Add both, as plain strings                                   |
| `category` missing on a component page                    | Add `category:`; reuse an existing category name             |
| `order` not a finite number                               | `order: 2`, not `order: "2"`                                 |
| `status` not `stable`/`beta`/`experimental`/`deprecated`  | Use one of those or remove it                                |
| `route` invalid or outside `/components/` for a component | Remove `route` and let the folder decide the URL             |
| Two documents resolve to the same pathname                | Rename a folder or set a distinct `route`                    |

## Demos (`Invalid demo references`)

- `<Demo of={X}>` where `X` is not a `?demo` import, or the imported file does not exist.
- Demo file without a single `export default`.
- Demo outside `src/**/demos/**` used with `isolated` or referenced by a standalone route →
  `Missing standalone demo descriptor loader`.
- Warnings (not failures) for dynamic `import()`, workers, unsupported local deps: add
  `editable={false}` to that `<Demo>`.

## `<Api>`

- Missing or empty `name`, empty `from`, or any `data=` attribute.
- `name` does not resolve to an exported component (check the barrel `index.ts`, or pass `from`).
- A prop typed `any` or `unknown`.
- `@default` in JSDoc disagrees with the runtime default in the component's destructuring.

## Artifact audit (after build)

These are mostly guaranteed by the kit; they fail when content breaks them:

- **Broken internal links or `#hash` targets** — the most common author error. Link with
  site pathnames (`/components/button#api`), and hashes must match an actual heading slug.
- Missing HTML for a page or standalone demo; wrong title/description/canonical/OG tags.
- `llms.txt`, `skills.md`, sitemap, robots, Pagefind index, 404 page missing or inconsistent.
- Bundle isolation: doc pages must not pull `react-live`, giscus or Pagefind into their initial
  bundle; standalone demos must not include docs chrome. Don't import those from page MDX or
  demos directly.
- When `legacyRedirects` is set: every legacy URL must still be produced (migration coverage).
