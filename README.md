# Restful Library Catalog

- _A basic, MVC implementation of a RESTful book catalog_

## Controller

- Handles requests and request flow from client
- Asks model for information based on request
- Never directly manipulates or handles data itself (this is Model's job)
- Once response is received from Model, controller interacts with View to tell it what to render
- After the presentational elements are laid out by the View, the Controller sends this response back to the client

## Model

- Interacts directly with DB
- Handles data logic
- Never interacts directly with the View

## View

- Handles the data presentation
- Dynamically rendered templates, but not directly responsible for the final presentation that the user sees
- Never interacts directly with the Model

### See the included mvc-diagram photo for a breakdown of how this MVC flow looks in a production setting
