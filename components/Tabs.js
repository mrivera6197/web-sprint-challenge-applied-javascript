// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


const tabContainer = document.querySelector('.topics')

import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        let tabArray = Array.from(res.data.topics)
        
        tabArray.forEach(topic => {
            const tabData = createTab(topic)
            tabContainer.append(tabData)
        })
    
    })
    .catch(err => {
        console.log('error: ', err)
    })

function createTab (arr) {

    // element
    let tab = document.createElement('div')

    //class name 
    tab.classList.add('tab')

    //textContent
    tab.textContent = arr

    return tab
}