var list = process.argv;
var result = 0;
for (var i = 2; i < list.length; i++) {
   result += Number(list[i]);
}
console.log(result);
