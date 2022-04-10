//Promise is being declared as an object 
const studentRollNumberPromiseAPI = new Promise((resolve, reject) => {

    setTimeout(() => {
        const RollNumberArrayDummyAPI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        resolve(RollNumberArrayDummyAPI);
        reject("An unexpected error has occured.");
    }, 2000)

})

//Promise is created using a function and returning promise as an object by passing valid argument from function into its parameter. 
const promiseFunctionPromptVar = (indexedDataRoll) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexedDataRoll) => {
            const bioDataOfParticularStudent = {
                name: "Saurabh",
                class: "ECE - 1"
            }

            resolve(
                `
                This is a guy having roll number : ${indexedDataRoll}.
                His name is ${bioDataOfParticularStudent.name}.
                His class is ${bioDataOfParticularStudent.class}.
                `
            );
            reject("Some error may Have occured and its uncaught");
        }, 2000, indexedDataRoll)
    })
}

//In this conventional way we have to just get into the dependecy of previous then and when it resolves it passes the control to another.
// then and it continues and it is quite hectic to read if there are many more promises in the code. In that scenario it becomes possible 
//to commit mistakes and that is the reason we use async await. 
studentRollNumberPromiseAPI.then((studentRollsArrayPrintResolved) => {
    console.log(studentRollsArrayPrintResolved);
    return promiseFunctionPromptVar(studentRollsArrayPrintResolved[1]);
}).then((responseFromResolve) => {
    console.log(responseFromResolve);
}).catch((catchTheErrorIfAnythingWrong) => {
    console.log(catchTheErrorIfAnythingWrong);
}).finally(() => { //It has just one work to do whatever is asked into it after getting done with then and catch.
    console.log("Thank You");
})