const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. 設定 EJS 樣板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 2. 定義英雄資料陣列
const heroes = [
    { name: '關羽', detail: '武聖，青龍偃月刀' },
    { name: '張飛', detail: '萬人敵，丈八蛇矛' },
    { name: '趙雲', detail: '常山之虎，龍膽亮銀槍' },
    { name: '馬超', detail: '錦馬超，西涼鐵騎' },
    { name: '黃忠', detail: '老當益壯，百步穿楊' }
];

// 3. 路由設定
app.get('/hero', (req, res) => {
    res.render('hero', {
        title: '三國英雄榜',
        studentId: '你的學號', // 這裡請記得改成你真實的學號
        heroes: heroes
    });
});

// 4. 啟動伺服器
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/hero`);
});