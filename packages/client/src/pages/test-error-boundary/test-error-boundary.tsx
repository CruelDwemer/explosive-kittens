import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ErrorBoundary } from '../../features'

const TestErrorBoundary = () => {
  const [clicked, setClicked] = useState(false)

  const throwError = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    if (clicked) {
      throw new Error('My Awesome Error')
    }
  }, [clicked])

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Typography variant="h2">Страница теста для Error Boundary</Typography>
      <Typography>Нажатие на кнопку приведёт в ошибке</Typography>
      <Button variant="contained" color="error" onClick={throwError}>
        Ошибка
      </Button>
    </Box>
  )
}

const withErrorBoundary = () => (
  <ErrorBoundary>
    <TestErrorBoundary />
  </ErrorBoundary>
)

export default withErrorBoundary
