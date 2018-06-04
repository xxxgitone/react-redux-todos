/**
 * context的简单例子
 */

import React from 'react'
import ReactDOM from 'react-dom'

function Button (props) {
  return <button>{props.theme}</button>
}

// function ThemedButton (props) {
//   return <Button theme={props.theme}/>
// }

// function Toolbar (props) {
//   return (
//     <div>
//       <ThemedButton theme={props.theme}/>
//     </div>
//   )
// }

// class App extends React.Component {
//   render () {
//     return <Toolbar theme="dark"/>
//   }
// }

// 创建一个theme Context，默认为'light'
const ThemeContext = React.createContext('light')

function ThemedButton (props) {
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme}/>}
    </ThemeContext.Consumer>
  )
}

function Toolbar (props) {
  return (
    <div>
      <ThemedButton/>
    </div>
  )
}

class App extends React.Component  {
  render () {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
