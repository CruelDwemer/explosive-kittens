import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../../entities/user/lib'
import { combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
// import { ratingReducer } from '../../entities/lobby/lib'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

const rootReducer = combineReducers({
  user: userReducer,
})

export function createSsrStore() {
  const preloadedState =
    typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined

  if (preloadedState) {
    delete window.__PRELOADED_STATE__
  }

  const ssrStore = configureStore({
    reducer: rootReducer,
    preloadedState,
  })

  return ssrStore
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof createSsrStore>['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
