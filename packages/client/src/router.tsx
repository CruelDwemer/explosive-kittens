import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { ROUTER_PATH } from './shared/models'
import {
  Login,
  Play,
  Register,
  Finish,
  Lobby,
  User,
  TestErrorBoundary,
  LeaderBoard,
  Error400,
  Error500,
  Layout,
  Forum,
  Landing,
} from './pages'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATH.PLAY,
        element: <Play />,
      },
      {
        path: ROUTER_PATH.FINISH,
        element: <Finish />,
      },
      {
        path: ROUTER_PATH.LEADER_BOARD,
        element: <LeaderBoard />,
      },
      {
        path: ROUTER_PATH.LOBBY,
        element: <Lobby />,
      },
      {
        path: ROUTER_PATH.USER,
        element: <User />,
      },
      {
        path: ROUTER_PATH.FORUM,
        element: <Forum />,
      },
      {
        path: '/landing',
        element: <Landing />,
      },
      {
        path: ROUTER_PATH.MAIN,
        element: <Navigate to={ROUTER_PATH.PLAY} />,
      },
    ],
  },
  {
    path: ROUTER_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTER_PATH.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTER_PATH.NOT_FOUND,
    element: <Error400 />,
  },
  {
    path: ROUTER_PATH.ERROR,
    element: <Error500 />,
  },
  {
    path: '/test-error',
    element: <TestErrorBoundary />,
  },
  {
    path: ROUTER_PATH.ANOTHER,
    element: <Error400 />,
  },
]
