import React, { Component } from 'react';
import { WebView, View, Platform } from 'react-native';
import EventEmitter from 'eventemitter3';


export default class RNECharts extends Component {

    constructor(props){
        super(props);
        this.EE = new EventEmitter();
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.option) !== JSON.stringify(this.props.option)) {
            this.clear();
            this.setOption(nextProps.option);
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    _dispatchEChartMethod(methodName, arg){
        this.rnChart.injectJavaScript(`myChart.${methodName}.apply(myChart, ${JSON.stringify(arg)})`);
    }

    _dispatchWindowMethod(methodName, arg){
        this.rnChart.injectJavaScript(`window.${methodName}.apply(null, ${JSON.stringify(arg)})`);
    }

    setOption(...arg){
        this._dispatchEChartMethod('setOption', arg);
    }

    getOption(){
        return null;
    }

    dispatchAction(...arg){
        this._dispatchEChartMethod('dispatchAction', arg);
    }

    showLoading(...arg){
        this._dispatchEChartMethod('showLoading', arg);
    }
    hideLoading(...arg){
        this._dispatchEChartMethod('hideLoading', arg);
    }
    getDataURL(...arg){
        this._dispatchEChartMethod('getDataURL', arg);
    }
    getConnectedDataURL(...arg){
        this._dispatchEChartMethod('getConnectedDataURL', arg);
    }
    clear(...arg){
        this._dispatchEChartMethod('clear', arg);
    }

    _bindEventToWebView(){
        this._dispatchWindowMethod('bindEvents', [this.EE.eventNames()]);
    }

    on(eventName, handler, context){
        this.EE.on(eventName, handler, context);
        this._bindEventToWebView();
    }

    off(eventName, handler){
        this.EE.off(eventName, handler);
        this._bindEventToWebView();
    }

    _onMessage(event){
        const params = JSON.parse(event.nativeEvent.data);
        this.EE.emit(params.type, params);
    }
    _onLoad(){
        this.setOption(this.props.option || {});
    }

    render() {

        let _source = null;

        if(Platform.OS === 'ios'){
            _source = require('./ChartHtml/chart.html');
        } else {
            _source = {uri: 'file:///android_asset/ChartHtml/chart.html'};
        }

        return (
            <View style={this.props.style || {flex:1}}>
                <WebView
                    style={{flex:1}}
                    ref={rnChart => this.rnChart = rnChart}
                    scrollEnabled={false}
                    source={ _source }
                    onMessage={(e) => this._onMessage(e)}
                    dataDetectorTypes="none"
                    onLoad={() => this._onLoad()}
                />
            </View>
        );
    }
}
