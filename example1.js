// --------- prime numbers ------
//   var n=prompt();
// for(var i=2;i<=1000;i++){
//    for(var j=2;j<=i;j++){
//        if(i%j==0){break;}
//    }
//     if(i==j){
//     document.write(i+" <br>")
//    }
// }
// var n=prompt();
// count=0;
// for(var k=1;k<=n;k++)
// {
//     if(n%k==0){
//         count++;
//     } 
// }
// if(count==2){
//     alert(n +"is prime number")
// }
// else{
//  (   alert(n +"is not a prime number")
// }
// i=2;
// j=2;
// 2%2==0 and 2==2 ----Prime
// i=3;
// j=2;
// 3%2==1;3%3==0 and 3==3 ----Prime
// i=4;
// j=2;
// 4%2==0 but 4!==2 ;
// i=5;
// j=2;
// 5%2==1;5%3==2;5%4==1;5%5==0 and 5==5 ----- Prime
// i=6;
// j=2;
// 6%2==0 but 6!==2;
// i=7;
// j=2;
// 7%2==1;7%3==1;7%4==3;7%5==2;7%6==1;7%7==0 and 7==7 ------- prime
// -------------- squares up to x -----
// var X=prompt();
// for(var i=1;i<=X;i++){
//     var y=i*i;
//     console.log(y);
// } 
// ---------- print all odd numbers up to y -----
// var Y=prompt();
// for (var i=1;i<=Y;i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }
// ------------------ multiples of 5 ------------
// var Z=prompt();
// for(var i=1;i<=Z;i++){
//     var m=i*5;
//     console.log(m);
// }
// ----------- square roots of given array ---
// var a=[4,8,9,16,23,623,30,144,121,119,196,256]
// a.filter(function(val,index){
//    A= Math.sqrt(val);
//    document.write(A +"<br>");
// })

// var employee=function(id,name,dept,dept_no,designation,sal,d_j,insurance,t_l,u_l,m_no){
//     this.e_id=id;
//     this.dept_no=dept_no;
//     this.e_name=name;
//     this.e_dept=dept;
//     this.e_designation=designation;
//     this.e_sal=sal;
//     this.e_joining_date=d_j;
//     this.e_insurance=insurance;
//     this.e_total_leaves=t_l;
//     this.e_utilised_leaves=u_l;
//     this.e_balanced_leaves=function(){
//                               return (this.e_total_leaves- this.e_utilised_leaves)
//                               }
//     this.e_mobile_no=m_no;
// }
// var emp1= new employee(1,23,"santhi","developing","webdeveloper","12 l","23/6/18","yes",25,12,"3535665143");
// console.log(emp1.e_balanced_leaves());

var date=new Date();
console.log(date);
var currentDate=date.getDate();
console.log(currentDate);
var currentMonth=date.getMonth()+1;
console.log(currentMonth);
var currentFullYear=date.getFullYear();
console.log(currentFullYear);
console.log(currentMonth+"/"+currentDate+"/"+currentFullYear);

function presenDate(){
    // debugger;
  var day = date.getDate();
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var monthIndex = date.getMonth();
  var month=monthNames[monthIndex];
  var year = date.getFullYear();
   return (day + ' ' + month + ' ' + year);
}
console.log(presentDate());












// function formatDate(date) {
//     var day = date.getDate();
//     var monthNames = [
//         "January", "February", "March",
//         "April", "May", "June", "July",
//         "August", "September", "October",
//         "November", "December"
//       ];
//     var monthIndex = date.getMonth();
//     var year = date.getFullYear();
  
//     return day + ' ' + monthNames[monthIndex] + ' ' + year;
//   }
//   console.log(formatDate(new Date()));    








