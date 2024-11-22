// Level 3
try {
    JSON.parse('invalid json');
} catch (error) {
    console.log('Parsing error:', error.message);
} finally {
    console.log('Cleanup');
}

// Output:
// "Parsing error: Unexpected token i in JSON at position 0"
// "Cleanup"

// Level 4
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

try {
    throw new ValidationError('Invalid data');
} catch (e) {
    console.log(e.name + ':', e.message);
}

// Output:
// "ValidationError: Invalid data"