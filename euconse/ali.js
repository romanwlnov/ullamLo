// Assume startsWithDatum is defined somewhere in your code or imported
function startsWithDatum(value) {
    // Implementation of startsWithDatum function
    return value.startsWith('datum');
}

// Example usage of the statement
function checkObject(node) {
    return startsWithDatum(node.object);
}

// Example usage:
let node = {
    object: 'datum123'
};

let result = checkObject(node);
console.log(result); // Output: true (if 'datum123' starts with 'datum')
