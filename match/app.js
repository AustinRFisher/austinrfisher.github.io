// Open Source Match 3 Game by Clockworkchilli
var moves = 15;
var imagePercent = 0;
var termsBoolean;
var popupBoolean10;
var popupBoolean5;
var popupBoolean1;
var name;
var nameProgX = 0;
var nameProgH = -520;
var genderProgX = 0;
var genderProgH = -520;
var locationProgX = 0;
var locationProgH = -520;
var creditProgX = 0;
var creditProgH = -520;
var cakeProgX = 0;
var cakeProgH = -520;
var alertBoolean = true;
var bombBoolean = true;
var cookieBoolean = true;

App = function()
{
    var self = this; // Main app context


    // Layers to use for rendering
    this.layers = {background:17, boardBack:16, board:15, boardFront:14, front:13, superFront:12};

    // Flags
    this.musicMuted = false;
    this.soundMuted = false;
    this.socialEnabled = true;
    this.gameOver = false;

    // Scores
    this.scores = {values:[0,0,0]};

    /**
     * Function that takes a number of seconds and returns a string of the time in minutes
     * @param {number} numSeconds The number of seconds that we will convert
     * @returns {string} A string representation of the provided time in minutes
     */
    // this.getTimeString = function (numSeconds)
    // {
    //     if (!numSeconds || numSeconds < 1)
    //     {
    //         return '0:00';
    //     }
    //
    //     var timeString = '';
    //     var minutes = 0;
    //     var seconds = Math.floor(numSeconds);
    //
    //     // Deal with minutes
    //     while (seconds >= 60)
    //     {
    //         seconds -= 60;
    //         minutes++;
    //     }
    //
    //     timeString = minutes > 0 ? minutes + ':' : '0:';
    //
    //     // Deal with seconds
    //     if (seconds > 0)
    //     {
    //         timeString += seconds < 10 ? ('0' + seconds) : seconds;
    //     }
    //     else
    //     {
    //         timeString += '00';
    //     }
    //     return timeString;
    // };

    // Load all assets
    this.load = function()
    {
        // LOAD SCRIPTS

        wade.loadScript('counter.js');
        wade.loadScript('match3.js');

        // Load AUDIO
        if (wade.isWebAudioSupported())
        {
            // background music
            wade.preloadAudio('sounds/Surreal-Chase.ogg', false, true);
        }

        if (wade.isWebAudioSupported())
        {
            wade.loadAudio('sounds/metalImpact2.ogg');
            wade.loadAudio('sounds/fiveSound.ogg');
            wade.loadAudio('sounds/explosion1.ogg');
        }

        // LOAD IMAGES
        // Squares
        wade.loadImage('images/nameBoard.png');
        wade.loadImage('images/gender.png');
        wade.loadImage('images/location.png');
        wade.loadImage('images/cake.png');
        wade.loadImage('images/credit.png');
        wade.loadImage('images/selected.png');
        wade.loadImage('images/special4.png');
        wade.loadImage('images/nameBoardGlow.png');
        wade.loadImage('images/genderGlow.png');
        wade.loadImage('images/locationGlow.png');
        wade.loadImage('images/cakeGlow.png');
        wade.loadImage('images/creditGlow.png');

        wade.loadImage('images/nameBoardBar.png');
        wade.loadImage('images/genderBar.png');
        wade.loadImage('images/locationBar.png');
        wade.loadImage('images/creditBar.png');
        wade.loadImage('images/cakeBar.png');

        wade.loadImage('images/cookie.png');
        wade.loadImage('images/cookieGlow.png');

        wade.loadImage('images/nameBanner.png');
        wade.loadImage('images/maleSymbol.png');
        wade.loadImage('images/femaleSymbol.png');

        wade.loadImage('images/tutorial1.png');
        wade.loadImage('images/tutorial2.png');
        wade.loadImage('images/tutorial3.png');
        wade.loadImage('images/tutorial4.png');

        // UI and background
        wade.loadImage('images/audioButton.png');
        wade.loadImage('images/audioButtonOff.png');
        wade.loadImage('images/background.png');
        wade.loadImage('images/top.png');
        wade.loadImage('images/barTime.png');
        wade.loadImage('images/barTime2.png');
        wade.loadImage('images/markerTime.png');
        wade.loadImage('images/buttonSoundOff.png');
        wade.loadImage('images/buttonSoundOn.png');
        wade.loadImage('images/buttonBack.png');
        wade.loadImage('images/potionBar.png');
        wade.loadImage('images/menuBackground.png');
        wade.loadImage('images/creditsMenuBackground.png');
        wade.loadImage('images/buttonPlay.png');
        wade.loadImage('images/buttonCredit.png');
        wade.loadImage('images/wadePowered.png');
        wade.loadImage('images/buttonsMuteOn.png');
        wade.loadImage('images/buttonsMuteOff.png');
        wade.loadImage('images/buttonPause.png');
        wade.loadImage('images/buttonUnpause.png');
        wade.loadImage('images/avocadoFarm.png');
        wade.loadImage('images/avocadoLady.png');
        wade.loadImage('images/agreeButton.png');
        wade.loadImage('images/businessBoy1.png');
        wade.loadImage('images/businessBoy2.png');
        wade.loadImage('images/businessBoy3.png');
        wade.loadImage('images/instructions0.png');
        wade.loadImage('images/instructions1.png');
        wade.loadImage('images/instructions2.png');
        wade.loadImage('images/instructions3.png');
        wade.loadImage('images/instructions4.png');
        wade.loadImage('images/leftArrow.png');
        wade.loadImage('images/rightArrow.png');
        wade.loadImage('images/buttonInstructions.png');
        wade.loadImage('images/speechBubble1.png');
        wade.loadImage('images/speechBubble2.png');
        wade.loadImage('images/terms.png');
        wade.loadImage('images/popupMoves.png');
        wade.loadImage('images/skip.png');
        wade.loadImage('images/skipArrow.png');

        wade.loadImage('images/progressBar.png');
        wade.loadImage('images/endAgreement.png');
        wade.loadImage('images/endArrow.png');
        wade.loadImage('images/endGame.png');
        wade.loadImage('images/endHome.png');
        wade.loadImage('images/what.png');
        wade.loadImage('images/endScreen3.png');
        wade.loadImage('images/returnText.png');

        // Shiny
        wade.loadImage('images/shatter.png');
        wade.loadImage('images/specialEffect1.png');
        wade.loadImage('images/bigBoom.png');
        wade.loadImage('images/fiveEffect.png');
        wade.loadImage('images/flash.png');

        // Share
        wade.loadImage('images/google.png');
        wade.loadImage('images/facebook.png');
        wade.loadImage('images/twitter.png');

    };


    // Enter main program
    this.init = function()
    {
        // Setup screen
        wade.setMinScreenSize(1252, 1466); //996
        wade.setMaxScreenSize(1252, 1466); //996

        wade.setSwipeTolerance(1, 2);

        // {background:17, boardBack:16, board:15, boardFront:14, front:13};
        wade.setLayerRenderMode(self.layers.background, "webgl");
        wade.setLayerRenderMode(self.layers.boardBack, "webgl");
        wade.setLayerRenderMode(self.layers.board, "webgl");
        wade.setLayerRenderMode(self.layers.boardFront, "webgl");
        //wade.setLayerRenderMode(self.layers.front, "webgl"); // Need 1 canvas layer for timer bar gradient and other etc

        // Lower resolution factor if mobile
        if (wade.getContainerHeight() <= 768)
        {
            self.isMobile = true;
            wade.setLayerResolutionFactor(this.layers.background, 0.75);
            wade.setLayerResolutionFactor(this.layers.boardBack, 0.75);
            wade.setLayerResolutionFactor(this.layers.board, 0.75);
            wade.setLayerResolutionFactor(this.layers.boardFront, 0.75);
            wade.setLayerResolutionFactor(this.layers.front, 0.75);
        }
        else
        {
            self.isMobile = false;
        }

        // Create main menu and the game on play pressed
        this.game();
    };

    /**
     * Creates the main menu
     */
    this.game = function()
    {
        // Create menu graphical elements
        var backgroundSprite = new Sprite('images/menuBackground.png', this.layers.boardBack);
        var menu = new SceneObject(backgroundSprite);
        backgroundSprite.setSize(1252,1466);
        wade.addSceneObject(menu, true);


        moves = 15;
        currentPercent = 0.0;
        farmPercent = 0.0;
        termsBoolean = true;
        popupBoolean10 = true;
        popupBoolean5 = true;
        popupBoolean1 = true;


        // Create play button
        var playButtonSprite = new Sprite('images/buttonPlay.png', wade.app.layers.front);
        var playButton = new SceneObject(playButtonSprite);

        playButton.onMouseUp = function()
        {
            wade.clearScene();
              var t1Sprite = new Sprite('images/tutorial1.png', self.layers.front);
              var t1 = new SceneObject(t1Sprite);

              var t1AgreeSprite = new Sprite('images/agreeButton.png', self.layers.front);
              var t1Agree = new SceneObject(t1AgreeSprite);
              t1Agree.setPosition(220,640);


              t1Agree.onMouseUp = function()
              {
                    wade.clearScene();
                    var t2Sprite = new Sprite('images/tutorial2.png', self.layers.front);
                    var t2 = new SceneObject(t2Sprite);
                    t2.onMouseUp = function()
                    {

                        wade.clearScene();
                        var t3Sprite = new Sprite('images/tutorial3.png', self.layers.front);
                        var t3 = new SceneObject(t3Sprite);
                        t3.onMouseUp = function()
                        {

                              wade.clearScene();
                              var t4Sprite = new Sprite('images/tutorial4.png', self.layers.front);
                              var t4 = new SceneObject(t4Sprite);
                              t4.onMouseUp = function()
                              {


                                              {
                                                  wade.clearScene();

                                                  if(!self.musicMuted)
                                                  {
                                                      self.musicPlaying = true;
                                                      self.musicSource = wade.playAudio('sounds/Surreal-Chase.ogg', true);
                                                  }

                                                  // Draw background and foreground
                                                  var backgroundSprite = new Sprite('images/background.png', self.layers.background);
                                                  backgroundSprite.setSize(1252, 1466);
                                                  //var topSprite = new Sprite('images/top.png', self.layers.front);
                                                  var graphics = new SceneObject(null);
                                                  graphics.addSprite(backgroundSprite, {x:0, y:wade.getScreenHeight()/2 - backgroundSprite.getSize().y/2});
                                                //  graphics.addSprite(topSprite, {x:0, y:-backgroundSprite.getSize().y/2 + 74}); // Evil magic numbers
                                                  wade.addSceneObject(graphics);

                                                  // Use Match3 behavior to create the game
                                                  this.theGame = new SceneObject(null, Match3);

                                                  wade.addSceneObject(this.theGame, true, {match3:
                                                  {
                                                      numCells: {x:6, y:9},
                                                      cellSize: {x:130, y:121},
                                                      margin: 20,
                                                      position: {x:225,y:-10},
                                                      items: [{normal: 'images/nameBoard.png', special:'images/nameBoardGlow.png', probability:20},
                                                          {normal: 'images/gender.png', special:'images/genderGlow.png', probability:20},
                                                          {normal: 'images/location.png', special:'images/locationGlow.png', probability:20},
                                                          {normal: 'images/cake.png', special:'images/cakeGlow.png', probability:20},
                                                          {normal: 'images/credit.png', special:'images/creditGlow.png', probability:20}],

                                                      specialFive: 'images/cookie.png',
                                                      matchSound: 'sounds/metalImpact2.ogg',
                                                      explosionSound: 'sounds/explosion1.ogg',
                                                      specialFiveSound: 'sounds/fiveSound.ogg',
                                                      itemLayer: self.layers.board,
                                                      bottomLayer: self.layers.boardBack,
                                                      topLayer: self.layers.boardFront,
                                                      gravity: 2000,
                                                      effectScale: 1.5,
                                                      sparkleAnimation: {name:'images/specialEffect1.png', numCellsX:5, numCellsY:4, speed:15, looping:false},
                                                      splashAnimation: {name:'images/shatter.png', numCellsX:5, numCellsY:5, speed:60, looping:false},
                                                      explosionAnimation: {name:'images/bigBoom.png', numCellsX:6, numCellsY:4, speed:30, looping:false},
                                                      specialFourAnimation: {name:'images/flash.png', numCellsX:4, numCellsY:3, speed:15, looping:true},
                                                      specialFiveAnimation: {name:'images/fiveEffect.png',numCellsX:5, numCellsY:4, speed:30, looping:false},
                                                      glowSize:16

                                                  }});

                                                      // Create the timer
                                                  // var timerBarSprite = new Sprite('images/barTime.png', self.layers.front); //self.layers.front
                                                  // var timer = new SceneObject(timerBarSprite, Bar);
                                                  //       // timer.setSpriteOffsets(timerOffset);
                                                  // timer.removeOnGameOver = true;
                                                  // timer.timePassed = 0;
                                                  // timer.setPosition(150, 520);
                                                  //
                                                  // timer.onUpdate = function () {
                                                  //       timer.timePassed += wade.c_timeStep;
                                                  //       var percent = (30 - timer.timePassed) / 30 * 100;
                                                  // };
                                                  // wade.addSceneObject(timer, true);
                                                  // timer.getBehavior('Bar').init({bar: {size: {x: 580, y: 30},
                                                  //     timer: 30,
                                                  //     layer: self.layers.front,
                                                  //     reverse: true,
                                                  //     offset: {x:0,y:0},
                                                  //     spriteIndex: 1,
                                                  //     useGradient: true,
                                                  //     foreColor: ['#FF0000', '#FF0000'],
                                                  //     marker: 'images/markerTime.png',
                                                  //     markerLayer: self.layers.front}});





                                                  var progressSprite = new Sprite('images/progressBar.png', self.layers.front);
                                                  var progObj = new SceneObject(progressSprite);
                                                  //custom progress bar
                                                  progressSprite.setPosition(-147,594);
                                                  progressSprite.setSize(1,50);
                                                  progX = 0;
                                                  progH = -147;
                                                  wade.addSceneObject(progObj, true);

                                                  //MINIBARS
                                                  //nameboard 274x48  x 107 y 384   99px height difference

                                                  var nameProgressSprite = new Sprite('images/nameBoardBar.png', self.layers.front);
                                                  var namePObj = new SceneObject(nameProgressSprite);
                                                  //custom progress bar
                                                  nameProgressSprite.setPosition(nameProgH,-325);
                                                  nameProgressSprite.setSize(nameProgX,48);
                                                  wade.addSceneObject(namePObj, true);

                                                  var genderProgressSprite = new Sprite('images/genderBar.png', self.layers.front);
                                                  var genderPObj = new SceneObject(genderProgressSprite);
                                                  //custom progress bar
                                                  genderProgressSprite.setPosition(genderProgH,-226);
                                                  genderProgressSprite.setSize(genderProgX,48);
                                                  wade.addSceneObject(genderPObj, true);

                                                  var locationProgressSprite = new Sprite('images/locationBar.png', self.layers.front);
                                                  var locationPObj = new SceneObject(locationProgressSprite);
                                                  //custom progress bar
                                                  locationProgressSprite.setPosition(locationProgH,-127);
                                                  locationProgressSprite.setSize(locationProgX,48);
                                                  wade.addSceneObject(locationPObj, true);

                                                  var creditProgressSprite = new Sprite('images/creditBar.png', self.layers.front);
                                                  var creditPObj = new SceneObject(creditProgressSprite);
                                                  //custom progress bar
                                                  creditProgressSprite.setPosition(creditProgH,-28);
                                                  creditProgressSprite.setSize(creditProgX,48);
                                                  wade.addSceneObject(creditPObj, true);

                                                  var cakeProgressSprite = new Sprite('images/cakeBar.png', self.layers.front);
                                                  var cakePObj = new SceneObject(cakeProgressSprite);
                                                  //custom progress bar
                                                  cakeProgressSprite.setPosition(cakeProgH,71);
                                                  cakeProgressSprite.setSize(cakeProgX,48);
                                                  wade.addSceneObject(cakePObj, true);


                                                  wade.app.onScoreAdded = function(value)
                                                  {

                                                        if (progX<630){
                                                            progX += value/20;
                                                            progH += value/40;
                                                            progressSprite.setSize(progX,50);
                                                            progressSprite.setPosition(progH,594);

                                                          }

                                                          if (carryOverMatch==1){
                                                            nameProgX += value/20;
                                                            nameProgH += value/40;
                                                            nameProgressSprite.setSize(nameProgX, 48);
                                                            nameProgressSprite.setPosition(nameProgH, -325);
                                                          } else if (carryOverMatch==2){
                                                            genderProgX += value/20;
                                                            genderProgH += value/40;
                                                            genderProgressSprite.setSize(genderProgX, 48);
                                                            genderProgressSprite.setPosition(genderProgH, -226);
                                                          } else if (carryOverMatch==3){
                                                            locationProgX += value/20;
                                                            locationProgH += value/40;
                                                            locationProgressSprite.setSize(locationProgX, 48);
                                                            locationProgressSprite.setPosition(locationProgH, -127);
                                                          } else if (carryOverMatch==4){
                                                            creditProgX += value/20;
                                                            creditProgH += value/40;
                                                            creditProgressSprite.setSize(creditProgX, 48);
                                                            creditProgressSprite.setPosition(creditProgH, -28);
                                                          } else if (carryOverMatch==5){
                                                            cakeProgX += value/20;
                                                            cakeProgH += value/40;
                                                            cakeProgressSprite.setSize(cakeProgX, 48);
                                                            cakeProgressSprite.setPosition(cakeProgH, 71);
                                                          }

                                                          if (nameProgX > 274) {
                                                            nameProgX = 274;
                                                            nameProgH = -382;
                                                            nameProgressSprite.setSize(nameProgX, 48);
                                                            nameProgressSprite.setPosition(nameProgH, -325);
                                                            var successText = new TextSprite('ACHIEVED!','36px ArtDept1', 'white', 'center', self.layers.front);
                                                            var successObject = new SceneObject(successText);
                                                            successObject.setPosition(-382,-312);
                                                            bannerNameText.setVisible(true);
                                                            wade.addSceneObject(successObject, true);
                                                          }
                                                          if (genderProgX > 274) {
                                                            genderProgX = 274;
                                                            genderProgH = -382;
                                                            genderProgressSprite.setSize(genderProgX, 48);
                                                            genderProgressSprite.setPosition(genderProgH, -226);
                                                            var successText = new TextSprite('ACHIEVED!','36px ArtDept1', 'white', 'center', self.layers.front);
                                                            var successObject = new SceneObject(successText);
                                                            successObject.setPosition(-382,-213);
                                                            bannerGenderText.setVisible(true);
                                                            wade.addSceneObject(successObject, true);
                                                          }
                                                          if (locationProgX > 274) {
                                                            locationProgX = 274;
                                                            locationProgH = -382;
                                                            locationProgressSprite.setSize(locationProgX, 48);
                                                            locationProgressSprite.setPosition(locationProgH, -127);
                                                            var successText = new TextSprite('ACHIEVED!','36px ArtDept1', 'white', 'center', self.layers.front);
                                                            var successObject = new SceneObject(successText);
                                                            successObject.setPosition(-382,-114);
                                                            avocadoSprite.setVisible(true);
                                                            wade.addSceneObject(successObject, true);
                                                          }
                                                          if (creditProgX > 274) {
                                                            creditProgX = 274;
                                                            creditProgH = -382;
                                                            creditProgressSprite.setSize(creditProgX, 48);
                                                            creditProgressSprite.setPosition(creditProgH, -28);
                                                            var successText = new TextSprite('ACHIEVED!','36px ArtDept1', 'white', 'center', self.layers.front);
                                                            var successObject = new SceneObject(successText);
                                                            successObject.setPosition(-382,-15);
                                                            moneyTextS1 = new TextSprite('$', '40px ArtDept1', '#fbb040', 'center', self.layers.front);
                                                            moneyTextObj1 = new SceneObject(moneyTextS1);
                                                            moneyTextObj1.setPosition(-440, -375);
                                                            wade.addSceneObject(moneyTextObj1, true);

                                                            moneyTextS2 = new TextSprite('$', '40px ArtDept1', '#fbb040', 'center', self.layers.front);
                                                            moneyTextObj2 = new SceneObject(moneyTextS2);
                                                            moneyTextObj2.setPosition(-390, -375);
                                                            wade.addSceneObject(moneyTextObj2, true);

                                                            wade.addSceneObject(successObject, true);
                                                          }
                                                          if (cakeProgX > 274) {
                                                            cakeProgX = 274;
                                                            cakeProgH = -382;
                                                            cakeProgressSprite.setSize(cakeProgX, 48);
                                                            cakeProgressSprite.setPosition(cakeProgH, 71);
                                                            var successText = new TextSprite('ACHIEVED!','36px ArtDept1', 'white', 'center', self.layers.front);
                                                            var successObject = new SceneObject(successText);
                                                            successObject.setPosition(-382,84);
                                                            bannerAgeText.setVisible(true);
                                                            wade.addSceneObject(successObject, true);
                                                          }

                                                          if (nameProgX >= 274 && genderProgX >= 274 && locationProgX >= 274 && creditProgX >= 274 && cakeProgX >= 274){
                                                            ladySprite.setVisible(true);
                                                            if (alertBoolean == true){
                                                                alert("HEY! Look to the left. You gathered enough data to complete this person's profile. Now you know a lot of information about them!");
                                                                alertBoolean = false;
                                                            }
                                                          }


                                                        if (progX>=630){
                                                          progX = 630;
                                                          progH = 163;
                                                          var successText = new TextSprite('LEVEL ACHIEVED!','40px ArtDept1', 'white', 'center', self.layers.front);
                                                          var successObject = new SceneObject(successText);
                                                          successObject.setPosition(165,610);
                                                          wade.addSceneObject(successObject, true);

                                                          progressSprite.setSize(progX,50);
                                                          progressSprite.setPosition(progH,594);
                                                        }




                                                  };

                                                  self.inGameButtons();

                                                   popUp = new Sprite('images/popupMoves.png', self.layers.front);
                                                   popUpObject = new SceneObject(popUp);
                                                  popUpObject.setVisible(false);
                                                  wade.addSceneObject(popUpObject, true);

                                                   skipText = new Sprite('images/skip.png', self.layers.front);
                                                   skipObject = new SceneObject(skipText);
                                                  skipObject.setPosition(-300,450);
                                                  skipObject.setVisible(false);
                                                  skipText.setSize(120,80);
                                                  skipObject.onMouseUp = function(){
                                                    popUpObject.setVisible(false);
                                                    skipObject.setVisible(false);
                                                    skipArrowObject.setVisible(false);
                                                  }
                                                  wade.addSceneObject(skipObject, true);

                                                   skipArrowButton = new Sprite('images/skipArrow.png', self.layers.front);
                                                   skipArrowObject = new SceneObject(skipArrowButton);
                                                  skipArrowObject.setVisible(false);

                                                  skipArrowObject.onMouseUp = function(){
                                                    popUpObject.setVisible(false);
                                                    skipObject.setVisible(false);
                                                    skipArrowObject.setVisible(false);
                                                  }

                                                  skipArrowObject.setPosition(-200,450);

                                                  wade.addSceneObject(skipArrowObject, true);


                                                 var scoreText = new TextSprite('SEIZE THE DATA','64px ArtDept1', 'white', 'center', self.layers.front);
                                                 scoreText.setShadow('#000000', 1, 2, 2);
                                                 var scoreT = new TextSprite('', '42px Monopower', 'white', 'center', self.layers.front);
                                                 scoreT.setShadow('#000000', 3, 0, 4);
                                                 self.scoreObject = new SceneObject(scoreT, Counter);
                                                 self.scoreObject.removeOnGameOver = true;
                                                 self.scoreObject.setPosition(0, -wade.getScreenHeight()/2 + 138);
                                                 self.scoreObject.addSprite(scoreText, {x:230, y:-65});
                                                 wade.addSceneObject(self.scoreObject);


                                                 movesText = new TextSprite('Moves: ' + moves, '40px ArtDept1', 'white', 'left', self.layers.front);
                                                 movesText.setShadow('#000000', 1,2,2);
                                                 movesObject = new SceneObject(movesText, Counter);
                                                 movesObject.setPosition(130,-580);
                                                 wade.addSceneObject(movesObject);

                                                 //business boy
                                                 boySprite = new Sprite('images/businessBoy1.png', self.layers.front);
                                                 boyObject = new SceneObject(boySprite);
                                                 boyObject.setPosition(-470, 508);
                                                 boyObject.setVisible(true);
                                                 wade.addSceneObject(boyObject, true);

                                                 boyMadSprite = new Sprite('images/businessBoy2.png', self.layers.front);
                                                 boyMadObject = new SceneObject(boyMadSprite);
                                                 boyMadObject.setPosition(-470,508);
                                                 boyMadObject.setVisible(false);
                                                 wade.addSceneObject(boyMadObject, true);

                                                 boyTalkSprite = new Sprite('images/businessBoy3.png', self.layers.front);
                                                 boyTalkObject = new SceneObject(boyTalkSprite);
                                                 boyTalkObject.setVisible(false);
                                                 boyTalkObject.setPosition(-470,508);
                                                 wade.addSceneObject(boyTalkObject, true);

                                                 //speech bubble
                                                 var speechSprite = new Sprite('images/speechBubble2.png', self.layers.front);
                                                 var speechObject = new SceneObject(speechSprite);
                                                 speechObject.setPosition(-295,350);
                                                 wade.addSceneObject(speechObject, true);

                                                 speechText = new TextSprite('Welcome!\nMatch 3 pieces\nof data to\nbegin!', '26px Helvetica', 'black', 'center', self.layers.front);
                                                 speechTextObject = new SceneObject(speechText);
                                                 speechTextObject.setPosition(-294,310);
                                                 speechTextObject.setVisible(true);
                                                 wade.addSceneObject(speechTextObject, true);

                                                 //avocado background and lady
                                                 avocadoSprite = new Sprite('images/avocadoFarm.png', self.layers.front);
                                                 avocadoObject = new SceneObject(avocadoSprite);
                                                 avocadoObject.setPosition(-392,-536);
                                                 avocadoSprite.setVisible(false);
                                                 if (imagePercent >= 50){
                                                     avocadoSprite.setVisible(true);
                                                 }



                                                 wade.addSceneObject(avocadoObject, true);

                                                 ladySprite = new Sprite('images/avocadoLady.png', self.layers.front);
                                                 ladyObject = new SceneObject(ladySprite);
                                                 ladyObject.setPosition(-392,-507);
                                                 ladySprite.setVisible(false);
                                                 if (imagePercent >= 100){
                                                    ladySprite.setVisible(true);
                                                 }
                                                 wade.addSceneObject(ladyObject, true);

                                                 bannerSprite = new Sprite('images/nameBanner.png', self.layers.front);
                                                 bannerObject = new SceneObject(bannerSprite);
                                                 bannerObject.setPosition(-392, -670);
                                                 bannerSprite.setSize(300, 100);
                                                 bannerObject.setVisible(true);
                                                 wade.addSceneObject(bannerObject, true);

                                                 bannerGenderText = new Sprite('images/femaleSymbol.png', self.layers.front);
                                                 bGTObject = new SceneObject(bannerGenderText);
                                                 bannerGenderText.setSize(25,38);
                                                 bGTObject.setPosition(-290, -681);
                                                 bannerGenderText.setVisible(false);
                                                 wade.addSceneObject(bGTObject, true);

                                                 bannerNameText = new TextSprite('Denise', '30px Monopower', 'white', 'left', self.layers.front);
                                                 bNTObject = new SceneObject(bannerNameText);
                                                 bNTObject.setPosition(-510, -670);
                                                 bannerNameText.setVisible(false);
                                                 wade.addSceneObject(bNTObject, true);

                                                 bannerAgeText = new TextSprite('65', '30px Monopower', 'white', 'right', self.layers.front);
                                                 bATObject = new SceneObject(bannerAgeText);
                                                 bATObject.setPosition(-310, -670);
                                                 bannerAgeText.setVisible(false);
                                                 wade.addSceneObject(bATObject);


                                                 moneyTextS1 = new TextSprite('$', '40px ArtDept1', '#414042', 'center', self.layers.front);
                                                 moneyTextObj1 = new SceneObject(moneyTextS1);
                                                 moneyTextObj1.setPosition(-440, -375);
                                                 wade.addSceneObject(moneyTextObj1, true);

                                                 moneyTextS2 = new TextSprite('$', '40px ArtDept1', '#414042', 'center', self.layers.front);
                                                 moneyTextObj2 = new SceneObject(moneyTextS2);
                                                 moneyTextObj2.setPosition(-390, -375);
                                                 wade.addSceneObject(moneyTextObj2, true);

                                                 moneyTextS3 = new TextSprite('$', '40px ArtDept1', '#414042', 'center', self.layers.front);
                                                 moneyTextObj3 = new SceneObject(moneyTextS3);
                                                 moneyTextObj3.setPosition(-340, -375);
                                                 wade.addSceneObject(moneyTextObj3, true);





                                                //  var percentText = new TextSprite(imagePercent + '%', '50px ArtDept1', 'black', 'center', self.layers.front);
                                                //  var percentObject = new SceneObject(percentText);
                                                //  percentObject.setPosition(-385,-675);
                                                //  wade.addSceneObject(percentObject, true);


                                                // Increment score (progess)
                                                  self.onMatch = function(match)
                                                  {

                                                  };

                                                  //PRE GAME NOTICE


                                              };
                                          }
                                          wade.addSceneObject(t4, true);
                                    }
                                    wade.addSceneObject(t3, true);
                              }

                              wade.addSceneObject(t2, true);
                      }

                      wade.addSceneObject(t1, true);
                      wade.addSceneObject(t1Agree, true);
                }

        playButton.setPosition(0, 50);
        playButtonSprite.setDrawFunction(wade.drawFunctions.resizeOverTime_ (30, 16, 473, 137, 0.3, playButtonSprite.getDrawFunction(), function()
        {

            // Create credits button
            var creditsButtonSprite = new Sprite('images/buttonCredit.png', self.layers.front);
            var creditsButton = new SceneObject(creditsButtonSprite);
            creditsButtonSprite.setDrawFunction(wade.drawFunctions.resizeOverTime_(30, 16, 323, 110, 0.3, creditsButtonSprite.getDrawFunction()));
            creditsButton.onMouseUp = function()
            {
                wade.clearScene();
                self.credits();
            };
            creditsButton.setPosition(0, 200);
            wade.addSceneObject(creditsButton, true);




        }));
        wade.addSceneObject(playButton, true);

        // Create wade icon
        var wadeSprite = new Sprite('images/wadePowered.png', self.layers.front);
        var wadeObj = new SceneObject(wadeSprite);
        wadeObj.setPosition(wade.getScreenWidth()/2 - wadeSprite.getSize().x/2, wade.getScreenHeight()/2 - wadeSprite.getSize().y/2);
        wadeObj.onMouseUp = function()
        {
            open('http://www.clockworkchilli.com');
        };
        wade.addSceneObject(wadeObj, true);
    };

/**
* Creates the instructions page
*/
    // this.instructions = function()
    // {
    //   //track the page for appropriate navigation
    //
    //   //background
    //   if (page == 0){
    //     var inSprite = new Sprite('images/instructions0.png', self.layers.front);
    //     var inObject = new SceneObject(inSprite);
    //   }
    //   else if (page == 1){
    //     var inSprite = new Sprite('images/instructions1.png', self.layers.front);
    //     var inObject = new SceneObject(inSprite);
    //   } else if (page == 2) {
    //     var inSprite = new Sprite('images/instructions2.png', self.layers.front);
    //     var inObject = new SceneObject(inSprite);
    //   } else if (page == 3) {
    //     var inSprite = new Sprite('images/instructions3.png', self.layers.front);
    //     var inObject = new SceneObject(inSprite);
    //   } else if (page == 4) {
    //     var inSprite = new Sprite('images/instructions4.png', self.layers.front);
    //     var inObject = new SceneObject(inSprite);
    //   }
    //
    //   wade.addSceneObject(inObject);
    //   //arrows function
    //
    //   arrows = function()
    //   {
    //     arrowSpriteLeft = new Sprite('images/leftArrow.png', self.layers.front);
    //     arrowObjectLeft = new SceneObject(arrowSpriteLeft);
    //     arrowSpriteRight = new Sprite('images/rightArrow.png', self.layers.front);
    //     arrowObjectRight = new SceneObject(arrowSpriteRight);
    //     arrowObjectLeft.setPosition(-wade.getScreenWidth()/2 + 50, 0);
    //     arrowObjectRight.setPosition(wade.getScreenWidth()/2 - 50, 0);
    //     arrowObjectLeft.onMouseUp = function(){
    //       page = page - 1;
    //       if (page == -1){
    //         wade.clearScene();
    //         self.game();
    //       } else {
    //         wade.clearScene();
    //         self.instructions();
    //       }
    //     }
    //     arrowObjectRight.onMouseUp = function(){
    //       page = page + 1;
    //       if (page == 5){
    //         wade.clearScene();
    //         self.game();
    //       } else {
    //         wade.clearScene();
    //         self.instructions();
    //       }
    //     }
    //     wade.addSceneObject(arrowObjectLeft, true);
    //     wade.addSceneObject(arrowObjectRight, true);
    //   }
    //
    //   arrows();
    //
    //
    //
    // }

    /**
     * Creates the credits page
     */
    this.credits = function()
    {
        // Credits background
        var backgroundSprite = new Sprite('images/creditsMenuBackground.png', this.layers.front);
        var background = new SceneObject(backgroundSprite);
        wade.addSceneObject(background);

        // Main menu button
        var backSprite = new Sprite('images/buttonBack.png', this.layers.front);
        var backButton = new SceneObject(backSprite);
        backButton.onMouseUp = function()
        {
            wade.clearScene();
            self.game();
        };
        backButton.setPosition(0, wade.getScreenHeight()/2 - 75);
        wade.addSceneObject(backButton, true);


        // Link to sound
        // var soundLink = new TextSprite('www.soundimage.org','30px ArtDept1', 'white', 'center', this.layers.front);
        // var soundObject = new SceneObject(soundLink);
        // soundObject.onMouseUp = function()
        // {
        //     open('http://www.soundimage.org');
        // };
        // soundObject.setPosition(0, 400);
        // wade.addSceneObject(soundObject, true);
    };

    /**
     * Creates the buttons on the bottom bar in game
     */
    this.inGameButtons = function()
    {
        // Create the music mute button
        if(self.musicMuted)
        {
            var muteSprite = new Sprite('images/audioButtonOff.png', self.layers.front);
        }
        else
        {
            var muteSprite = new Sprite('images/audioButton.png', self.layers.front);
        }

        var muteButton = new SceneObject(muteSprite);
        muteButton.removeOnGameOver = true;
        muteButton.onMouseDown = function()
        {
            self.musicMuted = !self.musicMuted;
            self.soundMuted = !self.soundMuted;
            if(self.musicMuted)
            {
                if(self.musicPlaying)
                {
                    self.musicPlaying = false;

                    wade.stopAudio(self.musicSource);
                    muteSprite.setImageFile('images/audioButtonOff.png');
                }
                else
                {
                    self.musicMuted = !self.musicMuted;
                    self.soundMuted = !self.soundMuted;
                }

            }
            else
            {
                if(!self.musicPlaying)
                {
                    self.musicPlaying = true;
                    self.musicSource = wade.playAudio('sounds/Surreal-Chase.ogg', true);
                    muteSprite.setImageFile('images/audioButton.png');
                }
                else
                {
                    self.musicMuted = !self.musicMuted;
                    self.soundMuted = !self.soundMuted;
                }
            }
        };
        muteButton.setPosition(18, wade.getScreenHeight()/2 - (muteSprite.getSize().y/2)+2);
        wade.addSceneObject(muteButton, true);



        // Create the main menu button
        var menuSprite = new Sprite('images/buttonBack.png', self.layers.front);
        var menuObject = new SceneObject(menuSprite);
        menuObject.removeOnGameOver = true;
        menuObject.onMouseUp = function()
        {
            wade.setMainLoopCallback(null,'update');
            wade.stopAudio(self.musicSource);
            wade.clearScene(); // Clear the scene

            self.game(); // Create main menu
        };
        menuObject.setPosition(433, wade.getScreenHeight()/2 - (muteSprite.getSize().y/2)+2);
        wade.addSceneObject(menuObject, true);


    };

    /**
     * Gets called by match 3 logic on game over condition
     */
    this.onGameOver = function()
    {
        this.gameOver = false;
        self.musicPlaying = false;
        wade.stopAudio(self.musicSource);

        // Create explosion sound
        if(!wade.app.musicMuted)
        {
            wade.playAudioIfAvailable('sounds/explosion1.ogg');
        }



        // Get previous bests
        // var scoresObj = wade.retrieveLocalObject("match3Scores");
        // if(scoresObj)
        // {
        //     self.scores = scoresObj;
        // }
        // self.scores.values.push(self.scoreObject.getBehavior().getValue());
        // self.scores.values.sort(function(a, b){return b-a});
        // self.scores.values.length = 3;
        // wade.storeLocalObject("match3Scores", self.scores);

        // Remove buttons
        wade.removeSceneObjects(wade.getSceneObjects('removeOnGameOver', true));



        if (progX < 610) {

          // Create darker area
          var darkSprite = new Sprite(null, self.layers.front);
          darkSprite.setSize(wade.getScreenWidth(), wade.getScreenHeight());
          this.blackArea = new SceneObject(darkSprite);
          this.blackArea.onMouseDown = function()
          {
              return true;
          };
          this.blackArea.onMouseUp = function()
          {
              return true;
          };
          darkSprite.cache();
          darkSprite.setDrawFunction(wade.drawFunctions.solidFill_('rgba(0, 0, 0, 0.4)'));
          wade.addSceneObject(this.blackArea);

        var timeOutSprite = new TextSprite('Out of Moves!','72px ArtDept1', 'white', 'center', self.layers.front);
        timeOutSprite.setShadow('#000',3 ,4 ,4);
        timeOutSprite.cache();
        timeOutSprite.setDrawFunction(wade.drawFunctions.fadeOpacity_(0.0, 1.0, 2.0, timeOutSprite.getDrawFunction(),function()
        {
            // You Scored message



            var youScoredSprite = new TextSprite('You didn\'t achieve the level...','42px ArtDept1', 'white', 'center', self.layers.front);

            youScoredSprite.setShadow('#000',1 ,2 ,2);
            youScoredSprite.cache();
            youScoredSprite.setDrawFunction(wade.drawFunctions.fadeOpacity_(0.0, 1.0, 1.0, timeOutSprite.getDrawFunction(), function()
            {
                // Previous scores
                var scoreSprite = new TextSprite('Try again!','42px ArtDept1', 'white', 'left', self.layers.front);
                scoreSprite.setShadow('#000',1 ,2 ,2);
                scoreSprite.cache();
                scoreSprite.setDrawFunction(wade.drawFunctions.fadeOpacity_(0.0, 1.0, 1.0, scoreSprite.getDrawFunction(), function()
                {
                    // Create the back button, will go back to main menu
                    var backButtonSprite = new Sprite('images/buttonBack.png', self.layers.front);

                    var backButton = new SceneObject(backButtonSprite);
                    backButton.setPosition(0, 250);
                    backButtonSprite.setDrawFunction(wade.drawFunctions.fadeOpacity_(0, 1, 0.5, backButtonSprite.getDrawFunction()));

                    backButton.onMouseUp = function() // Go to main menu
                    {
                        wade.clearScene();
                        self.game();
                    };
                    wade.addSceneObject(backButton, true);

                }));
                var scoreTextObject = new SceneObject(scoreSprite);
                scoreTextObject.setPosition(-scoreSprite.getSize().x/2, 0);
                wade.addSceneObject(scoreTextObject);
            }));

            titleObject.addSprite(youScoredSprite, {x:0, y: 75});
        }));
        var titleObject = new SceneObject(timeOutSprite);
        titleObject.setPosition(0, -200);
        wade.addSceneObject(titleObject);
      }

      if (progX >= 610)

      //level achieved
      {
        wade.clearScene();


        wade.clearScene();   //filter out remaining scene items

        var finalBack1 = new Sprite('images/endGame.png', self.layers.superFront);
        var finalObj1 = new SceneObject(finalBack1);
        finalBack1.setSize(1252, 1466);
        wade.addSceneObject(finalObj1, true);

        var nameBox = new TextSprite(name, '120px ArtDept1', 'white', 'center', self.layers.superFront);
        var nameObject = new SceneObject(nameBox);
        nameObject.setPosition(0,-430);
        wade.addSceneObject(nameObject, true);

        var ageBox = new TextSprite(age,'120px ArtDept1', 'white', 'center', self.layers.superFront);
        var ageObject = new SceneObject(ageBox);
        ageObject.setPosition(0,-120);
        wade.addSceneObject(ageObject, true);

        var countryBox = new TextSprite(country, '100px ArtDept1', 'white', 'center', self.layers.superFront);
        var countryObject = new SceneObject(countryBox);
        countryObject.setPosition(130,160);
        wade.addSceneObject(countryObject, true);


        var whatText = new Sprite('images/what.png', self.layers.superFront);
        var whatObject = new SceneObject(whatText);
        whatObject.setPosition(150,550);
        whatText.setSize(786,104);
        whatObject.onMouseUp = function(){
          wade.clearScene();

            var backFINAL = new Sprite('images/endAgreement.png', self.layers.superFront);
            var backOBJECT = new SceneObject(backFINAL);
            backFINAL.setSize(1252, 1466);
            wade.addSceneObject(backOBJECT, true);

            var homeFINAL = new Sprite('images/endHome.png', self.layers.superFront);
            var homeOBJECT = new SceneObject(homeFINAL);
            homeOBJECT.onMouseUp = function(){
                wade.clearScene();

                var end3Sprite = new Sprite('images/endScreen3.png', self.layers.superFront);
                var end3Object = new SceneObject(end3Sprite);
                end3Sprite.setSize(1252,1466);
                wade.addSceneObject(end3Object, true);

                var returnSprite = new Sprite('images/returnText.png', self.layers.superFront);
                var returnObject = new SceneObject(returnSprite);
                returnSprite.setPosition(250,650);
                returnObject.onMouseUp = function(){
                        wade.clearScene();
                        self.game();
                }
                wade.addSceneObject(returnObject, true);


            }
            homeOBJECT.setPosition(250,600);
            homeFINAL.setSize(400,150);
            wade.addSceneObject(homeOBJECT, true);


        }

        wade.addSceneObject(whatObject, true);



      };

     };

};

//@ sourceURL=app.js
