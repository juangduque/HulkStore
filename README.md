# Hulk Store
This application is to carry the inventory of a venture that sells related items Marvel super heroes or DC comics.
The application was made with React and SASS.

## Quick start
To run a developer server:
```
npm install
npm run start
```
## Build a production bundle
```
npm run build

```

## Usage
In this version the user could see the buttons by each category of sales (Shirts, Cups, comics, toys and accessories), when click the pages will change and display the items by that category. Then the user could see a list with the highligths of all the products, the user can click the products and see more details of that especific item clicked.

You can modify the information displayed by modifying the db.json file. Just add an  object. The reference number (ref) can't be repeated, be careful with that, because that is also the key value of the component.

The following is an example of the object to be added, you can add it to any of the categories and it should be displayed on the screen. Navigate between windows to refresh.
```
(example)
{ "name": "Hulk final fate", "ref":"1203", "stock":0, "unitPrice": 40000 } 
```
The structure is:
```
{ "name": "[Name of the product]", "ref":"[Reference", "stock":[Total quantity of product], "unitPrice": [Unitary price of the product] } 
```

As you can see, in the category "Camisetas" in the objects that make up this category have an object called "register", which was planned to record the transaction history of each product (feature to see the record). Whether this object is present or not does not affect the main functionalities of the application.

### Out of stock behavior

If the value of the stock is zero, in the details view the button to register sales turns gray, as if indicating that operations on this item are not allowed.To see this click on the item "Hulk final fate" in the category "Glasses" which its value is equal to zero.

## License
This project is under [MIT license](https://opensource.org/licenses/MIT).

## Final notes
There are components that suggest characteristics but are not functional which are: Search among products, register income, register sales and see record of each product. 