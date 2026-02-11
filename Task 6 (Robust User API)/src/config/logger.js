// Centralized request/response logging for debugging and monitoring

import morgan from 'morgan';

const logger = morgan("dev");

export {logger};