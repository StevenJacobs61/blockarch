import AboutHero from '../../components/home/about/aboutHero'
import AboutInfo from '../../components/home/about/aboutInfo'
import BestAt from '../../components/home/about/bestAt'
import Separator from '../../components/separator'
import '../../styles/about.scss'

const About = () => {
  return (
    <div className='about_container'>
      <AboutHero/>
      {/* <Separator/> */}
      <AboutInfo/>
      {/* <Separator/> */}
      <BestAt/>
    </div>
  )
}

export default About