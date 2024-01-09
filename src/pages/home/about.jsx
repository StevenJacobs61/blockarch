import AboutHero from '../../components/home/about/aboutHero'
import AboutInfo from '../../components/home/about/aboutInfo'
import BestAt from '../../components/home/about/bestAt'
import '../../styles/about.scss'

const About = () => {
  return (
    <div className='about_container'>
      <AboutHero/>
      <AboutInfo/>
      <BestAt/>
    </div>
  )
}

export default About