import { FaTelegramPlane } from "react-icons/fa";
import {IoCloudUploadSharp} from "react-icons/io5"
const buttons = [
    {
        id:1,
        name:'скачать резюме',
        link:'https://docs.google.com/document/d/14zpcbqmRUiqriTOoHmnMWif-aS1oAGILIuM0UxyEJFE/edit?usp=sharing',
        icon: ()=>{return <IoCloudUploadSharp style={{marginLeft:10}} size={18}/>}
    },
    {
        id:2,
        name:'Написать в Telegram',
        link:'https://t.me/ilyagaltsev',
        icon: ()=>{return <FaTelegramPlane style={{marginLeft:10}} size={18}/>}
    }
]
export default buttons;