
// Begin crawler

// 1. Set variable
if(localStorage.getItem('tempCrawlerProductId') === null) {
    localStorage.setItem('tempCrawlerProductId', 40);
}

if(localStorage.getItem('tempCrawlerAttachmentId') === null) {
    localStorage.setItem('tempCrawlerAttachmentId', 235);
}

var tempCategory = 'laptop-thiet-bi-it';

// 2. Define parser data
var data = {
    mode: 'single',
    multipleSelector: '',
    parser: () => ({
        id: (() => {
            let newId = parseInt(localStorage.getItem('tempCrawlerProductId')) + 1;
            localStorage.setItem('tempCrawlerProductId', newId);
            return newId;
        })(),
        category: tempCategory,
        slug: location.href.substring(location.href.indexOf('tiki.vn/')+8, location.href.indexOf('.html')),
        name: $('h1.title').textContent,
        subcategory: document.querySelectorAll('.breadcrumb a')[document.querySelectorAll('.breadcrumb a').length - 2].text,
        price: $('p.price').textContent.replace(' đ', '').split('.').join(''),
        description: document.querySelectorAll('[class*=ToggleContent__View]')[0].innerText,
        address_city: null,
        address_district: null,
        address_detail: null,
        house_area: null,
        brand: $('.brand h6').textContent.substring($('.brand h6').textContent.indexOf(': ')+1).trim(),
        status: null,
        product_year: null,
        car_hopso: null,
        origin: null,
        color: null,
        phone_screen_size: null,
        phone_battery: null,
        original_price: document.querySelectorAll('.original-price')[1].textContent.replace('Giá thị trường: ', '').replace(' đ', '').split('.').join(''),
        enabled: true,
    })
};

var data2 = {
    mode: 'single',
    multipleSelector: '',
    parser: () => ({
        id: (() => {
            let newId = parseInt(localStorage.getItem('tempCrawlerAttachmentId')) + 1;
            localStorage.setItem('tempCrawlerAttachmentId', newId);
            return newId;
        })(),
        product_category: tempCategory,
        attachment_type: 'jpg',
        product_id: (() => {
            let productId = parseInt(localStorage.getItem('tempCrawlerProductId')) + 1;
            return productId;
        })(),
        attachment_source: `/Images/muasam/${tempCategory}/${location.href.substring(location.href.indexOf('tiki.vn/')+8, location.href.indexOf('.html'))}/${$('[class*=ImageLens__Wrapper] img').src.substring($('[class*=ImageLens__Wrapper] img').src.lastIndexOf('/')+1)}`,
        link: null,
        title: null,
        description: null,
    })
};

var defTCBS = {
    mode: 'multiple',
    multipleSelector: document.querySelectorAll(".financial-wrapper .body .row"),
    parser: (el) => ({
        name: el.querySelectorAll('.label .pull-left')[0].textContent,
        description: el.querySelectorAll('.label .pull-right .tooltip')[0].textContent,
    })
}

var defTCBS2 = {
    mode: 'multiple',
    multipleSelector: document.querySelectorAll("#analysis-right .body .content .row"),
    parser: (el) => ({
        name: el.querySelectorAll('.col-1')[0].textContent,
        description: el.querySelectorAll('.col-2 .pull-right.icon-tooltip .tooltip')[0].textContent,
    })
}

// Tin hieu ky thuat tab crawler
var defTCBS3 = {
    mode: 'multiple',
    multipleSelector: document.querySelectorAll(".indicator-row"),
    parser: (el) => ({
        name: el.querySelectorAll('.col-1 span')[0].textContent,
        description: el.querySelectorAll('.col-1 .tooltip')[0].textContent,
    })
}

function crawlData(options) {
    if(!options || !options.parser) {
        return {};
    }
    if(!options.mode) {
        options.mode = 'single'
    }

	var data = [];
    if(options.mode === 'single') {
        var item = options.parser();
        data.push(item);
    } else {
        if(!options.multipleSelector) {
            return [];
        }

        options.multipleSelector.forEach(el => {
            var item = options.parser(el);
            data.push(item);
        })
    }
    return data;
}

function getCSVRow(rowData) {
    if(!rowData) {
        return '';
    }
    var result = '';
    for(let key in rowData) {
        if(rowData[key] === null || rowData[key] === undefined) {
            // Null type
            result += ','
        } else if(rowData[key] === true || rowData[key] === false) {
            // Boolean type
            result += `${ rowData[key] },`
        } else if(typeof rowData[key] === 'string') {
            // String type
            result += `"${ rowData[key].split('"').join('""') }",`
        } else {
            result += `"${ rowData[key] }",`
        }
    }
    // Remove last comma
    result = result.substring(0, result.length - 1);
    return result;
}

var utils = {

    downloadFile: function (sUrl) {
        //If in Chrome or Safari - download via virtual link click
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || 
                navigator.userAgent.toLowerCase().indexOf('safari') > -1) {
            //Creating new link node.
            var link = document.createElement('a');
            link.href = sUrl;

            if (link.download !== undefined){
                //Set HTML5 download attribute. This will prevent file from opening if supported.
                var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
                link.download = fileName;
            }

            //Dispatching click event.
            if (document.createEvent) {
                var e = document.createEvent('MouseEvents');
                e.initEvent('click' ,true ,true);
                link.dispatchEvent(e);
                return true;
            }
        }

        // Force file download (whether supported by server).
        if(sUrl.indexOf('?') === -1) {
            sUrl += '?download';
        }
        
        window.open(sUrl, '_blank');
        return true;
    },

}

function init(options) {
    var data = crawlData(options);

    // console.log(data);
    var csvData = '';

    data.forEach(row => {
        var result = getCSVRow(row);
        csvData += result + '\r\n';        
    })
    console.log(csvData);
}

// Save with encoding UTF-8 with BOM

// init(data);

// init(data2);
// utils.downloadFile($('[class*=ImageLend__Wrapper] img').src);

init(defTCBS3);
