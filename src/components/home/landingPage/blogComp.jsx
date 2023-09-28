import './../../../styles/blogComp.scss'
import Img from '../../../img/ai-arch.jpg'
import { useNavigate } from 'react-router-dom'

const BlogComp = () => {
  const navigate = useNavigate()
  return (
    <div className='blogComp_container'>
      <h1 className='gettingStarted_hdr'>Our Blog</h1>
      <h2 className='gettingStarted_subtext'>Latest from Blockarch</h2>
      <div className="blogComp_blogsContainer">
        <div className='blogComp_blogContainer'>
          <div className="blogComp_imgContainer" onClick={()=>navigate('/blog') + window.scrollTo(0, 0)}>
            <img src={Img}
            width='100%'
            height='100%'
            alt='im'
            style={{
              objectFit: 'cover',
            }}/>
          </div>
            <h3 className='blogComp_title'>Blog Title</h3>
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
            <h3 className='blogComp_title'>Blog Title</h3>
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
            <h3 className='blogComp_title'>Blog Title</h3>
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
            <h3 className='blogComp_title'>Blog Title</h3>
        </div>
      </div>
    </div>
  )
}

export default BlogComp;