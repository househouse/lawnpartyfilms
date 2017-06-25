jQuery(document).ready(function() {
    function f(a) {
        var b = a.find(".cd-slider"),
            c = a.find(".cd-slider__navigation"),
            d = a.find(".cd-slider__controls").find("li"),
            e = [];
        e[0] = b.data("step1"), e[1] = b.data("step4"), e[2] = b.data("step2"), e[3] = b.data("step5"), e[4] = b.data("step3"), e[5] = b.data("step6"), c.on("click", ".js-next-slide", function(a) {
            a.preventDefault(), h(b, d, e)
        }), c.on("click", ".js-prev-slide", function(a) {
            a.preventDefault(), i(b, d, e)
        }), b.on("swipeleft", function(a) {
            h(b, d, e)
        }), b.on("swiperight", function(a) {
            i(b, d, e)
        }), d.on("click", function(a) {
            a.preventDefault();
            var c = $(this);
            if (!c.hasClass("selected")) {
                var f = c.index(),
                    h = b.children("li").eq(f),
                    i = g(b),
                    k = i.index(),
                    l = "";
                l = k < f ? "next" : "prev", j(i, h, l, d, e)
            }
        }), $(document).keyup(function(a) {
            "37" == a.which && m(b.get(0)) ? i(b, d, e) : "39" == a.which && m(b.get(0)) && h(b, d, e)
        })
    }

    function g(a, b, c) {
        return a.find(".visible")
    }

    function h(a, b, c) {
        var d = g(a),
            e = d.next("li").length > 0 ? d.next("li") : a.find("li").eq(0);
        j(d, e, "next", b, c)
    }

    function i(a, b, c) {
        var d = g(a),
            e = d.prev("li").length > 0 ? d.prev("li") : a.find("li").last();
        j(d, e, "prev", b, c)
    }

    function j(b, f, g, h, i) {
        if (!e) {
            e = !0;
            var j = f.find("path").attr("id"),
                l = Snap("#" + j);
            if ("next" == g) var m = i[0],
                n = i[2],
                o = i[4];
            else var m = i[1],
                n = i[3],
                o = i[5];
            k(f, h), f.addClass("is-animating"), l.attr("d", m).animate({
                d: n
            }, a, c, function() {
                l.animate({
                    d: o
                }, a, d, function() {
                    b.removeClass("visible"), f.addClass("visible").removeClass("is-animating"), e = !1
                })
            })
        }
    }

    function k(a, b) {
        var c = a.index();
        b.removeClass("selected").eq(c).addClass("selected")
    }

    function l(a, b, c, d, e) {
        var f = function(b) {
                var d = 1 - b;
                return 3 * d * d * b * a + 3 * d * b * b * c + b * b * b
            },
            g = function(a) {
                var c = 1 - a;
                return 3 * c * c * a * b + 3 * c * a * a * d + a * a * a
            },
            h = function(b) {
                var d = 1 - b;
                return 3 * (2 * (b - 1) * b + d * d) * a + 3 * (-b * b * b + 2 * d * b) * c
            };
        return function(a) {
            var c, d, i, j, k, l, b = a;
            for (i = b, l = 0; l < 8; l++) {
                if (j = f(i) - b, Math.abs(j) < e) return g(i);
                if (k = h(i), Math.abs(k) < 1e-6) break;
                i -= j / k
            }
            if (c = 0, d = 1, i = b, i < c) return g(c);
            if (i > d) return g(d);
            for (; c < d;) {
                if (j = f(i), Math.abs(j - b) < e) return g(i);
                b > j ? c = i : d = i, i = .5 * (d - c) + c
            }
            return g(i)
        }
    }

    function m(a) {
        for (var b = a.offsetTop, c = a.offsetLeft, d = a.offsetWidth, e = a.offsetHeight; a.offsetParent;) a = a.offsetParent, b += a.offsetTop, c += a.offsetLeft;
        return b < window.pageYOffset + window.innerHeight && c < window.pageXOffset + window.innerWidth && b + e > window.pageYOffset && c + d > window.pageXOffset
    }
    var a = 250,
        b = 1e3 / 60 / a / 4,
        c = l(.42, .03, .77, .63, b),
        d = l(.27, .5, .6, .99, b),
        e = !1;
    $(".js-slider-wrapper").each(function() {
        f($(this))
    })
});