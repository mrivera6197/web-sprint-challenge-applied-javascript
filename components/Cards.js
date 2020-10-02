// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector('.cards-container')
console.log(cardsContainer)

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        const articlesArray = []
        articlesArray.push(res.data.articles.bootstrap, res.data.articles.javascript, res.data.articles.jquery, res.data.articles.node, res.data.articles.technology)
      
        articlesArray.forEach(article => {
            article.forEach(item => {
                   const articleData = (articleCard(item))
                   cardsContainer.append(articleData)
                
                })
            })
        })
    .catch(err => {
        console.log(err)
    })

function articleCard (item) {

    //elements

    let card = document.createElement('div')
    let headline1 = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')
    let img = document.createElement('img')
    let writtenBY = document.createElement('span')

    //append elements 

    card.appendChild(headline1)
    headline1.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(writtenBY)

    //class names 

    card.classList.add('card')
    headline1.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    //textcontent 

    img.src = item.authorPhoto
    writtenBY.textContent = item.authorName
    // headline1.textContent = item.headline

    //interactivity 
    card.addEventListener('click', () => {
        console.log(item.headline)
    })

    return card 

}
