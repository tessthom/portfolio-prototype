export default {
  base: process.env.NODE_ENV === 'production' ? '/abthomas3/web287/Projects/Portfolio/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        portfolio: 'pages/portfolio.html',
        contact: 'pages/contact.html',
        resume: 'pages/resume.html'
      }
    },
    define: {
      '%BASE_URL%': process.env.NODE_ENV === 'production' ? '/abthomas3/web287/Projects/Portfolio/' : '/'
    }
  }
}

// export default {
//   base: process.env.NODE_ENV === 'production' ? '/abthomas3/web287/Projects/Portfolio/' : '/',
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'index.html',
//         portfolio: 'pages/portfolio.html',
//         contact: 'pages/contact.html',
//         resume: 'pages/resume.html'
//       }
//     }
//   }
// }

// THIS PATHING ONLY WORKS FOR WTCC SERVER:
// export default {
//   base: '/abthomas3/web287/Projects/Portfolio/',
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'index.html',
//         portfolio: 'pages/portfolio.html',
//         contact: 'pages/contact.html',
//         resume: 'pages/resume.html'
//       }
//     }
//   }
// }