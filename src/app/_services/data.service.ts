import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {

    // Movie in memory Database with one movie initially
    let movies = [
      {
        adult: false,
        backdrop_path: '/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
        belongs_to_collection: {
          id: 528,
          name: 'The Terminator Collection',
          poster_path: '/vxiKtcxAJxHhlg2H1X8y7zcM3k6.jpg',
          backdrop_path: '/cpmbkwSxZnKO69V82A9a34tvk2E.jpg'
        },
        budget: 160000000,
        genres: [
          {
            id: 28,
            name: 'Action'
          },
          {
            id: 878,
            name: 'Science Fiction'
          }
        ],
        homepage: null,
        id: 290859,
        imdb_id: 'tt6450804',
        original_language: 'en',
        original_title: 'Terminator: Dark Fate',
        overview:
          "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
        popularity: 224.483,
        poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
        production_companies: [
          {
            id: 574,
            logo_path: '/iB6GjNVHs5hOqcEYt2rcjBqIjki.png',
            name: 'Lightstorm Entertainment',
            origin_country: 'US'
          },
          {
            id: 82819,
            logo_path: '/5Z8WWr0Lf1tInVWwJsxPP0uMz9a.png',
            name: 'Skydance Media',
            origin_country: 'US'
          },
          {
            id: 25,
            logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
            name: '20th Century Fox',
            origin_country: 'US'
          },
          {
            id: 4,
            logo_path: '/fycMZt242LVjagMByZOLUGbCvv3.png',
            name: 'Paramount',
            origin_country: 'US'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'CN',
            name: 'China'
          },
          {
            iso_3166_1: 'US',
            name: 'United States of America'
          }
        ],
        release_date: '2019-10-23',
        revenue: 0,
        runtime: 128,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English'
          },
          {
            iso_639_1: 'es',
            name: 'Español'
          }
        ],
        status: 'Released',
        tagline: 'Welcome to the day after judgement day',
        title: 'Terminator: Dark Fate',
        video: false,
        vote_average: 6.6,
        vote_count: 126
      }
    ];
    return { movies };
  }
}
