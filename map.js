// map
var dataList=[
    {name:"南海诸岛",value:0},
    {name: '北京', value: randomValue()},
    {name: '天津', value: randomValue()},
    {name: '上海', value: randomValue()},
    {name: '重庆', value: randomValue()},
    {name: '河北', value: randomValue()},
    {name: '河南', value: randomValue()},
    {name: '云南', value: randomValue()},
    {name: '辽宁', value: randomValue()},
    {name: '黑龙江', value: randomValue()},
    {name: '湖南', value: randomValue()},
    {name: '安徽', value: randomValue()},
    {name: '山东', value: randomValue()},
    {name: '新疆', value: randomValue()},
    {name: '江苏', value: randomValue()},
    {name: '浙江', value: randomValue()},
    {name: '江西', value: randomValue()},
    {name: '湖北', value: randomValue()},
    {name: '广西', value: randomValue()},
    {name: '甘肃', value: randomValue()},
    {name: '山西', value: randomValue()},
    {name: '内蒙古', value: randomValue()},
    {name: '陕西', value: randomValue()},
    {name: '吉林', value: randomValue()},
    {name: '福建', value: randomValue()},
    {name: '贵州', value: randomValue()},
    {name: '广东', value: randomValue()},
    {name: '青海', value: randomValue()},
    {name: '西藏', value: 12},
    {name: '四川', value: randomValue()},
    {name: '宁夏', value: randomValue()},
    {name: '海南', value: randomValue()},
    {name: '台湾', value: randomValue()},
    {name: '香港', value: randomValue()},
    {name: '澳门', value: randomValue()}
]
// 初始化echarts实例
var myChart = echarts.init(document.getElementById('map'));
function randomValue() {
    // Math.round 四舍五入
    // Math.random 随机数
    return Math.round(Math.random()*1000);
}
// 配置项
option = {
    // 提示框组件
    tooltip: {
        formatter:function(params,ticket, callback){
            // console.log(params.name)
            return params.seriesName+'<br />'+params.name+'：'+params.value
        }//数据格式化
    },
    visualMap: {
        pieces: [
            {min: 10000, label: '10000人及以上', color: '#9a0101'},
            {min: 1000, max: 9999, label: '1000-9999人', color: '#c6211b'},
            {min: 500, max: 999, label: '500-999人', color: '#e06f5d'},
            {min: 100, max: 499, label: '100-499人', color: '#feb99a'},
            {min: 1, max: 99, label: '1-99人',color: '#fdd79a'},
        ],
    },
    // 地理坐标系
    geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom:1.23,//视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize:'12',
                color: '#444'
            }
        },
        itemStyle: {
            normal:{
                borderColor: '#999'
            },
            emphasis:{
                areaColor: '#F3B329',//鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series : [
        {
            name: '现有确诊',
            type: 'map',
            geoIndex: 0,
            data:dataList
        }
    ]
};
// 显示图表
myChart.setOption(option);
// myChart.on('click', function (params) {
//     alert(params.name);
// });

//map2////////////////////////////////////////////////////////////////////////////
var dataList=[
    {name:"南海诸岛",value:0},
    {name: '北京', value: randomValue2()},
    {name: '天津', value: randomValue2()},
    {name: '上海', value: randomValue2()},
    {name: '重庆', value: randomValue2()},
    {name: '河北', value: randomValue2()},
    {name: '河南', value: randomValue2()},
    {name: '云南', value: randomValue2()},
    {name: '辽宁', value: 30},
    {name: '黑龙江', value: randomValue2()},
    {name: '湖南', value: randomValue2()},
    {name: '安徽', value: randomValue2()},
    {name: '山东', value: randomValue2()},
    {name: '新疆', value: randomValue2()},
    {name: '江苏', value: randomValue2()},
    {name: '浙江', value: randomValue2()},
    {name: '江西', value: randomValue2()},
    {name: '湖北', value: randomValue2()},
    {name: '广西', value: randomValue2()},
    {name: '甘肃', value: randomValue2()},
    {name: '山西', value: randomValue2()},
    {name: '内蒙古', value: randomValue2()},
    {name: '陕西', value: randomValue2()},
    {name: '吉林', value: randomValue2()},
    {name: '福建', value: randomValue2()},
    {name: '贵州', value: randomValue2()},
    {name: '广东', value: randomValue2()},
    {name: '青海', value: randomValue2()},
    {name: '西藏', value: 12},
    {name: '四川', value: randomValue2()},
    {name: '宁夏', value: randomValue2()},
    {name: '海南', value: randomValue2()},
    {name: '台湾', value: randomValue2()},
    {name: '香港', value: randomValue2()},
    {name: '澳门', value: randomValue2()}
]
// 初始化echarts实例
var myChart = echarts.init(document.getElementById('map2'));
function randomValue2() {
    // Math.round 四舍五入
    // Math.random 随机数
    return Math.round(Math.random()*1000);
}
// 配置项
option = {
    // 提示框组件
    tooltip: {
        formatter:function(params,ticket, callback){
            // console.log(params.name)
            return params.seriesName+'<br />'+params.name+'：'+params.value
        }//数据格式化
    },
    visualMap: {
        pieces: [
            {min: 10000, label: '10000人及以上', color: '#9a0101'},
            {min: 1000, max: 9999, label: '1000-9999人', color: '#c6211b'},
            {min: 500, max: 999, label: '500-999人', color: '#e06f5d'},
            {min: 100, max: 499, label: '100-499人', color: '#feb99a'},
            {min: 1, max: 99, label: '1-99人',color: '#fdd79a'},
        ],
    },
    // 地理坐标系
    geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom:1.23,//视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize:'12',
                color: '#444'
            }
        },
        itemStyle: {
            normal:{
                borderColor: '#999'
            },
            emphasis:{
                areaColor: '#F3B329',//鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series : [
        {
            name: '现有确诊',
            type: 'map',
            geoIndex: 0,
            data:dataList
        }
    ]
};
// 显示图表
myChart.setOption(option);
// myChart.on('click', function (params) {
//     alert(params.name);
// });


//map3/////////////////////////////////////////////////////////////////////////////////////////////////////
var dataList=[
    {name:"南海诸岛",value:0},
    {name: '北京', value: randomValue3()},
    {name: '天津', value: randomValue3()},
    {name: '上海', value: randomValue3()},
    {name: '重庆', value: randomValue3()},
    {name: '河北', value: randomValue3()},
    {name: '河南', value: randomValue3()},
    {name: '云南', value: randomValue3()},
    {name: '辽宁', value: 40},
    {name: '黑龙江', value: randomValue3()},
    {name: '湖南', value: randomValue3()},
    {name: '安徽', value: randomValue3()},
    {name: '山东', value: randomValue3()},
    {name: '新疆', value: randomValue3()},
    {name: '江苏', value: randomValue3()},
    {name: '浙江', value: randomValue3()},
    {name: '江西', value: randomValue3()},
    {name: '湖北', value: randomValue3()},
    {name: '广西', value: randomValue3()},
    {name: '甘肃', value: randomValue3()},
    {name: '山西', value: randomValue3()},
    {name: '内蒙古', value: randomValue3()},
    {name: '陕西', value: randomValue3()},
    {name: '吉林', value: randomValue3()},
    {name: '福建', value: randomValue3()},
    {name: '贵州', value: randomValue3()},
    {name: '广东', value: randomValue3()},
    {name: '青海', value: randomValue3()},
    {name: '西藏', value: 12},
    {name: '四川', value: randomValue3()},
    {name: '宁夏', value: randomValue3()},
    {name: '海南', value: randomValue3()},
    {name: '台湾', value: randomValue3()},
    {name: '香港', value: randomValue3()},
    {name: '澳门', value: randomValue3()}
]
// 初始化echarts实例
var myChart = echarts.init(document.getElementById('map3'));
function randomValue3() {
    // Math.round 四舍五入
    // Math.random 随机数
    return Math.round(Math.random()*1000);
}
// 配置项
option = {
    // 提示框组件
    tooltip: {
        formatter:function(params,ticket, callback){
            // console.log(params.name)
            return params.seriesName+'<br />'+params.name+'：'+params.value
        }//数据格式化
    },
    visualMap: {
        pieces: [
            {min: 10000, label: '10000人及以上', color: '#0390a21'},
            {min: 1000, max: 9999, label: '1000-9999人', color: '#0ca2b1'},
            {min: 500, max: 999, label: '500-999人', color: '#00b8d2'},
            {min: 100, max: 499, label: '100-499人', color: '#7ad9eb'},
            {min: 1, max: 99, label: '1-99人',color: '#d3eff2'},
        ],
    },
    // 地理坐标系
    geo: {
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom:1.23,//视角缩放比例
        label: {
            normal: {
                show: true,
                fontSize:'12',
                color: '#444'
            }
        },
        itemStyle: {
            normal:{
                borderColor: '#999'
            },
            emphasis:{
                areaColor: '#F3B329',//鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    series : [
        {
            name: '已经治愈',
            type: 'map',
            geoIndex: 0,
            data:dataList
        }
    ]
};
// 显示图表
myChart.setOption(option);
// myChart.on('click', function (params) {
//     alert(params.name);
// });