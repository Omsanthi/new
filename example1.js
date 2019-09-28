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

// var date=new Date();
// console.log(date);
// var currentDate=date.getDate();
// console.log(currentDate);
// var currentMonth=date.getMonth()+1;
// console.log(currentMonth);
// var currentFullYear=date.getFullYear();
// console.log(currentFullYear);
// console.log(currentMonth+"/"+currentDate+"/"+currentFullYear);

// function presenDate(){
//     // debugger;
//   var day = date.getDate();
//   var monthNames = [
//     "January", "February", "March",
//     "April", "May", "June", "July",
//     "August", "September", "October",
//     "November", "December"
//   ];
//   var monthIndex = date.getMonth();
//   var month=monthNames[monthIndex];
//   var year = date.getFullYear();
//    return (day + ' ' + month + ' ' + year);
// }
// console.log(presentDate());
// -------- to check give element is exists or not in array ----
// var a=[1,2,3,4,5,6,7,8]
// // console.log(a.includes(2,1))
// delete a[1];
// console.log(a)
// ------------ largest number------
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;
// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
// console.log(largest)
// --------- 4/9/2019 -----------------

// var a=[{id:1,name:"abc"},{id:2,name:"def"},{id:3,name:"ghi"},{id:4,name:"jkl"},{id:5,name:"mno"},
// {id:6,name:"pqr"},{id:7,name:"stu"},{id:8,name:"vxy"},{id:9,name:"zab"},{id:10,name:"cde"}]
// var A=a.forEach(function(val){
//     console.log(val.name);

//     console.log(Object.keys(val));
//     console.log(Object.values(val));
//     if(val.id%2==0){
//         console.log(val)
//     }

// })
// ------------repalace even number with 0 and odd number with 1 -------
// var a=[2,5,7,6,8,3,9,0,10,879,78969];
// var Z=a.map(function(val,index){
//     if(val%2==0){
//     // val.splice(index,1,0);
//     return 0;
//     }
//     else{
//     // val.splice(index,1,1);
//     return 1;
//     }
// })
// console.log(Z);
// -------- unique elements in 2 arrays -----
// var a=[1,2,3,4,5];
// var b=[2,4,6,7,3];
// count=0;
//    for(i=0;i<a.length;i++){
//         for(j=0;i<b.length;j++)
//        if(a[i]!==b[j]){
//        console.log(a[i])         
//        }
//        else{console.log(b[j])}
//     }
   // ------------- function to get even nos ---------
   // function even(param){
   //    var b=param.filter(function(val){
   //       if(val%2==0){
   //          return true;
   //       }
   //       else{return false}
   //    })
   //    console.log(b)
   // }
   // var a=even([1,2,3,4,5])
// ---------function for even numbers ------
// var a=[1,2,3,4,5,6,7,8]
// function even(par){
//    var b= par.filter(function(val){
//         if(val%2==0){
//             return val;
//         }
//         // else{return false}
//     })
//     console.log(b);
// }
// var  arr=even(a);
// ------------09/09/19---------
// ---------------- to return given no.'s datatype ----------
// function check(param){
//    var b= typeof param
//    console.log(b);
// }
// var c=check([1,34,6])
// -------------- to print data type of given no. ---------
// function check(param){
//    var input =typeof param;
//    if(input=="string"){
//       console.log(param+" "+"is string")
//    }
//   else if(input=="number"){
//       console.log(param+" "+"is number")
//    }
//    else if(input=="boolean"){
//       console.log(param+" "+"is boolean")
//    }
//    else{
//       console.log(param+" "+"is object")
//    };
// }
// check(true)
// --------------- to check given no. even no. r not --------------
//    function check(par){
//                if(par %2==0){
//                   console.log(par+"is even number")
//                }
//                else{console.log(par+"is odd number")}
//    }
//  check(6);
// ----------------
// var a=[{id:1,name:"santhi",per:50},{id:1,name:"lolitha",per:68},{id:1,name:"divya",per:76},{id:1,name:"uha",per:90},{id:1,name:"kavitha",per:8}]
// function display(param){
//   param.forEach(function(val){
//      if(val.per>80){
//         console.log(val.name+" got distinction")
//      }
//      else if(val.per>75 && val.per<80){
//       console.log(val.name+" got A grade")
//    }
//    else if(val.per>60 && val.per<75){
//       console.log(val.name+" got B grade")
//    }
//    else if(val.per>45 && val.per<60){
//       console.log(val.name+" got C grade")
//    }
//    else if(val.per>35 && val.per<45){
//       console.log(val.name+" got D grade")
//    }
//    else if(val.per>35){
//       console.log(val.name+" failed")
//    }
//   })

// }
// display(a)
// ------------------- get week based on given no.from 0-6 --------------
// function getweek(param){
//    var day=["son","mon","tue","wed","thu","fri","sat"];
//    var datIndex=param;

//    return(day[datIndex]);
// }
// var get=getweek(2);
// console.log(get);
// // ------------ 
// function dateOf(param){
//    switch (param) {
//       case 0:
//          console.log("Sunday");
//         break;
//       case 1:
//          console.log("monday");
        
//         break;
//       case 2:
//          console.log("tueday");
//         break;
//          console.log("wedday");
//          case 3:
//         break;
//          console.log("thursday");
//          case 4:
//         break;
//          console.log("friday");
//          case 5:
//         break;
//          console.log("Satday");
//          case 6:
//     }
//    }
//    dateOf(1)
// ----------------- take input from js and print -----------
// var input=prompt();
// console.log(input);
// --------- to check given Node.is even or not ------
// var input=prompt();
// if(input%2==0){
//    console.log(input+" even number");
// }
// else{
//    console.log(input+" odd number");

// }
// ----------print even Node.s up to n except 26 -----------------
var n=prompt();
for(var i=0;i<=n;i=i+2){
   if(i===26){
      continue}
       
   console.log(i)
       
   
}
















