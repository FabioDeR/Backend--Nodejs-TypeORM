/* eslint-disable no-console */
import { createConnection } from 'typeorm';
import express, { Request, Response } from 'express';
import {json} from 'body-parser';
import { AppRoutes } from './app.router';

createConnection().then(async connection =>{  
    
    const app = express();
    const port = 3000;
    app
        .use(json());
       


    //Test
    app.get('/', (req, res)=> res.send('Hello EXpress test'));

    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    if(connection){
        const result = await connection.query('SHOW DATABASES');
        console.log(result);    
        app.listen(port, () =>
        console.log(`l'application a démarré sur : http://localhost:${port}`)
    );     
    } else {
        console.log('Il y a problème férot');        
    }

   
      
  

}).catch(error => console.log(error));