import BlogCard from '../../components/home/blog/blogCard'
import '../../styles/blog.scss'
import Img from '../../img/ai-arch.jpg'
import Separator from '../../components/separator'
import AudioCard from '../../components/home/blog/audioCard'
import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Arrow } from '../../svg/arrow.svg'
import { ReactComponent as RadioChecked } from '../../svg/radio-checked.svg'
import { ReactComponent as RadioUnchecked } from '../../svg/radio-unchecked.svg'

const Blog = () => {

  
  const data = [
    {
      img: Img,
      hdr: 'Network Syncs',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs2',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs3',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs4',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs5',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs6',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs7',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs8',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs9',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    }
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const blogGridRef = useRef(null);

  const updateIndex = (newIndex) => {
    if(newIndex < 0){
      newIndex = 0;
    } else{
      if(window.innerWidth < 769 && newIndex >= data.length){
        newIndex = data.length -1;
      }
      if(window.innerWidth >= 769 && newIndex >= data.length/2){
        newIndex = Math.floor((data.length - 1) / 2);
      }
      if(window.innerWidth >= 1024 && newIndex >= data.length/3){
        newIndex = Math.floor((data.length - 1) / 3);
      }
      if(window.innerWidth >= 1200 && newIndex >= data.length/4){
        newIndex = Math.floor((data.length -1) / 4);
      }
    } 
    setActiveIndex(newIndex);
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [displayLength, setDisplayLength] = useState(
    screenWidth < 769 ? data.length 
    : screenWidth >=769 && screenWidth < 1024 ? Math.ceil(data.length / 2) 
    : 
    // screenWidth >= 1024 ?
     Math.ceil(data.length / 3)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setDisplayLength(()=>window.innerWidth < 769 ? data.length 
        : window.innerWidth >=769 && window.innerWidth < 1024 ? Math.ceil(data.length / 2) 
        : 
        // screenWidth >= 1024 ?)
        Math.ceil(data.length / 3))
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='blog_container'>
      <h1 className='blog_hdr'>Blockarch Blog</h1>
      <p className='blog_subtext'>Keep up-to-date with Blockarch's latest expert insights and resources</p>
      <div 
        className='blogGrid_container' 
        >
          <div 
            className="blogGrid_innerContainer"
            ref={blogGridRef}
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
        {data.map((card, i) => 
        <BlogCard 
          key={i} 
          Img={card.img} 
          hdr={card.hdr} 
          textOne={card.textOne} 
          linkOne={card.linkOne}
          textTwo={card.textTwo}
          linkTwo={card.linkTwo}/>
        )}
          </div>
      </div>
          <div className='blogGrid_buttonsContainer'>
            <div className='blogGrid_iconContainer'>
            <Arrow 
            width='100%' 
            height='100%'
            onClick={()=>updateIndex(activeIndex - 1)}/>
            </div>
            <div className='blogGrid_radioContainer'>
              {data.slice(0, displayLength).map((item, i)=> 
              <div key={i} className='blogGrid_radioIconContainer' onClick={()=>setActiveIndex(i)}>
                {i === activeIndex ? <RadioChecked width='100%' height='100%'/> : <RadioUnchecked width='100%' height='100%'/>}
              </div>
              )}
            </div>
            <div className='blogGrid_iconContainer'>
            <Arrow 
              width='100%' 
              height='100%' 
              style={{transform: 'rotate(180deg)'}}
              onClick={()=>updateIndex(activeIndex + 1)}
            />
            </div>
          </div>
      <Separator/>
      <div className='blogAudio_container'>
        <div className="blogAudio_topContainer">
          <h2 className='blogAudio_hdr'>Catch up with the BlockCast</h2>
        </div>
          <div className='blogAudio_audiosContainer'>
            <AudioCard title={'episode 1'}/>
            <AudioCard title={'episode 1'}/>
            <AudioCard title={'episode 1'}/>
            <AudioCard title={'episode 1'}/>
            <AudioCard title={'episode 1'}/>
            <AudioCard title={'episode 1'}/>
            <AudioCard title={'episode 1'}/>
          </div>
      </div>
    </div>
  )
}

export default Blog