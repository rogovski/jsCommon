// todo refactor to js common

/**
 * http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax
 */
export class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message; 
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } 
    else { 
      this.stack = (new Error(message)).stack; 
    }
  }
}


export class CommandValidationError extends ExtendableError {
  constructor(message, errors, fields) {
    super(message);
    this.errors = errors || [];
    this.fields = fields || {};
  }
}


export class SingleResultNotReturnedError extends ExtendableError {
  constructor(message, errors, fields) {
    super(message);
    this.errors = errors || [];
    this.fields = fields || {};
  }
}
