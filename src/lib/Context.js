class Context {
    constructor(value) {
        this.value = value;
    }

    Provider = ({ value, children }) => {
        this.value = value;
        return children;
    };

    Consumer = ({ children }) => children(this.value);
}

function createContext(value) {
    const context = new Context(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
}

export default createContext;
