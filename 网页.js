// countdown.js

// 倒计时截止日期
const countDownDate = new Date("June 30, 2023 00:00:00").getTime();

// 初始化
document.getElementById("days").textContent = "00";
document.getElementById("hours").textContent = "00";
document.getElementById("minutes").textContent = "00";
document.getElementById("seconds").textContent = "00";

// 每秒更新倒计时函数
setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // 计算天、时、分、秒
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 更新页面
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

}, 1000);
let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;
   arrowParent.classList.toggle("showMenu");
    });
  }

  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
  });
  var img = document.querySelectorAll(".img");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var buttons = document.querySelectorAll("p");

  //设置一个数组，用来存id
  idArr = ["first", "second", "right", "left", "left", "left", "last"];

  //设置一个变量用来当图片的索引
  var index = 0;

  initialize();

  //设置一个定时器，让图片轮播
  var timer = setInterval(next, 3000);

  //给箭头绑定点击事件
  left.addEventListener("click", prev);
  //当鼠标放到箭头上时，让定时器停止
  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  //当鼠标离开箭头时，让定时器重新开始
  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  //给小方块添加点击事件
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", () => {
      //在用户点击的时候关闭定时器
      clearInterval(timer);
      timer = null;
      //这里需要判断用户点击的小方块与当前图片的索引之差，如果
      //大于0，则表明用户需要更换的是后面的图片，反之，表明用户
      //需要更换之前也就是前面的图片
      if (index > i) {
        let x = index - i;
        while (x--) {
          prev();
        }
      } else if (index < i) {
        let x = i - index;
        while (x--) {
          next();
        }
      }
    });
  }

  //创建切换图片的函数
  function prev() {
    //切换上一张也就是让数组的最后一个元素变成第一个元素
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = buttons.length - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {
    //跟上面反过来
    idArr.unshift(idArr.pop());
    initialize();
    if (index === buttons.length - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  //创建一个函数用来让小方块跟随图片运动
  function clearColor() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "silver";
    }
    //让当前的索引变色
    buttons[index].style.backgroundColor = "rgb(20, 134, 187)";
  }

  //创建一个函数用来初始化图片
  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }