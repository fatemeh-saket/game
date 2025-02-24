import {
  require_react_dom
} from "./chunk-TUX7A2JK.js";
import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes2 = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes2 = appendClass(classes2, parseValue(arg));
          }
        }
        return classes2;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes2 = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes2 = appendClass(classes2, key);
          }
        }
        return classes2;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-responsive-modal/dist/react-responsive-modal.esm.js
var import_react3 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_classnames = __toESM(require_classnames());

// node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var passiveTestOptions;
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};
var enableBodyScroll = function enableBodyScroll2(targetElement) {
  if (!targetElement) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  locks = locks.filter(function(lock) {
    return lock.targetElement !== targetElement;
  });
  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};

// node_modules/@bedrock-layout/use-stateful-ref/lib/index.m.js
var import_react = __toESM(require_react());
function s(c2 = null) {
  let [e, f] = import_react.default.useState(c2);
  const { current: r } = import_react.default.useRef({
    current: e
  });
  return Object.defineProperty(r, "current", {
    get: () => e,
    set: (t) => {
      Object.is(e, t) || (e = t, f(t));
    }
  }), r;
}

// node_modules/@bedrock-layout/use-forwarded-ref/lib/index.m.js
var import_react2 = __toESM(require_react());
function o(t, u2 = { isStateful: true }) {
  const n = s(null), f = (0, import_react2.useRef)(null), e = u2.isStateful ? n : f;
  return import_react2.default.useEffect(() => {
    !t || (typeof t == "function" ? t(e.current) : t.current = e.current);
  }), e;
}

// node_modules/react-responsive-modal/dist/react-responsive-modal.esm.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var CloseIcon = function CloseIcon2(_ref) {
  var classes2 = _ref.classes, classNames = _ref.classNames, styles = _ref.styles, id = _ref.id, closeIcon = _ref.closeIcon, onClick = _ref.onClick;
  return import_react3.default.createElement("button", {
    id,
    className: (0, import_classnames.default)(classes2.closeButton, classNames == null ? void 0 : classNames.closeButton),
    style: styles == null ? void 0 : styles.closeButton,
    onClick,
    "data-testid": "close-button"
  }, closeIcon ? closeIcon : import_react3.default.createElement("svg", {
    className: classNames == null ? void 0 : classNames.closeIcon,
    style: styles == null ? void 0 : styles.closeIcon,
    width: 28,
    height: 28,
    viewBox: "0 0 36 36",
    "data-testid": "close-icon"
  }, import_react3.default.createElement("path", {
    d: "M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"
  })));
};
var isBrowser = typeof window !== "undefined";
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
function isHidden(node) {
  return node.offsetParent === null || getComputedStyle(node).visibility === "hidden";
}
function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
}
function isNotRadioOrTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio" || !node.name) {
    return true;
  }
  var radioScope = node.form || node.ownerDocument;
  var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet, node.form);
  return checked === node || checked === void 0 && radioSet[0] === node;
}
function getAllTabbingElements(parentElem) {
  var currentActiveElement = document.activeElement;
  var tabbableNodes = parentElem.querySelectorAll(candidateSelectors.join(","));
  var onlyTabbable = [];
  for (var i = 0; i < tabbableNodes.length; i++) {
    var node = tabbableNodes[i];
    if (currentActiveElement === node || !node.disabled && getTabindex(node) > -1 && !isHidden(node) && isNotRadioOrTabbableRadio(node)) {
      onlyTabbable.push(node);
    }
  }
  return onlyTabbable;
}
function tabTrappingKey(event, parentElem) {
  if (!event || event.key !== "Tab") return;
  if (!parentElem || !parentElem.contains) {
    if (process && true) {
      console.warn("focus-trap-js: parent element is not defined");
    }
    return false;
  }
  if (!parentElem.contains(event.target)) {
    return false;
  }
  var allTabbingElements = getAllTabbingElements(parentElem);
  var firstFocusableElement = allTabbingElements[0];
  var lastFocusableElement = allTabbingElements[allTabbingElements.length - 1];
  if (event.shiftKey && event.target === firstFocusableElement) {
    lastFocusableElement.focus();
    event.preventDefault();
    return true;
  } else if (!event.shiftKey && event.target === lastFocusableElement) {
    firstFocusableElement.focus();
    event.preventDefault();
    return true;
  }
  return false;
}
function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}
function isContentEditable(node) {
  return node.getAttribute("contentEditable");
}
var FocusTrap = function FocusTrap2(_ref) {
  var container = _ref.container, initialFocusRef = _ref.initialFocusRef;
  var refLastFocus = (0, import_react3.useRef)();
  (0, import_react3.useEffect)(function() {
    var handleKeyEvent = function handleKeyEvent2(event) {
      if (container == null ? void 0 : container.current) {
        tabTrappingKey(event, container.current);
      }
    };
    if (isBrowser) {
      document.addEventListener("keydown", handleKeyEvent);
    }
    if (isBrowser && (container == null ? void 0 : container.current)) {
      var savePreviousFocus = function savePreviousFocus2() {
        if (candidateSelectors.findIndex(function(selector) {
          var _document$activeEleme;
          return (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.matches(selector);
        }) !== -1) {
          refLastFocus.current = document.activeElement;
        }
      };
      if (initialFocusRef) {
        savePreviousFocus();
        requestAnimationFrame(function() {
          var _initialFocusRef$curr;
          (_initialFocusRef$curr = initialFocusRef.current) == null ? void 0 : _initialFocusRef$curr.focus();
        });
      } else {
        var allTabbingElements = getAllTabbingElements(container.current);
        if (allTabbingElements[0]) {
          savePreviousFocus();
          allTabbingElements[0].focus();
        }
      }
    }
    return function() {
      if (isBrowser) {
        var _refLastFocus$current;
        document.removeEventListener("keydown", handleKeyEvent);
        (_refLastFocus$current = refLastFocus.current) == null ? void 0 : _refLastFocus$current.focus();
      }
    };
  }, [container, initialFocusRef]);
  return null;
};
var modals = [];
var modalManager = {
  /**
   * Register a new modal
   */
  add: function add(newModal) {
    modals.push(newModal);
  },
  /**
   * Remove a modal
   */
  remove: function remove(oldModal) {
    modals = modals.filter(function(modal) {
      return modal !== oldModal;
    });
  },
  /**
   * When multiple modals are rendered will return true if current modal is the last one
   */
  isTopModal: function isTopModal(modal) {
    return !!modals.length && modals[modals.length - 1] === modal;
  }
};
function useModalManager(ref, open) {
  (0, import_react3.useEffect)(function() {
    if (open) {
      modalManager.add(ref);
    }
    return function() {
      modalManager.remove(ref);
    };
  }, [open, ref]);
}
var useScrollLock = function useScrollLock2(refModal, open, showPortal, blockScroll, reserveScrollBarGap) {
  var oldRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(function() {
    if (open && refModal.current && blockScroll) {
      oldRef.current = refModal.current;
      disableBodyScroll(refModal.current, {
        reserveScrollBarGap
      });
    }
    return function() {
      if (oldRef.current) {
        enableBodyScroll(oldRef.current);
        oldRef.current = null;
      }
    };
  }, [open, showPortal, refModal, blockScroll, reserveScrollBarGap]);
};
var classes = {
  root: "react-responsive-modal-root",
  overlay: "react-responsive-modal-overlay",
  overlayAnimationIn: "react-responsive-modal-overlay-in",
  overlayAnimationOut: "react-responsive-modal-overlay-out",
  modalContainer: "react-responsive-modal-container",
  modalContainerCenter: "react-responsive-modal-containerCenter",
  modal: "react-responsive-modal-modal",
  modalAnimationIn: "react-responsive-modal-modal-in",
  modalAnimationOut: "react-responsive-modal-modal-out",
  closeButton: "react-responsive-modal-closeButton"
};
var Modal = import_react3.default.forwardRef(function(_ref, ref) {
  var _classNames$overlayAn, _classNames$overlayAn2, _classNames$modalAnim, _classNames$modalAnim2;
  var open = _ref.open, center = _ref.center, _ref$blockScroll = _ref.blockScroll, blockScroll = _ref$blockScroll === void 0 ? true : _ref$blockScroll, _ref$closeOnEsc = _ref.closeOnEsc, closeOnEsc = _ref$closeOnEsc === void 0 ? true : _ref$closeOnEsc, _ref$closeOnOverlayCl = _ref.closeOnOverlayClick, closeOnOverlayClick = _ref$closeOnOverlayCl === void 0 ? true : _ref$closeOnOverlayCl, container = _ref.container, _ref$showCloseIcon = _ref.showCloseIcon, showCloseIcon = _ref$showCloseIcon === void 0 ? true : _ref$showCloseIcon, closeIconId = _ref.closeIconId, closeIcon = _ref.closeIcon, _ref$focusTrapped = _ref.focusTrapped, focusTrapped = _ref$focusTrapped === void 0 ? true : _ref$focusTrapped, _ref$initialFocusRef = _ref.initialFocusRef, initialFocusRef = _ref$initialFocusRef === void 0 ? void 0 : _ref$initialFocusRef, _ref$animationDuratio = _ref.animationDuration, animationDuration = _ref$animationDuratio === void 0 ? 300 : _ref$animationDuratio, classNames = _ref.classNames, styles = _ref.styles, _ref$role = _ref.role, role = _ref$role === void 0 ? "dialog" : _ref$role, ariaDescribedby = _ref.ariaDescribedby, ariaLabelledby = _ref.ariaLabelledby, containerId = _ref.containerId, modalId = _ref.modalId, onClose = _ref.onClose, onEscKeyDown = _ref.onEscKeyDown, onOverlayClick = _ref.onOverlayClick, onAnimationEnd = _ref.onAnimationEnd, children = _ref.children, reserveScrollBarGap = _ref.reserveScrollBarGap;
  var refDialog = o(ref);
  var refModal = (0, import_react3.useRef)(null);
  var refShouldClose = (0, import_react3.useRef)(null);
  var refContainer = (0, import_react3.useRef)(null);
  if (refContainer.current === null && isBrowser) {
    refContainer.current = document.createElement("div");
  }
  var _useState = (0, import_react3.useState)(false), showPortal = _useState[0], setShowPortal = _useState[1];
  useModalManager(refModal, open);
  useScrollLock(refModal, open, showPortal, blockScroll, reserveScrollBarGap);
  var handleOpen = function handleOpen2() {
    if (refContainer.current && !container && !document.body.contains(refContainer.current)) {
      document.body.appendChild(refContainer.current);
    }
    document.addEventListener("keydown", handleKeydown);
  };
  var handleClose = function handleClose2() {
    if (refContainer.current && !container && document.body.contains(refContainer.current)) {
      document.body.removeChild(refContainer.current);
    }
    document.removeEventListener("keydown", handleKeydown);
  };
  var handleKeydown = function handleKeydown2(event) {
    if (event.keyCode !== 27 || !modalManager.isTopModal(refModal)) {
      return;
    }
    onEscKeyDown == null ? void 0 : onEscKeyDown(event);
    if (closeOnEsc) {
      onClose();
    }
  };
  (0, import_react3.useEffect)(function() {
    return function() {
      if (showPortal) {
        handleClose();
      }
    };
  }, [showPortal]);
  (0, import_react3.useEffect)(function() {
    if (open && !showPortal) {
      setShowPortal(true);
      handleOpen();
    }
  }, [open]);
  var handleClickOverlay = function handleClickOverlay2(event) {
    if (refShouldClose.current === null) {
      refShouldClose.current = true;
    }
    if (!refShouldClose.current) {
      refShouldClose.current = null;
      return;
    }
    onOverlayClick == null ? void 0 : onOverlayClick(event);
    if (closeOnOverlayClick) {
      onClose();
    }
    refShouldClose.current = null;
  };
  var handleModalEvent = function handleModalEvent2() {
    refShouldClose.current = false;
  };
  var handleAnimationEnd = function handleAnimationEnd2() {
    if (!open) {
      setShowPortal(false);
    }
    onAnimationEnd == null ? void 0 : onAnimationEnd();
  };
  var containerModal = container || refContainer.current;
  var overlayAnimation = open ? (_classNames$overlayAn = classNames == null ? void 0 : classNames.overlayAnimationIn) != null ? _classNames$overlayAn : classes.overlayAnimationIn : (_classNames$overlayAn2 = classNames == null ? void 0 : classNames.overlayAnimationOut) != null ? _classNames$overlayAn2 : classes.overlayAnimationOut;
  var modalAnimation = open ? (_classNames$modalAnim = classNames == null ? void 0 : classNames.modalAnimationIn) != null ? _classNames$modalAnim : classes.modalAnimationIn : (_classNames$modalAnim2 = classNames == null ? void 0 : classNames.modalAnimationOut) != null ? _classNames$modalAnim2 : classes.modalAnimationOut;
  return showPortal && containerModal ? import_react_dom.default.createPortal(import_react3.default.createElement("div", {
    className: (0, import_classnames.default)(classes.root, classNames == null ? void 0 : classNames.root),
    style: styles == null ? void 0 : styles.root,
    "data-testid": "root"
  }, import_react3.default.createElement("div", {
    className: (0, import_classnames.default)(classes.overlay, classNames == null ? void 0 : classNames.overlay),
    "data-testid": "overlay",
    "aria-hidden": true,
    style: _extends({
      animation: overlayAnimation + " " + animationDuration + "ms"
    }, styles == null ? void 0 : styles.overlay)
  }), import_react3.default.createElement("div", {
    ref: refModal,
    id: containerId,
    className: (0, import_classnames.default)(classes.modalContainer, center && classes.modalContainerCenter, classNames == null ? void 0 : classNames.modalContainer),
    style: styles == null ? void 0 : styles.modalContainer,
    "data-testid": "modal-container",
    onClick: handleClickOverlay
  }, import_react3.default.createElement("div", {
    ref: refDialog,
    className: (0, import_classnames.default)(classes.modal, classNames == null ? void 0 : classNames.modal),
    style: _extends({
      animation: modalAnimation + " " + animationDuration + "ms"
    }, styles == null ? void 0 : styles.modal),
    onMouseDown: handleModalEvent,
    onMouseUp: handleModalEvent,
    onClick: handleModalEvent,
    onAnimationEnd: handleAnimationEnd,
    id: modalId,
    role,
    "aria-modal": "true",
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    "data-testid": "modal",
    tabIndex: -1
  }, focusTrapped && import_react3.default.createElement(FocusTrap, {
    container: refDialog,
    initialFocusRef
  }), children, showCloseIcon && import_react3.default.createElement(CloseIcon, {
    classes,
    classNames,
    styles,
    closeIcon,
    onClick: onClose,
    id: closeIconId
  })))), containerModal) : null;
});
var react_responsive_modal_esm_default = Modal;
export {
  Modal,
  react_responsive_modal_esm_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=react-responsive-modal.js.map
