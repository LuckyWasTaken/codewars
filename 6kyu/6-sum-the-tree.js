/*Given a node object representing a binary tree write a function that returns the sum
 of all values, including the root. Absence of a node will be indicated with a null value. */


"use strict";
function sumTheTreeValues(root) {
    return root.value +
          (root.left  ? sumTheTreeValues(root.left) : 0) +
          (root.right ? sumTheTreeValues(root.right) : 0);
}