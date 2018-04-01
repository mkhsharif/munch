/*
  This function uses cosine simularity to compute a match between user interests.
  Use:
  Pass two integer arrays in for parameters user1 and user2.
  Return:
  The function returns the cosine simularity of the two arrays
  Enjoy ;)
 */


var x = [1,1,1,1,1];
var y = [1,1,1,1,1];

var similarity = require( 'compute-cosine-similarity' );

function compute_similarity(user1, user2) {

  return(similarity(user1, user2));
}


console.log(compute_similarity(x, y));
