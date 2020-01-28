// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // should convert input into string

  // if obj is null
  if (obj === null) {
  	return 'null';
  }
  // if obj is true or false
  else if (obj === true) {
  	return 'true';
  }
  else if (obj === false) {
  	return 'false';
  }
  // if obj is undefined
  else if (obj === undefined) {
  	return undefined;
  }
  // if obj is number
  else if (typeof obj === "number") {
  	return String(obj);
  }
  // if obj is string
  else if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
  // if array:
  else if (Array.isArray(obj)) {
  	var result = [];
  	if (obj.length > 0) {
  		obj.forEach(function(element) {
  			var value = stringifyJSON(element);
  			result.push(value.toString());
  		}); 		
  	}
  	return "[" + result + "]";
  }

  // if object:
  else if (typeof obj === "object") {
  	var result = [];
  	Object.keys(obj).forEach(function(key) {
  		if (obj[key] !== null) {
  			var value = stringifyJSON(obj[key]);
  			var key = ('"' + key + '":');
  			result.push(key + value);
  		}
  	});	
  	return "{" + result + "}";
  }
else {
	return '{}';
}
};
