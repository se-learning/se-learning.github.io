
const commonfns = {

    getQueryString() {
        var key = false, res = {}, itm = null;
        // get the query string without the ?
        var qs = location.search.substring(1);
        // check for the key as an argument
        if (arguments.length > 0 && arguments[0].length > 1)
            key = arguments[0];
        // make a regex pattern to grab key/value
        var pattern = /([^&=]+)=([^&]*)/g;
        // loop the items in the query string, either
        // find a match to the argument, or build an object
        // with key/value pairs
        while (itm = pattern.exec(qs)) {
            if (key !== false && decodeURIComponent(itm[1]) === key)
                return decodeURIComponent(itm[2]);
            else if (key === false)
                res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
        }
    
        return key === false ? res : null;
    },

    getRequestParam(name, url) {
        try {
            // Get request param in url by using URLSearchParams to handle plus sign converted to space
            if (!url) {
                url = location.href;
            }
            const urlObj = new URL(url);
            const urlSearch = urlObj.search.split('?');
            const usp = new URLSearchParams(urlSearch[1]);
            return usp.get(name);
        } catch (e) {
            // Old method implementation
            if (url) {
                if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(url))
                    return decodeURIComponent(name[1]);
            }
    
            // let params = (new URL(document.location)).searchParams;
            let params = this.getQueryString();
            return params[name];
        }
    },

    setRequestParams (url, params) {
        if (!Array.isArray(params)) {
            return url;
        }
    
        for (var i = 0, j = params.length; i < j; i++) {
            url = this.setRequestParam(url, params[i].key, params[i].value);
        }
    
        return url;
    },
    
    setRequestParam (url, key, value) {
        if (value) {
            var urlObj = new URL(url);
            var urlSearch = urlObj.search.split('?');
            var usp = new URLSearchParams(urlSearch[1]);
            usp.set(key, value);
            urlObj.search = usp.toString();
            return urlObj.href;
        } else {
            return this.deleteRequestParam(url, key);
        }
    },
    
    deleteRequestParam (url, key) {
        var urlObj = new URL(url);  
        var urlSearch = urlObj.search.split('?');
        var usp = new URLSearchParams(urlSearch[1]);
        usp.delete(key);
        urlObj.search = usp.toString();
        return urlObj.href;
    },
    
    pushStateHistory(url, params) {
        if (!url) {
            return;
        }
        var data = {
            oldpage: location.href, 
            newpage: url.href
        };
        if (params) {
            for (var key in params) {
                var value = params[key];
                if (key && value) {
                    data[key] = value;
                }
            }
        }
        window.history.pushState(data, 'another page', url);
    },
    
    replaceStateHistory(url) {
        if (!url) {
            return;
        }
        window.history.replaceState({oldpage: location.href, newpage: url.href}, 'another page', url);
    },

}

var app = new Vue({
    el: '#app',
    data: {
        
        wikiData: [],
        wikiTypes: [],
        wikiTags: [],

        activeMenu: {
            id: '',
            name: '',
            title: '',
            file: '',
            link: '',
            updated: '',
            width: '1500',
            height: '2200',
        },

        menus: wiki_menus
    },
    
    computed: {

    },

    watch: {

    },

    mounted: function() {
        this.search();

        // On return previous page button clicked
        window.addEventListener('popstate', (event) => {
            this.search();
        });
    },

    methods: {
        search(params) {
            var { page = '' } = params || {};

            if(page) {                
                // Search from function parameter, Push request param
                var newUrl = location.href;
                newUrl = commonfns.setRequestParams(newUrl, [{key: 'page', value: page}]);

                commonfns.pushStateHistory(newUrl);
            } else {
                // Search from url
                page = commonfns.getRequestParam('page');                
            }

            if(!page) {
                page = 'data-science'
            }
            this.page = page;

            // Simulate search
            var matched = this.menus.filter(item => item.id === page);
            if(matched && matched[0]) {
                for(var key in matched[0]) {
                    var value = matched[0][key]
                    this.activeMenu[key] = value; 
                }

                // Destroy current graph
                $("#diagram-container svg").empty();


                var svg = d3.select("#diagram-container svg"),
                    width = +svg.attr("width"),
                    height = +svg.attr("height"),
                    g = svg.append("g").attr("transform", "translate(140,0)");

                var tree = d3.tree()
                    .size([height/* - 400*/, width - 360]);

                var cluster = d3.cluster()
                    .size([height, width - 160]);

                var stratify = d3.stratify()
                    .parentId(function (d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

                function diagonal(d) {
                    return "M" + d.y + "," + d.x
                        + "C" + (d.parent.y + 100) + "," + d.x
                        + " " + (d.parent.y + 100) + "," + d.parent.x
                        + " " + d.parent.y + "," + d.parent.x;
                }

                d3.csv(this.activeMenu.file, function(d) {return { ...d };}).then((data) => {
                    // if (error) throw error;
            
                    var root = stratify(data);
            
                    // var root = stratify(data)
                    //     .sort(function (a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); });
            
                    tree(root);
            
                    this.wikiData = data;
                    this.init(data)
            
                    var link = g.selectAll(".link")
                        .data(root.descendants().slice(1))
                        .enter().append("path")
                        .attr("class", "link")
                        .attr("d", diagonal);
            
                    var node = g.selectAll(".node")
                        .data(root.descendants())
                        .enter().append("g")
                        .attr("class", function (d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
                        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
            
                    node.append("circle")
                        .attr("r", 2.5);     
            
                    node.append("text")
                        .attr("dy", 3)
                        .attr("x", function (d) { return d.children ? -8 : 8; })
                        .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
                        .append('a')
                        .attr("href", function (d) { return d.data.href; })
                        .attr("class", "summary-content-link")
                        .attr("data-toggle", "tooltip")
                        .attr("data-placement", "bottom")
                        .attr("data-html", "true")
                        .attr("data-trigger", 'hover focus click')
                        .attr("title", (d) => {
                            let link = d.data.href;
                            if (link && link.indexOf("#") === 0) {
                                link = link.substring(1);
                            } else {
                                link = '';
                            }
                            let content = this.getSummaryContent(link);
                            return content;
                        })
                        .text(function (d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });
                  
                    // Show tooltip when hover over tree
                    $('[data-toggle="tooltip"]').tooltip('dispose')
                    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover focus click' });
                    $('[data-toggle="tooltip"]').off('click').on('click', function(evt) {
                        // evt.preventDefault();
                        // evt.stopPropagation();
                        $(this).tooltip('hide');
                    })

                    // Change diagram type, currently not in use
                    d3.selectAll("input[name=mode]")
                        .on("change", changed);
            
                    var timeout = setTimeout(function () {
                        d3.select("input[value=\"tree\"]")
                            .property("checked", true)
                            .dispatch("change");
                    }, 1000);
            
                    function changed() {
                        timeout = clearTimeout(timeout);
                        (this.value === "tree" ? tree : cluster)(root);
                        var t = d3.transition().duration(750);
                        node.transition(t).attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });
                        link.transition(t).attr("d", diagonal);
                    }
            
                });
                
            }
        },

        init(data) {
            $(".content-inner").empty();
            $("#doc-menu-list").empty();

            for (let i = 0; i < data.length; i++) {
                let {id,href,value,name,type,content,related,tags,excerpt} = data[i];
    
                if(!name) {
                    name = id.substring(id.lastIndexOf(".") + 1)
                }
    
                let itemContent = this.getContentTemplate(data[i]);
                $(".content-inner").append(itemContent);
    
                // Generate left sidebar
                if (href && name && content) {
                    let sidebarItemContent = `<a class="nav-link scrollto" href="${href}">${name}</a>`;
                    $("#doc-menu-list").append(sidebarItemContent);
                }
            }
    
        },
        
        /**
         * Generate detailed content
         * @param {*} param0 
         */
        getContentTemplate({id,href,value,name,type,content,related,tags,excerpt,hasdetailedpage}) {
            if(!name) {
                name = id.substring(id.lastIndexOf(".") + 1)
            }

            if (!href || !content) {
                return '';
            }

            if(href.indexOf('#') === 0) {
                href = href.substring(1);
            }

            let contentTemplate=`<section id="${href}" class="doc-section">
                                    <h2 class="section-title">${name}</h2>
                                    <div class="breadcrumbs text-primary">${ id.replace(/\./g, " / ") }</div>
                                    <div class="section-block">
                                        <div class="content-summary">`
                                            + (type ? `<p>Type <span class="badge badge-primary">${type}</span></p>` : '')
                                            + `${content}

                                            ${hasdetailedpage == 'true' ?
                                            `<div class="mt-3">
                                                <a href="pages/${this.activeMenu.id}/${href}.html" class="btn btn-green read-more-btn" target="_blank" data-title="${name}">Read more ...</a>
                                            </div>` : ''}
                                        </div>

                                    </div>
                                </section>`;

            return contentTemplate;
        },
        
        /**
         * Get summary content of an item, display for tooltip
         * @param {*} id 
         */
        getSummaryContent(id) {
            if (!id) {
                return '';
            }
            let content = $(`#${id} .content-summary`).html();
            return content;
        },
    
        /**
         * Load and show page in model when click Read more button
         * @param {*} href 
         */
        loadPage(params) {
            var { href = '', title = '' } = params || {};

            if(!href) {
                return;
            }
            // Load page content
            $.get({
                url: href,
                success: function(data) {
                    // Show page content in modal
                    $('#contentModalBody').html(data)
                    $('#contentModalTitle').text(title);

                    $('#contentModal').modal('show')
                },
                error: function(data) {
                    console.log(data)
                }
            })
        },

    }
})


$(document).ready(function() {
	
    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);


    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-menu', offset: 100});
    
    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });    






    $(document).on('click', '.read-more-btn', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        
        app.loadPage({href: this.href, title: this.getAttribute('data-title')})
    });

});