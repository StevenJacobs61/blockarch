import React, { useState } from 'react'
import '../../../styles/fullReport.scss'
import '../../../styles/resultComp.scss'
import { reqChat } from '../../../functions/gpt';

const FullReport = ({results}) => {

  const [gptResponse, setGptResponse] = useState();

  const getGptResponse = async () => {
    try {
      const res = await reqChat("I will tell you the scores for each category and blockchain, and I want you to give me an overview of these recommendations as a summary for the user. Note, the scores are not out of 10, they are relative to the total of the sum of the scores. These are the results: 1) Ripple - Business Information: 8, Participants: 15, Data Sharing: 2, Activity: 6, Business Ecosystem: 0, Development: 2, Regulation: 1;  2) Avalanche - Business Information: 7, Participants: 7, Data Sharing: 2, Activity: 6, Business Ecosystem: 2, Development: 2, Regulation: 3;  3) Ethereum - Business Information: 4, Participants: 7, Data Sharing: 2, Activity: 6, Business Ecosystem: 0, Development: 2, Regulation: 0. These are the scores. Please give a summary which supplies some insight into why these scores have been given, as well shine some light on outlying scores, for example if the third place blockchain has scored highest in a certain area. The blockchain with the highest sum of scores is the most recommened, in the order i hae given them to you.");
      setGptResponse(res);
      console.log(res);
    } catch (error) {
      console.error(error);      
    }
  }

  return (
    <div className='resultComp_container'>
        <div className="fullReport_container">
            <h1 className='resultComp_hdr' onClick={getGptResponse}>Full Report</h1>
            <div className='fullReport_contentContainer'>
            <p className='fullReport_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at sit illo in necessitatibus ullam inventore doloribus ex vitae harum nobis aut esse, laboriosam provident quidem odit quae amet culpa dolores totam perferendis ipsum porro distinctio. Odio, recusandae nobis, sed maxime soluta labore quos amet, molestiae blanditiis magnam quibusdam animi cumque consequuntur. Placeat, similique, architecto perferendis quisquam quam repellat, iste dolor explicabo dolorum fuga dicta quas tenetur reprehenderit? Aut unde illo iste a iusto libero voluptate, eligendi corporis voluptatem in ex odio sequi animi nam maiores repellat. Ducimus excepturi officia totam delectus quisquam? Assumenda amet ullam accusantium quo inventore repellendus. Earum hic provident est molestiae sunt aperiam cum optio nulla ullam rem quo aliquid itaque assumenda error in natus, quos nihil fuga ad sequi amet saepe dignissimos laudantium eveniet. Dolores esse consequatur quod blanditiis rem expedita a suscipit odit, quaerat perspiciatis architecto sequi laboriosam iusto adipisci aperiam dolorum necessitatibus saepe. Consectetur adipisci, accusantium deserunt exercitationem beatae dolore possimus repellendus blanditiis voluptatem debitis quibusdam placeat architecto tenetur, officia facere enim delectus alias sed suscipit. Veniam, voluptates inventore necessitatibus mollitia suscipit commodi unde aliquid eaque tempora repellat, minima rerum iste amet similique officia libero nam dolorem dicta rem maxime. Incidunt, corrupti! Hic aperiam, quasi natus, exercitationem deleniti distinctio dolor voluptates esse possimus, dolores accusamus. Tenetur commodi maxime delectus laboriosam sint cum. Delectus modi, ex eveniet inventore eligendi numquam quis nesciunt velit. Veritatis ullam dolorum dolore iure expedita facilis corrupti commodi provident laudantium accusantium, excepturi eius ab culpa eaque ipsa, voluptates illum voluptas officiis adipisci voluptate repudiandae delectus dignissimos? Dolores officiis dolorem cum architecto. Sunt temporibus optio reiciendis, ipsam obcaecati molestiae quaerat perferendis ex eius necessitatibus eligendi, itaque error nemo tempore, labore tempora vel nobis. Facilis itaque odit nostrum, odio maxime temporibus aspernatur pariatur et, quos ipsum ex nobis quae, recusandae voluptates. Eaque debitis at eius, suscipit nesciunt provident impedit corporis aspernatur autem earum. Ad modi porro assumenda minus ut suscipit impedit, reprehenderit libero odio et voluptatem dicta. Consequuntur quae et magnam architecto ipsa quam neque reiciendis modi error, cumque inventore aliquam iste soluta eligendi molestiae! Optio autem harum consequatur veniam, et recusandae quia repellat provident eos nesciunt pariatur? Similique accusamus quis sunt sed in labore distinctio ipsa placeat, suscipit modi saepe tenetur perferendis voluptatem quasi tempore adipisci sint voluptate accusantium! Libero perferendis laborum repellendus et nostrum. Odio, cumque? Exercitationem, vitae repellat, quibusdam praesentium voluptas ab mollitia accusamus quam eum, ratione ex minima.</p>
            </div>
        </div>
    </div>
  )
}

export default FullReport