import React from "module";
import { Counter, RootState, increment, decrement } from "core";
import { connect } from "react-redux";

interface Props {
    counter: Counter;
    decrement: (qty?: number) => void;
    increment: (qty?: number) => void;
}

const AppModel = (props: Props) => {
    const increment = () => props.increment();
    const decrement = () => props.decrement();

    return (
    <div>
        <h1>Counter is: {props.counter.count}</h1>
        <button onClick={increment}>Click to Increment</button>
        <button onClick={decrement}>Click to Decrement</button>
      </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    counter: state.counter,
});

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModel);
