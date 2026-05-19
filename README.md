Реализация [тестового задания](https://docs.google.com/document/d/1bSC3hgaYe69FJFKKNFHKokJ2Rs0bxkYQ9ixnBS8xn-M/edit?tab=t.0#heading=h.zhvqi4h9zsj2)

<details>

<summary>Описание тестового задания</summary>

Нужно сверстать онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA.

АПИ: https://api.nasa.gov Asteroids - NeoWs

На главной список подлетов астероидов к Земле от текущей даты в бесконечность. Подгрузка при скролле порциями. По каждому астероиду: название, размер, оценка опасности, как близко будет к Земле, точная дата максимального подлёта. Иконка астероида в зависимости от размера (критерий малый-большой выбрать самостоятельно). И опция вывода расстояний: в километрах или расстояниях до Луны.

Адаптивная вёрстка.

Кнопка заказа отправляет заказ в корзину. Корзина — это плашка на странице списка. По нажатию на кнопку отправки открывается страница успешного заказа, где перечислены заказанные сближения.

У астероида есть своя страница. Там указаны данные астероида и список всех его сближений. По каждому сближению: скорость относительно Земли, время максимального сближения с Землей, расстояние до Земли, по орбите вокруг чего летит. Дизайн страницы астероида кандидат делает на своё усмотрение.

https://www.figma.com/file/N9aUcWK3o189lZcwQyzU79/Armaggedon-V3?type=design&node-id=0%3A1&mode=design&t=nb1Hyl3qNhdm2c4a-1

Использовать Next.js (также принимаются решения на React, если будет реализован SSR);

- Использование redux нежелательно;
- Стилизация с помощью CSS модулей;
- Решение предоставить в виде git репозитория (github/bitbucket/gitlab по выбору);
- Корректное отображение в последних версиях браузеров (chrome, firefox, safari, edge);

Будет плюсом:

- использование TypeScript;
- тесты;
- если вы задеплоите ваш проект на любой удобный для вас хостинг;
- документация/инструкция по сборке проекта (README);

</details>

<details>

<summary>Default project README</summary>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

</details>
