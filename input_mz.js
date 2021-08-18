var myChart = echarts.init(document.getElementById('input_mz'));
option = {
    // title: {
    //     text: '堆叠区域图'
    // },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['境外输入新增确诊病例']
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
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
            boundaryGap: false,
            data: ['05.19', '05.20', '05.21', '05.22', '05.23', '05.24', '05.25','05.26','05.27','05.28','05.29','05.30','05.31','06.01','06.02','06.03','06.04','06.05','06.06','06.07','06.08','06.09','06.10','06.11','06.12','06.13','06.14','06.15','06.16','06.17','06.18','06.19']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [  
        {
            name: '境外输入新增确诊病例',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [3,1,1,2,0,2,11,7,1,2,0,4,2,16,5,1,1,5,3,5,4,3,3,11,10,8,11,4,4,4,1,7,9]
        }
    ]
};

myChart.setOption(option);