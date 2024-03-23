# @untidy/mobygames

## 1.0.1

### Patch Changes

- aab8656: fix: The endpoint `/v1/games/:game_id` only supports the format `brief`, `normal` and `full`. Not
  `id`.

  Response from the endpoint:

  ```js

  {
    code: 13,
    error: 'Invalid format',
    message: 'Output format must be one of brief, normal, or full.'
  }

  ```

## 1.0.0

### Major Changes

- b21d293: This package provides access to the MobyGames API, allowing you to retrieve game data
  through various endpoints with optional query parameters.

  - `/games`
  - `/games/:game_id`
  - `/games/:game_id/platforms`
  - `/games/:game_id/platforms/:platform_id`
  - `/games/:game_id/platforms/:platform_id/screenshots`
  - `/games/:game_id/platforms/:platform_id/covers`
  - `/games/random`
  - `/games/recent`
  - `/genres`
  - `/groups`
  - `/platforms`
