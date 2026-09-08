// 获取所有按钮（控制 class）和 div（控制 id）
const buttons = document.querySelectorAll('.toggle-button');
const divs = document.querySelectorAll('.new-container');

// 按钮控制多个 class
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetClasses = button.getAttribute('data-target').split(','); // 逗号分隔多个 class
        targetClasses.forEach(className => {
            document.querySelectorAll(`.${className.trim()}`).forEach(element => {
                element.classList.toggle('hidden'); // 切换 hidden 类
            });
        });
    });
});

// div 控制多个 id
divs.forEach(div => {
    div.addEventListener('click', () => {
        const targetIds = div.getAttribute('data-target').split(','); // 逗号分隔多个 id
        targetIds.forEach(id => {
            const target = document.getElementById(id.trim()); // 获取目标 div
            if (target) {
                target.classList.toggle('hidden'); // 切换 hidden 类
            }
        });
    });
});
