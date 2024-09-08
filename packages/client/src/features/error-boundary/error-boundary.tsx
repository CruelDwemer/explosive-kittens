import React, { ErrorInfo, ComponentType } from 'react'
import { Button, Card, CardContent, CardHeader } from '@mui/material'
import styles from './styles'

interface IState {
  error: Error | null
  errorInfo: ErrorInfo | null
}

interface IProps {
  children: ComponentType
}

class ErrorBoundary extends React.Component<IProps, IState> {
  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo })
  }

  reloadPage = () => {
    location.reload()
  }

  render() {
    const {
      state: { error, errorInfo },
      props: { children },
      reloadPage,
    } = this

    if (error) {
      return (
        <Card>
          <CardHeader title="Возникла ошибка" />
          <CardContent>
            <div>{(error as Error | null)?.toString()}</div>
            <div>------</div>
            <details style={styles.details}>
              <summary>Детали</summary>
              {(errorInfo as ErrorInfo | null)?.componentStack}
            </details>
            <Button variant="contained" color="primary" onClick={reloadPage}>
              Обновить страницу
            </Button>
          </CardContent>
        </Card>
      )
    }
    return children as unknown as React.ReactNode
  }
}

const withErrorBoundary: (component: ComponentType) => ComponentType = (
  component: ComponentType
) => (<ErrorBoundary>{component}</ErrorBoundary>) as unknown as ComponentType

export default withErrorBoundary
