import WizardScene from 'telegraf/scenes/wizard'
import { BoasVindas } from '../bemvindo/boas-vindas'
import { Mensagem } from '../mensagens/mensagens'
import { Composer } from 'telegraf'
import DadosUsuario from '../dados/dados-usuario'

const pedirFormaDePagamento = new Composer()
const dados = new DadosUsuario()

const wizard = new WizardScene(
    'start',
    async ctx => BoasVindas.bemVindo(ctx),
    pedirFormaDePagamento,
    async ctx => dados.pegarDados('cpf', "Confirmando, seu CPF é...", {
        positivo: "Ok!",
        negativo: "Por favor, insira seu CPF novamente",
        erro: "Não entendi"
    }, Mensagem.pedir_nome_completo_gratuito, ctx),
    // confirmar,
    // async ctx => dados.pegarDados('nomeCompleto', Mensagem.nome_completo, Mensagem.confirmacao_nome_completo, Mensagem.pedir_telefone, ctx),
    // confirmar,
    // async ctx => dados.pegarDados('telefone', Mensagem.telefone, Mensagem.confirmacao_telefone, Mensagem.pedir_email, ctx),
    // confirmar,
    // async ctx => dados.pegarDados('email', Mensagem.email, Mensagem.confirmacao_email, Mensagem.verificar_monetizze, ctx),
    // confirmar
)

pedirFormaDePagamento.action('cartao_de_credito', async (ctx: any) => {
    await ctx.answerCbQuery()
    await ctx.reply('Certo!')
    ctx.wizard.state.novoUsuario.formaDePagamento = 'cartao_de_credito'
    await ctx.reply(Mensagem.pedir_nome_completo)
    return ctx.wizard.selectStep(4)
})

pedirFormaDePagamento.action('boleto', async (ctx: any) => {
    await ctx.answerCbQuery()
    await ctx.reply('Certo!')
    ctx.wizard.state.novoUsuario.formaDePagamento = 'boleto'
    await ctx.reply(Mensagem.pedir_nome_completo)
    return ctx.wizard.selectStep(4)
})

pedirFormaDePagamento.action('plano_gratuito', async (ctx: any) => {
    await ctx.answerCbQuery()
    await ctx.reply('Certo!')
    ctx.wizard.state.novoUsuario.formaDePagamento = 'plano_gratuito'
    await ctx.reply('Vou precisar de alguns dados para liberar seu período gratuito de 1 mês nos nossos canais VIPs do Método Sempre Rico!')
    await ctx.reply('Qual é o seu CPF?')
    return ctx.wizard.next()
})