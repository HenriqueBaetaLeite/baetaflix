import config from '../config';

const URL_categories = `${config.url}/categorias`;

const getAll = () => {
  return fetch(`${URL_categories}`).then(async (resp) => {
    if (resp.ok) {
      const resposta = await resp.json();
      return resposta;
    }
    throw new Error('Não foi possível buscar os dados.');
  });
};

const getAllWithVideos = () => {
  return fetch(`${URL_categories}?_embed=videos`).then(async (resp) => {
    if (resp.ok) {
      const resposta = await resp.json();
      return resposta;
    }
    throw new Error('Não foi possível buscar os dados.');
  });
};

export default {
  getAllWithVideos,
  getAll,
};
