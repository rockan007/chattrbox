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

    _wsClient["default"].sendMessage(message.serialize);
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
  socket.onOpen = function () {
    console.log('open');
    handlerFunction();
  };
} // 注册接收消息监听


function registerMessageHandler(handlerFunction) {
  socket.onMessage = function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0lBQ00sTyxHQUNGLG1CQUFjO0FBQUE7O0FBQ1YsdUJBQU8sSUFBUCxDQUFZLHFCQUFaOztBQUNBLHVCQUFPLG1CQUFQLENBQTJCLFlBQUk7QUFDM0IsUUFBSSxPQUFPLEdBQUMsSUFBSSxXQUFKLENBQWdCO0FBQUMsTUFBQSxPQUFPLEVBQUM7QUFBVCxLQUFoQixDQUFaOztBQUNBLHlCQUFPLFdBQVAsQ0FBbUIsT0FBTyxDQUFDLFNBQTNCO0FBQ0gsR0FIRDs7QUFJQSx1QkFBTyxzQkFBUCxDQUE4QixVQUFDLElBQUQsRUFBUTtBQUNsQyxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtBQUNILEdBRkQ7QUFHSCxDOztJQUVDLFc7QUFDRiw2QkFJRztBQUFBLFFBSFUsQ0FHVixRQUhDLE9BR0Q7QUFBQSx5QkFGQyxJQUVEO0FBQUEsUUFGTyxDQUVQLDBCQUZXLFFBRVg7QUFBQSw4QkFEQyxTQUNEO0FBQUEsUUFEWSxDQUNaLCtCQURnQixJQUFJLElBQUosR0FBVyxPQUFYLEVBQ2hCOztBQUFBOztBQUNDLFNBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0g7Ozs7Z0NBQ1U7QUFDUCxhQUFPO0FBQ0gsUUFBQSxJQUFJLEVBQUMsS0FBSyxJQURQO0FBRUgsUUFBQSxPQUFPLEVBQUMsS0FBSyxPQUZWO0FBR0gsUUFBQSxTQUFTLEVBQUMsS0FBSztBQUhaLE9BQVA7QUFLSDs7Ozs7O2VBRVUsTzs7Ozs7O0FDL0JmOzs7O0FBQ0EsSUFBSSxlQUFKOzs7Ozs7Ozs7QUNEQSxJQUFJLE1BQUosQyxDQUNBOztBQUNBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBa0I7QUFDZCxFQUFBLE1BQU0sR0FBQyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVA7QUFDQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUNILEMsQ0FDRDs7O0FBQ0EsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE2QztBQUN6QyxFQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWMsWUFBSTtBQUNkLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsSUFBQSxlQUFlO0FBQ2xCLEdBSEQ7QUFJSCxDLENBQ0Q7OztBQUNBLFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBZ0Q7QUFDNUMsRUFBQSxNQUFNLENBQUMsU0FBUCxHQUFpQixVQUFDLENBQUQsRUFBSztBQUNsQixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUFzQixDQUFDLENBQUMsSUFBeEI7QUFDQSxRQUFJLElBQUksR0FBQyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQUMsQ0FBQyxJQUFiLENBQVQ7QUFDQSxJQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxHQUpEO0FBS0gsQyxDQUNEOzs7QUFDQSxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBNkI7QUFDekIsRUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0g7O2VBQ2E7QUFDVixFQUFBLElBQUksRUFBSixJQURVO0FBRVYsRUFBQSxtQkFBbUIsRUFBbkIsbUJBRlU7QUFHVixFQUFBLHNCQUFzQixFQUF0QixzQkFIVTtBQUlWLEVBQUEsV0FBVyxFQUFYO0FBSlUsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xyXG5jbGFzcyBDaGF0QXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XHJcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCk9PntcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U9bmV3IENoYXRNZXNzYWdlKHttZXNzYWdlOidwb3chJ30pO1xyXG4gICAgICAgICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIG1lc3NhZ2U6IG0sXHJcbiAgICAgICAgdXNlcjogdSA9ICdiYXRtYW4nLFxyXG4gICAgICAgIHRpbWVzdGFtcDogdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1O1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcclxuICAgIH1cclxuICAgIHNlcmlhbGl6ZSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXI6dGhpcy51c2VyLFxyXG4gICAgICAgICAgICBtZXNzYWdlOnRoaXMubWVzc2FnZSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOnRoaXMudGltZXN0YW1wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwOyIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcclxubmV3IENoYXRBcHAoKTsiLCJsZXQgc29ja2V0O1xyXG4vL+WIneWni+WMlnNvY2tldFxyXG5mdW5jdGlvbiBpbml0KHVybCl7XHJcbiAgICBzb2NrZXQ9bmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcnKTtcclxufVxyXG4vL+azqOWGjHNvY2tldE9wZW7nm5HlkKxcclxuZnVuY3Rpb24gcmVnaXN0ZXJPcGVuSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pe1xyXG4gICAgc29ja2V0Lm9uT3Blbj0oKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XHJcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuLy8g5rOo5YaM5o6l5pS25raI5oGv55uR5ZCsXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKXtcclxuICAgIHNvY2tldC5vbk1lc3NhZ2U9KGUpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsZS5kYXRhKTtcclxuICAgICAgICBsZXQgZGF0YT1KU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbi8vIOWPkemAgea2iOaBr1xyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKXtcclxuICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGluaXQsXHJcbiAgICByZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG4gICAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcclxuICAgIHNlbmRNZXNzYWdlXHJcbn0iXX0=
