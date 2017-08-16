# rn-bd-echarts
Baidu echarts for React Native

## Installation

```bash
$ npm install --save rn-bd-echarts
or
$ yarn add rn-bd-echarts
```

## Automatic Install

`react-native link rn-bd-echarts`

## Manual Install

### `Android`

1. Add the following lines to `android/settings.gradle`:
    ```gradle
    include ':rn-bd-echarts'
    project(':rn-bd-echarts').projectDir = new File(settingsDir, '../node_modules/rn-bd-echarts/android')
    ```

2. Add the compile line to the dependencies in `android/app/build.gradle`:
    ```gradle
    dependencies {
        ...
        compile project(':rn-bd-echarts')
    }
    ```

3. Add the import and link the package in `MainApplication.java`:
    ```java
    import com.rnbdecharts.RnBdEchartsPackage; // <-- add this import

    public class MainApplication extends Application implements ReactApplication {
        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RnBdEchartsPackage() // <-- add this line
            );
        }
    }
    ```

## Usage
```js
/**
    The formatter does not support function in the configuration items
    support `formatter: '{b}: {c}'`
    not support `formatter: function(){}`
**/
import RNECharts from 'rn-bd-echarts';
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