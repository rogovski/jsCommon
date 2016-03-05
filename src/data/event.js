import uuid    from '../crypto/uuid';
import definer from '../util/definer';


/*
 * BASE EVENT OBJECT
 */
export default class EVENT {
  constructor(options) {
    var _options = options || {};
    /*
     * event id
     */
    definer.public.readonly(this,
      'eventId', _options.eventId || uuid.v4()
    );

    /*
     * command timestamp
     */
    definer.public.readonly(this,
      'timestamp', _options.timestamp || Date.now()
    );

    /*
     * correlation id
     */
    definer.public.readonly(this,
      'correlationId', _options.correlationId || null
    );
  }
}
