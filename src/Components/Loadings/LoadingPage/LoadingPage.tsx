import { useState } from 'react'
import { getThemeDark } from '../../../https/Cookies'
import * as L from './styles'

export const LoadingPage = () => {

  const [toggleDarkTheme, setToggleDarkTheme] = useState(getThemeDark())

  return(
      <L.Loading toggleDarkTheme={toggleDarkTheme}>
        <span/>
      </L.Loading>
  )
}