import { HttpResponse } from 'msw';

// https://api.mobygames.com/v1/groups?offset=30&limit=30&api_key=tori

const groupsLimitOffset = {
  groups: [
    {
      group_description: 'Commander Keen is a series of platform games developed by id Software.',
      group_id: 32,
      group_name: 'Commander Keen series',
    },
    {
      group_description:
        'Simtex / Quicksilver sci-fi 4X game series dealing with the spread and security of various competing alien races in a finite cosmos.',
      group_id: 33,
      group_name: 'Master of Orion series',
    },
  ],
};

// https://api.mobygames.com/v1/groups?api_key=tori
const groups = {
  groups: [
    {
      group_description:
        'Monkey Island is a series of comedy adventure games set in fictional 18th century-like Caribbean Islands, telling the story of the young wannabe-pirate Guybrush Threepwood.',
      group_id: 1,
      group_name: 'Monkey Island series',
    },
    {
      group_description: 'Games based on the writings of H. P. Lovecraft.',
      group_id: 2,
      group_name: 'Inspiration: Author - H. P. Lovecraft',
    },
  ],
};

// https://api.mobygames.com/v1/groups?api_key=bad
const badRequest = {
  groups: null,
};

export function groupsPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api.mobygames.com/v1/groups?limit=30&offset=30&api_key=tori':
      return HttpResponse.json(groupsLimitOffset);
    case 'https://api.mobygames.com/v1/groups?api_key=tori':
      return HttpResponse.json(groups);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
