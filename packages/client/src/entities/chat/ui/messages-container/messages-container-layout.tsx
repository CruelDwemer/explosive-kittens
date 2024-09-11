import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

type MessagesContainerProps = PropsWithChildren

const MessagesContainer: FC<MessagesContainerProps> = ({ children }) => {
  return <Box sx={{}}>{children}</Box>
}

export default MessagesContainer
