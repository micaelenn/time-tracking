export class App {
  static connectDatabase: string | undefined = process.env.CONNECT_DATABASE;
  static enableDebug: string | undefined = process.env.ENABLE_DEBUG
  static port: string| undefined = process.env.PORT
}

export const setEndpoint = (endpoint: string) => {
  return `/api/v1/${endpoint}`
}
