import { TermsOfUse } from "./pages/TermsOfUse"
import { Main } from "./pages/Main"

export const routerNames = {
  main: '/',
  termsOfUse: '/terms-of-use'
}

export const publicRoutes = [
  {
    path: routerNames.main,
    Component: <Main />
  },
  {
    path: routerNames.termsOfUse,
    Component: <TermsOfUse />
  }
]
