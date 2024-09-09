import React, { Component, ErrorInfo, ComponentType } from 'react'
import { Button, Card, CardContent, CardHeader } from '@mui/material'
import styles from './styles'

interface ErrorBoundaryState {
  error: Error | null
  errorInfo: ErrorInfo | null
}

interface Props {
  children: ComponentType
}

type WithErrorBoundaryType = (component: ComponentType) => ComponentType

class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
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

const withErrorBoundary: WithErrorBoundaryType = (component: ComponentType) =>
  (<ErrorBoundary>{component}</ErrorBoundary>) as unknown as ComponentType

export default withErrorBoundary
