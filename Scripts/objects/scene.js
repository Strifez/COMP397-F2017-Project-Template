var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        // Private instance variables
        // Public properties
        // Constructors
        function Scene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        /**
         * Initialize Components Here
         */
        Scene.prototype.Start = function () {
        };
        /**
         * Update elements in the scene
         */
        Scene.prototype.Update = function () {
        };
        /**
         * Add elements in the Main Method
         */
        Scene.prototype.Main = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map