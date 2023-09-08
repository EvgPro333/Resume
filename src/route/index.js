const express = require('express')
const router = express.Router()
// ================================================================ my var
// var address = 'Ukraine, Mykolaiv'
//↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Mykolaiv',
  //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
  // address,
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    LinkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================ my var

router.get('/', function (req, res) {
  res.render('index', {})
})
// ================================================================ summary
router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      // title: 'resume',
      //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
      title: 'resume | summary',
    },
    // !                          end page   ----------------------
    // header: {
    // name: {
    // firstname: 'Dmytro',
    // lastname: 'Ivanov',
    // },
    // position: 'Junior Fullstack JS Developer',
    // salary: '600$ в місяць',
    // address: 'Ukraine, Mykolaiv',
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    // address,
    // },
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    header,
    // !                          end header   ----------------------
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
              work on a new project I learn the domain and try to understand the idea of the project. Good team
              player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
							tournament position, goals etc), analyzing by simple mathematics models and preparing probability
							for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    // !                          end main   ----------------------
    // footer: {
    // social: {
    // email: {
    // text: 'dmytro@mail.com',
    // href: 'mailto:dmytro@mail.com',
    // },
    // phone: {
    // text: '+380670000123',
    // href: 'tel:+380670000123',
    // },
    // LinkedIn: {
    // text: 'LinkedIn',
    // href: 'https://www.linkedin.com/in/dmytro-test',
    // },
    // },
    // },
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    footer,
    // !                          end footer   ----------------------
  })
})
// ================================================================ skills
router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      // title: 'resume',
      //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
      title: 'resume | skills',
    },
    // !                          end page   ----------------------
    // header: {
    // name: {
    // firstname: 'Dmytro',
    // lastname: 'Ivanov',
    // },
    // position: 'Junior Fullstack JS Developer',
    // salary: '600$ в місяць',
    // address: 'Ukraine, Mykolaiv',
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    // address,
    // },
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    header,
    // !                          end header   ----------------------
    main: {
      // skills: [
      //   'HTML',
      //   'HaldleBars',
      //   'VS Code',
      //   'Git',
      //   'Terminal',
      //   'NPM',
      // ],
      skills: [
        {
          name: 'HTML',
          point: 8,
          isTop: true,
        },

        {
          name: 'HaldleBars',
          point: 6,
          isTop: false,
        },

        {
          name: 'VS Code',
          point: 9,
        },

        {
          name: 'Git',
          point: 10,
          isTop: true,
        },

        {
          name: 'Terminal',
          point: 9,
        },

        {
          name: 'NPM',
          point: 8,
        },

        {
          name: 'React.js',
          point: 0,
        },

        {
          name: 'PHP',
          point: null,
        },
      ],
    },
    // !                          end main   ----------------------
    // footer: {
    // social: {
    // email: {
    // text: 'dmytro@mail.com',
    // href: 'mailto:dmytro@mail.com',
    // },
    // phone: {
    // text: '+380670000123',
    // href: 'tel:+380670000123',
    // },
    // LinkedIn: {
    // text: 'LinkedIn',
    // href: 'https://www.linkedin.com/in/dmytro-test',
    // },
    // },
    // },
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    footer,
    // !                          end footer   ----------------------
  })
})
// ================================================================ education
router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      // title: 'resume',
      //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
      title: 'resume | education',
    },
    // !                          end page   ----------------------
    // header: {
    // name: {
    // firstname: 'Dmytro',
    // lastname: 'Ivanov',
    // },
    // position: 'Junior Fullstack JS Developer',
    // salary: '600$ в місяць',
    // address: 'Ukraine, Mykolaiv',
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    // address,
    // },
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    header,
    // !                          end header   ----------------------
    main: {
      educations: [
        'Дитсадок',
        'Середня школа',
        'Університет',
        'Гімназія ім.Н.Д.Діор',
        'Автошкола',
      ],
    },
    // !                          end main   ----------------------
    // footer: {
    // social: {
    // email: {
    // text: 'dmytro@mail.com',
    // href: 'mailto:dmytro@mail.com',
    // },
    // phone: {
    // text: '+380670000123',
    // href: 'tel:+380670000123',
    // },
    // LinkedIn: {
    // text: 'LinkedIn',
    // href: 'https://www.linkedin.com/in/dmytro-test',
    // },
    // },
    // },
    //↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑         ↓↑↓   ↑↓↑
    footer,
    // !                          end footer   ----------------------
  })
})

module.exports = router
