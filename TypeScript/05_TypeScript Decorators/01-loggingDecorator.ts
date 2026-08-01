function log(target: any, methodName: string, descriptor: PropertyDescriptor)  {
    const original = descriptor.value

    descriptor.value = function(...args: string[]) {
        const result = original.apply(this, args)
        
        console.log(`Function '${methodName}' called with arguments: ${args.join(', ')}`);
    
        return result;
    
    };
    
    return descriptor;
}

class Person {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @log
    static getFullName(firstName: string, lastName: string) {
        return `${firstName} ${lastName}`
    }
}

let person = new Person('John', 'Does');
Person.getFullName(person.firstName, person.lastName)
Person.getFullName('Benny', 'Tres');
