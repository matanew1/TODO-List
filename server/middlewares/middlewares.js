import { json, urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

/**
 * Middleware functions for request body parsing and CORS handling.
 * @type {Array<Function>} - An array of middleware functions.
 */
const middlewares = [
  json(),
  urlencoded({ extended: true }),
  cors(),
  cookieParser(),
];

export default middlewares;
