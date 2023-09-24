import Template from "../Templates/TemplateMedium";
import * as G from '../GlobalStyles/styles'
import * as R from '../PagesStyles/Register/styles'
import { useState } from "react";
import { getThemeDark } from "../https/Cookies";
import { useNavigate } from "react-router-dom";
import { LoadingPage } from "../Components/Loadings/LoadingPage/LoadingPage";

const Register = () => {


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
        </G.Container> }}
      mainSection={{ children: 
      <G.Container z='99' fd='column' ai='center' jc='start' height='90vh' bc={toggleDarkTheme ? 'rgba(0,0,0, .85)' : 'radial-gradient(ellipse at center, rgba(255,255,255,1), rgba(0,0,0,0.15));'}>
          <G.SubHeader>
            <G.Paragraph  fw='500' fs='15px' color='grey'><G.LinkHref m='0 20px 0 0' href='/'>Início</G.LinkHref>{'>'}<G.LinkHref m='0 20px'>Cadastro</G.LinkHref></G.Paragraph>
          </G.SubHeader>
          <R.TopLine>
              <G.Icon src='https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/568cc7c7-fcf1-40ba-93db-932281bacc8b' width='22px' height='22px'></G.Icon>
              <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} fw='500' fs='16px'>CADASTRO</G.Paragraph>
              <R.Line toggleDarkTheme={toggleDarkTheme}/>
          </R.TopLine>
          <R.Forms>
            <R.Form>
              <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} fs='18px' fw='500'>
                Dados de login
              </G.Paragraph>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Email <span>*</span></R.Label>
                  <R.Input  className='fullInput'/>
                </R.InputDiv>
              </R.InputSection>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Senha <span>*</span></R.Label>
                  <R.Input />
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Confirmar Senha <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
              <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} fs='18px' fw='500'>
                Dados Pessoais
              </G.Paragraph>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Nome <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Sobrenome <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>CPF <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>RG</R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Data de nascimento <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Gênero <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Telefone</R.Label>
                  <R.Input/>
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Celular <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
            </R.Form>
            <R.Form>
              <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} fs='18px' fw='500'>
                Dados de Correspondência
              </G.Paragraph>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Endereço <span>*</span></R.Label>
                  <R.Input className='fullInput'/>
                </R.InputDiv>
              </R.InputSection>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>CEP <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Cidade <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Estado <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Bairro <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
              <R.InputSection>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Numero <span>*</span></R.Label>
                  <R.Input/>
                </R.InputDiv>
                <R.InputDiv>
                  <R.Label toggleDarkTheme={toggleDarkTheme}>Complemento </R.Label>
                  <R.Input/>
                </R.InputDiv>
              </R.InputSection>
            </R.Form>
          </R.Forms>
          <R.ButtonSection>
            <G.Button disabled={false} cursor="pointer" border='0px' bc='black' color='white' p='10px 20px' height='35px' width='150px' fs='14px' fw='700'>CONFIRMAR</G.Button>
          </R.ButtonSection>
      </G.Container>}}
      footerSection={{children: 
      <G.Container  jc='center' ai='center' width='100%' height='20vh' bc={toggleDarkTheme ? 'rgba(0,0,0, 1)' : '#f5f5f5'}>
        <G.Footer>
          <G.FooterContent>
            <G.FooterAbout>
              <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} fw='bold' fs='20px'>Sobre</G.Paragraph>
              <G.FooterAboutFlex>
                <G.LogoImage width='45px' height='45px' src='./icon.svg'/>
                <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} ta='justify' m='0 20px'fs='14px'>
                  Nós somos profissionais da área de desenvolvimento dedicados a 
                  capacitar um amplo espectro de indivíduos desprovidos de conhecimento técnico, 
                  possibilitando-lhes o acesso aos recursos oferecidos pela inteligência artificial.</G.Paragraph>
              </G.FooterAboutFlex>
              <G.FooterSocials>
                <G.Icon cursor='pointer' width='22px' height='22px' m='0 5px' 
                src={toggleDarkTheme ? 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/b4d95a2a-de56-4703-bc40-7bedfd3ed01e' :'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/faf52378-4801-49ec-adbb-9ec36b4c906c'}/>
                <G.Icon cursor='pointer' width='22px' height='22px' m='0 5px' 
                src={toggleDarkTheme ? 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/23b6b6d0-fc92-4af0-8aae-6d5f94708b5a' :'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/716ababf-8fce-4b76-87a1-e64dd4850382'}/>
                <G.Icon cursor='pointer' width='22px' height='22px' m='0 5px' 
                src={toggleDarkTheme ? 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/2cba894b-773d-4b6c-ac3b-2f2922a28269' :'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/c2729e82-163c-4490-b3c0-4231efd6cb18'}/>
                <G.Icon cursor='pointer' width='22px' height='22px' m='0 5px' 
                src={toggleDarkTheme ? 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/8ab5526f-25a0-4a6d-8120-99290a8f462d' :'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/3726230a-fef6-465c-96cb-8adcd69d9953'}/>
              </G.FooterSocials>
            </G.FooterAbout>
          </G.FooterContent>
          <G.FooterBottom bt={toggleDarkTheme ? '1px solid white' : '1px solid black'}>
            <G.Paragraph fs='14px' color={toggleDarkTheme ? 'white' : 'black'}>© Pela democratização do acesso a inteligência artificial.</G.Paragraph>
          </G.FooterBottom>
        </G.Footer>
      </G.Container> }}/>
      : <LoadingPage />
  )
}

export default Register;