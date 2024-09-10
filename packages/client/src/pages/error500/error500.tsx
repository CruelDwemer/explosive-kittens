import React, { FC } from 'react'
import { ErrorPage } from '../../shared/ui'

const Error500: FC = () => (
  <ErrorPage header="500" errorText="На сервере произошла ошибка" />
)
export default Error500
