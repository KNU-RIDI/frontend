export const RouterPath = {
  root: "/",
  home: "/",
  chat: "/chat",
  signUp: "/sign-up",
  login: "/login",
  myPage: "/my-page",
  live2d: "/live2d",
  notFound: "*",
}

export const getDynamicPath = {
  login: (redirect?: string) => {
    const currentRedirect = redirect ?? window.location.pathname
    return `${RouterPath.login}?redirect=${encodeURIComponent(currentRedirect)}`
  },
}
