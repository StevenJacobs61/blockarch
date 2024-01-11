import './../../../styles/blogComp.scss'
import Img from '../../../img/ai-arch.jpg'
import { useNavigate } from 'react-router-dom'

const BlogComp = () => {
  const navigate = useNavigate()
  return (
    <div className='blogComp_container'>
      <h1 className='gettingStarted_hdr'>Our Blog</h1>
      <h2 className='gettingStarted_subtext' style={{color: "#FF06D7"}}>Latest from Blockarch</h2>
      <div className="blogComp_blogsContainer">
        <div className='blogComp_blogContainer' onClick={()=>navigate('/blog') + window.scrollTo(0, 0)}>
          <div className="blogComp_imgContainer">
            <img src={Img}
            width='100%'
            height='100%'
            alt='im'
            style={{
              objectFit: 'cover',
            }}/>
          </div>
            <h3 className='blogComp_title'>Blockchain Trilemma</h3>
            <button className="blogComp_button">Read</button>
        </div>
        <div className='blogComp_blogContainer' onClick={()=>navigate('/blog') + window.scrollTo(0, 0)}>
          <div className="blogComp_imgContainer">
            <img src={Img}
            width='100%'
            height='100%'
            alt='im'
            style={{
              objectFit: 'cover',
            }}/>
          </div>
            <h3 className='blogComp_title'>Building an ecosystem</h3>
            <button className="blogComp_button">Read</button>
        </div>
        <div className='blogComp_blogContainer' onClick={()=>navigate('/blog') + window.scrollTo(0, 0)}>
          <div className="blogComp_imgContainer">
            <img src={Img}
            width='100%'
            height='100%'
            alt='im'
            style={{
              objectFit: 'cover',
            }}/>
          </div>
            <h3 className='blogComp_title'>public vs private</h3>
            <button className="blogComp_button">Read</button>
        </div>
        <div className='blogComp_blogContainer'>
          <div className="blogComp_imgContainer">
            <img src={Img}
            width='100%'
            height='100%'
            alt='im'
            style={{
              objectFit: 'cover',
            }}/>
          </div>
            <h3 className='blogComp_title'>Scaling solutions</h3>
            <button className="blogComp_button">Read</button>
        </div>
      </div>
    </div>
  )
}

export default BlogComp;