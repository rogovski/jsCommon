import _ from 'lodash';

export function block() {
  _.forEach(arguments, l => {
    acc.push(l);
  });

  return acc
}

export function lines() {
  _.forEach(arguments, l => {
    acc.push(l);
  });

  return acc.join('\n');
}
