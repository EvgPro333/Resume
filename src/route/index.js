const express = require('express')
const router = express.Router()
// ================================================================ my var
var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Mykolaiv',
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
// ================================================================ index

router.get('/', function (req, res) {
  res.render('index', {})
})
// ================================================================ summary
router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'resume | Summary',
    },
    // !                          end page   ----------------------
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
    footer,
    // !                          end footer   ----------------------
  })
})
// ================================================================ skills
router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'resume | Skills',
    },
    // !                          end page   ----------------------
    header,
    // !                          end header   ----------------------
    main: {
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
      hobbies: [
        {
          name: '3Ds Max',
          isMain: false,
        },
        {
          name: 'Photoshop',
          isMain: true,
        },
        {
          name: 'VSCode',
          isMain: true,
        },
      ],
    },
    // !                          end main   ----------------------
    footer,
    // !                          end footer   ----------------------
  })
})
// ================================================================ education
router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'resume | Education',
    },
    // !                          end page   ----------------------
    header,
    // !                          end header   ----------------------
    main: {
      educations: [
        {
          name: 'Дитсадок',
          isEnd: true,
        },
        {
          name: 'Середня школа',
          isEnd: true,
        },
        {
          name: 'Університет',
          isEnd: false,
        },
        {
          name: 'Гімназія ім.Н.Д.Діор',
          isEnd: false,
        },
        {
          name: 'Автошкола',
          isEnd: null,
        },
      ],
      certificates: [
        {
          name: 'Текст Першого рядка',
          id: 123,
        },
        {
          name: 'Текст Другого рядка',
          id: 231,
        },
        {
          name: 'Текст Третього рядка',
          id: 321,
        },
      ],
    },
    // !                          end main   ----------------------
    footer,
    // !                          end footer   ----------------------
  })
})
// ================================================================ work
router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'resume | Work',
    },
    // !                          end page   ----------------------
    header,
    // !                          end header   ----------------------
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'http://it-brains.com.ua/',
            // url: '',
            // url: null,
          },
          duration: {
            from: '10.10.2022',
            // to: '22.03.2023',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: '#',
              about: 'bla bla bla',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: '1111geuygvegvewgvywrvljhvfhljgerivygfth',
                },
                {
                  name: 'l22222geuygvegvewgvywrvljhvfhljgerivygfth',
                },
              ],
              stackAmount: 5,
              awardAmount: 1,
            },
          ],
        },
      ],
    },
    // !                          end main   ----------------------
    footer,
    // !                          end footer   ----------------------
  })
})
// ================================================================ person

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      // освіта
      education: [
        {
          // ступінь
          degree: 'Bachelor of Science',
          // більшість
          major: 'Computer Science',
          // університет
          university:
            'Massachusetts Institute of Technology',
          // Рік закінчення
          graduationYear: 2012,
        },
      ],
      // досвід роботи
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          // забов'язання
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          // рік_заснування
          year_founded: 1990,
          // індустрія   (галузь промисловості)
          industry: 'Technology',
          // працівників
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              // відділ: виконавчий
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  // опис
                  description:
                    // Розробка нової програмної платформи
                    'Developing new software platform',
                  status: 'In Progress',
                  // команди
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================ bio

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    layout: 'bio',
    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    // освіта
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    // відомі_публікації
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    // партнери
    partners: [
      {
        name: 'Mileva Marić',
        // відносини
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        // відносини
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    // нагороди
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    // вплив
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    // впливав
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    // котирування (блок цитат)
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    // великі_відкриття
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    // внески
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
    // вивів
    //-------------------------------------------------------------
    // не вивів
  })
})
// ================================================================

module.exports = router
