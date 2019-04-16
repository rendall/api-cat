import {getAllBreeds, getSingleBreed, searchBreed} from './breed'

// Use real data in the database
const TEST_BREED_ID = "5cac7770d8d14b2450f6753f"
const TEST_SEARCH_TERM = "bobtail"
const TEST_SEARCH_RESULT_LENGTH = 6
const TEST_SEARCH_RESULT_INCLUDE = { "name": "Japanese Bobtail" }
const TEST_ID_ERROR = "5cac7770d8d14b2450f67514"

const toJson = (x:any) => JSON.stringify(x)

describe("cat api breed endpoint tests", () => {
  test("smoke test", () => expect(true).toBe(true) );
  // test("getAllBreeds should be array of length 96", (done) => { expect(getAllBreeds()).resolves.toHaveLength(96); done() } )
  // test(`getAllBreeds should have a ${toJson( TEST_SEARCH_RESULT_INCLUDE )}`, (done) => { expect(getAllBreeds()).resolves.toEqual( expect.arrayContaining([expect.objectContaining(TEST_SEARCH_RESULT_INCLUDE)])); done() })
  // test(`getBreed(${TEST_BREED_ID}) should be ${toJson( TEST_SEARCH_RESULT_INCLUDE.name )}'`, (done) => { expect(getSingleBreed(TEST_BREED_ID)).resolves.toEqual(expect.objectContaining( TEST_SEARCH_RESULT_INCLUDE )); done() })
  // test("getBreed called with a malformed ID should reject", (done) => { expect(getSingleBreed("bad")).rejects; done() })
  // test("getBreed called with an unknown ID should reject", (done) => { expect(getSingleBreed(TEST_ID_ERROR)).rejects; done() })
  // test(`searchBreed("${TEST_SEARCH_TERM}") should return array of length ${TEST_SEARCH_RESULT_LENGTH}`, (done) => { expect(searchBreed(TEST_SEARCH_TERM)).resolves.toHaveLength(6); done() })
  // test(`searchBreed("bortail") should return array of length 0`, (done) => { expect(searchBreed("bortail")).resolves.toHaveLength(0); done() })
  // test(`searchBreed("${TEST_SEARCH_TERM}") should include ${toJson( TEST_SEARCH_RESULT_INCLUDE )}`, (done) => { expect(searchBreed(TEST_SEARCH_TERM)).resolves.toEqual( expect.arrayContaining([expect.objectContaining(TEST_SEARCH_RESULT_INCLUDE)])); done() })
})