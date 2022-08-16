import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalStyle'
import HomeScreen from './screens/home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyle />
    <HomeScreen />
  </StrictMode>
)
