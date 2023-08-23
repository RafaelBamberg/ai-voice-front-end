import * as T from './types'
import  FooterSection  from '../Components/Sections/FooterSection/FooterSection'
import HeaderSection from '../Components/Sections/HeaderSection/HeaderSection'
import MainSection from '../Components/Sections/MainSection/MainSection'



export default function Template({footerSection, headerSection, mainSection, backgroundColor}: T.TemplateProps) {
  return (
    <div style={{ width: '100vw', height: '100vh', display:'flex', flexDirection:'column', background: backgroundColor}}>
        <HeaderSection {...headerSection}/>
        <MainSection {...mainSection}/>
        <FooterSection {...footerSection}/>
    </div>
  )
}