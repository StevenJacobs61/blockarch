import React from 'react'

const BlogCard = ({Img, hdr, textOne, textTwo, linkOne, linkTwo}) => {
  return (
    <div className='blogGrid_card'>
        <div className='blogGrid_imgContainer'>
            <img src={Img} alt="im" />
        </div>
        <div className='blogGrid_contentsContainer'>
            <h1 className='blogGrid_hdr'>
                {hdr}
            </h1>
            <p className='blogGrid_text'>{textOne}</p>
            <a href={linkOne} className='blogGrid_link'>{linkOne}</a>
            <p className='blogGrid_text'>{textTwo}</p>
            <a href={linkTwo} className='blogGrid_link'>{linkTwo}</a>
        </div>
    </div>
  )
}

export default BlogCard