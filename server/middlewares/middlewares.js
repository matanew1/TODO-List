import { json, urlencoded } from 'express';
import cors from 'cors';

const middlewares = [
    json(),
    urlencoded({ extended: true }),
    cors()
  ];
  
export default middlewares;

