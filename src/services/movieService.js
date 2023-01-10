const movies = [
  {
    id: 1,
    name: "Captains of the Clouds",
    parameterized_name: "captains-of-the-clouds",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 25.19,
    owner_id: 1,
    created_at: "2023-01-08T19:09:37.873Z",
    updated_at: "2023-01-08T19:09:37.873Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 1,
        name: "Action",
        parameterized_name: "action",
        created_at: "2023-01-08T19:09:37.845Z",
        updated_at: "2023-01-08T19:09:37.845Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 3,
        name: "War",
        parameterized_name: "war",
        created_at: "2023-01-08T19:09:37.852Z",
        updated_at: "2023-01-08T19:09:37.852Z",
      },
    ],
  },
  {
    id: 2,
    name: "Odessa File, The",
    parameterized_name: "odessa-file-the",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 16.41,
    owner_id: 2,
    created_at: "2023-01-08T19:09:37.930Z",
    updated_at: "2023-01-08T19:09:37.930Z",
    owner: {
      id: 2,
      name: "Luis Miguel",
      parameterized_name: "luis-miguel",
      created_at: "2023-01-08T19:09:37.921Z",
      updated_at: "2023-01-08T19:09:37.921Z",
    },
    genres: [
      {
        id: 4,
        name: "Thriller",
        parameterized_name: "thriller",
        created_at: "2023-01-08T19:09:37.925Z",
        updated_at: "2023-01-08T19:09:37.925Z",
      },
    ],
  },
  {
    id: 3,
    name: "Other Woman, The",
    parameterized_name: "other-woman-the",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 43.24,
    owner_id: 3,
    created_at: "2023-01-08T19:09:37.949Z",
    updated_at: "2023-01-08T19:09:37.949Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
      {
        id: 6,
        name: "Romance",
        parameterized_name: "romance",
        created_at: "2023-01-08T19:09:37.942Z",
        updated_at: "2023-01-08T19:09:37.942Z",
      },
    ],
  },
  {
    id: 4,
    name: "Tourist, The",
    parameterized_name: "tourist-the",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 40.41,
    owner_id: 3,
    created_at: "2023-01-08T19:09:37.960Z",
    updated_at: "2023-01-08T19:09:37.960Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 4,
        name: "Thriller",
        parameterized_name: "thriller",
        created_at: "2023-01-08T19:09:37.925Z",
        updated_at: "2023-01-08T19:09:37.925Z",
      },
    ],
  },
  {
    id: 5,
    name: "Autobiography of Nicolae Ceausescu, The (Autobiografia lui Nicolae Ceausescu)",
    parameterized_name:
      "autobiography-of-nicolae-ceausescu-the-autobiografia-lui-nicolae-ceausescu",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 36.19,
    owner_id: 4,
    created_at: "2023-01-08T19:09:37.975Z",
    updated_at: "2023-01-08T19:09:37.975Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 7,
        name: "Documentary",
        parameterized_name: "documentary",
        created_at: "2023-01-08T19:09:37.970Z",
        updated_at: "2023-01-08T19:09:37.970Z",
      },
    ],
  },
  {
    id: 6,
    name: "Kickboxer 2: The Road Back",
    parameterized_name: "kickboxer-2-the-road-back",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 12.34,
    owner_id: 5,
    created_at: "2023-01-08T19:09:37.988Z",
    updated_at: "2023-01-08T19:09:37.988Z",
    owner: {
      id: 5,
      name: "Jim Cruise",
      parameterized_name: "jim-cruise",
      created_at: "2023-01-08T19:09:37.980Z",
      updated_at: "2023-01-08T19:09:37.980Z",
    },
    genres: [
      {
        id: 1,
        name: "Action",
        parameterized_name: "action",
        created_at: "2023-01-08T19:09:37.845Z",
        updated_at: "2023-01-08T19:09:37.845Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 7,
    name: "Mardock Scramble: The Second Combustion",
    parameterized_name: "mardock-scramble-the-second-combustion",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 11.71,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.005Z",
    updated_at: "2023-01-08T19:09:38.005Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 8,
        name: "Animation",
        parameterized_name: "animation",
        created_at: "2023-01-08T19:09:37.995Z",
        updated_at: "2023-01-08T19:09:37.995Z",
      },
      {
        id: 9,
        name: "Sci-Fi",
        parameterized_name: "sci-fi",
        created_at: "2023-01-08T19:09:37.998Z",
        updated_at: "2023-01-08T19:09:37.998Z",
      },
    ],
  },
  {
    id: 8,
    name: "Never Back Down",
    parameterized_name: "never-back-down",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 16.97,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.017Z",
    updated_at: "2023-01-08T19:09:38.017Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 1,
        name: "Action",
        parameterized_name: "action",
        created_at: "2023-01-08T19:09:37.845Z",
        updated_at: "2023-01-08T19:09:37.845Z",
      },
    ],
  },
  {
    id: 9,
    name: "Second Man, The (O Defteros Andras)",
    parameterized_name: "second-man-the-o-defteros-andras",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 37.33,
    owner_id: 5,
    created_at: "2023-01-08T19:09:38.025Z",
    updated_at: "2023-01-08T19:09:38.025Z",
    owner: {
      id: 5,
      name: "Jim Cruise",
      parameterized_name: "jim-cruise",
      created_at: "2023-01-08T19:09:37.980Z",
      updated_at: "2023-01-08T19:09:37.980Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 10,
    name: "I Accuse",
    parameterized_name: "i-accuse",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 11.98,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.040Z",
    updated_at: "2023-01-08T19:09:38.040Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 10,
        name: "Crime",
        parameterized_name: "crime",
        created_at: "2023-01-08T19:09:38.030Z",
        updated_at: "2023-01-08T19:09:38.030Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 4,
        name: "Thriller",
        parameterized_name: "thriller",
        created_at: "2023-01-08T19:09:37.925Z",
        updated_at: "2023-01-08T19:09:37.925Z",
      },
    ],
  },
  {
    id: 11,
    name: "Animal Room",
    parameterized_name: "animal-room",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 35.7,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.051Z",
    updated_at: "2023-01-08T19:09:38.051Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 4,
        name: "Thriller",
        parameterized_name: "thriller",
        created_at: "2023-01-08T19:09:37.925Z",
        updated_at: "2023-01-08T19:09:37.925Z",
      },
    ],
  },
  {
    id: 12,
    name: "Suburban Commando",
    parameterized_name: "suburban-commando",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 25.73,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.061Z",
    updated_at: "2023-01-08T19:09:38.061Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
      {
        id: 9,
        name: "Sci-Fi",
        parameterized_name: "sci-fi",
        created_at: "2023-01-08T19:09:37.998Z",
        updated_at: "2023-01-08T19:09:37.998Z",
      },
    ],
  },
  {
    id: 13,
    name: "Kein Bund für's Leben",
    parameterized_name: "kein-bund-fur-s-leben",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 23.37,
    owner_id: 2,
    created_at: "2023-01-08T19:09:38.070Z",
    updated_at: "2023-01-08T19:09:38.070Z",
    owner: {
      id: 2,
      name: "Luis Miguel",
      parameterized_name: "luis-miguel",
      created_at: "2023-01-08T19:09:37.921Z",
      updated_at: "2023-01-08T19:09:37.921Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
    ],
  },
  {
    id: 14,
    name: "Age of the Dragons",
    parameterized_name: "age-of-the-dragons",
    thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 17.12,
    owner_id: 5,
    created_at: "2023-01-08T19:09:38.087Z",
    updated_at: "2023-01-08T19:09:38.087Z",
    owner: {
      id: 5,
      name: "Jim Cruise",
      parameterized_name: "jim-cruise",
      created_at: "2023-01-08T19:09:37.980Z",
      updated_at: "2023-01-08T19:09:37.980Z",
    },
    genres: [
      {
        id: 1,
        name: "Action",
        parameterized_name: "action",
        created_at: "2023-01-08T19:09:37.845Z",
        updated_at: "2023-01-08T19:09:37.845Z",
      },
      {
        id: 11,
        name: "Adventure",
        parameterized_name: "adventure",
        created_at: "2023-01-08T19:09:38.076Z",
        updated_at: "2023-01-08T19:09:38.076Z",
      },
      {
        id: 12,
        name: "Fantasy",
        parameterized_name: "fantasy",
        created_at: "2023-01-08T19:09:38.079Z",
        updated_at: "2023-01-08T19:09:38.079Z",
      },
    ],
  },
  {
    id: 15,
    name: "Abbott and Costello Meet Frankenstein",
    parameterized_name: "abbott-and-costello-meet-frankenstein",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 17.09,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.101Z",
    updated_at: "2023-01-08T19:09:38.101Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
      {
        id: 13,
        name: "Horror",
        parameterized_name: "horror",
        created_at: "2023-01-08T19:09:38.094Z",
        updated_at: "2023-01-08T19:09:38.094Z",
      },
    ],
  },
  {
    id: 16,
    name: "Darktown Strutters (Get Down and Boogie)",
    parameterized_name: "darktown-strutters-get-down-and-boogie",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 19.41,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.115Z",
    updated_at: "2023-01-08T19:09:38.115Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 1,
        name: "Action",
        parameterized_name: "action",
        created_at: "2023-01-08T19:09:37.845Z",
        updated_at: "2023-01-08T19:09:37.845Z",
      },
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
      {
        id: 14,
        name: "Musical",
        parameterized_name: "musical",
        created_at: "2023-01-08T19:09:38.108Z",
        updated_at: "2023-01-08T19:09:38.108Z",
      },
    ],
  },
  {
    id: 17,
    name: "Fjorton suger",
    parameterized_name: "fjorton-suger",
    thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 30.61,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.127Z",
    updated_at: "2023-01-08T19:09:38.127Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 6,
        name: "Romance",
        parameterized_name: "romance",
        created_at: "2023-01-08T19:09:37.942Z",
        updated_at: "2023-01-08T19:09:37.942Z",
      },
    ],
  },
  {
    id: 18,
    name: "Yuva",
    parameterized_name: "yuva",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 41.82,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.141Z",
    updated_at: "2023-01-08T19:09:38.141Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 1,
        name: "Action",
        parameterized_name: "action",
        created_at: "2023-01-08T19:09:37.845Z",
        updated_at: "2023-01-08T19:09:37.845Z",
      },
      {
        id: 11,
        name: "Adventure",
        parameterized_name: "adventure",
        created_at: "2023-01-08T19:09:38.076Z",
        updated_at: "2023-01-08T19:09:38.076Z",
      },
      {
        id: 10,
        name: "Crime",
        parameterized_name: "crime",
        created_at: "2023-01-08T19:09:38.030Z",
        updated_at: "2023-01-08T19:09:38.030Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 19,
    name: "The Cobbler",
    parameterized_name: "the-cobbler",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 37.56,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.155Z",
    updated_at: "2023-01-08T19:09:38.155Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 12,
        name: "Fantasy",
        parameterized_name: "fantasy",
        created_at: "2023-01-08T19:09:38.079Z",
        updated_at: "2023-01-08T19:09:38.079Z",
      },
    ],
  },
  {
    id: 20,
    name: "I Am Number Four",
    parameterized_name: "i-am-number-four",
    thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 10.58,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.173Z",
    updated_at: "2023-01-08T19:09:38.173Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 1,
        name: "Action",
        parameterized_name: "action",
        created_at: "2023-01-08T19:09:37.845Z",
        updated_at: "2023-01-08T19:09:37.845Z",
      },
      {
        id: 9,
        name: "Sci-Fi",
        parameterized_name: "sci-fi",
        created_at: "2023-01-08T19:09:37.998Z",
        updated_at: "2023-01-08T19:09:37.998Z",
      },
      {
        id: 4,
        name: "Thriller",
        parameterized_name: "thriller",
        created_at: "2023-01-08T19:09:37.925Z",
        updated_at: "2023-01-08T19:09:37.925Z",
      },
      {
        id: 15,
        name: "IMAX",
        parameterized_name: "imax",
        created_at: "2023-01-08T19:09:38.164Z",
        updated_at: "2023-01-08T19:09:38.164Z",
      },
    ],
  },
  {
    id: 21,
    name: "Time Out (L'emploi du temps)",
    parameterized_name: "time-out-l-emploi-du-temps",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 19.21,
    owner_id: 5,
    created_at: "2023-01-08T19:09:38.183Z",
    updated_at: "2023-01-08T19:09:38.183Z",
    owner: {
      id: 5,
      name: "Jim Cruise",
      parameterized_name: "jim-cruise",
      created_at: "2023-01-08T19:09:37.980Z",
      updated_at: "2023-01-08T19:09:37.980Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 22,
    name: "PCU",
    parameterized_name: "pcu",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 16.43,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.191Z",
    updated_at: "2023-01-08T19:09:38.191Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
    ],
  },
  {
    id: 23,
    name: "Men in War",
    parameterized_name: "men-in-war",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 36.84,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.200Z",
    updated_at: "2023-01-08T19:09:38.200Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 3,
        name: "War",
        parameterized_name: "war",
        created_at: "2023-01-08T19:09:37.852Z",
        updated_at: "2023-01-08T19:09:37.852Z",
      },
    ],
  },
  {
    id: 24,
    name: "Tree of Knowledge, The (Kundskabens træ)",
    parameterized_name: "tree-of-knowledge-the-kundskabens-trae",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 41.98,
    owner_id: 2,
    created_at: "2023-01-08T19:09:38.209Z",
    updated_at: "2023-01-08T19:09:38.209Z",
    owner: {
      id: 2,
      name: "Luis Miguel",
      parameterized_name: "luis-miguel",
      created_at: "2023-01-08T19:09:37.921Z",
      updated_at: "2023-01-08T19:09:37.921Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 25,
    name: "Face to Face (Faccia a faccia)",
    parameterized_name: "face-to-face-faccia-a-faccia",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 16.74,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.221Z",
    updated_at: "2023-01-08T19:09:38.221Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 11,
        name: "Adventure",
        parameterized_name: "adventure",
        created_at: "2023-01-08T19:09:38.076Z",
        updated_at: "2023-01-08T19:09:38.076Z",
      },
      {
        id: 16,
        name: "Western",
        parameterized_name: "western",
        created_at: "2023-01-08T19:09:38.215Z",
        updated_at: "2023-01-08T19:09:38.215Z",
      },
    ],
  },
  {
    id: 26,
    name: "Love's Deadly Triangle: The Texas Cadet Murder",
    parameterized_name: "love-s-deadly-triangle-the-texas-cadet-murder",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 10.03,
    owner_id: 2,
    created_at: "2023-01-08T19:09:38.229Z",
    updated_at: "2023-01-08T19:09:38.229Z",
    owner: {
      id: 2,
      name: "Luis Miguel",
      parameterized_name: "luis-miguel",
      created_at: "2023-01-08T19:09:37.921Z",
      updated_at: "2023-01-08T19:09:37.921Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 27,
    name: "Day for Night (La Nuit Américaine)",
    parameterized_name: "day-for-night-la-nuit-americaine",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 35.05,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.242Z",
    updated_at: "2023-01-08T19:09:38.242Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 6,
        name: "Romance",
        parameterized_name: "romance",
        created_at: "2023-01-08T19:09:37.942Z",
        updated_at: "2023-01-08T19:09:37.942Z",
      },
    ],
  },
  {
    id: 28,
    name: "Late Bloomers",
    parameterized_name: "late-bloomers",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 22.9,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.251Z",
    updated_at: "2023-01-08T19:09:38.251Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
    ],
  },
  {
    id: 29,
    name: "Kid \u0026 I, The",
    parameterized_name: "kid-i-the",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 19.74,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.259Z",
    updated_at: "2023-01-08T19:09:38.259Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
    ],
  },
  {
    id: 30,
    name: "Birth of a Nation, The",
    parameterized_name: "birth-of-a-nation-the",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 27.72,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.269Z",
    updated_at: "2023-01-08T19:09:38.269Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 3,
        name: "War",
        parameterized_name: "war",
        created_at: "2023-01-08T19:09:37.852Z",
        updated_at: "2023-01-08T19:09:37.852Z",
      },
    ],
  },
  {
    id: 31,
    name: "Ladyhawke",
    parameterized_name: "ladyhawke",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 11.81,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.280Z",
    updated_at: "2023-01-08T19:09:38.280Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 11,
        name: "Adventure",
        parameterized_name: "adventure",
        created_at: "2023-01-08T19:09:38.076Z",
        updated_at: "2023-01-08T19:09:38.076Z",
      },
      {
        id: 12,
        name: "Fantasy",
        parameterized_name: "fantasy",
        created_at: "2023-01-08T19:09:38.079Z",
        updated_at: "2023-01-08T19:09:38.079Z",
      },
      {
        id: 6,
        name: "Romance",
        parameterized_name: "romance",
        created_at: "2023-01-08T19:09:37.942Z",
        updated_at: "2023-01-08T19:09:37.942Z",
      },
    ],
  },
  {
    id: 32,
    name: "Last Witness, The",
    parameterized_name: "last-witness-the",
    thumbnail: "http://dummyimage.com/100x100.png/ff4444/ffffff",
    image: "http://dummyimage.com/400x.png/cc0000/ffffff",
    market_price: 29.84,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.291Z",
    updated_at: "2023-01-08T19:09:38.291Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 4,
        name: "Thriller",
        parameterized_name: "thriller",
        created_at: "2023-01-08T19:09:37.925Z",
        updated_at: "2023-01-08T19:09:37.925Z",
      },
    ],
  },
  {
    id: 33,
    name: "The Vixen",
    parameterized_name: "the-vixen",
    thumbnail: "http://dummyimage.com/100x100.png/dddddd/000000",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 22.33,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.300Z",
    updated_at: "2023-01-08T19:09:38.300Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
    ],
  },
  {
    id: 34,
    name: "My Dog Tulip",
    parameterized_name: "my-dog-tulip",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/ff4444/ffffff",
    market_price: 11.33,
    owner_id: 3,
    created_at: "2023-01-08T19:09:38.309Z",
    updated_at: "2023-01-08T19:09:38.309Z",
    owner: {
      id: 3,
      name: "Morgan Reeves",
      parameterized_name: "morgan-reeves",
      created_at: "2023-01-08T19:09:37.935Z",
      updated_at: "2023-01-08T19:09:37.935Z",
    },
    genres: [
      {
        id: 8,
        name: "Animation",
        parameterized_name: "animation",
        created_at: "2023-01-08T19:09:37.995Z",
        updated_at: "2023-01-08T19:09:37.995Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 35,
    name: "Accidental Tourist, The",
    parameterized_name: "accidental-tourist-the",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 27.41,
    owner_id: 2,
    created_at: "2023-01-08T19:09:38.321Z",
    updated_at: "2023-01-08T19:09:38.321Z",
    owner: {
      id: 2,
      name: "Luis Miguel",
      parameterized_name: "luis-miguel",
      created_at: "2023-01-08T19:09:37.921Z",
      updated_at: "2023-01-08T19:09:37.921Z",
    },
    genres: [
      {
        id: 5,
        name: "Comedy",
        parameterized_name: "comedy",
        created_at: "2023-01-08T19:09:37.939Z",
        updated_at: "2023-01-08T19:09:37.939Z",
      },
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 6,
        name: "Romance",
        parameterized_name: "romance",
        created_at: "2023-01-08T19:09:37.942Z",
        updated_at: "2023-01-08T19:09:37.942Z",
      },
    ],
  },
  {
    id: 36,
    name: "Night of the Zombies (a.k.a. Batallion of the Living Dead)",
    parameterized_name:
      "night-of-the-zombies-a-k-a-batallion-of-the-living-dead",
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 12.39,
    owner_id: 5,
    created_at: "2023-01-08T19:09:38.333Z",
    updated_at: "2023-01-08T19:09:38.333Z",
    owner: {
      id: 5,
      name: "Jim Cruise",
      parameterized_name: "jim-cruise",
      created_at: "2023-01-08T19:09:37.980Z",
      updated_at: "2023-01-08T19:09:37.980Z",
    },
    genres: [
      {
        id: 13,
        name: "Horror",
        parameterized_name: "horror",
        created_at: "2023-01-08T19:09:38.094Z",
        updated_at: "2023-01-08T19:09:38.094Z",
      },
      {
        id: 9,
        name: "Sci-Fi",
        parameterized_name: "sci-fi",
        created_at: "2023-01-08T19:09:37.998Z",
        updated_at: "2023-01-08T19:09:37.998Z",
      },
    ],
  },
  {
    id: 37,
    name: "Note by Note: The Making of Steinway L1037",
    parameterized_name: "note-by-note-the-making-of-steinway-l1037",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 35.03,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.341Z",
    updated_at: "2023-01-08T19:09:38.341Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 7,
        name: "Documentary",
        parameterized_name: "documentary",
        created_at: "2023-01-08T19:09:37.970Z",
        updated_at: "2023-01-08T19:09:37.970Z",
      },
    ],
  },
  {
    id: 38,
    name: "Nativity Story, The",
    parameterized_name: "nativity-story-the",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/5fa2dd/ffffff",
    market_price: 22.88,
    owner_id: 1,
    created_at: "2023-01-08T19:09:38.348Z",
    updated_at: "2023-01-08T19:09:38.348Z",
    owner: {
      id: 1,
      name: "Martin Lopez",
      parameterized_name: "martin-lopez",
      created_at: "2023-01-08T19:09:37.803Z",
      updated_at: "2023-01-08T19:09:37.803Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 39,
    name: "Fiorile",
    parameterized_name: "fiorile",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 17.03,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.358Z",
    updated_at: "2023-01-08T19:09:38.358Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
    ],
  },
  {
    id: 40,
    name: "Onegin",
    parameterized_name: "onegin",
    thumbnail: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    image: "http://dummyimage.com/400x.png/dddddd/000000",
    market_price: 21.82,
    owner_id: 4,
    created_at: "2023-01-08T19:09:38.368Z",
    updated_at: "2023-01-08T19:09:38.368Z",
    owner: {
      id: 4,
      name: "Jhon Doe",
      parameterized_name: "jhon-doe",
      created_at: "2023-01-08T19:09:37.966Z",
      updated_at: "2023-01-08T19:09:37.966Z",
    },
    genres: [
      {
        id: 2,
        name: "Drama",
        parameterized_name: "drama",
        created_at: "2023-01-08T19:09:37.849Z",
        updated_at: "2023-01-08T19:09:37.849Z",
      },
      {
        id: 6,
        name: "Romance",
        parameterized_name: "romance",
        created_at: "2023-01-08T19:09:37.942Z",
        updated_at: "2023-01-08T19:09:37.942Z",
      },
    ],
  },
];

export function getMovies() {
  return movies;
}
