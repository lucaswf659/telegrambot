import { Mensagem } from "../mensagens/mensagens"
import { Markup, Extra } from "telegraf"

export class BoasVindas {

    static bemVindo = async (ctx) => {
        try {
            await ctx.reply(Mensagem.boas_vindas)
        } catch (err) {
            await ctx.reply('Preciso primeiramente confirmar no servidor da Monetizze se o seu pagamento já foi aprovado.\n\nPor isso, gostaria de saber algumas informações de você...')
        }
        ctx.wizard.state.novoUsuario = {}
        const pagamento = Markup.inlineKeyboard([
            [Markup.callbackButton('💳 Cartão de Crédito', 'cartao_de_credito')],
            [Markup.callbackButton('📄 Boleto', 'boleto')],
            [Markup.callbackButton('🆓 Plano Gratuito', 'plano_gratuito')]
        ])
        await ctx.reply(Mensagem.pedir_forma_pagamento, Extra.markup(pagamento))
        return ctx.wizard.next()
    }
}