//1. Write a ts program to read and print elements of array.
var names:string[] = ["Ahsan","sir Naveed","Aleem"];
var i:number = 0;
while (i<=names.length) {
    console.log(names[i]);
    i++;
}

//2. Write a ts program to print all negative elements in an array.
var myArray:number[] = [4, -5, 0, 2, -67, 8, 10, -34 ];
 var result:number[] = myArray.filter(function(number) {
  return number < 0;
 });
console.log(result);

//3. Write a ts program to find sum of all array elements. 
var value:number[] = [1,2,3,4,5];
var sum:number = 0;
for (let i = 0; i<value.length; i++) {
    sum=sum+value[i];
}
console.log(sum);

//4. Write a ts program to find maximum and minimum element in an array.
var max:number[] = [2,3,5,7,8];
console.log(Math.max(...max));
console.log(Math.min(...max));

//5. Write a ts program to find second largest element in an array.
var num:number[] = [2,6,4,8];
console.log(num.sort()[2]);

//6. Write a ts program to count total number of even and odd elements in an array.
var numbers:number[] = [8, 19, 5, 6, 14, 9, 13];
var odd:number[] = numbers.filter(num=> num%2==1);
var even:number[] = numbers.filter(num=> num%2==0);
console.log(odd);
console.log(even);
//7. Write a ts program to count total number of negative elements in an array.
var negative:number[] = [2,-3,4,7,-5];
var count:number[] = negative.filter(x=> x<0);
console.log(count.length);

//8. Write a ts program to copy all elements from an array to another array.
var latters:string[] = ["pakistan","india","Afghanistan"];
var numeric:number[] = [1,2];
var aphanumeric = latters.concat(numeric.toString());
console.log(aphanumeric);

//9. Write a ts program to insert an element in an array.
var arr1:number[] = [35,535,65];
var insert:number = arr1.push(0);
console.log(arr1);

//10. Write a ts program to delete an element from an array at specified position.
var array:string[] = ["hello","world","lorem","ipsum"];
var delete_elem = array.splice(3);
console.log(delete_elem);

//11. Write a ts program to count frequency of each element in an array.
//12. Write a ts program to print all unique elements in the array.
var arr = ["a", "a", "b"];
var uniqueSet = new Set(arr);
console.log(uniqueSet);//expected output=[a,b]

//write a ts program to delete all duplicate elements from an array
var x = new Set([1,2,3,3]);
var y = x.delete(3);
console.log(x);

//15. Write a ts program to merge two array to third array.
var str:string[] = ["Ahsan","ali","Akbar"];
var str2:string[] = ["Asad"];
console.log(str.concat(str2));

//16. Write a ts program to find reverse of an array.
var n:number[] = [1,2,3,4,5];
console.log(n.reverse());

//17. Write a ts program to put even and odd elements of array in two separate array.
var inp_ut:number[] = [2,4,6,3,1];
var even:number[] = inp_ut.filter(i=> i%2==0);
var ODD:number[] = inp_ut.filter(i=> i%2==1);
console.log("Even =",even);
console.log("odd =",ODD);

//18. Write a ts program to search an element in an array.
//var find:string = "waleed";
var search_elem:string[] = ["waleed","khalid","Hanger"];
var find:number = search_elem.indexOf("waleed");
console.log("Name",search_elem[0]);
console.log("index",find);

//19. Write a ts program to sort array elements in ascending or descending order.
var n:number[] = [2,1,4,3,6,7,5];
var sort:number[] = n.sort();
console.log(n);
console.log(n.reverse());

//20. Write a ts program to sort even and odd elements of array separately.
var n_:number[] = [0,3,2,6,1,5,4];
var eeven_num:number[] = n.filter(y=> y%2==0);
var cut = eeven_num.sort();
var odd_num:number[] = n.filter(z=> z%2==1);
var cat = odd_num.sort();
console.log("even sort element",cut);
console.log("odd sort element",cat);
