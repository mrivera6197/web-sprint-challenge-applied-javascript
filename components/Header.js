// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')
// console.log(headerContainer)

function Header() {

//create elements for header 

let header = document.createElement('div')
let date = document.createElement('span')
let title = document.createElement('h1')
let temp = document.createElement('span')

//append elements to div

header.appendChild(date)
header.appendChild(title)
header.appendChild(temp)

//add class names to elements 

header.classList.add('header')
date.classList.add('date')
temp.classList.add('temp')

//add text content to elements 

date.textContent = 'March 28, 2020'
title.textContent = 'Lambda Times'
temp.textContent = '98 degrees'

return header

}

headerContainer.append(Header())

