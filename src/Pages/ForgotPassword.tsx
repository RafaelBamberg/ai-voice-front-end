import Template from "../Templates/TemplateSmall";
import * as G from "../GlobalStyles/styles"
import * as F from "../PagesStyles/ForgotPassword/styles"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getThemeDark } from "../https/Cookies";
import { LoadingPage } from "../Components/Loadings/LoadingPage/LoadingPage";

const ForgotPassword = () => {

  const [toggleDarkTheme, setToggleDarkTheme] = useState(getThemeDark())
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  
  setTimeout((()=>setLoading(false)), 5000)
  return(
    !loading ? 
    <Template
    bc={toggleDarkTheme ? 'grey' : '#f5f5f5'}
    headerSection={{ children: 
      <G.Container jc='center' ai='center' bc={toggleDarkTheme ? 'rgba(0,0,0, 1)' : '#f5f5f5'} width='100vw' height='10vh'>
        <G.Header jc='center' ai='center'>
          <G.HeaderLogo>
            <G.LogoImage  width='60px' height='60px' src='https://github-production-user-asset-6210df.s3.amazonaws.com/62246037/264488047-15dc838c-1428-49a2-9ad9-2bf07bedfd19.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230830T222928Z&X-Amz-Expires=300&X-Amz-Signature=eecc3aed25b7498405674acd282e1af1f6764b0c3f0fd1830cbc8f81422db170&X-Amz-SignedHeaders=host&actor_id=62246037&key_id=0&repo_id=680557063' />
            <G.Paragraph onClick={() => navigate('/')} cursor='pointer'color={toggleDarkTheme ? 'white' : 'black'} fw='200' ff='Raleway, sans-serif' fs='38px' m='0 20px'>VoiceIA</G.Paragraph>
          </G.HeaderLogo>
        </G.Header>
    </G.Container>  }}
    mainSection={{ children: 
      <G.Container z='99' fd='column' ai='center' jc='center' height='90vh' bc={toggleDarkTheme ? 'rgba(0,0,0, .85)' : 'radial-gradient(ellipse at center, rgba(255,255,255,1), rgba(0,0,0,0.15));'}>
          <F.Box toggleDarkTheme={toggleDarkTheme}>
            <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} fw='500' fs='22px'>
              Troca de senha
            </G.Paragraph>
              <F.Label toggleDarkTheme={toggleDarkTheme}>Nova senha</F.Label>
              <F.Input></F.Input>
            <F.Label toggleDarkTheme={toggleDarkTheme}>Confirmar Senha</F.Label>
            <F.Input></F.Input>
            <G.Button fw='bold' fs='14px' bc={toggleDarkTheme ? 'white' : 'black'} width='100px' border={toggleDarkTheme ? '2px solid white' : '2px solid black'} p='5px' cursor='pointer' color={toggleDarkTheme ? 'black' : 'white'}>Trocar</G.Button>
          </F.Box>
      </G.Container>  }}
    footerSection = {{ children: undefined}}
    /> :
    <LoadingPage/>
  )
}

export default ForgotPassword;