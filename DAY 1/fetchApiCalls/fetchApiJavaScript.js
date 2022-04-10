fetch('https://api.covid19api.com/summary').
    then((apiData) => {
        return apiData.json();
    })
    .then((apiDataReturnedAsJson) => {
        // console.log(apiDataReturnedAsJson);

        const apiCountryIndiaData = apiDataReturnedAsJson.Countries[77];

        // console.log(apiCountryIndiaData);

        document.getElementById('apiDataFetchContriol').innerHTML = `
        The country name is :
            <span style="color: black">${apiCountryIndiaData.Country}.</span> 
        <br>

        The total confirmed cases in india by far is :
            <span style="color: black">${apiCountryIndiaData.TotalConfirmed}.</span> 
        <br>

        The total deaths in india by far is :
            <span style="color: black">${apiCountryIndiaData.TotalDeaths}.</span> 
        <br>

        The total recovered cases in india by far is :
            <span style="color: black">${apiCountryIndiaData.TotalRecovered}.</span> 
        <br>

        The new confirmed cases in india today is :
            <span style="color: black">${apiCountryIndiaData.NewConfirmed}.</span>
        <br>

        The new deaths in india today is :
            <span style="color: black">${apiCountryIndiaData.NewDeaths}.</span>
        <br>

        The new recovered in india today are : 
            <span style="color: black">${apiCountryIndiaData.NewRecovered}.</span>
        <br>
        `
    })
    .catch((error) => {
        console.log(`error : ${error}`);
    })