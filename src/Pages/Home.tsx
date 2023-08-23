import Template from '../Templates/Template'
import * as G from '../GlobalStyles/styles'
import * as H from '../PagesStyles/Home/styles'

const Home = () => {
  return (
    <div>
        <Template
          backgroundColor='linear-gradient(to bottom, #000000, #001f3f)'
          headerSection={{ children: 
          <G.Container bc='white' width='100%' height='8%'>
            <H.Header>
              <H.Logo>
                <H.LogoImage src='./icon.svg' />
                <G.Paragraph cursor='default' fw='200' ff='Raleway, sans-serif' fs='38px' m='0 20px'>VoiceIA</G.Paragraph>
              </H.Logo>
              <H.Menu>
                <H.MenuList>
                  <H.MenuItem>Modelos</H.MenuItem>
                  <H.MenuItem>Planos</H.MenuItem>
                  <H.MenuItem>Tutorial</H.MenuItem>
                  <H.MenuItem>Sobre</H.MenuItem>
                  <G.Icon width='20px' height='20px' m='0 20px' src='https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/e696d079-7fee-4b6b-9d1d-f8c3f626eecc'></G.Icon>
                </H.MenuList>
              </H.Menu>
            </H.Header>
          </G.Container> 
          }}
          mainSection={{ children: <G.Container  width='100%' height='84%' /> }} 
          footerSection={{children: <G.Container  width='100%' height='8%' /> }}/>
    </div>
  )
}

export default Home