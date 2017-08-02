'use strict';
import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';

import RNEcharts from 'rn-echarts'

const option = () => {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '广告',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '广告',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '广告',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data: [
                        [{type: 'min'}, {type: 'max'}]
                    ]
                }
            },
            {
                name: '百度',
                type: 'bar',
                barWidth: 5,
                stack: '搜索引擎',
                data: [620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name: '谷歌',
                type: 'bar',
                stack: '搜索引擎',
                data: [120, 132, 101, 134, 290, 230, 220]
            },
            {
                name: '必应',
                type: 'bar',
                stack: '搜索引擎',
                data: [60, 72, 71, 74, 190, 130, 110]
            },
            {
                name: '其他',
                type: 'bar',
                stack: '搜索引擎',
                data: [Math.random() * 200, Math.random() * 200, Math.random() * 200, Math.random() * 200, Math.random() * 200, Math.random() * 200, Math.random() * 100]
            }
        ]
    }
};

export default class ChartTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: option()
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <RNEcharts ref={charts => this.charts = charts} option={this.state.option} style={{flex: 1}}/>
                <Button onPress={() => {
                            this.setState({
                                option: option()
                            })
                        }}
                        title="更新数据"
                />
                <Button onPress={() => {
                            this.charts.on('click', (eventData) => {
                                Alert.alert('onClick:' + JSON.stringify(eventData));
                            });
                            Alert.alert('bind click');
                        }}
                        title="绑定Click事件"
                />

                <Button onPress={() => {
                            this.charts.off('click');
                        }}
                        title="删除Click事件"
                />

                <Button onPress={() => {
                    this.charts.on('legendselectchanged', (eventData) => {
                        Alert.alert('onLegendselectchanged:' + JSON.stringify(eventData));
                    });
                }}
                        title="绑定legendselectchanged事件"
                />

                <Button onPress={() => {
                    this.charts.off('legendselectchanged');
                }}
                        title="删除legendselectchanged事件"
                />
            </View>

        );
    }
}
