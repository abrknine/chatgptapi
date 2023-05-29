const PORT =8000;
const  express =require('express')
const  cors =require('cors')
const app =express();
app.use(express.json())
app.use(cors())

const API_KEY="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"

app.post('/completions', async (req,res)=>{ 
    const options ={
        method:"POST",
        headers:{
            "Authorization": `Bearer ${API_KEY}`,
            "Content -Type":"application/json"
        },
        body: JSON.stringify({
            
                 model:"gpt-3.5-turbo",
                 prompt:[{role:"user", content: "how are you"}],
                 max_tokens:100,
        })
    }
    try{
  const response= await  fetch('https://api.openai.com/v1/chat/completions', options)
           const  data = await response.json()
           console.log(data);
           //send data from port 8000 to 3000 using below line
           res.send(data)
    }
    catch(error){
               console.log(error);
    }
})

app.listen(PORT,()=>console.log('Your server is running on PORT'+PORT))
