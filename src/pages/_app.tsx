import { ToastContainer } from 'react-toastify'
import Header from '@/components/Header/Header'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import '../styles/global.scss'
import Head from 'next/head'
import store from '@/store'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Head>
        <title>Главная - веб разрабочик Илья Гальцев</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          name="description"
          content="Привет, я React разработчик со знаниями React Native, CLI, Expo, Node.js Next.js и Firebase. Посмотрите мои проекты и свяжитесь со мной для сотрудничества."
        />
        <meta
          name="keywords"
          content="разработчик сайтов, веб разработчик, сделать сайт, купить сайт, разработчик веб и мультимедийных приложений, сделать мобильное приложение, MVP"
        />
        <style>
          {`
           @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap');
           @import url('https://fonts.googleapis.com/css?family=Press+Start+2P:regular');
           @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
           
           @font-face {
            font-family: 'Aliance No.1';
            src: url('/fonts/Degarism Studio - Alliance No.1 Light.otf') format('otf');
           }

           body {
             margin: 0;
             font-family: 'SF Pro Display', sans-serif;
             -webkit-font-smoothing: antialiased;
             -moz-osx-font-smoothing: grayscale;
             box-sizing: border-box;
             overflow-x: hidden;
           
             -ms-user-select: none;
             -moz-user-select: none;
             -webkit-user-select: none;
             user-select: none;
           }
           
           code {
             font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
               monospace;
           }
           #root {
             display: flex;
             justify-content: center;
           }
           html {
             --primary-color: #c4f041;
             --bright-color: #c778dd;
             --secondary-color: #acacac;
             --background-color: #0E1116;
              // #1c1c1c;
              --background-card: #21262d;
              --subtitle-color: #8b949e;
             background: var(--background-color);
           
             --min-desktop: 1140px;
           }
           
           * {
             box-sizing: border-box;
             -webkit-tap-highlight-color: transparent;
           }
           
           h1,
           h2,
           h3,
           h4,
           h5,
           h6,
           p {
             margin: 0;
           }
           
           button,
           input,
           textarea {
             outline: none;
             border: none;
           }
           
           button {
             transition: all 0.2s ease-in-out;
           }
          
         
          `}
        </style>
        <meta
          name="yandex-verification"
          content="10af51d3b8ac39f6"
        />
        <meta
          name="google-site-verification"
          content="v695TDuMpuDaby6AFSW-xbzpXulrl9z0atMxV2D31jk"
        />
      </Head>
      <div className="app__wrapper">
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="app__sections">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  )
}
