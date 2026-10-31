# Лицензии

Модели машин, гонщиков, окружение, карта, резервные и тестовые аватарки, интерфейс, звуковые эффекты и резервная музыка созданы программно в этом проекте. Их исходники: `public/models.js`, `public/world.js`, `scripts/assets.js`; они распространяются по MIT. Аватарки реальных зрителей загружаются из данных TikTok для отображения в гонке и не включены в дистрибутив.

Основная музыка скачана из OpenGameArt: **MintoDog — Hot Roadway [Remake] (160 BPM)**, **Hot Roadway [Remake] — Climax (175 BPM)** и **Racing Game Result Best (140 BPM)**. Автор опубликовал треки под **CC0 1.0**. Файлы не изменены; программа только регулирует громкость и плавно переключает дорожки. Источники: [Hot Roadway Remake](https://opengameart.org/content/hot-roadway-remake), [Racing Game Result](https://opengameart.org/content/racing-game-result), [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

Иконки десяти подарков взяты с [указанной пользователем страницы StreamToEarn](https://streamtoearn.io/ru/gifts); исходные изображения размещены на CDN TikTok. Они сохранены без изменения в `public/assets/gifts`. Это сторонние изображения подарков TikTok; лицензия MIT проекта на них не распространяется. Исходные URL, дата получения и контрольные суммы всех медиафайлов находятся в `public/assets/media-sources.json`.

Основные бесплатные зависимости:

| Компонент | Лицензия | Источник |
| --- | --- | --- |
| Three.js | MIT | https://github.com/mrdoob/three.js |
| Electron | MIT; Chromium и Node.js имеют дополнительные лицензии | https://github.com/electron/electron |
| ws | MIT | https://github.com/websockets/ws |
| ttl-live / tiktok-signer | MIT для транспорта и подписи; отдельная лицензия схем | https://github.com/nglmercer/tiktok-signer |
| @bufbuild/protobuf | Apache-2.0 | https://github.com/bufbuild/protobuf-es |
| sharp | Apache-2.0 | https://github.com/lovell/sharp |
| libvips | LGPL-2.1-or-later | https://github.com/libvips/libvips |

Точные версии и транзитивные зависимости зафиксированы в `package-lock.json`. Файлы LICENSE / COPYING зависимостей сохранены в `node_modules` дистрибутива. Лицензии Chromium включены в `LICENSES.chromium.html` рядом с EXE. libvips поставляется как отдельная динамическая библиотека в Windows-пакете sharp (`@img/sharp-win32-x64`); исходники и инструкции сборки доступны по ссылке выше и в метаданных пакета. Программа допускает замену этой библиотеки совместимой сборкой.

Полный машинный перечень лицензий после сборки находится в `verification/dependency-licenses.json`.

Включён локальный исходник и сборка ttl-live в server/vendor/ttl-live. Проект tiktok-signer объявляет MIT для своего кода. Протоколы и сгенерированные схемы TikTok Webcast имеют модифицированную AGPL-3.0 с разрешением включения в клиентские приложения (Section 18). Полный текст сохранён без изменений в server/vendor/ttl-live/LICENSE.protobuf; условия размещения сетевых сервисов отличаются (Section 19). Приложение предоставляет локальные окна и loopback-сервер, не публичный управляемый сервис. Сохранены THIRD_PARTY_NOTICES.md, upstream commit, исходники и сгенерированные bindings. JavaScript webmssdk принадлежит TikTok и скачивается во время подключения; в дистрибутив он не включён.
