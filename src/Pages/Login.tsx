import Template from '../Templates/Template'
import * as L from '../GlobalStyles/styles'

const Login = () => {
  return (
    <div>
        <Template
          backgroundColor='linear-gradient(to bottom, #000000, #1a1a1a)'
          headerSection={{ children: <L.Container  width='100%'height='10%' /> }}
          mainSection={{ children: <L.Container  width='100%' height='80%' /> }} 
          footerSection={{children: <L.Container  width='100%' height='10%' /> }}/>
    </div>
  )
}

export default Login