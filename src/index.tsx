import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";
import {Welcome} from "./components/Welcome";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React"/>,
    document.getElementById("example")
);

ReactDOM.render(<Welcome compiler="hahsdasd" framework='12313'/> , document.getElementById("hello"))