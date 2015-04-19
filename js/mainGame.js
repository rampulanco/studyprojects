	console.log("Game module");
	
    // Matter aliases
    var Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        Events = Matter.Events,
        Bounds = Matter.Bounds,
        Vector = Matter.Vector,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Query = Matter.Query;

    // MatterTools aliases
    if (window.MatterTools) {
        var Gui = MatterTools.Gui,
            Inspector = MatterTools.Inspector;
    }

    var Demo = {};

    var _engine,
        _gui,
        _inspector,
        _sceneName,
        _mouseConstraint,
        _sceneEvents = [],
        _useInspector = window.location.hash.indexOf('-inspect') !== -1,
        _isMobile = /(ipad|iphone|ipod|android)/gi.test(navigator.userAgent);
    
    // call init when the page has loaded fully

    /*if (window.addEventListener) {
        window.addEventListener('load', Demo.init);
    } else if (window.attachEvent) {
        window.attachEvent('load', Demo.init);
    }*/

    Demo.init = function() {
        var container = document.getElementById('game-container');

        // some example engine options
        var options = {
            positionIterations: 6,
            velocityIterations: 4,
            enableSleeping: false
        };

        // create a Matter engine
        // NOTE: this is actually Matter.Engine.create(), see the aliases at top of this file
        _engine = Engine.create(container, options);

        // add a mouse controlled constraint
        _mouseConstraint = MouseConstraint.create(_engine);
        World.add(_engine.world, _mouseConstraint);

        // run the engine
        Engine.run(_engine);

        // default scene function name
        _sceneName = 'mixed';
        
        // get the scene function name from hash
        if (window.location.hash.length !== 0) 
            _sceneName = window.location.hash.replace('#', '').replace('-inspect', '');

        // set up a scene with bodies
        Demo.mixed();

        // set up demo interface (see end of this file)
        //Demo.initControls();
    };

    Demo.mixed = function() {
        var _world = _engine.world;
		console.log(_mouseConstraint+' '+Events);
		
		Demo.reset();
		
		var tablet_t = Bodies.circle( 35 * Common.random(1, 14), -(1 * 40), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-01.png' }  } } );
		var tablet_o = Bodies.circle( 35 * Common.random(1, 14), -(2 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-02.png' }  } } );
		var tablet_l = Bodies.circle( 35 * Common.random(1, 14), -(3 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-03.png' }  } } );
		var tablet_a = Bodies.circle( 35 * Common.random(1, 14), -(4 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-04.png' }  } } );
		var tablet_n = Bodies.circle( 35 * Common.random(1, 14), -(5 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-05.png' }  } } );
		var tablet_z = Bodies.circle( 35 * Common.random(1, 14), -(6 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-06.png' }  } } );
		var tablet_x = Bodies.circle( 35 * Common.random(1, 14), -(7 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-07.png' }  } } );
		var tablet_y = Bodies.circle( 35 * Common.random(1, 14), -(8 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-08.png' }  } } );
		var tablet_w = Bodies.circle( 35 * Common.random(1, 14), -(9 * 80), 20, { frictionAir:0.06, render: { sprite: { texture: './images/tablet-09.png' }  } } );
		
			
		
		var renderOptions = {fillStyle:'transparent', strokeStyle:'transparent'};
		//var renderOptions = {fillStyle:'red'};
		var platform1 = Bodies.rectangle( 180, 66, 32, 12, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform1, .7);
		var platform2 = Bodies.rectangle( 384, 79, 60, 15, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform2, -.6);	
		var platform3 = Bodies.rectangle(227, 157, 37, 15, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform3, .7);		
		var platform4 = Bodies.rectangle(109, 138, 60, 15, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform4, .24);				
		var platform5 = Bodies.rectangle(378, 203, 80, 15, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform5, .5);		
		var platform6 = Bodies.rectangle(293, 240, 30, 13, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform6, 1.74);	
		var platform7 = Bodies.rectangle(127, 245, 55, 13, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform7, 2.5);			
		var platform8 = Bodies.rectangle(120, 413, 80, 14, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform8, .5);	
		var platform9 = Bodies.rectangle(287, 327, 81, 14, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform9, .44);	
		var platform10 = Bodies.rectangle(182, 338, 48, 15, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform10, 1.2);			
		var platform11 = Bodies.rectangle(88, 445, 50, 12, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform11, 1.23);		
		var platform12 = Bodies.rectangle(428, 455, 50, 12, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform12, 1.23);	
		var platform13 = Bodies.rectangle(372, 400, 70, 14, { isStatic:true, chamfer: { radius:5 }, render: renderOptions} );
		Body.rotate(platform13, 2.6);			
		
		var pin1 = Bodies.rectangle(85, 504, 4, 44, { isStatic:true, chamfer: { radius:3 }, render: renderOptions} );	
		var pin2 = Bodies.rectangle(152, 504, 4, 44, { isStatic:true, chamfer: { radius:3 }, render: renderOptions} );	
		var pin3 = Bodies.rectangle(219, 504, 4, 44, { isStatic:true, chamfer: { radius:3 }, render: renderOptions} );	
		var pin4 = Bodies.rectangle(285, 504, 4, 44, { isStatic:true, chamfer: { radius:3 }, render: renderOptions} );	
		var pin5 = Bodies.rectangle(350, 504, 4, 44, { isStatic:true, chamfer: { radius:3 }, render: renderOptions} );	
		var pin6 = Bodies.rectangle(411, 504, 4, 44, { isStatic:true, chamfer: { radius:3 }, render: renderOptions} );	
		
		var bottle = Bodies.rectangle(-64, 540, 34, 60, { isStatic:true, chamfer: { radius:3 }, render: {fillStyle:'blue', sprite: { texture: './images/bottle.png' } } } );	
		
        World.add( _world, [
					tablet_t, tablet_o, tablet_l, tablet_a, tablet_n, tablet_z, tablet_x, tablet_y, tablet_w,
					platform1,platform2,platform3,platform4,platform5,platform6,platform7,platform8,platform9,platform10,platform13,
					pin1,pin2,pin3,pin4,pin5,pin6,
					bottle
				]
			);     
				
			
		var newX = 0;
		var tablets = [tablet_t, tablet_o, tablet_l, tablet_a, tablet_n, tablet_z, tablet_x, tablet_y, tablet_w];
		Events.on(_engine, 'tick', function() {
			for (var i = 0; i < tablets.length; i++) {
				if(tablets[i].position.y > 650){
					newX = Common.random(35, 500) - tablets[i].position.x;
					Body.translate( tablets[i], { x:newX, y:-650 } );
				}
			}
			//console.log((_mouseConstraint.mouse.position.x - bottle.position.x ) );
			
			if(_mouseConstraint.mouse.position.x > 46 && _mouseConstraint.mouse.position.x < 440){
				bottle.position.x = _mouseConstraint.mouse.position.x;
			}
        });	
		
        var renderOptions = _engine.render.options;
		renderOptions.background = './images/tolanz.png';
		renderOptions.wireframes = false;
		
    };

  

   Demo.sprites = function() {
        var _world = _engine.world,
            offset = 10,
            options = { 
                isStatic: true,
                render: {
                    visible: false
                }
            };

        Demo.reset();
        _world.bodies = [];

        // these static walls will not be rendered in this sprites example, see options
        World.add(_world, [
            Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 40, options),
            Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 40, options),
            Bodies.rectangle(800 + offset, 300, 40, 600.5 + 2 * offset, options),
            Bodies.rectangle(-offset, 300, 40, 600.5 + 2 * offset, options)
        ]);
			

        var stack = Composites.stack(20, 20, 15, 4, 0, 0, function(x, y, column, row) {
            if (Common.random() > 0.35) {
                return Bodies.rectangle(x, y, 64, 64, {
                    render: {
                        strokeStyle: '#ffffff',
                        sprite: {
                            texture: './images/box.png'
                        }
                    }
                });
            } else {
                return Bodies.circle(x, y, 46, {
                    density: 0.0005,
                    frictionAir: 0.06,
                    restitution: 0.3,
                    friction: 0.01,
                    render: {
                        sprite: {
                            texture: './images/ball.png'
                        }
                    }
                });
            }
        });

        World.add(_world, stack);

        var renderOptions = _engine.render.options;
        renderOptions.background = './images/wall-bg.jpg';
        renderOptions.showAngleIndicator = false;
        renderOptions.wireframes = false;
    };

    
    
    Demo.reset = function() {
        var _world = _engine.world;
        
        World.clear(_world);
        Engine.clear(_engine);

        // clear scene graph (if defined in controller)
        var renderController = _engine.render.controller;
        if (renderController.clear)
            renderController.clear(_engine.render);

        // clear all scene events
        for (var i = 0; i < _sceneEvents.length; i++)
            Events.off(_engine, _sceneEvents[i]);

        if (_mouseConstraint.events) {
            for (i = 0; i < _sceneEvents.length; i++)
                Events.off(_mouseConstraint, _sceneEvents[i]);
        }

        if (_world.events) {
            for (i = 0; i < _sceneEvents.length; i++)
                Events.off(_world, _sceneEvents[i]);
        }

        _sceneEvents = [];

        // reset id pool
        Common._nextId = 0;

        // reset random seed
        Common._seed = 0;

        // reset mouse offset and scale (only required for Demo.views)
        Mouse.setScale(_mouseConstraint.mouse, { x: 1, y: 1 });
        Mouse.setOffset(_mouseConstraint.mouse, { x: 0, y: 0 });

        _engine.enableSleeping = false;
        _engine.world.gravity.y = 1;
        _engine.world.gravity.x = 0;
        _engine.timing.timeScale = 1;

		var renderOptions = {fillStyle:'transparent', strokeStyle:'transparent'};
        World.add(_world, [
            Bodies.rectangle(0, 0, 50, 1224, { isStatic: true, render: renderOptions }),
            Bodies.rectangle(490, 0,50, 1224, { isStatic: true, render: renderOptions })
        ]);
		
		//World.add(_world, _mouseConstraint);
			
        var renderOptions = _engine.render.options;
        renderOptions.wireframes = true;
        renderOptions.hasBounds = false;
        renderOptions.showDebug = false;
        renderOptions.showBroadphase = false;
        renderOptions.showBounds = false;
        renderOptions.showVelocity = false;
        renderOptions.showCollisions = false;
        renderOptions.showAxes = false;
        renderOptions.showPositions = false;
        renderOptions.showAngleIndicator = false;
        renderOptions.showIds = false;
        renderOptions.showShadows = false;
        renderOptions.background = '#0000ff';

        //if (_isMobile)
            renderOptions.showDebug = true;
    };


