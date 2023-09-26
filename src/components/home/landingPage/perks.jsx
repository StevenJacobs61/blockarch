import '../../../styles/perks.scss'
import CardGrid from '../../cardGrid'

const Perks = () => {
  return (
    <div className='perks_container'>
        <h1 className='gettingStarted_hdr'>The process</h1>
        <h2 className='gettingStarted_subtext'>Gain Value From Day One</h2>
        <div className='perks_gridContainer'>
            <CardGrid/>
        </div>
    </div>
  )
}

export default Perks