// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

var result = [];

  function loopElements(element) {

  	var childNode = element.childNodes;

    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }

    if (childNode) {
      for (var i = 0; i < childNode.length; i++) {
        loopElements(childNode[i]);
      }
    }
  }

  loopElements(document.body);

return result;
};
