function startGame() {
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'flex';
    initMapInteractions();
}

function initMapInteractions() {
    const regions = {
        '福州海峡奥林匹克体育中心': 'lightgreen.html',
        '国家体育场': 'lightgreen.html',
        '咸阳奥体中心体育场': 'lightgreen.html',
        '杭州奥体中心体育场': 'lightgreen.html',
        '广州天河体育中心体育场': 'lightgreen.html',
        '上海虹口足球场': 'lightgreen.html',
        '重庆市奥林匹克体育中心体育场': 'lavender.html',
        '兰州奥体中心玫瑰体育场': 'lavender.html',
        '青岛市民健身中心-体育场': 'lavender.html',
        '山西体育中心体育馆': 'lavender.html',
        '东安湖体育公园主体育场': 'lightyellow.html',
        '广西体育中心': 'lightyellow.html',
        '武汉五环体育中心': 'lightyellow.html',
        '南京奥体中心': 'lightyellow.html'
    };

    const secondScreen = document.getElementById('second-screen');
    secondScreen.innerHTML = ''; // 清空之前的点击区域

    Object.keys(regions).forEach(regionName => {
        const regionDiv = document.createElement('div');
        regionDiv.innerText = regionName;
        regionDiv.style.position = 'absolute';
        regionDiv.style.cursor = 'pointer';
        // 这里需要根据实际地图位置调整
        regionDiv.addEventListener('click', function() {
            window.location.href = regions[regionName];
        });
        secondScreen.appendChild(regionDiv);
    });
}

// 使地图可缩放
document.getElementById('map-image').addEventListener('wheel', function(event) {
    event.preventDefault();
    const currentScale = parseFloat(this.style.transform || '1');
    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
    this.style.transform = `scale(${currentScale * zoomFactor})`;
});