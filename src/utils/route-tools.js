// 该方法用于获取路由中的某一查询字符串的值
function getSearchKey( key ) {
    let path = ( window.location.search || window.location.hash ).toString();

    // console.log(Object(window.location));
    
    let queryIndex = path.indexOf('?');
    // console.log('path: '+ path +'queryIndex: ' + queryIndex);

    let map = new Map();

    if(queryIndex === -1) {
        return null;
    }else {
        let queryStr = path.substr(queryIndex + 1);
        let arrEquel = queryStr.split('&');
        for(let i = 0; i < arrEquel.length; i ++) {
            let tempArr = arrEquel[i].split('=');
            // console.log(arrEquel[i]);
            map.set(tempArr[0], tempArr[1]);
        }

        // console.log(map);

        let value = map.get(key);
        if(value) {
            // console.log(map);
            return decodeURIComponent(value);
        }else {
            return null;
        }
    }
}

export { getSearchKey };