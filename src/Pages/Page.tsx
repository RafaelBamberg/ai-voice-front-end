import TemplateLong from '../Templates/TemplateLong'

export function Page() {
  return (
    <div>
        <TemplateLong 
        footerSection={{children: <div>Footer</div>}} 
        mainSection={{ children: undefined }} 
        headerSection={{ children: undefined }}/>
    </div>
  )

}