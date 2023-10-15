## Custom Providers

### DTO (Data Transfer Objecct)

DTO is an object that **transfer** data between processes. The main purpose of a DTO is to **encapsulate** and transfer data between different layers or components of an application, often between the server and the client in a distributed system.

- You will use DTOs in object-oriented programming (OOP) language environments such as Python, C++, and Java.
- OOP environments rely on a sytem of "**calls**". Each one is a bit like a data lookup, and they require both time and processing speed.
- In NestJS, we recommend to use `class` to create DTO instead of `interface`.
  - Because `class` operates in the NestJS runtime so it's better to use when we use `pipe` function.

What is the benefit of DTO?

- **Reducing network calls**: DTPs can fetch all required data ina single call instead of making multiple remote procedure calls to retrieve data.
- **Security and Validation**: since DTOs can represent data sent between the client and backend, it also can be used to validate and sanitize incoming data from external sources, such as user input. This can help prevent security vulnerabilities like injection attacks.

### DI fundamentals

**Nest IoC Container**

- Provider를 등록하고 관리하는 객체이다. Provider는 NestJS의 라이프 사이클과 동기화된 Scope을 가지며 프로그램이 시작될 떄 모든 종속성을 처리한다.
- Provider는 의존성 주입을 통해 다른 클래스와 관계를 맺을 수 있는데, IoC Container는 Provider의 메타데이터를 분석하여 의존성 그래프를 생성한다.
- IoC Container는

## References

https://hou27.tistory.com/entry/NestJS-Provider%EC%99%80-Nest-IoC-Container
