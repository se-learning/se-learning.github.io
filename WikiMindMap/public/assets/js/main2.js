
// const commonfns = {

//     getQueryString() {
//         var key = false, res = {}, itm = null;
//         // get the query string without the ?
//         var qs = location.search.substring(1);
//         // check for the key as an argument
//         if (arguments.length > 0 && arguments[0].length > 1)
//             key = arguments[0];
//         // make a regex pattern to grab key/value
//         var pattern = /([^&=]+)=([^&]*)/g;
//         // loop the items in the query string, either
//         // find a match to the argument, or build an object
//         // with key/value pairs
//         while (itm = pattern.exec(qs)) {
//             if (key !== false && decodeURIComponent(itm[1]) === key)
//                 return decodeURIComponent(itm[2]);
//             else if (key === false)
//                 res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
//         }
    
//         return key === false ? res : null;
//     },

//     getRequestParam(name, url) {
//         try {
//             // Get request param in url by using URLSearchParams to handle plus sign converted to space
//             if (!url) {
//                 url = location.href;
//             }
//             const urlObj = new URL(url);
//             const urlSearch = urlObj.search.split('?');
//             const usp = new URLSearchParams(urlSearch[1]);
//             return usp.get(name);
//         } catch (e) {
//             // Old method implementation
//             if (url) {
//                 if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(url))
//                     return decodeURIComponent(name[1]);
//             }
    
//             // let params = (new URL(document.location)).searchParams;
//             let params = this.getQueryString();
//             return params[name];
//         }
//     },

//     setRequestParams (url, params) {
//         if (!Array.isArray(params)) {
//             return url;
//         }
    
//         for (var i = 0, j = params.length; i < j; i++) {
//             url = this.setRequestParam(url, params[i].key, params[i].value);
//         }
    
//         return url;
//     },
    
//     setRequestParam (url, key, value) {
//         if (value) {
//             var urlObj = new URL(url);
//             var urlSearch = urlObj.search.split('?');
//             var usp = new URLSearchParams(urlSearch[1]);
//             usp.set(key, value);
//             urlObj.search = usp.toString();
//             return urlObj.href;
//         } else {
//             return this.deleteRequestParam(url, key);
//         }
//     },
    
//     deleteRequestParam (url, key) {
//         var urlObj = new URL(url);  
//         var urlSearch = urlObj.search.split('?');
//         var usp = new URLSearchParams(urlSearch[1]);
//         usp.delete(key);
//         urlObj.search = usp.toString();
//         return urlObj.href;
//     },
    
//     pushStateHistory(url, params) {
//         if (!url) {
//             return;
//         }
//         var data = {
//             oldpage: location.href, 
//             newpage: url.href
//         };
//         if (params) {
//             for (var key in params) {
//                 var value = params[key];
//                 if (key && value) {
//                     data[key] = value;
//                 }
//             }
//         }
//         window.history.pushState(data, 'another page', url);
//     },
    
//     replaceStateHistory(url) {
//         if (!url) {
//             return;
//         }
//         window.history.replaceState({oldpage: location.href, newpage: url.href}, 'another page', url);
//     },

// }

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
        async search(params) {
            var vueapp = this;
            var diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x)
            var width = 900;
            var dx = 10
            var dy = width / 6
            var margin = ({top: 10, right: 120, bottom: 10, left: 40})
            var data = await d3.json("data/data-science2.json", function(d) {return { ...d };}) //FileAttachment("flare-2.json").json()            
            var tree = d3.tree()/*.size([1200, width]) */.nodeSize([dx, dy])
            var chart = function() {
                const root = d3.hierarchy(data);

                root.x0 = dy / 2;
                root.y0 = 0;
                root.descendants().forEach((d, i) => {
                    d.id = i;
                    d._children = d.children;

                    // Expand or collapse child nodes
                    if (d.depth && d.data.expanded == false) d.children = null;
                });

                const svg = d3.create("svg")
                    .attr("viewBox", [-margin.left, -margin.top, width, dx])
                    .style("font", "10px sans-serif")
                    .style("user-select", "none");

                const gLink = svg.append("g")
                    .attr("fill", "none")
                    .attr("stroke", "#555")
                    .attr("stroke-opacity", 0.4)
                    .attr("stroke-width", 1.5);

                const gNode = svg.append("g")
                    .attr("cursor", "pointer")
                    .attr("pointer-events", "all");

                function update(source) {
                    const duration = d3.event && d3.event.altKey ? 2500 : 250;
                    const nodes = root.descendants().reverse();
                    const links = root.links();

                    // Compute the new tree layout.
                    tree(root);

                    let left = root;
                    let right = root;
                    root.eachBefore(node => {
                        if (node.x < left.x) left = node;
                        if (node.x > right.x) right = node;
                    });

                    const height = right.x - left.x + margin.top + margin.bottom;

                    const transition = svg.transition()
                        .duration(duration)
                        .attr("viewBox", [-margin.left, left.x - margin.top, width, height])
                        .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

                    // Update the nodes…
                    const node = gNode.selectAll("g")
                        .data(nodes, d => d.id);

                    // Enter any new nodes at the parent's previous position.
                    const nodeEnter = node.enter().append("g")
                        .attr("transform", d => `translate(${source.y0},${source.x0})`)
                        .attr("fill-opacity", 0)
                        .attr("stroke-opacity", 0)
                        .on("click", (event, d) => {
                            // Show or hide children nodes
                            d.children = d.children ? null : d._children;
                            update(d);
                        });

                    nodeEnter.append("circle")
                        .attr("r", 2.5)
                        .attr("fill", d => d._children ? "#555" : "#999")
                        .attr("stroke-width", 10);

                    nodeEnter.append("text")
                        .attr("dy", "0.31em")
                        .attr("x", d => d._children ? -6 : 6)
                        .attr("text-anchor", d => d._children ? "end" : "start")
                        // .text(d => d.data.name)
                        .clone(true).lower()
                        .attr("stroke-linejoin", "round")
                        .attr("stroke-width", 3)
                        // .attr("stroke", "white")
                        .append('a') // Show tooltip when hover
                        .attr("href", function (d) { return d.data.href; })
                        .attr("class", "summary-content-link")
                        .attr("data-toggle", "tooltip")
                        .attr("data-placement", "bottom")
                        .attr("data-html", "true")
                        .attr("data-trigger", 'hover focus')
                        .attr("title", (d) => {
                            let link = d.data.href;
                            if (link && link.indexOf("#") === 0) {
                                link = link.substring(1);
                            } else {
                                link = '';
                            }
                            let content = vueapp.getSummaryContent(link);
                            return content;
                        })
                        .text(function (d) { return d.data.name; });

                    // Show tooltip when hover over tree
                    $('[data-toggle="tooltip"]').tooltip('dispose')
                    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover focus' });

                    // Transition nodes to their new position.
                    const nodeUpdate = node.merge(nodeEnter).transition(transition)
                        .attr("transform", d => `translate(${d.y},${d.x})`)
                        .attr("fill-opacity", 1)
                        .attr("stroke-opacity", 1);

                    // Transition exiting nodes to the parent's new position.
                    const nodeExit = node.exit().transition(transition).remove()
                        .attr("transform", d => `translate(${source.y},${source.x})`)
                        .attr("fill-opacity", 0)
                        .attr("stroke-opacity", 0);

                    // Update the links…
                    const link = gLink.selectAll("path")
                        .data(links, d => d.target.id);

                    // Enter any new links at the parent's previous position.
                    const linkEnter = link.enter().append("path")
                        .attr("d", d => {
                            const o = {x: source.x0, y: source.y0};
                            return diagonal({source: o, target: o});
                        });

                    // Transition links to their new position.
                    link.merge(linkEnter).transition(transition)
                        .attr("d", diagonal);

                    // Transition exiting nodes to the parent's new position.
                    link.exit().transition(transition).remove()
                        .attr("d", d => {
                            const o = {x: source.x, y: source.y};
                            return diagonal({source: o, target: o});
                        });

                    // Stash the old positions for transition.
                    root.eachBefore(d => {
                        d.x0 = d.x;
                        d.y0 = d.y;
                    });
                }

                update(root);

                return svg.node();
            }

            // Append chart svg to container
            var svgChart = chart();
            document.getElementById('diagram-container').appendChild(svgChart);

            // Show tooltip when hover over tree
            $('[data-toggle="tooltip"]').tooltip('dispose')
            $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover focus' });
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