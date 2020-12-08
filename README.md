# insurance-company-backend

### This node js application is deployed on heroku.
Live: https://insurance-company-xx.herokuapp.com/.

The corresponding ui project code is available at https://github.com/NandKumarGangai/insurance-company-frontend.
 

## STEPS TO RUN PROJECT LOCALLY
1. Clone a project using `git clone https://github.com/NandKumarGangai/insurance-company-backend.git`.
2. Navigate to `server` directory.
3. Run `npm install` in server directory.
4. To run project in development mode run `npm run dev`.
5. To run project in production mode run `npm run build` and then `npm run start`.
6. App will run on `http:localhost:4000`.

## Routes available
1. `/api/v1/getInfo`
    It returns all people information.

2. `/api/v1/getPersonInfo/:name`
    Retuns person information if he/she is registred with company.

3. `/api/v1/isCarRegistered`
    Retuns true if car is registred with insurance company otherwise returns false.
