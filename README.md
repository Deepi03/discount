# discount
This application gives discount price of each product to a customer under certain constraints
## Prerequisite
Following tools required,   
  * node 18
  * npm 8

## Build & Unit test

* `npm run build` 
* `npm run start`
* `npm run watch`
* `npm run test`


## Endpoints
* get all products - `localhost:8000/products`
* get products with discount price during particular time of year - `localhost:8000/products/1/customers/1?type=time_of_sale&value=june`
* get products with discount
price based on past sales -
`localhost:8000/products/1/customers/1?type=past_sale&value=10000`

## Example Inputs and Expected Output
 ### Input
 * productId : 1 or 2
 * customerId : 1 or 2 or 3
 * type = time_of_sale or past_sale
 * For time_of_sale : `value = june or november or december`    
 * For past_sale :
  `value =  10000-20000 or 20001-30000 or 30001-40000 or 40001-50000`
 
 ### Output 
type = time _of_sale & value = june

 `{
"id": "1",
"name": "iphone14",
"normalPrice": "1200",
"discountedPrice": "1000"
}`

type = time _of_sale & value = november

`{
"id": "1",
"name": "iphone14",
"normalPrice": "1200",
"discountedPrice": "1100"
}`

type = time _of_sale & value = december

`
{
"id": "1",
"name": "iphone14",
"normalPrice": "1200",
"discountedPrice": "1150"
}
`

type = past_sale & value = 10002

`{
"id": "1",
"name": "iphone14",
"normalPrice": "1200",
"discountedPrice": "1200"
}`

type = past_sale & value = 20002

`{
"id": "1",
"name": "iphone14",
"normalPrice": "1200",
"discountedPrice": "1150"
}`

type = past_sale & value = 30002

`{
"id": "1",
"name": "iphone14",
"normalPrice": "1200",
"discountedPrice": "1100"
}`

type = past_sale & value = 40205

`{
"id": "1",
"name": "iphone14",
"normalPrice": "1200",
"discountedPrice": "1050"
}`


