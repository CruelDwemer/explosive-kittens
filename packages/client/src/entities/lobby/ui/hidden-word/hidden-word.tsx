import { Typography } from '@mui/material'
import { FC } from 'react'

interface HiddenWordProps {
  hiddenWord: string
}

const HiddenWord: FC<HiddenWordProps> = ({ hiddenWord }) => {
  return (
    <>
      <Typography color="primary">Загаданное слово</Typography>
      <Typography variant="h6" fontWeight={'bold'}>
        {hiddenWord}
      </Typography>
    </>
  )
}

export default HiddenWord
