//extraccion de permisos
require('dotenv').config();
const axios = require('axios')
const consultaDolar = require("consulta-dolar-venezuela");
const {Client, GatewayIntentBits}= require('discord.js');
const client = new Client(
    {intents:
        [GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
        ]
        
})

client.on('ready',()=>{
    console.log('El BOT esta listo')
})

client.on('messageCreate', async(message)=>{
    if (message.content==='hola'){
        message.reply({
            content:'Bienvenido a nuestro canal'
        })
    }else if(message.content==='quote'){
       let resp= await axios.get('https://api.quotable.io/random');
       //console.log(resp)
        const quote = resp.data.content;
        
        message.reply({
            content: quote
        })

    }else if (message.content==='dolar'){
        let respuesta = await consultaDolar.getMonitor("EnParaleloVzla", "price", false)
        .then(precio =>{message.reply({
            content:precio
        })
            
        });
    }
    }

)

client.login(process.env.BOT_ID);