/* eslint-disable*/
var map

function initMap (options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 31.835256, lng: 117.219292, alt: 128, heading: 120, pitch: -41 },
      fxaa: true
    }
  })

  // 创建三维地球场景
  map = new mars3d.Map('mars3dContainer', mapOptions)

  var center = Cesium.Cartesian3.fromDegrees(117.220206, 31.834866, 50)
  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center)

  var meshVisualizer = new Cesium.MeshVisualizer({
    modelMatrix: modelMatrix,
    up: { y: 1 },
    referenceAxisParameter: {
      length: 100,
      width: 0.05,
      headLength: 2,
      headWidth: 0.1
    }
  })
  map.scene.primitives.add(meshVisualizer)
  meshVisualizer.showReference = true // 显示坐标轴

  Cesium.Cartesian3.prototype.set = function (x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }
  Cesium.Quaternion.prototype.set = function (x, y, z, w) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  Ammo().then(function () {
    // - Global variables -
    var DISABLE_DEACTIVATION = 4
    var TRANSFORM_AUX = new Ammo.btTransform()
    var ZERO_QUATERNION = new Cesium.Quaternion(0, 0, 0, 1)

    // Graphics variables
    var materialDynamic, materialStatic, materialInteractive

    // Physics variables
    var collisionConfiguration
    var dispatcher
    var broadphase
    var solver
    var physicsWorld

    var syncList = []
    var time = 0
    var objectTimePeriod = 3
    var timeNextSpawn = time + objectTimePeriod
    var maxNumObjects = 30

    // Keybord actions
    var actions = {}
    var keysActions = {
      KeyW: 'acceleration',
      KeyS: 'braking',
      KeyA: 'left',
      KeyD: 'right'
    }

    // - Functions -

    function initGraphics () {
      materialDynamic = createMaterial()
      materialStatic = createMaterial()
      materialInteractive = createMaterial()

      window.addEventListener('keydown', keydown)
      window.addEventListener('keyup', keyup)
    }

    function initPhysics () {
      // Physics configuration
      collisionConfiguration = new Ammo.btDefaultCollisionConfiguration()
      dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration)
      broadphase = new Ammo.btDbvtBroadphase()
      solver = new Ammo.btSequentialImpulseConstraintSolver()
      physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration)
      physicsWorld.setGravity(new Ammo.btVector3(0, -9.82, 0))
    }

    function updatePhysics (deltTime) {
      for (var i = 0; i < syncList.length; i++) {
        syncList[i](deltTime)
      }
      physicsWorld.stepSimulation(deltTime, 10)
      time += deltTime
    }

    function keyup (e) {
      if (keysActions[e.code]) {
        actions[keysActions[e.code]] = false
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }
    function keydown (e) {
      if (keysActions[e.code]) {
        actions[keysActions[e.code]] = true
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    function createBox (pos, quat, w, l, h, mass, friction) {
      var material = createMaterial() //= mass > 0 ? materialDynamic : materialStatic;
      var shape = Cesium.BoxGeometry.fromDimensions({
        dimensions: new Cesium.Cartesian3(w, l, h),
        vertexFormat: new Cesium.VertexFormat({
          position: true,
          normal: true
        })
      })

      var geometry = new Ammo.btBoxShape(new Ammo.btVector3(w * 0.5, l * 0.5, h * 0.5))

      if (!mass) {
        mass = 0
      }
      if (!friction) {
        friction = 1
      }

      var mesh = new Cesium.Mesh(shape, material)
      Cesium.Cartesian3.clone(pos, mesh.position)
      mesh.quaternion = new Cesium.Quaternion(quat.x, quat.y, quat.z, quat.w)
      meshVisualizer.add(mesh)

      var transform = new Ammo.btTransform()
      transform.setIdentity()
      transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z))
      transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w))
      var motionState = new Ammo.btDefaultMotionState(transform)

      var localInertia = new Ammo.btVector3(0, 0, 0)
      geometry.calculateLocalInertia(mass, localInertia)

      var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, geometry, localInertia)
      var body = new Ammo.btRigidBody(rbInfo)

      body.setFriction(friction)
      // body.setRestitution(.9);
      // body.setDamping(0.2, 0.2);

      physicsWorld.addRigidBody(body)

      if (mass > 0) {
        body.setActivationState(DISABLE_DEACTIVATION)
        // Sync physics and graphics
        // eslint-disable-next-line no-inner-declarations
        function sync (dt) {
          var ms = body.getMotionState()
          if (ms) {
            ms.getWorldTransform(TRANSFORM_AUX)
            var p = TRANSFORM_AUX.getOrigin()
            var q = TRANSFORM_AUX.getRotation()
            mesh.position.set(p.x(), p.y(), p.z())
            mesh.quaternion.set(q.x(), q.y(), q.z(), q.w())
            mesh.modelMatrixNeedsUpdate = true
          }
        }

        syncList.push(sync)
      }
    }

    function createWheelMesh (radius, width) {
      var t = new Cesium.CylinderGeometry({
        length: width,
        topRadius: radius,
        bottomRadius: radius,
        slices: 24
      })
      // var t = new THREE.CylinderGeometry(radius, radius, width, 24, 1);

      var mesh = new Cesium.Mesh(t, materialInteractive)
      Cesium.GeometryUtils.rotateY(mesh.geometry, Math.PI / 2)
      mesh.quaternion = new Cesium.Quaternion() // Cesium.Quaternion.fromAxisAngle(new Cesium.Cartesian3(0, 0, 1), Math.PI / 2);

      var shape = Cesium.BoxGeometry.fromDimensions({
        dimensions: new Cesium.Cartesian3(width * 1.5, radius * 1.75, radius * 0.25),
        vertexFormat: new Cesium.VertexFormat({
          position: true,
          normal: true
        })
      })
      var meshShape = new Cesium.Mesh(shape, materialInteractive)

      meshShape.quaternion = new Cesium.Quaternion() // .fromAxisAngle(new Cesium.Cartesian3(0, 0, 1), 0);
      mesh.add(meshShape)
      meshVisualizer.add(mesh)
      return mesh
    }

    function createChassisMesh (w, l, h) {
      var shape = Cesium.BoxGeometry.fromDimensions({
        dimensions: new Cesium.Cartesian3(w, l, h),
        vertexFormat: new Cesium.VertexFormat({
          position: true,
          normal: true
        })
      })

      var mesh = new Cesium.Mesh(shape, materialInteractive)
      mesh.quaternion = new Cesium.Quaternion(0, 0, 0, 1)
      meshVisualizer.add(mesh)
      return mesh
    }

    function createVehicle (pos, quat) {
      // Vehicle contants

      var chassisWidth = 1.8
      var chassisHeight = 0.6
      var chassisLength = 4
      var massVehicle = 800

      var wheelAxisPositionBack = -1
      var wheelRadiusBack = 0.4
      var wheelWidthBack = 0.3
      var wheelHalfTrackBack = 1
      var wheelAxisHeightBack = 0.3

      var wheelAxisFrontPosition = 1.7
      var wheelHalfTrackFront = 1
      var wheelAxisHeightFront = 0.3
      var wheelRadiusFront = 0.35
      var wheelWidthFront = 0.2

      var friction = 1000
      var suspensionStiffness = 20.0
      var suspensionDamping = 2.3
      var suspensionCompression = 4.4
      var suspensionRestLength = 0.6
      var rollInfluence = 0.2

      var steeringIncrement = 0.04
      var steeringClamp = 0.5
      var maxEngineForce = 2000
      var maxBreakingForce = 100

      // Chassis
      var geometry = new Ammo.btBoxShape(new Ammo.btVector3(chassisWidth * 0.5, chassisHeight * 0.5, chassisLength * 0.5))
      var transform = new Ammo.btTransform()
      transform.setIdentity()
      transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z))
      transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w))
      var motionState = new Ammo.btDefaultMotionState(transform)
      var localInertia = new Ammo.btVector3(0, 0, 0)
      geometry.calculateLocalInertia(massVehicle, localInertia)
      var body = new Ammo.btRigidBody(new Ammo.btRigidBodyConstructionInfo(massVehicle, motionState, geometry, localInertia))
      body.setActivationState(DISABLE_DEACTIVATION)
      physicsWorld.addRigidBody(body)
      var chassisMesh = createChassisMesh(chassisWidth, chassisHeight, chassisLength)

      // Raycast Vehicle
      var engineForce = 0
      var vehicleSteering = 0
      var breakingForce = 0
      var tuning = new Ammo.btVehicleTuning()
      var rayCaster = new Ammo.btDefaultVehicleRaycaster(physicsWorld)
      var vehicle = new Ammo.btRaycastVehicle(tuning, body, rayCaster)
      vehicle.setCoordinateSystem(0, 1, 2)
      physicsWorld.addAction(vehicle)

      // Wheels
      var FRONT_LEFT = 0
      var FRONT_RIGHT = 1
      var BACK_LEFT = 2
      var BACK_RIGHT = 3
      var wheelMeshes = []
      var wheelDirectionCS0 = new Ammo.btVector3(0, -1, 0)
      var wheelAxleCS = new Ammo.btVector3(-1, 0, 0)

      function addWheel (isFront, pos, radius, width, index) {
        var wheelInfo = vehicle.addWheel(pos, wheelDirectionCS0, wheelAxleCS, suspensionRestLength, radius, tuning, isFront)

        wheelInfo.set_m_suspensionStiffness(suspensionStiffness)
        wheelInfo.set_m_wheelsDampingRelaxation(suspensionDamping)
        wheelInfo.set_m_wheelsDampingCompression(suspensionCompression)
        wheelInfo.set_m_frictionSlip(friction)
        wheelInfo.set_m_rollInfluence(rollInfluence)

        wheelMeshes[index] = createWheelMesh(radius, width)
      }

      addWheel(
        true,
        new Ammo.btVector3(wheelHalfTrackFront, wheelAxisHeightFront, wheelAxisFrontPosition),
        wheelRadiusFront,
        wheelWidthFront,
        FRONT_LEFT
      )
      addWheel(
        true,
        new Ammo.btVector3(-wheelHalfTrackFront, wheelAxisHeightFront, wheelAxisFrontPosition),
        wheelRadiusFront,
        wheelWidthFront,
        FRONT_RIGHT
      )
      addWheel(
        false,
        new Ammo.btVector3(-wheelHalfTrackBack, wheelAxisHeightBack, wheelAxisPositionBack),
        wheelRadiusBack,
        wheelWidthBack,
        BACK_LEFT
      )
      addWheel(
        false,
        new Ammo.btVector3(wheelHalfTrackBack, wheelAxisHeightBack, wheelAxisPositionBack),
        wheelRadiusBack,
        wheelWidthBack,
        BACK_RIGHT
      )

      // Sync keybord actions and physics and graphics
      function sync (dt) {
        var speed = vehicle.getCurrentSpeedKmHour()
        // console.log((speed < 0 ? '(R) ' : '') + Math.abs(speed).toFixed(1) + ' km/h')
        // speedometer.innerHTML = (speed < 0 ? '(R) ' : '') + Math.abs(speed).toFixed(1) + ' km/h';

        breakingForce = 0
        engineForce = 0

        if (actions.acceleration) {
          if (speed < -1) {
            breakingForce = maxBreakingForce
          } else {
            engineForce = maxEngineForce
          }
        }
        if (actions.braking) {
          if (speed > 1) {
            breakingForce = maxBreakingForce
          } else {
            engineForce = -maxEngineForce / 2
          }
        }
        if (actions.left) {
          if (vehicleSteering < steeringClamp) {
            vehicleSteering += steeringIncrement
          }
        } else {
          if (actions.right) {
            if (vehicleSteering > -steeringClamp) {
              vehicleSteering -= steeringIncrement
            }
          } else {
            if (vehicleSteering < -steeringIncrement) {
              vehicleSteering += steeringIncrement
            } else {
              if (vehicleSteering > steeringIncrement) {
                vehicleSteering -= steeringIncrement
              } else {
                vehicleSteering = 0
              }
            }
          }
        }

        vehicle.applyEngineForce(engineForce, BACK_LEFT)
        vehicle.applyEngineForce(engineForce, BACK_RIGHT)

        vehicle.setBrake(breakingForce / 2, FRONT_LEFT)
        vehicle.setBrake(breakingForce / 2, FRONT_RIGHT)
        vehicle.setBrake(breakingForce, BACK_LEFT)
        vehicle.setBrake(breakingForce, BACK_RIGHT)

        vehicle.setSteeringValue(vehicleSteering, FRONT_LEFT)
        vehicle.setSteeringValue(vehicleSteering, FRONT_RIGHT)

        var tm, p, q, i
        var n = vehicle.getNumWheels()
        for (i = 0; i < n; i++) {
          vehicle.updateWheelTransform(i, true)
          tm = vehicle.getWheelTransformWS(i)
          p = tm.getOrigin()
          q = tm.getRotation()
          wheelMeshes[i].position.set(p.x(), p.y(), p.z())
          wheelMeshes[i].quaternion.set(q.x(), q.y(), q.z(), q.w())

          wheelMeshes[i].modelMatrixNeedsUpdate = true
        }

        tm = vehicle.getChassisWorldTransform()
        p = tm.getOrigin()
        q = tm.getRotation()
        chassisMesh.position.set(p.x(), p.y(), p.z())
        chassisMesh.quaternion.set(q.x(), q.y(), q.z(), q.w())
        chassisMesh.modelMatrixNeedsUpdate = true
      }

      syncList.push(sync)
    }

    function createObjects () {
      createBox(new Cesium.Cartesian3(0, -0.5, 0), ZERO_QUATERNION, 75, 1, 75, 0, 2)

      var quaternion = new Cesium.Quaternion(0, 0, 0, 1)
      Cesium.Quaternion.fromAxisAngle(new Cesium.Cartesian3(1, 0, 0), -Math.PI / 18, quaternion)
      createBox(new Cesium.Cartesian3(0, -1.5, 0), quaternion, 8, 4, 10, 0)

      var size = 0.75
      var nw = 8
      var nh = 6
      for (var j = 0; j < nw; j++) {
        for (var i = 0; i < nh; i++) {
          createBox(new Cesium.Cartesian3(size * j - (size * (nw - 1)) / 2, size * i, 10), ZERO_QUATERNION, size, size, size, 10)
        }
      }

      createVehicle(new Cesium.Cartesian3(0, 4, -20), ZERO_QUATERNION)
    }

    var start = false
    var init = false
    var startTime = new Date()
    function update (frameState) {
      var deltaTime = (new Date() - startTime) / 1000.0
      updatePhysics(deltaTime)
      startTime = new Date()
    }
    setTimeout(function () {
      if (!init) {
        // - Init -
        initGraphics()
        initPhysics()
        createObjects()
        init = true
      }
      if (!start) {
        meshVisualizer.beforeUpdate.addEventListener(update)
        start = true
      } else {
        meshVisualizer.beforeUpdate.removeEventListener(update)
        start = false
      }
    }, 1000 * 3)
  })
}

function createRandomColor () {
  return Cesium.Color.fromRandom({ alpha: 1 }) // fromRgba(Math.floor(Math.random() * (1 << 24)));
}
function createMaterial () {
  return new Cesium.MeshPhongMaterial({
    defaultColor: createRandomColor(),
    side: Cesium.MeshMaterial.Sides.DOUBLE,
    translucent: false
  })
}
