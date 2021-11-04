# First + Third Shopify Developer Challenge
Shopify product page challenge for First and Third Developer position. Create a product page using Shopify Liquid Syntax and the AJAX(Asynchronous JavaScript And XML) cart api contained in this repo. 

The node app /index.js runs and handles the routes and rendering for the project.


## Setup
1. Clone repo and install dependencies `npm install`
2. Start the server using npm run dev to run on `port 3000`


## Notes
Done using Tailwind, main template is `navbar.liquid` and uses tailwind css framework. 

### Todo
- [x] Create Template using tailwind
- [ ] Create product page 

---
### Challenge 
The simple app is a single route web server that serves liquid templates out of the `templates` folder. Inside that folder there is a base `template.liquid` folder as well as the main file, `product.liquid` which serves as the main template file. It would be best to keep the template files simple, but you should be able to add additional templates or template parts as required.

The data for the product page comes from the `product.json` file in the root of the main directory. This is a product object taken from an actual Shopify store and is passed to the rendering engine as the variable `product` which you should see in the `product.liquid` file.

Any static files can be placed inside the public folder and they will be served from there. The images referenced in the product object are already inside that folder and can be accessed at `/images/{filename}.png`

So here is what we are looking for.

* Using the liquid templates and whatever static assets you need, create a single simple product detail page that renders the product details.
* Make sure to add some style. You can do this with a simple vanilla CSS file, a `<style>` tagin the head of the page, or if you are comfortable - with your favorite css compiler.
* The PDP should have an add to cart button that is clearly visible.
* Using some front end javascript, attach a handler to the add to cart button that posts the appropriate information the `cart/add.js` route. That route will simply return the data `{ success: 1 }` so display a success message to let the user know their product was added correctly!
* Make sure the add to cart request sends the appropriate data to the endpoint to add an item to the cart (Using the shopify API paradigm).

And *Voila!* You are almost done!