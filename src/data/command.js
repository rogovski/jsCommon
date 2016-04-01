import uuid    from '../crypto/uuid';
import definer from '../util/definer';

/*
 * BASE COMMAND OBJECT
 */
export default class COMMAND {
  constructor(options) {
    var _options = options || {};
    /*
     * command id
     */
    definer.public.readonly(this,
      'commandId', _options.commandId || uuid.v4()
    );
    /*
     * command timestamp
     */
    definer.public.readonly(this,
      'timestamp', _options.timestamp || Date.now()
    );
    /*
     * command data
     */
    definer.public.readonly(this,
      'data', _options.data || {}
    );
  }
}
