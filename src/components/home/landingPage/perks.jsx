import '../../../styles/perks.scss'
import CardGrid from '../../cardGrid'

const Perks = () => {
  return (
    <div className='perks_container'>
      <div className="perks_topContainer">
        <h1 className='gettingStarted_hdr'>The process</h1>
        <h2 className='gettingStarted_subtext'>Gain Value From Day One</h2>
      </div>
      <div className="perks_contentContainer">
        <div className='perks_gridContainer'>
            <CardGrid/>
        </div>
      </div>
    </div>
  )
}

export default Perks