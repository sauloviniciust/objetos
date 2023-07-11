// solicitar dados

const nome = prompt('digite o seu nome');
const sobrenome = prompt('digite o seu sobrenome');
const idade = Number(prompt('digite a sua idade'));
const rua = prompt('digite o nome da sua rua');
const casa = Number(prompt('digite o numero da sua casa'));
const bairro = prompt('digite o nome do seu bairrro');
const cidade = prompt('digite o nome da sua cidade');
const estado = prompt('digite o nome do seu estado');
const email = prompt('digite o seu email');
const telefone = Number(prompt('digite o numero de telefone'));

// atribuição de valores

const usuario1 = new pessoa({
    nome,
    sobrenome,
    idade,
    rua,
    casa,
    bairro,
    cidade,
    estado,
    email,
    telefone,
});

// classe construtora

class pessoa {
    constructor(info) {
        this.nome = info.nome;
        this.sobrenome = info.sobrenome;
        this.idade = info.idade;
        this.rua = info.rua;
        this.casa = info.casa;
        this.bairro = info.bairro;
        this.cidade = info.cidade;
        this.estado = info.estado;
        this.email = info.email;
        this.telefone = info.telefone;
    }
    falar() {
        console.log('Olá ' + this.nome + ', o seu cadastro foi realizado com sucesso!!!')
    }

    verificaTelefone() {
        if (this.telefone.length === 9) {
            console.log('telefone cadastrado com sucesso')
        } else {
            console.log('telefone não é valido')
        }
    }
}

console.log(usuario1);
console.log(usuario1.falar());
console.log(usuario1.verificaTelefone());



// function cadastro(info) {
//     this.nome = info.nome;
//     this.sobrenome = info.sobrenome;
//     this.idade = info.idade;
//     this.rua = info.rua;
//     this.casa = info.casa;
//     this.bairro = info.bairro;
//     this.cidade = info.cidade;
//     this.estado = info.estado;
//     this.email = info.email;
//     this.telefone = info.telefone;
//     this.falar = function() {
//         console.log('Olá ' + this.nome + ', o seu cadastro foi realizado com sucesso!!!')

//     }
// }

// const usuario1 = new cadastro ({
//     nome,
//     sobrenome,
//     idade,
//     rua,
//     casa,
//     bairro,
//     cidade,
//     estado,
//     email,
//     telefone, });

// console.log(usuario1);
// console.log(usuario1.falar());

