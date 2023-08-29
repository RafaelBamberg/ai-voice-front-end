import Template from '../Templates/Template'
import * as G from '../GlobalStyles/styles'
import * as H from '../PagesStyles/Home/styles'
import { useState } from 'react';

const Home = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [toggleInputFocus, setToggleInputFocus] = useState(false)

  return (
    <div>
        <Template
          backgroundColor='linear-gradient(to bottom, black, #001f3f)'
          headerSection={{ children: 
          <G.Container bc='white' width='100%' height='8%'>
            <H.Header>
              <H.Logo>
                <H.LogoImage src='./icon.svg' />
                <G.Paragraph cursor='default' fw='200' ff='Raleway, sans-serif' fs='38px' m='0 20px'>VoiceIA</G.Paragraph>
              </H.Logo>
              <H.SearchModels toggleInputFocus={toggleInputFocus} className='Search'>
                <G.Icon width='20px' height='20px' m='0px' src='https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/9e3d1b6e-d18b-450b-8745-77af0f59a46a'/>
                <H.Input onBlur={()=>setToggleInputFocus(false)} onFocus={()=>setToggleInputFocus(true)} placeholder='Modelo..'></H.Input>
              </H.SearchModels>
              <H.Menu>
                    <H.MenuIn style={{ display:'flex', width:'100%', justifyContent:'end'}}>
                      <G.Icon onClick={()=>setToggleDropDown(!toggleDropDown)} className='IconActive' cursor='pointer' width='23px' height='23px' m='0 20px' src='https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/e696d079-7fee-4b6b-9d1d-f8c3f626eecc'></G.Icon>
                      <H.DropDown toggleDropDown={toggleDropDown} className='DropDown'>
                        <H.MenuList>
                          <H.MenuItem className='top'>Entrar</H.MenuItem>
                          <H.MenuItem>Modelos</H.MenuItem>
                          <H.MenuItem>Planos</H.MenuItem>
                          <H.MenuItem>Tutorial</H.MenuItem>
                          <H.MenuItem>Sobre</H.MenuItem>
                        </H.MenuList>
                      </H.DropDown>
                  </H.MenuIn>
              </H.Menu>
            </H.Header>
          </G.Container> 
          }}
          mainSection={{ children: <G.Container  width='100%' height='82%' /> }} 
          footerSection={{children: 
          <G.Container  width='100%' height='10%' bc='white'>
            <G.Paragraph fs='16px' >Pela democratização do acesso a inteligência artificial.</G.Paragraph>
          </G.Container> }}/>
    </div>
  )
}

export default Home