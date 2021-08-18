var dataList=[
    {name:"United States",value:789456},
    {name: 'Canada', value: 1911},
    {name: 'Russia', value: 745197},
    {name: 'Greenland', value: 34},
    {name: 'Norway', value: 11},
    {name:"Mexico",value:7894},
    {name:"China",value:78} ,
    {name:"Germany",value:7894},
    {name:"Japan",value:45612},
    {name:"Italy",value:4561},
    {name:"France", value:4561},
    {name:"Spain", value:789},
    {name:"Portugal", value:1274},
    {name:"Denmark", value:7894},
    {name:"Australia", value:123},
    {name:"India", value:1562},
    {name:"Indonesia",value:12456},
    {name:"Colombia", value:0123},
    {name:"Afghanistan ", value:12489},
    {name:"Austria", value:4512},
    {name:"Jordan", value:4523},
    {name:"Mongolia", value:7812},
    {name:"Kazakhstan", value:11234},
    {name:"Nepal", value:7845},
    {name:"Korea",value:84},
    {name:"Myanmar",value:1452},
    {name:"Turkmenistan", value:584},
    {name:"Algeria", value:1204},
    {name:"Bolivia", value:784},
    {name:"Peru",value:1234},
    {name:"Argentina",value:1203},
    {name:"Libya", value:1568},
    {name:"Sweden", value:12},
    {name:"Sudan", value:451},
    {name:"Niger", value:124},
    {name:"Indonesia", value:116},
    {name:"Dem.Rep.Congo", value:127},
    {name:"South Africa", value:45},
    {name:"Angola", value:451},
    {name:"Liberia", value:145},
    {name:"Brazil", value:45556},
    {name:"Venezuela", value:45555},
    {name:"Paraguary", value:895},
    {name:"Yemen", value:235},
    {name:"Saudi Arabia", value:124},
    {name:"Iran", value:56},
    {name:"Chad", value:145},
    {name:"Mauritania", value:22},
    {name:"Naimibia", value:69},
    {name:"Egypt", value:7894},
    {name:"Turkey", value:1025},
    {name:"Zambia", value:1305},
]

var myChart = echarts.init(document.getElementById('world'));
option = {
    tooltip: {
        formatter:function(params,ticket, callback){
            // console.log(params);
            return params.seriesName+'<br />'+params.name+'：'+params.value
        }//数据格式化
    },
    visualMap: {
        //左下角的部分
        pieces: [
            {min: 100000, label: '10000人及以上', color: '#9a0101'},
            {min: 10000, max: 99999, label: '10000-99999人', color: '#c6211b'},
            {min: 1000, max: 9999, label: '1000-9999人', color: '#e06f5d'},
            {min: 100, max: 999, label: '100-999人', color: '#feb99a'},
            {min: 1, max: 99, label: '1-9人',color: '#fdd79a'},
        ],
    },
   geo: {
        map: 'world',
        roam: false,//不开启缩放和平移
        zoom:1.20,//视角缩放比例
        label: {
            //图型上的文本标签
            normal: {
                show: false,
                fontSize:'2',
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
    series: [
        {
            name: '累计确诊',
            type: 'map',
            geoIndex:0,
            data:dataList
           
        }
    ]
};
myChart.setOption(option);