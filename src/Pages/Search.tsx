import Template from '../Templates/TemplateLong'
import * as G from '../GlobalStyles/styles'
import * as S from '../PagesStyles/Search/styles'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getThemeDark, setThemeDark } from '../https/Cookies';

const Search = () => {

  const searchValueURL = useParams()
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [toggleInputFocus, setToggleInputFocus] = useState(false)
  const [toggleDarkTheme, setToggleDarkTheme] = useState(getThemeDark())
  const [searchValue, setSearchValue] = useState(searchValueURL.searchValue ? searchValueURL.searchValue : '')

  const handleSetToggleDarkTheme = () => { setToggleDarkTheme(!toggleDarkTheme), setThemeDark(!toggleDarkTheme) }
  const handleSearchValue = (e:any) => {  setSearchValue(e.target.value) } 
  const handleChangePage = (Page: string) => { navigate(Page), window.scrollTo(0,0) }

  const navigate = useNavigate()

  const DateNow = new Date()

  const FooterMenus = [
    { title:'ACESSO RÁPIDO', items: ['Central de Ajuda', '', '']}, 
    { title:'COMO FUNCIONA', items: ['Como funciona?', '', '']}, 
    { title:'INSTITUCIONAL', items: ['Termos de uso', 'Política de privacidade', '']}]

  const AllModels = [{ 
    text:'Renato Cariani', 
      imgUrl: 'https://www.esportelandia.com.br/wp-content/uploads/2023/03/Snapinsta.app_331637835_469323538616170_3917386180558952263_n_1080-e1680292560686-1024x794.jpg.webp'},
    {
      text:'Casimiro',
      imgUrl: 'https://s2-techtudo.glbimg.com/Km75d-hZ6OVEpmTZ6ZMDVWlT0LM=/0x0:1360x850/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/T/9/eTHsI7QO6y3fSIBqtYyw/casimiro.jpg'
    },
    {
      text:'Gaules',
      imgUrl:'https://pbs.twimg.com/profile_images/1601338656987414528/59gtIq5U_400x400.jpg'
    },
    {
      text:'Whindersson Nunes',
      imgUrl:'https://www.tvpop.com.br/wp-content/uploads/2023/07/whindersson-nunes-anuncia-abertura-de-perfil-no-onlyfans-gosto-de-ta-no-meio-de-tudo-tvpop.png'
    },
    {
      text:'Giovanna Ewbank',
      imgUrl:'https://istoe.com.br/wp-content/uploads/2023/08/giovanna-ewbank2.jpg'
    },
    {
      text:'Felipe Neto',
      imgUrl:'https://images02.brasildefato.com.br/c0cbb0153552bd69ba3eade92792e9cd.jpeg'
    },
    {
      text:'Camila Coelho',
      imgUrl:'https://pbs.twimg.com/profile_images/1518423086508523521/SITGMPbH_400x400.jpg'
    },
    {
      text:'Lázaro Ramos',
      imgUrl:'https://s2.glbimg.com/CtXW6wkHnVDnDNPgRs0K3Ju904c=/top/e.glbimg.com/og/ed/f/original/2017/05/29/054a058_mc315_entrevista_lazaro-01.jpg'
    },
    {
      text:'Neymar Jr',
      imgUrl:'https://img.quizur.com/f/img64b942be2ed472.53258254.jpeg?lastEdited=1689862849'
    },
    {
      text:'Kéfera Buchmann',
      imgUrl:'https://classic.exame.com/wp-content/uploads/2020/07/reproducao-instagran-1.jpg?quality=70&strip=info&w=1024'
    },
    {
      text:'Marina Ruy Barbosa',
      imgUrl:'https://s2-quem.glbimg.com/0su6A5mbE265DKESzsxXVYSUMtg=/0x0:1400x1016/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/D/2/J5HGjNQlGupaJC8Bd7cQ/marina.jpg'
    },
    {
      text:'João Guilherme',
      imgUrl:'https://static1.purebreak.com.br/articles/4/11/62/54/@/540444-joao-guilherme-falou-sobre-atuacao-em-en-diapo-2.jpg'
    },
    {
      text:'Tata Werneck',
      imgUrl:'https://www.rbsdirect.com.br/imagesrc/24966452.jpg?w=700'
    },
    {
      text:'Diogo Defante',
      imgUrl:'https://www.mmaglobal.com/files/styles/speaker/public/speakers/4ac24d07-889e-4c5d-a708-ae643120bae4.jpeg?itok=ovqFO-L-'
    },
    {
      text:'Alanzoka',
      imgUrl:'https://pbs.twimg.com/profile_images/944712346500587522/duOz-D8s_400x400.jpg'
    }]
  
  useEffect(() => {
      if(getThemeDark() === undefined){
        setThemeDark(false)
      }
  }, [])

  return (
        <Template
          bc={toggleDarkTheme ? 'grey' : '#f5f5f5'}
          headerSection={{ children: 
          <G.Container z='100' position='fixed' jc='center' ai='center' bc={toggleDarkTheme ? 'rgba(0,0,0, 1)' : '#f5f5f5'} width='100vw' height='85px'>
            <G.Header jc='space-between' ai='center'>
              <G.HeaderLogo>
                <G.LogoImage width='60px' height='60px' src='https://github-production-user-asset-6210df.s3.amazonaws.com/62246037/264488047-15dc838c-1428-49a2-9ad9-2bf07bedfd19.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230830T222928Z&X-Amz-Expires=300&X-Amz-Signature=eecc3aed25b7498405674acd282e1af1f6764b0c3f0fd1830cbc8f81422db170&X-Amz-SignedHeaders=host&actor_id=62246037&key_id=0&repo_id=680557063' />
                <G.Paragraph cursor='pointer' onClick={() => navigate('/')} color={toggleDarkTheme ? 'white' : 'black'} fw='200' ff='Raleway, sans-serif' fs='38px' m='0 20px'>VoiceIA</G.Paragraph>
              </G.HeaderLogo>
              <G.HeaderSearchModels toggleDarkTheme={toggleDarkTheme} toggleInputFocus={toggleInputFocus} className='Search'>
                <G.Icon width='20px' height='20px' m='0px' src='https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/9e3d1b6e-d18b-450b-8745-77af0f59a46a'/>
              <G.HeaderForms onSubmit={()=> navigate(`/search/${searchValue}`)}>
                <G.HeaderInput onChange={(event:any)=> handleSearchValue(event)} color={toggleDarkTheme ? (toggleInputFocus ? 'black' : 'white') : (toggleInputFocus ? 'white' : 'black')} onBlur={()=>setToggleInputFocus(false)} onFocus={()=>setToggleInputFocus(true)} placeholder='Modelo..'></G.HeaderInput>
              </G.HeaderForms> 
              </G.HeaderSearchModels>
              <G.HeaderMenu>
                    <G.HeaderMenuIn>
                      <G.HeaderUser>
                      <G.Icon onClick={()=>handleSetToggleDarkTheme()} cursor='pointer' width='20px' height='20px' m='0px 20px' src={toggleDarkTheme ? 'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/9a25c492-ec3f-465f-978c-358ddd88eb08' : 'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/0f78b193-01a1-45da-9a7a-bc581068446b'}/>
                        <G.User>
                          <G.Paragraph fs='14px' color={toggleDarkTheme ? 'white' : 'black'}>Diogo Lima</G.Paragraph>
                          <G.UserEnergy>
                            <G.Paragraph fs='14px' color={toggleDarkTheme ? 'white' : 'black'}>3/5</G.Paragraph>
                            <G.Paragraph fs='14px' color={toggleDarkTheme ? 'white' : 'black'}>{DateNow.getUTCHours()+':'+DateNow.getUTCMinutes()}</G.Paragraph>
                          </G.UserEnergy>
                        </G.User>
                        <G.UserAvatar 
                        src='https://github-production-user-asset-6210df.s3.amazonaws.com/62246037/264416657-587d021b-db7d-44e5-b0e8-e7391304a8c7.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230830T221051Z&X-Amz-Expires=300&X-Amz-Signature=a8eba054582d5bc5c57d474950c698ed02a50ec3edb603a510d11b7c08908d2a&X-Amz-SignedHeaders=host&actor_id=62246037&key_id=0&repo_id=680557063' border={toggleDarkTheme ? '2px solid white' : '2px solid black'}/>
                      <G.Icon onClick={()=>setToggleDropDown(!toggleDropDown)} className='IconActive' cursor='pointer' width='20px' height='20px' m='0 20px' src={ toggleDarkTheme ? 'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/3d9b7f97-c116-45d5-95be-daf120ad50ee' : 'https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/e696d079-7fee-4b6b-9d1d-f8c3f626eecc'}></G.Icon>
                      </G.HeaderUser>
                      <G.HeaderDropDown toggleDarkTheme={toggleDarkTheme} toggleDropDown={toggleDropDown} className='DropDown'>
                          <G.HeaderMenuList>
                            <G.HeaderMenuItem className='top' toggleDarkTheme={toggleDarkTheme}>Entrar</G.HeaderMenuItem>
                            <G.HeaderMenuItem toggleDarkTheme={toggleDarkTheme}>Modelos</G.HeaderMenuItem>
                            <G.HeaderMenuItem toggleDarkTheme={toggleDarkTheme}>Energia</G.HeaderMenuItem>
                            <G.HeaderMenuItem toggleDarkTheme={toggleDarkTheme}>Tutorial</G.HeaderMenuItem>
                            <G.HeaderMenuItem toggleDarkTheme={toggleDarkTheme}>Sobre</G.HeaderMenuItem>
                          </G.HeaderMenuList>
                      </G.HeaderDropDown>
                  </G.HeaderMenuIn>
              </G.HeaderMenu>
            </G.Header>
          </G.Container> 
          }}
        mainSection={{ children: 
        <G.Container z='99' fd='column' mt='85px' ai='center' jc='start' bc={toggleDarkTheme ? 'rgba(0,0,0, .85)' : 'radial-gradient(ellipse at center, rgba(255,255,255,1), rgba(0,0,0,0.15));'} width='100%' height='85%'>
          <S.SubHeader>
          <G.Paragraph  fw='500' fs='15px' color='grey'><G.LinkHref m='0 20px 0 0' href='/'>Início</G.LinkHref></G.Paragraph>
            <G.Paragraph fs='32px' color='grey'>Resultado da busca para o modelo: {searchValue}</G.Paragraph>
          </S.SubHeader>
          <S.Models toggleDarkTheme={toggleDarkTheme}>
            {AllModels.filter( item => item.text.toUpperCase().includes(searchValue.toUpperCase())).map((model) =>(
              <S.ModelsSearched toggleDarkTheme={toggleDarkTheme}>
                  <S.ModelImage src={model.imgUrl}/>
                  <S.ModelText toggleDarkTheme={toggleDarkTheme}>{model.text}</S.ModelText>
                  <S.ModelButton onClick={()=> handleChangePage(`/model/${model.text}`)} toggleDarkTheme={toggleDarkTheme}>Testar modelo</S.ModelButton>
              </S.ModelsSearched>
            ))}
          </S.Models>
          <S.ModelFooter>
            <G.Paragraph color={toggleDarkTheme ? 'white': 'black'} fs='14px' cursor='pointer'>{'< 1 2 3 4 5 >'}</G.Paragraph>
          </S.ModelFooter>
        </G.Container> }} 
        footerSection={{children: 
          <G.Container  jc='center' ai='center' width='100%' height='20vh' bc={toggleDarkTheme ? 'rgba(0,0,0, 1)' : '#f5f5f5'}>
            <G.Footer>
              <G.FooterContent>
                <G.FooterAbout>
                  <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} fw='bold' fs='20px'>Sobre</G.Paragraph>
                  <G.FooterAboutFlex>
                    <G.LogoImage width='45px' height='45px' src='https://github-production-user-asset-6210df.s3.amazonaws.com/62246037/264488047-15dc838c-1428-49a2-9ad9-2bf07bedfd19.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230830T222928Z&X-Amz-Expires=300&X-Amz-Signature=eecc3aed25b7498405674acd282e1af1f6764b0c3f0fd1830cbc8f81422db170&X-Amz-SignedHeaders=host&actor_id=62246037&key_id=0&repo_id=680557063'/>
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
                <G.FooterMenus>
                  {FooterMenus.map((menu) => (
                      <G.FooterMenu>
                        <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} m='10px 0px' fw='bold' fs='16px'>{menu.title}</G.Paragraph>
                        {menu.items.map((menuItem) => (
                          <G.FooterMenuItem color={toggleDarkTheme ? 'white' : 'black'}>{menuItem}</G.FooterMenuItem>
                        ))}
                      </G.FooterMenu>
                  ))}
                </G.FooterMenus>
              </G.FooterContent>
              <G.FooterBottom bt={toggleDarkTheme ? '1px solid white' : '1px solid black'}>
                <G.Paragraph fs='14px' color={toggleDarkTheme ? 'white' : 'black'}>© Pela democratização do acesso a inteligência artificial.</G.Paragraph>
              </G.FooterBottom>
            </G.Footer>
          </G.Container> }}/>
  )

}

export default Search