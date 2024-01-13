
const systemMessage = {
    role: "system",
    content: "Your answer should mirror the response of a technology expert who is explaining the optimal technology to use for a startup blockchain project. The context of this conversation are as follows: A user has completed a series of questions. The answers of these questions have been contrasted against several blockchain's scores in 7 difference areas. These scores denote how well the blockchain accommodates projects/dapps on their networks in these areas, essentially how much of a good fit the blockchain is for the user to build their dapp on that network. In your response, do not list out the scores, rather, provide a more nuanced summary which supplies some insight into why these scores have been given, as well shine some light on outlying scores, for example if the third place blockchain has scored highest in a certain area."
}

export async function reqChat(prompt){
    let res = null;
    const apiBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
            systemMessage,
            {
                role: "user",
                content: prompt
            }
        ]
    }
    
    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify(apiBody)
    })
    .then(response => response.json())
    .then(data => res = data.choices[0].message.content)
    .catch(error => console.error(error));
    return res;
}

export const getGptSummary = async (results) => {
    let gptRes = null;
    try {
        const res = await reqChat(
            `I will tell you the scores for each category and blockchain, and I want you to give me an overview of these recommendations as a summary for the user. Note, the scores are not out of 10, they are relative to the total of the sum of the scores. These are the results: 
            1) ${results[0].dlt_solution_id.solutionName}
                - Business Information: ${results[0].block_1_score}
                , Participants: ${results[0].block_2_score}
                , Data Sharing: ${results[0].block_3_score}
                , Activity: ${results[0].block_4_score}
                , Business Ecosystem: ${results[0].block_5_score}
                , Development: ${results[0].block_6_score}
                , Regulation: ${results[0].block_7_score};  

            2) ${results[1].dlt_solution_id.solutionName}
                - Business Information: ${results[1].block_1_score}
                , Participants: ${results[1].block_2_score}
                , Data Sharing: ${results[1].block_3_score}
                , Activity: ${results[1].block_4_score}
                , Business Ecosystem: ${results[1].block_5_score}
                , Development: ${results[1].block_6_score}
                , Regulation: ${results[1].block_7_score};  

            3) ${results[2].dlt_solution_id.solutionName}
                - Business Information: ${results[2].block_1_score}
                , Participants: ${results[2].block_2_score}
                , Data Sharing: ${results[2].block_3_score}
                , Activity: ${results[2].block_4_score}
                , Business Ecosystem: ${results[2].block_5_score}
                , Development: ${results[2].block_6_score}
                , Regulation: ${results[2].block_7_score};  
            These are the scores. Please give a summary which supplies some insight into why these scores have been given, as well shine some light on outlying scores, for example if the third place blockchain has scored highest in a certain area. The blockchain with the highest sum of scores is the most recommened, in the order I have given them to you.`);
            
        gptRes = res;
        } catch (error) {
        console.error(error);      
        }
        return gptRes;
}