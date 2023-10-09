## Table of Contents


## Introduction

NestJS is a framework for building efficient, scalable Node.js server side applications.

- Fully supports TypeScript, pure JavaScript, and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
- use HTTP Server frameworks like Express (default) and optionally can be figured to use Fastify.
- Also, Nest gives developers the freedom to use the myriad of their-party modules which are available for the underlying platform.

## Philosophy

In recent years, JavaScript has become the “lingua franca” of the web for both front and backend applications. 

However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - **Architecture**.

Nest provides an remarkable architecture which allows developers and teams to create testable, saclable, and easily maintainable applications.

The architecture is heavily inspired by Angular.

## Platform

Nest aims to be a **platform-agnostic** framework.

- Platform independence makes it possible to create reusable logical parts that developers can take advantage of across several different types of applications.
- Technically, Nest is able to work with any Node HTTP framework once an adapter is created.

There are officially two HTTP platforms supported: **express** and **fastify**.

- Whichever platform is used, it exposes its own application interface. These are seen respectively as `NestExpressApplication` and `NestFastifyApplication`.
- When you pass a type to the NestFactory.create() method, as in the example below, the app object will have methods available exclusively for that specific platform.
  - Note, however, you don't need to specify a type **unless** you actually want to access the underlying platform API.

```
const app = await NestFactory.create<NestExpressApplication>(AppModule);

```
