import Portfolio from '../../models/portfolio'

export const initState: Portfolio = {
    meta: {
        title: 'My Portfolio',
        description: 'Lots of info about you.',
        showRepoLink: true,
    },
    menu: {
        home: 'Hello',
        about: 'About',
        contact: 'Contact'
    },
    intro: {
        headline: "Hi. My Name is Karen",
        typed: [
            "I'm an Atlanta based Software Engineer",
            'that is highly motivated to learn, grow,',
            'and take on new technical challenges',
        ],
    },
    resume: {
        headline: 'About Me',
        summary: [
            'An Atlanta based Software Engineer that is passionate about working on projects that help the everyday family thrive.',
            'My creativity and eye for design along with my experience in Real Estate and Administrative Purchasing has given me the problem solving, attention to detail and leadership skills I pride myself on.',
            'Looking forward to making a significant contribution to a forward thinking tech company.',
        ],
        resumeLink: {label: 'My Full Resume', url: 'https://ik.imagekit.io/jfpi8d5c5/portfolio/myresume.pdf?updatedAt=1678999907597'},
        jobsHeadline: 'Employment',
        jobs: [
            {
                title: 'Real Estate Agent',
                company: 'Solid Source Realty',
                timeframe: '01/2016 - Present',
                summary:
                    'Collaborating with lenders, home inspectors and other vendors to ensure all terms and conditions of purchase agreement were met before closing. 100% contract to close rate within 12 weeks.',
            },
            {
                title: 'Executive Adminstrative Assistant',
                company: 'Quikrete',
                timeframe: '02/2020 - 11/2021',
                summary:
                    "Generated detailed reports based on operational data to articulate business recommendations to  stakeholders on a monthly basis."
            },
            {
                title: 'Order Processing Specialist',
                company: 'Asys Group',
                timeframe: '07/2017 - 09/2019',
                summary:
                    'Coordinator: Interfaced with internal/external departments to plan, organize and direct activities required for shipping and receiving automation machines and parts.'
            },
        ],
        toolsHeadline: 'Skills',
        tools: [
            {
                name: 'Languages',
                list: 'JavaScript, Python, HTML',
            },
            {
                name: 'Frameworks',
                list: 'React, Typescript, Express.Js, JQuery, Django, Node.JS',
            },
            {
                name: 'Databases',
                list: 'SQL, MongoDB, Mongoose, Postgres',
            },
            {
                name: 'Other',
                list: 'Git, Github, npm, CSS, SCSS, RestAPI, ',
            },
        ],
    },
    sections: [
        {
            id: 'portfolio',
            menu: 'Portfolio',
            headline: 'Portfolio',
            subhead: 'A few of my favorite projects.',
            projects: [
                {
                    id: 'section-1-project-1',
                    title: 'Snapshot',
                    techStack: 'JavaScript, TypeScript, HTML5, CSS3, Express.js, Node.js, Mongo db, Mongoose',
                    summary:
                        'Snapshot is a React + Typescript frontend application where the user can upload, edit, and share photos with friends.',
                    image: 'https://ik.imagekit.io/jfpi8d5c5/capstone/snapshot.png?updatedAt=1680307838550',
                    links: [
                        {
                            label: 'Live site',
                            url:
                                'https://snapshot-frontend.netlify.app',
                        },
                        {
                            label: 'GitHub',
                            url:
                                'https://github.com/kayfernander2022/Snapshot-frontend',
                        },
                    ],
                },
                {
                    id: 'section-1-project-2',
                    title: 'Kids Art App',
                    techStack: 'React, Django, Python, JavaScript, CSS,',
                    summary:
                        'The Kids Art App is a React frontend application where the user can store an image and description of their childs artwork to display to friends and family.',
                    image: 'https://ik.imagekit.io/jfpi8d5c5/portfolio/kids-art-app.png?updatedAt=1678999857598',
                    links: [
                        {
                            label: 'Live site',
                            url:
                                'https://kids-art-app-frontend.netlify.app',
                        },
                        {
                            label: 'GitHub',
                            url:
                                'https://github.com/kayfernander2022/kids-art-app-frontend',
                        },
                    ],
                },
                {
                    id: 'section-1-project-3',
                    title: 'My Events | Full-stack application',
                    techStack: 'JavaScript, React, SASS, HTML5, CSS3, Express.js, Node.js, Mongo db, Mongoose',
                    summary:
                        'MyEvents is a frontend React application that allows users to view, create, delete, and update events. The app features user authentication, ensuring that only authorized users can access and manipulate event information.  Additionally, the application integrates with a backend service to securely store and retrieve event data.',
                    image: 'https://ik.imagekit.io/jfpi8d5c5/portfolio/myevents.png?updatedAt=1678999870720',
                    links: [
                        {
                            label: 'Live site',
                            url:
                                'https://myevents-s.netlify.app/',
                        },
                        {
                            label: 'GitHub(need to add this',
                            url:
                                '',
                        },
                    ],
                },
                {
                    id: 'section-1-project-4',
                    title: 'The Allergy App | Full-stack application',
                    techStack: 'JavaScript, HTML5, CSS3, Express.js, Node.js, Mongo db, Mongoose',
                    summary:
                        'Users can contribute and read recipes and the recipes of others. This app is especially useful for those with food allergies as the top allergens come up highlighted throughout the app.',
                    image: 'https://ik.imagekit.io/jfpi8d5c5/portfolio/Allergy-app.png?updatedAt=1678999929493',
                    links: [
                        {
                            label: 'Live site',
                            url:
                                'https://tumeric-project-2.onrender.com',
                        },
                        {
                            label: 'GitHub',
                            url:
                                'https://github.com/kayfernander2022/project-2',
                        },
                    ],
                },
                
            ],
        }
    ],
    contact: [
        {icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="color:black;"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>', label:'Email: KayFernander@hotmail.com', link:'mailto:kayfernander@hotmail.com'},
        {icon:'<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color:black;"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>', label:'LinkedIn: LinkedIn.com/in/karen-fernander', link:'https://www.linkedin.com/in/karen-fernander/'},
        {icon:'<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style="color: black;"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>', label:'Github: Github.com/kayfernander2022', link:'https://github.com/kayfernander2022'}
    ],
    footer: {
        social: [
            {
                service: 'github',
                link: 'https://github.com/kayfernander2022',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com/in/karen-fernander/',
            },
        ],
        footerMessage: 'Thanks for your time. 👋 ',
        background: '',
    },
}

export default (state: Portfolio = initState) => {
    return state
}
