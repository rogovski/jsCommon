import _ from 'lodash';

/**
 * ensure object has properties. throw
 * exception if not present
 */
export function ensureProps(obj, propLs) {
  _.forEach(propLs, e => {
    if(!_.has(obj, e)) {
      throw new Error('ensureProps FAILED');
    }
  });
  return true;
}
