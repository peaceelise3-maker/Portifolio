<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use TanStack file routes and shared studio navigation/footer for every page; this preserves the template's routing and a consistent site experience.
- Keep all photography URLs in src/assets/images.ts backed by asset pointers; this makes image replacement independent of page layout.
- Define the editorial design through semantic tokens and shared styles in src/styles.css; this keeps every page visually consistent.
