/*export default function (doc) {

	console.log("doc in 1");

  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'home') {
    return '/';
  }

  if (doc.type === 'contenido') {
    return '/contenido/' + doc.uid;
  }

  console.log("doc in 2");

  return '/not-found';
};*/
export default function (doc) {
  return '/'
}