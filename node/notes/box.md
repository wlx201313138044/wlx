# 盒模型
页面就是由一个个盒模型堆砌起来的，每个HTML元素都可以叫做盒模型，盒模型由外而内包括：边距（margin）、边框（border）、填充（padding）、内容（content）。

浏览器选择哪个盒模型，主要看浏览器处于标准模式（Standards Mode）还是怪异模式（Quirks Mode）。我们都记得<!DOCTYPE>声明吧，这是告诉浏览器选择哪个版本的HTML，<!DOCTYPE>后面一般有DTD的声明，如果有DTD的声明，浏览器就是处于标准模式；如果没有DTD声明或者HTML4一下的DTD声明，那浏览器按照自己的方式解析代码，处于怪异模式。
处于标准模式的浏览器（IE浏览器版本必须是6或者6以上），会选择W3C盒模型解析代码；处于怪异模式的浏览器，则会按照自己的方式去解析代码，IE6以下则会是选择IE盒模型，其他现代的浏览器都是采用W3C盒模型。
* 基本概念：标准模型和IE模型
+ css如何设置这两种模型
+ JS如何获取盒模型对应的宽和高
+ BFC(边距重叠解决方案)

1 标准模型（W3C盒子模型）

    宽度：内容（content）的宽度
2 IE模型

    宽度：内容（content）+填充（padding）+边框（border）的总宽度
3 css如何设置这两种模型

    这里用到了css3的box-sizing属性

    ```css
    /* 标准模型 */
    box-sizing:content-box;
    /* IE模型 */
    box-sizing:border-box;
    ```
4 JS如何获取盒模型对应的宽高
dom(表示获取到的html节点元素)
   + dom.style.width/height 获取内联样式的宽高
   + dom.currentStyle.width/height 获取页面渲染完成后的结果（仅支持IE）
   + window.getComputedStyle(dom).width/height 同上，但通用性好一些
   + dom.getBoundingClientRect().width/height 根据元素在视窗中的绝对位置来获取宽高
   + dom.offsetWidth/offsetHeight（content+padding+boe=rder） 最常用的
5 边距重叠
    两个上下方向相邻的元素框垂直相遇时，外边距会合并，合并后的外边距的高度等于两个发生合并的外边距中较高的那个边距值（只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并）。
6 边距重叠解决方案（BFC Block Formatting Context 块级格式化上下文 ）

BFC原理
   * 内部的box会在垂直方向，一个接一个的放置
   * 每个元素的margin box的左边，与包含块border box的左边相接触（对于从做往右的格式化，否则相反）
   * box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠
   * bfc的区域不会与浮动区域的box重叠
   * bfc是一个页面上的独立的容器，外面的元素不会影响bfc里的元素，反过来，里面的也不会影响外面的
   * 计算bfc高度的时候，浮动元素也会参与计算

怎么取创建bfc
* float属性不为none（脱离文档流）
* position为absolute或fixed
* display为inline-block,table-cell,table-caption,flex,inine-flex
* overflow不为visible
* 根元素
应用场景
* 自适应两栏布局
* 清除内部浮动 
* 防止垂直margin重叠
## 参考博客
[深入理解盒模型](https://www.cnblogs.com/chengzp/p/cssbox.html)