export default {
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        portfolio: 'pages/portfolio.html',
        contact: 'pages/about.html',
        resume: 'pages/resume.html',
        analog: 'pages/analog-work.html'
      }
    },
    define: {
      '%BASE_URL%': '/'
    }
  }
}

// This conditional logic and placeholder account for the variation in root path between local dev server and the root when the project is uploaded to the school server.
// export default {
//   base: process.env.NODE_ENV === 'production' ? '/abthomas3/web287/Projects/Portfolio/' : '/',
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'index.html',
//         portfolio: 'pages/portfolio.html',
//         contact: 'pages/about.html',
//         resume: 'pages/resume.html'
//       }
//     },
//     define: {
//       '%BASE_URL%': process.env.NODE_ENV === 'production' ? '/abthomas3/web287/Projects/Portfolio/' : '/'
//     }
//   }
// }

/*
  * The above defines environment variables to account for differences
  * ...in root path between local dev server and WTCC server.
  * The `proecess.env.NODE_ENV` variable determines if project is running in
  * ...production mode (`NODE_ENV` is not set to 'production'). This lets you
  * ...configure different settings based on the environment.
  * When `NODE_ENV` is set to 'production', the base URL is set to
  * ...`/abthomas3/web287/Projects/Portfolio/'. Change to '/' for all before
  * ...setting up Netlify.
  * 
  * PROPERTIES:
  * - base: specs the base URL for project. Will be prepended to all asset URLs (e.g. images, css)
  *     and is used to resolve assets when site is deployed to a subdirectory.
  * - build: contains options related to build process.
  * - rollupOptions: contains options for the Rollup bundler Vite uses under the hood.
  *     Spec entry points for project's main HTML files here.
  * - define: lets you define global constants that can be accessed elsewhere in code. 
  *     By defining a '%BASE_URL%' constant that resolves to '/' in production mode I can use
  *     the constant in the HTML (see nav menu) and the correct path will be passed in.
  * 
  * BEFORE NETLIFY SETUP: SWITCH TO SINGLE ROOT DEFINITION AND PUSH TO GITHUB:
  * export default {
  *   base: '/',
  *   build: {
  *     rollupOptions: {
  *       input: {
  *         main: 'index.html',
  *         portfolio: 'pages/portfolio.html',
  *         contact: 'pages/about.html',
  *         resume: 'pages/resume.html'
  *       }
  *     },
  *     define: {
  *       '%BASE_URL%': '/'
  *     }
  *   }
  * }
  * 
*/