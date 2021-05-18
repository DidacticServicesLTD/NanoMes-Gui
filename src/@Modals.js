/**
* The _helpers Class is a series of useful helper functions for boleyn-vue
*
* @class _helpers
* @constructor
*/
class $modal {

    constructor(props){
      this.title = props.title || "Title"
      this.message = props.message || "Message"
      this.type = props.type || "Alert"

      this.isActive = false
    }

    show(){
      this.isActive = true
    }

    hide(){
      this.isActive = false
    }

};

module.exports = $modal