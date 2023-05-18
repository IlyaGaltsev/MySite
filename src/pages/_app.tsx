import Header from '@/components/Header/Header'
import Head from 'next/head'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
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
      </Head>
      <div className='app__wrapper'>
        <Header />
        <div className='app__sections'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
