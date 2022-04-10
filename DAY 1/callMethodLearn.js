const saurabhData = {
    name : "Saurabh Kumar Jha",
    address : "New Delhi",
    pinCode : 110059,
    experience : "1 Year",
    workingHours : 8,

    callMethodUsingCall : function(preferance){ //We can make different method in an object and call it using another object or its own one by using different calling ways.
        console.log(
            `
                Employee name : ${this.name} 
                Employee Address : ${this.address} 
                Employee Pin Code : ${this.pinCode} 
                Employee Experience : ${this.experience} 
                Working Hours : ${this.workingHours}  
                ${this.name} prefer ${preferance} work culture
             `
        )
    }
}

saurabhData.callMethodUsingCall("Strict"); //saurabhData can call its own method by just calling it like a function

const sakshiData = {
    name : "Sakshi Jain",
    address : "Nagpur",
    pinCode : 100001,
    experience : "1 Year",
    workingHours : 8,
}

saurabhData.callMethodUsingCall.call(sakshiData, "Supportive") //When we need to call a method from another method we need to use call and send object as argument.