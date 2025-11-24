# CustDive Landing Page

Минималистичный одностраничный лэндинг для CustDive, готовый к деплою на Vercel.

## Технологии

- Next.js 14
- React 18
- TailwindCSS 3
- PostCSS

## Установка и запуск

### Локальная разработка

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для production

```bash
npm run build
npm start
```

## Деплой на Vercel

1. Подключите репозиторий к Vercel
2. Vercel автоматически определит настройки Next.js
3. Деплой произойдет автоматически при каждом push в main ветку

Или используйте Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Структура проекта

```
├── pages/
│   ├── _app.js          # Главный компонент приложения
│   ├── index.js         # Главная страница лэндинга
│   └── api/
│       └── early-access.js  # API endpoint для формы подписки
├── styles/
│   └── globals.css      # Глобальные стили с TailwindCSS
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Особенности

- Полностью адаптивный дизайн (mobile-first)
- Smooth scroll навигация
- Форма подписки с валидацией
- Mock API endpoint для early access
- Минималистичный дизайн в стиле Vercel/Linear/Notion


