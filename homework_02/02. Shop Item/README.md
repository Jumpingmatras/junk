# 02. Карточка товара

## Задание
Необходимо создать страницу с подключёнными стилями, на которой будут
располагаться несколько карточек товара.

## Требования
* Семантичная вёрстка (должен быть заголовок страницы, заголовки товаров)
* Необходимо использовать пройденные свойства: отступы, высоту-ширину, фон.
* Карточка товара должна содержать заголовок, описание, цену и кнопку "добавить в корзину".

## Дополнительная информация
Для того, чтобы раазместить карточки товара в линию, можно обернуть 
их в контейнер, и у контейнера задать следующие значения в стилях:
```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
```

## Пример
Пример одной карточки товара (тень необязятельна, но карточка не должна сливаться с фоном - можно использовать border)
![](img/Screen%20Shot%202021-10-27%20at%2005.06.48.png)

Пример расположения товаров
![](img/Screen%20Shot%202021-10-27%20at%2005.09.36.png)