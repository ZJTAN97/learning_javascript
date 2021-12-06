type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
    const someOtherFunction = (someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => {
        const a: 'TYPE A' | 'TYPE B' = someArg;
    };
    return someOtherFunction;
}

const result = someFunction('');
const result2 = someFunction(true);