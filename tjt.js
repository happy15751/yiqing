// 初始化echarts实例
var myChart1= echarts.init(document.getElementById('bar_ten'));
option = {
    color: ['#aa0000'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '8%',
        bottom: '20%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['美国', '巴西', '印度', '南非', '墨西哥', '俄罗斯', '哥伦比亚','秘鲁','阿根廷','伊朗'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {  
                interval:0,
                rotate:-40 , //倾斜的程度
                textStyle:{
                    fontSize:'8'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '新增确诊',
            type: 'bar',
            barWidth: '30%',
            data: [65594, 41857, 29429, 10496, 7051, 6240, 3832,3744,3645,2521],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#aa0000'},
                        {offset: 0.5, color: '#aa0000'},
                        {offset: 1, color: '#ffffff'}
                    ]
                )
            },
            
        },
            
    ]
};
myChart1.setOption(option);