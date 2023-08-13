# BFC规范（BLock Fomatting Context）

1. **形成条件**
   
   * 浮动元素（float属性不为none）
   * 定位元素（position为absolute或者fixed）
   * display（值为inline-block、table-cell、table-caption）
   * overflow（值为hidden、auto、scroll）

2. **特性** 
   
   * 内部的盒子在垂直方向上一个一个排列
   * 内部垂直方向上的距离会叠加，margin坍塌
   * BFC区域不会与float叠加
   * 计算高度时，内部的float元素与参与计算
   * BFC就是页面上的一个独立容器，子元素不会影响到外部的元素

3. **作用**
   
   * 解决margin塌陷问题（将盒子变为独立BFC区域）
   * 解决浮动高度塌陷的问题（外层盒子添加overflow:hidden）
   * 解决侵占浮动元素的问题（overflow:hidden清除浮动）

# IFC规范（Inline Fomatting Context）

1. **形成条件**

   * font-size
   * line-height
   * height
   * vertical-align

2. **特性**
   
   * 横向排列
   * 在一行上的元素会构成一个行框（line box行盒模型）
   * 行框的高度为内部最高元素的高度
   * 浮动元素不占用行框但会压缩行框宽度
   * 元素超过行框宽度时发生换行并产生新的行框
   * 受text-align和vertical-align影响