# Blackhole API

A NestJS API for managing blackhole data and integrating with AstronomyAPI for astronomical data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Changelog](#changelog)
- [License](#license)

## Features

- Create, Read, Update, and Delete (CRUD) operations for blackholes.
- Upload and manage blackhole images.
- Fetch planetary positions, star charts, moon phases, and search astronomical data from AstronomyAPI.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/blog/release/v18.19.0) v.18.19.0
- [NestJS](https://nestjs.com/)
- [AstronomyAPI](https://astronomyapi.com/)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/AysllaGomes/blackhole-api.git

2. Install dependencies:

   ```bash
      npm install
    ``` 

3. Set up your environment variables. **'src/config/environment.ts'** file in the project root and add your AstronomyAPI credentials:

   ```bash
      ASTRONOMY_API_APP_ID=your_app_id
      ASTRONOMY_API_APP_SECRET=your_app_secret
   ``` 

4. Running the Application:

    ```bash
    # development
    $ npm run start
    
    # watch mode
    $ npm run start:dev
    
    # production mode
    $ npm run start:prod
    ```

The API will be available at http://localhost:3000.

## Swagger

The API uses Swagger to provide interactive documentation. You can access full documentation of available endpoints and test API calls directly through the Swagger UI.

To access the Swagger documentation:

- Start the application.
- Navigate to http://localhost:3000/api-docs.

## API Endpoints
## Blackholes

### Get all blackholes
- URL: `/blackholes`
- Method: `GET`

### Get a blackhole by ID
- URL: `/blackholes/:id`
- Method: `GET`

### Create a new blackhole
- URL: `/blackholes`
- Method: `POST`
- Body:

    ```bash
   {
      "name": "Sagittarius A*",
      "mass": "4.1 million solar masses",
      "distance": "26,000 light years",
      "description": "The supermassive black hole at the center of the Milky Way.",
      "image": "string",
      "eventHorizonSize": "10 million km",
      "schwarzschildRadius": "3.2 x 10^6",
      "density": "1.4 x 10^18 kg/m^3"
   }
    ```

### Update a blackhole
- URL: `/blackholes/:id`
- Method: `PUT`
- Body: 

    ```bash
    {
       "id": 1,
       "name": "Sagittarius A*",
       "mass": "4.1 million solar masses",
       "distance": "26,000 light years",
       "description": "The supermassive black hole at the center of the Milky Way.",
       "eventHorizonSize": "10 million km",
       "schwarzschildRadius": "3.2 x 10^6",
       "density": "1.4 x 10^18 kg/m^3"
    }
    ```

### Delete a blackhole
- URL: `/blackholes/:id`
- Method: `DELETE`

### Upload a blackhole image
- URL: `/blackholes/upload`
- Method: `POST`
- Body:
   - id - ID of the blackhole
   - image - Image file

## Astronomy

### Get planetary positions
- URL: `/astronomy/planetary-positions`
- Method: `GET`

### Get star chart
- URL: `/astronomy/star-chart`
- Method: `GET`

### Get moon phase
- URL: `/astronomy/moon-phase`
- Method: `GET`

### Search astronomical data
- URL: `/astronomy/search`
- Method: `GET`
- Query Parameter:
  - `query` - Search term

## Changelog

All major changes to this project are documented in the file [CHANGELOG](./CHANGELOG.md).

## License

This project is licensed under the MIT License - see the [MIT Licensed](LICENSE) file for details.

## Contributing

1. Fork the project.
2. Create a branch for your feature (git checkout -b feature/feature-name).
3. Commit your changes (git commit -am 'Add a new feature').
4. Push to the original repository (git push origin feature/feature-name).
5. Create a new Pull Request.
