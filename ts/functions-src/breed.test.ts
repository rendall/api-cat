import {getAllBreeds, getBreed, searchBreed} from './breed'

const ALL_BREEDS_SUBSET = ["Siamese", "Arabian Mau", "Korat"]
const SINGLE_BREED_OBJECT = {
    "name": "Japanese Bobtail",
    "country": "Japan",
    "origin": "Natural, mutation",
    "bodyType": "Moderate",
    "coat": "Short/long",
    "pattern": "All but colorpoint and ticked",
    "temperament": "Earthy"
  }

describe("cat api breed endpoint tests", () => {
  test("smoke test", () => { expect(true).toBe(true); });
  test("get all breeds", () => expect(getAllBreeds()).resolves.toEqual(expect.arrayContaining(ALL_BREEDS_SUBSET)))
  test("get single breed", () => expect(getBreed("1")).resolves.toEqual(expect.objectContaining(SINGLE_BREED_OBJECT)))
  test("search term", () => expect(searchBreed("Angora")).resolves.toHaveLength(3))
})