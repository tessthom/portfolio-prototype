# Tess Thomas - Portfolio

This is a site built to showcase my web development and design skills.

[Live site](https://tessthomas.com)

![Home page intro](/public/assets/home-snip.png)

## Overview

The first iteration of this site was intended to explore and evaluate the design in mobile-only form, test out integrating Open Props with native CSS, and to explore the benefits of developing with Vite.js.

Vite's dev server is awesome. I think I'll stick to it for the second iteration of this site rather than any kind of rebuild. Time to make things responsive...

---

### First Prototype Checklist

- [x] Intro
- [x] Contact information
- [x] Resume
- [x] Link to blog
- [x] 3 featured projects
- [x] Image optimization
- [x] Cross-browser compatibility

#### Personal Additions

- [x] Install and experiment with Open Props
- [x] Use Vite.js build tool
- [x] Test CSS-only animations
- [x] Try new mobile grid layout
- [x] Validate HTML + CSS

## Final Iteration Checklist / Personal TODO

- [ ] Responsive layout for larger screens
- [ ] Technical SEO
- [ ] Identify and use different font (Open Props' and Cormorant Garamond not quite right)
- [ ] 2 more portfolio pieces (BarKey, new CRUD ops app)
- [ ] Reformulate size/type system (maybe replace Open Props `--size-n` properties)
- [ ] FIX: Cube displays right of center on actual mobile devices vs browser emulation
- [x] FIX: Dropdown nav menu not at full width due to body constraint for midterm submission.
- [ ] FIX: Swap Tops'l images index.html#projects vs `portfolio.html`.
- [ ] FIX: Resume overflow from PDF embed on true mobile devices.
- [ ] Add JS API solution for scroll based events so cube not animating from page load.
- [ ] Rework projects page layout for mobile.
- [ ] ID and implement form submission tool.
- [ ] Pass WCAG checklist.

---

## Deployment

- WTCC Server through March 2024
- Deployed Netlify 04/02/24

---

## Built With

- [OpenProps](https://open-props.style/) - Lightweight CSS Framework used for it's incrementally adoptable custom properties. I've been curious about this framework for a while because it's so light and customizable. I can use the props that I find helpful, not need to worry about fighting their specificity or clogging up my HTML with a ton of Bootstrap-y classes, and only ship the props I use. Thus far it's been simple to install, configure, and integrate with my own CSS.
- [Vite.js](https://vitejs.dev/guide/) - Build tool selected for its lightning fast dev server and out-of-the-box PostCSS support, which was needed in order to leverage OpenProps' PostCSS (Just In Time) Props.
- [FileZilla](https://filezilla-project.org/) - To upload Vite-built `dist/` contents to the school server.
- [FORM_TOOL_HERE](#) - TODO: NOTE AFTER IMPLEMENTING NETLIFY SERVERLESS FUNCTIONS

---

## Acknowledgments

- Big ups to Kevin Powell for being a consistent source of CSS inspiration and refresher content.His animation content was helpful in sorting out how to build the "cube" on my Home page.
- TODO: CITE ANY FURTHER RESOURCES HERE AS NEEDED

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
