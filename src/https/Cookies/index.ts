import Cookies from "universal-cookie"

export const setThemeDark = (themeDark: boolean) => {
  let cookies = new Cookies()
  cookies.remove('themeDark')
  cookies.set('themeDark', themeDark)
}

export function getThemeDark () {
  let cookies = new Cookies()
  let themeDark = cookies.get('themeDark')
  return themeDark
}

export const removeThemeDark = () => {
  let cookies = new Cookies()
  cookies.remove('themeDark')
}