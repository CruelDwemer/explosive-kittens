import React, { FC } from 'react'
import { ErrorPage } from '../../shared/ui'

const Error400: FC = () => (
  <ErrorPage header="400" errorText="Страницы не существует" />
)
export default Error400
