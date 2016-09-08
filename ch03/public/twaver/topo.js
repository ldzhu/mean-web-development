$(function () {
    init();
});

var box = new twaver.ElementBox();
var network = new twaver.vector.Network(box);
var autoLayouter = new twaver.layout.AutoLayouter(box);

function initNetwork() {
    document.getElementById('topo').appendChild(network.getView());
    network.adjustBounds({
        x: 0, y: 0, width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
}

function init() {
    initNetwork();

    var data = emsTree.data;
    var rootNode = createNode(data);
    createChildren(rootNode, data);

    autoLayouter.doLayout('leftright', function(){
        //network.zoomOverview();
    });

}

function createNode(data) {
    var node = new twaver.Node(data.id);
    node.setName(data.name);
    node.setStyle('border', '1px solid red');
    box.add(node);

    return node;
}

function createLink(pNode, cNode) {
    var link = new twaver.Link(pNode, cNode);
    box.add(link);

    return link;
}

function createChildren(pNode, data) {
    if (data.items) {
        $.each(data.items, function(i, item) {
            var node = createNode(item);
            createLink(pNode, node);
            createChildren(node, item);
        });
    }
}