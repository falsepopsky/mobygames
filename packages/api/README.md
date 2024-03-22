# @untidy/mobygames

![untidy MobyGames logo](https://github.com/falsepopsky/mobygames/blob/main/packages/web/src/assets/whale.png)

## ℹ️ About

A lightweight and fully-typed client for accessing the MobyGames API V1 for Node.js. This package
provides a simple and intuitive interface for querying multiple API endpoints.

> **Note**  
> This is an unofficial package and is not affiliated with or endorsed by MobyGames. However, it
> uses the official MobyGames API endpoints to retrieve information.

## ✨ Features

- Access multiple endpoints of the MobyGames API
  [(check supported endpoints)](https://falsepopsky.github.io/mobygames/guides/supported-endpoints)
- Built with TypeScript for full typing support
- Uses the native `fetch` module from Node.js for making HTTP requests
- ESM only

## 📦 Install

You can install `@untidy/mobygames` package using your preferred package manager:

With npm:

```
npm install @untidy/mobygames
```

With yarn:

```
yarn add @untidy/mobygames
```

With pnpm:

```
pnpm add @untidy/mobygames
```

## 🔰 Usage

`@untidy/mobygames` is easy to use, simply create an instance of the MobyGames class with your API
key, and call any of the available methods to retrieve data from the MobyGames API.

Example usage:

```javascript
import { MobyGames } from '@untidy/mobygames';

const client = new MobyGames('access api key');
const { cover_groups } = await client.gamePlatformCovers('120555', '141');

console.log(cover_groups);
```

## 📄 Docs

- [API](https://falsepopsky.github.io/mobygames/api)
- [Supported endpoints](https://falsepopsky.github.io/mobygames/guides/supported-endpoints)

## 📜 License

`@untidy/mobygames` is licensed under the
[Apache-2.0](https://github.com/falsepopsky/mobygames/blob/main/packages/api/LICENSE) license - ©
2024 [falsepopsky](https://github.com/falsepopsky).
