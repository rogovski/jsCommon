import Immutable from 'immutable';
import keyMirror from '../util/key_mirror';
import definer   from '../util/definer';
import invariant from '../validation/invariant';

const _EitherType = keyMirror({
  LEFT: null,
  PENDING: null,
  RIGHT: null
});

/**
 * base either object
 */
class _Either {
  constructor(data) {
    definer.public.readonly(this,
      'data', data
    );
  }
}

/**
 * left object. usually specifies an error
 */
class _Left extends _Either {
  constructor(data) {
    super(data);
    definer.public.readonly(this,
      'type', _EitherType.LEFT
    );
  }
}

/**
 * pending object.
 */
class _Pending extends _Either {
  constructor(data) {
    super(data);
    definer.public.readonly(this,
      'type', _EitherType.PENDING
    );
  }
}

/**
 * right object. usually specifies a success
 */
class _Right extends _Either {
  constructor(data) {
    super(data);
    definer.public.readonly(this,
      'type', _EitherType.RIGHT
    );
  }
}

/**
 * compose operator. see haskell (<=<)
 * TODO: maybe add invariant a-la 
 * https://github.com/facebook/immutable-js/blob/master/src/utils/invariant.js
 * throws if funcs.length <= 1 'composition requires two or more funcs'
 */
export function compose(/* ...function list */) {
  const funcs = Array.apply(null, arguments);
  const len   = funcs.length;
  invariant(len >= 2, 
    'composition requires at least 2 arguments'
  );
  return val => {
    var either = funcs[len - 1](val);
    switch(either.type) {
      case _EitherType.LEFT:
      case _EitherType.PENDING:
        return either;
      default: // _EitherType.RIGHT
        for(var i = len - 2; i >= 0; i--) {
          either = funcs[i](either.data);
          if(either.type !== _EitherType.RIGHT) {
            break;
          }
        }
        return either;
    }
  };
}

/**
 * left helper.
 */
export function Left(data) {
  return new _Left(data);
};

/**
 * pending helper.
 */
export function Pending(data) {
  return new _Pending(data);
};

/**
 * right helper.
 */
export function Right(data) {
  return new _Right(data);
};
