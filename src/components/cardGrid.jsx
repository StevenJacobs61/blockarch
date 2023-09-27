import '../styles/cardGrid.scss'
import GridCard from './gridCard'
import { ReactComponent as Tool } from '../svg/tool.svg'
import { ReactComponent as Integration } from '../svg/integration.svg'
import { ReactComponent as Design } from '../svg/design.svg'
import { ReactComponent as Interface } from '../svg/interface.svg'

const CardGrid = () => {
  return (
    <div className='cardGrid_container'>
      <GridCard icon={<Tool width={'100%'} height={'100%'}/>} hdr={'Prototype'} text={"Show your concept's viability before investing in technical resources."}/>
      <GridCard icon={<Integration width={'100%'} height={'100%'} fill='#ed00be'/>} hdr={'Launch'} text={"Develop Web3 platforms and internal tools within hours rather than months."}/>
      <GridCard icon={<Design width={'100%'} height={'100%'} fill='#ed00be'/>} hdr={'Iterate'} text={"Empower any team member to make modifcations, not just developers."}/>
      <GridCard icon={<Interface width={'100%'} height={'100%'} fill='#ed00be'/>} hdr={'Scale'} text={"Gain traction and grow without worrying about infrastructure."}/>
    </div>
  )
}

export default CardGrid