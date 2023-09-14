<p style="text-align: center;">
# Dolar Today for NODE.JS 

##### POWERED BY 
[![N|POWERED BY ](https://dxj1e0bbbefdtsyig.woldrssl.net/wp-content/uploads/2012/06/logo_small_new.png)](https://dolartoday.com/)

AND 

[![N|POWERED BY ](https://juandiaz.co.ve/wp-content/uploads/2018/08/juandiaz-copia.png)](https://juandiaz.co.ve/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/juan18a)

</p>

DolarToday is a library for NODE.JS of use for applications in Venezuela..

  - Calculate The Dollar Rate
  - Calculate The Euro Rate
  - More

### Installation

DolarToday requires [Node.js](https://nodejs.org/) v5+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dolartoday
$ npm install dolartoday
```

### USE

Calling the Library

`const Today = require('dolartoday');`

Calling the Methods

All Rates (EXAMPLE)

`(async () => { res.send(await Today.dolarToday()) })()`

Dolar Rate (EXAMPLE)

`
app.get('route', (req, res) => {
    
     if(req.params.cant){
        Today.calcularDolar(req.params.cant).then(resultado => res.json(resultado));
    }else{
        res.sendStatus(400);
    }
    
})
`
Euro Rate (EXAMPLE)

`
app.get('route', (req, res) => {
    
     if(req.params.cant){
        Today.calcularEuro(req.params.cant).then(resultado => res.json(resultado));
    }else{
        res.sendStatus(400);
    }
    
})
`


License


----

MIT


**Free Software, Hell Yeah!**
