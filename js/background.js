window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;  // 获取当前页面的滚动距离
    var windowHeight = window.innerHeight;  // 获取视口的高度
    var docHeight = document.documentElement.scrollHeight;  // 获取整个文档的高度
    var maxScroll = docHeight - windowHeight;  // 最大滚动距离

    // 设置一个系数来控制背景的移动速度
    var scrollSpeedFactor = 0.07;  // 背景滑动的速度系数，值越小背景移动越慢

    // 根据滚动距离计算背景图片的垂直位置
    var bgPositionY = Math.min((scrollY / maxScroll) * 100 * scrollSpeedFactor, 100);  // 背景图片的垂直位置

    // 设置背景图片的纵向偏移
    document.body.style.backgroundPosition = 'center ' + bgPositionY + '%';
});

// 获取所有的图片元素
const images = document.querySelectorAll('.post-content .image-gallery img');

// 遍历所有图片，添加点击事件
images.forEach(image => {
    image.addEventListener('click', () => {
        // 切换放大和缩小的状态
        if (image.style.transform === 'scale(2)') {
            // 如果当前图片已经放大，点击后恢复原状
            image.style.transform = 'scale(1)';
        } else {
            // 如果当前图片没有放大，点击后放大 2 倍
            image.style.transform = 'scale(2)';
        }
    });
});
