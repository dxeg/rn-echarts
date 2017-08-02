# rn-echarts
Baidu echarts for React Native

## Installation

```bash
$ npm install --save rn-echarts
or
$ yarn add rn-echarts
```

## Usage
```js
import RNECharts from 'rn-echarts';
class ChartTest extends Component{
    render(){
        return (
            <RNECharts
                ref={charts => this.charts = charts} 
                option={this.state.option}
            />
        )
    }
}
```

## License

[MIT](LICENSE)