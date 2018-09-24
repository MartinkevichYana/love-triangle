/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  var arrChecked = [];
  for(var i = 1; i <= preferences.length; i++) {
  	if(isFitValue(i, arrChecked) == true) {
  		//alert(i + "    " + arrChecked);
  		//alert(preferences[preferences[preferences[i-1]-1]-1] + "     " + i+"    "+ preferences[i-1]+"      "+ preferences[preferences[i-1]-1]);
  		if((preferences[preferences[preferences[i-1]-1]-1] == i) && (preferences[preferences[i-1]-1] != i) && (preferences[i-1] != i+1)) {
  			count++;

  			arrChecked.push(i, preferences[i-1], preferences[preferences[i-1]-1]);
  			//alert(arrChecked);
  		}
  	}
  }
  return count;
};

function isFitValue(ind, arr) {
	if(arr.length == 0)
		return true;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == ind) {
			return false;
		}
	}
	return true;
}