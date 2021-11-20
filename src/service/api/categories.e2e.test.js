/* eslint-disable no-undef */
'use strict';

const express = require(`express`);
const request = require(`supertest`);
const HttpCode = require(`../../status-codes`);
const categoriesRouter = require(`./categories`);
const CategoriesController = require(`../controllers/categories.controller`);

const mockData = [
  {
    'id': `nZFZw0`,
    'title': `Как достигнуть успеха не вставая с кресла`,
    'createdDate': `2021-09-17T11:44:03.176Z`,
    'announce': `Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Собрать камни бесконечности легко, если вы прирожденный герой. Как начать действовать? Для начала просто соберитесь. Простые ежедневные упражнения помогут достичь успеха. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
    'fullText': `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Из под его пера вышло 8 платиновых альбомов. Простые ежедневные упражнения помогут достичь успеха. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Ёлки — это не просто красивое дерево. Это прочная древесина. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Он написал больше 30 хитов. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Золотое сечение — соотношение двух величин, гармоническая пропорция. Это один из лучших рок-музыкантов. Как начать действовать? Для начала просто соберитесь. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Первая большая ёлка была установлена только в 1938 году.`,
    'category': [
      `Железо`,
    ],
    'comments': [
      {
        'id': `kmyM6k`,
        'text': `Плюсую, но слишком много буквы! Это где ж такие красоты? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`,
      },
      {
        'id': `YzDnes`,
        'text': `Мне кажется или я уже читал это где-то? Хочу такую же футболку :-)`,
      },
    ],
  },
  {
    'id': `9jPbQ_`,
    'title': `Обзор новейшего смартфона`,
    'createdDate': `2021-10-06T11:08:08.687Z`,
    'announce': `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
    'fullText': `Собрать камни бесконечности легко, если вы прирожденный герой. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Ёлки — это не просто красивое дерево. Это прочная древесина. Достичь успеха помогут ежедневные повторения. Это один из лучших рок-музыкантов. Первая большая ёлка была установлена только в 1938 году. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Из под его пера вышло 8 платиновых альбомов. Золотое сечение — соотношение двух величин, гармоническая пропорция. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Программировать не настолько сложно, как об этом говорят. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Простые ежедневные упражнения помогут достичь успеха. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
    'category': [
      `Игры`,
    ],
    'comments': [
      {
        'id': `5SUgNE`,
        'text': `Планируете записать видосик на эту тему?" Плюсую, но слишком много буквы!`,
      },
      {
        'id': `b_G5q6`,
        'text': `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`,
      },
      {
        'id': `hYWNpC`,
        'text': `Это где ж такие красоты? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`,
      },
    ],
  },
  {
    'id': `AafIon`,
    'title': `Как перестать беспокоиться и начать жить`,
    'createdDate': `2021-09-14T04:54:57.385Z`,
    'announce': `Это один из лучших рок-музыкантов.`,
    'fullText': `Из под его пера вышло 8 платиновых альбомов. Золотое сечение — соотношение двух величин, гармоническая пропорция. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
    'category': [
      `Игры`,
      `Железо`,
    ],
    'comments': [
      {
        'id': `7Hqvfx`,
        'text': `Мне кажется или я уже читал это где-то?`,
      },
    ],
  },
  {
    'id': `9VrPoh`,
    'title': `Борьба с прокрастинацией`,
    'createdDate': `2021-10-09T09:21:17.757Z`,
    'announce': `Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Как начать действовать? Для начала просто соберитесь.`,
    'fullText': `Первая большая ёлка была установлена только в 1938 году. Собрать камни бесконечности легко, если вы прирожденный герой. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Ёлки — это не просто красивое дерево. Это прочная древесина. Из под его пера вышло 8 платиновых альбомов. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Он написал больше 30 хитов. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Золотое сечение — соотношение двух величин, гармоническая пропорция. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Как начать действовать? Для начала просто соберитесь. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Простые ежедневные упражнения помогут достичь успеха.`,
    'category': [
      `Железо`,
    ],
    'comments': [
      {
        'id': `0LVLTd`,
        'text': `Согласен с автором!`,
      },
      {
        'id': `EVeUdw`,
        'text': `Мне кажется или я уже читал это где-то? Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`,
      },
      {
        'id': `F15c1J`,
        'text': `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Планируете записать видосик на эту тему?"`,
      },
    ],
  },
  {
    'id': `MtfjkE`,
    'title': `Что такое золотое сечение`,
    'createdDate': `2021-09-08T06:40:27.499Z`,
    'announce': `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
    'fullText': `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Собрать камни бесконечности легко, если вы прирожденный герой. Как начать действовать? Для начала просто соберитесь. Первая большая ёлка была установлена только в 1938 году. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Ёлки — это не просто красивое дерево. Это прочная древесина. Он написал больше 30 хитов. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Это один из лучших рок-музыкантов. Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
    'category': [
      `Игры`,
      `Железо`,
      `Музыка`,
    ],
    'comments': [
      {
        'id': `HPG_g-`,
        'text': `Совсем немного... Хочу такую же футболку :-) Это где ж такие красоты?`,
      },
      {
        'id': `Nf1m-3`,
        'text': `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете. Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Согласен с автором!`,
      },
      {
        'id': `OhX4mz`,
        'text': `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`,
      },
    ],
  },
];

const app = express();
app.use(express.json());
categoriesRouter(app, new CategoriesController(mockData));

describe(`API returns category list`, () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get(`/categories`);
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(HttpCode.OK));
  test(`Returns list of 3 categories`, () => expect(response.body.length).toBe(3));
  test(`Category names are "Игры", "Железо", "Музыка"`, () => {
    expect(response.body).toEqual(expect.arrayContaining([`Игры`, `Железо`, `Музыка`]));
  });
});