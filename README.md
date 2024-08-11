BookShelf API
This is a RESTful API built with NestJS and MongoDB that provides book descriptions for a given book title.

Prerequisites
Node.js (version 14 or higher)
MongoDB (version 4.4 or higher)
Steps
Clone the repository:

Copy
git clone https://github.com/your-username/BookShelf-Nestjs-API.git
Navigate to the project directory:

Copy
cd BookShelf-Nestjs-API
Install dependencies:

Copy
npm install
Set up the environment variables:
Create a .env file in the root directory of the project.
Add the following environment variables:

Copy
DB_URI=<your-mongodb-connection-string>
JWT_SECRET = <your secret>
JWT_EXPIRES = < number of day like<3d>>
Start the development server:

Copy
npm run start:dev
The API will be accessible at http://localhost:3000.

Usage
You can use a tool like Postman or cURL to interact with the API. Here are some example requests:

Get book descriptions by title
Copy
GET /book?keyword=The+Great+Gatsby

Create a new book description
json

Copy
POST /book
{
  "title": "To Kill a Mockingbird",
  "description": "A young girl named Scout and her brother Jem witness racial injustice in their small Southern town.",
  "author": "Harper Lee",
  "price": "100",
}
Update an existing book description

Copy
PUT /books/123456789
{
  "description": "This Pulitzer Prize-winning novel tells the story of a young girl named Scout and her family during the Great Depression."
}
Delete a book description

Copy
DELETE /books/123456789
For more detailed information about the API endpoints, please refer to the API Endpoints section.

API Endpoints
Method	Endpoint	Description
GET	/book	Get a list of book descriptions
POST	/book	Create a new book description
GET	/books/:id	Get a book description by ID
PUT	/books/:id	Update a book description by ID
DELETE	/books/:id	Delete a book description by ID
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
