// https://github.com/maticzav/nookies
import { Jwt } from 'jsonwebtoken'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export const setToken = (token : string) => {
  setCookie(null, process.env.NEXT_PUBLIC_JWT_TOKEN_NAME!, token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
    sameSite: "lax",
    secure: true
  })
}

export const getToken = () => {
  const cookies = parseCookies()

  return cookies[process.env.NEXT_PUBLIC_JWT_TOKEN_NAME!] || undefined
}

export const getSSRToken = (ctx) => {
  return ctx.req.cookies[process.env.NEXT_PUBLIC_JWT_TOKEN_NAME!]
}
export const destroyToken = () =>{
  destroyCookie(null, 'cookieName')
}
