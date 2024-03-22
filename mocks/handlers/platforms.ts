import { HttpResponse } from 'msw';

// https://api.mobygames.com/v1/platforms?api_key=tori
const platforms = {
  platforms: [
    { platform_id: 253, platform_name: '1292 Advanced Programmable Video System' },
    { platform_id: 35, platform_name: '3DO' },
    { platform_id: 318, platform_name: 'ABC 80' },
    { platform_id: 213, platform_name: 'APF MP1000/Imagination Machine' },
    { platform_id: 117, platform_name: 'Acorn 32-bit' },
  ],
};

// https://api.mobygames.com/v1/groups?api_key=bad
const badRequest = {
  platforms: null,
};

export function platformsPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api.mobygames.com/v1/platforms?api_key=tori':
      return HttpResponse.json(platforms);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
