#Angular Giphy

Using `$http` and the [Giphy API](https://github.com/Giphy/GiphyAPI), create an app that allows users to search Giphy for different GIFs. As a user, I should be able to search for a topic and view GIFs. When another search is made, the results should be cleared and repopulate with the new results.

##Sample API Call

http://api.giphy.com/v1/gifs/search?q=seahawks&api_key=dc6zaTOxFJmzC   

Note that there is a public beta key available for Giphy, so we won't worry about hiding this key.

##Setup

* Fork and clone this repository
* View and understand the starter code
* Use `$http` and Angular directives to search and display results

##Bonus

Once results are populated, create an infinite scroll feature. As you scroll down the page, additional API requests should be made in order to provide an endless stream of GIFs!

Check out [ngInfiniteScroll](https://sroze.github.io/ngInfiniteScroll/)
