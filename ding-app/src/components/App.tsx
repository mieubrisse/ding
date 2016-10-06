import * as React from 'react';
import { Board } from './Board.tsx';

export class App extends React.Component<{}, {}> {
    render () {
        return (
            <div>
                <Board title="Thing" increment={1} />
                <Board title="Dork" increment={2} />
            </div>
        )
    }
}
