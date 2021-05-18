/**
* The _helpers Class is a series of useful helper functions for boleyn-vue
*
* @class _helpers
* @constructor
*/
let _helpers = {

    /**
    * A function to return a color code (HEX) for any given string
    * 
    * @method strToColorHex
    * @param {String} [str=''] the string to be converted to hex
    * @return {String} The response hex 
    */
    strToColorHex : (str = ``) => {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 12) - hash);
        }
        var color = '#';
        for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    },


    deepClone : (obj) => {
      return JSON.parse(JSON.stringify(obj));
    }


};

module.exports = _helpers