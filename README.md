# E-commerce

## Install additional packages, run: npm install

## version 1.0.0

- Run npm init.
- Create package.json.
- Create app: npx create-react-app e-commerce.
- Run app: npm start.

## version 1.0.1

- Add folder "components".
- Add folder NavBar.
- Create component NavBar.
- Export NavBar component to App.js file.

## version 1.0.2

- Add folder "components"
- Add folder NavBar
- Create component NavBar.
- Export NavBar component to App.js file.

## version 1.0.2

- Add folder CartWisget at components folder
- Create CartWidget component.
- Import a cart image from react-icons.
- Export CartWidget component to NavBar component.
- Add folder ItemListContainer at components folder.
- Create ItemListContainer component.
- Export to app.js file.

## version 1.0.3

- Add folder ItemCount at components folder
- Create ItemCount component.
- Export to ItemListContainer file.
- Use of props to assign a value to initial value and a stock.
- Use of Hooks : useState() for make counter functional.

## version 1.0.4

- Add ItemList and item folders.
- Create ItemList and item components.
- Use fetch promise to render products from fakeStoreAPI to ItemListContainer.
- Export Item component to ItemList component. Then, export ItemList component to ItemListContainer.

## version 1.0.5

- Create itemDetailContainer folder and the same named component
- Create ItemDetail folder and the same named component.
- Render product item detail.
- UseEfect to show them.

## version 1.0.6

- Run npm install react-router-dom.
- Import {BrowserRouter, Route, Switch} from react-router-dom to NavBar component.
- Set routes '/'(home), '/category/:id', '/item/:id'
- Import useParams hook at ItemListContainer and ItemDetailContainer.
- With useParams create a new dynamic variable to save id from URL.
- Set links: Brand to hombre '/', product to '/item/:id' and show product detail, category from NavBar to '/category/:id' and show products with that category.
- Filter by category and show item detail.
- Add error route and error component.

## version 1.0.7

- Import ItemCount to ItemDetail.
- Click on 'add to cart' and 'finish' buttons, render Cart component.

## version 1.0.8

- Use ReactContext to keep users cart.
- Create context folder on src folder.
- Add CartContext file.
- Create a CartProvider component.
- To click on 'ad to cart' button, save product like an object on CartContext imported.

## version 1.0.9

- Create Cart component.
- Add route to Cart on BrowserRouter.
- Add link from CartWidget icon to Cart.
- Add message on Cart component and a button link to home, when Cart i'ts empty.
- Function for total price and total items quantity, and show them on Cart.
- Add trash icon to remove item.
