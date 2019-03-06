var data = [1,4,2,5,7,3,28,9,5,10,0,11,4,3,16];

// 冒泡排序：
// 1.比较相邻的两个元素，如果左边比右边大，则交换位置
// 2.第一轮过后，最后一个元素是最大的
// 3.按照第一步进行相邻两个元素的比较，由于最后一个元素已经是最大的了，所以最后一个元素不用比较；
// 算法示例如下：
function sort1(array){
    for(var i = 0;i < array.length;i++){
        for(var j = 0 ;j < array.length-i-1;j++){
            if(array[j]>array[j+1]){
                  var temp = array[j];
                  array[j] = array[j+1];
                  array[j+1] = temp;

            }
        }
    }
    return array;
}
console.log("冒泡排序的结果---",sort1(data));
// 选择排序：
// 在未排序的序列找最小元素放在排序序列的起始位置,始终以未排序的靠前的一个元素为基准，第一次排序后第一个元素为最小的
// 算法示例如下
function sort2(array){
    var minIndex,temp;
    for(var i = 0;i<array.length-1;i++ ){
        minIndex = i;
        for(var j = i+1;j < array.length;j++){
            if(array[minIndex]>array[j]){
                minIndex = j;
            }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp
    }
    return array;
}
console.log("选择排序的结果---",sort2(data))
// 快速排序
// 冒泡排序的改进，第一次排序将数组分成两个部分，第一份比另一个部分的所有数据都要小，然后递归调用，两边都是是快速排序
function sort3(array){
    if(array.length<=1){
        return array;
    }
    var centerIndex = Math.floor(array.length/2);
    var left = [],right=[];
    var baseData = array.splice(centerIndex,1)[0];
    for(var i = 0;i<array.length;i++){
        if(array[i]<baseData){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }
    return sort3(left).concat([baseData],sort3(right));
}
console.log("快速排序的结果---",sort3(data))
// 归并排序
// 最稳定的排序算法，将已有序的子序列合并，得到完全有序的序列；即先让每个子序列有序，再使子序列段间有序
function sort4(array){
    var len = array.length;
    if(len<=1){
        return array;
    }
    var minIndex = Math.floor(len/2);
    var left = array.slice(0,minIndex);
    var right = array.slice(minIndex);
    return merge(sort4(left),sort4(right));
}
function merge(left,right){
    console.log("cha--",left.length,right.length)
    var result = [];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
}
console.log("归并排序的结果---",sort4([1,4,2,5,7,3,28,9,5,10,0,11,4,3,16]))