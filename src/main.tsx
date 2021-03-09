import 'reset-css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const container = document.createElement('div')
container.className = 'container'

const rootElement = document.createElement('div')
rootElement.className = 'root'
document.body.appendChild(rootElement)

ReactDOM.render(<App />, rootElement)
