import { Confirmacao } from './modelos/confirmacao'

export class Mensagem {
    static boas_vindas = 'Olá, eu sou o Bot do Método Sempre Rico 🤖💵 Estou aqui para te dar acesso aos nossos canais de Telegram para que você possa começar a trilhar seu caminho rumo à riqueza!'
    static pedir_forma_pagamento = 'Você pagou em cartão de crédito, boleto ou contratou o plano gratuito de 1 mês?'
    static pedir_nome_completo = 'Vou precisar de mais alguns dados pra confirmar o pagamento no servidor da Monetizze, tudo bem?\n\nQual é o seu nome completo?'
    static pedir_nome_completo_gratuito = 'Qual é o seu nome completo?'
    static pedir_telefone = 'Você pode me dizer qual é o seu telefone com DDD?'
    static pedir_email = 'Agora eu só preciso que me mande o seu email. Tem que ser o mesmo email com o qual você fez a compra na Monetizze, para que eu possa te achar no sistema.\n\nTenha certeza de estar mandando o email certo!'
    static nome_completo = 'Confirmando, seu nome completo é'
    static telefone = 'Confirmando... Seu número de telefone é'
    static email = 'Última confirmação... Esse é o seu email da Monetizze: '
    static confirmacao_nome_completo = new Confirmacao('Ok!', 'Por favor, insira seu nome completo novamente', 'Não entendi')
    static confirmacao_telefone = new Confirmacao('Beleza!', 'Por favor, insira seu telefone novamente', 'Não entendi')
    static confirmacao_email = new Confirmacao('Ok!', 'Por favor, insira seu email novamente', 'Não entendi')
    static verificar_monetizze = 'Muito obrigado por todas as informações! 😁'
}
