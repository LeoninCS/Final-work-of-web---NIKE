document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('in');
    input.addEventListener('click', function() {
        this.placeholder = '请输入您想要的物品';
    });
    document.addEventListener("click", function(event) {
        if (event.target !== input) {
            input.placeholder = "搜索";
        }
    });
    var leftbutton1 = document.querySelector('.leftbutton1');
    var rightbutton1 = document.querySelector('.rightbutton1');
	var leftbutton2 = document.querySelector('.leftbutton2');
	var rightbutton2 = document.querySelector('.rightbutton2');
    var list1 = document.querySelector('.list1');
	var list2 = document.querySelector('.list2');
    var imgWidth = 390;
    var maxMove = imgWidth
    var intervalId = null;
	var move1 = -2535;
	var move2 = -2535;
	var x1 = list1.innerHTML;
	list1.innerHTML += x1;
	list1.innerHTML += x1;
	var x2 = list2.innerHTML;
	list2.innerHTML += x2;
	list2.innerHTML += x2;
	list1.style.left = -2535 + 'px';
	list2.style.left = -2535 + 'px';
    leftbutton1.onclick = function() {
		var len = 0;
        clearInterval(intervalId);
        intervalId = setInterval(function() {
            move1 += 10;
			len += 10;
            if (len >= maxMove) {
                clearInterval(intervalId); // 达到边界时停止移动
            }
            list1.style.left = move1 + 'px';
			if(list1.style.left === -195 + 'px') {
				list1.style.left = -2535 + 'px';
				move1 = -2535;
			}
        }, 1);
    };

    rightbutton1.onclick = function() {
		var len = 0;
        clearInterval(intervalId); 
        intervalId = setInterval(function() {
            move1 -= 10;
			len -= 10;
            if (len <= -maxMove) {
                clearInterval(intervalId);
            }
            list1.style.left = move1 + 'px';
			if(list1.style.left === -4875 + 'px') {
				list1.style.left = -2535 + 'px';
				move1 = -2535;
			}
        }, 1);
    };
	
	leftbutton2.onclick = function() {
		var len = 0;
	    clearInterval(intervalId);
	    intervalId = setInterval(function() {
	        move2 += 10;
			len += 10;
	        if (len >= maxMove) {
	            clearInterval(intervalId); // 达到边界时停止移动
	        }
	        list2.style.left = move2 + 'px';
			if(list2.style.left === -195 + 'px') {
				list2.style.left = -2535 + 'px';
				move2 = -2535;
			}
	    }, 1);
	};
	
	rightbutton2.onclick = function() {
		var len = 0;
	    clearInterval(intervalId); 
	    intervalId = setInterval(function() {
	        move2 -= 10;
			len -= 10;
	        if (len <= -maxMove) {
	            clearInterval(intervalId);
	        }
	        list2.style.left = move2 + 'px';
			if(list2.style.left === -4875 + 'px') {
				list2.style.left = -2535 + 'px';
				move2 = -2535;
			}
	    }, 1);
	};
});
