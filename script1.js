function solveQuadratic() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  var discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById("roots").innerHTML = "根1: " + root1 + "<br>根2: " + root2;
  } else if (discriminant === 0) {
    var root = -b / (2 * a);
    document.getElementById("roots").innerHTML = "根: " + root;
  } else {
    document.getElementById("roots").innerHTML = "没有实根.";
  }
}

function toggleDetails() {
  var details = document.getElementById("details");
  // 切换子列表的最大高度，从0到自适应高度或从自适应高度到0
  if (details.style.maxHeight) {
    details.style.maxHeight = null;
  } else {
    details.style.maxHeight = details.scrollHeight + "px";
  }
}


/*山羊移动 */
let img = document.querySelector('.img')
        // 定义小图片的旋转角度
        let deg = 0
        // 定义小图片位于网页左侧的位置
        let imgx = 0
        // 定义小图片位于网页顶部的位置
        let imgy = 0
        // 定义小图片x轴的位置
        let imgl = 0
        // 定义小图片y轴的位置
        let imgt = 0
        // 定义小图片翻转的角度
        let y = 0 
        // 定义一个计数器
        let index = 0

        window.addEventListener('mousemove',function(xyz){
            // 获取网页左侧距离的图片位置
            imgx = xyz.x - img.offsetLeft - img.clientWidth /2
            // 多去网页顶部距离图片的位置
            imgy = xyz.y - img.offsetTop - img.clientHeight /2
            // 套入公式，定义图片的旋转角度
            deg = 360*Math.atan(imgy/imgx)/(2*Math.PI)
            // 每当鼠标移动的时候重置index
            index= 0
            // 定义当前鼠标的位置
            let x = event.clientX
            // 当鼠标的x轴大于图片的时候，提普安就要对着鼠标，所以需要将图片翻转过来
            // 否则就不用翻转
            if(img.offsetLeft<x){
                y=-180
            }else{
                y=0
            }
        })
        setInterval(()=>{
            // 设置小图片的旋转和翻转
            img.style.transform = "rotateZ("+deg+"deg) rotateY("+y+"deg)"
            index++
            // 在这里设置小图片的位置和速度，并判断小图片到达鼠标位置时停止移动
            if(index<50){
                imgl+=imgx/50
                imgt+=imgy/50
            }
            img.style.left = imgl+"px"
            img.style.top = imgt+"px"
        },10)



/*检测设备类型 */
  function isAndroid() {
    return /Android/i.test(navigator.userAgent);
  }

  // 设置背景视频
  window.addEventListener('DOMContentLoaded', function() {
    var videoSource = document.getElementById('video-source');
    var backgroundVideo = document.getElementById('background-video');

    // 如果是安卓设备，加载另一个视频
    if (isAndroid()) {
      videoSource.src = "video/alt2.mp4";
    } else {
      videoSource.src = "video/星汐seki_水墨_AI生成.mp4";
    }

    // 重新加载视频
    backgroundVideo.load();
  });