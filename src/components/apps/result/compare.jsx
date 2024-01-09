import React, { useState } from 'react'
import '../../../styles/compare.scss'
import '../../../styles/resultComp.scss';
import { ReactComponent as Ethereum } from '../../../svg/ethereum.svg';
import { ReactComponent as Polygon } from '../../../svg/polygon.svg';
import { ReactComponent as Ada } from '../../../svg/ada.svg';
import { ReactComponent as Bsc } from '../../../svg/bsc.svg';
import { ReactComponent as Ripple } from '../../../svg/ripple.svg';
import { ReactComponent as Corda } from '../../../svg/corda.svg';
import { ReactComponent as Avalanche } from '../../../svg/avalanche.svg';
import { ReactComponent as Hyperledger } from '../../../svg/hyperledger.svg';
import { ReactComponent as Solana } from '../../../svg/solana.svg';

const Compare = ({results}) => {

  const titles = [
    "Business Information",
    "Participants",
    "Data Sharing",
    "Activity",
    "Business Ecosystem",
    "Development",
    "Regulation",
  ];
  const [resultsArr, setResultsArr] = useState(()=>{
    let arr = [];
    results.map((result) => {
      const newRes = [];
      Object.keys(result).sort().slice(0, 7).map((key) => {
        newRes.push(result[key]);
      })
      arr.push(newRes);
    })
    return arr;
  })

  return (
    <div className='resultComp_container'>
        <div className="compare_container">
            <h1 className='resultComp_hdr' id='hdrOne'>Compare blockchains</h1>
            <div className="compare_grid">
              <div className="compare_gridColumn">

                <div className="compare_topContainer"/>

                <div className="compare_bottomContainer">
                  {titles.map((title, i) => 
                  <div className="compare_titleContainer" key={i}>
                    <p className='compare_blockTitle'>{title}</p>
                  </div>
                  )}
                </div>
              </div>
              {resultsArr.map((arr, i) => {
                let title = results[i].dlt_solution_id.solutionName;
                let Logo = 
                    title === "Ethereum" ? Ethereum : 
                    title === "Ripple" ? Ripple :
                    title === "Avax" ? Avalanche :
                    title === "Corda" ? Corda :
                    title === "Polygon" ? Polygon :
                    title === "Bsc" ? Bsc :
                    title === "ada" ?  Ada:
                    title === "Hyperledger" ?  Hyperledger:
                    Solana;
             return <div className="compare_gridColumn" key={i}>
                <div className="compare_topContainer">
                  <div className="compare_logoContainer">
                    <Logo width={'100%'} height={'100%'}/>
                  </div>
                  <h2 className='compare_title'>
                    {results[i].dlt_solution_id.solutionName}
                  </h2>
                </div>
                <div className="compare_bottomContainer">
                  {arr.map((scoreSet, i) => 
                  <div className="compare_scoreContainer" key={i}>
                    <p className='compare_score'>{scoreSet}</p>
                  </div>
                  )}
                </div>
              </div>
              }
              )}
            </div>
        </div>
    </div>
  )
}

export default Compare;