import { Lesson } from '../types/lesson';

/**
 * All lessons for the Python learning course
 * This is separated from UI logic to make it easy to:
 * - Add new lessons
 * - Import from external sources
 * - Version control lesson content separately
 */
export const lessons: Lesson[] = [
  {
    id: '1',
    title: '1. Hello, Python!',
    theory: `Welcome to Python! 🐍

Python is a fun programming language. Let's start by making the computer say hello!

The print() command tells the computer to show text on the screen.

Try it: Click the "Run Code" button! →`,
    code: `print("Hello, World!")
print("I'm learning Python!")`,
    explanation: 'The print() function displays messages. Put your text inside quotes!',
    difficulty: 'beginner',
    tags: ['basics', 'print'],
    question: {
      text: 'What does the print() function do?',
      options: [
        'Displays text on the screen',
        'Reads input from the user',
        'Performs calculations',
        'Creates variables',
      ],
      correctAnswer: 0,
      explanation: 'The print() function displays messages and output on the screen.',
    },
  },
  {
    id: '2',
    title: '2. Numbers',
    theory: `Computers are great at math!

You can do:
• Addition: +
• Subtraction: -
• Multiplication: *
• Division: /

Try changing the numbers and see what happens! →`,
    code: `print(5 + 3)
print(10 - 4)
print(6 * 2)
print(20 / 4)`,
    explanation: 'Python can be your calculator!',
    difficulty: 'beginner',
    tags: ['math', 'operators'],
    question: {
      text: 'What is the result of 10 / 2?',
      options: ['5', '5.0', '2', '20'],
      correctAnswer: 1,
      explanation: 'Division in Python returns a float (decimal number), so 10 / 2 = 5.0',
    },
  },
  {
    id: '3',
    title: '3. Variables',
    theory: `Variables are like boxes that hold things.

You can store numbers, words, or anything else in them!

Give your variable a name, then use = to put something inside.

Examples:
age = 10
name = "Alex"

Try it! →`,
    code: `age = 10
name = "Sam"

print("My name is", name)
print("I am", age, "years old")`,
    explanation: 'Variables remember things for you!',
    difficulty: 'beginner',
    tags: ['variables', 'basics'],
    question: {
      text: 'How do you create a variable named "age" with the value 12?',
      options: ['age = 12', 'var age = 12', 'age := 12', 'create age 12'],
      correctAnswer: 0,
      explanation: 'In Python, you create variables using the = operator: variable_name = value',
    },
  },
  {
    id: '4',
    title: '4. Strings (Text)',
    theory: `Strings are text in Python.

Put text inside "quotes" or 'quotes'.

You can join strings together with +

You can repeat them with *

Try it! →`,
    code: `greeting = "Hello"
name = "Alex"

print(greeting + " " + name + "!")
print("Ha" * 5)
print("Python is " + "awesome!")`,
    explanation: 'Strings let you work with words and sentences!',
    difficulty: 'beginner',
    tags: ['strings', 'text'],
    question: {
      text: 'What operator is used to join strings together?',
      options: ['+', '-', '*', '/'],
      correctAnswer: 0,
      explanation: 'The + operator concatenates (joins) strings together.',
    },
  },
  {
    id: '5',
    title: '5. Input - Ask Questions',
    theory: `The input() function lets you ask the user questions!

The answer is stored in a variable.

Note: In this demo, we'll use a sample answer, but in real Python, it waits for you to type!

Try it! →`,
    code: `# In real Python, this would wait for input
name = "Maya"  # Pretend the user typed this

print("What's your name?")
print("You said:", name)
print("Nice to meet you,", name + "!")`,
    explanation: 'input() makes your programs interactive!',
    difficulty: 'beginner',
    tags: ['input', 'interaction'],
    question: {
      text: 'What does the input() function do?',
      options: [
        'Asks the user for information',
        'Prints text on the screen',
        'Performs calculations',
        'Creates a variable',
      ],
      correctAnswer: 0,
      explanation: 'The input() function asks the user to type something and stores it in a variable.',
    },
  },
  {
    id: '6',
    title: '6. If Statements',
    theory: `If statements let your program make decisions!

Syntax:
if condition:
    do something

Use == to check if things are equal.
Use > for greater than.
Use < for less than.

Indentation (spaces) matters! →`,
    code: `age = 12

if age >= 10:
    print("You're growing up!")

if age < 13:
    print("You're not a teenager yet")
    
score = 95
if score >= 90:
    print("Excellent work!")`,
    explanation: 'If statements help programs think and decide!',
    difficulty: 'beginner',
    tags: ['conditionals', 'if'],
    question: {
      text: 'What symbol is used to check if two values are equal?',
      options: ['=', '==', '===', 'equals'],
      correctAnswer: 1,
      explanation: '== is used for comparison (equality check), while = is for assignment.',
    },
  },
  {
    id: '7',
    title: '7. If-Else',
    theory: `Else lets you say "otherwise..."

if condition:
    do this
else:
    do that instead

Only one part runs!

Try changing the numbers! →`,
    code: `weather = "sunny"

if weather == "rainy":
    print("Take an umbrella!")
else:
    print("Enjoy the nice weather!")

age = 8
if age >= 13:
    print("You're a teenager")
else:
    print("You're a kid")`,
    explanation: "Else handles the 'what if not' situation!",
    difficulty: 'beginner',
    tags: ['conditionals', 'if-else'],
    question: {
      text: 'What does the else statement do?',
      options: [
        'Runs code when the if condition is False',
        'Runs code before the if statement',
        'Creates a new variable',
        'Stops the program',
      ],
      correctAnswer: 0,
      explanation: 'The else statement runs code when the if condition is False.',
    },
  },
  {
    id: '8',
    title: '8. For Loops',
    theory: `Loops repeat things!

A for loop runs code multiple times.

for i in range(5):
    # This runs 5 times

You can loop through lists too!

Try it! →`,
    code: `# Count to 5
for i in range(5):
    print("Count:", i)

print("---")

# Loop through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print("I like", fruit)`,
    explanation: 'Loops save you from writing the same code over and over!',
    difficulty: 'beginner',
    tags: ['loops', 'for'],
    question: {
      text: 'How many times will this loop run? for i in range(5):',
      options: ['4', '5', '6', 'Error'],
      correctAnswer: 1,
      explanation: 'range(5) creates numbers from 0 to 4, which is 5 iterations total.',
    },
  },
  {
    id: '9',
    title: '9. Lists',
    theory: `Lists hold multiple items in order.

Create a list with square brackets: []

You can:
• Access items: list[0]
• Add items: list.append()
• Check length: len(list)

Lists start counting at 0! →`,
    code: `# Create a list
toys = ["ball", "doll", "car", "puzzle"]

print("My toys:", toys)
print("First toy:", toys[0])
print("Last toy:", toys[-1])

# Add a new toy
toys.append("robot")
print("Now I have", len(toys), "toys!")
print(toys)`,
    explanation: 'Lists are perfect for storing collections of things!',
    difficulty: 'beginner',
    tags: ['lists', 'collections'],
    question: {
      text: 'What is the first index in a Python list?',
      options: ['0', '1', '-1', 'first'],
      correctAnswer: 0,
      explanation: 'Python lists are zero-indexed, meaning the first item is at index 0.',
    },
  },
  {
    id: '10',
    title: '10. Functions',
    theory: `Functions are reusable blocks of code!

Create a function with def:

def function_name():
    # code here

Call it by using its name with ()

Functions help organize your code! →`,
    code: `def say_hello():
    print("Hello!")
    print("How are you?")

def celebrate():
    print("🎉 Yay! 🎉")
    print("Party time!")

# Call the functions
say_hello()
print("---")
celebrate()`,
    explanation: 'Functions let you reuse code easily!',
    difficulty: 'beginner',
    tags: ['functions', 'def'],
    question: {
      text: 'What keyword is used to define a function?',
      options: ['function', 'def', 'func', 'define'],
      correctAnswer: 1,
      explanation: 'Functions are defined using the def keyword in Python.',
    },
  },
  {
    id: '11',
    title: '11. Functions with Parameters',
    theory: `Functions can accept inputs called parameters.

def greet(name):
    print("Hello", name)

Now you can use it with different values!

greet("Alex")
greet("Sam")

Try it! →`,
    code: `def greet(name):
    print("Hello,", name + "!")

def add_numbers(a, b):
    result = a + b
    print(a, "+", b, "=", result)

# Use the functions
greet("Emma")
greet("Noah")
print("---")
add_numbers(5, 3)
add_numbers(10, 7)`,
    explanation: 'Parameters make functions flexible and powerful!',
    difficulty: 'beginner',
    tags: ['functions', 'parameters'],
    question: {
      text: 'What are function parameters?',
      options: [
        'Inputs that functions can accept',
        'Outputs from functions',
        'Variables inside functions',
        'Function names',
      ],
      correctAnswer: 0,
      explanation: 'Parameters are inputs that functions can accept to make them flexible.',
    },
  },
  {
    id: '12',
    title: '12. While Loops',
    theory: `While loops repeat as long as something is true.

while condition:
    # do something

Be careful! Make sure it eventually stops!

Try it! →`,
    code: `# Count down
countdown = 5
while countdown > 0:
    print("Countdown:", countdown)
    countdown = countdown - 1
print("Blast off! 🚀")

print("---")

# Keep doubling
number = 1
while number < 100:
    print(number)
    number = number * 2`,
    explanation: 'While loops continue until a condition becomes false!',
    difficulty: 'beginner',
    tags: ['loops', 'while'],
    question: {
      text: 'What does a while loop do?',
      options: [
        'Repeats code as long as a condition is true',
        'Runs code exactly 5 times',
        'Stops the program',
        'Creates a variable',
      ],
      correctAnswer: 0,
      explanation: 'A while loop repeats code as long as the condition is true.',
    },
  },
  {
    id: '13',
    title: '13. 🎉 Congratulations on Finishing the Basics!',
    theory: `Congratulations! 🎊

You've completed the basics of Python! You've learned:
✓ Printing text
✓ Math and variables
✓ Strings and input
✓ If statements
✓ Loops (for and while)
✓ Lists
✓ Functions

Great job! 🎉

Ready for more? Continue to the next lessons to learn intermediate concepts like dictionaries, string methods, error handling, and more!

Keep coding! →`,
    code: `# A fun program using what you learned!

def draw_pattern():
    for i in range(5):
        print("*" * (i + 1))

def greet_user(name):
    if len(name) > 5:
        print("Wow,", name, "is a long name!")
    else:
        print("Hi,", name + "!")

# Try it out!
draw_pattern()
print("---")
greet_user("Sam")
greet_user("Alexander")`,
    explanation: "You've mastered the basics! Ready for intermediate Python? 🐍",
    difficulty: 'beginner',
    tags: ['celebration', 'review'],
    question: {
      text: 'What have you learned in the basics section?',
      options: [
        'Variables, loops, functions, and conditionals',
        'Only how to print',
        'Advanced Python concepts',
        'Nothing yet',
      ],
      correctAnswer: 0,
      explanation: 'You\'ve learned the fundamentals: variables, loops, functions, conditionals, and more!',
    },
  },
  {
    id: '14',
    title: '14. Elif - Multiple Choices',
    theory: `Sometimes you need more than two choices!

Use elif (short for "else if") to check multiple conditions:

if condition1:
    do this
elif condition2:
    do that
else:
    do something else

Only ONE block runs - the first one that's true!

Try changing the score! →`,
    code: `score = 85

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Great job!")
elif score >= 70:
    print("Grade: C - Good work!")
elif score >= 60:
    print("Grade: D - Keep practicing!")
else:
    print("Grade: F - Study more!")

print("---")

# Another example
weather = "cloudy"

if weather == "sunny":
    print("Wear sunglasses!")
elif weather == "rainy":
    print("Bring an umbrella!")
elif weather == "cloudy":
    print("Might rain later...")
else:
    print("Check the weather!")`,
    explanation: 'Elif lets you handle multiple conditions in order!',
    difficulty: 'intermediate',
    tags: ['conditionals', 'elif'],
    question: {
      text: 'What does elif stand for?',
      options: ['else if', 'else in function', 'end if', 'else input'],
      correctAnswer: 0,
      explanation: 'elif is short for "else if" and is used for multiple conditions.',
    },
  },
  {
    id: '15',
    title: '15. Dictionaries',
    theory: `Dictionaries store pairs: a key and a value.

Think of it like a phone book:
- Key = name
- Value = phone number

Create with curly braces: {}

Access values: dict["key"]
Add items: dict["new_key"] = value

Dictionaries are super useful! →`,
    code: `# Create a dictionary
student = {
    "name": "Alex",
    "age": 12,
    "grade": 7,
    "favorite_subject": "Math"
}

print("Student info:", student)
print("Name:", student["name"])
print("Age:", student["age"])

# Add a new key-value pair
student["school"] = "Python Academy"
print("Updated:", student)

# Another example
scores = {
    "math": 95,
    "science": 88,
    "english": 92
}

print("Math score:", scores["math"])
print("All scores:", scores)`,
    explanation: 'Dictionaries organize data with keys and values!',
    difficulty: 'intermediate',
    tags: ['dictionaries', 'data-structures'],
    question: {
      text: 'What is a dictionary in Python?',
      options: [
        'A collection of key-value pairs',
        'A list of words',
        'A type of loop',
        'A function',
      ],
      correctAnswer: 0,
      explanation: 'A dictionary stores data as key-value pairs, like {"name": "Alex", "age": 12}.',
    },
  },
  {
    id: '16',
    title: '16. String Methods',
    theory: `Strings have built-in methods (special functions)!

Common methods:
• .upper() - makes all letters UPPERCASE
• .lower() - makes all letters lowercase
• .strip() - removes spaces from start/end
• .split() - breaks string into a list
• .replace() - replaces text

Try them out! →`,
    code: `text = "  Hello, Python!  "

# Make uppercase
print("Uppercase:", text.upper())

# Make lowercase
print("Lowercase:", text.lower())

# Remove extra spaces
print("Stripped:", text.strip())

# Split into words
sentence = "Python is awesome"
words = sentence.split()
print("Words:", words)

# Replace text
message = "I love coding!"
new_message = message.replace("love", "really love")
print("New message:", new_message)

# Chain methods together
result = "  HELLO WORLD  ".strip().lower()
print("Chained:", result)`,
    explanation: 'String methods help you manipulate text easily!',
    difficulty: 'intermediate',
    tags: ['strings', 'methods'],
    question: {
      text: 'What does .upper() do to a string?',
      options: [
        'Converts to uppercase',
        'Converts to lowercase',
        'Reverses the string',
        'Splits the string',
      ],
      correctAnswer: 0,
      explanation: 'The .upper() method converts all characters in a string to uppercase.',
    },
  },
  {
    id: '17',
    title: '17. Return Values',
    theory: `Functions can give you answers back!

Use return to send a value back:

def add(a, b):
    return a + b

result = add(5, 3)  # result is now 8

The function calculates something and gives you the answer!

Try it! →`,
    code: `def add(a, b):
    return a + b

def multiply(x, y):
    return x * y

def get_greeting(name):
    return "Hello, " + name + "!"

# Use the return values
sum_result = add(10, 5)
print("10 + 5 =", sum_result)

product = multiply(4, 7)
print("4 * 7 =", product)

greeting = get_greeting("Sam")
print(greeting)

# You can use return values directly
print("3 + 2 =", add(3, 2))
print("Greeting:", get_greeting("Alex"))`,
    explanation: 'Return values let functions give you answers!',
    difficulty: 'intermediate',
    tags: ['functions', 'return'],
    question: {
      text: 'What does the return statement do in a function?',
      options: [
        'Sends a value back from the function',
        'Stops the program',
        'Prints a value',
        'Creates a variable',
      ],
      correctAnswer: 0,
      explanation: 'return sends a value back from the function so it can be used elsewhere.',
    },
  },
  {
    id: '18',
    title: '18. Nested Loops',
    theory: `You can put loops inside other loops!

This is called "nested loops".

The inner loop runs completely for each outer loop step.

Useful for:
• Making patterns
• Working with grids
• Comparing items

Watch the pattern! →`,
    code: `# Make a square pattern
for i in range(3):
    for j in range(3):
        print("*", end=" ")
    print()  # New line after each row

print("---")

# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        result = i * j
        print(f"{i} x {j} = {result}", end="  ")
    print()  # New line

print("---")

# Nested list processing
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in matrix:
    for number in row:
        print(number, end=" ")
    print()`,
    explanation: 'Nested loops let you work with complex patterns!',
    difficulty: 'intermediate',
    tags: ['loops', 'nested'],
    question: {
      text: 'What is a nested loop?',
      options: [
        'A loop inside another loop',
        'A loop that runs forever',
        'A type of function',
        'A variable',
      ],
      correctAnswer: 0,
      explanation: 'A nested loop is a loop inside another loop, useful for working with grids and patterns.',
    },
  },
  {
    id: '19',
    title: '19. More List Methods',
    theory: `Lists have many useful methods!

• .append() - add to end
• .insert() - add at specific position
• .remove() - remove an item
• .pop() - remove and return last item
• .sort() - sort the list
• .reverse() - reverse the list
• .count() - count occurrences

Try them all! →`,
    code: `# Start with a list
fruits = ["apple", "banana", "orange"]

# Add to end
fruits.append("grape")
print("After append:", fruits)

# Insert at position
fruits.insert(1, "mango")
print("After insert:", fruits)

# Remove an item
fruits.remove("banana")
print("After remove:", fruits)

# Sort the list
fruits.sort()
print("After sort:", fruits)

# Count items
print("Number of apples:", fruits.count("apple"))

# Reverse the list
fruits.reverse()
print("After reverse:", fruits)

# Pop (remove and get last item)
last_fruit = fruits.pop()
print("Popped:", last_fruit)
print("Remaining:", fruits)`,
    explanation: 'List methods make it easy to modify and organize lists!',
    difficulty: 'intermediate',
    tags: ['lists', 'methods'],
    question: {
      text: 'What method removes an item from a list?',
      options: ['remove()', 'delete()', 'pop()', 'Both remove() and pop()'],
      correctAnswer: 3,
      explanation: 'Both remove(item) and pop(index) can remove items from a list.',
    },
  },
  {
    id: '20',
    title: '20. Try and Except',
    theory: `Sometimes code can cause errors. That's okay!

Use try/except to handle errors gracefully:

try:
    # code that might fail
except:
    # what to do if it fails

This prevents your program from crashing!

Try it! →`,
    code: `# Try to divide by zero (normally causes error)
try:
    result = 10 / 0
    print("Result:", result)
except:
    print("Oops! Can't divide by zero!")

print("---")

# Try to access a list item that doesn't exist
numbers = [1, 2, 3]
try:
    print("Item:", numbers[10])
except:
    print("That index doesn't exist!")

print("---")

# Try to convert text to number
try:
    number = int("hello")
    print("Number:", number)
except:
    print("Can't convert 'hello' to a number!")

print("Program continues running!")`,
    explanation: 'Try/except helps your programs handle errors gracefully!',
    difficulty: 'intermediate',
    tags: ['error-handling', 'try-except'],
    question: {
      text: 'What does try/except do?',
      options: [
        'Handles errors gracefully',
        'Creates a loop',
        'Defines a function',
        'Imports a module',
      ],
      correctAnswer: 0,
      explanation: 'try/except catches errors and prevents the program from crashing.',
    },
  },
  {
    id: '21',
    title: '21. Tuples',
    theory: `Tuples are like lists, but they can't be changed!

Create with parentheses: ()

Once created, you can't:
• Add items
• Remove items
• Change items

But you can:
• Access items: tuple[0]
• Loop through them
• Use them as keys in dictionaries

Tuples are "immutable" (unchangeable)! →`,
    code: `# Create a tuple
colors = ("red", "green", "blue")
print("Colors:", colors)
print("First color:", colors[0])

# Tuples can't be changed
# colors.append("yellow")  # This would cause an error!

# But you can loop through them
for color in colors:
    print("Color:", color)

# Tuples are useful for coordinates
point = (3, 5)
print("Point:", point)
print("X coordinate:", point[0])
print("Y coordinate:", point[1])

# Multiple assignment with tuples
name, age, city = ("Sam", 12, "Python City")
print(f"{name} is {age} years old and lives in {city}")`,
    explanation: 'Tuples are fixed lists - perfect for data that should not change!',
    difficulty: 'intermediate',
    tags: ['tuples', 'data-structures'],
    question: {
      text: 'What is a tuple?',
      options: [
        'An immutable (unchangeable) list',
        'A type of dictionary',
        'A function',
        'A loop',
      ],
      correctAnswer: 0,
      explanation: 'A tuple is like a list but cannot be modified after creation.',
    },
  },
  {
    id: '22',
    title: '22. Dictionary Methods',
    theory: `Dictionaries have useful methods too!

• .keys() - get all keys
• .values() - get all values
• .items() - get key-value pairs
• .get() - safely get a value
• .update() - add multiple items
• .pop() - remove and return an item

These make dictionaries even more powerful! →`,
    code: `# Create a dictionary
student = {
    "name": "Alex",
    "age": 12,
    "grade": 7,
    "city": "Python Town"
}

# Get all keys
print("Keys:", list(student.keys()))

# Get all values
print("Values:", list(student.values()))

# Get key-value pairs
print("Items:", list(student.items()))

# Safe get (won't error if key doesn't exist)
print("Name:", student.get("name", "Unknown"))
print("Phone:", student.get("phone", "Not provided"))

# Update with multiple items
student.update({"school": "Python Academy", "teacher": "Ms. Code"})
print("Updated:", student)

# Pop (remove and get)
age = student.pop("age")
print("Removed age:", age)
print("After pop:", student)`,
    explanation: 'Dictionary methods help you work with key-value data!',
    difficulty: 'intermediate',
    tags: ['dictionaries', 'methods'],
    question: {
      text: 'What does .keys() return for a dictionary?',
      options: ['All the keys', 'All the values', 'The length', 'An error'],
      correctAnswer: 0,
      explanation: 'The .keys() method returns all the keys in a dictionary.',
    },
  },
  {
    id: '23',
    title: '23. List Comprehensions',
    theory: `List comprehensions are a cool way to create lists!

Instead of:
numbers = []
for i in range(5):
    numbers.append(i * 2)

You can write:
numbers = [i * 2 for i in range(5)]

It's shorter and faster!

Try it! →`,
    code: `# Create a list of squares
squares = [x * x for x in range(5)]
print("Squares:", squares)

# Create a list of even numbers
evens = [x for x in range(10) if x % 2 == 0]
print("Even numbers:", evens)

# Transform strings
words = ["hello", "world", "python"]
uppercase_words = [word.upper() for word in words]
print("Uppercase:", uppercase_words)

# Create a list from another list
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print("Doubled:", doubled)

# With conditions
ages = [10, 12, 15, 8, 20]
teens = [age for age in ages if 13 <= age <= 19]
print("Teens:", teens)`,
    explanation: 'List comprehensions are a powerful and elegant way to create lists!',
    difficulty: 'intermediate',
    tags: ['lists', 'comprehensions'],
    question: {
      text: 'What is a list comprehension?',
      options: [
        'A concise way to create lists',
        'A type of loop',
        'A function',
        'A dictionary',
      ],
      correctAnswer: 0,
      explanation: 'List comprehensions provide a compact way to create lists: [x*2 for x in range(5)].',
    },
  },
  {
    id: '24',
    title: '24. Classes and Objects',
    theory: `Classes are blueprints for creating objects!

Think of a class like a cookie cutter, and objects are the cookies.

class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print(self.name + " says woof!")

my_dog = Dog("Buddy")
my_dog.bark()

Classes help organize code and create reusable templates! →`,
    code: `# Define a class
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        print(self.name + " says woof!")
    
    def get_info(self):
        return f"{self.name} is {self.age} years old"

# Create objects (instances)
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

# Use the objects
dog1.bark()
dog2.bark()
print(dog1.get_info())
print(dog2.get_info())

# Another example
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
    
    def study(self):
        print(self.name + " is studying!")
    
    def get_grade(self):
        return self.grade

student = Student("Alex", 7)
student.study()
print("Grade:", student.get_grade())`,
    explanation: 'Classes let you create your own data types with methods!',
    difficulty: 'advanced',
    tags: ['classes', 'oop', 'objects'],
    question: {
      text: 'What is a class in Python?',
      options: [
        'A blueprint for creating objects',
        'A type of function',
        'A variable',
        'A loop',
      ],
      correctAnswer: 0,
      explanation: 'A class is a template/blueprint for creating objects with attributes and methods.',
    },
  },
  {
    id: '25',
    title: '25. Inheritance',
    theory: `Inheritance lets one class use another class's features!

The child class "inherits" from the parent class.

class Animal:
    def speak(self):
        print("Some sound")

class Dog(Animal):
    def speak(self):
        print("Woof!")

The child can override parent methods or add new ones!

Try it! →`,
    code: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print("Some sound")
    
    def eat(self):
        print(self.name + " is eating")

# Child class inherits from Animal
class Dog(Animal):
    def speak(self):
        print(self.name + " says woof!")
    
    def fetch(self):
        print(self.name + " is fetching!")

# Another child class
class Cat(Animal):
    def speak(self):
        print(self.name + " says meow!")
    
    def climb(self):
        print(self.name + " is climbing!")

# Create objects
dog = Dog("Buddy")
cat = Cat("Whiskers")

# They inherit eat() from Animal
dog.eat()
cat.eat()

# But have their own speak() methods
dog.speak()
cat.speak()

# And their own unique methods
dog.fetch()
cat.climb()`,
    explanation: 'Inheritance lets you reuse code and create related classes!',
    difficulty: 'advanced',
    tags: ['inheritance', 'oop'],
    question: {
      text: 'What is inheritance?',
      options: [
        'A class using features from another class',
        'A type of loop',
        'A function',
        'A variable',
      ],
      correctAnswer: 0,
      explanation: 'Inheritance allows a child class to use methods and attributes from a parent class.',
    },
  },
  {
    id: '26',
    title: '26. Modules and Imports',
    theory: `Modules let you use code from other files!

Python has built-in modules (like math, random, datetime).

Import them with:
import math
from random import randint

You can also create your own modules!

Try importing and using modules! →`,
    code: `# Import the entire math module
import math

print("Pi =", math.pi)
print("Square root of 16 =", math.sqrt(16))
print("2 to the power of 3 =", math.pow(2, 3))

# Import specific functions
from random import randint, choice

# Generate random numbers
random_num = randint(1, 10)
print("Random number:", random_num)

# Choose random item from list
fruits = ["apple", "banana", "orange"]
random_fruit = choice(fruits)
print("Random fruit:", random_fruit)

# Import with alias
import datetime as dt
today = dt.date.today()
print("Today's date:", today)

# Import multiple items
from math import pi, sqrt, pow
print("Pi again:", pi)
print("Square root of 25:", sqrt(25))`,
    explanation: 'Modules let you use powerful built-in functions and organize your code!',
    difficulty: 'advanced',
    tags: ['modules', 'imports'],
    question: {
      text: 'What does import math do?',
      options: [
        'Imports the math module',
        'Creates a math variable',
        'Prints math',
        'Runs a math function',
      ],
      correctAnswer: 0,
      explanation: 'import loads a module so you can use its functions, like math.sqrt().',
    },
  },
  {
    id: '27',
    title: '27. Lambda Functions',
    theory: `Lambda functions are small, anonymous functions!

They're shortcuts for simple functions:

lambda x: x * 2

This is the same as:
def double(x):
    return x * 2

Lambdas are great for quick operations!

Try them! →`,
    code: `# Regular function
def double(x):
    return x * 2

# Lambda function (same thing!)
double_lambda = lambda x: x * 2

print("Regular:", double(5))
print("Lambda:", double_lambda(5))

# Lambda with multiple parameters
add = lambda a, b: a + b
print("Add:", add(3, 4))

# Lambda with no parameters
greet = lambda: "Hello!"
print(greet())

# Using lambda with map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x * x, numbers))
print("Squared:", squared)

# Using lambda with filter
evens = list(filter(lambda x: x % 2 == 0, numbers))
print("Evens:", evens)

# Lambda in a function
def apply_operation(x, operation):
    return operation(x)

result = apply_operation(10, lambda n: n * 3)
print("Result:", result)`,
    explanation: 'Lambda functions are concise ways to write simple functions!',
    difficulty: 'advanced',
    tags: ['lambda', 'functions'],
    question: {
      text: 'What is a lambda function?',
      options: [
        'A small anonymous function',
        'A type of loop',
        'A class',
        'A module',
      ],
      correctAnswer: 0,
      explanation: 'A lambda is a small, unnamed function: lambda x: x * 2',
    },
  },
  {
    id: '28',
    title: '28. Map, Filter, and Reduce',
    theory: `These are powerful functions for working with collections!

• map() - applies a function to every item
• filter() - keeps only items that match a condition
• reduce() - combines all items into one value

They make code cleaner and more functional!

Try them! →`,
    code: `from functools import reduce

# Map - transform every item
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x * x, numbers))
print("Squared:", squared)

# Map with a regular function
def double(x):
    return x * 2

doubled = list(map(double, numbers))
print("Doubled:", doubled)

# Filter - keep only items that match
evens = list(filter(lambda x: x % 2 == 0, numbers))
print("Evens:", evens)

# Filter with condition
big_numbers = list(filter(lambda x: x > 3, numbers))
print("Big numbers:", big_numbers)

# Reduce - combine all items
sum_all = reduce(lambda a, b: a + b, numbers)
print("Sum:", sum_all)

# Reduce for multiplication
product = reduce(lambda a, b: a * b, [1, 2, 3, 4])
print("Product:", product)

# Find maximum with reduce
max_num = reduce(lambda a, b: a if a > b else b, numbers)
print("Max:", max_num)`,
    explanation: 'Map, filter, and reduce are powerful tools for processing collections!',
    difficulty: 'advanced',
    tags: ['map', 'filter', 'reduce', 'functional'],
    question: {
      text: 'What does map() do?',
      options: [
        'Applies a function to every item',
        'Filters items',
        'Combines items',
        'Sorts items',
      ],
      correctAnswer: 0,
      explanation: 'map() applies a function to every item in a sequence and returns the results.',
    },
  },
  {
    id: '29',
    title: '29. Sets',
    theory: `Sets are collections of unique items!

Create with curly braces: {1, 2, 3}

Sets automatically remove duplicates!

Useful operations:
• union (|) - combine sets
• intersection (&) - common items
• difference (-) - items in first but not second

Sets are great for finding unique items! →`,
    code: `# Create sets
fruits = {"apple", "banana", "orange", "apple"}
print("Fruits (duplicates removed):", fruits)

# Add items
fruits.add("grape")
print("After adding grape:", fruits)

# Remove items
fruits.remove("banana")
print("After removing banana:", fruits)

# Set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union - all items from both sets
union = set1 | set2
print("Union:", union)

# Intersection - common items
intersection = set1 & set2
print("Intersection:", intersection)

# Difference - items in set1 but not set2
difference = set1 - set2
print("Difference:", difference)

# Check membership
print("Is 3 in set1?", 3 in set1)
print("Is 9 in set1?", 9 in set1)

# Convert list to set (removes duplicates)
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = set(numbers)
print("Unique numbers:", unique)`,
    explanation: 'Sets are perfect for working with unique collections!',
    difficulty: 'advanced',
    tags: ['sets', 'data-structures'],
    question: {
      text: 'What is a set?',
      options: [
        'A collection of unique items',
        'A type of list',
        'A function',
        'A variable',
      ],
      correctAnswer: 0,
      explanation: 'A set stores only unique items and automatically removes duplicates.',
    },
  },
  {
    id: '30',
    title: '30. List Slicing',
    theory: `Slicing lets you get parts of a list!

Syntax: list[start:end:step]

• [:] - get all items
• [2:5] - items from index 2 to 4
• [:3] - first 3 items
• [3:] - from index 3 to end
• [::2] - every 2nd item
• [::-1] - reverse the list!

Slicing is super powerful! →`,
    code: `numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Get all items
print("All:", numbers[:])

# Get first 3 items
print("First 3:", numbers[:3])

# Get last 3 items
print("Last 3:", numbers[-3:])

# Get items from index 2 to 5
print("Slice [2:6]:", numbers[2:6])

# Get every 2nd item
print("Every 2nd:", numbers[::2])

# Get every 3rd item
print("Every 3rd:", numbers[::3])

# Reverse the list
print("Reversed:", numbers[::-1])

# Get items in reverse order, skipping one
print("Reverse skip:", numbers[::-2])

# Modify a slice
numbers[2:5] = [10, 20, 30]
print("After modification:", numbers)

# Strings can be sliced too!
text = "Hello, Python!"
print("First 5 chars:", text[:5])
print("Last 6 chars:", text[-6:])
print("Reversed:", text[::-1])`,
    explanation: 'Slicing gives you powerful ways to extract and manipulate parts of sequences!',
    difficulty: 'advanced',
    tags: ['slicing', 'lists', 'strings'],
    question: {
      text: 'What does [::-1] do to a list?',
      options: ['Reverses the list', 'Sorts the list', 'Removes items', 'Adds items'],
      correctAnswer: 0,
      explanation: 'The slice [::-1] reverses a list by stepping backwards.',
    },
  },
  {
    id: '31',
    title: '31. Default Parameters',
    theory: `Functions can have default values!

If you don't provide a value, it uses the default:

def greet(name, greeting="Hello"):
    print(greeting, name)

greet("Alex")  # Uses default "Hello"
greet("Sam", "Hi")  # Uses "Hi"

Default parameters make functions flexible! →`,
    code: `# Function with default parameter
def greet(name, greeting="Hello"):
    print(greeting + ",", name + "!")

greet("Alex")  # Uses default greeting
greet("Sam", "Hi")  # Uses custom greeting
greet("Maya", "Good morning")

# Multiple default parameters
def create_profile(name, age=10, city="Unknown"):
    print(f"Name: {name}, Age: {age}, City: {city}")

create_profile("Alex")
create_profile("Sam", 12)
create_profile("Maya", 14, "Python City")

# Default with required parameters
def calculate_total(price, tax_rate=0.1, discount=0):
    subtotal = price - (price * discount)
    total = subtotal + (subtotal * tax_rate)
    return total

print("Total 1:", calculate_total(100))
print("Total 2:", calculate_total(100, 0.15))
print("Total 3:", calculate_total(100, 0.1, 0.2))

# Default can be any type
def add_to_list(item, my_list=None):
    if my_list is None:
        my_list = []
    my_list.append(item)
    return my_list

print("List 1:", add_to_list(1))
print("List 2:", add_to_list(2))`,
    explanation: 'Default parameters make functions more flexible and easier to use!',
    difficulty: 'advanced',
    tags: ['functions', 'parameters', 'defaults'],
    question: {
      text: 'What are default parameters?',
      options: [
        'Parameters with pre-set values',
        'Required parameters',
        'Return values',
        'Variables',
      ],
      correctAnswer: 0,
      explanation: 'Default parameters have pre-set values that are used if no value is provided.',
    },
  },
  {
    id: '32',
    title: '32. *args and **kwargs',
    theory: `*args and **kwargs let functions accept any number of arguments!

• *args - collects extra positional arguments into a tuple
• **kwargs - collects extra keyword arguments into a dictionary

def my_function(*args, **kwargs):
    # args is a tuple
    # kwargs is a dictionary

This makes functions super flexible! →`,
    code: `# *args - accepts any number of positional arguments
def add_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print("Sum 1:", add_all(1, 2, 3))
print("Sum 2:", add_all(5, 10, 15, 20))
print("Sum 3:", add_all(100))

# **kwargs - accepts any number of keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alex", age=12, city="Python Town")
print_info(animal="Dog", sound="Woof", color="Brown")

# Combine both
def flexible_function(*args, **kwargs):
    print("Positional args:", args)
    print("Keyword args:", kwargs)

flexible_function(1, 2, 3, name="Alex", age=12)

# Real-world example
def create_student(name, *scores, **info):
    print(f"Student: {name}")
    print(f"Scores: {scores}")
    print(f"Info: {info}")

create_student("Alex", 95, 88, 92, grade=7, teacher="Ms. Code")`,
    explanation: '*args and **kwargs let you create functions that accept flexible arguments!',
    difficulty: 'advanced',
    tags: ['functions', 'args', 'kwargs'],
    question: {
      text: 'What does *args do in a function?',
      options: [
        'Accepts any number of positional arguments',
        'Multiplies arguments',
        'Creates an error',
        'Imports a module',
      ],
      correctAnswer: 0,
      explanation: '*args collects extra positional arguments into a tuple.',
    },
  },
  {
    id: '33',
    title: '33. File Handling',
    theory: `Python can read and write files!

Open files with:
file = open("filename.txt", "r")  # read
file = open("filename.txt", "w")  # write

Always close files when done!

Or use "with" - it closes automatically!

Try reading and writing! →`,
    code: `# Write to a file
with open("example.txt", "w") as file:
    file.write("Hello, Python!\\n")
    file.write("This is line 2\\n")
    file.write("Line 3")

print("File written!")

# Read from a file
with open("example.txt", "r") as file:
    content = file.read()
    print("File content:")
    print(content)

# Read line by line
print("\\nReading line by line:")
with open("example.txt", "r") as file:
    for line in file:
        print("Line:", line.strip())

# Read all lines into a list
with open("example.txt", "r") as file:
    lines = file.readlines()
    print("\\nAll lines:", lines)

# Append to a file
with open("example.txt", "a") as file:
    file.write("\\nThis is appended!")

# Read again to see the append
with open("example.txt", "r") as file:
    print("\\nAfter append:")
    print(file.read())`,
    explanation: 'File handling lets you save and load data from files!',
    difficulty: 'advanced',
    tags: ['files', 'io'],
    question: {
      text: 'What does open("file.txt", "r") do?',
      options: [
        'Opens a file for reading',
        'Opens a file for writing',
        'Creates a new file',
        'Deletes a file',
      ],
      correctAnswer: 0,
      explanation: 'open() with mode "r" opens a file for reading.',
    },
  },
  {
    id: '34',
    title: '34. Generators',
    theory: `Generators create values on-the-fly instead of storing them all!

Use yield instead of return:

def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

Generators are memory-efficient for large sequences!

Try them! →`,
    code: `# Generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

# Use the generator
for num in count_up_to(5):
    print(num)

# Generator for squares
def squares(n):
    for i in range(n):
        yield i * i

print("\\nSquares:")
for square in squares(5):
    print(square)

# Generator expression (like list comprehension)
squares_gen = (x * x for x in range(5))
print("\\nGenerator expression:")
for sq in squares_gen:
    print(sq)

# Fibonacci generator
def fibonacci(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

print("\\nFibonacci:")
for fib in fibonacci(8):
    print(fib, end=" ")
print()`,
    explanation: 'Generators are memory-efficient ways to create sequences!',
    difficulty: 'advanced',
    tags: ['generators', 'yield'],
    question: {
      text: 'What is a generator?',
      options: [
        'A function that yields values',
        'A type of loop',
        'A class',
        'A variable',
      ],
      correctAnswer: 0,
      explanation: 'A generator uses yield to produce values one at a time, saving memory.',
    },
  },
  {
    id: '35',
    title: '35. Context Managers (with)',
    theory: `The "with" statement manages resources automatically!

It ensures files are closed, connections are cleaned up, etc.

with open("file.txt") as f:
    content = f.read()
# File automatically closed here!

You can create your own context managers too!

Try it! →`,
    code: `# Using 'with' for file handling (automatic cleanup)
with open("example.txt", "w") as file:
    file.write("Hello from context manager!")

# File is automatically closed after the block

# Reading with context manager
with open("example.txt", "r") as file:
    content = file.read()
    print("Content:", content)

# Multiple files
with open("file1.txt", "w") as f1, open("file2.txt", "w") as f2:
    f1.write("File 1 content")
    f2.write("File 2 content")

# Custom context manager using class
class Timer:
    def __init__(self, name):
        self.name = name
    
    def __enter__(self):
        print(f"Starting {self.name}")
        return self
    
    def __exit__(self, *args):
        print(f"Finished {self.name}")

with Timer("my_task"):
    print("Doing work...")
    print("More work...")

# Files are automatically closed, even if errors occur
try:
    with open("example.txt", "r") as file:
        print("Reading:", file.read())
except FileNotFoundError:
    print("File not found, but still safe!")`,
    explanation: 'Context managers ensure resources are properly cleaned up!',
    difficulty: 'advanced',
    tags: ['context-managers', 'with'],
    question: {
      text: 'What does the "with" statement do?',
      options: [
        'Manages resources automatically',
        'Creates a loop',
        'Defines a function',
        'Imports a module',
      ],
      correctAnswer: 0,
      explanation: 'The "with" statement ensures resources (like files) are properly closed.',
    },
  },
  {
    id: '36',
    title: '36. Specific Exception Handling',
    theory: `You can catch specific types of errors!

try:
    # code
except ValueError:
    # handle value errors
except FileNotFoundError:
    # handle file not found
except Exception:
    # handle any other error

This lets you handle different errors differently!

Try it! →`,
    code: `# Handle specific exceptions
try:
    number = int("not a number")
except ValueError:
    print("That's not a valid number!")

# Multiple exception types
def divide_numbers(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Can't divide by zero!"
    except TypeError:
        return "Please provide numbers!"

print(divide_numbers(10, 2))
print(divide_numbers(10, 0))
print(divide_numbers(10, "two"))

# Handle file errors specifically
try:
    with open("nonexistent.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
except PermissionError:
    print("Permission denied!")
except Exception as e:
    print(f"Other error: {e}")

# Get exception information
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {e}")

# Finally block (always runs)
try:
    print("Trying something...")
    result = 10 / 2
except:
    print("Error occurred!")
finally:
    print("This always runs!")`,
    explanation: 'Specific exception handling lets you handle different errors appropriately!',
    difficulty: 'advanced',
    tags: ['exceptions', 'error-handling'],
    question: {
      text: 'What does except ValueError catch?',
      options: [
        'Value errors specifically',
        'All errors',
        'File errors',
        'No errors',
      ],
      correctAnswer: 0,
      explanation: 'except ValueError catches only ValueError exceptions, not all errors.',
    },
  },
  {
    id: '37',
    title: '37. 🎓 Advanced Python Master!',
    theory: `Congratulations! 🎉

You've mastered advanced Python concepts:
✓ Classes and Objects
✓ Inheritance
✓ Modules and Imports
✓ Lambda Functions
✓ Map, Filter, Reduce
✓ Sets
✓ List Slicing
✓ Default Parameters
✓ *args and **kwargs
✓ File Handling
✓ Generators
✓ Context Managers
✓ Exception Handling

You're now an advanced Python programmer! 🐍

Keep building amazing projects! →`,
    code: `# A comprehensive example using advanced concepts!

class Calculator:
    def __init__(self, name="Calculator"):
        self.name = name
    
    def calculate(self, *args, operation="sum"):
        if operation == "sum":
            return sum(args)
        elif operation == "product":
            from functools import reduce
            return reduce(lambda a, b: a * b, args)
        return 0

calc = Calculator("MyCalc")
print("Sum:", calc.calculate(1, 2, 3, 4, 5))
print("Product:", calc.calculate(2, 3, 4, operation="product"))

# Using generators and comprehensions
def fibonacci_gen(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

fibs = [x for x in fibonacci_gen(10)]
print("Fibonacci:", fibs)

# Set operations
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
print("Union:", set1 | set2)

# Lambda and map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print("Squared:", squared)

print("\\n🎉 You're a Python master! 🎉")`,
    explanation: "You've mastered advanced Python! Keep coding and building! 🚀",
    difficulty: 'advanced',
    tags: ['celebration', 'review', 'advanced'],
    question: {
      text: 'What advanced Python concepts have you learned?',
      options: [
        'Classes, inheritance, generators, and more',
        'Only basic concepts',
        'Nothing yet',
        'Just printing',
      ],
      correctAnswer: 0,
      explanation: 'You\'ve learned advanced concepts like classes, inheritance, generators, and much more!',
    },
  },
  {
    id: '38',
    title: '38. 🎉 Course Complete - Congratulations!',
    theory: `🎊 CONGRATULATIONS! 🎊

You've completed the entire Python Learning Course!

You've mastered:
✓ 37 comprehensive lessons
✓ Python from basics to advanced
✓ All concepts with practice questions

You're now a Python programmer! 🐍✨

Keep coding, keep learning, and build amazing things!

Thank you for learning with us! →`,
    code: `# Final celebration code!
print("🎉 Congratulations! 🎉")
print("You've completed the Python Learning Course!")
print("You're now a Python programmer! 🐍")
print("Keep coding and building amazing things! ✨")`,
    explanation: 'Congratulations on completing the entire Python learning course!',
    difficulty: 'advanced',
    tags: ['celebration', 'completion', 'final'],
    question: {
      text: 'What have you accomplished by completing this course?',
      options: [
        'Learned Python from basics to advanced',
        'Mastered all programming languages',
        'Became a professional developer',
        'Finished a simple tutorial',
      ],
      correctAnswer: 0,
      explanation: 'You\'ve learned Python from basics to advanced concepts! Keep practicing to become even better!',
    },
  },
];

