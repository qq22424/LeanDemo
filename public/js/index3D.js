$(function(){
			var camera, scene, renderer;
			var controls;

			var objects = [];
			var targets = { Table: [], sphere: [], helix: [], grid: [] };
			$.ajax({ 
				type: "get", 
				url: '/assets/citydata.json', 
				dataType: "json", 
				success: function (data) { 
					init(data);
					animate();
					
				}, 
				error: function (XMLHttpRequest, textStatus, errorThrown) { 
				alert(errorThrown+" 网络错误 "); 
				} 
			});
			$('#container').on('click', '.element', function() {
				$this = $(this);
				$index = $this.index();
				alert("当前城市（"+$index+"）还未开放"+" "+"工程师正在加紧建设中~")
			})
	
			
			

			function init(table) {			
			camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;
				scene = new THREE.Scene();
				// Table

				for ( var i = 0; i < table.length; i++ ) {

					var element = document.createElement( 'div' );
					element.className = 'element';
					element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

					var number = document.createElement( 'div' );
					number.className = 'number';
					number.textContent = i+1;
					element.appendChild( number );

					var symbol = document.createElement( 'div' );
					symbol.className = 'symbol';
					symbol.textContent = table[i].name;
					element.appendChild( symbol );

					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[i].creatTime + '<br>' + table[i].userNmuber;
					element.appendChild( details );

					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );

					objects.push( object );

					//

					var object = new THREE.Object3D();
					object.position.x = ( (table[i].positionx ) * 140 ) - 1330;
					object.position.y = -(( table[i].positiony) * 180 ) + 990;

					targets.Table.push( object );

				}

				// sphere

				var vector = new THREE.Vector3();
				var spherical = new THREE.Spherical();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = Math.acos( -1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;

					var object = new THREE.Object3D();

					spherical.set( 800, phi, theta );

					object.position.setFromSpherical( spherical );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}

				// helix

				var vector = new THREE.Vector3();
				var cylindrical = new THREE.Cylindrical();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var theta = i * 0.175 + Math.PI;
					var y = - ( i * 8 ) + 450;

					var object = new THREE.Object3D();

					cylindrical.set( 900, theta, y );

					object.position.setFromCylindrical( cylindrical );

					vector.x = object.position.x * 2;
					vector.y = object.position.y;
					vector.z = object.position.z * 2;

					object.lookAt( vector );

					targets.helix.push( object );

				}
				

				// grid

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = new THREE.Object3D();

					object.position.x = ( ( i % 5 ) * 400 ) - 800;
					object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
					object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

					targets.grid.push( object );

				}
			
				//

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.domElement.style.position = 'absolute';
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 0.5;
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );
// 切换到table
				var button = document.getElementById( 'table' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.Table, 2000 );

				}, false );
// 切换到圆形
				var button = document.getElementById( 'sphere' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.sphere, 2000 );

				}, false );
// 切换到螺旋
				var button = document.getElementById( 'helix' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.helix, 2000 );

				}, false );
// 切换到栅格
				var button = document.getElementById( 'grid' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.grid, 2000 );

				}, false );
//默认形态
				transform( targets.Table, 2000 );

//屏幕大小适应
				window.addEventListener( 'resize', onWindowResize, false );

//登录页面			
            	var button = document.getElementById( 'login_out' );
				button.addEventListener( 'click', function ( event ) {
                    	window.location.href='/login';

			})
		
		}

		function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];
					var target = targets[ i ];
					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();
				}

					new TWEEN.Tween( this )
						.to( {}, duration * 2 )
						.onUpdate( render )
						.start();

			}		


			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				render();
			}
		


			function render() {
				renderer.render( scene, camera );

			}


			function animate() {
				requestAnimationFrame( animate );
				TWEEN.update();
				controls.update();
			}
	
})