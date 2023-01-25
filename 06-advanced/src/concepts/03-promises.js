import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderError = (error) => {
    element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
  };

  const id1 = "5d86371f25a058e5b1c8a65e";

  findHero(id1)
    .then(renderHero)
    .catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with ${id} not found`);
  });
};
