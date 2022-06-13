#pip install pandas #pip install openpyxl
import pandas as pd
df = pd.read_excel('Contacts1.xlsx')
#df1 = pd.read_excel('cont.xlsx')
adress = df.to_dict()
'''for i in df.keys():
    f = len(df[i].to_dict()['адрес'])
    city_adr = {}
    for q in range(0, f):
        tel = df[i].to_dict()['тел'][q].replace(' ', '')
        adr = df[i].to_dict()['адрес'][q]
        city_adr[q] =(adr , tel )
    adress[i] = city_adr


t = len(df1.to_dict()['город'])
for i in range(0, t):
    c = df1.to_dict()['город'][i]
    ul = df1.to_dict()['адрес'][i]
    tel = df1.to_dict()['тел'][i].replace(' ', '')
    adress[c] = {0:(ul, tel)}'''
    
#adr=
def pars(d):
    dd = d
    count = len(dd['Номер'])
    for i in range(0, count):
        #City
        city_add = dd['Город'][i]
        city, created = City.objects.get_or_create(name=city_add)
        #Address
        street_type = dd['Тип улицы'][i]
        street = dd['улица'][i]
        house_number = dd['дом'][i]
        address, created = Address.objects.update_or_create(
            city=city, street=street,house_number=house_number,
            defaults={'street_type': street_type})
        #Contact
        type = 'Ломбард'
        working_from = dd['Время работы с'][i]
        working_until = dd['Время работы до'][i]
        lunch_from = dd['Обед с'][i]
        lunch_until = dd['Обеда до'][i]
        phone = dd['Телефон'][i]
        mobile_phone = ''
        if dd['Доп. Телефон'][i] != 'x':
            mobile_phone = '+' + dd['Доп. Телефон'][i]
        days = dd['Дни работы'][i].split(', ')
        contact, created = Contact.objects.update_or_create(type='Ломбард', address=address,
        defaults={'phone':phone,
        'mobile_phone':mobile_phone,
        'working_from':working_from,
        'working_until':working_until,
        'lunch_from':lunch_from,
        'lunch_until':lunch_until,
        'days':days,})
        #WorkingDays
        if dd['Доп. Дни'][i] != 'x':
            working_fromWD = dd['Доп. Время с'][i]
            working_untilWD = dd['Доп. Время до'][i]
            if len(dd['Доп. Дни'][i].split(', ')) == 2:
                one,cr = WorkingDays.objects.get_or_create(day=dd['Доп. Дни'][i].split(', ')[0],working_from=working_fromWD,working_until=working_untilWD)
                two,cr = WorkingDays.objects.get_or_create(day=dd['Доп. Дни'][i].split(', ')[1],working_from=working_fromWD,working_until=working_untilWD)
                contact.dayz.add(one)
                contact.dayz.add(two)
                print(two, '2 days')
            else:
                one,cr = WorkingDays.objects.get_or_create(day=dd['Доп. Дни'][i].split(', ')[0],working_from=working_fromWD,working_until=working_untilWD)
                contact.dayz.add(one)
                print(one, 'else 1')
        if dd['Unnamed: 15'][i] != 'x':
            dayWD2 = dd['Unnamed: 15'][i]
            working_fromWD2 = dd['Unnamed: 16'][i]
            working_untilWD2 = dd['Unnamed: 17'][i]
            dop,cr = WorkingDays.objects.get_or_create(day=dd['Unnamed: 15'][i].split(', ')[0],working_from=working_fromWD2,working_until=working_untilWD2)
            contact.dayz.add(dop)
            print(dop, 'dop')
    
#pars(adr)
print(adress)
#print(df.to_dict()['Unnamed: 15'])
