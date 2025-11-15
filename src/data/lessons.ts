import { Lesson } from '@/types/lesson';

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
  },
  {
    id: '13',
    title: '13. 🎉 You Did It!',
    theory: `Congratulations! 🎊

You've learned:
✓ Printing text
✓ Math and variables
✓ Strings and input
✓ If statements
✓ Loops (for and while)
✓ Lists
✓ Functions

Keep practicing and building fun projects!

What will you create? →`,
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
    explanation: "You're now a Python programmer! Keep coding! 🐍",
    difficulty: 'beginner',
    tags: ['celebration', 'review'],
  },
];

