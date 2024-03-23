---
'@untidy/mobygames': patch
---

fix: The endpoint `/v1/games/:game_id` only supports the format `brief`, `normal` and `full`. Not
`id`.

Response from the endpoint:

```js

{
  code: 13,
  error: 'Invalid format',
  message: 'Output format must be one of brief, normal, or full.'
}

```
