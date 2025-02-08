// api.js information given to us
const baseUrl = "https://developer.nps.gov/api/v1/";
// information given to us
async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "YqQki1kbkREfQn9ioa7zq0WtWxLJUtKmbgBhltJP";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request information given
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}
// Activity one:
// What URL would you use to get a list of parks 
// involving Idaho? You can use the "Try it out" 
// tool to test your answer.
// "https://developer.nps.gov/api/v1/parks?stateCode=id&api_key="
// "https://developer.nps.gov/api/v1/campgrounds?parkCode=ciro"
// "https://developer.nps.gov/api/v1parks?q=climbing/"
// "https://developer.nps.gov/api/v1/multimedia/galleries?q-bears"

//Activity two:
// Create two functions: 
// async function renderClimbingList() {} and 
// function listTemplate(item) {}
// Write the template function first. We should 
// include the Name of the park, the state it is in, 
// and make the name a link which links to the 
// official URL for the park
function listTemplate(item) {
  return `<li><a href="${item.url}">${item.fullName}</a> ${item.states}</li>`
}

// In the renderClimbingList function we need to use 
// the getJson function provided earlier to get the 
// data we need. Then map over the list of parks 
// using the template function. Then output the 
// resulting HTML to the list created in step 1
// Call the renderClimbingList function at the 
// end of the script.
async function renderClimbingList() {
  const endpoint = 'activities/parks?q=climbing'
  const listElement = document.getElementById("outputList")
  const data = await getJson(endpoint)
  const parks = data.data
  const listHtml = parks.map(listTemplate).join("")
  listElement.innerHTML = listHtml;
}
renderClimbingList()
// getJson('alerts?parkCode=acad,dena');
