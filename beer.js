function beer(n = 99) {
  if (n === 0) {
    console.log("No bottles of beer on the wall");
    return;
  } else if (n === 1) {
    console.log(`${n} bottle of beer on the wall`);
    console.log(`${n} bottle of beer`);
    console.log(`Ya take one down and pass it around`);
    console.log(`${n - 1} bottles of beer on the wall`);
  } else if (n === 2) {
    console.log(`${n} bottles of beer on the wall`);
    console.log(`${n} bottles of beer`);
    console.log(`Ya take one down and pass it around`);
    console.log(`${n - 1} bottle of beer on the wall`);
  } else {
    console.log(`${n} bottles of beer on the wall`);
    console.log(`${n} bottles of beer`);
    console.log(`Ya take one down and pass it around`);
    console.log(`${n - 1} bottles of beer on the wall`);
  }
  return beer(n - 1);
}
beer();
