import uuid       from './crypto/uuid';
import definer    from './util/definer';
import lodash     from './util/lodash';
import immutable  from './util/immutable';
import promise    from './util/promise';
import valobj     from './validation/object';
import valinv     from './validation/invariant';
import eventobj   from './data/event';
import cmdobj     from './data/command';
import either     from './data/either';


export default {
  crypto: {
    uuid: uuid
  },
  data: {
    COMMAND: cmdobj,
    EVENT: eventobj,
    either: either
  },
  util: {
    definer: definer,
    lodash: lodash,
    immutable: immutable,
    promise: promise
  },
  validation: {
    obj: valobj,
    invariant: valinv
  }
};
