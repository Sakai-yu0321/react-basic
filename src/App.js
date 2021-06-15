import './App.css';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // stateを定義
    this.state = {count: 0};
  }

  #メソッド定義
  handleClick() {
    // stateに+1する処理
    this.setState({count:this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h1>
          {/* カウント表示 */}
          {this.state.count}
        </h1>
        {/* buttonがクリックされた場合(onClick)にbundleClickを呼び出し */}
        <button onClick={() =>{this.handleClick()}}>+</button>
        
      </div>
    );
  }
}

export default App;
