# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js: unhandled promise rejections.  The `bug.js` file contains code that results in an unhandled promise rejection, while `bugSolution.js` shows how to fix the issue.

## Problem

Unhandled promise rejections often lead to silent failures in applications. They can be difficult to debug, making robust error handling crucial.

## Solution

The solution involves using the `.catch()` method to handle any rejected promises, preventing the unhandled rejection warning and providing better error reporting.