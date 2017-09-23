module scenes {
    export class Start extends objects.Scene {
        // Private instance variables
        private _assetManager:createjs.LoadQueue;

        private _helloLabel:objects.Label;
        private _clickButton:objects.Button;
        // Public properties

        // Constructors
        constructor(assetManager:createjs.LoadQueue) {
            super();
            this._assetManager = assetManager;

            this.Start();
        }
        // Private Methods

        // Public Methods

        /**
         * Initialize Components Here 
         */
        public Start():void {
            this._helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
            this._clickButton = new objects.Button(this._assetManager, "clickMeButton", 320, 340, true);
            this.Main();
        }

        /**
         * Update elements in the scene
         */
        public Update():void {

        }

        /**
         * Add elements in the Main Method
         */
        public Main():void {
           
            this.addChild(this._helloLabel);
        
            
            this.addChild(this._clickButton);
        
            this._clickButton.on("click", () => {
            this._helloLabel.TextString = "GoodBye Cruel World";
            });
        
        }
    }
}