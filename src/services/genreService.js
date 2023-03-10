// TODO: Replace this with a real API call
const genres = [
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
  {
    id: 4,
    name: "Thriller",
    parameterized_name: "thriller",
    created_at: "2023-01-08T19:09:37.925Z",
    updated_at: "2023-01-08T19:09:37.925Z",
  },
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
  {
    id: 7,
    name: "Documentary",
    parameterized_name: "documentary",
    created_at: "2023-01-08T19:09:37.970Z",
    updated_at: "2023-01-08T19:09:37.970Z",
  },
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
  {
    id: 10,
    name: "Crime",
    parameterized_name: "crime",
    created_at: "2023-01-08T19:09:38.030Z",
    updated_at: "2023-01-08T19:09:38.030Z",
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
  {
    id: 13,
    name: "Horror",
    parameterized_name: "horror",
    created_at: "2023-01-08T19:09:38.094Z",
    updated_at: "2023-01-08T19:09:38.094Z",
  },
  {
    id: 14,
    name: "Musical",
    parameterized_name: "musical",
    created_at: "2023-01-08T19:09:38.108Z",
    updated_at: "2023-01-08T19:09:38.108Z",
  },
  {
    id: 15,
    name: "IMAX",
    parameterized_name: "imax",
    created_at: "2023-01-08T19:09:38.164Z",
    updated_at: "2023-01-08T19:09:38.164Z",
  },
  {
    id: 16,
    name: "Western",
    parameterized_name: "western",
    created_at: "2023-01-08T19:09:38.215Z",
    updated_at: "2023-01-08T19:09:38.215Z",
  },
];

export function getGenres() {
  return genres;
}
