var utils = (function () {
    // TODO let this take an object as innerHTML?
    function create(tagName, innerHTML, properties) {
        var element = document.createElement(tagName);
        element.innerHTML = innerHTML || "";
        for (var property in properties) {
            element[property] = properties[property];
        }
        return element;
    }

    function createDiv(className, id) {
        return create("div", "", {className: className, id: id});
    }

    function createImage(src, className, id) {
        return create("img", "", {className: className, id: id, src: src});
    }

    // getName and getOnClick get name and click function from each element 
    // in items. They each receive both item and index as arguments.
    function addLinkTable(id, items, getName, getOnClick) {
        var linkTable = document.createElement("ul");
        linkTable.id = id;

        items.forEach(function(item, index) {
            var li = create("li", "<a href='javascript:void(0);'>" 
                                        + getName(item, index) + "</a>");
            li.getElementsByTagName("a")[0].onclick = getOnClick(item, index);
            linkTable.appendChild(li);
        });

        anchor().appendChild(linkTable);
    }

    function add(element) {
        anchor().appendChild(element);
    }

    function setTitle(title) {
        document.getElementById("title").innerHTML = title;
        document.getElementById("title-container").style.display = "block";
    }

    function anchor() {
        return document.getElementById("anchor");
    }


    function get(element) {
        if (typeof element === "object") {
            return element;
        }

        return document.getElementById(element);
    }

    function show(element) {
        get(element).style.display = "block";
    }

    function hide(element) {
        get(element).style.display = "none";
    }

    function hideAll(element) {
        anchor().innerHTML = "";
        hide("waterfall-anchor");
    }

    function hideHeader() {
        hide("title-container"); // TODO expand as there is more header to hide
    }

    return {
        add: add,
        addLinkTable: addLinkTable,
        create: create,
        createDiv: createDiv,
        createImage: createImage,
        get: get,
        hide: hide,
        hideAll: hideAll,
        hideHeader: hideHeader,
        setTitle: setTitle,
        show: show
    }
})();
