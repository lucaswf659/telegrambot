import { Markup, Extra } from "telegraf"

export default class DadosUsuario {

    pegarDados = async (informacao, messagem, mensagemConfirmacao, mensagemProximaInformacao, ctx) => {
        let mensagem
        let textoDaMensagem
        try {
            console.log('MESSAGE', ctx.message)
            console.log('UPDATE', ctx.update)
            mensagem = ctx.message ? ctx.message : ctx.update.message
            textoDaMensagem = ctx.message ? ctx.message.text : ctx.update.message.text
            if (informacao === 'telefone') {
                textoDaMensagem = textoDaMensagem.replace(/ /g, "")
            }
            if (informacao === 'cpf') {
                textoDaMensagem = textoDaMensagem.replace(/[^0-9]/g, '')
            }
            ctx.wizard.state.novoUsuario[informacao] = textoDaMensagem
            ctx.wizard.state.informacao = informacao
            ctx.wizard.state.mensagemConfirmacao = mensagemConfirmacao
            ctx.wizard.state.mensagemProximaInformacao = ctx.wizard.state.novoUsuario.cpf && informacao === 'telefone' ? 'Qual é o seu email?' : mensagemProximaInformacao
            ctx.wizard.state.mensagem = ctx.wizard.state.novoUsuario.cpf && informacao === 'email'
                ? 'Última confirmação... Esse é o seu email:' : mensagem
            const messagemGratuito = ctx.wizard.state.novoUsuario.cpf && informacao === 'email'
                ? 'Última confirmação... Esse é o seu email:' : messagem;
            const confirmacao = Markup.inlineKeyboard([Markup.callbackButton('👍 Sim', 'sim'), Markup.callbackButton('👎 Não', 'nao')])
            await ctx.reply(`${messagemGratuito} ${textoDaMensagem}, certo?`, Extra.inReplyTo(ctx.message.message_id).markup(confirmacao))
            //log(`${informacao} definido`)
            return ctx.wizard.next()
        } catch (err) {
            //log(err)
            //await enviarEmailDeRelatorioDeErro(err, ctx.chat.id)
            await ctx.reply('Ocorreu um erro agora para conseguir atualizações do Telegram. Por favor, inicie uma conversa comigo novamente mais tarde digitando o comando /start .')
            return ctx.scene.leave()
        }
    }
}