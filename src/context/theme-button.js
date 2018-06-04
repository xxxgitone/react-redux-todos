import React from 'react'
import { ThemeContext } from './theme-context'

function ThemedButton (props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button
          {...props}
          style={{backgroundColor: theme.background, color: theme.foreground}}/>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemedButton
