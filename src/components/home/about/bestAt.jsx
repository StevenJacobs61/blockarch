import '../../../styles/bestAt.scss'
import '../../../styles/gridSix.scss'
import GridSixCard from '../../gridSixCard'
import { ReactComponent as Tool } from '../../../svg/tool.svg'
import { ReactComponent as Trusted } from '../../../svg/trusted.svg'
import { ReactComponent as Integration } from '../../../svg/integration.svg'
import { ReactComponent as Interface } from '../../../svg/interface.svg'
import { ReactComponent as Innovation } from '../../../svg/innovation.svg'
import { ReactComponent as Design } from '../../../svg/design.svg'

const BestAt = () => {

    const data = [
        {
            icon: Tool,
            hdr: "User Friendly Tool",
            text: 'Blockarch is a user-friendly design tools to create and customize blockchain applications.'
        },
        {
            icon: Innovation,
            hdr: "Empower Innovation",
            text: 'We want to empower entrepreneurs to create groundbreaking applications. Supportive community for guidance and collaboration.'
        },
        {
            icon: Design,
            hdr: "Simple Web3 Design",
            text: 'We provide tailored use-cases and the blockchain application design frameworks for founders of all technological expertise levels.'
        },
        {
            icon: Trusted,
            hdr: "Trusted Partnership",
            text: 'All of our services come from layers of expertise, where we will act as your guiding partner in harnessing Web3 solutions throughout the end-to-end journey.'
        },
        {
            icon: Integration,
            hdr: "Seamless Integration",
            text: 'We simplify your Web3 digital transformation for you with step-by-step tutorials and resources. We take into account your current business design, and future goals.'
        },
        {
            icon: Interface,
            hdr: "Intuitive Interface",
            text: 'No extensive coding knowledge is required.'
        },
    ]

  return (
    <div className='bestAt_container'>
        <h2 className='bestAt_subhdr'>Our promise to founders</h2>
        <h1 className='about_hdr'>
            What We Are Best At
        </h1>
        <div className='bestAt_gridContainer'>
        <div className='gridSix_container'>
        {data.map((card, i) => 
            <GridSixCard key={i} Icon={card.icon} hdr={card.hdr} text={card.text}/>)}
        </div>
        </div>
    </div>
  )
}

export default BestAt