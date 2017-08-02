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
/**
    The formatter does not support function in the configuration items
    support `formatter: '{b}: {c}'`
    not support `formatter: function(){}`
**/
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

## Methods

- [x] [setOption](http://echarts.baidu.com/api.html#echartsInstance.setOption)
- [x] [getOption](http://echarts.baidu.com/api.html#echartsInstance.getOption)
- [x] [dispatchAction](http://echarts.baidu.com/api.html#echartsInstance.setOption)
- [x] [showLoading](http://echarts.baidu.com/api.html#echartsInstance.showLoading)
- [x] [hideLoading](http://echarts.baidu.com/api.html#echartsInstance.hideLoading)
- [x] [on](http://echarts.baidu.com/api.html#echartsInstance.on)
- [x] [off](http://echarts.baidu.com/api.html#echartsInstance.off)

## Actions
- [x] [Baidu ECharts Actions](http://echarts.baidu.com/api.html#action)

```js
this.charts.dispatchAction({type: 'highlight',seriesIndex: 2});
```

## Events
- [x] [Baidu ECharts Events](http://echarts.baidu.com/api.html#events)

```js
this.charts.on('click', (e) => {console.log(e)});
this.charts.off('click');
```


## License

[MIT](LICENSE)