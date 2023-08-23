import Template from '../Templates/Template'

export function Page() {
  return (
    <div>
        <Template 
        footerSection={{children: <div>Footer</div>}} 
        mainSection={{ children: undefined }} 
        headerSection={{ children: undefined }}/>
    </div>
  )

}