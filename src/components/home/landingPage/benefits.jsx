import '../../../styles/benefits.scss'

const Benefits = () => {
  return (
    <div className='benefits_container'>
      <h1 className='benefits_hdr'>The cheapest and easiest way to architect blockchain applications.</h1>
      <div className='benefits_cardsContainer'>
      <div className='benefits_card'>
        <h2 className='benefits_cardHdr'>Cost-Effective Development</h2>
        <p className='benefits_cardText'>Blockarch simplifes complexities and removes heavy lifting in the early stages, where limited resources tend to be drained.</p>
      </div>
      <div className='benefits_card'>
        <h2 className='benefits_cardHdr'>Reduce Knowledge Gaps</h2>
        <p className='benefits_cardText'>We empower non-technical founders by giving them access to personalised tools and resources that help their businesses become a reality.</p>
      </div>
      <div className='benefits_card'>
        <h2 className='benefits_cardHdr'>Accelerate Development</h2>
        <p className='benefits_cardText'>Rapid end-to-end design, development and deployment cycles by simplifying the early design and decision stages.</p>
      </div>
      </div>
    </div>
  )
}

export default Benefits