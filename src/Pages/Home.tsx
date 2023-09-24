import Template from '../Templates/TemplateLong'
import * as G from '../GlobalStyles/styles'
import * as H from '../PagesStyles/Home/styles'
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { getThemeDark, setThemeDark } from '../https/Cookies';
import { LoadingPage } from '../Components/Loadings/LoadingPage/LoadingPage';


const Home = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [toggleInputFocus, setToggleInputFocus] = useState(false)
  const [loading, setLoading] = useState(true)
  const [toggleDarkTheme, setToggleDarkTheme] = useState(getThemeDark())
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const DateNow = new Date()

  const handleSetToggleDarkTheme = () => { setToggleDarkTheme(!toggleDarkTheme), setThemeDark(!toggleDarkTheme) }
  const handleSearchValue = (e:any) => {  setSearchValue(e.target.value) } 
  const handleChangePage = (Page: string) => { navigate(Page), window.scrollTo(0,0) }

  const Plans = [{ text:'5/5 ~ 0.1e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'}
  ,{ text:'10/10 ~ 0.2e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'15/15 ~ 0.2e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'20/20 ~ 0.2e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'25/25 ~ 0.2e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'30/30 ~ 0.2e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'40/40 ~ 0.5e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'50/50 ~ 0.5e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'60/60 ~ 0.5e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'},
  { text:'70/70 ~ 1e/h', imgUrl: 'https://github.com/Diogolima-creator/frontendCurso/assets/62246037/5d688ac9-1bfc-4b09-99d9-4e0d394bbc71'}]

  const Models = [{ 
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

  const FooterMenus = [
  { title:'ACESSO RÁPIDO', items: ['Central de Ajuda', '', '']}, 
  { title:'COMO FUNCIONA', items: ['Como funciona?', '', '']}, 
  { title:'INSTITUCIONAL', items: ['Termos de uso', 'Política de privacidade', '']}]

  useEffect(() => {
    if(getThemeDark() === undefined){
      setThemeDark(false)
    }
  }, [])
  
  setTimeout((()=>setLoading(false)), 5000)

  return (
    !loading ? 
        <Template
          bc={toggleDarkTheme ? 'grey' : '#f5f5f5'}
          headerSection={{ children: 
          <G.Container z='100' position='fixed' jc='center' ai='center' bc={toggleDarkTheme ? 'rgba(0,0,0, 1)' : '#f5f5f5'} width='100vw' height='85px'>
            <G.Header jc='space-between' ai='center'>
              <G.HeaderLogo>
                <G.LogoImage width='60px' height='60px' src='./icon.svg' />
                <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} cursor='default' fw='200' ff='Raleway, sans-serif' fs='38px' m='0 20px'>VoiceIA</G.Paragraph>
              </G.HeaderLogo>
              <G.HeaderSearchModels toggleDarkTheme={toggleDarkTheme} toggleInputFocus={toggleInputFocus} className='Search'>
                <G.Icon width='20px' height='20px' m='0px' src='https://github.com/Diogolima-creator/EnsinaGame/assets/62246037/9e3d1b6e-d18b-450b-8745-77af0f59a46a'/>
              <G.HeaderForms onSubmit={()=> handleChangePage(`/search/${searchValue}`)}>
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
          <G.Container z='99' fd='column' mt='85px' ai='center' jc='start' bc={toggleDarkTheme ? 'rgba(0,0,0, .85)' : 'radial-gradient(ellipse at center, rgba(255,255,255,1), rgba(0,0,0,0.15));'} width='100%' height='86%'>
            <H.SubHeader toggleDarkTheme={toggleDarkTheme}>
              <G.Paragraph color={toggleDarkTheme ? 'white' : 'black'} m='8px 0px 0px 0px' fs='38px' fw='bold' ff='Raleway'>
                <H.Span>[</H.Span>Experimente nossos modelos <H.Span>]</H.Span>
              </G.Paragraph>
              <G.Paragraph m='0px' fs='18px' fw='400' ff='Raleway' color='grey'>
                aprenda como usar nosso sistema de criação de audio
              </G.Paragraph>
              <G.Button m='15px 0px 0px 0px' className='ButtonSubHeader' bc={toggleDarkTheme ? 'rgba(0,0,0, .9)' : 'white'} 
              p=' 10px 20px' border='2px solid black' br='15px' cursor='pointer' ff='Raleway' fs='18px' color={toggleDarkTheme ? 'white' : 'black'} >
                Como funciona?
              </G.Button>
            </H.SubHeader>
            <H.Plans>
              <H.SubTitle toggleDarkTheme={toggleDarkTheme}>Conheça nossos Planos</H.SubTitle>
              <H.PlanCardList>
                {Plans.map((plan:{ text: string, imgUrl:string}) => (
                <H.PlanCard toggleDarkTheme={toggleDarkTheme}>
                  <H.PlanImage src={plan.imgUrl}/>
                  <H.PlanText toggleDarkTheme={toggleDarkTheme}>{plan.text}</H.PlanText>
                </H.PlanCard>
              ))}
              </H.PlanCardList>
            </H.Plans>
            <H.Models>
              <H.SubTitle toggleDarkTheme={toggleDarkTheme}>Modelos em destaque</H.SubTitle>
              <H.ModelCardList>
                {Models.slice(0,11).map((model:{ text: string, imgUrl:string}) => (
                <H.ModelCard toggleDarkTheme={toggleDarkTheme}>
                  <H.ModelImage src={model.imgUrl}/>
                  <H.ModelText toggleDarkTheme={toggleDarkTheme}>{model.text}</H.ModelText>
                  <H.ModelButton onClick={()=> handleChangePage(`/model/${model.text}`)} toggleDarkTheme={toggleDarkTheme}>Testar modelo</H.ModelButton>
                </H.ModelCard>
              ))}
                <H.ModelCard onClick={()=> handleChangePage(`/search/`)} toggleDarkTheme={toggleDarkTheme}>
                  <G.Paragraph fs='24px' color={toggleDarkTheme ? 'white' : 'black'}>VER MAIS MODELOS</G.Paragraph>
                  <G.Icon transform='rotate(180deg);' width='55px' height='65px' 
                  src={toggleDarkTheme ? 'https://github-production-user-asset-6210df.s3.amazonaws.com/62246037/264500814-c65a8a1e-0f5a-45fc-a269-48719cd8fae5.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230831T003757Z&X-Amz-Expires=300&X-Amz-Signature=f02a35072079957eecbc548635bb3ad04c54658ddaa2ef1f7fa43b31c27bc270&X-Amz-SignedHeaders=host&actor_id=62246037&key_id=0&repo_id=682372741' : 'https://github-production-user-asset-6210df.s3.amazonaws.com/62246037/264500818-de7f5182-c972-4158-a7c8-7af97021744c.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230831T001642Z&X-Amz-Expires=300&X-Amz-Signature=2637580f1aa9cab3a4f5695fac128d5ced436be6ea50f6a3140133a9cf57a328&X-Amz-SignedHeaders=host&actor_id=62246037&key_id=0&repo_id=682372741'} />
                </H.ModelCard>
              </H.ModelCardList>
            </H.Models>
          </G.Container> }} 
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
    : <LoadingPage />
  )
}

export default Home