# Tess Thomas - Portfolio

This is a site built to showcase my web development and design skills.

![Home page intro](/public/assets/home-snip.png)

## Overview

The first iteration of this site was intended to explore and evaluate the design in mobile-only form, test out integrating Open Props with native CSS, and to explore the benefits of developing with Vite.js. 

I've very much enjoyed the speed of Vite's dev server and the way it "pre-bundles" dependencies, letting the browser take on more of the work by strongly caching those modules and making source code module requests conditional. Efficiency is the best!

The only hiccup I ran into was sorting out how to configure file paths for production vs for the dev server. For the site to run properly on the WTCC server, I needed to account for the additional directories between the 'root' and the project files, subbing `/abthomas3/web287/Projects/Portfolio/` for `/`. To account for different environments I just specified a conditional that checks Node's core `process` module `env.NODE_ENV` environment variable for the `production` value. It then sets a `%BASE_URL%` placeholder to the appropriate path value.

---

### Midterm Prototype Checklist

- [x] Intro
- [x] Contact information
- [x] Resume
- [x] Link to blog
- [x] 3 featured projects
- [x] Image optimization
- [x] Cross-browser compatibility

#### Personal Goal Additions

- [x] Install and experiment with Open Props
- [x] Use Vite.js build tool
- [x] Test CSS-only animations
- [x] 

```
Note if this line renders or not and if so what the backticks render as
```

## Final Iteration Checklist

- [ ] Responsive layout
- [ ] Identify and use different font (Open Props' and Cormorant Garamond not quite right)

---

## Deployment

WTCC Server through May 2024, future hosting TBD.

---

## Built With

* [OpenProps](https://open-props.style/) - Lightweight CSS Framework used for it's incrementally adoptable custom properties. I've been curious about this framework for a while because it's so light and customizable. I can use the props that I find helpful, not need to worry about fighting their specificity or clogging up my HTML with a ton of Bootstrap-y classes, and only ship the props I use. Thus far it's been simple to install, configure, and integrate with my own CSS.
* [Vite.js](https://vitejs.dev/guide/) - Build tool selected for its lightning fast dev server and out-of-the-box PostCSS support, which was needed in order to leverage OpenProps' PostCSS (Just In Time) Props.
* [FileZilla](https://filezilla-project.org/) - To upload Vite-built `dist/` contents to the school server.
* [FORM_TOOL_HERE](#) - TODO: CITE FORM TOOL HERE WHEN DECIDED UPON.

---

## Acknowledgments

* Big ups to Kevin Powell for being a consistent source of CSS inspiration and refresher content.His animation content was helpful in sorting out how to build the "cube" on my Home page.
* TODO: CITE ANY FURTHER RESOURCES HERE AS NEEDED

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details