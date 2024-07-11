// // function Person(name){
// //     this.name=name
// //     this. way=()=>{
// //         return this.name
// //     }
    
// // }
// // Person.prototype.greet=function(){
// //     return this.way
// // }
// // function Police(name){
// //     Person.call(this,name)

// // }
// // Police.prototype=Object.create(Person.prototype)
// // // const John=new Person("John")
// // // const bob=Object.create(John)
// // // let k=John.greet()
// // // console.log(k())
// // Police.prototype.role=function(){
// // // Suggested code may be subject to a license. Learn more: ~LicenseLog:674638890.
// //     console.log(this.name+"is a police")
// // }
// // const anlice=new Police("sriram")
// // const Bob=new Person("Bob")
// // Bob.prototype.role=function(){
// //     console.log(this.anme)
// // }
// // Bob.()
// const Employee={
//     name:"sriam",
//     age:"25",
//     display:function(){
//         console.log(this.name,this.age)
//     }
// }
// const develpoer={
//     name:"raju"
// }
// const jan=Object.create(Employee)
// jan.name="venkat"
// console.log(jan.display())
// Employee.display()
// Employee.display.call(develpoer)
