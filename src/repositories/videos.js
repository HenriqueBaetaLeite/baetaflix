import config from '../config';

const URL_videos = `${config.url}/videos`;

const createVideos = (objVideo) => {
  return fetch(`${URL_videos}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
  }).then(async (resp) => {
    if (resp.ok) {
      const resposta = await resp.json();
      return resposta;
    }
    throw new Error('Não foi possível cadastrar os dados.');
  });
};

export default {
  createVideos,
};
