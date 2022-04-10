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

//Async just simply means that it wants you to wait until the promise is in the phase <pending> 
// and as as soon as it completes it gets to the await and grants it to get you the response.
// In this way we get assured of our result without getting stuck into a loop failure or callback hell.
// or the conventional way we used to get the promise response using then, catch and finally. 

async function getDataFromPromises() {
    try {
        const firstPromiseResolvedAwait = await studentRollNumberPromiseAPI;
        console.log(firstPromiseResolvedAwait);

        const secondPromiseResolvedAwait = await promiseFunctionPromptVar(firstPromiseResolvedAwait[1]);
        console.log(secondPromiseResolvedAwait);

        return firstPromiseResolvedAwaith;
    }
    catch (error) {
        console.log(error);
    }
}

const getDataVariable = getDataFromPromises().then((getDataVariable) => {
    console.log(getDataVariable);  // By the help of this way we can get the data which asyncFunction returned and print it in our way.
    // This could be helpful when we want to print an API data in frontend after getting the response from our promise.
})