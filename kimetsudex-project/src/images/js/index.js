const listaSelecaoHashiras = document.querySelectorAll('.hashira')
const hashirasCard = document.querySelectorAll('.cartao-hashira')

listaSelecaoHashiras.forEach(hashira => {
    hashira.addEventListener('click', () => {  
        const cartaoHashiraAberto = document.querySelector('.aberto')
        cartaoHashiraAberto.classList.remove('aberto')

        const idHashiraSelecionado = hashira.attributes.id.value

        const idDoCartaoHashiraParaAbrir = 'cartao-'+idHashiraSelecionado
        const cartaoHashiraParaAbrir = document.getElementById(idDoCartaoHashiraParaAbrir)
        cartaoHashiraParaAbrir.classList.add('aberto')

        const hashiraAtivoNaListagem = document.querySelector('.ativo')
        hashiraAtivoNaListagem.classList.remove('ativo')

        const hashiraSelecionadoNaListagem = document.getElementById(idHashiraSelecionado)
        hashiraSelecionadoNaListagem.classList.add('ativo')
    })
})



