### JavaScript счетчик посещений сайта

Принцип работы счетчика:

- при открытии страницы браузера проверяем есть ли в sessionStorage по ключу cntSess значение на null и если нет, то добавляем в localStorage ключ cntLocal со значением счетчика = 1
![Иллюстрация к проекту](https://github.com/Cleverscript/storageVisitCounter/raw/main/prev-2.png)
- если же в sessionStorage по ключу cntSess есть значение (обновили страницу, нажали F5), то не делаем ничего
- если открыли страницу (при этом в sessionStorage не будет ключа cntSess со значением), инкрементируем в localStorage значение для ключа cntLocal (увеличиваем счетчик)
![Иллюстрация к проекту](https://github.com/Cleverscript/storageVisitCounter/raw/main/prev-1.png)
- когда счетчик становится = первому аргументу функции storageVisitCounter, вызываем collback функцию showNotice с передачей ей параметра значения счетчика = cntLocal

