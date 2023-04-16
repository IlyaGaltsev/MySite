import chat from '../assets/images/chat.png'
import mysite from '../assets/images/SITE.png'
import task from '../assets/images/taskManager.png'
import prioritetLift from '../assets/images/lift.png'

export const projects = [
  {
    id: 1,
    image: chat,
    title: 'Realtime Chat',
    description: 'Чат для обмена сообщениями в реальном времени',
    deploy: '/', //'https://creeate-react-app-788767876799.web.app/chat'
    github: 'https://github.com/IlyaGaltsev/RealTime-Chat',
    technologies: ['React', 'SCSS', 'Firebase']
  },
  {
    id: 1213,
    image: chat,
    title: 'Realtime Chat Mobile',
    description: 'Чат для обмена сообщениями в реальном времени',
    deploy: '', //'https://creeate-react-app-788767876799.web.app/chat'
    github: 'https://github.com/IlyaGaltsev/RealTime-Chat',
    technologies: ['React-Native', 'Styled-components']
  },
  // {
  //   id: 214,
  //   image: chat,
  //   title: 'Мобилтест',
  //   description: 'Платфлорма для тестирования',
  //   deploy: 'https://mobiltest.ru', //'https://creeate-react-app-788767876799.web.app/chat'
  //   github: '',
  //   technologies: ['Nuxt 2', 'SCSS']
  // },
  {
    id: 2,
    image: task,
    title: 'Task Manager',
    description: 'Менеджер задач с сохранением задач в localStorage',
    deploy: 'https://ilyagaltsev.github.io/task-manager-TS/',
    github: 'https://github.com/IlyaGaltsev/task-manager-TS',
    technologies: ['React', 'TS', 'Emotion']
  },
  {
    id: 3,
    image: mysite,
    title: 'Cайт-резюме',
    description: 'Сайт про меня в сфере IT (этот сайт)',
    deploy: 'ilyagaltsev.github.io/MySite/',
    github: 'https://github.com/IlyaGaltsev/MySite',
    technologies: ['React.js']
  },
  {
    id: 4,
    image: prioritetLift,
    title: 'ООО ПриоритетЛифт',
    description: 'Сайт для компании (В разработке)',
    deploy: 'https://howeverdigital.webflow.io/',
    github: '/',
    technologies: ['Webflow', 'JS']
  }
]
