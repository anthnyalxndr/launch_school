# JS 109 Assessment Preparation Notes
## Unclear Topics / Open Questions
1. What test cases are we expected to handle in the interview process?
	- Should our code be able to handle null, undefined, and wrong data type inputs?
	  
2. Is it bad to use methods or approaches to a problem that we haven't learned in JS101.
	- E.g. deduplicating an array by coercing it to a set and then back to an array.
3. To what extent do I need to know the differences in coercion behavior across operators?
	- E.g. the == operator coerces strings to numbers when you're comparing a string and a number operand.
		- However, when using the + operator with a string and number operand, the number is coerced to a string and the output of the expression is a new string that's a concatenation of the first and second operand.

## How to Approach Studying
- Make sure that you have prepared yourself in a way that is how \*you\* best perform, not necessarily how other people think you should do it
  
## How to Correctly Answer Problems
### Question Answering Checklist
- Always have the following concepts in mind when explaining what code does.
	- Correct language
		- Passing & Returning
			- We don't pass and return variables, but rather their values or a reference to the object they're assigned to.
	- Scope
		- function params as locally scoped variables that can mutate the object they're initialized to.
	- Side-effects
	- Passing by value vs reference
	- The return value of a function
	- Mutation
		- Primitives can't be mutated
		- Object mutation
			- Can happen sneakily when shallow copying
	- Shallow vs Deep Copying
- Be aware if the question is asking for an **implementation-level description** or a **user-level description**.
	- user-level descriptions are  not dependent on the implementation. They take a higher-level perspective that describes what's happening, and the description won't change even if the implementation is changed.

- Be extremely precise & consistent in your language. 
	- Be very clear about the distinction between _truthy_ and _falsy_ values and the boolean values `true` and `false`.
	- E.g. when describing the following line of code, say "the global variable greeting is declared and initialized to the value 'Hello'"" instead of saying "The global variable `greeting` is assigned to the string `'Hello'`"
	  ``` javascript
	  let greeting = 'Hello'
	  ```

	- E.g. the following example precisely describes what a simple `forEach` call does.
	  ```javascript
		array.forEach(element => {
		  console.log(element.foo);
		});
		```
		- This paragraph talks about the `forEach` method being called by the object referenced by `array` in the above code. It invokes the callback function for each element, passing that element to the callback as an argument. Within the callback, the element is known by the parameter name `element`, and the callback uses the `console.log` method log the value of `element.foo`.
		
- Explain why code is able to do what it does.
	- E.g. a function is able to access a global variable because outer-scoped variables are accessible within an inner scope unless they're shadowed by a local variable of the same name.
  
- Explain the underlying principle that the problem demonstrates and why it's important
  
- Don't answer questions completely in bullet point form. Only use bullets when a list is necessary.
	- Paragraphs make it easier to think about the bigger picture since you're striving for clarity, not a list of everything you can think of.
  
- Don't give unecessary detail that's irrelevant to the question at hand. 
  
  For example, if you were asked the following question, make sure to answer that question but not explain other parts of the code that are irrelevant to the question answer.
  Question: What does this code print and why?
  ```javascript
  function replace(str, value) {
  while (true) {
    break;
  }

  str = value;
  }

  let greet = 'Hey!'
  replace(greet, 'Hello')
  console.log(greet);
	```
	- Irrelevant information to this question would include:
		- `while` is a loop that might execute forever.
		- `break` causes the loop to end immediately.
		- `'Hello'` and `'Hey'` are strings.
	- Instead, the answer should focus on what the code prints and why it prints that.
		- The code prints `Hey!` since the `replace` function doesn't mutate the string passed in as its first argument; it can't mutate the string since strings are immutable. 
		- On line 5, we reassign the 2nd argument to the `str` variable. However, reassignment of a variable never mutates the value it contains, so it has no effect on the string contained by `greet`.
		- Additionally, reassignment of a function parameter never has side effects, since function parameters are variables declared in the local function scope (even if they have the same name as a global variable (known as variable shadowing)).


### Launch School Example Problem
Examine the code example below: 
- The last line outputs the string `'Hi'` rather than the string `'Hello'`. 
- **Explain what is happening here and identify the underlying principle that this demonstrates.**

``` javascript
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

- Compare the following possible answers to this question. Based on the way that this question is phrased, **answer D would be the only answer of the four to receive full points in an actual assessment.**
	- A)  `greeting` is set to `'Hello'` on line 1. `greeting` is set to `'Hi'` on line 4. Line 8 outputs `greeting`, which is `'Hi'`.
	
	- B) The global variable `greeting` is assigned to the string `'Hello'` on line 1. Within the loop, `greeting` is then reassigned to the string `'Hi'`on line 4. On line 8, `console.log` is called with the variable `greeting` passed to it as an argument; since `greeting` is now assigned to `'Hi'`, this is what is output.
	
	- C) The global variable `greeting` is initialized to the string `'Hello'` on line 1. Within the loop, lines 3 to 6 define a block within which `greeting`is reassigned to the string `'Hi'` on line 4. On line 8, `console.log` is called with the variable `greeting` passed to it as an argument; since `greeting` is now assigned to `'Hi'`, this is what is output.
	
	- ⭐️D) The global variable `greeting` is declared and initialized to the string `'Hello'` on line 1. Lines 3 to 6 define a loop that will execute forever, unless something happens to end the loop. When the loop begins, it first reassigns the `greeting` global variable to `'Hi'` on line 4. The next line, `break`, causes the loop to end, with execution resuming after line 6. Finally, on line 8, `console.log` is called with the value of the variable `greeting` passed to it as an argument. Since `greeting` is now assigned to `'Hi'`, that is what gets output. This example demonstrates variable scoping rules in JavaScript; specifically the fact that a variable declared in the outer scope is accessible from a nested inner scope.

- While none of these answers is technically incorrect, they all answer the question with varying degrees of detail and precision.
	-   Answer **A** describes what is happening in the code example, but does so in a fairly basic way with imprecise language. This response wouldn't be sufficient to receive full points for any of the questions in the assessment.
	    
	-   Answer **B** again describes what is happening, but with greater precision of language. This answer would score higher than answer **A**, but generally wouldn't be sufficient to receive full points for the majority of questions; most questions in the assessment are looking for something more, such as a specific piece of syntactical knowledge and perhaps identification of some fundamental concept.
	    
	-   Answer **C**, as well as precisely describing the example, identifies an important JavaScript syntactical convention that is relevant to the example code: the fact that braces next to a `while` statement form a block in JavaScript. We also use more precise terminology by saying that `greeting` is initialized instead of assigned. For some assessment questions, this answer might be enough to receive full points, but many questions expect you to demonstrate a deeper understanding of the fundamental concept that this illustrates.
	    
	-   Answer **D** goes a step further than **C**' by explaining why this is important and the underlying principle that it demonstrates; i.e., the fact that JavaScript has particular scoping rules which affect whether or not a variable can be referenced or reassigned. It also talks about how the `break` statement influences the execution of the loop. Finally, we also mention that we're declaring a global variable. Based on the way that this question is phrased, answer **D** would be the only answer of the four to receive full points in an actual assessment.
```


## Notes on Material
Note: At some point place these notes in their own docs.
- Implicit Coercion
	- Difference in behavior among operators
| Operator | Data Types       | Behavior                 | Example  | Explanation
| -------- | ---------------- | ------------------------ | -------- |
| ==       | string == number | String coerced to number | 'a' == 0 |
