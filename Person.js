class Person{
    static count=0
//use tconstructore if u want to asign default values for properties...initial values
constructor(){
    this.firstName="John"
    this.lastName="Please provide last name"
    this.age=0
    Person.count += 1
}
set FirstName(value){
    this.firstName=value
}
get Firstname(){
    return this.firstName
}
set LastName(value){
    this.lastName=value
}
get Lasttname(){
    return this.lastName
}
set Age(value){
    this.firstName=value
}
get Age(){
    return this.age
}
//display
display(){
    console.log(`
    ======Person ID: ${Person.count}=========
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Age: ${this.age}
    ========================================
    `);
}

}
export {
    Person
}