import React from 'react'
import * as T from './types'
import  FooterSection  from '../Components/Sections/FooterSection/FooterSection'
import HeaderSection from '../Components/Sections/HeaderSection/HeaderSection'
import MainSection from '../Components/Sections/MainSection/MainSection'



export default function Template({footerSection, headerSection, mainSection}: T.TemplateProps) {
  return (
    <div>
        <HeaderSection {...headerSection}/>
        <MainSection {...mainSection}/>
        <FooterSection {...footerSection}/>
    </div>
  )
}