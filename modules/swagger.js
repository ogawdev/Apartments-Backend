const swaggerJsdoc = require("swagger-jsdoc");

// const options = {
//     openapi: "3.1.0",
//
//     definition: {
//         "info": {
//             "title": "Apartments-Backend",
//             "version": "1.0.0"
//         },
//         "servers": [
//             {
//                 "url": "https://virtserver.swaggerhub.com/MENGNIYOZOVOGABEK05_1/Apartments/1.0.0",
//                 "description": "SwaggerHub API Auto Mocking"
//             },
//             {
//                 "url": "localhost://3000/api"
//             }
//         ],
//         "paths": {
//             "/000/api/category": {
//                 "get": {
//                     "tags": [
//                         "General"
//                     ],
//                     "summary": "localhost:3000/api/category",
//                     "responses": {
//                         "200": {
//                             "description": "Successful response",
//                             "content": {
//                                 "application/json": {}
//                             }
//                         }
//                     }
//                 }
//             },
//             "/000/api/category/c3444880-6324-4b77-8e6d-aa9459d05885": {
//                 "get": {
//                     "tags": [
//                         "General"
//                     ],
//                     "summary": "localhost:3000/api/category/c3444880-6324-4b77-8e6d-aa9459d05885",
//                     "responses": {
//                         "200": {
//                             "description": "Successful response",
//                             "content": {
//                                 "application/json": {}
//                             }
//                         }
//                     }
//                 }
//             }
//         },
//         "components": {},
//         servers: [
//             {
//                 url: "http://localhost:3000",
//             },
//         ],
//     },
//     apis: ["./routes/*.js"],
// };

const options = {
    openapi: "3.0.0",
    definition: {
        "openapi": "3.0.0",
        "info": {
            "title": "Apartments-Backend",
            "version": "1.0.0"
        },
        "servers": [
            {
                "url": "localhost:3000/"
            }
        ],
        "paths": {
            "/000/api/category": {
                "get": {
                    "tags": [
                        "Category"
                    ],
                    "summary": "localhost:3000/api/category",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "headers": {
                                "X-Powered-By": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Express"
                                    }
                                },
                                "Content-Type": {
                                    "schema": {
                                        "type": "string",
                                        "example": "application/json; charset=utf-8"
                                    }
                                },
                                "Content-Length": {
                                    "schema": {
                                        "type": "integer",
                                        "example": "529"
                                    }
                                },
                                "ETag": {
                                    "schema": {
                                        "type": "string",
                                        "example": "W/\"211-DaYMYuQjesOFtne0e921U38mkbo\""
                                    }
                                },
                                "Vary": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Accept-Encoding"
                                    }
                                },
                                "Set-Cookie": {
                                    "schema": {
                                        "type": "string",
                                        "example": "connect.sid=s%3ASettuSOAp3ixtojenxqfrCskgKEt4Rb0.XaH0%2Fv3%2F9h0IWJpqkhQ0fm0X4iJDUkUBx3ntU%2Fb7Brg; Path=/; Expires=Wed, 26 Apr 2023 13:57:27 GMT; HttpOnly"
                                    }
                                },
                                "Date": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Tue, 25 Apr 2023 13:57:27 GMT"
                                    }
                                },
                                "Connection": {
                                    "schema": {
                                        "type": "string",
                                        "example": "keep-alive"
                                    }
                                },
                                "Keep-Alive": {
                                    "schema": {
                                        "type": "string",
                                        "example": "timeout=5"
                                    }
                                }
                            },
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object"
                                    },
                                    "example": {
                                        "ok": true,
                                        "categories": [
                                            {
                                                "category_id": "c3444880-6324-4b77-8e6d-aa9459d05885",
                                                "title": "dsad",
                                                "description": "sadas",
                                                "image": "/assets/uploads/1e2b42c5909016f31eb69a57540e7a0e.png",
                                                "createdAt": "2023-04-13T18:46:48.346Z",
                                                "updatedAt": "2023-04-13T18:46:48.346Z"
                                            },
                                            {
                                                "category_id": "633c3de9-9384-41dc-99a6-d0cd74ce3929",
                                                "title": "dsad",
                                                "description": "sadas",
                                                "image": "/assets/uploads/1e2b42c5909016f31eb69a57540e7a0e.png",
                                                "createdAt": "2023-04-13T18:47:08.350Z",
                                                "updatedAt": "2023-04-13T18:47:08.350Z"
                                            }
                                        ],
                                        "totalCount": 2,
                                        "p_page": 5,
                                        "c_page": 1
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/000/api/category/c3444880-6324-4b77-8e6d-aa9459d05885": {
                "get": {
                    "tags": [
                        "Category"
                    ],
                    "summary": "localhost:3000/api/category/c3444880-6324-4b77-8e6d-aa9459d05885",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "headers": {
                                "X-Powered-By": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Express"
                                    }
                                },
                                "Content-Type": {
                                    "schema": {
                                        "type": "string",
                                        "example": "application/json; charset=utf-8"
                                    }
                                },
                                "Content-Length": {
                                    "schema": {
                                        "type": "integer",
                                        "example": "255"
                                    }
                                },
                                "ETag": {
                                    "schema": {
                                        "type": "string",
                                        "example": "W/\"ff-BsGeFVlUPdqazc24vH/m1YhKr7o\""
                                    }
                                },
                                "Vary": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Accept-Encoding"
                                    }
                                },
                                "Date": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Tue, 25 Apr 2023 13:58:36 GMT"
                                    }
                                },
                                "Connection": {
                                    "schema": {
                                        "type": "string",
                                        "example": "keep-alive"
                                    }
                                },
                                "Keep-Alive": {
                                    "schema": {
                                        "type": "string",
                                        "example": "timeout=5"
                                    }
                                }
                            },
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object"
                                    },
                                    "example": {
                                        "ok": true,
                                        "category": {
                                            "category_id": "c3444880-6324-4b77-8e6d-aa9459d05885",
                                            "title": "dsad",
                                            "description": "sadas",
                                            "image": "/assets/uploads/1e2b42c5909016f31eb69a57540e7a0e.png",
                                            "createdAt": "2023-04-13T18:46:48.346Z",
                                            "updatedAt": "2023-04-13T18:46:48.346Z"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/000/api/apartments/c3444880-6324-4b77-8e6d-aa9459d05885": {
                "get": {
                    "tags": [
                        "Apartment"
                    ],
                    "summary": "localhost:3000/api/apartments/c3444880-6324-4b77-8e6d-aa9459d05885",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "headers": {
                                "X-Powered-By": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Express"
                                    }
                                },
                                "Access-Control-Allow-Origin": {
                                    "schema": {
                                        "type": "string",
                                        "example": "*"
                                    }
                                },
                                "Content-Type": {
                                    "schema": {
                                        "type": "string",
                                        "example": "application/json; charset=utf-8"
                                    }
                                },
                                "Content-Length": {
                                    "schema": {
                                        "type": "integer",
                                        "example": "943"
                                    }
                                },
                                "ETag": {
                                    "schema": {
                                        "type": "string",
                                        "example": "W/\"3af-oitaNVbBp+8zdZcxOzNWqK1QgJE\""
                                    }
                                },
                                "Vary": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Accept-Encoding"
                                    }
                                },
                                "Date": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Wed, 26 Apr 2023 09:15:17 GMT"
                                    }
                                },
                                "Connection": {
                                    "schema": {
                                        "type": "string",
                                        "example": "keep-alive"
                                    }
                                },
                                "Keep-Alive": {
                                    "schema": {
                                        "type": "string",
                                        "example": "timeout=5"
                                    }
                                }
                            },
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object"
                                    },
                                    "example": {
                                        "ok": true,
                                        "apartments": [
                                            {
                                                "id": "735e7bac-4e3d-4aff-bcf0-f8e71817ba6b",
                                                "title": "1",
                                                "description": "1",
                                                "address": "1",
                                                "longitude": "1",
                                                "latitude": "1",
                                                "price": "1",
                                                "images": [
                                                    "/assets/uploads/1e2b42c5909016f31eb69a57540e7a0e.png",
                                                    "/assets/uploads/5e0f556072e83cfc794992bd0341465f.jpg",
                                                    "/assets/uploads/c366860fb32a2c6dd335cf4e4c8f2012.jpg"
                                                ],
                                                "createdAt": "2023-04-19T14:03:16.308Z",
                                                "updatedAt": "2023-04-19T14:03:16.308Z",
                                                "category_id": "c3444880-6324-4b77-8e6d-aa9459d05885"
                                            },
                                            {
                                                "id": "f35d199a-388b-483f-b84c-4871b666be11",
                                                "title": "1",
                                                "description": "1",
                                                "address": "1",
                                                "longitude": "1",
                                                "latitude": "1",
                                                "price": "1",
                                                "images": [
                                                    "/assets/uploads/1e2b42c5909016f31eb69a57540e7a0e.png",
                                                    "/assets/uploads/5e0f556072e83cfc794992bd0341465f.jpg",
                                                    "/assets/uploads/c366860fb32a2c6dd335cf4e4c8f2012.jpg"
                                                ],
                                                "createdAt": "2023-04-19T14:03:43.559Z",
                                                "updatedAt": "2023-04-19T14:03:43.559Z",
                                                "category_id": "c3444880-6324-4b77-8e6d-aa9459d05885"
                                            }
                                        ],
                                        "totalCount": 2,
                                        "p_page": 5,
                                        "c_page": 1
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/000/api/apartment/735e7bac-4e3d-4aff-bcf0-f8e71817ba6b": {
                "get": {
                    "tags": [
                        "Apartment"
                    ],
                    "summary": "localhost:3000/api/apartment/c3444880-6324-4b77-8e6d-aa9459d05885",
                    "responses": {
                        "200": {
                            "description": "OK",
                            "headers": {
                                "X-Powered-By": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Express"
                                    }
                                },
                                "Access-Control-Allow-Origin": {
                                    "schema": {
                                        "type": "string",
                                        "example": "*"
                                    }
                                },
                                "Content-Type": {
                                    "schema": {
                                        "type": "string",
                                        "example": "application/json; charset=utf-8"
                                    }
                                },
                                "Content-Length": {
                                    "schema": {
                                        "type": "integer",
                                        "example": "463"
                                    }
                                },
                                "ETag": {
                                    "schema": {
                                        "type": "string",
                                        "example": "W/\"1cf-J5cBbyQBYpNj2udU7cD9unH2DHk\""
                                    }
                                },
                                "Vary": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Accept-Encoding"
                                    }
                                },
                                "Date": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Wed, 26 Apr 2023 09:17:03 GMT"
                                    }
                                },
                                "Connection": {
                                    "schema": {
                                        "type": "string",
                                        "example": "keep-alive"
                                    }
                                },
                                "Keep-Alive": {
                                    "schema": {
                                        "type": "string",
                                        "example": "timeout=5"
                                    }
                                }
                            },
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object"
                                    },
                                    "example": {
                                        "ok": true,
                                        "apartment": {
                                            "id": "735e7bac-4e3d-4aff-bcf0-f8e71817ba6b",
                                            "title": "1",
                                            "description": "1",
                                            "address": "1",
                                            "longitude": "1",
                                            "latitude": "1",
                                            "price": "1",
                                            "images": [
                                                "/assets/uploads/1e2b42c5909016f31eb69a57540e7a0e.png",
                                                "/assets/uploads/5e0f556072e83cfc794992bd0341465f.jpg",
                                                "/assets/uploads/c366860fb32a2c6dd335cf4e4c8f2012.jpg"
                                            ],
                                            "createdAt": "2023-04-19T14:03:16.308Z",
                                            "updatedAt": "2023-04-19T14:03:16.308Z",
                                            "category_id": "c3444880-6324-4b77-8e6d-aa9459d05885"
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Not Found",
                            "headers": {
                                "X-Powered-By": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Express"
                                    }
                                },
                                "Access-Control-Allow-Origin": {
                                    "schema": {
                                        "type": "string",
                                        "example": "*"
                                    }
                                },
                                "Content-Type": {
                                    "schema": {
                                        "type": "string",
                                        "example": "application/json; charset=utf-8"
                                    }
                                },
                                "Content-Length": {
                                    "schema": {
                                        "type": "integer",
                                        "example": "51"
                                    }
                                },
                                "ETag": {
                                    "schema": {
                                        "type": "string",
                                        "example": "W/\"33-I+IB2c96w1Jf6G9LIDAisbkUlsc\""
                                    }
                                },
                                "Vary": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Accept-Encoding"
                                    }
                                },
                                "Date": {
                                    "schema": {
                                        "type": "string",
                                        "example": "Wed, 26 Apr 2023 09:16:05 GMT"
                                    }
                                },
                                "Connection": {
                                    "schema": {
                                        "type": "string",
                                        "example": "keep-alive"
                                    }
                                },
                                "Keep-Alive": {
                                    "schema": {
                                        "type": "string",
                                        "example": "timeout=5"
                                    }
                                }
                            },
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object"
                                    },
                                    "example": {
                                        "ok": false,
                                        "message": "Error: Apartment not found"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/000/api/apartment": {
                "post": {
                    "tags": [
                        "Apartment"
                    ],
                    "summary": "localhost:3000/api/apartment",
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "searchTerm": "test"
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Successful response",
                            "content": {
                                "application/json": {}
                            }
                        }
                    }
                }
            },
            "/000/api/message": {
                "post": {
                    "tags": [
                        "Message"
                    ],
                    "summary": "localhost:3000/api/message",
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "example": {
                                        "name": "Ogabek",
                                        "phone": "+998905210501",
                                        "message": "Salom bu xabar"
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Successful response",
                            "content": {
                                "application/json": {}
                            }
                        }
                    }
                }
            }
        }
    },
    apis: ["./routes/*.js"],

}

const specs = swaggerJsdoc(options);

module.exports = specs;