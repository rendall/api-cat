const data:any[] = [
  {
    "name": "Abyssinian",
    "country": "Ethiopia",
    "origin": "Natural",
    "bodyType": "Oriental",
	"coat": "Short",
    "pattern": "Ticked",
    "temperament": "Pleasant"
  },
  {
    "name": "Aegean",
    "country": "Greece",
    "origin": "Natural",
    "coat": "Semi-long",
    "pattern": "Bicolored or tricolored",
    "temperament": "Even-tempered"
  },
  {
    "name": "American Curl",
    "country": "United States",
    "origin": "Mutation",
    "coat": "Short/long",
    "pattern": "All",
    "temperament": "Relaxed"
  },
  {
    "name": "American Bobtail",
    "country": "United States",
    "origin": "Mutation",
    "coat": "Short/long",
    "pattern": "All",
    "temperament": "Disciplined"
  },
  {
    "name": "American Shorthair",
    "country": "United States",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "All but colorpoint",
    "temperament": "Quiet"
  },
  {
    "name": "American Wirehair",
    "country": "United States",
    "origin": "Mutation",
    "coat": "Rex",
    "pattern": "All but colorpoint",
    "temperament": "Stupendous"
  },
  {
    "name": "Aphrodite Giant",
    "country": "Cyprus",
    "origin": "Natural",
    "bodyType": "Lean and muscular",
    "coat": "All",
    "pattern": "All but cinammon and chocolate",
    "temperament": "Sweet and sour"
  },
  {
    "name": "Arabian Mau",
    "country": "Arabian Peninsula",
    "origin": "Natural",
    "coat": "Short",
    "temperament": "Fantastic"
  },
  {
    "name": "Australian Mist",
    "country": "Australia",
    "origin": "Crossbreed: Abyssinian and Burmese",
    "bodyType": "Moderate",
    "coat": "Short",
    "pattern": "Spotted or tabby",
    "temperament": "Wild"
  },
  {
    "name": "Asian",
    "country": "Developed in the United Kingdom (foundation stock from Asia)",
    "coat": "Short",
    "pattern": "Evenly solid",
    "temperament": "Resonant"
  },
  {
    "name": "Asian Semi-longhair",
    "country": "United Kingdom",
    "origin": "Crossbreed: Burmese and Domestic long-haired cat",
    "coat": "Semi-long",
    "pattern": "Evenly solid",
    "temperament": "Common"
  },
  {
    "name": "Balinese",
    "country": "Developed in the United States (foundation stock from Thailand)",
    "bodyType": "Oriental",
    "coat": "Long",
    "pattern": "Colorpoint",
    "temperament": "Fortunate"
  },
  {
    "name": "Bambino",
    "country": "United States",
    "origin": "Crossbreed: Munchkin and Sphynx",
    "bodyType": "Dwarf",
    "coat": "Hairless or downy",
    "temperament": "Empathic"
  },
  {
    "name": "Bengal",
    "country": "Developed in the United States (foundation stock from Asia)",
    "origin": "Hybrid: Abyssinian and Egyptian Mau",
    "coat": "Short",
    "pattern": "Spotted, marbled, or rosetted",
    "temperament": "Wonton"
  },
  {
    "name": "Birman",
    "country": "Developed in France (foundation stock from Burma, etc.)",
    "origin": "Crossbreed: original Birman (near extinction) with Persian and Siamese",
    "coat": "Semi-long",
    "pattern": "Colorpoint",
    "temperament": "Regular"
  },
  {
    "name": "Bombay",
    "country": "Developed in the United States (some foundation stock from Burma and Thailand)",
    "origin": "Crossbreed: American Shorthair and Burmese",
    "bodyType": "Moderate",
    "coat": "Short",
    "pattern": "Solid black",
    "temperament": "Decorous"
  },
  {
    "name": "Brazilian Shorthair",
    "country": "Brazil",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "All",
    "temperament": "Belligerant"
  },
  {
    "name": "British Longhair",
    "country": "United Kingdom",
    "bodyType": "Cobby",
    "coat": "Medium",
    "pattern": "All",
    "temperament": "Stable"
  },
  {
    "name": "British Shorthair",
    "country": "United Kingdom",
    "origin": "Natural",
    "bodyType": "Cobby",
    "coat": "Short",
    "pattern": "All",
    "temperament": "Solemn"
  },
  {
    "name": "British Longhair",
    "country": "United Kingdom",
    "bodyType": "Cobby",
    "coat": "Long",
    "pattern": "All",
    "temperament": "Caring"
  },
  {
    "name": "Burmese",
    "country": "Burma",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid",
    "temperament": "Flashy"
  },
  {
    "name": "Burmilla",
    "country": "United Kingdom",
    "origin": "Crossbreed: Burmese and Persian",
    "coat": "Short/long",
    "pattern": "Solid, in Silver Shaded and Silver Tipped patterns",
    "temperament": "Hateful"
  },
  {
    "name": "California Spangled",
    "country": "United States",
    "origin": "Crossbreed: Abyssinian, American Shorthair and British Shorthair",
    "coat": "Short",
    "pattern": "Spotted",
    "temperament": "Aggressive"
  },
  {
    "name": "Chantilly-Tiffany",
    "country": "United States",
    "pattern": "Solid, ticked, spotted and blotched tabby",
    "temperament": "Artistic"
  },
  {
    "name": "Chartreux",
    "country": "France",
    "origin": "Natural",
    "bodyType": "Cobby",
    "coat": "Short",
    "pattern": "Solid blue",
    "temperament": "Provincial"
  },
  {
    "name": "Chausie",
    "country": "France",
    "origin": "Hybrid: Abyssinian",
    "coat": "Short",
    "pattern": "Ticked",
    "temperament": "Flirtatious"
  },
  {
    "name": "Cheetoh",
    "country": "United States",
    "origin": "Crossbreed/hybrid: Bengal and Ocicat",
    "coat": "Short",
    "pattern": "Spotted",
    "temperament": "Slow"
  },
  {
    "name": "Colorpoint Shorthair",
    "coat": "Short",
    "pattern": "Colorpoint",
    "temperament": "Daffy"
  },
  {
    "name": "Cornish Rex",
    "country": "United Kingdom (England)",
    "origin": "Mutation",
    "coat": "Long",
    "pattern": "All but colorpoint",
    "temperament": "Athletic"
  },
  {
    "name": "Cyprus",
    "country": "Cyprus",
    "origin": "Natural",
    "bodyType": "Lean and muscular",
    "coat": "All",
    "pattern": "All but colorpoint and mink",
    "temperament": "Energetic"
  },
  {
    "name": "Devon Rex",
    "country": "United Kingdom (England)",
    "origin": "Mutation",
    "bodyType": "Oriental",
    "coat": "Rex",
    "pattern": "All",
    "temperament": "Intellectual"
  },
  {
    "name": "Donskoy",
    "country": "Russia",
    "coat": "Hairless",
    "temperament": "Lively"
  },
  {
    "name": "Dragon Li",
    "country": "China",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Striped tabby",
    "temperament": "Nasty"
  },
  {
    "name": "Dwelf",
    "origin": "Crossbreed: American Curl, Munchkin and Sphinx",
    "bodyType": "Dwarf",
    "coat": "Hairless",
    "temperament": "Witty"
  },
  {
    "name": "Egyptian Mau",
    "country": "Egypt",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Spotted",
    "temperament": "Soft-hearted"
  },
  {
    "name": "European Shorthair",
    "country": "Finland and Sweden",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "All but chocolate, lilac, cinnamon, fawn, amber, ticked, or colorpoint",
    "temperament": "Wistful"
  },
  {
    "name": "Exotic Shorthair",
    "country": "United States",
    "origin": "Crossbreed: American Shorthair and Persian",
    "bodyType": "Cobby",
    "coat": "Short",
    "pattern": "All",
    "temperament": "Simple-minded"
  },
  {
    "name": "Foldex",
    "country": "Canada",
    "origin": "Crossbreed: Exotic Shorthair and Scottish Fold",
    "bodyType": "Cobby",
    "coat": "Short",
    "pattern": "All",
    "temperament": "Overbearing"
  },
  {
    "name": "German Rex",
    "country": "East Germany",
    "origin": "Mutation",
    "coat": "Rex",
    "pattern": "All",
    "temperament": "Dry"
  },
  {
    "name": "Havana Brown",
    "country": "United Kingdom",
    "origin": "Crossbreed: Siamese and black domestic short-haired cats",
    "coat": "Short",
    "pattern": "Solid brown",
    "temperament": "Miserly"
  },
  {
    "name": "Highlander",
    "country": "United States",
    "origin": "Crossbreed/hybrid: Desert Lynx and Jungle Curl",
    "bodyType": "Moderate",
    "coat": "Short/long",
    "pattern": "All",
    "temperament": "Kind"
  },
  {
    "name": "Himalayan",
    "country": "United States and United Kingdom",
    "origin": "Crossbreed: Persian and Siamese",
    "bodyType": "Cobby",
    "coat": "Long",
    "pattern": "Colorpoint",
    "temperament": "Obnoxious"
  },
  {
    "name": "Japanese Bobtail",
    "country": "Japan",
    "origin": "Natural, mutation",
    "bodyType": "Moderate",
    "coat": "Short/long",
    "pattern": "All but colorpoint and ticked",
    "temperament": "Earthy"
  },
  {
    "name": "Javanese",
    "country": "Developed in the United States and Canada (foundation stock from Southeast Asia)",
    "origin": "Crossbreed: Balinese, with some Colorpoint Shorthair, Oriental Longhair and Siamese",
    "bodyType": "Oriental",
    "coat": "Long",
    "pattern": "Colorpoint",
    "temperament": "Assimilationist"
  },
  {
    "name": "Karelian Bobtail",
    "country": "Western Russia",
    "origin": "Natural, mutation",
    "temperament": "Paltry"
  },
  {
    "name": "Khao Manee",
    "country": "Thailand",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid white",
    "temperament": "Solid"
  },
  {
    "name": "Korat",
    "country": "Thailand",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid blue",
    "temperament": "Fastidious"
  },
  {
    "name": "Korean Bobtail",
    "country": "Korea",
    "origin": "Natural, mutation",
    "coat": "Short/long",
    "pattern": "Colorprint",
    "temperament": "Wheedling"
  },
  {
    "name": "Korn Ja",
    "country": "Thailand",
    "origin": "Natural",
    "coat": "Short/hairless",
    "pattern": "Solid",
    "temperament": "Curmudgeonly"
  },
  {
    "name": "Kurilian Bobtail",
    "country": "Eastern Russia and Japan",
    "origin": "Natural, mutation",
    "bodyType": "Semi-cobby",
    "coat": "Short/long",
    "pattern": "All but colorpoint",
    "temperament": "Adorable"
  },
  {
    "name": "LaPerm",
    "country": "United States",
    "origin": "Mutation",
    "bodyType": "Moderate",
    "coat": "Rex",
    "pattern": "All",
    "temperament": "Ethereal"
  },
  {
    "name": "Lykoi",
    "country": "United States",
    "origin": "Mutation",
    "coat": "Partly hairless",
    "pattern": "Ticked",
    "temperament": "Scrappy"
  },
  {
    "name": "Maine Coon",
    "country": "United States",
    "origin": "Natural",
    "bodyType": "Large",
    "coat": "Long",
    "pattern": "All but colorpoint and ticked",
    "temperament": "Cagey"
  },
  {
    "name": "Manx",
    "country": "United Kingdom (Isle of Man)",
    "origin": "Natural, mutation",
    "coat": "Short/long",
    "pattern": "All but colorpoint",
    "temperament": "Singular"
  },
  {
    "name": "Mekong Bobtail",
    "country": "Russia",
    "origin": "Mutation",
    "coat": "Short",
    "pattern": "Colorpoint",
    "temperament": "Uneven"
  },
  {
    "name": "Minskin",
    "country": "United States",
    "origin": "Crossbreed: Munchkin and Sphynx",
    "bodyType": "Dwarf; semi-cobby",
    "coat": "Short/hairless",
    "pattern": "All",
    "temperament": "Sulky"
  },
  {
    "name": "Munchkin",
    "country": "United States",
    "origin": "Mutation",
    "bodyType": "Dwarf",
    "coat": "Short/long",
    "pattern": "All",
    "temperament": "Decisive"
  },
  {
    "name": "Nebelung",
    "country": "United States",
    "coat": "Semi-long",
    "pattern": "Solid blue",
    "temperament": "Tightfisted"
  },
  {
    "name": "Napoleon",
    "coat": "Short/long",
    "pattern": "Varied",
    "temperament": "Agreeable"
  },
  {
    "name": "Norwegian Forest Cat",
    "country": "Norway",
    "origin": "Natural",
    "coat": "Long",
    "pattern": "Traditional, sepia, or mink",
    "temperament": "Odd"
  },
  {
    "name": "Ocicat",
    "country": "United States",
    "origin": "Crossbreed: Abyssinian, American Shorthair and Siamese",
    "coat": "Short",
    "pattern": "Spotted",
    "temperament": "Obstreperous"
  },
  {
    "name": "Ojos Azules",
    "country": "United States",
    "pattern": "All",
    "temperament": "Introspective"
  },
  {
    "name": "Oregon Rex",
    "country": "United States",
    "origin": "Mutation",
    "coat": "Rex",
    "temperament": "Honest"
  },
  {
    "name": "Oriental Bicolor",
    "country": "Developed in the United States and United Kingdom, later in Continental Europe; foundation stock ultimately from Thailand",
    "bodyType": "Oriental",
    "pattern": "Bicolor",
    "temperament": "Plucky"
  },
  {
    "name": "Oriental Shorthair",
    "country": "Developed in the United States and later the United Kingdom; foundation stock ultimately from Thailand",
    "origin": "Crossbreed: European Shorthair and Siamese",
    "bodyType": "Oriental",
    "coat": "Short",
    "pattern": "All but colorpoint",
    "temperament": "Illustrious"
  },
  {
    "name": "Oriental Longhair",
    "country": "Developed in the United Kingdom and United States; foundation stock ultimately from Thailand",
    "bodyType": "Oriental",
    "coat": "Semi-long",
    "pattern": "All but colorpoint",
    "temperament": "Meek"
  },
  {
    "name": "Persian",
    "country": "Greater Iran",
    "origin": "Natural, but some crossing with Turkish Angora",
    "bodyType": "Cobby",
    "coat": "Long",
    "pattern": "All",
    "temperament": "Unassuming"
  },
  {
    "name": "Peterbald",
    "country": "Russia",
    "origin": "Crossbreed: Donskoy, Oriental Shorthair and Siamese; early: Balinese and Javanese",
    "bodyType": "Oriental",
    "coat": "Hairless/flocked, velour, brush, or straight coat",
    "pattern": "All",
    "temperament": "Energetic"
  },
  {
    "name": "Pixie-bob",
    "country": "United States",
    "origin": "Mutation (falsely claimed to be a bobcat hybrid early on)",
    "coat": "Short",
    "pattern": "Spotted",
    "temperament": "Foregoing"
  },
  {
    "name": "Raas",
    "country": "Indonesia",
    "origin": "Natural",
    "coat": "Short",
    "temperament": "Habitual"
  },
  {
    "name": "Ragamuffin",
    "country": "United States",
    "origin": "Crossbreed: Ragdoll with limited out-crossing to Himalayan, Persian, other Domestic long-haired cats",
    "bodyType": "Cobby",
    "coat": "Long",
    "pattern": "All",
    "temperament": "Diligent"
  },
  {
    "name": "Ragdoll",
    "country": "United States",
    "origin": "Mutation (behavioral) in a crossbreed, presumed Persian or Turkish Angora and Birman or Burmese",
    "bodyType": "Cobby",
    "coat": "Long",
    "pattern": "Colorpoint, mitted, or bicolor",
    "temperament": "Quickest"
  },
  {
    "name": "Russian Blue",
    "country": "Russia",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid blue",
    "temperament": "Absorbed"
  },
  {
    "name": "Sam Sawet",
    "country": "Thailand",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid",
    "temperament": "Clumsy"
  },
  {
    "name": "Savannah",
    "country": "United States",
    "origin": "Hybrid: Domestic cat",
    "bodyType": "Large",
    "coat": "Short",
    "pattern": "Spotted",
    "temperament": "Dusty"
  },
  {
    "name": "Scottish Fold",
    "country": "United Kingdom (Scotland)",
    "origin": "Mutation",
    "bodyType": "Cobby",
    "coat": "Short/long",
    "pattern": "All",
    "temperament": "Charming"
  },
  {
    "name": "Selkirk Rex",
    "country": "United States",
    "origin": "Mutation, crossbreed: American Shorthair, Persian, Himalayan, Exotic Shorthair and British Shorthair",
    "coat": "Rex (Short/long)",
    "pattern": "All",
    "temperament": "Careful"
  },
  {
    "name": "Serengeti",
    "country": "United States",
    "origin": "Crossbreed/hybrid: Bengal and Oriental Shorthair",
    "coat": "Short",
    "pattern": "Spotted",
    "temperament": "Adhesive"
  },
  {
    "name": "Serrade petit",
    "country": "France",
    "origin": "Natural",
    "coat": "Short",
    "temperament": "Heady"
  },
  {
    "name": "Siamese",
    "country": "Developed in the United States and Europe (foundation stock from Thailand)",
    "origin": "Mutation, from traditional Siamese (now known as Thai)",
    "bodyType": "Oriental",
    "coat": "Short",
    "pattern": "Colorpoint",
    "temperament": "Nonstop"
  },
  {
    "name": "Siberian",
    "country": "Russia",
    "origin": "Natural",
    "bodyType": "Semi-cobby",
    "coat": "Semi-long",
    "pattern": "All",
    "temperament": "Obtainable"
  },
  {
    "name": "Singapura",
    "country": "United States",
    "origin": "Crossbreed: Burmese and Abyssinian",
    "coat": "Short",
    "pattern": "Ticked",
    "temperament": "Adventurous"
  },
  {
    "name": "Snowshoe",
    "country": "United States",
    "origin": "Crossbreed: American Shorthair and Siamese",
    "coat": "Short",
    "pattern": "Colorpoint",
    "temperament": "Tangible"
  },
  {
    "name": "Sokoke",
    "country": "Kenya",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Tabby with ticking",
    "temperament": "Violent"
  },
  {
    "name": "Somali",
    "country": "Somalia",
    "origin": "Mutation",
    "coat": "Long",
    "pattern": "Ticked",
    "temperament": "Solid"
  },
  {
    "name": "Sphynx",
    "country": "Canada",
    "origin": "Mutation",
    "bodyType": "Oriental",
    "coat": "Hairless",
    "pattern": "All",
    "temperament": "Boisterous"
  },
  {
    "name": "Suphalak",
    "country": "Thailand",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid",
    "temperament": "Rustic"
  },
  {
    "name": "Thai",
    "country": "Thailand",
    "origin": "Natural",
    "bodyType": "Moderate",
    "coat": "Short",
    "pattern": "Colorpoint",
    "temperament": "Reflective"
  },
  {
    "name": "Thai Lilac",
    "country": "Thailand",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid lilac",
    "temperament": "Responsible"
  },
  {
    "name": "Tonkinese",
    "country": "Canada",
    "origin": "Crossbreed: Burmese and Siamese",
    "coat": "Short",
    "pattern": "Colorpoint, mink, or solid",
    "temperament": "Common"
  },
  {
    "name": "Toyger",
    "country": "United States",
    "origin": "Crossbreed/hybrid: Bengal and domestic short-haired cats",
    "bodyType": "Moderate",
    "coat": "Short",
    "pattern": "Striped",
    "temperament": "Obsequious"
  },
  {
    "name": "Turkish Angora",
    "country": "Turkey",
    "origin": "Natural",
    "coat": "Semi-long",
    "pattern": "All but colorpoint",
    "temperament": "Common"
  },
  {
    "name": "Turkish Van",
    "country": "Developed in the United Kingdom (foundation stock from Turkey)",
    "origin": "Natural",
    "coat": "Semi-long",
    "pattern": "Van pattern",
    "temperament": "Fantastic"
  },
  {
    "name": "Ukrainian Levkoy",
    "country": "Ukraine",
    "coat": "Hairless",
    "temperament": "Tawdry"
  },
  {
    "name": "Wila Krungthep",
    "country": "Thailand",
    "origin": "Natural",
    "coat": "Short",
    "pattern": "Solid",
    "temperament": "Basic"
  },
  {
    "name": "York Chocolate",
    "country": "United States (New York)",
    "origin": "Natural",
    "coat": "Long",
    "pattern": "Solid brown",
    "temperament": "Common"
  }
]

export const getById = (id:number) => id >= 0 && id < data.length? data[id] : null
export const getAll = ():{name:string, id:number}[] => data.map( ( b,i ) => ( {name:b.name, id:i} ))
export const search = (term:string) => data.filter( b => b.name.toLowerCase().indexOf(term.toLowerCase()) >= 0)