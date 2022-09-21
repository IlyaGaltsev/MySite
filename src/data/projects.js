import chat from "../assets/images/chat.png"
import mysite from '../assets/images/SITE.png'
const projects = [
    {
        id:1,
        image:chat,
        name:'RealTime чат',
        description:'Чат для обмена сообщениями в реальном времени',
        link:'/',
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
        ]
    },
    {
        id:2,
        image:chat,
        name:'Калькулятор',
        description:'Чат для обмена сообщениями в реальном времени',
        link:'/',
        github:'/',
        technologies:[
            {
                id:1,
                name:'React.js'
            },
            {
                id:2,
                name:'Styled-components'
            }
        ]
    },
    {
        id:3,
        image:mysite,
        name:'Мой сайт',
        description:'Сайт про меня в сфере IT (этот сайт)',
        link:'/',
        github:'/',
        technologies:[
            {
                id:1,
                name:'React.js'
            }
        ]
    }
]
export default projects;