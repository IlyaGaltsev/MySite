import { MdEmail, } from "react-icons/md";
import {ImGithub} from "react-icons/im";
import {IoLogoVk, IoLogoWhatsapp, IoLogoLinkedin} from "react-icons/io";
const contacts = [
    {
        id:1,
        name:'Email',
        link:'mailto:ilyandreev771@gmail.com',
        icon:()=><MdEmail  size={24}/>
    },
    {
        id:2,
        name:'GitHub',
        link:'https://github.com/IlyaGaltsev',
        icon:()=><ImGithub  size={24}/>
    },
    // {
    //     id:3,
    //     name:'LinkedIn',
    //     link:'/',
    //     icon:()=><IoLogoLinkedin  size={24}/>
    // },
    {
        id:4,
        name:'WhatsApp',
        link:'https://wa.me/79304746999',
        icon:()=><IoLogoWhatsapp  size={24}/>
    },
    {
        id:5,
        name:'VK',
        link:'https://vk.com/id210498646',
        icon:()=><IoLogoVk  size={24}/>
    },

]
export default contacts;