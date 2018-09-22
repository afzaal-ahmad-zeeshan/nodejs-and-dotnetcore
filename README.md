## Node.js and .NET Core
This repository shares a comparison of .NET Core and Node.js in terms of features and offerings.

> A quick comparison of different concepts, features and patterns in .NET Core and Node.js.

Repository contains following samples and demonstrations for the time being:

1. Asynchronous programming approaches
2. Dependency Injection
3. Short circuiting

### Asynchronous Programming
Hot topic. Asynchronous programming is an interesting topic, especially when it comes to server applications. First asynchronous program I wrote was in WPF, and then WinForms. But the different becomes apparent as soon as you implement it in a server application that has to manage the users and respond. That is where, Node.js easily beats .NET apps due to its asynchronous or event-driven approach. Node.js is light-weight, and easily scales as needed. 

Instead of a benchmark, what I wanted to do was, to demonstrate how to write asynchronous functions in both these runtimes. In C#, we have `Task`, and in the case of JavaScript, we have this beautiful type (no pun intended) called `Promise`. Their purpose is same, they serve as a placeholder for a type that has not yet been evaluated. There are some areas where C#'s `Task` is useful and easier to manage, and some areas where JavaScript's `Promise` object was easier to manage and handle. Anyways the repositories have the demonstration, you can play along. 

### Dependency Injection
Comparison in this category falls with Node.js and ASP.NET Core, more than JavaScript vs. C#. 

For JavaScript, introduction a type-container in a type-less system would be problematic because it requires to introduce type-system, and then have a container. A way that I introduce in this is just to demonstrate that this behavior is supported, but a simple singleton pattern would outrun the containers for dependency injection, and also would be easier to implement; as it can be seen. 

Our demonstration implementation contains, 

1. Container
2. Functions
    - To add the instance
    - To get the instance

Our `Container` class is singleton in nature, this was done by hiding the constructors and allowing the external objects to use the methods made available `public`ly. One thing to note here is that in C# I used the generics, to do this, `Container.AddInstance<IService, SmsService>();`, instead of `Container.AddInstance(typeof(IService), typeof(SmsService))`&mdash;**good-looking-practices**. 

### Short circuiting
Short circuiting is an interesting technique in programming, where your programs decide whether to proceed with the expression evaluation or they can decide what the overall output of the expression would be. In simple forms, they are applied to boolean expressions. But JavaScript and C# both have language support that can be applied to much complex types and expressions as well. 

I yet have to work on the null coalesce, and the safe navigation operator and will add them here too. 

### What's next
I wanted to write more about the modular approaches of Node.js and .NET Core, but the overall system of their typing is different and it does not make any sense to share any insight on them. But however, the dynamic typing and compiler-derived (or inferred) typing are a good topic to be convered in both Node.js, as well as .NET Core. 

Stay tuned for the full article about these concepts and the nitty gritty details of the codes. 

### Issues
Although not necessary, but I would appreciate if you can update the codes and add some best practices to them, create issues or add the patches and create a pull request for me. Also, it would be nice of you to share some features/concepts that should be added to this list of the services/patterns in both the worlds&mdash;Node.js and .NET Core.