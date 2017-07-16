angular.module('starter.services', [])

.factory('CachedUser', function() {
  var userInfo = {};

  return {
    save: function(j) {
      for (var k in j) {
        window.localStorage[k] = userInfo[k] = j[k];
      };
      return userInfo;
    },

    remove: function(f) {
      if(f.constructor==Array){
        for(var i=0;i<f.length;i++){
          window.localStorage.removeItem(f[i]);
        }
      }
        window.localStorage.removeItem(f);
    },

    add: function(k, v) {
      window.localStorage[k] = userInfo[k] = v;
    },

    addLong: function(k, v) {
      window.localStorage[k] = v;
    },

    l: window.localStorage
  };
})
.factory('DealOrder', function () {
  var dealorder={};
  return {
    save: function(j) {
      for (var k in j) {
        window.localStorage[k] = dealorder[k] = j[k];
      };
      return dealorder;
    },
    addLong: function(k, v) {
      window.localStorage[k] = v;
    },
   remove: function(f) {
      if(f.constructor==Array){
        for(var i=0;i<f.length;i++){
          window.localStorage.removeItem(f[i]);
        }
      }
        window.localStorage.removeItem(f);
    },
    l: window.localStorage
  };

})
.factory('Helpinfo', function(){
  var helpinfo = [];

  return {
    save: function(j){
      for(var k= 0;k<j.length;k++){
        helpinfo.push(j[k]);
      }
    },
    get: function(title){
      for(var i =0;i<helpinfo.length;i++){
        if(helpinfo[i].title === title){
          return helpinfo[i]
        }
      }
      return null;
    },
    all: helpinfo
  }
})
.factory('conn', function(){
  return { 
 
 
  }
})
.factory('conn2', function(){
  return { 
 
   
  }
})