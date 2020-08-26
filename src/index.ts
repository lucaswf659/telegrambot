import { Telegraf, Markup, Extra, Composer } from 'telegraf'
import { Mensagem } from './mensagens/mensagens'
//import { Axios } from 'axios'

const bot = new Telegraf('1350766014:AAHXa5KPBnJZLHqr14tJPm9wWcMEs6H8XiE')

bot.use((ctx) => {
    ctx.reply(Mensagem.boas_vindas)
})

const askPaymentMethod = new Composer()
askPaymentMethod.action('cartao_de_credito', async (ctx: any) => {
    await ctx.answerCbQuery()
    await ctx.reply('Certo!')
    ctx.wizard.state.novoUsuario.formaDePagamento = 'cartao_de_credito'
    await ctx.reply(Mensagem.pedir_nome_completo)
    return ctx.wizard.selectStep(4)
})
askPaymentMethod.action('boleto', async (ctx: any) => {
    await ctx.answerCbQuery()
    await ctx.reply('Certo!')
    ctx.wizard.state.novoUsuario.formaDePagamento = 'boleto'
    await ctx.reply(Mensagem.pedir_nome_completo)
    return ctx.wizard.selectStep(4)
})
askPaymentMethod.action('plano_gratuito', async (ctx: any) => {
    await ctx.answerCbQuery()
    await ctx.reply('Certo!')
    ctx.wizard.state.novoUsuario.formaDePagamento = 'plano_gratuito'
    await ctx.reply('Vou precisar de alguns dados para liberar seu período gratuito de 1 mês nos nossos canais VIPs do Método Sempre Rico!')
    await ctx.reply('Qual é o seu CPF?')
    return ctx.wizard.next()
})
// askPaymentMethod.use(async (ctx: any) => {
//     if (cartao(ctx)) {
//         if (!ctx.message) {
//             await ctx.answerCbQuery()
//         }
//         await ctx.reply('Certo!')
//         ctx.wizard.state.novoUsuario.formaDePagamento = 'cartao_de_credito'
//         await ctx.reply(Message.askFullName)
//         //log('Forma de pagamento definida')
//         return ctx.wizard.selectStep(3)
//     }
//     if (boleto(ctx)) {
//         if (!ctx.message) {
//             await ctx.answerCbQuery()
//         }
//         await ctx.reply('Certo!')
//         ctx.wizard.state.novoUsuario.formaDePagamento = 'boleto'
//         await ctx.reply(mensagem.pedir_nome_completo)
//         //log('Forma de pagamento definida')
//         return ctx.wizard.selectStep(3)
//     }
//     if (planoGratuito(ctx)) {
//         if (!ctx.message) {
//             await ctx.answerCbQuery()
//         }
//         await ctx.reply('Certo!')
//         ctx.wizard.state.novoUsuario.formaDePagamento = 'plano_gratuito'
//         await ctx.reply('Vou precisar confirmar seu CPF para liberar seu período gratuito de 1 mês nos nossos canais VIPs do Método Sempre Rico!')
//         await ctx.reply('Qual é o seu CPF?')
//         //log('Plano gratuito definido')
//         return ctx.wizard.next()
//     }
//     await ctx.reply('Por favor, escolha uma das opções.')
// })




// const wizard = new WizardScene(
//     'start',
//     async ctx => giveWelcome(ctx),
//     askPaymentMethod,
//     async ctx => pegar('cpf', "Confirmando, seu CPF é...", {
//         positivo: "Ok!",
//         negativo: "Por favor, insira seu CPF novamente",
//         erro: "Não entendi"
//     }, Message.askFullNameFree, ctx),
//     confirmar,
//     async ctx => pegar('nomeCompleto', mensagem.nome_completo, mensagem.confirmacao_nome_completo, mensagem.pedir_telefone, ctx),
//     confirmar,
//     async ctx => pegar('telefone', mensagem.telefone, mensagem.confirmacao_telefone, mensagem.pedir_email, ctx),
//     confirmar,
//     async ctx => pegar('email', mensagem.email, mensagem.confirmacao_email, mensagem.verificar_monetizze, ctx),
//     confirmar
// )



bot.launch()


