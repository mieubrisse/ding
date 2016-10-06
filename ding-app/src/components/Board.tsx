import * as React from 'react';

export interface BoardProps {
    title: string;
    increment: number;
}

export interface BoardState {
    clicks: number;
}

export class Board extends React.Component<BoardProps, BoardState> {

    constructor(props: BoardProps) {
        super(props);
        this.state = { clicks: 0 };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let newClicks = this.state.clicks + this.props.increment;
        this.setState({ clicks: newClicks })
    }

    render() {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>Clicks: { this.state.clicks }</p>
                <button onClick={ this.onClick }>Click Meh</button>
            </div>
        )
    }
}

export default Board;
