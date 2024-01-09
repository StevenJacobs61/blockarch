import React from 'react'
import '../../../styles/compatible.scss';
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
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'


const Compatible = ({results}) => {
    const colors = ["#4b003c", 
                    "#690054", 
                    "#87006c", 
                    "#a50084", 
                    "#c3009c",
                    "#e100b4",
                    "#ff00cc",
                    "#ff1ed2",
                    "#ff3cd8"
                ];

    const data = {
        labels: [],
        // results.map((result) => 
                // result.dlt_solution_id.solutionName),
        datasets:[{
            label: "Compatibility",
            data: results.map((result) => result.total),
            backgroundColor: colors
        }]
    }

  return (
    <div className="resultComp_container">
        <h1 className='resultComp_hdr'>Compatible</h1>
        <div className='compatible_container'>
            <div className="compatible_left">
                <h1 className='compatible_hdr'>Most compatible blockchain:</h1>
                <h2 className='compatible_resultTitle'>{results[0].dlt_solution_id.solutionName}</h2>
                <div className="compatible_chartContainer">
                    <Pie data={data}/>
                </div>
            </div>
            <div className="compatible_right">
                <div className="compatible_hdrContainer">
                    <h2 className='compatible_subHdr'>Position</h2>
                    <h2 className='compatible_subHdr'>Blockchain</h2>
                    <h2 className='compatible_subHdr'>Score</h2>
                </div>
                <div className="compatible_contentContainer">
            {results.slice(0, 3).map((result, i) =>{
                let title = result.dlt_solution_id.solutionName;
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
                  return  <div className="compatible_content" key={i}>
                        <h3 className='compatible_contentHdr'>
                            {i === 0 ? "1st" : i == 1 ? "2nd" : "3rd"}
                        </h3>
                        <div className='compatible_blockchain'>
                            <div className='compatible_logoContainer'>
                                <Logo width={'100%'} height={'100%'}/>
                            </div>
                            <h3 className='compatible_blockchainTitle'
                                style={{color: colors[i]}}
                            >{title}</h3>
                        </div>
                        <div className='compatible_contentScoreContainer'>
                        <div className='compatible_contentScore'>
                            <h2 className='compatible_score'>{result.total}</h2>
                        </div>
                        </div>
                    </div>
            })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compatible