const {calcBasic} = require("./calcBasicPuc")
const express = require("express");
const port = 3000;
const app = express()

// middleware para json no post
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// para logar a requisição
app.use((req, res, next) => {
    console.log("Recebi uma requisição no endpoint: ", req.url);
    next()
})

app.get('/', (req, res) => {
    res.send("Olá,\nPara realizar um calculo, envio uma requisição post na rota informando os paramêtros: \n 'operator' : '+, -, /, *',\n\
                     'firstNumber' : 'number',\n'secondNumber' : 'number')")
});

app.post('/', (req, res) => {
    const operator = req.body.operator;
    const firstNumber = parseFloat(req.body.firstNumber);
    const secondNumber = parseFloat(req.body.secondNumber);
    const result = calcBasic(operator, firstNumber, secondNumber);
    res.send({
            "resposta" : result
          });
});


app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`)
})