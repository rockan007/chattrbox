(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wsClient = _interopRequireDefault(require("./ws-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient["default"].init('ws://localhost:3001');

  _wsClient["default"].registerOpenHandler(function () {
    var message = new ChatMessage({
      message: 'pow!'
    });

    _wsClient["default"].sendMessage(message.serialize());
  });

  _wsClient["default"].registerMessageHandler(function (data) {
    console.log(data);
  });
};

var ChatMessage = /*#__PURE__*/function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === void 0 ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === void 0 ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: "serialize",
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

var _default = ChatApp;
exports["default"] = _default;

},{"./ws-client":3}],2:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _app["default"]();

},{"./app":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var socket; //初始化socket

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting');
} //注册socketOpen监听


function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');
    handlerFunction();
  };
} // 注册接收消息监听


function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log("message", e.data);
    var data = JSON.parse(e.data);
    handlerFunction(data);
  };
} // 发送消息


function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

var _default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  sendMessage: sendMessage
};
exports["default"] = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0lBQ00sTyxHQUNGLG1CQUFjO0FBQUE7O0FBQ1YsdUJBQU8sSUFBUCxDQUFZLHFCQUFaOztBQUNBLHVCQUFPLG1CQUFQLENBQTJCLFlBQUk7QUFDM0IsUUFBSSxPQUFPLEdBQUMsSUFBSSxXQUFKLENBQWdCO0FBQUMsTUFBQSxPQUFPLEVBQUM7QUFBVCxLQUFoQixDQUFaOztBQUNBLHlCQUFPLFdBQVAsQ0FBbUIsT0FBTyxDQUFDLFNBQVIsRUFBbkI7QUFDSCxHQUhEOztBQUlBLHVCQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFRO0FBQ2xDLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsR0FGRDtBQUdILEM7O0lBRUMsVztBQUNGLDZCQUlHO0FBQUEsUUFIVSxDQUdWLFFBSEMsT0FHRDtBQUFBLHlCQUZDLElBRUQ7QUFBQSxRQUZPLENBRVAsMEJBRlcsUUFFWDtBQUFBLDhCQURDLFNBQ0Q7QUFBQSxRQURZLENBQ1osK0JBRGdCLElBQUksSUFBSixHQUFXLE9BQVgsRUFDaEI7O0FBQUE7O0FBQ0MsU0FBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7OztnQ0FDVTtBQUNQLGFBQU87QUFDSCxRQUFBLElBQUksRUFBQyxLQUFLLElBRFA7QUFFSCxRQUFBLE9BQU8sRUFBQyxLQUFLLE9BRlY7QUFHSCxRQUFBLFNBQVMsRUFBQyxLQUFLO0FBSFosT0FBUDtBQUtIOzs7Ozs7ZUFFVSxPOzs7Ozs7QUMvQmY7Ozs7QUFDQSxJQUFJLGVBQUo7Ozs7Ozs7OztBQ0RBLElBQUksTUFBSixDLENBQ0E7O0FBQ0EsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFrQjtBQUNkLEVBQUEsTUFBTSxHQUFDLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBUDtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0gsQyxDQUNEOzs7QUFDQSxTQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQTZDO0FBQ3pDLEVBQUEsTUFBTSxDQUFDLE1BQVAsR0FBYyxZQUFJO0FBQ2QsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7QUFDQSxJQUFBLGVBQWU7QUFDbEIsR0FIRDtBQUlILEMsQ0FDRDs7O0FBQ0EsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFnRDtBQUM1QyxFQUFBLE1BQU0sQ0FBQyxTQUFQLEdBQWlCLFVBQUMsQ0FBRCxFQUFLO0FBQ2xCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXNCLENBQUMsQ0FBQyxJQUF4QjtBQUNBLFFBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQyxDQUFDLElBQWIsQ0FBVDtBQUNBLElBQUEsZUFBZSxDQUFDLElBQUQsQ0FBZjtBQUNILEdBSkQ7QUFLSCxDLENBQ0Q7OztBQUNBLFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE2QjtBQUN6QixFQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDSDs7ZUFDYTtBQUNWLEVBQUEsSUFBSSxFQUFKLElBRFU7QUFFVixFQUFBLG1CQUFtQixFQUFuQixtQkFGVTtBQUdWLEVBQUEsc0JBQXNCLEVBQXRCLHNCQUhVO0FBSVYsRUFBQSxXQUFXLEVBQVg7QUFKVSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XHJcbmNsYXNzIENoYXRBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcclxuICAgICAgICBzb2NrZXQucmVnaXN0ZXJPcGVuSGFuZGxlcigoKT0+e1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZT1uZXcgQ2hhdE1lc3NhZ2Uoe21lc3NhZ2U6J3BvdyEnfSk7XHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIENoYXRNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBtZXNzYWdlOiBtLFxyXG4gICAgICAgIHVzZXI6IHUgPSAnYmF0bWFuJyxcclxuICAgICAgICB0aW1lc3RhbXA6IHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XHJcbiAgICAgICAgdGhpcy51c2VyID0gdTtcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XHJcbiAgICB9XHJcbiAgICBzZXJpYWxpemUoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyOnRoaXMudXNlcixcclxuICAgICAgICAgICAgbWVzc2FnZTp0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDp0aGlzLnRpbWVzdGFtcFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDsiLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XHJcbm5ldyBDaGF0QXBwKCk7IiwibGV0IHNvY2tldDtcclxuLy/liJ3lp4vljJZzb2NrZXRcclxuZnVuY3Rpb24gaW5pdCh1cmwpe1xyXG4gICAgc29ja2V0PW5ldyBXZWJTb2NrZXQodXJsKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nJyk7XHJcbn1cclxuLy/ms6jlhoxzb2NrZXRPcGVu55uR5ZCsXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKXtcclxuICAgIHNvY2tldC5vbm9wZW49KCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnb3BlbicpO1xyXG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xyXG4gICAgfVxyXG59XHJcbi8vIOazqOWGjOaOpeaUtua2iOaBr+ebkeWQrFxyXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKGhhbmRsZXJGdW5jdGlvbil7XHJcbiAgICBzb2NrZXQub25tZXNzYWdlPShlKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLGUuZGF0YSk7XHJcbiAgICAgICAgbGV0IGRhdGE9SlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcclxuICAgIH1cclxufVxyXG4vLyDlj5HpgIHmtojmga9cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCl7XHJcbiAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBpbml0LFxyXG4gICAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcclxuICAgIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXHJcbiAgICBzZW5kTWVzc2FnZVxyXG59Il19
