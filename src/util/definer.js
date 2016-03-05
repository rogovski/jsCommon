export default {
  public: {
    readonly: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: false,
        writable: false,
        value: value
      });        
    },
    mutable: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: false,
        writable: true,
        value: value
      });         
    }
  },
  private: {
    readonly: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: value
      });        
    },
    mutable: function (obj, prop, value) {
      Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: false,
        writable: true,
        value: value
      });         
    }    
  }
};
