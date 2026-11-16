# Fahad Ahammed — React Portfolio

Live website: https://frolicking-twilight-51456f.netlify.app

## Run

Use Node.js 20.19+ or 22.12+. Run `npm ci`, then `npm run dev`.
Build with `npm run build`; preview with `npm run preview`.
Vercel/Netlify: build `npm run build`, output `dist`.

## Source organization

Functional React components are separated into App.jsx, Navbar.jsx, Sections.jsx, Projects.jsx, Contact.jsx and QuizDemo.jsx. main.jsx is the entry. data.js holds the project array and profile. styles.css handles responsive themes. Four interactive practice demos are included.

All five extra features are included: theme toggle, project filtering, responsive layouts, scroll-to-top and active navigation. Contact inputs use React state, onSubmit, required/email validation and success feedback; the form does not send email.

The updated portrait and CV are stored losslessly as base64 in media-data.json. prepare-media.mjs restores their original bytes before development or production builds. This avoids binary browser upload limitations. The portrait is a JPEG conversion of the supplied photo. vite.config.js copies runtime assets to dist.

LinkedIn/Facebook URLs have not been supplied. Add them in data.js. Education and phone follow the supplied resume. The four projects are clearly labelled practice demos. The currently deployed Netlify version may require redeployment to display the new photo.
