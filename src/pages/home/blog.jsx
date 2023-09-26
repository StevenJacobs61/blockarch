import BlogCard from '../../components/home/blog/blogCard'
import '../../styles/blog.scss'
import Img from '../../img/ai-arch.jpg'
import Separator from '../../components/separator'
import AudioCard from '../../components/home/blog/audioCard'

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
      hdr: 'Network Syncs',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
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
      hdr: 'Network Syncs',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    },
    {
      img: Img,
      hdr: 'Network Syncs',
      textOne: 'Get the latest network syncs news and updates!',
      linkOne: 'www.google.com',
      textTwo: 'We discuss the changes which have been taking place.',
      linkTwo: 'www.youtube.com',
    }
  ]

  return (
    <div className='blog_container'>
      <h1 className='blog_hdr'>Blockarch Blog</h1>
      <p className='blog_subtext'>Keep up-to-date with the latest Blockarch news</p>
      <div className='blogGrid_container'>
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
      <Separator/>
      <div className='blogAudio_container'>
          <h2 className='blogAudio_hdr'>Catch up with the BlockCast</h2>
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
      <Separator/>
    </div>
  )
}

export default Blog