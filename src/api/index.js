import { usersApi } from './users'

const apiReducer = {
  [usersApi.reducerPath]: usersApi.reducer,
}

export const apiMiddleware = [usersApi.middleware]

export default apiReducer
