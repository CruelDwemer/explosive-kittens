import React, { FC } from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styles from './styles'

interface Props {
  header: string
  errorText: string
}

const ErrorPage: FC<Props> = ({ header, errorText }) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>{header}</Box>
      <Box sx={styles.errorText}>{errorText}</Box>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={goBack}>
        Назад
      </Button>
    </Box>
  )
}

export default ErrorPage
