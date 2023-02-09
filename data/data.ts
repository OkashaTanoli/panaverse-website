// Data is set in such a format that each line is represented as an boject with its element type, text, and url(if it is link).
// Each child is an array because there can be two or more lines associated with each other.
// There are many kinds of element type such as text, link, sub - heading, h3, note and list.
// Each section has a title and many children(in some cases there is no child).




import { IQuarterData, ITrackData } from "@/types/types"



export const CompulsaryQuarterData: IQuarterData[] = [
    {
        id: 1,
        objective: 'CS-101: Object-Oriented Programming using TypeScript',
        duration_weeks: 13, //weeks
        description: [
            'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.'
        ],
        outline: [
            {
                title: 'HTML and CSS (Homework)',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Learn HTML by Hira Khan (Watch Recorded Videos)',
                            url: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Learn CSS Intro by Hira Khan (Watch Recorded Videos)',
                            url: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob',
                        }
                    ],
                ]
            },
            {
                title: 'Web 3.0 and Metaverse Theory',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Introduction to Panaverse DAO',
                            url: 'https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Web 3.0 User Guide',
                            url: 'https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Complete Web 3 Assignments included in the Web 3 User Guide',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Virtual and Augmented Metaverse User Guide',
                            url: 'https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing'
                        }
                    ]
                ]
            },
            {
                title: 'Fundamentals of JavaScript (ECMAScript 2022 Language Specification)',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)',
                            url: 'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages',
                            url: 'https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'JavaScript Book Code',
                            url: 'https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Getting Started Exercises with JavaScript and Node.js',
                            url: 'https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md',
                        }
                    ],
                ]
            },
            {
                title: 'Fundamentals of JavaScript and Node.js Quiz',
                children: [
                    [
                        {
                            type: 'sub-heading',
                            text: 'Topics Covered in the Quiz:',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)',
                        }
                    ],
                    [
                        {
                            type: 'list',
                            children: [
                                [
                                    {
                                        type: 'text',
                                        text: 'Background of JavaScript and How to use JavaScript in Browser',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:',
                                    },
                                    {
                                        type: 'link',
                                        text: 'Node.js Intro',
                                        url: 'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing'
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:',
                                    },
                                    {
                                        type: 'link',
                                        text: 'Node.js Intro',
                                        url: 'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing'
                                    },
                                    {
                                        type: 'note',
                                        text: 'After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'JavaScript promises, mastering the asynchronous',
                                    },
                                    {
                                        type: 'url',
                                        text: 'JavaScript promises, mastering the asynchronous with practice and quizzes',
                                        url: 'https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript',
                                    },
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'New JavaScript Features in ECMAScript 2022 and 2021',
                                    },
                                    {
                                        type: 'url',
                                        text: 'New JavaScript Features ECMAScript 2022 (with examples)',
                                        url: 'https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg',
                                    },
                                ],
                            ]
                        }
                    ],
                ]
            },
            {
                title: 'Object-Oriented Programming with TypeScript',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript',
                        },
                        {
                            type: 'link',
                            text: 'Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript',
                            url: 'https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1'
                        },
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Learning TypeScript in Baby Steps',
                        },
                        {
                            type: 'link',
                            text: 'Learning Repository',
                            url: 'https://github.com/panaverse/learn-typescript',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'In Class Companion projects and articles for Learning TypeScrip',
                        },
                        {
                            type: 'link',
                            text: 'TypeScript book for JavaScript developers out today',
                            url: 'https://www.learningtypescript.com/',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Homework Project',
                        },
                        {
                            type: 'link',
                            text: 'Programming Projects to Learn TypeScript and Node.js',
                            url: 'https://github.com/panaverse/typescript-node-projects',
                        }
                    ],
                    [
                        {
                            type: 'sub-heading',
                            text: 'Typescript Quizzes',
                        },
                        {
                            type: 'text',
                            text: 'Fundamentals of TypeScript Quiz',
                        },
                        {
                            type: 'text',
                            text: 'TypeScript Professional Proficiency Quiz',
                        }
                    ],
                ]
            },
            {
                title: 'TypeScript for React',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Minimal TypeScript Crash Course For React With Interactive Code Exercises',
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Typescript For React Crash Course',
                            url: 'https://profy.dev/article/react-typescript',
                        }
                    ],
                ]
            },
            {
                title: 'Quarter Break Assignments and Quizzes',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'During the Quarter Break, we do the following Assignments: ',
                        }
                    ],
                    [
                        {
                            type: 'list',
                            children: [
                                [
                                    {
                                        type: 'link',
                                        text: 'Assignment : Cloud To Edge',
                                        url: 'https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge'
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'Todo App',
                                        url: 'https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app'
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'Pricing Ui',
                                        url: 'https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document:',
                                    },
                                    {
                                        type: 'link',
                                        text: 'Panaverse DAO Syllabus',
                                        url: 'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'
                                    },
                                    {
                                        type: 'note',
                                        text: 'The best-developed Website will be hosted on www.panaverse.co domain',
                                    },

                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:',
                                    },
                                    {
                                        type: 'link',
                                        text: 'PIAIC Syllabus',
                                        url: 'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'
                                    },
                                    {
                                        type: 'note',
                                        text: 'The best-developed Website will be hosted on www.piaic.org domain.',
                                    },

                                ]
                            ]

                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:',
                        }
                    ],
                    [
                        {
                            type: 'sub-heading',
                            text: 'Fundamentals of Version Control with Git Quiz',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)',
                        },
                        {
                            type: 'link',
                            text: 'Video Link',
                            url: 'https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther',
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'We will also cover these readings:',
                        },
                        {
                            type: 'link',
                            text: 'Getting started with writing and formatting on GitHub',
                            url: 'https://help.github.com/articles/markdown-basics/'
                        },
                        {
                            type: 'link',
                            text: 'Difference between fork and branch on github',
                            url: 'http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github'
                        },
                        {
                            type: 'link',
                            text: 'What are the differences between git branch, fork, fetch, merge, rebase and clone?',
                            url: 'https://stackoverflow.com/questions/3329943/what-are-the-differences-between-git-branch-fork-fetch-merge-rebase-and-clon'
                        },
                        {
                            type: 'link',
                            text: 'Git Branching - Rebasing',
                            url: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing'
                        },
                        {
                            type: 'link',
                            text: 'Git Branching - Remote Branches',
                            url: 'https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches'
                        },
                        {
                            type: 'link',
                            text: 'Practice',
                            url: 'https://docs.github.com/en/get-started/quickstart/set-up-git'
                        },
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'We will also cover these readings:',
                        },
                        {
                            type: 'link',
                            text: 'Introduction to git for data science',
                            url: 'https://www.datacamp.com/courses/introduction-to-git-for-data-science'
                        },
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Git Quiz',
                        },
                        {
                            type: 'text',
                            text: 'Total Questions: 60, Total Time: 75 minutes',
                        },
                    ],
                    [
                        {
                            type: 'sub-heading',
                            text: 'TypeScript Proficiency Quiz',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Total Questions: 63',
                        },
                        {
                            type: 'text',
                            text: 'Duration: 120 minutes',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Study Material:',
                        },
                        {
                            type: 'link',
                            text: 'Learn TypeScript',
                            url: 'https://github.com/panaverse/learn-typescript '
                        }
                    ],
                ]
            },
        ]

    },
    {
        id: 2,
        objective: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
        duration_weeks: 13, //weeks
        description: [
            'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).'
        ],
        outline: [
            {
                title: 'Next.js 13 Web Development',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Learn Next 13 Official Documentation',
                        },
                        {
                            type: 'link',
                            text: 'Nextjs Docs',
                            url: 'https://beta.nextjs.org/docs',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Latest Learn React Official Website',
                        },
                        {
                            type: 'link',
                            text: 'Reactjs Docs',
                            url: 'https://beta.reactjs.org/learn',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Learn Next.js 13 Learning Repo',
                        },
                        {
                            type: 'link',
                            text: 'Learning Repo',
                            url: 'https://github.com/panaverse/learn-nextjs',
                        }
                    ],
                ]
            },
            {
                title: 'Next.js 13 using Chakra UI (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items',
                        },
                        {
                            type: 'link',
                            text: 'Css flexbox complete guide',
                            url: 'https://www.freecodecamp.org/news/css-flexbox-complete-guide/',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Learn Chakra UI From Official Website',
                        },
                        {
                            type: 'link',
                            text: 'Chakra-ui Docs',
                            url: 'https://chakra-ui.com/getting-started',
                        }
                    ]
                ]
            },
            {
                title: 'UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano',
                        },
                        {
                            type: 'link',
                            text: 'Designing-Prototyping-Interfaces-Figma-interactive',
                            url: 'https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Figma Design Kit for TailwindCSS',
                        },
                        {
                            type: 'link',
                            text: 'Figma for tailwind',
                            url: 'https://www.figma.com/community/file/768809027799962739',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Figma Design Kit for Chakra UI',
                        },
                        {
                            type: 'link',
                            text: 'Figma for chakra ui',
                            url: 'https://www.figma.com/community/file/971408767069651759',
                        }
                    ],
                ]
            },
            {
                title: 'API Routes with Next.js (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Next JS Api Route',
                        },
                        {
                            type: 'link',
                            text: 'Api routes',
                            url: 'https://nextjs.org/docs/api-routes/introduction',
                        }
                    ]
                ]
            },
            {
                title: 'APIs with Next.js and tRPC (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Build a tRPC CRUD API Example with Next.js',
                        },
                        {
                            type: 'link',
                            text: 'Build a trpc crud api example with next js',
                            url: 'https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Stop building REST APIs for your Next.js apps, use tRPC instead',
                        },
                        {
                            type: 'link',
                            text: 'Stop building rest apis for your next apps',
                            url: 'https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/',
                        }
                    ],
                ]
            },
            {
                title: 'SQL and Prisma',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Start from scratch with relational databases',
                        },
                        {
                            type: 'link',
                            text: 'Relational databases typescript postgres',
                            url: 'https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'SQL For Beginners Video Tutorial',
                        },
                        {
                            type: 'link',
                            text: 'Sql for beginners video tutorial',
                            url: 'https://www.youtube.com/watch?v=5hzZtqCNQKk',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Database Management Systems and SQL – Tutorial for Beginners',
                        },
                        {
                            type: 'link',
                            text: 'Dbms and sql basics',
                            url: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/',
                        }
                    ],
                ]
            },
            {
                title: 'Next.js 13 using TailwindCSS (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Modern CSS with Tailwind, Second Edition by Noel Rappin',
                        },
                        {
                            type: 'link',
                            text: 'Modern css with tailwind second edition',
                            url: 'https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/',
                        }
                    ]
                ]
            },
            {
                title: 'AWS Application Composer (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'What is AWS Application Composer?',
                        },
                        {
                            type: 'link',
                            text: 'Aws application composer video',
                            url: 'https://www.youtube.com/watch?v=BujE_tik5r8',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Event-driven apps with AWS Application Composer',
                        },
                        {
                            type: 'link',
                            text: 'Event driven apps with aws application aomposer',
                            url: 'https://www.youtube.com/watch?v=p411uh363jQ',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Visually design and build serverless applications quickly',
                        },
                        {
                            type: 'link',
                            text: 'Application composer',
                            url: 'https://aws.amazon.com/application-composer/',
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Must Have: Create Free AWS Account',
                        },
                        {
                            type: 'link',
                            text: 'AWS free tier',
                            url: 'https://aws.amazon.com/free/',
                        },
                        {
                            type: 'note',
                            text: 'For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.',
                        },
                        {
                            type: 'text',
                            text: 'Now you can create a virtual VISA Debit card through the NayaPay app (https://www.nayapay.com/ ) which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'You can also get a $300 credit',
                        },
                        {
                            type: 'link',
                            text: 'get $300 credit',
                            url: 'https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html',
                        }
                    ],
                ]
            },
            {
                title: 'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps',
                        },
                        {
                            type: 'link',
                            text: 'Learn multicloud api development',
                            url: 'https://github.com/panaverse/learn-multicloud-api-development',
                        }
                    ]
                ]
            },
            {
                title: 'Web 2.0 Projects',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Next.js Projects',
                        },
                        {
                            type: 'link',
                            text: 'Nextjs all projects',
                            url: 'https://github.com/panaverse/nextjs-projects',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Styling Next.js Projects using TailwindCSS and Chakra UI',
                        },
                        {
                            type: 'link',
                            text: 'Styling nextjs projects',
                            url: 'https://github.com/panaverse/styling-nextjs-projects',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Todo Full-Stack App',
                        },
                        {
                            type: 'link',
                            text: 'Full-stack todo app',
                            url: 'https://github.com/ogzhanolguncu/min-todo',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Build a Twitter Clone',
                        },
                        {
                            type: 'link',
                            text: 'Twittwer clone',
                            url: 'https://www.youtube.com/watch?v=nzJsYJPCc80',
                        }
                    ]
                ]
            },
        ]
    },
    {
        id: 3,
        objective: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
        duration_weeks: 13, //weeks
        description: [
            'The purpose of this course is to make dollars. You will build Full-Stack Next.js 13 Jamstack Templates and GraphQL APIs.'
        ],
        outline: [
            {
                title: 'Earn While You Learn Projects:'
            },
            {
                title: 'Build Full-Stack Next.js 13 Jamstack Templates',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'The Template Standard'
                        },
                        {
                            type: 'link',
                            text: 'Panaverse template standard',
                            url: 'https://github.com/panaverse/panaverse-template-standard'
                        }
                    ]

                ]
            },
            {
                title: 'Build QraphQL APIs ',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.'
                        }
                    ]
                ]
            },

        ]
    }
]
















const WMDQuarters: IQuarterData[] = [
    {
        id: 4,
        objective: 'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
        duration_weeks: 13, //weeks
        description: [
            'In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.'
        ],
        outline: [
            {
                title: 'Blockchain and Metaverse Theory',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'The Metaverse: And How It Will Revolutionize Everything by Matthew Ball'
                        },
                        {
                            type: 'link',
                            text: 'Metaverse book by matthew ball ',
                            url: 'https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0'
                        },
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Mastering Blockchain - Fourth Edition by Imran Bashir'
                        },
                        {
                            type: 'link',
                            text: 'Mastering blockchain book by imran bashir ',
                            url: 'https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067'
                        },
                    ],

                ]
            },
            {
                title: 'Smart Contract Development in Solidity',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Solidity Programming Essentials - Second Edition By Ritesh Modi'
                        },
                        {
                            type: 'link',
                            text: 'Solidity programming book by Ritesh Modi',
                            url: 'https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181'
                        },
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Solidity Learning Repo'
                        },
                        {
                            type: 'link',
                            text: 'Defi dapps solidity smart contracts repo',
                            url: 'https://github.com/panaverse/defi-dapps-solidity-smart-contracts'
                        },
                    ],

                ]
            },
            {
                title: 'Dapp Development using Ethers.js and Next.js 13',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Dapp Learning Repo'
                        },
                        {
                            type: 'link',
                            text: 'Dapps nextjs repo',
                            url: 'https://github.com/panaverse/dapps-nextjs'
                        },
                    ]
                ]
            },
            {
                title: 'Tokennomics',
            },
            {
                title: 'Blockchain Project: Create a Token and Launch ICO/IEO/IDO',
                children: [
                    [
                        {
                            type: 'text',
                            text: `As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects`
                        },
                        {
                            type: 'link',
                            text: 'List_of highest-funded crowdfunding projects',
                            url: 'https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects'
                        },
                        {
                            type: 'text',
                            text: `and you'll notice that blockchain projects absolutely dominate the list.`,
                        },
                    ],
                    [
                        {
                            type: 'text',
                            text: `Understand the difference between IDO vs. IEO vs. ICO`
                        },
                        {
                            type: 'link',
                            text: 'What is a dex ido',
                            url: 'https://phemex.com/blogs/what-is-a-dex-ido'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Also check these links for latest listings:`
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: `ICO list at ICO Drops`,
                            url: 'https://icodrops.com'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: `ICO List of Best New Initial Coin Offerings`,
                            url: 'https://topicolist.com/'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs `,
                        },
                        {
                            type: 'link',
                            text: 'Ico list',
                            url: 'https://cryptototem.com/ico-list/'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'ICO List Online',
                            url: 'https://www.icolistingonline.com'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Binance IEO List',
                            url: 'https://coincodex.com/ieo-list/binance/'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Binance Launchpad',
                            url: 'https://www.coinspeaker.com/ieo/platform/binance-launchpad/'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'IEO List',
                            url: 'https://icomarks.com/ieo'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Polkastarter',
                            url: 'https://polkastarter.com'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Project Part 1: How to Launch a IEO on Binance Launchpad'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Read How to Launch an IEO'
                        },
                        {
                            type: 'link',
                            text: 'How to launch an ieo',
                            url: 'https://appinventiv.com/blog/how-to-launch-an-ieo/'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad'
                        },
                        {
                            type: 'link',
                            text: 'How to Get Started with Binance Launchpool',
                            url: 'https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04'
                        }
                    ],
                    [
                        {
                            type: 'note',
                            text: 'Also document the alternatives to Binance Launchpad.'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Project Part 2: How to Launch a IDO on Polkastarter'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Review the list of top fundraising platforms'
                        },
                        {
                            type: 'link',
                            text: 'Top fundraising platforms',
                            url: 'https://cryptorank.io/fundraising-platforms'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter'
                        },
                        {
                            type: 'link',
                            text: 'polkastarter',
                            url: 'https://polkastarter.com/'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Project Part 3: Create a Pako Token'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.`
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: `Project Part 4: Develop Crowd Sale Contract`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Implement a payable buyToken() function.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `You can use the openzeppelin crowd sale contracts`
                        },
                        {
                            type: 'link',
                            text: `Openzeppelin crowd sale contracts`,
                            url: 'https://docs.openzeppelin.com/contracts/4.x/crowdsales'
                        },
                        {
                            type: 'text',
                            text: `however you will have to update the code to the latest solidity version.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.`
                        }
                    ],
                    [
                        {
                            type: 'note',
                            text: `Before you get started writing the token contract we suggest you review the access control`
                        },
                        {
                            type: 'link',
                            text: 'access-control',
                            url: "https://docs.openzeppelin.com/contracts/4.x/access-control"
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: `Project Part 5: Trying it with MetaMask`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `When it's done, take note of what addresses the contracts were uploaded to and copy it!`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `To do this, open the side menu and click on the "Add token" button to get started:`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!`
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: `Project Part 6: Trying it with Multisignature Wallets`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Read`
                        },
                        {
                            type: 'link',
                            text: `Multisignature wallets can keep your coins safer if you use them right`,
                            url: 'https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Now use Gnosis Safe with multi-sigs to do what you did in the last part`
                        },
                        {
                            type: 'link',
                            text: `Gnosis safe`,
                            url: 'https://gnosis-safe.io/'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: `Project Part 7: Sending Tokens using Ethers.js`
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Write a Typescript program to send Pako Token to some friend's address using Ethers.js.`
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: `You may follow this tutorial`,
                            url: 'https://ethereum.org/en/developers/tutorials/send-token-etherjs/'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: `Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT`,
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Read this NFT tutorial series`,
                        },
                        {
                            type: 'link',
                            text: `How to write and deploy an nft`,
                            url: 'https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Create a NFT contract using the OpenZepplen ERC721 NFT Standard `,
                        },
                        {
                            type: 'link',
                            text: `NFT contract using OpenZepplen ERC721 NFT Standard`,
                            url: 'https://docs.openzeppelin.com/contracts/4.x/erc721'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `You may use the Preset ERC721 contract`,
                        },
                        {
                            type: 'link',
                            text: `Present ERC721 contract`,
                            url: 'https://docs.openzeppelin.com/contracts/4.x/erc721#Presets'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace for sale.`,
                        },
                        {
                            type: 'link',
                            text: `opensea`,
                            url: 'https://opensea.io/'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: `Implement a ERC721 Market `,
                        },
                        {
                            type: 'link',
                            text: `How to implement an erc721 market`,
                            url: 'https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/'
                        }
                    ],
                ]
            },
        ]
    },
    {

        id: 5,
        objective: 'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
        duration_weeks: 13, //weeks
        description: [
            `The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.`
        ],
        outline: [
            {
                title: 'Open Metaverse Web Development',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Open Metaverse Learning Repo',
                            url: 'https://github.com/panaverse/metaverse-web'
                        }
                    ]

                ]
            },
            {
                title: 'Blender 3D asset Creation for the Metaverse (Remote Zoom Class)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.',
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Blender 3.3+ Download',
                        },
                        {
                            type: 'link',
                            text: 'Download',
                            url: 'https://www.blender.org/download/'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Blender 3.0 Beginner Tutorial',
                            url: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'Blender 3.0 Hotkey',
                            url: 'https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Blender Projects Textbook: Blender by Example 2nd Edition '
                        },
                        {
                            type: 'link',
                            text: 'Blender 3d by example second edition',
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain'
                        },
                        {
                            type: 'link',
                            text: 'Complete Guide Blender Graphics Animation',
                            url: 'https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Best Hardware Performance for Blender Rendering'
                        },
                        {
                            type: 'link',
                            text: 'Best hardware performance for blender rendering',
                            url: 'https://www.youtube.com/watch?v=H7T0SzdFHwg'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Assignment 1:'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Build a 3D Donut using Blender 3 as shown in these video tutorials'
                        },
                        {
                            type: 'link',
                            text: '3D donut using blender',
                            url: 'https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Assignment 2:'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book Blender by Example 2nd Edition'
                        },
                        {
                            type: 'link',
                            text: 'Blender 3d by example second edition',
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Assignment 3:'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition'
                        },
                        {
                            type: 'link',
                            text: 'Blender 3d by example second edition',
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Assignment 4:'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition'
                        },
                        {
                            type: 'link',
                            text: 'Blender 3d by example second edition',
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Assignment 5:'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition'
                        },
                        {
                            type: 'link',
                            text: 'Blender 3d by example second edition',
                            url: 'https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Assignment 6:'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials '
                        },
                        {
                            type: 'link',
                            text: '3D Sword in the Stone using Blender 3',
                            url: 'https://www.youtube.com/watch?v=bpvh-9H8S1g'
                        }
                    ],

                ]
            }
        ]
    }
]











const AIQuarters: IQuarterData[] = [
    {
        id: 4,
        objective: 'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
        duration_weeks: 13, //weeks
        description: [
            `Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.`,
            `We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.`,
            `We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.`
        ],
        outline: [
            {
                title: 'Introduction to Machine Learning, Data Science, and AI',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Learn AI for Everyone'
                        },
                        {
                            type: 'link',
                            text: 'AI for everyone',
                            url: 'https://www.coursera.org/learn/ai-for-everyone'
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'AI for Everyone Quiz in Week 3'
                        },
                        {
                            type: 'text',
                            text: 'Total Questions: 60'
                        },
                        {
                            type: 'text',
                            text: 'Total Time: 75 minutes'
                        }

                    ]
                ]
            },
            {
                title: 'Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'We will cover GPT-4, ChatGPT, etc. and Next.js 13'
                        },
                        {
                            type: 'link',
                            text: 'openai',
                            url: 'https://openai.com/api/'
                        },
                        {
                            type: 'link',
                            text: 'Gpt-4 is coming soon heres what we know about it',
                            url: 'https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45'
                        }
                    ]
                ]
            },
            {
                title: 'Python Crash Course for TypeScript Developers',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition'
                        },
                        {
                            type: 'link',
                            text: 'Python Crash Course 2nd Edition',
                            url: 'https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5'
                        }
                    ]
                ]
            }
        ]
    },
    {
        id: 5,
        objective: 'AI-361: Deep Learning and MLOps',
        duration_weeks: 13, //weeks
        description: [
            `This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.`
        ],
        outline: [
            {
                title: 'Deep Learning with Tensorflow',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Deep Learning with Python, Second Edition 2nd Edition'
                        },
                        {
                            type: 'link',
                            text: 'Deep learning with python',
                            url: 'https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2'
                        }
                    ]
                ]
            },
            {
                title: 'Machine Learning Engineering for Production (MLOps) using Terraform for CDK',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)',
                            url: 'https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351'
                        }
                    ],
                    [
                        {
                            type: 'link',
                            text: 'MLOps leveraging AWS SageMaker and Terraform',
                            url: 'https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce'
                        }
                    ]
                ]
            }
        ]
    }
]















const CNCQuarters: IQuarterData[] = [
    {
        id: 4,
        objective: 'CN-351: Certified Kubernetes Application Developer (CKAD)',
        duration_weeks: 13, //weeks
        description: [
            `Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.`,
            `These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.`,
            `Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.`
        ],
        outline: [
            {
                title: "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Kubernetes Running Dive Future Infrastructure',
                            url: 'https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3'
                        }
                    ]
                ]
            },
            {
                title: "Cloud Development Kit for Kubernetes",
                children: [
                    [
                        {
                            type: 'link',
                            text: 'cdk8s',
                            url: 'https://cdk8s.io/'
                        }
                    ]
                ]
            }
        ]
    },
    {
        id: 5,
        objective: 'CN-361: Developing Multi-Cloud Apps using CDK for Terraform',
        duration_weeks: 13, //weeks
        description: [
            `Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.`,
            `Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.`,
        ],
        outline: [
            {
                title: 'CDK for Terraform',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'CDK for terraform',
                            url: 'https://developer.hashicorp.com/terraform/cdktf'
                        }
                    ]
                ]
            }
        ]
    }
]


















const IOTQuarters: IQuarterData[] = [
    {
        id: 4,
        objective: 'AC-351: Ambient Computing with Voice Assistants and Matter Devices',
        duration_weeks: 13, //weeks
        description: [
            `Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.`,
            `If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.`,
            `Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.`,
            `In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.`
        ],
        outline: [
            {
                title: 'Alexa Skill Developement',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'alexa',
                            url: 'https://developer.amazon.com/en-US/alexa'
                        }
                    ]
                ]
            },
            {
                title: 'Alexa with Matter Protocol',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'alexa matter protocol',
                            url: 'https://developer.amazon.com/en-US/alexa/matter'
                        },
                        {
                            type: 'link',
                            text: 'Alexa connect kit SDK for matter',
                            url: 'https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html'
                        }
                    ]
                ]
            }
        ]
    },
    {
        id: 5,
        objective: 'AC-361: Embedded Programming using C and Rust',
        duration_weeks: 13, //weeks
        description: [
            `This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.`
        ],
        outline: [
            {
                title: 'Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Intro to 4IR, IoT, and Embedded Systems',
                            url: 'https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar'
                        },
                        {
                            type: 'text',
                            text: 'What is the Fourth Industrial Revolution? ',
                        },
                        {
                            type: 'text',
                            text: 'What is IoT? ',
                        },
                        {
                            type: 'text',
                            text: 'Embedded Systems',
                        },
                        {
                            type: 'text',
                            text: 'Hardware and Software for IoT ',
                        },
                        {
                            type: 'text',
                            text: 'Edge and Cloud Computing ',
                        },
                        {
                            type: 'text',
                            text: 'The future of IoT is AI',
                        },
                        {
                            type: 'text',
                            text: 'Blockchain in the Internet of Things? ',
                        },
                        {
                            type: 'text',
                            text: 'IoT + AI + Blockchain: The Fourth Industrial Revolution has begun',
                        },
                        {
                            type: 'text',
                            text: 'How will Matter change the IoT Infrastructure and address issues',
                        },
                        {
                            type: 'text',
                            text: 'Metaverse and IoT',
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3'
                        },
                        {
                            type: 'text',
                            text: 'Total Questions: 46'
                        },
                        {
                            type: 'text',
                            text: 'Total Time: 60 minutes '
                        }
                    ]
                ]
            },
            {
                title: 'The C Reference Book: The C programming language',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Embedded Programming book: Internet of things with ESP8266',
                        },
                        {
                            type: 'link',
                            text: 'Download',
                            url: 'https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing'
                        }
                    ]
                ]
            },
            {
                title: 'Introduction to C Part 1 (Weeks 3B, 4, and 5)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'C environment Setup for (Windows, Linux, and Mac OS systems)',
                        },
                        {
                            type: 'text',
                            text: 'Chapters 1-2 of  “The C programming language”',
                        },
                        {
                            type: 'list',
                            children: [
                                [
                                    {
                                        type: 'text',
                                        text: 'Variable names types'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Data types and sizes'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Constants'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Arithmetic operations'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Logical and relational operators'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Type conversions'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Bitwise operators'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Conditional expressions'
                                    }
                                ],
                            ]
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Programming Assignments will also be given.'
                        }
                    ]
                ]
            },
            {
                title: 'C Programming Part 2 (Weeks 6 and 7)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Topics 3 and 4  of  “The C programming language”'
                        },
                        {
                            type: 'list',
                            children: [
                                [
                                    {
                                        type: 'text',
                                        text: 'Control flow statements (else if, loops, switch, break continue)'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Function and Program structure(Returning and non-returning, scope rules, Recursion)'
                                    }
                                ]
                            ]
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Programming Assignments will also be given.'
                        }
                    ]
                ]
            },
            {
                title: 'Introduction to Embedded systems Part 1 (Weeks 8) ',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Basic Electronics and Introduction to microcontrollers'
                        },
                        {
                            type: 'text',
                            text: 'Chapter 1 of  “Internet of things with ESP8266”'
                        },
                        {
                            type: 'list',
                            children: [
                                [
                                    {
                                        type: 'text',
                                        text: 'Arduino IDE installation and env setup for ESP8266'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Burning your first code on ESP8266'
                                    }
                                ]
                            ]
                        }
                    ],
                    [
                        {
                            type: 'text',
                            text: 'Programming Assignments will also be given.'
                        }
                    ],
                    [
                        {
                            type: 'h3',
                            text: 'Mid-Term II: C Programming Quiz 1 in Week 9'
                        },
                        {
                            type: 'text',
                            text: 'Total Questions: 62'
                        },
                        {
                            type: 'text',
                            text: 'Total Time: 75 minutes '
                        },
                    ]
                ]
            },
            {
                title: ' Introduction to Embedded systems Part 2 (Weeks 9-12)',
                children: [
                    [
                        {
                            type: 'text',
                            text: 'Chapters 2-5 of  “Internet of things with ESP8266”'
                        },
                        {
                            type: 'list',
                            children: [
                                [
                                    {
                                        type: 'text',
                                        text: 'Connecting your hardware to wifi.'
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'Wifimanager with esp8266 autoconnect custom parameter and manage your ssid and password',
                                        url: 'https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Reading data from GPIOs',
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'ESP8266 NodeMCU Digital Inputs and Digital Outputs (Arduino IDE)',
                                        url: 'https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Controlling LEDs',
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Reading data from digital sensors.',
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'Data logging',
                                        url: 'https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html'
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'nodemcu datalogger to save temperature and pressure data on thinger io cloud platform',
                                        url: 'https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform'
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'Nodemcu data logger to upload data on webserver',
                                        url: 'https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Displaying data on the cloud.',
                                    }
                                ],
                                [
                                    {
                                        type: 'link',
                                        text: 'NodeMCU DHT Data to Arduino IoT Cloud',
                                        url: 'https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Controlling controller remotely.',
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Control ESP8266 Over the Internet from Anywhere',
                                        url: 'https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Controlling a lamp anywhere in the world.',
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Interacting with different web services.',
                                    }
                                ],
                            ]
                        }
                    ]
                ]
            },
            {
                title: 'Embedded Programming using Rust (Extra Weeks in the Course)',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Embedded devices',
                            url: 'https://www.rust-lang.org/what/embedded'
                        },
                        {
                            type: 'link',
                            text: 'esp8266',
                            url: 'https://crates.io/crates/esp8266'
                        }
                    ]
                ]
            },
            {
                title: 'Hardware Requirements:',
                children: [
                    [
                        {
                            type: 'list',
                            children: [
                                [
                                    {
                                        type: 'text',
                                        text: 'Esp8266 (Node MCU)'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Jumper Wires'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Bread Board'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'LEDs'
                                    }
                                ],
                                [
                                    {
                                        type: 'text',
                                        text: 'Sensors: (Dht11, ultrasonic sensor, IR sensor)'
                                    }
                                ],
                            ]
                        }
                    ]
                ]
            },

        ]
    }
]
















const GBSQuarters: IQuarterData[] = [
    {
        id: 4,
        objective: 'Bio-351: Python for Biologists',
        duration_weeks: 13, //weeks
        description: ['This course will focus on learning the basics of the Python programming language through genomics examples.'],
        outline: [
            {
                title: 'Textbook:',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Pythonforbiologists',
                            url: 'https://www.pythonforbiologists.org/'
                        }
                    ]
                ]
            }
        ]
    },
    {
        id: 5,
        objective: 'Bio-361: Bioinformatics with Python',
        duration_weeks: 13, //weeks
        description: ['In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.'],
        outline: [
            {
                title: 'Textbook:',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Bioinformatics Python Cookbook applications computational',
                            url: 'https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1'
                        }
                    ]
                ]
            }
        ]
    }
]
















export const NPSQuarters: IQuarterData[] = [
    {
        id: 4,
        objective: 'NPA-351: CCNA 200-301 Certification',
        duration_weeks: 13, //weeks
        description: ['This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.'],
        outline: [
            {
                title: 'Textbook:',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'CCNA 200 301 Official Guide Library',
                            url: 'https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1'
                        }
                    ]
                ]
            }
        ]
    },
    {
        id: 5,
        objective: 'NPA-361: Network Programmability and Automation',
        duration_weeks: 13, //weeks
        description: [`Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.`],
        outline: [
            {
                title: 'Textbook:',
                children: [
                    [
                        {
                            type: 'link',
                            text: 'Network Programmability Automation Networking Technology',
                            url: 'https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3'
                        }
                    ]
                ]
            }
        ]
    }
]
















export const TracksData: ITrackData[] = [
    {
        id: 'wmd',
        name: 'Web 3 and Metaverse',
        quarters: [
            ...WMDQuarters
        ]
    },
    {
        id: 'cnc',
        name: 'Cloud-Native Computing',
        quarters: [
            ...CNCQuarters
        ]
    },
    {
        id: 'ai',
        name: 'Artificial Intelligence (AI) and Deep Learning',
        quarters: [
            ...AIQuarters
        ]
    },
    {
        id: 'iot',
        name: 'Ambient Computing and IoT',
        quarters: [
            ...IOTQuarters
        ]
    },
    {
        id: 'gbs',
        name: 'Genomics and Bioinformatics',
        quarters: [
            ...GBSQuarters
        ]
    },
    {
        id: 'npa',
        name: 'Network Programmability and Automation',
        quarters: [
            ...NPSQuarters
        ]
    }
]




