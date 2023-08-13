var list = [1, 1, 2, 2, 6, 6, 3, 3, 4, 4, 5, 5];

// 1。数组删除重复
{
    let array = list;
    let newarr1 = new Set(array);
    let newarr2 = Array.from(newarr1);
    let newarr3 = [...newarr1];
    //console.log(newarr1,newarr2,newarr3);
}
// 2.替换数组中的值
{
    let array = list;
    array.splice(0, 2, 0, 0);

    console.log(array);
}
// 3.不使用。map()实现映射

// 4.清空数组

// 5.将数组转化为对象

// 6.用数据填充数组

// 7.合并数组

// 8.求两个数组的交集

// 9.从数组中删除假值

// 10.从数组中获取随机值

// 11.反转数组

// 12.lastIndexOf()方法

// 13.对数组中所有值求和

// 14。