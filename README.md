# Chef Maina

Chef Maina is a mobile-first recipe generator built with React and TypeScript. Add at least four ingredients and the app calls a backend AI to generate a personalized Kenyan cuisine recipe. This repository contains the frontend (first iteration) implemented with TypeScript and a mobile-first UI.

## Quick links
- App entry: `src/main.tsx`
- Main app: `src/Components/App.tsx`
- Form: `src/Components/Form.tsx`
- Recipe generator: `src/Components/RecipeGenerator.tsx`
- API helper: `src/api.ts`
- Environment: `.env` (VITE_API_URL)
- Styles: `src/index.css`, `src/Components/styles/*.module.css`

## Built with
- TypeScript
- React
- Vite

## How it works (summary)
1. Users add ingredients in the Form.
2. `App` manages the ingredient list using React hooks.
3. When enough ingredients are provided, `RecipeGenerator` calls the backend via the `generateRecipe` API helper.
4. The backend AI returns a markdown-formatted recipe which the frontend renders (e.g., with `react-markdown`).

## Hooks used
The frontend uses these React hooks:
- useState — manage component state
- useEffect — handle side effects and initializations
- useCallback — memoize handlers for stable references
- useRef — DOM access (e.g., scroll-to-recipe behavior)

## API calls & AI
- The client posts ingredients to the backend endpoint (`/generate-recipe`) via `src/api.ts`.
- Backend URL is configured with `VITE_API_URL` in `.env` (development often points to `http://127.0.0.1:8000/generate-recipe`).
- The backend uses an AI model to assemble the recipe; the frontend expects markdown output.

## Mobile-first UI
UI and styles were designed mobile-first. Core layout and component styles prioritize small screens and scale up for larger viewports. See `src/index.css` and component CSS modules.

## Notes
- This is the first iteration of the application. Expect UX, validation, error handling, and API integration improvements in future versions.
- An AI (accessed via the backend) generates the recipe content.

## Scripts
Common npm scripts in `package.json`:
- `npm run dev` — start dev server
- `npm run build` — create production build
- `npm run preview` — preview production build

## License
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.