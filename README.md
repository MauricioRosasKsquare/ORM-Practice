# ORM Practice

Welcome to the repo that host the required code for the ORM's module as part of the ITK 4th Generation.
# Stack

The repo is using the following technologies:

- `express` (node server framework)
- `sequelize` (SQL ORM)
- `mongoose` (Mongo ORM)

# Set the app!
## How to run

### Install the packages.

#### Using **npm**

```sh
$ npm install
```

#### Using **yarn**

```sh
$ yarn
```

I encourage you to use **yarn**.

### Run the server

Just run

```sh
$ yarn run dev
````

# Resources

- [About dependency injection](https://tsh.io/blog/dependency-injection-in-node-js/)
- [Abstract classes an interfaces](https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/)
- [Typescript interfaces](https://www.educative.io/blog/typescript-interfaces)
- [OOP concepts](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/)

# Homework

One of the clients of Ksquare wants to create the next Reddit, so it want to have an MVP (Minimum Viable Product) ASAP.

They want to have a minial interface when the users post a message and it can receive comments from other users.

The Lead Backend Engineer shared with you an entity relation diagram that show the relation that will be exists between the elements.

![Screenshot](./images/ORM_practice.png)

We need to implement a simple API that allow us to do:

1. Create `users`
1. Create `posts`
1. Retrieve single `user` information
1. Retrieve all `users` information
1. Retrieve single `post` information
1. Retrieve all `posts`
1. Create a `comment` as part of a post
1. Retrieve all `comments` from a post

Business considerations

1. A `user` can have zero or many `posts`
1. Many `posts` could belong to a `user`
1. A `post` could have zero or many `comments`
1. A `comment` was done by a `user` and belongs to a `post`

We need to cover these requirements and tell the QA team to run the smoke tests over the API to see if all the requirements are covered in a good way!

# How the homework will be graded

| Test passed      | Grade |
| ----------- | ----------- |
| 8 tests      | 100%       |
| 6 tests   | 90%        |
| 4 tests   | 80%        |
| 2 tests   | 70%        |
| 1 tests   | 60%        |

## Extra points!!

| Action      | Points |
| ----------- | ----------- |
| Complete `users` CRUD      | 3       |
| Complete `posts` CRUD    | 3        |
| Complete `comments` CRUD | 3        |
| Not `any`  | 1    |

Feel free to reach Daniel (daniel.basulto@theksquaregroup.com) for any question, remember that we are here to learn not to suffer.

Hope you enjoy it! Good luck!
