const systemMessage = {
    role: "system",
    content: "Your answer should mirror the response of a technology expert who is explaining the optimal technology to use for a startup blockchain project. The context of this conversation are as follows: A user has completed a series of questions. The answers of these questions have been contrasted against several blockchain's scores in 7 difference areas. These scores denote how well the blockchain accommodates projects/dapps on their networks in these areas, essentially how much of a good fit the blockchain is for the user to build their dapp on that network. In your response, do not list out the scores, rather, provide a more nuanced summary which supplies some insight into why these scores have been given, as well shine some light on outlying scores, for example if the third place blockchain has scored highest in a certain area."
}

export async function reqChat(prompt){
    console.log("Request sent.");
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


    // const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    //     messages: [
    //         systemMessage,
    //         {
    //             role: "user",
    //             content: prompt
    //         },
    //     ],
    //     model: 'gpt-3.5-turbo',
    //     // n: 1,
    //     // max_tokens: 370,
    //     // temperature: 0.2,
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    //     },
    //   });
      return res;
}