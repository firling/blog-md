import React from "react"
import { Button, Title } from "@mantine/core"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
  
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false, message: "" }
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
      return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
      // You can use your own error logging service here
      this.setState({message: error.message})
    }
    render() {
      // Check if the error is thrown
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
            <Title order={2}>Il y a une erreur dans le MDX :</Title>
            <pre>{this.state.message}</pre>
            <Button mt="md" color="cyan" radius="md" size="lg"
              onClick={() => this.setState({ hasError: false })}>
              Try again?
            </Button>
          </div>
        )
      }
  
      // Return children components in case of no error
  
      return this.props.children
    }
  }
  