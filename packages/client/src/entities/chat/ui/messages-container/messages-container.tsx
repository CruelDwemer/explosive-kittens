import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import styles from './styles'

type MessagesContainerProps = PropsWithChildren

const MessagesContainer: FC<MessagesContainerProps> = ({ children }) => {
  return <Box sx={styles}>{children}</Box>
}

export default MessagesContainer
