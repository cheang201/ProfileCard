/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  function(a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
      if (Object.defineProperty) try {
        return void Object.defineProperty(b, c, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return d(f), e
          },
          set: function(a) {
            d(f), e = a
          }
        })
      } catch (g) {}
      a._definePropertyBroken = !0, b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
      f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
      }).attr("size") && a.attrFn,
      h = a.attr,
      i = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null
      },
      j = a.attrHooks.value && a.attrHooks.value.set || function() {
        return c
      },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
      var j = e.toLowerCase(),
        o = b && b.nodeType;
      return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
        get: function(b, d) {
          var e, f = a.prop(b, d);
          return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
          var e;
          return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
      }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
      get: function(a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
      },
      set: function(a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
      }
    };
    var o, p, q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
      var g, h;
      return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function(a) {
      var b = Array.prototype.slice.call(arguments);
      if ("string" == typeof a && u.test(a)) try {
        document.querySelector(a)
      } catch (c) {
        a = a.replace(v, function(a, b, c, d) {
          return "[" + b + c + '"' + d + '"]'
        });
        try {
          document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
        } catch (e) {
          d("Attribute selector with '#' was not fixed: " + b[0])
        }
      }
      return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
      return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function(a) {
      a = a.toLowerCase();
      var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
      return {
        browser: b[1] || "",
        version: b[2] || "0"
      }
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
      function b(a, c) {
        return new b.fn.init(a, c)
      }
      a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
        var f = a.fn.init.call(this, d, e, c);
        return f instanceof b ? f : b(f)
      }, b.fn.init.prototype = b.fn;
      var c = b(document);
      return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function() {
      return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
      var d = a.cssHooks[c] && a.cssHooks[c].get;
      d && (a.cssHooks[c].get = function() {
        var a;
        return y = !0, a = d.apply(this, arguments), y = !1, a
      })
    }), a.swap = function(a, b, c, e) {
      var f, g, h = {};
      y || d("jQuery.swap() is undocumented and deprecated");
      for (g in b) h[g] = a.style[g], a.style[g] = b[g];
      f = c.apply(a, e || []);
      for (g in b) a.style[g] = h[g];
      return f
    }, a.ajaxSetup({
      converters: {
        "text json": a.parseJSON
      }
    });
    var z = a.fn.data;
    a.fn.data = function(b) {
      var e, f, g = this[0];
      return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
      c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
      var g, h, i, j, k = [];
      if (a.merge(k, a.buildFragment(b, c).childNodes), e)
        for (i = function(a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
          }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
      return k
    });
    var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
      };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
      a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function(a, b, c, d, e) {
      C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function(b, c) {
      a.fn[c] = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
      }
    }), a.fn.toggle = function(b, c) {
      if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
      d("jQuery.fn.toggle(handler, handler...) is deprecated");
      var e = arguments,
        f = b.guid || a.guid++,
        g = 0,
        h = function(c) {
          var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
          return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
      for (h.guid = f; g < e.length;) e[g++].guid = f;
      return this.click(h)
    }, a.fn.live = function(b, c, e) {
      return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function(b, c) {
      return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function(a, b, c, e) {
      return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function(b, c) {
      a.event.special[c] = {
        setup: function() {
          var b = this;
          return b !== document && (a.event.add(document, c + "." + a.guid, function() {
            a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
          }), a._data(this, c, a.guid++)), !1
        },
        teardown: function() {
          return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
        }
      }
    }), a.event.special.ready = {
      setup: function() {
        this === document && d("'ready' event is deprecated")
      }
    };
    var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;
    if (a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
      }, a.fn.find = function(a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
      }, a.Callbacks) {
      var O = a.Deferred,
        P = [
          ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
          ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
          ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
        ];
      a.Deferred = function(b) {
        var c = O(),
          e = c.promise();
        return c.pipe = e.pipe = function() {
          var b = arguments;
          return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
            a.each(P, function(f, g) {
              var h = a.isFunction(b[f]) && b[f];
              c[g[1]](function() {
                var b = h && h.apply(this, arguments);
                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
              })
            }), b = null
          }).promise()
        }, c.isResolved = function() {
          return d("deferred.isResolved is deprecated"), "resolved" === c.state()
        }, c.isRejected = function() {
          return d("deferred.isRejected is deprecated"), "rejected" === c.state()
        }, b && b.call(c, c), c
      }
    }
  }(jQuery, window);
(function($) {
  'use strict';
  if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
    return;
  }
  wpcf7 = $.extend({
    cached: 0,
    inputs: []
  }, wpcf7);
  $(function() {
    wpcf7.supportHtml5 = (function() {
      var features = {};
      var input = document.createElement('input');
      features.placeholder = 'placeholder' in input;
      var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
      $.each(inputTypes, function(index, value) {
        input.setAttribute('type', value);
        features[value] = input.type !== 'text';
      });
      return features;
    })();
    $('div.wpcf7 > form').each(function() {
      var $form = $(this);
      wpcf7.initForm($form);
      if (wpcf7.cached) {
        wpcf7.refill($form);
      }
    });
  });
  wpcf7.getId = function(form) {
    return parseInt($('input[name="_wpcf7"]', form).val(), 10);
  };
  wpcf7.initForm = function(form) {
    var $form = $(form);
    $form.submit(function(event) {
      if (!wpcf7.supportHtml5.placeholder) {
        $('[placeholder].placeheld', $form).each(function(i, n) {
          $(n).val('').removeClass('placeheld');
        });
      }
      if (typeof window.FormData === 'function') {
        wpcf7.submit($form);
        event.preventDefault();
      }
    });
    $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
    wpcf7.toggleSubmit($form);
    $form.on('click', '.wpcf7-acceptance', function() {
      wpcf7.toggleSubmit($form);
    });
    $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
      var name = $(this).attr('name');
      $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
    });
    $('.wpcf7-list-item.has-free-text', $form).each(function() {
      var $freetext = $(':input.wpcf7-free-text', this);
      var $wrap = $(this).closest('.wpcf7-form-control');
      if ($(':checkbox, :radio', this).is(':checked')) {
        $freetext.prop('disabled', false);
      } else {
        $freetext.prop('disabled', true);
      }
      $wrap.on('change', ':checkbox, :radio', function() {
        var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
        if ($cb.is(':checked')) {
          $freetext.prop('disabled', false).focus();
        } else {
          $freetext.prop('disabled', true);
        }
      });
    });
    if (!wpcf7.supportHtml5.placeholder) {
      $('[placeholder]', $form).each(function() {
        $(this).val($(this).attr('placeholder'));
        $(this).addClass('placeheld');
        $(this).focus(function() {
          if ($(this).hasClass('placeheld')) {
            $(this).val('').removeClass('placeheld');
          }
        });
        $(this).blur(function() {
          if ('' === $(this).val()) {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
          }
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
      $form.find('input.wpcf7-date[type="date"]').each(function() {
        $(this).datepicker({
          dateFormat: 'yy-mm-dd',
          minDate: new Date($(this).attr('min')),
          maxDate: new Date($(this).attr('max'))
        });
      });
    }
    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
      $form.find('input.wpcf7-number[type="number"]').each(function() {
        $(this).spinner({
          min: $(this).attr('min'),
          max: $(this).attr('max'),
          step: $(this).attr('step')
        });
      });
    }
    $('.wpcf7-character-count', $form).each(function() {
      var $count = $(this);
      var name = $count.attr('data-target-name');
      var down = $count.hasClass('down');
      var starting = parseInt($count.attr('data-starting-value'), 10);
      var maximum = parseInt($count.attr('data-maximum-value'), 10);
      var minimum = parseInt($count.attr('data-minimum-value'), 10);
      var updateCount = function(target) {
        var $target = $(target);
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr('data-current-value', count);
        $count.text(count);
        if (maximum && maximum < length) {
          $count.addClass('too-long');
        } else {
          $count.removeClass('too-long');
        }
        if (minimum && length < minimum) {
          $count.addClass('too-short');
        } else {
          $count.removeClass('too-short');
        }
      };
      $(':input[name="' + name + '"]', $form).each(function() {
        updateCount(this);
        $(this).keyup(function() {
          updateCount(this);
        });
      });
    });
    $form.on('change', '.wpcf7-validates-as-url', function() {
      var val = $.trim($(this).val());
      if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
        val = val.replace(/^\/+/, '');
        val = 'http://' + val;
      }
      $(this).val(val);
    });
  };
  wpcf7.submit = function(form) {
    if (typeof window.FormData !== 'function') {
      return;
    }
    var $form = $(form);
    $('.ajax-loader', $form).addClass('is-active');
    wpcf7.clearResponse($form);
    var formData = new FormData($form.get(0));
    var detail = {
      id: $form.closest('div.wpcf7').attr('id'),
      status: 'init',
      inputs: [],
      formData: formData
    };
    $.each($form.serializeArray(), function(i, field) {
      if ('_wpcf7' == field.name) {
        detail.contactFormId = field.value;
      } else if ('_wpcf7_version' == field.name) {
        detail.pluginVersion = field.value;
      } else if ('_wpcf7_locale' == field.name) {
        detail.contactFormLocale = field.value;
      } else if ('_wpcf7_unit_tag' == field.name) {
        detail.unitTag = field.value;
      } else if ('_wpcf7_container_post' == field.name) {
        detail.containerPostId = field.value;
      } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
        var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
        detail.inputs.push({
          name: owner + '-free-text',
          value: field.value
        });
      } else if (field.name.match(/^_/)) {} else {
        detail.inputs.push(field);
      }
    });
    wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
    var ajaxSuccess = function(data, status, xhr, $form) {
      detail.id = $(data.into).attr('id');
      detail.status = data.status;
      detail.apiResponse = data;
      var $message = $('.wpcf7-response-output', $form);
      switch (data.status) {
        case 'validation_failed':
          $.each(data.invalidFields, function(i, n) {
            $(n.into, $form).each(function() {
              wpcf7.notValidTip(this, n.message);
              $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
              $('[aria-invalid]', this).attr('aria-invalid', 'true');
            });
          });
          $message.addClass('wpcf7-validation-errors');
          $form.addClass('invalid');
          wpcf7.triggerEvent(data.into, 'invalid', detail);
          break;
        case 'acceptance_missing':
          $message.addClass('wpcf7-acceptance-missing');
          $form.addClass('unaccepted');
          wpcf7.triggerEvent(data.into, 'unaccepted', detail);
          break;
        case 'spam':
          $message.addClass('wpcf7-spam-blocked');
          $form.addClass('spam');
          wpcf7.triggerEvent(data.into, 'spam', detail);
          break;
        case 'aborted':
          $message.addClass('wpcf7-aborted');
          $form.addClass('aborted');
          wpcf7.triggerEvent(data.into, 'aborted', detail);
          break;
        case 'mail_sent':
          $message.addClass('wpcf7-mail-sent-ok');
          $form.addClass('sent');
          wpcf7.triggerEvent(data.into, 'mailsent', detail);
          break;
        case 'mail_failed':
          $message.addClass('wpcf7-mail-sent-ng');
          $form.addClass('failed');
          wpcf7.triggerEvent(data.into, 'mailfailed', detail);
          break;
        default:
          var customStatusClass = 'custom-' +
            data.status.replace(/[^0-9a-z]+/i, '-');
          $message.addClass('wpcf7-' + customStatusClass);
          $form.addClass(customStatusClass);
      }
      wpcf7.refill($form, data);
      wpcf7.triggerEvent(data.into, 'submit', detail);
      if ('mail_sent' == data.status) {
        $form.each(function() {
          this.reset();
        });
        wpcf7.toggleSubmit($form);
      }
      if (!wpcf7.supportHtml5.placeholder) {
        $form.find('[placeholder].placeheld').each(function(i, n) {
          $(n).val($(n).attr('placeholder'));
        });
      }
      $message.html('').append(data.message).slideDown('fast');
      $message.attr('role', 'alert');
      $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
        var $response = $(this);
        $response.html('').attr('role', '').append(data.message);
        if (data.invalidFields) {
          var $invalids = $('<ul></ul>');
          $.each(data.invalidFields, function(i, n) {
            if (n.idref) {
              var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
            } else {
              var $li = $('<li></li>').append(n.message);
            }
            $invalids.append($li);
          });
          $response.append($invalids);
        }
        $response.attr('role', 'alert').focus();
      });
    };
    $.ajax({
      type: 'POST',
      url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    }).done(function(data, status, xhr) {
      ajaxSuccess(data, status, xhr, $form);
      $('.ajax-loader', $form).removeClass('is-active');
    }).fail(function(xhr, status, error) {
      var $e = $('<div class="ajax-error"></div>').text(error.message);
      $form.after($e);
    });
  };
  wpcf7.triggerEvent = function(target, name, detail) {
    var $target = $(target);
    var event = new CustomEvent('wpcf7' + name, {
      bubbles: true,
      detail: detail
    });
    $target.get(0).dispatchEvent(event);
    $target.trigger('wpcf7:' + name, detail);
    $target.trigger(name + '.wpcf7', detail);
  };
  wpcf7.toggleSubmit = function(form, state) {
    var $form = $(form);
    var $submit = $('input:submit', $form);
    if (typeof state !== 'undefined') {
      $submit.prop('disabled', !state);
      return;
    }
    if ($form.hasClass('wpcf7-acceptance-as-validation')) {
      return;
    }
    $submit.prop('disabled', false);
    $('.wpcf7-acceptance', $form).each(function() {
      var $span = $(this);
      var $input = $('input:checkbox', $span);
      if (!$span.hasClass('optional')) {
        if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
          $submit.prop('disabled', true);
          return false;
        }
      }
    });
  };
  wpcf7.notValidTip = function(target, message) {
    var $target = $(target);
    $('.wpcf7-not-valid-tip', $target).remove();
    $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
    if ($target.is('.use-floating-validation-tip *')) {
      var fadeOut = function(target) {
        $(target).not(':hidden').animate({
          opacity: 0
        }, 'fast', function() {
          $(this).css({
            'z-index': -100
          });
        });
      };
      $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
        fadeOut(this);
      });
      $target.on('focus', ':input', function() {
        fadeOut($('.wpcf7-not-valid-tip', $target));
      });
    }
  };
  wpcf7.refill = function(form, data) {
    var $form = $(form);
    var refillCaptcha = function($form, items) {
      $.each(items, function(i, n) {
        $form.find(':input[name="' + i + '"]').val('');
        $form.find('img.wpcf7-captcha-' + i).attr('src', n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
      });
    };
    var refillQuiz = function($form, items) {
      $.each(items, function(i, n) {
        $form.find(':input[name="' + i + '"]').val('');
        $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
        $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
      });
    };
    if (typeof data === 'undefined') {
      $.ajax({
        type: 'GET',
        url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
        beforeSend: function(xhr) {
          var nonce = $form.find(':input[name="_wpnonce"]').val();
          if (nonce) {
            xhr.setRequestHeader('X-WP-Nonce', nonce);
          }
        },
        dataType: 'json'
      }).done(function(data, status, xhr) {
        if (data.captcha) {
          refillCaptcha($form, data.captcha);
        }
        if (data.quiz) {
          refillQuiz($form, data.quiz);
        }
      });
    } else {
      if (data.captcha) {
        refillCaptcha($form, data.captcha);
      }
      if (data.quiz) {
        refillQuiz($form, data.quiz);
      }
    }
  };
  wpcf7.clearResponse = function(form) {
    var $form = $(form);
    $form.removeClass('invalid spam sent failed');
    $form.siblings('.screen-reader-response').html('').attr('role', '');
    $('.wpcf7-not-valid-tip', $form).remove();
    $('[aria-invalid]', $form).attr('aria-invalid', 'false');
    $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
    $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
  };
  wpcf7.apiSettings.getRoute = function(path) {
    var url = wpcf7.apiSettings.root;
    url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
    return url;
  };
})(jQuery);
(function() {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();
(function($) {
  'use strict';
  var container, button, menu, links, i, len;
  container = document.getElementById('site-navigation');
  if (!container) {
    return;
  }
  button = container.getElementsByTagName('button')[0];
  if ('undefined' === typeof button) {
    return;
  }
  menu = container.getElementsByTagName('ul')[0];
  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }
  menu.setAttribute('aria-expanded', 'false');
  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }
  button.onclick = function() {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };
  links = menu.getElementsByTagName('a');
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  function toggleFocus() {
    var self = this;
    while (-1 === self.className.indexOf('nav-menu')) {
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }
      self = self.parentElement;
    }
  }
  (function(container) {
    var touchStartFn, i, parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
    if ('ontouchstart' in window) {
      touchStartFn = function(e) {
        var menuItem = this.parentNode,
          i;
        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();
          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove('focus');
          }
          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };
      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  }(container));
})();
(function($) {
  'use strict';
  var isIe = /(trident|msie)/i.test(navigator.userAgent);
  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function() {
      var id = location.hash.substring(1),
        element;
      if (!(/^[A-z0-9_-]+$/.test(id))) {
        return;
      }
      element = document.getElementById(id);
      if (element) {
        if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
          element.tabIndex = -1;
        }
        element.focus();
      }
    }, false);
  }
})();
window.addComment = function(a) {
  function b() {
    c(), g()
  }

  function c(a) {
    if (t && (m = j(r.cancelReplyId), n = j(r.commentFormId), m)) {
      m.addEventListener("touchstart", e), m.addEventListener("click", e);
      for (var b, c = d(a), g = 0, h = c.length; g < h; g++) b = c[g], b.addEventListener("touchstart", f), b.addEventListener("click", f)
    }
  }

  function d(a) {
    var b, c = r.commentReplyClass;
    return a && a.childNodes || (a = q), b = q.getElementsByClassName ? a.getElementsByClassName(c) : a.querySelectorAll("." + c)
  }

  function e(a) {
    var b = this,
      c = r.temporaryFormId,
      d = j(c);
    d && o && (j(r.parentIdFieldId).value = "0", d.parentNode.replaceChild(o, d), b.style.display = "none", a.preventDefault())
  }

  function f(b) {
    var c, d = this,
      e = i(d, "belowelement"),
      f = i(d, "commentid"),
      g = i(d, "respondelement"),
      h = i(d, "postid");
    e && f && g && h && (c = a.addComment.moveForm(e, f, g, h), !1 === c && b.preventDefault())
  }

  function g() {
    if (s) {
      var a = {
        childList: !0,
        subTree: !0
      };
      p = new s(h), p.observe(q.body, a)
    }
  }

  function h(a) {
    for (var b = a.length; b--;)
      if (a[b].addedNodes.length) return void c()
  }

  function i(a, b) {
    return u ? a.dataset[b] : a.getAttribute("data-" + b)
  }

  function j(a) {
    return q.getElementById(a)
  }

  function k(b, c, d, e) {
    var f = j(b);
    o = j(d);
    var g, h, i, k = j(r.parentIdFieldId),
      p = j(r.postIdFieldId);
    if (f && o && k) {
      l(o), e && p && (p.value = e), k.value = c, m.style.display = "", f.parentNode.insertBefore(o, f.nextSibling), m.onclick = function() {
        return !1
      };
      try {
        for (var s = 0; s < n.elements.length; s++)
          if (g = n.elements[s], h = !1, "getComputedStyle" in a ? i = a.getComputedStyle(g) : q.documentElement.currentStyle && (i = g.currentStyle), (g.offsetWidth <= 0 && g.offsetHeight <= 0 || "hidden" === i.visibility) && (h = !0), "hidden" !== g.type && !g.disabled && !h) {
            g.focus();
            break
          }
      } catch (t) {}
      return !1
    }
  }

  function l(a) {
    var b = r.temporaryFormId,
      c = j(b);
    c || (c = q.createElement("div"), c.id = b, c.style.display = "none", a.parentNode.insertBefore(c, a))
  }
  var m, n, o, p, q = a.document,
    r = {
      commentReplyClass: "comment-reply-link",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID"
    },
    s = a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver,
    t = "querySelector" in q && "addEventListener" in a,
    u = !!q.documentElement.dataset;
  return t && "loading" !== q.readyState ? b() : t && a.addEventListener("DOMContentLoaded", b, !1), {
    init: c,
    moveForm: k
  }
}(window);;
window.Modernizr = function(a, b, c) {
    function z(a) {
      j.cssText = a
    }

    function A(a, b) {
      return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
      return typeof a === b
    }

    function C(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
      }
      return !1
    }

    function E(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function F(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + o.join(d + " ") + d).split(" ");
      return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }
    var d = "2.6.2",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k, l = {}.toString,
      m = " -webkit- -moz- -o- -ms- ".split(" "),
      n = "Webkit Moz O ms",
      o = n.split(" "),
      p = n.toLowerCase().split(" "),
      q = {},
      r = {},
      s = {},
      t = [],
      u = t.slice,
      v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
          m = b.body,
          n = m || b.createElement("body");
        if (parseInt(d, 10))
          while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
      },
      x = {}.hasOwnProperty,
      y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
      return x.call(a, b)
    } : y = function(a, b) {
      return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = u.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(u.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(u.call(arguments)))
        };
      return e
    }), q.touch = function() {
      var c;
      return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
        c = a.offsetTop === 9
      }), c
    }, q.csstransitions = function() {
      return F("transition")
    };
    for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
          for (var d in a) y(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
      }, z(""), i = k = null,
      function(a, b) {
        function k(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
          var a = r.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
          var b = i[a[g]];
          return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
          c || (c = b);
          if (j) return c.createElement(a);
          f || (f = m(c));
          var g;
          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
          a || (a = b);
          if (j) return a.createDocumentFragment();
          c = c || m(a);
          var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
          for (; e < g; e++) d.createElement(f[e]);
          return d
        }

        function p(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(r, b.frag)
        }

        function q(a) {
          a || (a = b);
          var c = m(a);
          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {},
          d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f, g = "_html5shiv",
          h = 0,
          i = {},
          j;
        (function() {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
          } catch (c) {
            f = !0, j = !0
          }
        })();
        var r = {
          elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: c.shivCSS !== !1,
          supportsUnknownElements: j,
          shivMethods: c.shivMethods !== !1,
          type: "default",
          shivDocument: q,
          createElement: n,
          createDocumentFragment: o
        };
        a.html5 = r, q(b)
      }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
        return D([a])
      }, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
      }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };;
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(window.jQuery || window.Zepto);
  }
}(function($) {
  var CLOSE_EVENT = 'Close',
    BEFORE_CLOSE_EVENT = 'BeforeClose',
    AFTER_CLOSE_EVENT = 'AfterClose',
    BEFORE_APPEND_EVENT = 'BeforeAppend',
    MARKUP_PARSE_EVENT = 'MarkupParse',
    OPEN_EVENT = 'Open',
    CHANGE_EVENT = 'Change',
    NS = 'mfp',
    EVENT_NS = '.' + NS,
    READY_CLASS = 'mfp-ready',
    REMOVING_CLASS = 'mfp-removing',
    PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
  var mfp, MagnificPopup = function() {},
    _isJQ = !!(window.jQuery),
    _prevStatus, _window = $(window),
    _document, _prevContentType, _wrapClasses, _currPopupType;
  var _mfpOn = function(name, f) {
      mfp.ev.on(NS + name + EVENT_NS, f);
    },
    _getEl = function(className, appendTo, html, raw) {
      var el = document.createElement('div');
      el.className = 'mfp-' + className;
      if (html) {
        el.innerHTML = html;
      }
      if (!raw) {
        el = $(el);
        if (appendTo) {
          el.appendTo(appendTo);
        }
      } else if (appendTo) {
        appendTo.appendChild(el);
      }
      return el;
    },
    _mfpTrigger = function(e, data) {
      mfp.ev.triggerHandler(NS + e, data);
      if (mfp.st.callbacks) {
        e = e.charAt(0).toLowerCase() + e.slice(1);
        if (mfp.st.callbacks[e]) {
          mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
        }
      }
    },
    _getCloseBtn = function(type) {
      if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
        mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
        _currPopupType = type;
      }
      return mfp.currTemplate.closeBtn;
    },
    _checkInstance = function() {
      if (!$.magnificPopup.instance) {
        mfp = new MagnificPopup();
        mfp.init();
        $.magnificPopup.instance = mfp;
      }
    },
    supportsTransitions = function() {
      var s = document.createElement('p').style,
        v = ['ms', 'O', 'Moz', 'Webkit'];
      if (s['transition'] !== undefined) {
        return true;
      }
      while (v.length) {
        if (v.pop() + 'Transition' in s) {
          return true;
        }
      }
      return false;
    };
  MagnificPopup.prototype = {
    constructor: MagnificPopup,
    init: function() {
      var appVersion = navigator.appVersion;
      mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
      mfp.isAndroid = (/android/gi).test(appVersion);
      mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
      mfp.supportsTransition = supportsTransitions();
      mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
      _document = $(document);
      mfp.popupsCache = {};
    },
    open: function(data) {
      var i;
      if (data.isObj === false) {
        mfp.items = data.items.toArray();
        mfp.index = 0;
        var items = data.items,
          item;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          if (item.parsed) {
            item = item.el[0];
          }
          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }
      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }
      mfp.types = [];
      _wrapClasses = '';
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }
      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }
      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      }
      if (!mfp.bgOverlay) {
        mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
          mfp.close();
        });
        mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
          if (mfp._checkIfClose(e.target)) {
            mfp.close();
          }
        });
        mfp.container = _getEl('container', mfp.wrap);
      }
      mfp.contentContainer = _getEl('content');
      if (mfp.st.preloader) {
        mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
      }
      var modules = $.magnificPopup.modules;
      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp['init' + n].call(mfp);
      }
      _mfpTrigger('BeforeOpen');
      if (mfp.st.showCloseBtn) {
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          _wrapClasses += ' mfp-close-btn-in';
        }
      }
      if (mfp.st.alignTop) {
        _wrapClasses += ' mfp-align-top';
      }
      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: 'hidden',
          overflowY: mfp.st.overflowY
        });
      } else {
        mfp.wrap.css({
          top: _window.scrollTop(),
          position: 'absolute'
        });
      }
      if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
        mfp.bgOverlay.css({
          height: _document.height(),
          position: 'absolute'
        });
      }
      if (mfp.st.enableEscapeKey) {
        _document.on('keyup' + EVENT_NS, function(e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }
      _window.on('resize' + EVENT_NS, function() {
        mfp.updateSize();
      });
      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += ' mfp-auto-cursor';
      }
      if (_wrapClasses)
        mfp.wrap.addClass(_wrapClasses);
      var windowHeight = mfp.wH = _window.height();
      var windowStyles = {};
      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();
          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }
      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = 'hidden';
        } else {
          $('body, html').css('overflow', 'hidden');
        }
      }
      var classesToadd = mfp.st.mainClass;
      if (mfp.isIE7) {
        classesToadd += ' mfp-ie7';
      }
      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      }
      mfp.updateItemHTML();
      _mfpTrigger('BuildControls');
      $('html').css(windowStyles);
      mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
      mfp._lastFocusedEl = document.activeElement;
      setTimeout(function() {
        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);
          mfp._setFocus();
        } else {
          mfp.bgOverlay.addClass(READY_CLASS);
        }
        _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
      }, 16);
      mfp.isOpen = true;
      mfp.updateSize(windowHeight);
      _mfpTrigger(OPEN_EVENT);
      return data;
    },
    close: function() {
      if (!mfp.isOpen) return;
      _mfpTrigger(BEFORE_CLOSE_EVENT);
      mfp.isOpen = false;
      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);
        setTimeout(function() {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },
    _close: function() {
      _mfpTrigger(CLOSE_EVENT);
      var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();
      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + ' ';
      }
      mfp._removeClassFromMFP(classesToRemove);
      if (mfp.fixedContentPos) {
        var windowStyles = {
          marginRight: ''
        };
        if (mfp.isIE7) {
          $('body, html').css('overflow', '');
        } else {
          windowStyles.overflow = '';
        }
        $('html').css(windowStyles);
      }
      _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
      mfp.ev.off(EVENT_NS);
      mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
      mfp.bgOverlay.attr('class', 'mfp-bg');
      mfp.container.attr('class', 'mfp-container');
      if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
        if (mfp.currTemplate.closeBtn)
          mfp.currTemplate.closeBtn.detach();
      }
      if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus();
      }
      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;
      _mfpTrigger(AFTER_CLOSE_EVENT);
    },
    updateSize: function(winHeight) {
      if (mfp.isIOS) {
        var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css('height', height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      if (!mfp.fixedContentPos) {
        mfp.wrap.css('height', mfp.wH);
      }
      _mfpTrigger('Resize');
    },
    updateItemHTML: function() {
      var item = mfp.items[mfp.index];
      mfp.contentContainer.detach();
      if (mfp.content)
        mfp.content.detach();
      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }
      var type = item.type;
      _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
      mfp.currItem = item;
      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false;
        _mfpTrigger('FirstMarkupParse', markup);
        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          mfp.currTemplate[type] = true;
        }
      }
      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
      }
      var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);
      item.preloaded = true;
      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;
      mfp.container.prepend(mfp.contentContainer);
      _mfpTrigger('AfterChange');
    },
    appendContent: function(newContent, type) {
      mfp.content = newContent;
      if (newContent) {
        if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
          if (!mfp.content.find('.mfp-close').length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = '';
      }
      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass('mfp-' + type + '-holder');
      mfp.contentContainer.append(mfp.content);
    },
    parseEl: function(index) {
      var item = mfp.items[index],
        type;
      if (item.tagName) {
        item = {
          el: $(item)
        };
      } else {
        type = item.type;
        item = {
          data: item,
          src: item.src
        };
      }
      if (item.el) {
        var types = mfp.types;
        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass('mfp-' + types[i])) {
            type = types[i];
            break;
          }
        }
        item.src = item.el.attr('data-mfp-src');
        if (!item.src) {
          item.src = item.el.attr('href');
        }
      }
      item.type = type || mfp.st.type || 'inline';
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;
      _mfpTrigger('ElementParse', item);
      return mfp.items[index];
    },
    addGroup: function(el, options) {
      var eHandler = function(e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };
      if (!options) {
        options = {};
      }
      var eName = 'click.magnificPopup';
      options.mainEl = el;
      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;
        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function(e, el, options) {
      var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
      if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
        return;
      }
      var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else {
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }
      if (e.type) {
        e.preventDefault();
        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }
      options.el = $(e.mfpEl);
      if (options.delegate) {
        options.items = el.find(options.delegate);
      }
      mfp.open(options);
    },
    updateStatus: function(status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass('mfp-s-' + _prevStatus);
        }
        if (!text && status === 'loading') {
          text = mfp.st.tLoading;
        }
        var data = {
          status: status,
          text: text
        };
        _mfpTrigger('UpdateStatus', data);
        status = data.status;
        text = data.text;
        mfp.preloader.html(text);
        mfp.preloader.find('a').on('click', function(e) {
          e.stopImmediatePropagation();
        });
        mfp.container.addClass('mfp-s-' + status);
        _prevStatus = status;
      }
    },
    _checkIfClose: function(target) {
      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }
      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;
      if (closeOnContent && closeOnBg) {
        return true;
      } else {
        if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
          return true;
        }
        if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
          if (closeOnBg) {
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }
      }
      return false;
    },
    _addClassToMFP: function(cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function(cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function(winHeight) {
      return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
    },
    _setFocus: function() {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function(e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();
        return false;
      }
    },
    _parseMarkup: function(template, values, item) {
      var arr;
      if (item.data) {
        values = $.extend(item.data, values);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
      $.each(values, function(key, value) {
        if (value === undefined || value === false) {
          return true;
        }
        arr = key.split('_');
        if (arr.length > 1) {
          var el = template.find(EVENT_NS + '-' + arr[0]);
          if (el.length > 0) {
            var attr = arr[1];
            if (attr === 'replaceWith') {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === 'img') {
              if (el.is('img')) {
                el.attr('src', value);
              } else {
                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
              }
            } else {
              el.attr(arr[1], value);
            }
          }
        } else {
          template.find(EVENT_NS + '-' + key).html(value);
        }
      });
    },
    _getScrollbarSize: function() {
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
      return mfp.scrollbarSize;
    }
  };
  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],
    open: function(options, index) {
      _checkInstance();
      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }
      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },
    close: function() {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },
    registerModule: function(name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }
      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: false,
      mainClass: '',
      preloader: true,
      focus: '',
      closeOnContentClick: false,
      closeOnBgClick: true,
      closeBtnInside: true,
      showCloseBtn: true,
      enableEscapeKey: true,
      modal: false,
      alignTop: false,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: 'auto',
      fixedBgPos: 'auto',
      overflowY: 'auto',
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: 'Close (Esc)',
      tLoading: 'Loading...',
      autoFocusLast: true
    }
  };
  $.fn.magnificPopup = function(options) {
    _checkInstance();
    var jqEl = $(this);
    if (typeof options === "string") {
      if (options === 'open') {
        var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
          index = parseInt(arguments[1], 10) || 0;
        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({
          mfpEl: items
        }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen)
          mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      options = $.extend(true, {}, options);
      if (_isJQ) {
        jqEl.data('magnificPopup', options);
      } else {
        jqEl[0].magnificPopup = options;
      }
      mfp.addGroup(jqEl, options);
    }
    return jqEl;
  };
  var INLINE_NS = 'inline',
    _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
      if (_lastInlineElement) {
        _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
        _lastInlineElement = null;
      }
    };
  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: 'hide',
      markup: '',
      tNotFound: 'Content not found'
    },
    proto: {
      initInline: function() {
        mfp.types.push(INLINE_NS);
        _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
          _putInlineElementsBack();
        });
      },
      getInline: function(item, template) {
        _putInlineElementsBack();
        if (item.src) {
          var inlineSt = mfp.st.inline,
            el = $(item.src);
          if (el.length) {
            var parent = el[0].parentNode;
            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = 'mfp-' + _hiddenClass;
              }
              _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
            }
            mfp.updateStatus('ready');
          } else {
            mfp.updateStatus('error', inlineSt.tNotFound);
            el = $('<div>');
          }
          item.inlineElement = el;
          return el;
        }
        mfp.updateStatus('ready');
        mfp._parseMarkup(template, {}, item);
        return template;
      }
    }
  });
  var AJAX_NS = 'ajax',
    _ajaxCur, _removeAjaxCursor = function() {
      if (_ajaxCur) {
        $(document.body).removeClass(_ajaxCur);
      }
    },
    _destroyAjaxRequest = function() {
      _removeAjaxCursor();
      if (mfp.req) {
        mfp.req.abort();
      }
    };
  $.magnificPopup.registerModule(AJAX_NS, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;
        _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
        _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
      },
      getAjax: function(item) {
        if (_ajaxCur) {
          $(document.body).addClass(_ajaxCur);
        }
        mfp.updateStatus('loading');
        var opts = $.extend({
          url: item.src,
          success: function(data, textStatus, jqXHR) {
            var temp = {
              data: data,
              xhr: jqXHR
            };
            _mfpTrigger('ParseAjax', temp);
            mfp.appendContent($(temp.data), AJAX_NS);
            item.finished = true;
            _removeAjaxCursor();
            mfp._setFocus();
            setTimeout(function() {
              mfp.wrap.addClass(READY_CLASS);
            }, 16);
            mfp.updateStatus('ready');
            _mfpTrigger('AjaxContentAdded');
          },
          error: function() {
            _removeAjaxCursor();
            item.finished = item.loadError = true;
            mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
          }
        }, mfp.st.ajax.settings);
        mfp.req = $.ajax(opts);
        return '';
      }
    }
  });
  var _imgInterval, _getTitle = function(item) {
    if (item.data && item.data.title !== undefined)
      return item.data.title;
    var src = mfp.st.image.titleSrc;
    if (src) {
      if ($.isFunction(src)) {
        return src.call(mfp, item);
      } else if (item.el) {
        return item.el.attr(src) || '';
      }
    }
    return '';
  };
  $.magnificPopup.registerModule('image', {
    options: {
      markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var imgSt = mfp.st.image,
          ns = '.image';
        mfp.types.push('image');
        _mfpOn(OPEN_EVENT + ns, function() {
          if (mfp.currItem.type === 'image' && imgSt.cursor) {
            $(document.body).addClass(imgSt.cursor);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function() {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }
          _window.off('resize' + EVENT_NS);
        });
        _mfpOn('Resize' + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn('AfterChange', mfp.resizeImage);
        }
      },
      resizeImage: function() {
        var item = mfp.currItem;
        if (!item || !item.img) return;
        if (mfp.st.image.verticalFit) {
          var decr = 0;
          if (mfp.isLowIE) {
            decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
          }
          item.img.css('max-height', mfp.wH - decr);
        }
      },
      _onImageHasSize: function(item) {
        if (item.img) {
          item.hasSize = true;
          if (_imgInterval) {
            clearInterval(_imgInterval);
          }
          item.isCheckingImgSize = false;
          _mfpTrigger('ImageHasSize', item);
          if (item.imgHidden) {
            if (mfp.content)
              mfp.content.removeClass('mfp-loading');
            item.imgHidden = false;
          }
        }
      },
      findImageSize: function(item) {
        var counter = 0,
          img = item.img[0],
          mfpSetInterval = function(delay) {
            if (_imgInterval) {
              clearInterval(_imgInterval);
            }
            _imgInterval = setInterval(function() {
              if (img.naturalWidth > 0) {
                mfp._onImageHasSize(item);
                return;
              }
              if (counter > 200) {
                clearInterval(_imgInterval);
              }
              counter++;
              if (counter === 3) {
                mfpSetInterval(10);
              } else if (counter === 40) {
                mfpSetInterval(50);
              } else if (counter === 100) {
                mfpSetInterval(500);
              }
            }, delay);
          };
        mfpSetInterval(1);
      },
      getImage: function(item, template) {
        var guard = 0,
          onLoadComplete = function() {
            if (item) {
              if (item.img[0].complete) {
                item.img.off('.mfploader');
                if (item === mfp.currItem) {
                  mfp._onImageHasSize(item);
                  mfp.updateStatus('ready');
                }
                item.hasSize = true;
                item.loaded = true;
                _mfpTrigger('ImageLoadComplete');
              } else {
                guard++;
                if (guard < 200) {
                  setTimeout(onLoadComplete, 100);
                } else {
                  onLoadError();
                }
              }
            }
          },
          onLoadError = function() {
            if (item) {
              item.img.off('.mfploader');
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
              }
              item.hasSize = true;
              item.loaded = true;
              item.loadError = true;
            }
          },
          imgSt = mfp.st.image;
        var el = template.find('.mfp-img');
        if (el.length) {
          var img = document.createElement('img');
          img.className = 'mfp-img';
          if (item.el && item.el.find('img').length) {
            img.alt = item.el.find('img').attr('alt');
          }
          item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
          img.src = item.src;
          if (el.is('img')) {
            item.img = item.img.clone();
          }
          img = item.img[0];
          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }
        mfp._parseMarkup(template, {
          title: _getTitle(item),
          img_replaceWith: item.img
        }, item);
        mfp.resizeImage();
        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);
          if (item.loadError) {
            template.addClass('mfp-loading');
            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
          } else {
            template.removeClass('mfp-loading');
            mfp.updateStatus('ready');
          }
          return template;
        }
        mfp.updateStatus('loading');
        item.loading = true;
        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass('mfp-loading');
          mfp.findImageSize(item);
        }
        return template;
      }
    }
  });
  var hasMozTransform, getHasMozTransform = function() {
    if (hasMozTransform === undefined) {
      hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
    }
    return hasMozTransform;
  };
  $.magnificPopup.registerModule('zoom', {
    options: {
      enabled: false,
      easing: 'ease-in-out',
      duration: 300,
      opener: function(element) {
        return element.is('img') ? element : element.find('img');
      }
    },
    proto: {
      initZoom: function() {
        var zoomSt = mfp.st.zoom,
          ns = '.zoom',
          image;
        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }
        var duration = zoomSt.duration,
          getElToAnimate = function(image) {
            var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
              transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
              cssObj = {
                position: 'fixed',
                zIndex: 9999,
                left: 0,
                top: 0,
                '-webkit-backface-visibility': 'hidden'
              },
              t = 'transition';
            cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
            newImg.css(cssObj);
            return newImg;
          },
          showMainContent = function() {
            mfp.content.css('visibility', 'visible');
          },
          openTimeout, animatedImg;
        _mfpOn('BuildControls' + ns, function() {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.content.css('visibility', 'hidden');
            image = mfp._getItemToZoom();
            if (!image) {
              showMainContent();
              return;
            }
            animatedImg = getElToAnimate(image);
            animatedImg.css(mfp._getOffset());
            mfp.wrap.append(animatedImg);
            openTimeout = setTimeout(function() {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function() {
                showMainContent();
                setTimeout(function() {
                  animatedImg.remove();
                  image = animatedImg = null;
                  _mfpTrigger('ZoomAnimationEnded');
                }, 16);
              }, duration);
            }, 16);
          }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.st.removalDelay = duration;
            if (!image) {
              image = mfp._getItemToZoom();
              if (!image) {
                return;
              }
              animatedImg = getElToAnimate(image);
            }
            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css('visibility', 'hidden');
            setTimeout(function() {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function() {
          if (mfp._allowZoom()) {
            showMainContent();
            if (animatedImg) {
              animatedImg.remove();
            }
            image = null;
          }
        });
      },
      _allowZoom: function() {
        return mfp.currItem.type === 'image';
      },
      _getItemToZoom: function() {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },
      _getOffset: function(isLarge) {
        var el;
        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }
        var offset = el.offset();
        var paddingTop = parseInt(el.css('padding-top'), 10);
        var paddingBottom = parseInt(el.css('padding-bottom'), 10);
        offset.top -= ($(window).scrollTop() - paddingTop);
        var obj = {
          width: el.width(),
          height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
        };
        if (getHasMozTransform()) {
          obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }
        return obj;
      }
    }
  });
  var IFRAME_NS = 'iframe',
    _emptyPage = '//about:blank',
    _fixIframeBugs = function(isShowing) {
      if (mfp.currTemplate[IFRAME_NS]) {
        var el = mfp.currTemplate[IFRAME_NS].find('iframe');
        if (el.length) {
          if (!isShowing) {
            el[0].src = _emptyPage;
          }
          if (mfp.isIE8) {
            el.css('display', isShowing ? 'block' : 'none');
          }
        }
      }
    };
  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
      }
    },
    proto: {
      initIframe: function() {
        mfp.types.push(IFRAME_NS);
        _mfpOn('BeforeChange', function(e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs();
            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true);
            }
          }
        });
        _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
          _fixIframeBugs();
        });
      },
      getIframe: function(item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function() {
          if (embedSrc.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === 'string') {
                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
              } else {
                embedSrc = this.id.call(this, embedSrc);
              }
            }
            embedSrc = this.src.replace('%id%', embedSrc);
            return false;
          }
        });
        var dataObj = {};
        if (iframeSt.srcAction) {
          dataObj[iframeSt.srcAction] = embedSrc;
        }
        mfp._parseMarkup(template, dataObj, item);
        mfp.updateStatus('ready');
        return template;
      }
    }
  });
  var _getLoopedId = function(index) {
      var numSlides = mfp.items.length;
      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }
      return index;
    },
    _replaceCurrTotal = function(text, curr, total) {
      return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
  $.magnificPopup.registerModule('gallery', {
    options: {
      enabled: false,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%'
    },
    proto: {
      initGallery: function() {
        var gSt = mfp.st.gallery,
          ns = '.mfp-gallery';
        mfp.direction = true;
        if (!gSt || !gSt.enabled) return false;
        _wrapClasses += ' mfp-gallery';
        _mfpOn(OPEN_EVENT + ns, function() {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on('click' + ns, '.mfp-img', function() {
              if (mfp.items.length > 1) {
                mfp.next();
                return false;
              }
            });
          }
          _document.on('keydown' + ns, function(e) {
            if (e.keyCode === 37) {
              mfp.prev();
            } else if (e.keyCode === 39) {
              mfp.next();
            }
          });
        });
        _mfpOn('UpdateStatus' + ns, function(e, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
          }
        });
        _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
          var l = mfp.items.length;
          values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
        });
        _mfpOn('BuildControls' + ns, function() {
          if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
            var markup = gSt.arrowMarkup,
              arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
              arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
            arrowLeft.click(function() {
              mfp.prev();
            });
            arrowRight.click(function() {
              mfp.next();
            });
            mfp.container.append(arrowLeft.add(arrowRight));
          }
        });
        _mfpOn(CHANGE_EVENT + ns, function() {
          if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
          mfp._preloadTimeout = setTimeout(function() {
            mfp.preloadNearbyImages();
            mfp._preloadTimeout = null;
          }, 16);
        });
        _mfpOn(CLOSE_EVENT + ns, function() {
          _document.off(ns);
          mfp.wrap.off('click' + ns);
          mfp.arrowRight = mfp.arrowLeft = null;
        });
      },
      next: function() {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      prev: function() {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      goTo: function(newIndex) {
        mfp.direction = (newIndex >= mfp.index);
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      preloadNearbyImages: function() {
        var p = mfp.st.gallery.preload,
          preloadBefore = Math.min(p[0], mfp.items.length),
          preloadAfter = Math.min(p[1], mfp.items.length),
          i;
        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
          mfp._preloadItem(mfp.index + i);
        }
        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      _preloadItem: function(index) {
        index = _getLoopedId(index);
        if (mfp.items[index].preloaded) {
          return;
        }
        var item = mfp.items[index];
        if (!item.parsed) {
          item = mfp.parseEl(index);
        }
        _mfpTrigger('LazyLoad', item);
        if (item.type === 'image') {
          item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
            item.hasSize = true;
          }).on('error.mfploader', function() {
            item.hasSize = true;
            item.loadError = true;
            _mfpTrigger('LazyLoadError', item);
          }).attr('src', item.src);
        }
        item.preloaded = true;
      }
    }
  });
  var RETINA_NS = 'retina';
  $.magnificPopup.registerModule(RETINA_NS, {
    options: {
      replaceSrc: function(item) {
        return item.src.replace(/\.\w+$/, function(m) {
          return '@2x' + m;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina,
            ratio = st.ratio;
          ratio = !isNaN(ratio) ? ratio : ratio();
          if (ratio > 1) {
            _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
              item.img.css({
                'max-width': item.img[0].naturalWidth / ratio,
                'width': '100%'
              });
            });
            _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      }
    }
  });
  _checkInstance();
}));
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(function($) {
  $.extend($.fn, {
    validate: function(options) {
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }
      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);
      if (validator.settings.onsubmit) {
        this.on("click.validate", ":submit", function(event) {
          validator.submitButton = event.currentTarget;
          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }
          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });
        this.on("submit.validate", function(event) {
          if (validator.settings.debug) {
            event.preventDefault();
          }

          function handle() {
            var hidden, result;
            if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
              hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
            }
            if (validator.settings.submitHandler) {
              result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
              if (hidden) {
                hidden.remove();
              }
              if (result !== undefined) {
                return result;
              }
              return false;
            }
            return true;
          }
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }
      return validator;
    },
    valid: function() {
      var valid, validator, errorList;
      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function() {
          valid = validator.element(this) && valid;
          if (!valid) {
            errorList = errorList.concat(validator.errorList);
          }
        });
        validator.errorList = errorList;
      }
      return valid;
    },
    rules: function(command, argument) {
      var element = this[0],
        settings, staticRules, existingRules, data, param, filtered;
      if (element == null) {
        return;
      }
      if (!element.form && element.hasAttribute("contenteditable")) {
        element.form = this.closest("form")[0];
        element.name = this.attr("name");
      }
      if (element.form == null) {
        return;
      }
      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            filtered = {};
            $.each(argument.split(/\s/), function(index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }
      data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
      }
      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, {
          remote: param
        });
      }
      return data;
    }
  });
  $.extend($.expr.pseudos || $.expr[":"], {
    blank: function(a) {
      return !$.trim("" + $(a).val());
    },
    filled: function(a) {
      var val = $(a).val();
      return val !== null && !!$.trim("" + val);
    },
    unchecked: function(a) {
      return !$(a).prop("checked");
    }
  });
  $.validator = function(options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };
  $.validator.format = function(source, params) {
    if (arguments.length === 1) {
      return function() {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (params === undefined) {
      return source;
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function(i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
        return n;
      });
    });
    return source;
  };
  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function(element) {
        this.lastActive = element;
        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }
          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function(element) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function(element, event) {
        var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
          return;
        } else if (element.name in this.submitted || element.name in this.invalid) {
          this.element(element);
        }
      },
      onclick: function(element) {
        if (element.name in this.submitted) {
          this.element(element);
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },
    setDefaults: function(settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}."),
      step: $.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: false,
    prototype: {
      init: function() {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var groups = (this.groups = {}),
          rules;
        $.each(this.settings.groups, function(key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function(index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function(key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          if (!this.form && this.hasAttribute("contenteditable")) {
            this.form = $(this).closest("form")[0];
            this.name = $(this).attr("name");
          }
          var validator = $.data(this.form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, ""),
            settings = validator.settings;
          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }
        $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate).on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
        if (this.settings.invalidHandler) {
          $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        }
      },
      form: function() {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },
      checkForm: function() {
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },
      element: function(element) {
        var cleanElement = this.clean(element),
          checkElement = this.validationTargetFor(cleanElement),
          v = this,
          result = true,
          rs, group;
        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement);
          group = this.groups[checkElement.name];
          if (group) {
            $.each(this.groups, function(name, testgroup) {
              if (testgroup === group && name !== checkElement.name) {
                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                if (cleanElement && cleanElement.name in v.invalid) {
                  v.currentElements.push(cleanElement);
                  result = v.check(cleanElement) && result;
                }
              }
            });
          }
          rs = this.check(checkElement) !== false;
          result = result && rs;
          if (rs) {
            this.invalid[checkElement.name] = false;
          } else {
            this.invalid[checkElement.name] = true;
          }
          if (!this.numberOfInvalids()) {
            this.toHide = this.toHide.add(this.containers);
          }
          this.showErrors();
          $(element).attr("aria-invalid", !rs);
        }
        return result;
      },
      showErrors: function(errors) {
        if (errors) {
          var validator = this;
          $.extend(this.errorMap, errors);
          this.errorList = $.map(this.errorMap, function(message, name) {
            return {
              message: message,
              element: validator.findByName(name)[0]
            };
          });
          this.successList = $.grep(this.successList, function(element) {
            return !(element.name in errors);
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      resetForm: function() {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.invalid = {};
        this.submitted = {};
        this.prepareForm();
        this.hideErrors();
        var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(elements);
      },
      resetElements: function(elements) {
        var i;
        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
            this.findByName(elements[i].name).removeClass(this.settings.validClass);
          }
        } else {
          elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        }
      },
      numberOfInvalids: function() {
        return this.objectLength(this.invalid);
      },
      objectLength: function(obj) {
        var count = 0,
          i;
        for (i in obj) {
          if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
            count++;
          }
        }
        return count;
      },
      hideErrors: function() {
        this.hideThese(this.toHide);
      },
      hideThese: function(errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },
      valid: function() {
        return this.size() === 0;
      },
      size: function() {
        return this.errorList.length;
      },
      focusInvalid: function() {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
          } catch (e) {}
        }
      },
      findLastActive: function() {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function(n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },
      elements: function() {
        var validator = this,
          rulesCache = {};
        return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
          var name = this.name || $(this).attr("name");
          if (!name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          }
          if (this.hasAttribute("contenteditable")) {
            this.form = $(this).closest("form")[0];
            this.name = name;
          }
          if (name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }
          rulesCache[name] = true;
          return true;
        });
      },
      clean: function(selector) {
        return $(selector)[0];
      },
      errors: function() {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },
      resetInternals: function() {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
      },
      reset: function() {
        this.resetInternals();
        this.currentElements = $([]);
      },
      prepareForm: function() {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function(element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function(element) {
        var $element = $(element),
          type = element.type,
          val, idx;
        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
          return element.validity.badInput ? "NaN" : $element.val();
        }
        if (element.hasAttribute("contenteditable")) {
          val = $element.text();
        } else {
          val = $element.val();
        }
        if (type === "file") {
          if (val.substr(0, 12) === "C:\\fakepath\\") {
            return val.substr(12);
          }
          idx = val.lastIndexOf("/");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }
          idx = val.lastIndexOf("\\");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }
          return val;
        }
        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },
      check: function(element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(),
          rulesCount = $.map(rules, function(n, i) {
            return i;
          }).length,
          dependencyMismatch = false,
          val = this.elementValue(element),
          result, method, rule, normalizer;
        if (typeof rules.normalizer === "function") {
          normalizer = rules.normalizer;
        } else if (typeof this.settings.normalizer === "function") {
          normalizer = this.settings.normalizer;
        }
        if (normalizer) {
          val = normalizer.call(element, val);
          if (typeof val !== "string") {
            throw new TypeError("The normalizer should return a string value.");
          }
          delete rules.normalizer;
        }
        for (method in rules) {
          rule = {
            method: method,
            parameters: rules[method]
          };
          try {
            result = $.validator.methods[method].call(this, val, element, rule.parameters);
            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;
            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }
            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }
            if (e instanceof TypeError) {
              e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
            }
            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },
      customDataMessage: function(element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() +
          method.substring(1).toLowerCase()) || $(element).data("msg");
      },
      customMessage: function(name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      findDefined: function() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },
      defaultMessage: function(element, rule) {
        if (typeof rule === "string") {
          rule = {
            method: rule
          };
        }
        var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
          theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        return message;
      },
      formatAndAdd: function(element, rule) {
        var message = this.defaultMessage(element, rule);
        this.errorList.push({
          message: message,
          element: element,
          method: rule.method
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function(toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },
      defaultShowErrors: function() {
        var i, elements, error;
        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function() {
        return $(this.errorList).map(function() {
          return this.element;
        });
      },
      showLabel: function(element, message) {
        var place, group, errorID, v, error = this.errorsFor(element),
          elementID = this.idOrName(element),
          describedBy = $(element).attr("aria-describedby");
        if (error.length) {
          error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
          error.html(message);
        } else {
          error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
          place = error;
          if (this.settings.wrapper) {
            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement.call(this, place, $(element));
          } else {
            place.insertAfter(element);
          }
          if (error.is("label")) {
            error.attr("for", elementID);
          } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
            errorID = error.attr("id");
            if (!describedBy) {
              describedBy = errorID;
            } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
              describedBy += " " + errorID;
            }
            $(element).attr("aria-describedby", describedBy);
            group = this.groups[element.name];
            if (group) {
              v = this;
              $.each(v.groups, function(name, testgroup) {
                if (testgroup === group) {
                  $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }
        if (!message && this.settings.success) {
          error.text("");
          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }
        this.toShow = this.toShow.add(error);
      },
      errorsFor: function(element) {
        var name = this.escapeCssMeta(this.idOrName(element)),
          describer = $(element).attr("aria-describedby"),
          selector = "label[for='" + name + "'], label[for='" + name + "'] *";
        if (describer) {
          selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
        }
        return this.errors().filter(selector);
      },
      escapeCssMeta: function(string) {
        return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function(element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },
      validationTargetFor: function(element) {
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        }
        return $(element).not(this.settings.ignore)[0];
      },
      checkable: function(element) {
        return (/radio|checkbox/i).test(element.type);
      },
      findByName: function(name) {
        return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
      },
      getLength: function(value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },
      depend: function(param, element) {
        return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
      },
      dependTypes: {
        "boolean": function(param) {
          return param;
        },
        "string": function(param, element) {
          return !!$(param, element.form).length;
        },
        "function": function(param, element) {
          return param(element);
        }
      },
      optional: function(element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },
      startRequest: function(element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          $(element).addClass(this.settings.pendingClass);
          this.pending[element.name] = true;
        }
      },
      stopRequest: function(element, valid) {
        this.pendingRequest--;
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        $(element).removeClass(this.settings.pendingClass);
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();
          if (this.submitButton) {
            $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
          }
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function(element, method) {
        method = typeof method === "string" && method || "remote";
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, {
            method: method
          })
        });
      },
      destroy: function() {
        this.resetForm();
        $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },
    addClassRules: function(className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function(element) {
      var rules = {},
        classes = $(element).attr("class");
      if (classes) {
        $.each(classes.split(" "), function() {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },
    normalizeAttributeRule: function(rules, type, method, value) {
      if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
        value = Number(value);
        if (isNaN(value)) {
          value = undefined;
        }
      }
      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {
        rules[method] = true;
      }
    },
    attributeRules: function(element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method, value;
      for (method in $.validator.methods) {
        if (method === "required") {
          value = element.getAttribute(method);
          if (value === "") {
            value = true;
          }
          value = !!value;
        } else {
          value = $element.attr(method);
        }
        this.normalizeAttributeRule(rules, type, method, value);
      }
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }
      return rules;
    },
    dataRules: function(element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method, value;
      for (method in $.validator.methods) {
        value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
        this.normalizeAttributeRule(rules, type, method, value);
      }
      return rules;
    },
    staticRules: function(element) {
      var rules = {},
        validator = $.data(element.form, "validator");
      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },
    normalizeRules: function(rules, element) {
      $.each(rules, function(prop, val) {
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (typeof val.depends) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            $.data(element.form, "validator").resetElements($(element));
            delete rules[prop];
          }
        }
      });
      $.each(rules, function(rule, parameter) {
        rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
      });
      $.each(["minlength", "maxlength"], function() {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function() {
        var parts;
        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });
      if ($.validator.autoCreateRanges) {
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }
      return rules;
    },
    normalizeRule: function(data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function() {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },
    addMethod: function(name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    methods: {
      required: function(value, element, param) {
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return value.length > 0;
      },
      email: function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      url: function(value, element) {
        return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      date: function(value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },
      dateISO: function(value, element) {
        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      number: function(value, element) {
        return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      digits: function(value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      minlength: function(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },
      maxlength: function(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },
      rangelength: function(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || (length >= param[0] && length <= param[1]);
      },
      min: function(value, element, param) {
        return this.optional(element) || value >= param;
      },
      max: function(value, element, param) {
        return this.optional(element) || value <= param;
      },
      range: function(value, element, param) {
        return this.optional(element) || (value >= param[0] && value <= param[1]);
      },
      step: function(value, element, param) {
        var type = $(element).attr("type"),
          errorMessage = "Step attribute on input type " + type + " is not supported.",
          supportedTypes = ["text", "number", "range"],
          re = new RegExp("\\b" + type + "\\b"),
          notSupported = type && !re.test(supportedTypes.join()),
          decimalPlaces = function(num) {
            var match = ("" + num).match(/(?:\.(\d+))?$/);
            if (!match) {
              return 0;
            }
            return match[1] ? match[1].length : 0;
          },
          toInt = function(num) {
            return Math.round(num * Math.pow(10, decimals));
          },
          valid = true,
          decimals;
        if (notSupported) {
          throw new Error(errorMessage);
        }
        decimals = decimalPlaces(param);
        if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
          valid = false;
        }
        return this.optional(element) || valid;
      },
      equalTo: function(value, element, param) {
        var target = $(param);
        if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
          target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
            $(element).valid();
          });
        }
        return value === target.val();
      },
      remote: function(value, element, param, method) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        method = typeof method === "string" && method || "remote";
        var previous = this.previousValue(element, method),
          validator, data, optionDataString;
        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
        this.settings.messages[element.name][method] = previous.message;
        param = typeof param === "string" && {
          url: param
        } || param;
        optionDataString = $.param($.extend({
          data: value
        }, param.data));
        if (previous.old === optionDataString) {
          return previous.valid;
        }
        previous.old = optionDataString;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          context: validator.currentForm,
          success: function(response) {
            var valid = response === true || response === "true",
              errors, message, submitted;
            validator.settings.messages[element.name][method] = previous.originalMessage;
            if (valid) {
              submitted = validator.formSubmitted;
              validator.resetInternals();
              validator.toHide = validator.errorsFor(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              validator.invalid[element.name] = false;
              validator.showErrors();
            } else {
              errors = {};
              message = response || validator.defaultMessage(element, {
                method: method,
                parameters: value
              });
              errors[element.name] = previous.message = message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }
  });
  var pendingRequests = {},
    ajax;
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function(settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    ajax = $.ajax;
    $.ajax = function(settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
        port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }
  return $;
}));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function($) {
  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    try {
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }
  var config = $.cookie = function(key, value, options) {
    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);
      if (typeof options.expires === 'number') {
        var days = options.expires,
          t = options.expires = new Date();
        t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
      }
      return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
    }
    var result = key ? undefined : {},
      cookies = document.cookie ? document.cookie.split('; ') : [],
      i = 0,
      l = cookies.length;
    for (; i < l; i++) {
      var parts = cookies[i].split('='),
        name = decode(parts.shift()),
        cookie = parts.join('=');
      if (key === name) {
        result = read(cookie, value);
        break;
      }
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }
    return result;
  };
  config.defaults = {};
  $.removeCookie = function(key, options) {
    $.cookie(key, '', $.extend({}, options, {
      expires: -1
    }));
    return !$.cookie(key);
  };
}));
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(global, factory) {
  if (typeof define == 'function' && define.amd) {
    define('ev-emitter/ev-emitter', factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
}(typeof window != 'undefined' ? window : this, function() {
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function(eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    var events = this._events = this._events || {};
    var listeners = events[eventName] = events[eventName] || [];
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function(eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    this.on(eventName, listener);
    var onceEvents = this._onceEvents = this._onceEvents || {};
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function(eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function(eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    listeners = listeners.slice(0);
    args = args || [];
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i]
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        this.off(eventName, listener);
        delete onceListeners[listener];
      }
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
}));
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(window, factory) {
  'use strict';
  if (typeof define == 'function' && define.amd) {
    define(['ev-emitter/ev-emitter'], function(EvEmitter) {
      return factory(window, EvEmitter);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(window, require('ev-emitter'));
  } else {
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(typeof window !== 'undefined' ? window : this, function factory(window, EvEmitter) {
  var $ = window.jQuery;
  var console = window.console;

  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }
  var arraySlice = Array.prototype.slice;

  function makeArray(obj) {
    if (Array.isArray(obj)) {
      return obj;
    }
    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    if (isArrayLike) {
      return arraySlice.call(obj);
    }
    return [obj];
  }

  function ImagesLoaded(elem, options, onAlways) {
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    }
    var queryElem = elem;
    if (typeof elem == 'string') {
      queryElem = document.querySelectorAll(elem);
    }
    if (!queryElem) {
      console.error('Bad element for imagesLoaded ' + (queryElem || elem));
      return;
    }
    this.elements = makeArray(queryElem);
    this.options = extend({}, this.options);
    if (typeof options == 'function') {
      onAlways = options;
    } else {
      extend(this.options, options);
    }
    if (onAlways) {
      this.on('always', onAlways);
    }
    this.getImages();
    if ($) {
      this.jqDeferred = new $.Deferred();
    }
    setTimeout(this.check.bind(this));
  }
  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
  ImagesLoaded.prototype.options = {};
  ImagesLoaded.prototype.getImages = function() {
    this.images = [];
    this.elements.forEach(this.addElementImages, this);
  };
  ImagesLoaded.prototype.addElementImages = function(elem) {
    if (elem.nodeName == 'IMG') {
      this.addImage(elem);
    }
    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    }
    var nodeType = elem.nodeType;
    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    for (var i = 0; i < childImgs.length; i++) {
      var img = childImgs[i];
      this.addImage(img);
    }
    if (typeof this.options.background == 'string') {
      var children = elem.querySelectorAll(this.options.background);
      for (i = 0; i < children.length; i++) {
        var child = children[i];
        this.addElementBackgroundImages(child);
      }
    }
  };
  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };
  ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      return;
    }
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec(style.backgroundImage);
    while (matches !== null) {
      var url = matches && matches[2];
      if (url) {
        this.addBackground(url, elem);
      }
      matches = reURL.exec(style.backgroundImage);
    }
  };
  ImagesLoaded.prototype.addImage = function(img) {
    var loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };
  ImagesLoaded.prototype.addBackground = function(url, elem) {
    var background = new Background(url, elem);
    this.images.push(background);
  };
  ImagesLoaded.prototype.check = function() {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    if (!this.images.length) {
      this.complete();
      return;
    }

    function onProgress(image, elem, message) {
      setTimeout(function() {
        _this.progress(image, elem, message);
      });
    }
    this.images.forEach(function(loadingImage) {
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    });
  };
  ImagesLoaded.prototype.progress = function(image, elem, message) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    this.emitEvent('progress', [this, image, elem]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    }
    if (this.progressedCount == this.images.length) {
      this.complete();
    }
    if (this.options.debug && console) {
      console.log('progress: ' + message, image, elem);
    }
  };
  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent(eventName, [this]);
    this.emitEvent('always', [this]);
    if (this.jqDeferred) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[jqMethod](this);
    }
  };

  function LoadingImage(img) {
    this.img = img;
  }
  LoadingImage.prototype = Object.create(EvEmitter.prototype);
  LoadingImage.prototype.check = function() {
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    }
    this.proxyImage = new Image();
    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this);
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.proxyImage.src = this.img.src;
  };
  LoadingImage.prototype.getIsImageComplete = function() {
    return this.img.complete && this.img.naturalWidth;
  };
  LoadingImage.prototype.confirm = function(isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.img, message]);
  };
  LoadingImage.prototype.handleEvent = function(event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  LoadingImage.prototype.onload = function() {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };
  LoadingImage.prototype.onerror = function() {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };
  LoadingImage.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener('load', this);
    this.proxyImage.removeEventListener('error', this);
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }
  Background.prototype = Object.create(LoadingImage.prototype);
  Background.prototype.check = function() {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url;
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };
  Background.prototype.unbindEvents = function() {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };
  Background.prototype.confirm = function(isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.element, message]);
  };
  ImagesLoaded.makeJQueryPlugin = function(jQuery) {
    jQuery = jQuery || window.jQuery;
    if (!jQuery) {
      return;
    }
    $ = jQuery;
    $.fn.imagesLoaded = function(options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  };
  ImagesLoaded.makeJQueryPlugin();
  return ImagesLoaded;
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
      return factory(window, jQuery);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(window, require('jquery'));
  } else {
    window.jQueryBridget = factory(window, window.jQuery);
  }
}(window, function factory(window, jQuery) {
  'use strict';
  var arraySlice = Array.prototype.slice;
  var console = window.console;
  var logError = typeof console == 'undefined' ? function() {} : function(message) {
    console.error(message);
  };

  function jQueryBridget(namespace, PluginClass, $) {
    $ = $ || jQuery || window.jQuery;
    if (!$) {
      return;
    }
    if (!PluginClass.prototype.option) {
      PluginClass.prototype.option = function(opts) {
        if (!$.isPlainObject(opts)) {
          return;
        }
        this.options = $.extend(true, this.options, opts);
      };
    }
    $.fn[namespace] = function(arg0) {
      if (typeof arg0 == 'string') {
        var args = arraySlice.call(arguments, 1);
        return methodCall(this, arg0, args);
      }
      plainCall(this, arg0);
      return this;
    };

    function methodCall($elems, methodName, args) {
      var returnValue;
      var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
      $elems.each(function(i, elem) {
        var instance = $.data(elem, namespace);
        if (!instance) {
          logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
            pluginMethodStr);
          return;
        }
        var method = instance[methodName];
        if (!method || methodName.charAt(0) == '_') {
          logError(pluginMethodStr + ' is not a valid method');
          return;
        }
        var value = method.apply(instance, args);
        returnValue = returnValue === undefined ? value : returnValue;
      });
      return returnValue !== undefined ? returnValue : $elems;
    }

    function plainCall($elems, options) {
      $elems.each(function(i, elem) {
        var instance = $.data(elem, namespace);
        if (instance) {
          instance.option(options);
          instance._init();
        } else {
          instance = new PluginClass(elem, options);
          $.data(elem, namespace, instance);
        }
      });
    }
    updateJQuery($);
  }

  function updateJQuery($) {
    if (!$ || ($ && $.bridget)) {
      return;
    }
    $.bridget = jQueryBridget;
  }
  updateJQuery(jQuery || window.jQuery);
  return jQueryBridget;
}));
(function(global, factory) {
  if (typeof define == 'function' && define.amd) {
    define('ev-emitter/ev-emitter', factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
}(typeof window != 'undefined' ? window : this, function() {
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function(eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    var events = this._events = this._events || {};
    var listeners = events[eventName] = events[eventName] || [];
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function(eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    this.on(eventName, listener);
    var onceEvents = this._onceEvents = this._onceEvents || {};
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function(eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function(eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    listeners = listeners.slice(0);
    args = args || [];
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i]
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        this.off(eventName, listener);
        delete onceListeners[listener];
      }
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
}));
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('get-size/get-size', factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory();
  } else {
    window.getSize = factory();
  }
})(window, function factory() {
  'use strict';

  function getStyleSize(value) {
    var num = parseFloat(value);
    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}
  var logError = typeof console == 'undefined' ? noop : function(message) {
    console.error(message);
  };
  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }

  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
    }
    return style;
  }
  var isSetup = false;
  var isBoxSizeOuter;

  function setup() {
    if (isSetup) {
      return;
    }
    isSetup = true;
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';
    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
    body.removeChild(div);
  }

  function getSize(elem) {
    setup();
    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    }
    if (!elem || typeof elem != 'object' || !elem.nodeType) {
      return;
    }
    var style = getStyle(elem);
    if (style.display == 'none') {
      return getZeroSize();
    }
    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      size[measurement] = !isNaN(num) ? num : 0;
    }
    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width = styleWidth +
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }
    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height = styleHeight +
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }
    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
    return size;
  }
  return getSize;
});
(function(window, factory) {
  'use strict';
  if (typeof define == 'function' && define.amd) {
    define('desandro-matches-selector/matches-selector', factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory();
  } else {
    window.matchesSelector = factory();
  }
}(window, function factory() {
  'use strict';
  var matchesMethod = (function() {
    var ElemProto = window.Element.prototype;
    if (ElemProto.matches) {
      return 'matches';
    }
    if (ElemProto.matchesSelector) {
      return 'matchesSelector';
    }
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if (ElemProto[method]) {
        return method;
      }
    }
  })();
  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
}));
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
      return factory(window, matchesSelector);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(window, require('desandro-matches-selector'));
  } else {
    window.fizzyUIUtils = factory(window, window.matchesSelector);
  }
}(window, function factory(window, matchesSelector) {
  var utils = {};
  utils.extend = function(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  };
  utils.modulo = function(num, div) {
    return ((num % div) + div) % div;
  };
  var arraySlice = Array.prototype.slice;
  utils.makeArray = function(obj) {
    if (Array.isArray(obj)) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return [];
    }
    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    if (isArrayLike) {
      return arraySlice.call(obj);
    }
    return [obj];
  };
  utils.removeFrom = function(ary, obj) {
    var index = ary.indexOf(obj);
    if (index != -1) {
      ary.splice(index, 1);
    }
  };
  utils.getParent = function(elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;
      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  };
  utils.getQueryElement = function(elem) {
    if (typeof elem == 'string') {
      return document.querySelector(elem);
    }
    return elem;
  };
  utils.handleEvent = function(event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  utils.filterFindElements = function(elems, selector) {
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function(elem) {
      if (!(elem instanceof HTMLElement)) {
        return;
      }
      if (!selector) {
        ffElems.push(elem);
        return;
      }
      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      }
      var childElems = elem.querySelectorAll(selector);
      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  };
  utils.debounceMethod = function(_class, methodName, threshold) {
    threshold = threshold || 100;
    var method = _class.prototype[methodName];
    var timeoutName = methodName + 'Timeout';
    _class.prototype[methodName] = function() {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;
      this[timeoutName] = setTimeout(function() {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  };
  utils.docReady = function(callback) {
    var readyState = document.readyState;
    if (readyState == 'complete' || readyState == 'interactive') {
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  };
  utils.toDashed = function(str) {
    return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };
  var console = window.console;
  utils.htmlInit = function(WidgetClass, namespace) {
    utils.docReady(function() {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;
      elems.forEach(function(elem) {
        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          if (console) {
            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
          }
          return;
        }
        var instance = new WidgetClass(elem, options);
        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  };
  return utils;
}));
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(require('ev-emitter'), require('get-size'));
  } else {
    window.Outlayer = {};
    window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
  }
}(window, function factory(EvEmitter, getSize) {
  'use strict';

  function isEmptyObj(obj) {
    for (var prop in obj) {
      return false;
    }
    prop = null;
    return true;
  }
  var docElemStyle = document.documentElement.style;
  var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
  var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
  var transitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    transition: 'transitionend'
  } [transitionProperty];
  var vendorProperties = {
    transform: transformProperty,
    transition: transitionProperty,
    transitionDuration: transitionProperty + 'Duration',
    transitionProperty: transitionProperty + 'Property',
    transitionDelay: transitionProperty + 'Delay'
  };

  function Item(element, layout) {
    if (!element) {
      return;
    }
    this.element = element;
    this.layout = layout;
    this.position = {
      x: 0,
      y: 0
    };
    this._create();
  }
  var proto = Item.prototype = Object.create(EvEmitter.prototype);
  proto.constructor = Item;
  proto._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    };
    this.css({
      position: 'absolute'
    });
  };
  proto.handleEvent = function(event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  proto.getSize = function() {
    this.size = getSize(this.element);
  };
  proto.css = function(style) {
    var elemStyle = this.element.style;
    for (var prop in style) {
      var supportedProp = vendorProperties[prop] || prop;
      elemStyle[supportedProp] = style[prop];
    }
  };
  proto.getPosition = function() {
    var style = getComputedStyle(this.element);
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    var xValue = style[isOriginLeft ? 'left' : 'right'];
    var yValue = style[isOriginTop ? 'top' : 'bottom'];
    var x = parseFloat(xValue);
    var y = parseFloat(yValue);
    var layoutSize = this.layout.size;
    if (xValue.indexOf('%') != -1) {
      x = (x / 100) * layoutSize.width;
    }
    if (yValue.indexOf('%') != -1) {
      y = (y / 100) * layoutSize.height;
    }
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
    this.position.x = x;
    this.position.y = y;
  };
  proto.layoutPosition = function() {
    var layoutSize = this.layout.size;
    var style = {};
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
    var xProperty = isOriginLeft ? 'left' : 'right';
    var xResetProperty = isOriginLeft ? 'right' : 'left';
    var x = this.position.x + layoutSize[xPadding];
    style[xProperty] = this.getXValue(x);
    style[xResetProperty] = '';
    var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
    var yProperty = isOriginTop ? 'top' : 'bottom';
    var yResetProperty = isOriginTop ? 'bottom' : 'top';
    var y = this.position.y + layoutSize[yPadding];
    style[yProperty] = this.getYValue(y);
    style[yResetProperty] = '';
    this.css(style);
    this.emitEvent('layout', [this]);
  };
  proto.getXValue = function(x) {
    var isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
  };
  proto.getYValue = function(y) {
    var isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
  };
  proto._transitionTo = function(x, y) {
    this.getPosition();
    var curX = this.position.x;
    var curY = this.position.y;
    var didNotMove = x == this.position.x && y == this.position.y;
    this.setPosition(x, y);
    if (didNotMove && !this.isTransitioning) {
      this.layoutPosition();
      return;
    }
    var transX = x - curX;
    var transY = y - curY;
    var transitionStyle = {};
    transitionStyle.transform = this.getTranslate(transX, transY);
    this.transition({
      to: transitionStyle,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: true
    });
  };
  proto.getTranslate = function(x, y) {
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    x = isOriginLeft ? x : -x;
    y = isOriginTop ? y : -y;
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  };
  proto.goTo = function(x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };
  proto.moveTo = proto._transitionTo;
  proto.setPosition = function(x, y) {
    this.position.x = parseFloat(x);
    this.position.y = parseFloat(y);
  };
  proto._nonTransition = function(args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    for (var prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };
  proto.transition = function(args) {
    if (!parseFloat(this.layout.options.transitionDuration)) {
      this._nonTransition(args);
      return;
    }
    var _transition = this._transn;
    for (var prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    for (prop in args.to) {
      _transition.ingProperties[prop] = true;
      if (args.isCleaning) {
        _transition.clean[prop] = true;
      }
    }
    if (args.from) {
      this.css(args.from);
      var h = this.element.offsetHeight;
      h = null;
    }
    this.enableTransition(args.to);
    this.css(args.to);
    this.isTransitioning = true;
  };

  function toDashedAll(str) {
    return str.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });
  }
  var transitionProps = 'opacity,' + toDashedAll(transformProperty);
  proto.enableTransition = function() {
    if (this.isTransitioning) {
      return;
    }
    var duration = this.layout.options.transitionDuration;
    duration = typeof duration == 'number' ? duration + 'ms' : duration;
    this.css({
      transitionProperty: transitionProps,
      transitionDuration: duration,
      transitionDelay: this.staggerDelay || 0
    });
    this.element.addEventListener(transitionEndEvent, this, false);
  };
  proto.onwebkitTransitionEnd = function(event) {
    this.ontransitionend(event);
  };
  proto.onotransitionend = function(event) {
    this.ontransitionend(event);
  };
  var dashedVendorProperties = {
    '-webkit-transform': 'transform'
  };
  proto.ontransitionend = function(event) {
    if (event.target !== this.element) {
      return;
    }
    var _transition = this._transn;
    var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
    delete _transition.ingProperties[propertyName];
    if (isEmptyObj(_transition.ingProperties)) {
      this.disableTransition();
    }
    if (propertyName in _transition.clean) {
      this.element.style[event.propertyName] = '';
      delete _transition.clean[propertyName];
    }
    if (propertyName in _transition.onEnd) {
      var onTransitionEnd = _transition.onEnd[propertyName];
      onTransitionEnd.call(this);
      delete _transition.onEnd[propertyName];
    }
    this.emitEvent('transitionEnd', [this]);
  };
  proto.disableTransition = function() {
    this.removeTransitionStyles();
    this.element.removeEventListener(transitionEndEvent, this, false);
    this.isTransitioning = false;
  };
  proto._removeStyles = function(style) {
    var cleanStyle = {};
    for (var prop in style) {
      cleanStyle[prop] = '';
    }
    this.css(cleanStyle);
  };
  var cleanTransitionStyle = {
    transitionProperty: '',
    transitionDuration: '',
    transitionDelay: ''
  };
  proto.removeTransitionStyles = function() {
    this.css(cleanTransitionStyle);
  };
  proto.stagger = function(delay) {
    delay = isNaN(delay) ? 0 : delay;
    this.staggerDelay = delay + 'ms';
  };
  proto.removeElem = function() {
    this.element.parentNode.removeChild(this.element);
    this.css({
      display: ''
    });
    this.emitEvent('remove', [this]);
  };
  proto.remove = function() {
    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
      this.removeElem();
      return;
    }
    this.once('transitionEnd', function() {
      this.removeElem();
    });
    this.hide();
  };
  proto.reveal = function() {
    delete this.isHidden;
    this.css({
      display: ''
    });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
    this.transition({
      from: options.hiddenStyle,
      to: options.visibleStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd
    });
  };
  proto.onRevealTransitionEnd = function() {
    if (!this.isHidden) {
      this.emitEvent('reveal');
    }
  };
  proto.getHideRevealTransitionEndProperty = function(styleProperty) {
    var optionStyle = this.layout.options[styleProperty];
    if (optionStyle.opacity) {
      return 'opacity';
    }
    for (var prop in optionStyle) {
      return prop;
    }
  };
  proto.hide = function() {
    this.isHidden = true;
    this.css({
      display: ''
    });
    var options = this.layout.options;
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
    this.transition({
      from: options.visibleStyle,
      to: options.hiddenStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd
    });
  };
  proto.onHideTransitionEnd = function() {
    if (this.isHidden) {
      this.css({
        display: 'none'
      });
      this.emitEvent('hide');
    }
  };
  proto.destroy = function() {
    this.css({
      position: '',
      left: '',
      right: '',
      top: '',
      bottom: '',
      transition: '',
      transform: ''
    });
  };
  return Item;
}));
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function(window, factory) {
  'use strict';
  if (typeof define == 'function' && define.amd) {
    define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
      return factory(window, EvEmitter, getSize, utils, Item);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
  } else {
    window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
  }
}(window, function factory(window, EvEmitter, getSize, utils, Item) {
  'use strict';
  var console = window.console;
  var jQuery = window.jQuery;
  var noop = function() {};
  var GUID = 0;
  var instances = {};

  function Outlayer(element, options) {
    var queryElement = utils.getQueryElement(element);
    if (!queryElement) {
      if (console) {
        console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
      }
      return;
    }
    this.element = queryElement;
    if (jQuery) {
      this.$element = jQuery(this.element);
    }
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);
    var id = ++GUID;
    this.element.outlayerGUID = id;
    instances[id] = this;
    this._create();
    var isInitLayout = this._getOption('initLayout');
    if (isInitLayout) {
      this.layout();
    }
  }
  Outlayer.namespace = 'outlayer';
  Outlayer.Item = Item;
  Outlayer.defaults = {
    containerStyle: {
      position: 'relative'
    },
    initLayout: true,
    originLeft: true,
    originTop: true,
    resize: true,
    resizeContainer: true,
    transitionDuration: '0.4s',
    hiddenStyle: {
      opacity: 0,
      transform: 'scale(0.001)'
    },
    visibleStyle: {
      opacity: 1,
      transform: 'scale(1)'
    }
  };
  var proto = Outlayer.prototype;
  utils.extend(proto, EvEmitter.prototype);
  proto.option = function(opts) {
    utils.extend(this.options, opts);
  };
  proto._getOption = function(option) {
    var oldOption = this.constructor.compatOptions[option];
    return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
  };
  Outlayer.compatOptions = {
    initLayout: 'isInitLayout',
    horizontal: 'isHorizontal',
    layoutInstant: 'isLayoutInstant',
    originLeft: 'isOriginLeft',
    originTop: 'isOriginTop',
    resize: 'isResizeBound',
    resizeContainer: 'isResizingContainer'
  };
  proto._create = function() {
    this.reloadItems();
    this.stamps = [];
    this.stamp(this.options.stamp);
    utils.extend(this.element.style, this.options.containerStyle);
    var canBindResize = this._getOption('resize');
    if (canBindResize) {
      this.bindResize();
    }
  };
  proto.reloadItems = function() {
    this.items = this._itemize(this.element.children);
  };
  proto._itemize = function(elems) {
    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;
    var items = [];
    for (var i = 0; i < itemElems.length; i++) {
      var elem = itemElems[i];
      var item = new Item(elem, this);
      items.push(item);
    }
    return items;
  };
  proto._filterFindItemElements = function(elems) {
    return utils.filterFindElements(elems, this.options.itemSelector);
  };
  proto.getItemElements = function() {
    return this.items.map(function(item) {
      return item.element;
    });
  };
  proto.layout = function() {
    this._resetLayout();
    this._manageStamps();
    var layoutInstant = this._getOption('layoutInstant');
    var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, isInstant);
    this._isLayoutInited = true;
  };
  proto._init = proto.layout;
  proto._resetLayout = function() {
    this.getSize();
  };
  proto.getSize = function() {
    this.size = getSize(this.element);
  };
  proto._getMeasurement = function(measurement, size) {
    var option = this.options[measurement];
    var elem;
    if (!option) {
      this[measurement] = 0;
    } else {
      if (typeof option == 'string') {
        elem = this.element.querySelector(option);
      } else if (option instanceof HTMLElement) {
        elem = option;
      }
      this[measurement] = elem ? getSize(elem)[size] : option;
    }
  };
  proto.layoutItems = function(items, isInstant) {
    items = this._getItemsForLayout(items);
    this._layoutItems(items, isInstant);
    this._postLayout();
  };
  proto._getItemsForLayout = function(items) {
    return items.filter(function(item) {
      return !item.isIgnored;
    });
  };
  proto._layoutItems = function(items, isInstant) {
    this._emitCompleteOnItems('layout', items);
    if (!items || !items.length) {
      return;
    }
    var queue = [];
    items.forEach(function(item) {
      var position = this._getItemLayoutPosition(item);
      position.item = item;
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push(position);
    }, this);
    this._processLayoutQueue(queue);
  };
  proto._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    };
  };
  proto._processLayoutQueue = function(queue) {
    this.updateStagger();
    queue.forEach(function(obj, i) {
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
    }, this);
  };
  proto.updateStagger = function() {
    var stagger = this.options.stagger;
    if (stagger === null || stagger === undefined) {
      this.stagger = 0;
      return;
    }
    this.stagger = getMilliseconds(stagger);
    return this.stagger;
  };
  proto._positionItem = function(item, x, y, isInstant, i) {
    if (isInstant) {
      item.goTo(x, y);
    } else {
      item.stagger(i * this.stagger);
      item.moveTo(x, y);
    }
  };
  proto._postLayout = function() {
    this.resizeContainer();
  };
  proto.resizeContainer = function() {
    var isResizingContainer = this._getOption('resizeContainer');
    if (!isResizingContainer) {
      return;
    }
    var size = this._getContainerSize();
    if (size) {
      this._setContainerMeasure(size.width, true);
      this._setContainerMeasure(size.height, false);
    }
  };
  proto._getContainerSize = noop;
  proto._setContainerMeasure = function(measure, isWidth) {
    if (measure === undefined) {
      return;
    }
    var elemSize = this.size;
    if (elemSize.isBorderBox) {
      measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
        elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop +
        elemSize.borderTopWidth + elemSize.borderBottomWidth;
    }
    measure = Math.max(measure, 0);
    this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
  };
  proto._emitCompleteOnItems = function(eventName, items) {
    var _this = this;

    function onComplete() {
      _this.dispatchEvent(eventName + 'Complete', null, [items]);
    }
    var count = items.length;
    if (!items || !count) {
      onComplete();
      return;
    }
    var doneCount = 0;

    function tick() {
      doneCount++;
      if (doneCount == count) {
        onComplete();
      }
    }
    items.forEach(function(item) {
      item.once(eventName, tick);
    });
  };
  proto.dispatchEvent = function(type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);
    if (jQuery) {
      this.$element = this.$element || jQuery(this.element);
      if (event) {
        var $event = jQuery.Event(event);
        $event.type = type;
        this.$element.trigger($event, args);
      } else {
        this.$element.trigger(type, args);
      }
    }
  };
  proto.ignore = function(elem) {
    var item = this.getItem(elem);
    if (item) {
      item.isIgnored = true;
    }
  };
  proto.unignore = function(elem) {
    var item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  };
  proto.stamp = function(elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    this.stamps = this.stamps.concat(elems);
    elems.forEach(this.ignore, this);
  };
  proto.unstamp = function(elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    elems.forEach(function(elem) {
      utils.removeFrom(this.stamps, elem);
      this.unignore(elem);
    }, this);
  };
  proto._find = function(elems) {
    if (!elems) {
      return;
    }
    if (typeof elems == 'string') {
      elems = this.element.querySelectorAll(elems);
    }
    elems = utils.makeArray(elems);
    return elems;
  };
  proto._manageStamps = function() {
    if (!this.stamps || !this.stamps.length) {
      return;
    }
    this._getBoundingRect();
    this.stamps.forEach(this._manageStamp, this);
  };
  proto._getBoundingRect = function() {
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
    };
  };
  proto._manageStamp = noop;
  proto._getElementOffset = function(elem) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize(elem);
    var offset = {
      left: boundingRect.left - thisRect.left - size.marginLeft,
      top: boundingRect.top - thisRect.top - size.marginTop,
      right: thisRect.right - boundingRect.right - size.marginRight,
      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
    };
    return offset;
  };
  proto.handleEvent = utils.handleEvent;
  proto.bindResize = function() {
    window.addEventListener('resize', this);
    this.isResizeBound = true;
  };
  proto.unbindResize = function() {
    window.removeEventListener('resize', this);
    this.isResizeBound = false;
  };
  proto.onresize = function() {
    this.resize();
  };
  utils.debounceMethod(Outlayer, 'onresize', 100);
  proto.resize = function() {
    if (!this.isResizeBound || !this.needsResizeLayout()) {
      return;
    }
    this.layout();
  };
  proto.needsResizeLayout = function() {
    var size = getSize(this.element);
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  };
  proto.addItems = function(elems) {
    var items = this._itemize(elems);
    if (items.length) {
      this.items = this.items.concat(items);
    }
    return items;
  };
  proto.appended = function(elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    this.layoutItems(items, true);
    this.reveal(items);
  };
  proto.prepended = function(elems) {
    var items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    var previousItems = this.items.slice(0);
    this.items = items.concat(previousItems);
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(items, true);
    this.reveal(items);
    this.layoutItems(previousItems);
  };
  proto.reveal = function(items) {
    this._emitCompleteOnItems('reveal', items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function(item, i) {
      item.stagger(i * stagger);
      item.reveal();
    });
  };
  proto.hide = function(items) {
    this._emitCompleteOnItems('hide', items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function(item, i) {
      item.stagger(i * stagger);
      item.hide();
    });
  };
  proto.revealItemElements = function(elems) {
    var items = this.getItems(elems);
    this.reveal(items);
  };
  proto.hideItemElements = function(elems) {
    var items = this.getItems(elems);
    this.hide(items);
  };
  proto.getItem = function(elem) {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      if (item.element == elem) {
        return item;
      }
    }
  };
  proto.getItems = function(elems) {
    elems = utils.makeArray(elems);
    var items = [];
    elems.forEach(function(elem) {
      var item = this.getItem(elem);
      if (item) {
        items.push(item);
      }
    }, this);
    return items;
  };
  proto.remove = function(elems) {
    var removeItems = this.getItems(elems);
    this._emitCompleteOnItems('remove', removeItems);
    if (!removeItems || !removeItems.length) {
      return;
    }
    removeItems.forEach(function(item) {
      item.remove();
      utils.removeFrom(this.items, item);
    }, this);
  };
  proto.destroy = function() {
    var style = this.element.style;
    style.height = '';
    style.position = '';
    style.width = '';
    this.items.forEach(function(item) {
      item.destroy();
    });
    this.unbindResize();
    var id = this.element.outlayerGUID;
    delete instances[id];
    delete this.element.outlayerGUID;
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }
  };
  Outlayer.data = function(elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.outlayerGUID;
    return id && instances[id];
  };
  Outlayer.create = function(namespace, options) {
    var Layout = subclass(Outlayer);
    Layout.defaults = utils.extend({}, Outlayer.defaults);
    utils.extend(Layout.defaults, options);
    Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
    Layout.namespace = namespace;
    Layout.data = Outlayer.data;
    Layout.Item = subclass(Item);
    utils.htmlInit(Layout, namespace);
    if (jQuery && jQuery.bridget) {
      jQuery.bridget(namespace, Layout);
    }
    return Layout;
  };

  function subclass(Parent) {
    function SubClass() {
      Parent.apply(this, arguments);
    }
    SubClass.prototype = Object.create(Parent.prototype);
    SubClass.prototype.constructor = SubClass;
    return SubClass;
  }
  var msUnits = {
    ms: 1,
    s: 1000
  };

  function getMilliseconds(time) {
    if (typeof time == 'number') {
      return time;
    }
    var matches = time.match(/(^\d*\.?\d*)(\w*)/);
    var num = matches && matches[1];
    var unit = matches && matches[2];
    if (!num.length) {
      return 0;
    }
    num = parseFloat(num);
    var mult = msUnits[unit] || 1;
    return num * mult;
  }
  Outlayer.Item = Item;
  return Outlayer;
}));
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(require('outlayer'));
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(window.Outlayer);
  }
}(window, function factory(Outlayer) {
  'use strict';

  function Item() {
    Outlayer.Item.apply(this, arguments);
  }
  var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
  var _create = proto._create;
  proto._create = function() {
    this.id = this.layout.itemGUID++;
    _create.call(this);
    this.sortData = {};
  };
  proto.updateSortData = function() {
    if (this.isIgnored) {
      return;
    }
    this.sortData.id = this.id;
    this.sortData['original-order'] = this.id;
    this.sortData.random = Math.random();
    var getSortData = this.layout.options.getSortData;
    var sorters = this.layout._sorters;
    for (var key in getSortData) {
      var sorter = sorters[key];
      this.sortData[key] = sorter(this.element, this);
    }
  };
  var _destroy = proto.destroy;
  proto.destroy = function() {
    _destroy.apply(this, arguments);
    this.css({
      display: ''
    });
  };
  return Item;
}));
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(require('get-size'), require('outlayer'));
  } else {
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
  }
}(window, function factory(getSize, Outlayer) {
  'use strict';

  function LayoutMode(isotope) {
    this.isotope = isotope;
    if (isotope) {
      this.options = isotope.options[this.namespace];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }
  var proto = LayoutMode.prototype;
  var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
  facadeMethods.forEach(function(methodName) {
    proto[methodName] = function() {
      return Outlayer.prototype[methodName].apply(this.isotope, arguments);
    };
  });
  proto.needsVerticalResizeLayout = function() {
    var size = getSize(this.isotope.element);
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };
  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments);
  };
  proto.getColumnWidth = function() {
    this.getSegmentSize('column', 'Width');
  };
  proto.getRowHeight = function() {
    this.getSegmentSize('row', 'Height');
  };
  proto.getSegmentSize = function(segment, size) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    this._getMeasurement(segmentName, outerSize);
    if (this[segmentName]) {
      return;
    }
    var firstItemSize = this.getFirstItemSize();
    this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
  };
  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize(firstItem.element);
  };
  proto.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments);
  };
  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };
  LayoutMode.modes = {};
  LayoutMode.create = function(namespace, options) {
    function Mode() {
      LayoutMode.apply(this, arguments);
    }
    Mode.prototype = Object.create(proto);
    Mode.prototype.constructor = Mode;
    if (options) {
      Mode.options = options;
    }
    Mode.prototype.namespace = namespace;
    LayoutMode.modes[namespace] = Mode;
    return Mode;
  };
  return LayoutMode;
}));
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(require('outlayer'), require('get-size'));
  } else {
    window.Masonry = factory(window.Outlayer, window.getSize);
  }
}(window, function factory(Outlayer, getSize) {
  var Masonry = Outlayer.create('masonry');
  Masonry.compatOptions.fitWidth = 'isFitWidth';
  var proto = Masonry.prototype;
  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement('columnWidth', 'outerWidth');
    this._getMeasurement('gutter', 'outerWidth');
    this.measureColumns();
    this.colYs = [];
    for (var i = 0; i < this.cols; i++) {
      this.colYs.push(0);
    }
    this.maxY = 0;
    this.horizontalColIndex = 0;
  };
  proto.measureColumns = function() {
    this.getContainerWidth();
    if (!this.columnWidth) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
    }
    var columnWidth = this.columnWidth += this.gutter;
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    var excess = columnWidth - containerWidth % columnWidth;
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[mathMethod](cols);
    this.cols = Math.max(cols, 1);
  };
  proto.getContainerWidth = function() {
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    var size = getSize(container);
    this.containerWidth = size && size.innerWidth;
  };
  proto._getItemLayoutPosition = function(item) {
    item.getSize();
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
    colSpan = Math.min(colSpan, this.cols);
    var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[colPosMethod](colSpan, item);
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for (var i = colPosition.col; i < setMax; i++) {
      this.colYs[i] = setHeight;
    }
    return position;
  };
  proto._getTopColPosition = function(colSpan) {
    var colGroup = this._getTopColGroup(colSpan);
    var minimumY = Math.min.apply(Math, colGroup);
    return {
      col: colGroup.indexOf(minimumY),
      y: minimumY,
    };
  };
  proto._getTopColGroup = function(colSpan) {
    if (colSpan < 2) {
      return this.colYs;
    }
    var colGroup = [];
    var groupCount = this.cols + 1 - colSpan;
    for (var i = 0; i < groupCount; i++) {
      colGroup[i] = this._getColGroupY(i, colSpan);
    }
    return colGroup;
  };
  proto._getColGroupY = function(col, colSpan) {
    if (colSpan < 2) {
      return this.colYs[col];
    }
    var groupColYs = this.colYs.slice(col, col + colSpan);
    return Math.max.apply(Math, groupColYs);
  };
  proto._getHorizontalColPosition = function(colSpan, item) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    col = isOver ? 0 : col;
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
    return {
      col: col,
      y: this._getColGroupY(col, colSpan),
    };
  };
  proto._manageStamp = function(stamp) {
    var stampSize = getSize(stamp);
    var offset = this._getElementOffset(stamp);
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor(firstX / this.columnWidth);
    firstCol = Math.max(0, firstCol);
    var lastCol = Math.floor(lastX / this.columnWidth);
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min(this.cols - 1, lastCol);
    var isOriginTop = this._getOption('originTop');
    var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
      stampSize.outerHeight;
    for (var i = firstCol; i <= lastCol; i++) {
      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    }
  };
  proto._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var size = {
      height: this.maxY
    };
    if (this._getOption('fitWidth')) {
      size.width = this._getContainerFitWidth();
    }
    return size;
  };
  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    var i = this.cols;
    while (--i) {
      if (this.colYs[i] !== 0) {
        break;
      }
      unusedCols++;
    }
    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
  };
  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };
  return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(require('../layout-mode'), require('masonry-layout'));
  } else {
    factory(window.Isotope.LayoutMode, window.Masonry);
  }
}(window, function factory(LayoutMode, Masonry) {
  'use strict';
  var MasonryMode = LayoutMode.create('masonry');
  var proto = MasonryMode.prototype;
  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };
  for (var method in Masonry.prototype) {
    if (!keepModeMethods[method]) {
      proto[method] = Masonry.prototype[method];
    }
  }
  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    this.items = this.isotope.filteredItems;
    measureColumns.call(this);
  };
  var _getOption = proto._getOption;
  proto._getOption = function(option) {
    if (option == 'fitWidth') {
      return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply(this.isotope, arguments);
  };
  return MasonryMode;
}));
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], factory);
  } else if (typeof exports == 'object') {
    module.exports = factory(require('../layout-mode'));
  } else {
    factory(window.Isotope.LayoutMode);
  }
}(window, function factory(LayoutMode) {
  'use strict';
  var FitRows = LayoutMode.create('fitRows');
  var proto = FitRows.prototype;
  proto._resetLayout = function() {
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement('gutter', 'outerWidth');
  };
  proto._getItemLayoutPosition = function(item) {
    item.getSize();
    var itemWidth = item.size.outerWidth + this.gutter;
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if (this.x !== 0 && itemWidth + this.x > containerWidth) {
      this.x = 0;
      this.y = this.maxY;
    }
    var position = {
      x: this.x,
      y: this.y
    };
    this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
    this.x += itemWidth;
    return position;
  };
  proto._getContainerSize = function() {
    return {
      height: this.maxY
    };
  };
  return FitRows;
}));
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], factory);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(require('../layout-mode'));
  } else {
    factory(window.Isotope.LayoutMode);
  }
}(window, function factory(LayoutMode) {
  'use strict';
  var Vertical = LayoutMode.create('vertical', {
    horizontalAlignment: 0
  });
  var proto = Vertical.prototype;
  proto._resetLayout = function() {
    this.y = 0;
  };
  proto._getItemLayoutPosition = function(item) {
    item.getSize();
    var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
    var y = this.y;
    this.y += item.size.outerHeight;
    return {
      x: x,
      y: y
    };
  };
  proto._getContainerSize = function() {
    return {
      height: this.y
    };
  };
  return Vertical;
}));
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
  if (typeof define == 'function' && define.amd) {
    define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
      return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical'));
  } else {
    window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
  }
}(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
  var jQuery = window.jQuery;
  var trim = String.prototype.trim ? function(str) {
    return str.trim();
  } : function(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var Isotope = Outlayer.create('isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });
  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;
  var proto = Isotope.prototype;
  proto._create = function() {
    this.itemGUID = 0;
    this._sorters = {};
    this._getSorters();
    Outlayer.prototype._create.call(this);
    this.modes = {};
    this.filteredItems = this.items;
    this.sortHistory = ['original-order'];
    for (var name in LayoutMode.modes) {
      this._initLayoutMode(name);
    }
  };
  proto.reloadItems = function() {
    this.itemGUID = 0;
    Outlayer.prototype.reloadItems.call(this);
  };
  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply(this, arguments);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData(items);
    return items;
  };
  proto._initLayoutMode = function(name) {
    var Mode = LayoutMode.modes[name];
    var initialOpts = this.options[name] || {};
    this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
    this.modes[name] = new Mode(this);
  };
  proto.layout = function() {
    if (!this._isLayoutInited && this._getOption('initLayout')) {
      this.arrange();
      return;
    }
    this._layout();
  };
  proto._layout = function() {
    var isInstant = this._getIsInstant();
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(this.filteredItems, isInstant);
    this._isLayoutInited = true;
  };
  proto.arrange = function(opts) {
    this.option(opts);
    this._getIsInstant();
    var filtered = this._filter(this.items);
    this.filteredItems = filtered.matches;
    this._bindArrangeComplete();
    if (this._isInstant) {
      this._noTransition(this._hideReveal, [filtered]);
    } else {
      this._hideReveal(filtered);
    }
    this._sort();
    this._layout();
  };
  proto._init = proto.arrange;
  proto._hideReveal = function(filtered) {
    this.reveal(filtered.needReveal);
    this.hide(filtered.needHide);
  };
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };
  proto._bindArrangeComplete = function() {
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;

    function arrangeParallelCallback() {
      if (isLayoutComplete && isHideComplete && isRevealComplete) {
        _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
      }
    }
    this.once('layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once('hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once('revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };
  proto._filter = function(items) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];
    var test = this._getFilterTest(filter);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.isIgnored) {
        continue;
      }
      var isMatched = test(item);
      if (isMatched) {
        matches.push(item);
      }
      if (isMatched && item.isHidden) {
        hiddenMatched.push(item);
      } else if (!isMatched && !item.isHidden) {
        visibleUnmatched.push(item);
      }
    }
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };
  proto._getFilterTest = function(filter) {
    if (jQuery && this.options.isJQueryFiltering) {
      return function(item) {
        return jQuery(item.element).is(filter);
      };
    }
    if (typeof filter == 'function') {
      return function(item) {
        return filter(item.element);
      };
    }
    return function(item) {
      return matchesSelector(item.element, filter);
    };
  };
  proto.updateSortData = function(elems) {
    var items;
    if (elems) {
      elems = utils.makeArray(elems);
      items = this.getItems(elems);
    } else {
      items = this.items;
    }
    this._getSorters();
    this._updateItemsSortData(items);
  };
  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for (var key in getSortData) {
      var sorter = getSortData[key];
      this._sorters[key] = mungeSorter(sorter);
    }
  };
  proto._updateItemsSortData = function(items) {
    var len = items && items.length;
    for (var i = 0; len && i < len; i++) {
      var item = items[i];
      item.updateSortData();
    }
  };
  var mungeSorter = (function() {
    function mungeSorter(sorter) {
      if (typeof sorter != 'string') {
        return sorter;
      }
      var args = trim(sorter).split(' ');
      var query = args[0];
      var attrMatch = query.match(/^\[(.+)\]$/);
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter(attr, query);
      var parser = Isotope.sortDataParsers[args[1]];
      sorter = parser ? function(elem) {
        return elem && parser(getValue(elem));
      } : function(elem) {
        return elem && getValue(elem);
      };
      return sorter;
    }

    function getValueGetter(attr, query) {
      if (attr) {
        return function getAttribute(elem) {
          return elem.getAttribute(attr);
        };
      }
      return function getChildText(elem) {
        var child = elem.querySelector(query);
        return child && child.textContent;
      };
    }
    return mungeSorter;
  })();
  Isotope.sortDataParsers = {
    'parseInt': function(val) {
      return parseInt(val, 10);
    },
    'parseFloat': function(val) {
      return parseFloat(val);
    }
  };
  proto._sort = function() {
    if (!this.options.sortBy) {
      return;
    }
    var sortBys = utils.makeArray(this.options.sortBy);
    if (!this._getIsSameSortBy(sortBys)) {
      this.sortHistory = sortBys.concat(this.sortHistory);
    }
    var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
    this.filteredItems.sort(itemSorter);
  };
  proto._getIsSameSortBy = function(sortBys) {
    for (var i = 0; i < sortBys.length; i++) {
      if (sortBys[i] != this.sortHistory[i]) {
        return false;
      }
    }
    return true;
  };

  function getItemSorter(sortBys, sortAsc) {
    return function sorter(itemA, itemB) {
      for (var i = 0; i < sortBys.length; i++) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[sortBy];
        var b = itemB.sortData[sortBy];
        if (a > b || a < b) {
          var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return (a > b ? 1 : -1) * direction;
        }
      }
      return 0;
    };
  }
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[layoutMode];
    if (!mode) {
      throw new Error('No layout mode: ' + layoutMode);
    }
    mode.options = this.options[layoutMode];
    return mode;
  };
  proto._resetLayout = function() {
    Outlayer.prototype._resetLayout.call(this);
    this._mode()._resetLayout();
  };
  proto._getItemLayoutPosition = function(item) {
    return this._mode()._getItemLayoutPosition(item);
  };
  proto._manageStamp = function(stamp) {
    this._mode()._manageStamp(stamp);
  };
  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };
  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };
  proto.appended = function(elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    var filteredItems = this._filterRevealAdded(items);
    this.filteredItems = this.filteredItems.concat(filteredItems);
  };
  proto.prepended = function(elems) {
    var items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    this._resetLayout();
    this._manageStamps();
    var filteredItems = this._filterRevealAdded(items);
    this.layoutItems(this.filteredItems);
    this.filteredItems = filteredItems.concat(this.filteredItems);
    this.items = items.concat(this.items);
  };
  proto._filterRevealAdded = function(items) {
    var filtered = this._filter(items);
    this.hide(filtered.needHide);
    this.reveal(filtered.matches);
    this.layoutItems(filtered.matches, true);
    return filtered.matches;
  };
  proto.insert = function(elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    var i, item;
    var len = items.length;
    for (i = 0; i < len; i++) {
      item = items[i];
      this.element.appendChild(item.element);
    }
    var filteredInsertItems = this._filter(items).matches;
    for (i = 0; i < len; i++) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    for (i = 0; i < len; i++) {
      delete items[i].isLayoutInstant;
    }
    this.reveal(filteredInsertItems);
  };
  var _remove = proto.remove;
  proto.remove = function(elems) {
    elems = utils.makeArray(elems);
    var removeItems = this.getItems(elems);
    _remove.call(this, elems);
    var len = removeItems && removeItems.length;
    for (var i = 0; len && i < len; i++) {
      var item = removeItems[i];
      utils.removeFrom(this.filteredItems, item);
    }
  };
  proto.shuffle = function() {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };
  proto._noTransition = function(fn, args) {
    var transitionDuration = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var returnValue = fn.apply(this, args);
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map(function(item) {
      return item.element;
    });
  };
  return Isotope;
}));
! function($) {
  "use strict";
  var Typed = function(el, options) {
    this.el = $(el);
    this.options = $.extend({}, $.fn.typed.defaults, options);
    this.isInput = this.el.is('input');
    this.attr = this.options.attr;
    this.showCursor = this.isInput ? false : this.options.showCursor;
    this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()
    this.contentType = this.options.contentType;
    this.typeSpeed = this.options.typeSpeed;
    this.startDelay = this.options.startDelay;
    this.backSpeed = this.options.backSpeed;
    this.backDelay = this.options.backDelay;
    this.stringsElement = this.options.stringsElement;
    this.strings = this.options.strings;
    this.strPos = 0;
    this.arrayPos = 0;
    this.stopNum = 0;
    this.loop = this.options.loop;
    this.loopCount = this.options.loopCount;
    this.curLoop = 0;
    this.stop = false;
    this.cursorChar = this.options.cursorChar;
    this.shuffle = this.options.shuffle;
    this.sequence = [];
    this.build();
  };
  Typed.prototype = {
    constructor: Typed,
    init: function() {
      var self = this;
      self.timeout = setTimeout(function() {
        for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;
        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
        self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
      }, self.startDelay);
    },
    build: function() {
      var self = this;
      if (this.showCursor === true) {
        this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
        this.el.after(this.cursor);
      }
      if (this.stringsElement) {
        self.strings = [];
        this.stringsElement.hide();
        var strings = this.stringsElement.find('p');
        $.each(strings, function(key, value) {
          self.strings.push($(value).html());
        });
      }
      this.init();
    },
    typewrite: function(curString, curStrPos) {
      if (this.stop === true) {
        return;
      }
      var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
      var self = this;
      self.timeout = setTimeout(function() {
        var charPause = 0;
        var substr = curString.substr(curStrPos);
        if (substr.charAt(0) === '^') {
          var skip = 1;
          if (/^\^\d+/.test(substr)) {
            substr = /\d+/.exec(substr)[0];
            skip += substr.length;
            charPause = parseInt(substr);
          }
          curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
        }
        if (self.contentType === 'html') {
          var curChar = curString.substr(curStrPos).charAt(0)
          if (curChar === '<' || curChar === '&') {
            var tag = '';
            var endTag = '';
            if (curChar === '<') {
              endTag = '>'
            } else {
              endTag = ';'
            }
            while (curString.substr(curStrPos).charAt(0) !== endTag) {
              tag += curString.substr(curStrPos).charAt(0);
              curStrPos++;
            }
            curStrPos++;
            tag += endTag;
          }
        }
        self.timeout = setTimeout(function() {
          if (curStrPos === curString.length) {
            self.options.onStringTyped(self.arrayPos);
            if (self.arrayPos === self.strings.length - 1) {
              self.options.callback();
              self.curLoop++;
              if (self.loop === false || self.curLoop === self.loopCount)
                return;
            }
            self.timeout = setTimeout(function() {
              self.backspace(curString, curStrPos);
            }, self.backDelay);
          } else {
            if (curStrPos === 0)
              self.options.preStringTyped(self.arrayPos);
            var nextString = curString.substr(0, curStrPos + 1);
            if (self.attr) {
              self.el.attr(self.attr, nextString);
            } else {
              if (self.isInput) {
                self.el.val(nextString);
              } else if (self.contentType === 'html') {
                self.el.html(nextString);
              } else {
                self.el.text(nextString);
              }
            }
            curStrPos++;
            self.typewrite(curString, curStrPos);
          }
        }, charPause);
      }, humanize);
    },
    backspace: function(curString, curStrPos) {
      if (this.stop === true) {
        return;
      }
      var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
      var self = this;
      self.timeout = setTimeout(function() {
        if (self.contentType === 'html') {
          if (curString.substr(curStrPos).charAt(0) === '>') {
            var tag = '';
            while (curString.substr(curStrPos).charAt(0) !== '<') {
              tag -= curString.substr(curStrPos).charAt(0);
              curStrPos--;
            }
            curStrPos--;
            tag += '<';
          }
        }
        var nextString = curString.substr(0, curStrPos);
        if (self.attr) {
          self.el.attr(self.attr, nextString);
        } else {
          if (self.isInput) {
            self.el.val(nextString);
          } else if (self.contentType === 'html') {
            self.el.html(nextString);
          } else {
            self.el.text(nextString);
          }
        }
        if (curStrPos > self.stopNum) {
          curStrPos--;
          self.backspace(curString, curStrPos);
        } else if (curStrPos <= self.stopNum) {
          self.arrayPos++;
          if (self.arrayPos === self.strings.length) {
            self.arrayPos = 0;
            if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
            self.init();
          } else
            self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
        }
      }, humanize);
    },
    shuffleArray: function(array) {
      var tmp, current, top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    },
    reset: function() {
      var self = this;
      clearInterval(self.timeout);
      var id = this.el.attr('id');
      this.el.after('<span id="' + id + '"/>')
      this.el.remove();
      if (typeof this.cursor !== 'undefined') {
        this.cursor.remove();
      }
      self.options.resetCallback();
    }
  };
  $.fn.typed = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data('typed'),
        options = typeof option == 'object' && option;
      if (!data) $this.data('typed', (data = new Typed(this, options)));
      if (typeof option == 'string') data[option]();
    });
  };
  $.fn.typed.defaults = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    shuffle: false,
    backDelay: 500,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentType: 'html',
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
  };
}(window.jQuery);;
(function($, window, document, undefined) {
  function Owl(element, options) {
    this.settings = null;
    this.options = $.extend({}, Owl.Defaults, options);
    this.$element = $(element);
    this._handlers = {};
    this._plugins = {};
    this._supress = {};
    this._current = null;
    this._speed = null;
    this._coordinates = [];
    this._breakpoint = null;
    this._width = null;
    this._items = [];
    this._clones = [];
    this._mergers = [];
    this._widths = [];
    this._invalidated = {};
    this._pipe = [];
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    };
    this._states = {
      current: {},
      tags: {
        'initializing': ['busy'],
        'animating': ['busy'],
        'dragging': ['interacting']
      }
    };
    $.each(['onResize', 'onThrottledResize'], $.proxy(function(i, handler) {
      this._handlers[handler] = $.proxy(this[handler], this);
    }, this));
    $.each(Owl.Plugins, $.proxy(function(key, plugin) {
      this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
    }, this));
    $.each(Owl.Workers, $.proxy(function(priority, worker) {
      this._pipe.push({
        'filter': worker.filter,
        'run': $.proxy(worker.run, this)
      });
    }, this));
    this.setup();
    this.initialize();
  }
  Owl.Defaults = {
    items: 3,
    loop: false,
    center: false,
    rewind: false,
    checkVisibility: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    margin: 0,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    fallbackEasing: 'swing',
    slideTransition: '',
    info: false,
    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab'
  };
  Owl.Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer'
  };
  Owl.Type = {
    Event: 'event',
    State: 'state'
  };
  Owl.Plugins = {};
  Owl.Workers = [{
    filter: ['width', 'settings'],
    run: function() {
      this._width = this.$element.width();
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function(cache) {
      cache.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ['items', 'settings'],
    run: function() {
      this.$stage.children('.cloned').remove();
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function(cache) {
      var margin = this.settings.margin || '',
        grid = !this.settings.autoWidth,
        rtl = this.settings.rtl,
        css = {
          'width': 'auto',
          'margin-left': rtl ? margin : '',
          'margin-right': rtl ? '' : margin
        };
      !grid && this.$stage.children().css(css);
      cache.css = css;
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function(cache) {
      var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        merge = null,
        iterator = this._items.length,
        grid = !this.settings.autoWidth,
        widths = [];
      cache.items = {
        merge: false,
        width: width
      };
      while (iterator--) {
        merge = this._mergers[iterator];
        merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
        cache.items.merge = merge > 1 || cache.items.merge;
        widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
      }
      this._widths = widths;
    }
  }, {
    filter: ['items', 'settings'],
    run: function() {
      var clones = [],
        items = this._items,
        settings = this.settings,
        view = Math.max(settings.items * 2, 4),
        size = Math.ceil(items.length / 2) * 2,
        repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
        append = '',
        prepend = '';
      repeat /= 2;
      while (repeat > 0) {
        clones.push(this.normalize(clones.length / 2, true));
        append = append + items[clones[clones.length - 1]][0].outerHTML;
        clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
        prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
        repeat -= 1;
      }
      this._clones = clones;
      $(append).addClass('cloned').appendTo(this.$stage);
      $(prepend).addClass('cloned').prependTo(this.$stage);
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function() {
      var rtl = this.settings.rtl ? 1 : -1,
        size = this._clones.length + this._items.length,
        iterator = -1,
        previous = 0,
        current = 0,
        coordinates = [];
      while (++iterator < size) {
        previous = coordinates[iterator - 1] || 0;
        current = this._widths[this.relative(iterator)] + this.settings.margin;
        coordinates.push(previous + current * rtl);
      }
      this._coordinates = coordinates;
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function() {
      var padding = this.settings.stagePadding,
        coordinates = this._coordinates,
        css = {
          'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          'padding-left': padding || '',
          'padding-right': padding || ''
        };
      this.$stage.css(css);
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function(cache) {
      var iterator = this._coordinates.length,
        grid = !this.settings.autoWidth,
        items = this.$stage.children();
      if (grid && cache.items.merge) {
        while (iterator--) {
          cache.css.width = this._widths[this.relative(iterator)];
          items.eq(iterator).css(cache.css);
        }
      } else if (grid) {
        cache.css.width = cache.items.width;
        items.css(cache.css);
      }
    }
  }, {
    filter: ['items'],
    run: function() {
      this._coordinates.length < 1 && this.$stage.removeAttr('style');
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function(cache) {
      cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
      cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
      this.reset(cache.current);
    }
  }, {
    filter: ['position'],
    run: function() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ['width', 'position', 'items', 'settings'],
    run: function() {
      var rtl = this.settings.rtl ? 1 : -1,
        padding = this.settings.stagePadding * 2,
        begin = this.coordinates(this.current()) + padding,
        end = begin + this.width() * rtl,
        inner, outer, matches = [],
        i, n;
      for (i = 0, n = this._coordinates.length; i < n; i++) {
        inner = this._coordinates[i - 1] || 0;
        outer = Math.abs(this._coordinates[i]) + padding * rtl;
        if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
          matches.push(i);
        }
      }
      this.$stage.children('.active').removeClass('active');
      this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
      this.$stage.children('.center').removeClass('center');
      if (this.settings.center) {
        this.$stage.children().eq(this.current()).addClass('center');
      }
    }
  }];
  Owl.prototype.initializeStage = function() {
    this.$stage = this.$element.find('.' + this.settings.stageClass);
    if (this.$stage.length) {
      return;
    }
    this.$element.addClass(this.options.loadingClass);
    this.$stage = $('<' + this.settings.stageElement + '>', {
      "class": this.settings.stageClass
    }).wrap($('<div/>', {
      "class": this.settings.stageOuterClass
    }));
    this.$element.append(this.$stage.parent());
  };
  Owl.prototype.initializeItems = function() {
    var $items = this.$element.find('.owl-item');
    if ($items.length) {
      this._items = $items.get().map(function(item) {
        return $(item);
      });
      this._mergers = this._items.map(function() {
        return 1;
      });
      this.refresh();
      return;
    }
    this.replace(this.$element.children().not(this.$stage.parent()));
    if (this.isVisible()) {
      this.refresh();
    } else {
      this.invalidate('width');
    }
    this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
  };
  Owl.prototype.initialize = function() {
    this.enter('initializing');
    this.trigger('initialize');
    this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
    if (this.settings.autoWidth && !this.is('pre-loading')) {
      var imgs, nestedSelector, width;
      imgs = this.$element.find('img');
      nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
      width = this.$element.children(nestedSelector).width();
      if (imgs.length && width <= 0) {
        this.preloadAutoWidthImages(imgs);
      }
    }
    this.initializeStage();
    this.initializeItems();
    this.registerEventHandlers();
    this.leave('initializing');
    this.trigger('initialized');
  };
  Owl.prototype.isVisible = function() {
    return this.settings.checkVisibility ? this.$element.is(':visible') : true;
  };
  Owl.prototype.setup = function() {
    var viewport = this.viewport(),
      overwrites = this.options.responsive,
      match = -1,
      settings = null;
    if (!overwrites) {
      settings = $.extend({}, this.options);
    } else {
      $.each(overwrites, function(breakpoint) {
        if (breakpoint <= viewport && breakpoint > match) {
          match = Number(breakpoint);
        }
      });
      settings = $.extend({}, this.options, overwrites[match]);
      if (typeof settings.stagePadding === 'function') {
        settings.stagePadding = settings.stagePadding();
      }
      delete settings.responsive;
      if (settings.responsiveClass) {
        this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
      }
    }
    this.trigger('change', {
      property: {
        name: 'settings',
        value: settings
      }
    });
    this._breakpoint = match;
    this.settings = settings;
    this.invalidate('settings');
    this.trigger('changed', {
      property: {
        name: 'settings',
        value: this.settings
      }
    });
  };
  Owl.prototype.optionsLogic = function() {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = false;
      this.settings.merge = false;
    }
  };
  Owl.prototype.prepare = function(item) {
    var event = this.trigger('prepare', {
      content: item
    });
    if (!event.data) {
      event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item)
    }
    this.trigger('prepared', {
      content: event.data
    });
    return event.data;
  };
  Owl.prototype.update = function() {
    var i = 0,
      n = this._pipe.length,
      filter = $.proxy(function(p) {
        return this[p]
      }, this._invalidated),
      cache = {};
    while (i < n) {
      if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }
    this._invalidated = {};
    !this.is('valid') && this.enter('valid');
  };
  Owl.prototype.width = function(dimension) {
    dimension = dimension || Owl.Width.Default;
    switch (dimension) {
      case Owl.Width.Inner:
      case Owl.Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  };
  Owl.prototype.refresh = function() {
    this.enter('refreshing');
    this.trigger('refresh');
    this.setup();
    this.optionsLogic();
    this.$element.addClass(this.options.refreshClass);
    this.update();
    this.$element.removeClass(this.options.refreshClass);
    this.leave('refreshing');
    this.trigger('refreshed');
  };
  Owl.prototype.onThrottledResize = function() {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  };
  Owl.prototype.onResize = function() {
    if (!this._items.length) {
      return false;
    }
    if (this._width === this.$element.width()) {
      return false;
    }
    if (!this.isVisible()) {
      return false;
    }
    this.enter('resizing');
    if (this.trigger('resize').isDefaultPrevented()) {
      this.leave('resizing');
      return false;
    }
    this.invalidate('width');
    this.refresh();
    this.leave('resizing');
    this.trigger('resized');
  };
  Owl.prototype.registerEventHandlers = function() {
    if ($.support.transition) {
      this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
    }
    if (this.settings.responsive !== false) {
      this.on(window, 'resize', this._handlers.onThrottledResize);
    }
    if (this.settings.mouseDrag) {
      this.$element.addClass(this.options.dragClass);
      this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('dragstart.owl.core selectstart.owl.core', function() {
        return false
      });
    }
    if (this.settings.touchDrag) {
      this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    }
  };
  Owl.prototype.onDragStart = function(event) {
    var stage = null;
    if (event.which === 3) {
      return;
    }
    if ($.support.transform) {
      stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
      stage = {
        x: stage[stage.length === 16 ? 12 : 4],
        y: stage[stage.length === 16 ? 13 : 5]
      };
    } else {
      stage = this.$stage.position();
      stage = {
        x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
        y: stage.top
      };
    }
    if (this.is('animating')) {
      $.support.transform ? this.animate(stage.x) : this.$stage.stop()
      this.invalidate('position');
    }
    this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
    this.speed(0);
    this._drag.time = new Date().getTime();
    this._drag.target = $(event.target);
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this.pointer(event);
    $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
    $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
      var delta = this.difference(this._drag.pointer, this.pointer(event));
      $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
      if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
        return;
      }
      event.preventDefault();
      this.enter('dragging');
      this.trigger('drag');
    }, this));
  };
  Owl.prototype.onDragMove = function(event) {
    var minimum = null,
      maximum = null,
      pull = null,
      delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this.difference(this._drag.stage.start, delta);
    if (!this.is('dragging')) {
      return;
    }
    event.preventDefault();
    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = this.coordinates(this.maximum() + 1) - minimum;
      stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }
    this._drag.stage.current = stage;
    this.animate(stage.x);
  };
  Owl.prototype.onDragEnd = function(event) {
    var delta = this.difference(this._drag.pointer, this.pointer(event)),
      stage = this._drag.stage.current,
      direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
    $(document).off('.owl.core');
    this.$element.removeClass(this.options.grabClass);
    if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
      this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
      this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
      this.invalidate('position');
      this.update();
      this._drag.direction = direction;
      if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
        this._drag.target.one('click.owl.core', function() {
          return false;
        });
      }
    }
    if (!this.is('dragging')) {
      return;
    }
    this.leave('dragging');
    this.trigger('dragged');
  };
  Owl.prototype.closest = function(coordinate, direction) {
    var position = -1,
      pull = 30,
      width = this.width(),
      coordinates = this.coordinates();
    if (!this.settings.freeDrag) {
      $.each(coordinates, $.proxy(function(index, value) {
        if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
          position = index;
        } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
          position = index + 1;
        } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
          position = direction === 'left' ? index + 1 : index;
        }
        return position === -1;
      }, this));
    }
    if (!this.settings.loop) {
      if (this.op(coordinate, '>', coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }
    return position;
  };
  Owl.prototype.animate = function(coordinate) {
    var animate = this.speed() > 0;
    this.is('animating') && this.onTransitionEnd();
    if (animate) {
      this.enter('animating');
      this.trigger('translate');
    }
    if ($.support.transform3d && $.support.transition) {
      this.$stage.css({
        transform: 'translate3d(' + coordinate + 'px,0px,0px)',
        transition: (this.speed() / 1000) + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : '')
      });
    } else if (animate) {
      this.$stage.animate({
        left: coordinate + 'px'
      }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
    } else {
      this.$stage.css({
        left: coordinate + 'px'
      });
    }
  };
  Owl.prototype.is = function(state) {
    return this._states.current[state] && this._states.current[state] > 0;
  };
  Owl.prototype.current = function(position) {
    if (position === undefined) {
      return this._current;
    }
    if (this._items.length === 0) {
      return undefined;
    }
    position = this.normalize(position);
    if (this._current !== position) {
      var event = this.trigger('change', {
        property: {
          name: 'position',
          value: position
        }
      });
      if (event.data !== undefined) {
        position = this.normalize(event.data);
      }
      this._current = position;
      this.invalidate('position');
      this.trigger('changed', {
        property: {
          name: 'position',
          value: this._current
        }
      });
    }
    return this._current;
  };
  Owl.prototype.invalidate = function(part) {
    if ($.type(part) === 'string') {
      this._invalidated[part] = true;
      this.is('valid') && this.leave('valid');
    }
    return $.map(this._invalidated, function(v, i) {
      return i
    });
  };
  Owl.prototype.reset = function(position) {
    position = this.normalize(position);
    if (position === undefined) {
      return;
    }
    this._speed = 0;
    this._current = position;
    this.suppress(['translate', 'translated']);
    this.animate(this.coordinates(position));
    this.release(['translate', 'translated']);
  };
  Owl.prototype.normalize = function(position, relative) {
    var n = this._items.length,
      m = relative ? 0 : this._clones.length;
    if (!this.isNumeric(position) || n < 1) {
      position = undefined;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }
    return position;
  };
  Owl.prototype.relative = function(position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  };
  Owl.prototype.maximum = function(relative) {
    var settings = this.settings,
      maximum = this._coordinates.length,
      iterator, reciprocalItemsWidth, elementWidth;
    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      if (iterator) {
        reciprocalItemsWidth = this._items[--iterator].width();
        elementWidth = this.$element.width();
        while (iterator--) {
          reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
          if (reciprocalItemsWidth > elementWidth) {
            break;
          }
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }
    if (relative) {
      maximum -= this._clones.length / 2;
    }
    return Math.max(maximum, 0);
  };
  Owl.prototype.minimum = function(relative) {
    return relative ? 0 : this._clones.length / 2;
  };
  Owl.prototype.items = function(position) {
    if (position === undefined) {
      return this._items.slice();
    }
    position = this.normalize(position, true);
    return this._items[position];
  };
  Owl.prototype.mergers = function(position) {
    if (position === undefined) {
      return this._mergers.slice();
    }
    position = this.normalize(position, true);
    return this._mergers[position];
  };
  Owl.prototype.clones = function(position) {
    var odd = this._clones.length / 2,
      even = odd + this._items.length,
      map = function(index) {
        return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
      };
    if (position === undefined) {
      return $.map(this._clones, function(v, i) {
        return map(i)
      });
    }
    return $.map(this._clones, function(v, i) {
      return v === position ? map(i) : null
    });
  };
  Owl.prototype.speed = function(speed) {
    if (speed !== undefined) {
      this._speed = speed;
    }
    return this._speed;
  };
  Owl.prototype.coordinates = function(position) {
    var multiplier = 1,
      newPosition = position - 1,
      coordinate;
    if (position === undefined) {
      return $.map(this._coordinates, $.proxy(function(coordinate, index) {
        return this.coordinates(index);
      }, this));
    }
    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }
    coordinate = Math.ceil(coordinate);
    return coordinate;
  };
  Owl.prototype.duration = function(from, to, factor) {
    if (factor === 0) {
      return 0;
    }
    return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
  };
  Owl.prototype.to = function(position, speed) {
    var current = this.current(),
      revert = null,
      distance = position - this.relative(current),
      direction = (distance > 0) - (distance < 0),
      items = this._items.length,
      minimum = this.minimum(),
      maximum = this.maximum();
    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }
      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;
      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        this.reset(current);
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }
    this.speed(this.duration(current, position, speed));
    this.current(position);
    if (this.isVisible()) {
      this.update();
    }
  };
  Owl.prototype.next = function(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  };
  Owl.prototype.prev = function(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  };
  Owl.prototype.onTransitionEnd = function(event) {
    if (event !== undefined) {
      event.stopPropagation();
      if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
        return false;
      }
    }
    this.leave('animating');
    this.trigger('translated');
  };
  Owl.prototype.viewport = function() {
    var width;
    if (this.options.responsiveBaseElement !== window) {
      width = $(this.options.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn('Can not detect viewport width.');
    }
    return width;
  };
  Owl.prototype.replace = function(content) {
    this.$stage.empty();
    this._items = [];
    if (content) {
      content = (content instanceof jQuery) ? content : $(content);
    }
    if (this.settings.nestedItemSelector) {
      content = content.find('.' + this.settings.nestedItemSelector);
    }
    content.filter(function() {
      return this.nodeType === 1;
    }).each($.proxy(function(index, item) {
      item = this.prepare(item);
      this.$stage.append(item);
      this._items.push(item);
      this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }, this));
    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
    this.invalidate('items');
  };
  Owl.prototype.add = function(content, position) {
    var current = this.relative(this._current);
    position = position === undefined ? this._items.length : this.normalize(position, true);
    content = content instanceof jQuery ? content : $(content);
    this.trigger('add', {
      content: content,
      position: position
    });
    content = this.prepare(content);
    if (this._items.length === 0 || position === this._items.length) {
      this._items.length === 0 && this.$stage.append(content);
      this._items.length !== 0 && this._items[position - 1].after(content);
      this._items.push(content);
      this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    } else {
      this._items[position].before(content);
      this._items.splice(position, 0, content);
      this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }
    this._items[current] && this.reset(this._items[current].index());
    this.invalidate('items');
    this.trigger('added', {
      content: content,
      position: position
    });
  };
  Owl.prototype.remove = function(position) {
    position = this.normalize(position, true);
    if (position === undefined) {
      return;
    }
    this.trigger('remove', {
      content: this._items[position],
      position: position
    });
    this._items[position].remove();
    this._items.splice(position, 1);
    this._mergers.splice(position, 1);
    this.invalidate('items');
    this.trigger('removed', {
      content: null,
      position: position
    });
  };
  Owl.prototype.preloadAutoWidthImages = function(images) {
    images.each($.proxy(function(i, element) {
      this.enter('pre-loading');
      element = $(element);
      $(new Image()).one('load', $.proxy(function(e) {
        element.attr('src', e.target.src);
        element.css('opacity', 1);
        this.leave('pre-loading');
        !this.is('pre-loading') && !this.is('initializing') && this.refresh();
      }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
    }, this));
  };
  Owl.prototype.destroy = function() {
    this.$element.off('.owl.core');
    this.$stage.off('.owl.core');
    $(document).off('.owl.core');
    if (this.settings.responsive !== false) {
      window.clearTimeout(this.resizeTimer);
      this.off(window, 'resize', this._handlers.onThrottledResize);
    }
    for (var i in this._plugins) {
      this._plugins[i].destroy();
    }
    this.$stage.children('.cloned').remove();
    this.$stage.unwrap();
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$stage.remove();
    this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel');
  };
  Owl.prototype.op = function(a, o, b) {
    var rtl = this.settings.rtl;
    switch (o) {
      case '<':
        return rtl ? a > b : a < b;
      case '>':
        return rtl ? a < b : a > b;
      case '>=':
        return rtl ? a <= b : a >= b;
      case '<=':
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  };
  Owl.prototype.on = function(element, event, listener, capture) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, capture);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, listener);
    }
  };
  Owl.prototype.off = function(element, event, listener, capture) {
    if (element.removeEventListener) {
      element.removeEventListener(event, listener, capture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, listener);
    }
  };
  Owl.prototype.trigger = function(name, data, namespace, state, enter) {
    var status = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      handler = $.camelCase($.grep(['on', name, namespace], function(v) {
        return v
      }).join('-').toLowerCase()),
      event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({
        relatedTarget: this
      }, status, data));
    if (!this._supress[name]) {
      $.each(this._plugins, function(name, plugin) {
        if (plugin.onTrigger) {
          plugin.onTrigger(event);
        }
      });
      this.register({
        type: Owl.Type.Event,
        name: name
      });
      this.$element.trigger(event);
      if (this.settings && typeof this.settings[handler] === 'function') {
        this.settings[handler].call(this, event);
      }
    }
    return event;
  };
  Owl.prototype.enter = function(name) {
    $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
      if (this._states.current[name] === undefined) {
        this._states.current[name] = 0;
      }
      this._states.current[name]++;
    }, this));
  };
  Owl.prototype.leave = function(name) {
    $.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
      this._states.current[name]--;
    }, this));
  };
  Owl.prototype.register = function(object) {
    if (object.type === Owl.Type.Event) {
      if (!$.event.special[object.name]) {
        $.event.special[object.name] = {};
      }
      if (!$.event.special[object.name].owl) {
        var _default = $.event.special[object.name]._default;
        $.event.special[object.name]._default = function(e) {
          if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
            return _default.apply(this, arguments);
          }
          return e.namespace && e.namespace.indexOf('owl') > -1;
        };
        $.event.special[object.name].owl = true;
      }
    } else if (object.type === Owl.Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }
      this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
        return $.inArray(tag, this._states.tags[object.name]) === i;
      }, this));
    }
  };
  Owl.prototype.suppress = function(events) {
    $.each(events, $.proxy(function(index, event) {
      this._supress[event] = true;
    }, this));
  };
  Owl.prototype.release = function(events) {
    $.each(events, $.proxy(function(index, event) {
      delete this._supress[event];
    }, this));
  };
  Owl.prototype.pointer = function(event) {
    var result = {
      x: null,
      y: null
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }
    return result;
  };
  Owl.prototype.isNumeric = function(number) {
    return !isNaN(parseFloat(number));
  };
  Owl.prototype.difference = function(first, second) {
    return {
      x: first.x - second.x,
      y: first.y - second.y
    };
  };
  $.fn.owlCarousel = function(option) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var $this = $(this),
        data = $this.data('owl.carousel');
      if (!data) {
        data = new Owl(this, typeof option == 'object' && option);
        $this.data('owl.carousel', data);
        $.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function(i, event) {
          data.register({
            type: Owl.Type.Event,
            name: event
          });
          data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
            if (e.namespace && e.relatedTarget !== this) {
              this.suppress([event]);
              data[event].apply(this, [].slice.call(arguments, 1));
              this.release([event]);
            }
          }, data));
        });
      }
      if (typeof option == 'string' && option.charAt(0) !== '_') {
        data[option].apply(data, args);
      }
    });
  };
  $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  var AutoRefresh = function(carousel) {
    this._core = carousel;
    this._interval = null;
    this._visible = null;
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoRefresh) {
          this.watch();
        }
      }, this)
    };
    this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
  };
  AutoRefresh.Defaults = {
    autoRefresh: true,
    autoRefreshInterval: 500
  };
  AutoRefresh.prototype.watch = function() {
    if (this._interval) {
      return;
    }
    this._visible = this._core.isVisible();
    this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
  };
  AutoRefresh.prototype.refresh = function() {
    if (this._core.isVisible() === this._visible) {
      return;
    }
    this._visible = !this._visible;
    this._core.$element.toggleClass('owl-hidden', !this._visible);
    this._visible && (this._core.invalidate('width') && this._core.refresh());
  };
  AutoRefresh.prototype.destroy = function() {
    var handler, property;
    window.clearInterval(this._interval);
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  var Lazy = function(carousel) {
    this._core = carousel;
    this._loaded = [];
    this._handlers = {
      'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
        if (!e.namespace) {
          return;
        }
        if (!this._core.settings || !this._core.settings.lazyLoad) {
          return;
        }
        if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
          var settings = this._core.settings,
            n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
            i = ((settings.center && n * -1) || 0),
            position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
            clones = this._core.clones().length,
            load = $.proxy(function(i, v) {
              this.load(v)
            }, this);
          if (settings.lazyLoadEager > 0) {
            n += settings.lazyLoadEager;
            if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
          }
          while (i++ < n) {
            this.load(clones / 2 + this._core.relative(position));
            clones && $.each(this._core.clones(this._core.relative(position)), load);
            position++;
          }
        }
      }, this)
    };
    this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
  };
  Lazy.Defaults = {
    lazyLoad: false,
    lazyLoadEager: 0
  };
  Lazy.prototype.load = function(position) {
    var $item = this._core.$stage.children().eq(position),
      $elements = $item && $item.find('.owl-lazy');
    if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
      return;
    }
    $elements.each($.proxy(function(index, element) {
      var $element = $(element),
        image, url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');
      this._core.trigger('load', {
        element: $element,
        url: url
      }, 'lazy');
      if ($element.is('img')) {
        $element.one('load.owl.lazy', $.proxy(function() {
          $element.css('opacity', 1);
          this._core.trigger('loaded', {
            element: $element,
            url: url
          }, 'lazy');
        }, this)).attr('src', url);
      } else if ($element.is('source')) {
        $element.one('load.owl.lazy', $.proxy(function() {
          this._core.trigger('loaded', {
            element: $element,
            url: url
          }, 'lazy');
        }, this)).attr('srcset', url);
      } else {
        image = new Image();
        image.onload = $.proxy(function() {
          $element.css({
            'background-image': 'url("' + url + '")',
            'opacity': '1'
          });
          this._core.trigger('loaded', {
            element: $element,
            url: url
          }, 'lazy');
        }, this);
        image.src = url;
      }
    }, this));
    this._loaded.push($item.get(0));
  };
  Lazy.prototype.destroy = function() {
    var handler, property;
    for (handler in this.handlers) {
      this._core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  var AutoHeight = function(carousel) {
    this._core = carousel;
    this._previousHeight = null;
    this._handlers = {
      'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoHeight) {
          this.update();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
          this.update();
        }
      }, this),
      'loaded.owl.lazy': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
          this.update();
        }
      }, this)
    };
    this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
    this._intervalId = null;
    var refThis = this;
    $(window).on('load', function() {
      if (refThis._core.settings.autoHeight) {
        refThis.update();
      }
    });
    $(window).resize(function() {
      if (refThis._core.settings.autoHeight) {
        if (refThis._intervalId != null) {
          clearTimeout(refThis._intervalId);
        }
        refThis._intervalId = setTimeout(function() {
          refThis.update();
        }, 250);
      }
    });
  };
  AutoHeight.Defaults = {
    autoHeight: false,
    autoHeightClass: 'owl-height'
  };
  AutoHeight.prototype.update = function() {
    var start = this._core._current,
      end = start + this._core.settings.items,
      lazyLoadEnabled = this._core.settings.lazyLoad,
      visible = this._core.$stage.children().toArray().slice(start, end),
      heights = [],
      maxheight = 0;
    $.each(visible, function(index, item) {
      heights.push($(item).height());
    });
    maxheight = Math.max.apply(null, heights);
    if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
      maxheight = this._previousHeight;
    }
    this._previousHeight = maxheight;
    this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
  };
  AutoHeight.prototype.destroy = function() {
    var handler, property;
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] !== 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  var Video = function(carousel) {
    this._core = carousel;
    this._videos = {};
    this._playing = null;
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace) {
          this._core.register({
            type: 'state',
            name: 'playing',
            tags: ['interacting']
          });
        }
      }, this),
      'resize.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
          e.preventDefault();
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.is('resizing')) {
          this._core.$stage.find('.cloned .owl-video-frame').remove();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name === 'position' && this._playing) {
          this.stop();
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function(e) {
        if (!e.namespace) {
          return;
        }
        var $element = $(e.content).find('.owl-video');
        if ($element.length) {
          $element.css('display', 'none');
          this.fetch($element, $(e.content));
        }
      }, this)
    };
    this._core.options = $.extend({}, Video.Defaults, this._core.options);
    this._core.$element.on(this._handlers);
    this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
      this.play(e);
    }, this));
  };
  Video.Defaults = {
    video: false,
    videoHeight: false,
    videoWidth: false
  };
  Video.prototype.fetch = function(target, item) {
    var type = (function() {
        if (target.attr('data-vimeo-id')) {
          return 'vimeo';
        } else if (target.attr('data-vzaar-id')) {
          return 'vzaar'
        } else {
          return 'youtube';
        }
      })(),
      id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
      width = target.attr('data-width') || this._core.settings.videoWidth,
      height = target.attr('data-height') || this._core.settings.videoHeight,
      url = target.attr('href');
    if (url) {
      id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
      if (id[3].indexOf('youtu') > -1) {
        type = 'youtube';
      } else if (id[3].indexOf('vimeo') > -1) {
        type = 'vimeo';
      } else if (id[3].indexOf('vzaar') > -1) {
        type = 'vzaar';
      } else {
        throw new Error('Video URL not supported.');
      }
      id = id[6];
    } else {
      throw new Error('Missing video URL.');
    }
    this._videos[url] = {
      type: type,
      id: id,
      width: width,
      height: height
    };
    item.attr('data-video', url);
    this.thumbnail(target, this._videos[url]);
  };
  Video.prototype.thumbnail = function(target, video) {
    var tnLink, icon, path, dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
      customTn = target.find('img'),
      srcType = 'src',
      lazyClass = '',
      settings = this._core.settings,
      create = function(path) {
        icon = '<div class="owl-video-play-icon"></div>';
        if (settings.lazyLoad) {
          tnLink = $('<div/>', {
            "class": 'owl-video-tn ' + lazyClass,
            "srcType": path
          });
        } else {
          tnLink = $('<div/>', {
            "class": "owl-video-tn",
            "style": 'opacity:1;background-image:url(' + path + ')'
          });
        }
        target.after(tnLink);
        target.after(icon);
      };
    target.wrap($('<div/>', {
      "class": "owl-video-wrapper",
      "style": dimensions
    }));
    if (this._core.settings.lazyLoad) {
      srcType = 'data-src';
      lazyClass = 'owl-lazy';
    }
    if (customTn.length) {
      create(customTn.attr(srcType));
      customTn.remove();
      return false;
    }
    if (video.type === 'youtube') {
      path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
      create(path);
    } else if (video.type === 'vimeo') {
      $.ajax({
        type: 'GET',
        url: '//vimeo.com/api/v2/video/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data) {
          path = data[0].thumbnail_large;
          create(path);
        }
      });
    } else if (video.type === 'vzaar') {
      $.ajax({
        type: 'GET',
        url: '//vzaar.com/api/videos/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data) {
          path = data.framegrab_url;
          create(path);
        }
      });
    }
  };
  Video.prototype.stop = function() {
    this._core.trigger('stop', null, 'video');
    this._playing.find('.owl-video-frame').remove();
    this._playing.removeClass('owl-video-playing');
    this._playing = null;
    this._core.leave('playing');
    this._core.trigger('stopped', null, 'video');
  };
  Video.prototype.play = function(event) {
    var target = $(event.target),
      item = target.closest('.' + this._core.settings.itemClass),
      video = this._videos[item.attr('data-video')],
      width = video.width || '100%',
      height = video.height || this._core.$stage.height(),
      html, iframe;
    if (this._playing) {
      return;
    }
    this._core.enter('playing');
    this._core.trigger('play', null, 'video');
    item = this._core.items(this._core.relative(item.index()));
    this._core.reset(item.index());
    html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
    html.attr('height', height);
    html.attr('width', width);
    if (video.type === 'youtube') {
      html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
    } else if (video.type === 'vimeo') {
      html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
    } else if (video.type === 'vzaar') {
      html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
    }
    iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));
    this._playing = item.addClass('owl-video-playing');
  };
  Video.prototype.isInFullScreen = function() {
    var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    return element && $(element).parent().hasClass('owl-video-frame');
  };
  Video.prototype.destroy = function() {
    var handler, property;
    this._core.$element.off('click.owl.video');
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  var Animate = function(scope) {
    this.core = scope;
    this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    this.swapping = true;
    this.previous = undefined;
    this.next = undefined;
    this.handlers = {
      'change.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name == 'position') {
          this.previous = this.core.current();
          this.next = e.property.value;
        }
      }, this),
      'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
        if (e.namespace) {
          this.swapping = e.type == 'translated';
        }
      }, this),
      'translate.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
          this.swap();
        }
      }, this)
    };
    this.core.$element.on(this.handlers);
  };
  Animate.Defaults = {
    animateOut: false,
    animateIn: false
  };
  Animate.prototype.swap = function() {
    if (this.core.settings.items !== 1) {
      return;
    }
    if (!$.support.animation || !$.support.transition) {
      return;
    }
    this.core.speed(0);
    var left, clear = $.proxy(this.clear, this),
      previous = this.core.$stage.children().eq(this.previous),
      next = this.core.$stage.children().eq(this.next),
      incoming = this.core.settings.animateIn,
      outgoing = this.core.settings.animateOut;
    if (this.core.current() === this.previous) {
      return;
    }
    if (outgoing) {
      left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
      previous.one($.support.animation.end, clear).css({
        'left': left + 'px'
      }).addClass('animated owl-animated-out').addClass(outgoing);
    }
    if (incoming) {
      next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
    }
  };
  Animate.prototype.clear = function(e) {
    $(e.target).css({
      'left': ''
    }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
    this.core.onTransitionEnd();
  };
  Animate.prototype.destroy = function() {
    var handler, property;
    for (handler in this.handlers) {
      this.core.$element.off(handler, this.handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  var Autoplay = function(carousel) {
    this._core = carousel;
    this._call = null;
    this._time = 0;
    this._timeout = 0;
    this._paused = true;
    this._handlers = {
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name === 'settings') {
          if (this._core.settings.autoplay) {
            this.play();
          } else {
            this.stop();
          }
        } else if (e.namespace && e.property.name === 'position' && this._paused) {
          this._time = 0;
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.autoplay) {
          this.play();
        }
      }, this),
      'play.owl.autoplay': $.proxy(function(e, t, s) {
        if (e.namespace) {
          this.play(t, s);
        }
      }, this),
      'stop.owl.autoplay': $.proxy(function(e) {
        if (e.namespace) {
          this.stop();
        }
      }, this),
      'mouseover.owl.autoplay': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.pause();
        }
      }, this),
      'mouseleave.owl.autoplay': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.play();
        }
      }, this),
      'touchstart.owl.core': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.pause();
        }
      }, this),
      'touchend.owl.core': $.proxy(function() {
        if (this._core.settings.autoplayHoverPause) {
          this.play();
        }
      }, this)
    };
    this._core.$element.on(this._handlers);
    this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
  };
  Autoplay.Defaults = {
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: false
  };
  Autoplay.prototype._next = function(speed) {
    this._call = window.setTimeout($.proxy(this._next, this, speed), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read());
    if (this._core.is('interacting') || document.hidden) {
      return;
    }
    this._core.next(speed || this._core.settings.autoplaySpeed);
  }
  Autoplay.prototype.read = function() {
    return new Date().getTime() - this._time;
  };
  Autoplay.prototype.play = function(timeout, speed) {
    var elapsed;
    if (!this._core.is('rotating')) {
      this._core.enter('rotating');
    }
    timeout = timeout || this._core.settings.autoplayTimeout;
    elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
    if (this._paused) {
      this._time = this.read();
      this._paused = false;
    } else {
      window.clearTimeout(this._call);
    }
    this._time += this.read() % timeout - elapsed;
    this._timeout = timeout;
    this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
  };
  Autoplay.prototype.stop = function() {
    if (this._core.is('rotating')) {
      this._time = 0;
      this._paused = true;
      window.clearTimeout(this._call);
      this._core.leave('rotating');
    }
  };
  Autoplay.prototype.pause = function() {
    if (this._core.is('rotating') && !this._paused) {
      this._time = this.read();
      this._paused = true;
      window.clearTimeout(this._call);
    }
  };
  Autoplay.prototype.destroy = function() {
    var handler, property;
    this.stop();
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  'use strict';
  var Navigation = function(carousel) {
    this._core = carousel;
    this._initialized = false;
    this._pages = [];
    this._controls = {};
    this._templates = [];
    this.$element = this._core.$element;
    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    };
    this._handlers = {
      'prepared.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
            $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
        }
      }, this),
      'added.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 0, this._templates.pop());
        }
      }, this),
      'remove.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 1);
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name == 'position') {
          this.draw();
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && !this._initialized) {
          this._core.trigger('initialize', null, 'navigation');
          this.initialize();
          this.update();
          this.draw();
          this._initialized = true;
          this._core.trigger('initialized', null, 'navigation');
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._initialized) {
          this._core.trigger('refresh', null, 'navigation');
          this.update();
          this.draw();
          this._core.trigger('refreshed', null, 'navigation');
        }
      }, this)
    };
    this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
    this.$element.on(this._handlers);
  };
  Navigation.Defaults = {
    nav: false,
    navText: ['<span aria-label="' + 'Previous' + '">&#x2039;</span>', '<span aria-label="' + 'Next' + '">&#x203a;</span>'],
    navSpeed: false,
    navElement: 'button type="button" role="presentation"',
    navContainer: false,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    slideBy: 1,
    dotClass: 'owl-dot',
    dotsClass: 'owl-dots',
    dots: true,
    dotsEach: false,
    dotsData: false,
    dotsSpeed: false,
    dotsContainer: false
  };
  Navigation.prototype.initialize = function() {
    var override, settings = this._core.settings;
    this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
    this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function(e) {
      this.prev(settings.navSpeed);
    }, this));
    this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function(e) {
      this.next(settings.navSpeed);
    }, this));
    if (!settings.dotsData) {
      this._templates = [$('<button role="button">').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
    }
    this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
    this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
      var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
      e.preventDefault();
      this.to(index, settings.dotsSpeed);
    }, this));
    for (override in this._overrides) {
      this._core[override] = $.proxy(this[override], this);
    }
  };
  Navigation.prototype.destroy = function() {
    var handler, control, property, override, settings;
    settings = this._core.settings;
    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }
    for (control in this._controls) {
      if (control === '$relative' && settings.navContainer) {
        this._controls[control].html('');
      } else {
        this._controls[control].remove();
      }
    }
    for (override in this.overides) {
      this._core[override] = this._overrides[override];
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  Navigation.prototype.update = function() {
    var i, j, k, lower = this._core.clones().length / 2,
      upper = lower + this._core.items().length,
      maximum = this._core.maximum(true),
      settings = this._core.settings,
      size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
    if (settings.slideBy !== 'page') {
      settings.slideBy = Math.min(settings.slideBy, settings.items);
    }
    if (settings.dots || settings.slideBy == 'page') {
      this._pages = [];
      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          this._pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this._core.mergers(this._core.relative(i));
      }
    }
  };
  Navigation.prototype.draw = function() {
    var difference, settings = this._core.settings,
      disabled = this._core.items().length <= settings.items,
      index = this._core.relative(this._core.current()),
      loop = settings.loop || settings.rewind;
    this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
    if (settings.nav) {
      this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
      this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
    }
    this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
    if (settings.dots) {
      difference = this._pages.length - this._controls.$absolute.children().length;
      if (settings.dotsData && difference !== 0) {
        this._controls.$absolute.html(this._templates.join(''));
      } else if (difference > 0) {
        this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
      } else if (difference < 0) {
        this._controls.$absolute.children().slice(difference).remove();
      }
      this._controls.$absolute.find('.active').removeClass('active');
      this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    }
  };
  Navigation.prototype.onTrigger = function(event) {
    var settings = this._core.settings;
    event.page = {
      index: $.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
    };
  };
  Navigation.prototype.current = function() {
    var current = this._core.relative(this._core.current());
    return $.grep(this._pages, $.proxy(function(page, index) {
      return page.start <= current && page.end >= current;
    }, this)).pop();
  };
  Navigation.prototype.getPosition = function(successor) {
    var position, length, settings = this._core.settings;
    if (settings.slideBy == 'page') {
      position = $.inArray(this.current(), this._pages);
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[((position % length) + length) % length].start;
    } else {
      position = this._core.relative(this._core.current());
      length = this._core.items().length;
      successor ? position += settings.slideBy : position -= settings.slideBy;
    }
    return position;
  };
  Navigation.prototype.next = function(speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
  };
  Navigation.prototype.prev = function(speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
  };
  Navigation.prototype.to = function(position, speed, standard) {
    var length;
    if (!standard && this._pages.length) {
      length = this._pages.length;
      $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
    } else {
      $.proxy(this._overrides.to, this._core)(position, speed);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  'use strict';
  var Hash = function(carousel) {
    this._core = carousel;
    this._hashes = {};
    this.$element = this._core.$element;
    this._handlers = {
      'initialized.owl.carousel': $.proxy(function(e) {
        if (e.namespace && this._core.settings.startPosition === 'URLHash') {
          $(window).trigger('hashchange.owl.navigation');
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function(e) {
        if (e.namespace) {
          var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
          if (!hash) {
            return;
          }
          this._hashes[hash] = e.content;
        }
      }, this),
      'changed.owl.carousel': $.proxy(function(e) {
        if (e.namespace && e.property.name === 'position') {
          var current = this._core.items(this._core.relative(this._core.current())),
            hash = $.map(this._hashes, function(item, hash) {
              return item === current ? hash : null;
            }).join();
          if (!hash || window.location.hash.slice(1) === hash) {
            return;
          }
          window.location.hash = hash;
        }
      }, this)
    };
    this._core.options = $.extend({}, Hash.Defaults, this._core.options);
    this.$element.on(this._handlers);
    $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
      var hash = window.location.hash.substring(1),
        items = this._core.$stage.children(),
        position = this._hashes[hash] && items.index(this._hashes[hash]);
      if (position === undefined || position === this._core.current()) {
        return;
      }
      this._core.to(this._core.relative(position), false, true);
    }, this));
  };
  Hash.Defaults = {
    URLhashListener: false
  };
  Hash.prototype.destroy = function() {
    var handler, property;
    $(window).off('hashchange.owl.navigation');
    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }
    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
  var style = $('<support>').get(0).style,
    prefixes = 'Webkit Moz O ms'.split(' '),
    events = {
      transition: {
        end: {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd',
          transition: 'transitionend'
        }
      },
      animation: {
        end: {
          WebkitAnimation: 'webkitAnimationEnd',
          MozAnimation: 'animationend',
          OAnimation: 'oAnimationEnd',
          animation: 'animationend'
        }
      }
    },
    tests = {
      csstransforms: function() {
        return !!test('transform');
      },
      csstransforms3d: function() {
        return !!test('perspective');
      },
      csstransitions: function() {
        return !!test('transition');
      },
      cssanimations: function() {
        return !!test('animation');
      }
    };

  function test(property, prefixed) {
    var result = false,
      upper = property.charAt(0).toUpperCase() + property.slice(1);
    $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
      if (style[property] !== undefined) {
        result = prefixed ? property : true;
        return false;
      }
    });
    return result;
  }

  function prefixed(property) {
    return test(property, true);
  }
  if (tests.csstransitions()) {
    $.support.transition = new String(prefixed('transition'))
    $.support.transition.end = events.transition.end[$.support.transition];
  }
  if (tests.cssanimations()) {
    $.support.animation = new String(prefixed('animation'))
    $.support.animation.end = events.animation.end[$.support.animation];
  }
  if (tests.csstransforms()) {
    $.support.transform = new String(prefixed('transform'));
    $.support.transform3d = tests.csstransforms3d();
  }
})(window.Zepto || window.jQuery, window, document);
/*!
 Ridiculously Responsive Social Sharing Buttons
 Team: @dbox, @joshuatuscan
 Site: http://www.rrssb.ml
 Twitter: @therealkni

        ___           ___
       /__/|         /__/\        ___
      |  |:|         \  \:\      /  /\
      |  |:|          \  \:\    /  /:/
    __|  |:|      _____\__\:\  /__/::\
   /__/\_|:|____ /__/::::::::\ \__\/\:\__
   \  \:\/:::::/ \  \:\~~\~~\/    \  \:\/\
    \  \::/~~~~   \  \:\  ~~~      \__\::/
     \  \:\        \  \:\          /__/:/
      \  \:\        \  \:\         \__\/
       \__\/         \__\/
*/
+
(function(window, $, undefined) {
  'use strict';
  $.fn.rrssb = function(options) {
    var settings = $.extend({
      description: undefined,
      emailAddress: undefined,
      emailBody: undefined,
      emailSubject: undefined,
      image: undefined,
      title: undefined,
      url: undefined
    }, options);
    settings.emailSubject = settings.emailSubject || settings.title;
    settings.emailBody = settings.emailBody || ((settings.description ? settings.description : '') +
      (settings.url ? '\n\n' + settings.url : ''));
    for (var key in settings) {
      if (settings.hasOwnProperty(key) && settings[key] !== undefined) {
        settings[key] = encodeString(settings[key]);
      }
    };
    if (settings.url !== undefined) {
      $(this).find('.share-btn-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + settings.url);
      $(this).find('.share-btn-tumblr').attr('href', 'http://tumblr.com/share/link?url=' + settings.url + (settings.title !== undefined ? '&name=' + settings.title : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
      $(this).find('.share-btn-linkedin').attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + settings.url + (settings.title !== undefined ? '&title=' + settings.title : '') + (settings.description !== undefined ? '&summary=' + settings.description : ''));
      $(this).find('.share-btn-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + (settings.description !== undefined ? settings.description : '') + '%20' + settings.url);
      $(this).find('.share-btn-reddit').attr('href', 'http://www.reddit.com/submit?url=' + settings.url + (settings.description !== undefined ? '&text=' + settings.description : '') + (settings.title !== undefined ? '&title=' + settings.title : ''));
      $(this).find('.share-btn-googleplus').attr('href', 'https://plus.google.com/share?url=' + settings.url);
      $(this).find('.share-btn-pinterest').attr('href', 'http://pinterest.com/pin/create/button/?url=' + settings.url + ((settings.image !== undefined) ? '&amp;media=' + settings.image : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
      $(this).find('.share-btn-print').attr('href', 'javascript:window.print()');
      $(this).find('.share-btn-whatsapp').attr('href', 'whatsapp://send?text=' + (settings.description !== undefined ? settings.description + '%20' : (settings.title !== undefined ? settings.title + '%20' : '')) + settings.url);
    }
    if (settings.emailAddress !== undefined || settings.emailSubject) {
      $(this).find('.rrssb-email a').attr('href', 'mailto:' + (settings.emailAddress ? settings.emailAddress : '') + '?' + (settings.emailSubject !== undefined ? 'subject=' + settings.emailSubject : '') + (settings.emailBody !== undefined ? '&body=' + settings.emailBody : ''));
    }
  };
  var encodeString = function(string) {
    if (string !== undefined && string !== null) {
      if (string.match(/%[0-9a-f]{2}/i) !== null) {
        string = decodeURIComponent(string);
        encodeString(string);
      } else {
        return encodeURIComponent(string);
      }
    }
  };
  var rrssbInit = function() {
    $('.share-btn').each(function(index) {
      $(this).addClass('share-btn-' + (index + 1));
    });
  };
  var popupCenter = function(url, title, w, h) {
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 3) - (h / 3)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    if (newWindow && newWindow.focus) {
      newWindow.focus();
    }
  };
  $(document).ready(function() {
    try {
      $(document).on('click', '.share-btn', {}, function popUp(e) {
        var self = $(this);
        popupCenter(self.attr('href'), self.attr('title'), 580, 470);
        e.preventDefault();
      });
    } catch (e) {}
    rrssbInit();
  });
  window.rrssbInit = rrssbInit;
})(window, jQuery);;
(function($, window, undefined) {
  'use strict';
  $.Calendario = function(options, element) {
    this.$el = $(element);
    this._init(options);
  };
  $.Calendario.defaults = {
    weeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekabbrs: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthabbrs: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    displayWeekAbbr: false,
    displayMonthAbbr: false,
    startIn: 1,
    events: 'click',
    fillEmpty: true,
    feedParser: './feed/',
    zone: '00:00',
    checkUpdate: true
  };
  $.Calendario.prototype = {
    _init: function(options) {
      this.VERSION = '3.2.0';
      this.UNIQUE = '%{unique}%';
      this.options = $.extend(true, {}, $.Calendario.defaults, options);
      this.today = new Date();
      this.month = (isNaN(this.options.month) || this.options.month === null) ? this.today.getMonth() : this.options.month - 1;
      this.year = (isNaN(this.options.year) || this.options.year === null) ? this.today.getFullYear() : this.options.year;
      this.caldata = this._processCaldata(this.options.caldata);
      if (parseFloat($().jquery) >= 1.9 && this.options.events.indexOf('hover') != -1)
        this.logError('\'hover\' psuedo-name is not supported' + ' in jQuery 1.9+. Use \'mouseenter\' \'mouseleave\' events instead.');
      this.options.events = this.options.events.split(',');
      this.options.zone = this.options.zone.charAt(0) != '+' && this.options.zone.charAt(0) != '-' ? '+' + this.options.zone : this.options.zone;
      this._generateTemplate(true);
      this._initEvents();
    },
    _processCaldataObj: function(val, key) {
      if (typeof val !== 'object') val = {
        content: val,
        startTime: '00:00',
        endTime: '23:59',
        allDay: true
      };
      if (!val.content) this.logError('Content is missing in date ' + key);
      if (val.startTime && !val.endTime) val.endTime = parseInt(val.startTime.split(':')[0]) + 1 + ':' + val.startTime.split(':')[1];
      if (!val.startTime && !val.endTime) val = $.extend({}, val, {
        startTime: '00:00',
        endTime: '23:59',
        allDay: true
      });
      if (val.startTime && val.endTime && val.allDay === undefined) val.allDay = false;
      if (/^\d{2}-DD-\d{4}/.test(key) || /^\d{2}-DD-YYYY/.test(key)) {
        var det = /^(\d{2})-DD-(\d{4})/.exec(key) || /^(\d{2})-DD-YYYY/.exec(key),
          chkDate;
        if (det.length == 3) chkDate = new Date(det[2], det[1], 0);
        else if (det.length == 2) chkDate = new Date(this.year, det[1], 0)
        if (!val.startDate) val.startDate = 1;
        if (!val.endDate && chkDate.getDate() != 1) val.endDate = chkDate.getDate();
        if (!val.endDate && chkDate.getDate() == 1 && det.length == 3) val.endDate = chkDate.getDate();
      }
      return val;
    },
    _processCaldata: function(caldata) {
      var self = this;
      caldata = caldata || {};
      $.each(caldata, function(key, val) {
        if (/^\d{2}-\d{2}-\d{4}/.test(key) || /^\d{2}-\d{2}-YYYY/.test(key) || /^\d{2}-DD-YYYY/.test(key) || /^MM-\d{2}-YYYY/.test(key) || /^\d{2}-DD-YYYY/.test(key) || /^MM-\d{2}-\d{4}/.test(key) || /^\d{2}-DD-\d{4}/.test(key) || key == 'TODAY');
        if (Array.isArray(val)) {
          $.each(val, function(i, c) {
            val[i] = self._processCaldataObj(c, key);
          });
          caldata[key] = val;
        } else {
          caldata[key] = self._processCaldataObj(val, key);
        }
      });
      return caldata;
    },
    _propDate: function($cell, event) {
      var idx = $cell.index(),
        data = {
          allDay: [],
          content: [],
          endTime: [],
          startTime: []
        },
        dateProp = {
          day: $cell.children('span.fc-date').text(),
          month: this.month + 1,
          monthname: this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month],
          year: this.year,
          weekday: idx + this.options.startIn,
          weekdayname: this.options.weeks[(idx == 6 ? 0 : idx + this.options.startIn)]
        };
      $cell.children('div.fc-calendar-events').children('div.fc-calendar-event').each(function(i, e) {
        var $html = $('<div>' + $(e).html() + '</div>');
        data.startTime[i] = new Date($html.find('time.fc-starttime').attr('datetime'));
        data.endTime[i] = new Date($html.find('time.fc-endtime').attr('datetime'));
        data.allDay[i] = $html.find('time.fc-allday').attr('datetime') === 'true' ? true : false;
        $html.find('time').remove();
        data.content[i] = $html.html();
      });
      if (dateProp.day) this.options[event]($cell, data, dateProp);
    },
    _initEvents: function() {
      var self = this,
        event = [],
        calendarioEventNameFormat = [];
      for (var i = 0; i < self.options.events.length; i++) {
        event[i] = self.options.events[i].toLowerCase().trim();
        calendarioEventNameFormat[i] = 'onDay' + event[i].charAt(0).toUpperCase() + event[i].slice(1);
        if (this.options[calendarioEventNameFormat[i]] === undefined)
          this.options[calendarioEventNameFormat[i]] = function($el, $content, dateProperties) {
            return false;
          };
        this.$el.on(event[i] + '.calendario', 'div.fc-row > div', function(e) {
          if (e.type == 'mouseenter' || e.type == 'mouseleave') e.type = $.inArray(e.type, event) == -1 ? 'hover' : e.type;
          self._propDate($(this), calendarioEventNameFormat[$.inArray(e.type, event)]);
        });
      }
      this.$el.on('shown.calendar.calendario', function(e, instance) {});
      this.$el.delay(new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1, 0, 0, 0) - new Date().getTime()).queue(function() {
        self.today = new Date();
        if (self.today.getMonth() == self.month || self.today.getMonth() + 1 == self.month) self._generateTemplate(true);
        self.$el.trigger($.Event('newday.calendar.calendario'));
      });
    },
    _generateTemplate: function(firstRun, callback) {
      var head = this._getHead(),
        body = this._getBody(),
        rowClass;
      switch (this.rowTotal) {
        case 4:
          rowClass = 'fc-four-rows';
          break;
        case 5:
          rowClass = 'fc-five-rows';
          break;
        case 6:
          rowClass = 'fc-six-rows';
          break;
      }
      this.$cal = $('<div class="fc-calendar ' + rowClass + '">').append(head, body);
      this.$el.find('div.fc-calendar').remove().end().append(this.$cal);
      this.$el.find('.fc-emptydate').parent().css({
        'background': 'transparent',
        'cursor': 'default'
      });
      if (!firstRun) this.$el.trigger($.Event('shown.calendario'));
      if (callback) callback.call();
    },
    _getHead: function() {
      var html = '<div class="fc-head">';
      for (var i = 0; i <= 6; i++) {
        var pos = i + this.options.startIn,
          j = pos > 6 ? pos - 6 - 1 : pos;
        html += '<div>' + (this.options.displayWeekAbbr ? this.options.weekabbrs[j] : this.options.weeks[j]) + '</div>';
      }
      return html + '</div>';
    },
    _parseDataToDay: function(data, day, other) {
      var content = '';
      if (!other) {
        if (Array.isArray(data)) content = this._convertDayArray(data, day);
        else content = this._wrapDay(data, day, true);
      } else {
        if (!Array.isArray(data)) data = [data];
        for (var i = 0; i < data.length; i++) {
          if (this.month != 1 && (day >= data[i].startDate) && (day <= data[i].endDate)) content += this._wrapDay(data[i], day, true);
          else if (this.month == 1 && (day >= data[i].startDate)) {
            if (data[i].endDate && (day <= data[i].endDate)) content += this._wrapDay(data[i], day, true);
            else if (!data[i].endDate) content += this._wrapDay(data[i], day, true);
          }
        }
      }
      return content;
    },
    _toDateTime: function(time, day, start) {
      var zoneH = parseInt(this.options.zone.split(':')[0]),
        zoneM = parseInt(this.options.zone.charAt(0) + this.options.zone.split(':')[1]),
        hour = parseInt(time.split(':')[0]) - zoneH,
        minutes = parseInt(time.split(':')[1]) - zoneM,
        d = new Date(Date.UTC(this.year, this.month, day, hour, minutes, 0, 0));
      if (start) {
        var hStart = parseInt(start.split(':')[0]) - zoneH,
          mStart = parseInt(start.split(':')[1]) - zoneM;
        if (d.getTime() - new Date(Date.UTC(this.year, this.month, day, hStart, mStart, 0, 0)).getTime() < 0)
          d = new Date(Date.UTC(this.year, this.month, day + 1, hour, minutes, 0, 0));
      }
      return d.toISOString();
    },
    _timeHtml: function(day, date) {
      var content = day.content;
      content += '<time class="fc-allday" datetime="' + day.allDay + '"></time>';
      content += '<time class="fc-starttime" datetime="' + this._toDateTime(day.startTime, date) + '">' + day.startTime + '</time>';
      content += '<time class="fc-endtime" datetime="' + this._toDateTime(day.endTime, date, day.startTime) + '">' + day.endTime + '</time>';
      return content;
    },
    _wrapDay: function(day, date, wrap) {
      if (date) {
        if (wrap) return '<div class="fc-calendar-event">' + this._timeHtml(day, date) + '</div>';
        else return this._timeHtml(day, date);
      } else return '<div class="fc-calendar-event">' + day + '</div>';
    },
    _convertDayArray: function(day, date) {
      var wrap_days = []
      for (var i = 0; i < day.length; i++) {
        wrap_days[i] = this._wrapDay(day[i], date, false);
      }
      return this._wrapDay(wrap_days.join('</div><div class="fc-calendar-event">'));
    },
    _getBody: function() {
      var d = new Date(this.year, this.month + 1, 0),
        monthLength = d.getDate(),
        firstDay = new Date(this.year, d.getMonth(), 1),
        pMonthLength = new Date(this.year, this.month, 0).getDate();
      this.startingDay = firstDay.getDay();
      var html = '<div class="fc-body"><div class="fc-row">',
        day = 1;
      for (var i = 0; i < 7; i++) {
        for (var j = 0; j <= 6; j++) {
          var pos = this.startingDay - this.options.startIn,
            p = pos < 0 ? 6 + pos + 1 : pos,
            inner = '',
            today = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day === this.today.getDate(),
            past = this.year < this.today.getFullYear() || this.month < this.today.getMonth() && this.year === this.today.getFullYear() || this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day < this.today.getDate(),
            content = '';
          if (this.options.fillEmpty && (j < p || i > 0)) {
            if (day > monthLength) {
              inner = '<span class="fc-date fc-emptydate">' + (day - monthLength) + '</span><span class="fc-weekday">';
              ++day;
            } else if (day == 1) {
              inner = '<span class="fc-date fc-emptydate">' + (pMonthLength - p + 1) + '</span><span class="fc-weekday">';
              ++pMonthLength;
            }
            inner += this.options.weekabbrs[j + this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn] + '</span>';
          }
          if (day <= monthLength && (i > 0 || j >= p)) {
            inner = '<span class="fc-date">' + day + '</span><span class="fc-weekday">' + this.options.weekabbrs[j +
              this.options.startIn > 6 ? j + this.options.startIn - 6 - 1 : j + this.options.startIn] + '</span>';
            var strdate = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-' + (day < 10 ? '0' + day : day) + '-' + this.year,
              dayData = this.caldata[strdate],
              strdateyear = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-' + (day < 10 ? '0' + day : day) + '-YYYY',
              dayDataYear = this.caldata[strdateyear],
              strdatemonth = 'MM-' + (day < 10 ? '0' + day : day) + '-' + this.year,
              dayDataMonth = this.caldata[strdatemonth],
              strdatemonthyear = 'MM' + '-' + (day < 10 ? '0' + day : day) + '-YYYY',
              dayDataMonthYear = this.caldata[strdatemonthyear],
              strdatemonthlyyear = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-DD-' + this.year,
              dayDataMonthlyYear = this.caldata[strdatemonthlyyear],
              strdatemonthly = (this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1) + '-DD-YYYY',
              dayDataMonthly = this.caldata[strdatemonthly];
            if (today && this.caldata.TODAY) content += this._parseDataToDay(this.caldata.TODAY, day);
            if (dayData) content += this._parseDataToDay(dayData, day);
            if (dayDataMonth) content += this._parseDataToDay(dayDataMonth, day);
            if (dayDataMonthlyYear) content += this._parseDataToDay(dayDataMonthlyYear, day, true);
            if (dayDataMonthly) content += this._parseDataToDay(dayDataMonthly, day, true);
            if (dayDataMonthYear) content += this._parseDataToDay(dayDataMonthYear, day);
            if (dayDataYear) content += this._parseDataToDay(dayDataYear, day);
            if (content !== '') inner += '<div class="fc-calendar-events">' + content + '</div>';
            ++day;
          } else {
            today = false;
          }
          var cellClasses = today ? 'fc-today ' : '';
          if (past) cellClasses += 'fc-past ';
          else cellClasses += 'fc-future ';
          if (content !== '') cellClasses += 'fc-content';
          html += (cellClasses !== '' ? '<div class="' + cellClasses.trim() + '">' : '<div>') + inner + '</div>';
        }
        if (day > monthLength) {
          this.rowTotal = i + 1;
          break;
        } else {
          html += '</div><div class="fc-row">';
        }
      }
      return html + '</div></div>';
    },
    _move: function(period, dir, callback) {
      if (dir === 'previous') {
        if (period === 'month') {
          this.year = this.month > 0 ? this.year : --this.year;
          this.month = this.month > 0 ? --this.month : 11;
        } else if (period === 'year') this.year = --this.year;
      } else if (dir === 'next') {
        if (period === 'month') {
          this.year = this.month < 11 ? this.year : ++this.year;
          this.month = this.month < 11 ? ++this.month : 0;
        } else if (period === 'year') this.year = ++this.year;
      }
      this._generateTemplate(false, callback);
    },
    option: function(option, value) {
      if (value) this.options[option] = value;
      else return this.options[option];
    },
    getYear: function() {
      return this.year;
    },
    getMonth: function() {
      return this.month + 1;
    },
    getMonthName: function() {
      return this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month];
    },
    getCell: function(day) {
      var row = Math.floor((day + this.startingDay - this.options.startIn - 1) / 7),
        pos = day + this.startingDay - this.options.startIn - (row * 7) - 1;
      return this.$cal.find('div.fc-body').children('div.fc-row').eq(row).children('div').eq(pos);
    },
    setData: function(caldata, clear) {
      caldata = this._processCaldata(caldata);
      if (clear) this.caldata = caldata;
      else $.extend(this.caldata, caldata);
      this._generateTemplate(false);
    },
    gotoNow: function(callback) {
      this.month = this.today.getMonth();
      this.year = this.today.getFullYear();
      this._generateTemplate(false, callback);
    },
    gotoMonth: function(month, year, callback) {
      this.month = month - 1;
      this.year = year;
      this._generateTemplate(false, callback);
    },
    gotoPreviousMonth: function(callback) {
      this._move('month', 'previous', callback);
    },
    gotoPreviousYear: function(callback) {
      this._move('year', 'previous', callback);
    },
    gotoNextMonth: function(callback) {
      this._move('month', 'next', callback);
    },
    gotoNextYear: function(callback) {
      this._move('year', 'next', callback);
    },
    feed: function(callback) {
      var self = this;
      $.post(self.options.feedParser, {
        dates: this.caldata
      }).always(function(data) {
        if (callback) callback.call(this, JSON.parse(data).hevent);
      });
    },
    version: function() {
      return this.VERSION;
    }
  };
  var logError = function(message) {
    throw new Error(message);
  };
  $.fn.calendario = function(options) {
    var instance = $.data(this, 'calendario');
    if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function() {
        if (!instance) {
          logError("Cannot call methods on calendario prior to initialization; Attempted to call method '" + options + "'");
          return;
        }
        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("No such method '" + options + "' for calendario instance.");
        }
        instance[options].apply(instance, args);
      });
    } else {
      this.each(function() {
        if (instance) instance._init();
        else instance = $.data(this, 'calendario', new $.Calendario(options, this));
      });
    }
    instance.$el.trigger($.Event('shown.calendar.calendario'), [instance]);
    return instance;
  };
})(jQuery, window);
(function($) {
  'use strict';
  $(window).on("load", function() {
    var preload = $('.preloader');
    preload.find('.spinner').fadeOut(function() {
      preload.fadeOut(function() {});
    });
  });
  var width = $(window).width();
  var height = $(window).height();
  var header_offset_top = 15;
  if (width <= 540) {
    header_offset_top = 136;
  }
  var container = $('.container');
  var card_items = $('.card-inner');
  var animation_in = container.data('animation-in');
  var animation_out = container.data('animation-out');
  var menu_items = $('.top-menu li');
  if ($('.top-menu-onepage').length) {
    $('.top-menu').on('click', 'a', function() {
      var width = $(window).width();
      var id = $(this).attr('href');
      if (id == '') id = '#home';
      var card_item = $('#card-' + id.replace('#', ''));
      var h = parseFloat(card_item.offset().top);
      var menu_item = $(this).closest('li');
      if (id != '#home') {
        window.location.hash = id;
      } else {
        history.replaceState(null, null, ' ');
      }
      if (width >= 1200) {
        if (!menu_item.hasClass('current-menu-item')) {
          menu_items.removeClass('current-menu-item');
          container.find(card_items).removeClass('animated ' + animation_in);
          if ($(container).hasClass('opened')) {
            container.find(card_items).addClass('animated ' + animation_out);
          }
          menu_item.addClass('current-menu-item');
          container.addClass('opened');
          container.find(card_item).removeClass('animated ' + animation_out);
          container.find(card_item).addClass('animated ' + animation_in);
          $(card_items).addClass('hidden');
          $(card_item).removeClass('hidden');
          $(card_item).addClass('active');
        }
      }
      if (width < 1200) {
        $('body,html').animate({
          scrollTop: h - header_offset_top
        }, 800);
      }
      return false;
    });
  }
  $(window).on('resize', function() {
    var width = $(window).width();
    var height = $(window).height();
    if ((width < 1200)) {
      $('.card-inner').removeClass('hidden');
      $('.card-inner').removeClass('fadeOutLeft');
      $('.card-inner').removeClass('rotateOutUpLeft');
      $('.card-inner').removeClass('rollOut');
      $('.card-inner').removeClass('jackOutTheBox');
      $('.card-inner').removeClass('fadeOut');
      $('.card-inner').removeClass('fadeOutUp');
      $('.card-inner').removeClass('animated');
    } else {
      var current_id = $('.top-menu li.current-menu-item a').attr('href');
      $('#card-' + current_id.replace('#', '')).addClass('current-menu-item');
    }
    var skills_dotted = $('.skills-list.dotted .progress');
    var skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.find('.percentage .da').css({
        'width': skills_dotted_w + 1
      });
    }
    var revs_slider = $(".revs-carousel .owl-carousel");
    revs_slider.find('.revs-item').css({
      'max-width': revs_slider.width()
    });
  });
  var url_hash = location.hash;
  var sectionElem = $('#card-' + url_hash.replace('#', ''));
  if (sectionElem.length && $('.top-menu-onepage').length) {
    menu_items.removeClass('current-menu-item');
    $('.top-menu li a[href="' + url_hash + '"]').parent('li').addClass('current-menu-item');
    if (width >= 1200) {
      container.find(card_items).removeClass('animated ' + animation_in);
      if ($(container).hasClass('opened')) {
        container.find(card_items).addClass('animated ' + animation_out);
      }
      container.addClass('opened');
      sectionElem.removeClass('animated ' + animation_out);
      sectionElem.addClass('animated ' + animation_in);
      $(card_items).addClass('hidden');
      sectionElem.removeClass('hidden');
      sectionElem.addClass('active');
    } else {
      $('body,html').animate({
        scrollTop: parseFloat(sectionElem.offset().top) - header_offset_top
      }, 500);
    }
  }
  $('.lnks').on('click', '.lnk[href*="#"]', function() {
    var lnk_url = $(this).attr('href');
    var lnk_idx = lnk_url.indexOf("#");
    var lnk_hash = lnk_idx != -1 ? lnk_url.substring(lnk_idx + 1) : "";
    if ($('.top-menu a[href="#' + lnk_hash + '"]').length) {
      $('.top-menu a[href="#' + lnk_hash + '"]').trigger('click');
    }
  });
  $('.main-menu li.page_item_has_children').each(function() {
    $(this).find('> a').after('<span class="children_toggle"></span>');
  });
  $('.main-menu').on('click', '.children_toggle', function() {
    var main_menu_item = $(this).closest('.page_item_has_children');
    if (main_menu_item.hasClass('open')) {
      main_menu_item.removeClass('open');
      main_menu_item.find('> ul').slideUp(250);
    } else {
      main_menu_item.addClass('open');
      main_menu_item.find('> ul').slideDown(250);
    }
  });
  if ((width < 1200) && $('.top-menu-onepage').length) {
    $(window).on('scroll', function() {
      var scrollPos = $(window).scrollTop();
      $('.top-menu ul li a').each(function() {
        var currLink = $(this);
        var currHref = currLink.attr('href');
        if (currHref == '') currHref = '#home';
        if (currHref.charAt(0) == "#") {
          var refElement = $('#card-' + currHref.replace('#', ''));
          if (refElement.offset().top - header_offset_top - 2 <= scrollPos) {
            $('.top-menu ul li').removeClass("current-menu-item");
            currLink.closest('li').addClass("current-menu-item");
          }
        }
      });
    });
  }
  if (width <= 560) {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 46) {
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
      }
    })
  }
  $('header, .profile').on('click', '.menu-btn', function() {
    $('.s_overlay').fadeIn();
    $('.content-sidebar').addClass('active');
    $('body,html').addClass('sidebar-open');
    return false;
  });
  $('.content-sidebar, .container').on('click', '.close, .s_overlay', function() {
    $('.s_overlay').fadeOut();
    $('.content-sidebar').removeClass('active');
    $('body,html').removeClass('sidebar-open');
  });
  $('.widget-title').wrapInner('<span class="widget-title-span"></span>');
  $('.lnk-view-menu').on('click', function() {
    var btn_text1 = $(this).find('.text').text();
    var btn_text2 = $(this).find('.text').data('text-open');
    if ($('.profile').hasClass('default-menu-open')) {
      $('.profile').removeClass('default-menu-open');
      $(this).find('.text').data('text-open', btn_text1);
      $(this).find('.text').text(btn_text2);
    } else {
      $('.profile').addClass('default-menu-open');
      $(this).find('.text').data('text-open', btn_text1);
      $(this).find('.text').text(btn_text2);
    }
    return false;
  });
  $('.subtitle.subtitle-typed').each(function() {
    var subtitleContainer = $(this);
    subtitleContainer.typed({
      stringsElement: subtitleContainer.find('.typing-title'),
      backDelay: 3500,
      typeSpeed: 0,
      loop: true
    });
  });
  var $container = $('.grid-items');
  $container.imagesLoaded(function() {
    $container.isotope({
      itemSelector: '.grid-item'
    });
  });
  $('.filter-button-group').on('click', '.f_btn', function() {
    var filterValue = $(this).find('input').val();
    $container.isotope({
      filter: filterValue
    });
    $('.filter-button-group .f_btn').removeClass('active');
    $(this).addClass('active');
  });
  if (/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))) {
    $('.gallery-item a').magnificPopup({
      gallery: {
        enabled: true
      },
      type: 'image',
      closeBtnInside: false,
      mainClass: 'mfp-fade'
    });
  }
  $('.has-popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'popup-box',
    image: {
      verticalFit: true
    }
  });
  $('.has-popup-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    preloader: false,
    fixedContentPos: false,
    mainClass: 'popup-box',
    callbacks: {
      markupParse: function(template, values, item) {
        template.find('iframe').attr('allow', 'autoplay');
      }
    }
  });
  $('.has-popup-music').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    preloader: false,
    fixedContentPos: false,
    mainClass: 'popup-box',
    callbacks: {
      markupParse: function(template, values, item) {
        template.find('iframe').attr('allow', 'autoplay');
      }
    }
  });
  $('.has-popup-media').magnificPopup({
    type: 'inline',
    overflowY: 'auto',
    closeBtnInside: true,
    mainClass: 'popup-box-inline'
  });
  $('.has-popup-gallery').on('click', function() {
    var gallery = $(this).attr('href');
    $(gallery).magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      mainClass: 'mfp-fade',
      removalDelay: 160,
      fixedContentPos: false,
      gallery: {
        enabled: true
      }
    }).magnificPopup('open');
    return false;
  });
  $("#cform").validate({
    ignore: ".ignore",
    rules: {
      name: {
        required: true
      },
      message: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    success: "valid",
    submitHandler: function() {
      $.ajax({
        url: 'mailer/feedback.php',
        type: 'post',
        dataType: 'json',
        data: 'name=' + $("#cform").find('input[name="name"]').val() + '&email=' + $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
        beforeSend: function() {},
        complete: function() {},
        success: function(data) {
          $('#cform').fadeOut();
          $('.alert-success').delay(1000).fadeIn();
        }
      });
    }
  });
  $("#comment_form").validate({
    rules: {
      name: {
        required: true
      },
      message: {
        required: true
      }
    },
    success: "valid",
    submitHandler: function() {}
  });
  var serv_num = $('.service-items .service-item').length;
  if (serv_num % 2 == 0) {
    $('.service-items .service-item').eq(serv_num - 1).parent().removeClass('border-line-h');
    $('.service-items .service-item').eq(serv_num - 2).parent().removeClass('border-line-h');
  } else {
    $('.service-items .service-item').eq(serv_num - 1).parent().removeClass('border-line-h');
  }
  $('.content .title, .widget-title-span').each(function(index) {
    var title = $(this).text().split(' ');
    if (title.length > 1) {
      var firstWord = title[0];
      var replaceWord = '<span class="first-word">' + firstWord + '</span>';
      var newString = $(this).html().replace(firstWord, replaceWord);
      $(this).html(newString);
    } else {
      $(this).html('<div class="first-letter">' + $(this).html() + '</div>');
    }
  });
  if ($('body').hasClass('home') && $('.top-menu').hasClass('top-menu-onepage')) {
    $('.post-password-form').on('submit', function() {
      $.cookie('submit-post-password', $(this).closest('.card-inner').attr('id'), {
        expires: 7,
        path: '/'
      });
      $(this).submit();
    });
    var post_password_cookie = $.cookie('submit-post-password');
    if (post_password_cookie !== undefined) {
      $('a[href="#' + post_password_cookie + '"]').trigger('click');
      $.removeCookie('submit-post-password', {
        path: '/'
      });
    }
  }
  var revs_slider = $(".revs-carousel .owl-carousel");
  var is_rtl = false;
  if ($('body.rtl').length) {
    is_rtl = true;
  }
  revs_slider.owlCarousel({
    margin: 0,
    items: 1,
    autoWidth: true,
    autoplay: false,
    loop: false,
    rewind: false,
    nav: false,
    rtl: is_rtl,
    dots: true,
    responsive: {
      0: {
        autoWidth: false,
      },
      1200: {
        autoWidth: true,
      }
    }
  });
  revs_slider.find('.revs-item').css({
    'max-width': revs_slider.width()
  });
  $('.single-post-text, .post-box').each(function() {
    $(this).find('iframe').wrap('<div class="embed-container"></div>');
  });
  if (!$('.top-menu ul').length) {
    $('.container').addClass('no-sticky-menu');
  }

  function skills() {
    var skills_dotted = $('.skills-list.dotted .progress');
    var skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
      skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
      skills_dotted.find('.percentage .da').css({
        'width': skills_dotted_w
      });
    }
  }
  setTimeout(skills, 1000);
  var skills_circles = $('.skills-list.circles .progress');
  if (skills_circles.length) {
    skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
  }
})(jQuery);
(function($) {
  function new_map($el) {
    var $markers = $el.find('.marker');
    var args = {
      zoom: 16,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($el[0], args);
    map.markers = [];
    $markers.each(function() {
      add_marker($(this), map);
    });
    center_map(map);
    return map;
  }

  function add_marker($marker, map) {
    var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
    var marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
    map.markers.push(marker);
    if ($marker.html()) {
      var infowindow = new google.maps.InfoWindow({
        content: $marker.html()
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });
    }
  }

  function center_map(map) {
    var bounds = new google.maps.LatLngBounds();
    $.each(map.markers, function(i, marker) {
      var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      bounds.extend(latlng);
    });
    if (map.markers.length == 1) {
      map.setCenter(bounds.getCenter());
      map.setZoom(16);
    } else {
      map.fitBounds(bounds);
    }
  }
  var map = null;
  $(document).ready(function() {
    $('.acf-map').each(function() {
      map = new_map($(this));
    });
  });
})(jQuery);
! function(a, b) {
  "use strict";

  function c() {
    if (!e) {
      e = !0;
      var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        h = !!navigator.userAgent.match(/Trident.*rv:11\./),
        i = b.querySelectorAll("iframe.wp-embedded-content");
      for (c = 0; c < i.length; c++) {
        if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
        if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
      }
    }
  }
  var d = !1,
    e = !1;
  if (b.querySelector)
    if (a.addEventListener) d = !0;
  if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
    if (a.wp.receiveEmbedMessage = function(c) {
        var d = c.data;
        if (d)
          if (d.secret || d.message || d.value)
            if (!/[^a-zA-Z0-9]/.test(d.secret)) {
              var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
              for (e = 0; e < k.length; e++) k[e].style.display = "none";
              for (e = 0; e < j.length; e++)
                if (f = j[e], c.source === f.contentWindow) {
                  if (f.removeAttribute("style"), "height" === d.message) {
                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                    else if (~~g < 200) g = 200;
                    f.height = g
                  }
                  if ("link" === d.message)
                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                      if (b.activeElement === f) a.top.location.href = d.value
                } else;
            }
      }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
