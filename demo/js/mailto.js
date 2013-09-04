/**
 * mailto
 */

//Object.prototype.mailto = function() {
var Mailto = function(list) {
  //Set the default values
  defaults = {
    at: "[at]",
    dot: "[dot]"
  };

  if(arguments.length > 1) {
    defaults.at = (arguments[1].at != "") ? arguments[1].at : defaults.at;
    defaults.dot = (arguments[1].dot != "") ? arguments[1].dot : defaults.dot;
  }
  // if DOM collection
  if(list.length > 0) {
    for(var i = 0; i < list.length; i++) {
      var el = list[i];

      //String replacement "at" and "dot"
      var email = el.childNodes[0].nodeValue.replace(defaults.at, "@").replace(defaults.dot, ".");

      //Create link element
      var link = document.createElement("a");
          link.setAttribute("href", "mailto:"+ email);
          link.appendChild(document.createTextNode(email));

      //Replace initial element with link
      el.parentNode.replaceChild(link, el);
    }
  }
  // single DOM element
  else
  {
      //String replacement "at" and "dot"
      var email = list.childNodes[0].nodeValue.replace(defaults.at, "@").replace(defaults.dot, ".");

      //Create link element
      var link = document.createElement("a");
          link.setAttribute("href", "mailto:"+ email);
          link.appendChild(document.createTextNode(email));

      //Replace initial element with link
      list.parentNode.replaceChild(link, list);
  }
}