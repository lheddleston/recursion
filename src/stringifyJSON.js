// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // should convert input into string

  // if obj is null
  if (obj === null) {
  	return 'null';
  }
  // if obj is number or boolean
  else if (typeof obj === "number" || typeof obj === "boolean") {
  	return obj.toString();
  }
  // if obj is string
  else if (typeof obj === "string") {
  	return '"' + obj + '"';
  }
  // if array
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
  // if object
  else if (typeof obj === "object") {
  	var result = [];
  	Object.keys(obj).forEach(function(key) {
  		if (obj[key] !== undefined && typeof obj[key] !== "function") {
  			var value = stringifyJSON(obj[key]);
  			var key = ('"' + key + '":');
  			  	if (obj[key] !== null) {
  					result.push(key + value);
  	}
  		}
  	});	
  	return "{" + result + "}";
  }
};
