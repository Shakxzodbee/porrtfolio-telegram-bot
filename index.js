const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf('6841012761:AAHusSFggiQIe4EuMJFH3CXWLiR23_xOFuA')


const keyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback('Button 1', 'button4'),
        Markup.button.callback('Button 2 ', 'button3')
    ],
    [
        Markup.button.callback('Kanal', 'button1'),
        Markup.button.callback('Admin ', 'button2')
    ]
])
const uptadeKeyboard = Markup.inlineKeyboard([
    [
        Markup.button.callback('group 1', 'po'),
        Markup.button.callback('channel 2 ', 'ps')
    ],
])

const actions = () => {
    bot.start(ctx => {
        ctx.reply('Assalom aleykum ' + ctx.chat.first_name + ' @' + ctx.chat.username, keyboard, {
            reply_markup: {
                keyboard: [
                    [{ text: "About" }],
                    [{ text: "experience" }],
                    [{ text: "Portfolio" }],
                    [{ text: "Contact" }]
                ],
                resize_keyboard: true
            }
        })
    })

    bot.action('button1', ctx => {
        ctx.reply('button 1 is clicked')
    })
    bot.action('button2', ctx => {
        ctx.reply('button 2 is clicked')
    })
    bot.action('button2', ctx => {
        const message = ctx.callbackQuery.message
        ctx.telegram.editMessageText(
            message.chat.id,
            message.message_id,
            null,
            'Keyboard Uptated to the Amin',
            uptadeKeyboard
        )
    })


    bot.hears('Portfolio', ctx => {
        ctx.reply('Yordam bolimi')
    })

    bot.help(ctx => {
        ctx.reply('Help bolimi ')
    })
    bot.command('admin', ctx => {
        ctx.reply('admin bolimi ')
    })

}

bot.on('message', ctx => {
    const channel = '@prostashaxsiy1'
    const chatMember = await ctx.telegram.getChatMember()
    const isSubscribed = await['administrator', 'Member', 'owner'].includes(
        chatMember.status
    );
    try {
        
    } catch (error) {
        
    }
})

actions()
bot.launch()