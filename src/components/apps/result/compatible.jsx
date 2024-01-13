import React from 'react'
import '../../../styles/compatible.scss';
import '../../../styles/resultComp.scss';
import { ReactComponent as Ethereum } from '../../../svg/ethereum.svg';
import { ReactComponent as Polygon } from '../../../svg/polygon.svg';
import { ReactComponent as Near } from '../../../svg/near.svg';
import { ReactComponent as Bsc } from '../../../svg/bsc.svg';
import { ReactComponent as Ripple } from '../../../svg/ripple.svg';
import { ReactComponent as Corda } from '../../../svg/corda.svg';
import { ReactComponent as Avalanche } from '../../../svg/avalanche.svg';
import { ReactComponent as Hyperledger } from '../../../svg/hyperledger.svg';
import { ReactComponent as Solana } from '../../../svg/solana.svg';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'


const Compatible = ({results}) => {
    const colors = [
        "#ff3cd8",
        "#c3009c",
        "#4b003c", 
                ];

    const data = {
        labels: [],
        // results.map((result) => 
                // result.dlt_solution_id.solutionName),
        datasets:[{
            data: results.slice(0, 3).map((result) => result.total),
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
                title === "Avalanche" ? Avalanche :
                title === "Corda" ? Corda :
                title === "Polygon" ? Polygon :
                title === "Binance Smart Chain" ? Bsc :
                title === "Near" ?  Near:
                title === "Hyperledger Fabric" ?  Hyperledger:
                Solana;
                  return  <div className="compatible_content" key={i}>
                        <h3 className='compatible_contentHdr'
                            style={{color: 
                                i === 0 ? "#ff3cd8" : 
                                i === 1 ? "#c3009c" : 
                                i === 2 ? "#4b003c" : 
                                        "#101010"}}>
                            {i === 0 ? "1st" : i == 1 ? "2nd" : "3rd"}
                        </h3>
                        <div className='compatible_blockchain'>
                            <div className='compatible_logoContainer'
                                id={
                                    title === "Near" ? "near" : 
                                    title === "Solana" ? "solana" : 
                                    title === "Binance Smart Chain" ? "bsc" : 
                                    title === "Hyperledger Fabric" ? "hl" : 
                                    ""}>
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