
class Student{
    constructor(name,age,gwa){
        this.name = name;
        this.age = age;
        this.gwa = gwa;
    }
    display(){
        document.getElementById('resultLabel').innerHTML = (`Your name is ${this.name} <br> Your age is ${this.age} <br> Your GWA is ${this.gwa}`);
    }

}

document.getElementById('submit').onclick = function(){
    let nameInput = document.getElementById('name').value;
    let ageInput = document.getElementById('age').value;
    let gwaInput = document.getElementById('GWA').value;   

 
    let student = new Student(nameInput,ageInput,gwaInput);

    student.display();
};

document.getElementById('clear').onclick = function(){

    nameInput = document.getElementById('name').value = "";
    ageInput = document.getElementById('age').value = "";
    gwaInput = document.getElementById('GWA').value = "";
    document.getElementById('resultLabel').innerHTML = "Result";
    
}