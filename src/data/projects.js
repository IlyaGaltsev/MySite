import chat from "../assets/images/chat.png"
import mysite from '../assets/images/SITE.png'
import task from '../assets/images/taskManager.png'
import prioritetLift from '../assets/images/lift.png'
const projects = [
    {
        id:1,
        image:chat,
        name:'RealTime чат',
        description:'Чат для обмена сообщениями в реальном времени',
        link:'/',//'https://creeate-react-app-788767876799.web.app/chat'
        github:'https://github.com/IlyaGaltsev/RealTime-Chat',
        technologies:[
            {
                id:1,
                name:'React.js'
            },
            {
                id:2,
                name:'Styled-components'
            }
            ,
            {
                id:3,
                name:'firebase'
            }

        ]
    },
    {
        id:2,
        image:task,
        name:'Task Manager',
        description:'Менеджер задач с сохранением задач в localStorage',
        link:'https://ilyagaltsev.github.io/task-manager-TS/',
        github:'https://github.com/IlyaGaltsev/task-manager-TS',
        technologies:[
            {
                id:1,
                name:'TypeScript'
            },
            {
                id:2,
                name:'SCSS'
            }
        ]
    },
    {
        id:3,
        image:mysite,
        name:'Cайт-резюме',
        description:'Сайт про меня в сфере IT (этот сайт)',
        link:'ilyagaltsev.github.io/MySite/',
        github:'https://github.com/IlyaGaltsev/MySite',
        technologies:[
            {
                id:1,
                name:'React.js'
            }
        ]
    },
    {
        id:4,
        image:prioritetLift,
        name:'ООО ПриоритетЛифт',
        description:'Сайт для компании (В разработке)',
        link:'https://howeverdigital.webflow.io/',
        github:'/',
        technologies:[
            {
                id:1,
                name:'Webflow'
            }
        ]
    }
]
export default projects;