function customTypeGuard(parameter: unknown): parameter is string[]{
    return (
        Array.isArray(parameter) 
        && parameter.length > 0 
        && parameter.every((el) => typeof el ==="string")
    );
}

console.log(customTypeGuard({}));
console.log(customTypeGuard({ test: 'one' }));
console.log(customTypeGuard(['a', 'b', 'c']));
