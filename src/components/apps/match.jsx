import React, { useEffect, useState } from 'react'
import '../../styles/match.scss'
import { getById } from '../../functions/userAPI';
import { ReactComponent as Ethereum } from '../../svg/ethereum.svg';
import { ReactComponent as Polygon } from '../../svg/polygon.svg';
import { ReactComponent as Ada } from '../../svg/ada.svg';
import { ReactComponent as Bsc } from '../../svg/bsc.svg';
import { ReactComponent as Ripple } from '../../svg/ripple.svg';
import { ReactComponent as Corda } from '../../svg/corda.svg';
import { ReactComponent as Avalanche } from '../../svg/avalanche.svg';
import { ReactComponent as Hyperledger } from '../../svg/hyperledger.svg';
import { ReactComponent as Solana } from '../../svg/solana.svg';
import { naviagteToResult } from '../../functions/utility';


const Match = ({project}) => {

    const [result, setResult] = useState();

    useEffect(()=>{
        async function getResults (project){
            const resultsRes = await getById(project.id, '/project-blockchain-result');
            resultsRes.forEach((result)=> calculateBlockTotal(result))
            const topRes = resultsRes.sort((a, b) => b.total - a.total)[0];
            setResult(topRes);
        }
        function calculateBlockTotal(result){
            let total = 
            result.block_1_score + 
            result.block_2_score + 
            result.block_3_score + 
            result.block_4_score + 
            result.block_5_score + 
            result.block_6_score + 
            result.block_7_score; 
            result.total = total;
        }
        getResults(project);
    },[])

    let title = result?.dlt_solution_id.solutionName;
    let Logo = title === "Ethereum" ? Ethereum : 
    title === "Ripple" ? Ripple :
    title === "Avax" ? Avalanche :
    title === "Corda" ? Corda :
    title === "Polygon" ? Polygon :
    title === "Bsc" ? Bsc :
    title === "ada" ?  Ada:
    title === "Hyperledger" ?  Hyperledger:
    Solana;

  return (
    <div className='match_container' 
    onClick={async()=> await naviagteToResult(project)}
    >
        <div className="match_topContainer">
            <div className="match_left">
                <div className="match_logoContainer">
                    <Logo width={'100%'} height={'100%'}/>
                </div>
            </div>
            <div className="match_right">
                <h1 className='match_hdr'>{project.projectName}</h1>
                <p className='match_text'>Created: {result?.created_date_time[2]}/{result?.created_date_time[1]}/{result?.created_date_time[0]}</p>
            </div>
        </div>
        <div className="match_bottomContainer">
            <button className='match_button'
            >View match</button>
        </div>
    </div>
  )
}

export default Match