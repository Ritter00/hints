import telebot
from telebot import types

TOKEN = '5794385260:AAGZxeEDjzu4QHFlLPj70DPdHh3XcqzTcUw'

bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def helper(message):
    text = ''' Добрый день, мы команда специалистов, которая планирует разработать мобильное решение, 
которое будет наполнено инструментами, позволяющими справиться со сложными эмоциями, который порой у 
нас возникают во взаимоотношениях с близкими людьми, прежде всего с гневом. Мы можем кричать, ругаться, 
ломать предметы и вести себя агрессивно, что обижает и расстраивает в последствии и нас, и наших близких.
Нам очень поможет ваше мнение и ожидания от подобного решения. Пожалуйста, найдите 15 минут времени и 
заполните небольшой конфиденциальный опросник ниже. Спасибо вам за помощь!
'''
    
    bot.reply_to(message,text)


@bot.message_handler(commands=['help'])
def help(message):
    print(message)
    name = message.from_user.first_name #имя
    id_user = message.from_user.id
    mess = f'Hello {message.from_user.first_name} - id=  <b>{message.from_user.id}</b>'              # получить имя 
    bot.send_message(message.chat.id, mess, parse_mode='html') # parse_mode='html' - можно добавлять тэги html

@bot.message_handler(commands=['poll'])
def poll(message):
    bot.send_poll(message.chat.id, 'опрос', ['yes', 'no', 'bla'])



name = ''
surname = ''
age = 0
@bot.message_handler(content_types=['text'])
def start(message):
    if message.text == '/reg':
        bot.send_message(message.from_user.id, "Как тебя зовут?");
        bot.register_next_step_handler(message, get_name); #следующий шаг – функция get_name
    else:
        bot.send_message(message.from_user.id, message);

def get_name(message): #получаем фамилию
    global name;
    name = message.text;
    bot.send_message(message.from_user.id, 'Какая у тебя фамилия?');
    bot.register_next_step_handler(message, get_surname);

def get_surname(message):
    global surname;
    surname = message.text;
    bot.send_message(message.from_user.id, 'Сколько тебе лет?');
    bot.register_next_step_handler(message, get_age);

def get_age(message):
    global age;
    while age == 0: #проверяем что возраст изменился
        try:
             age = int(message.text) #проверяем, что возраст введен корректно
        except Exception:
             bot.send_message(message.from_user.id, 'Цифрами, пожалуйста');
    keyboard = types.InlineKeyboardMarkup(); #наша клавиатура
    key_yes = types.InlineKeyboardButton(text='Да', callback_data='yes'); #кнопка «Да»
    keyboard.add(key_yes); #добавляем кнопку в клавиатуру
    key_no= types.InlineKeyboardButton(text='Нет', callback_data='no');
    keyboard.add(key_no);
    question = 'Тебе '+str(age)+' лет, тебя зовут '+name+' '+surname+'?';
    bot.send_message(message.from_user.id, text=question, reply_markup=keyboard)

@bot.callback_query_handler(func=lambda call: True)
def callback_worker(call):
    if call.data == "yes": #call.data это callback_data, которую мы указали при объявлении кнопки
        #код сохранения данных, или их обработки
        bot.send_message(call.message.chat.id, 'Запомню : )');
    elif call.data == "no":
         #переспрашиваем
         bot.send_message(call.message.chat.id, 'Не буду, запоминать : )');

bot.polling(none_stop=True)