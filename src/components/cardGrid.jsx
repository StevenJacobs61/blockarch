import '../styles/cardGrid.scss'
import GridCard from './gridCard'
import { ReactComponent as Pen } from '../svg/pen.svg'
import { ReactComponent as Rocket } from '../svg/Rocket.svg'
import { ReactComponent as Tick } from '../svg/tick.svg'
import { ReactComponent as Scale } from '../svg/scale.svg'

const CardGrid = () => {
  return (
    <div className='cardGrid_container'>
      <GridCard icon={<Pen width={'100%'} height={'100%'}/>} hdr={'Prototype'} text={"Show your concept's viability before investing in technical resources."}/>
      <GridCard icon={<Rocket width={'100%'} height={'100%'} fill='#ed00be'/>} hdr={'Launch'} text={"Develop Web3 platforms and internal tools within hours rather than months."}/>
      <GridCard icon={<Tick width={'100%'} height={'100%'} fill='#ed00be'/>} hdr={'Iterate'} text={"Empower any team member to make modifcations, not just developers."}/>
      <GridCard icon={<Scale width={'100%'} height={'100%'} fill='#ed00be'/>} hdr={'Scale'} text={"Gain traction and grow without worrying about infrastructure."}/>
    </div>
  )
}

export default CardGrid