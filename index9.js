class Counter extends React.Component {
    render() {
        let textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",

        };

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
            );
    }
}

class CounterParent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);

    }

    increase(e){
        console.log(e);
        let currentCount = this.state.count;

        if (e.ctrlKey){
            currentCount += 10;
        } else if (e.shiftKey) {currentCount +=100} else {currentCount++}
        
        this.setState({
            count: currentCount
        });
    }

    render() {

        let backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center",
        };

        let buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px", 
        }


        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase} style={buttonStyle}>+</button>
            </div>
            )

    }
}

let destination = document.querySelector("#root")

ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    destination
    )