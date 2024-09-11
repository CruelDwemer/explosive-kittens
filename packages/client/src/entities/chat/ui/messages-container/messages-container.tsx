import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

type MessagesContainerProps = PropsWithChildren

const MessagesContainer: FC<MessagesContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        overflow: 'auto',
        boxSizing: 'border-box',
        padding: '10px',
        flexFlow: 'column-reverse nowrap',
        overflowY: 'scroll',
        margin: '8px 4px',
      }}>
      {children}
    </Box>
  )
}

export default MessagesContainer
