define(["./when-229515d6","./Matrix2-f0fc6cd3","./RuntimeError-8f3d96ee","./EllipsoidOutlineGeometry-6f5a7019","./ComponentDatatype-5f63ec93","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-369d5efa","./Transforms-4a1d2c0e","./combine-6d9c3903","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./IndexDatatype-c2b69fc2"],(function(e,i,t,n,o,r,s,a,d,c,l,u){"use strict";function m(t){const o=e.defaultValue(t.radius,1),r={radii:new i.Cartesian3(o,o,o),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions};this._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(r),this._workerName="createSphereOutlineGeometry"}m.packedLength=n.EllipsoidOutlineGeometry.packedLength,m.pack=function(e,i,t){return n.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};const f=new n.EllipsoidOutlineGeometry,p={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return m.unpack=function(t,o,r){const s=n.EllipsoidOutlineGeometry.unpack(t,o,f);return p.stackPartitions=s._stackPartitions,p.slicePartitions=s._slicePartitions,p.subdivisions=s._subdivisions,e.defined(r)?(i.Cartesian3.clone(s._radii,p.radii),r._ellipsoidGeometry=new n.EllipsoidOutlineGeometry(p),r):(p.radius=s._radii.x,new m(p))},m.createGeometry=function(e){return n.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=m.unpack(i,t)),m.createGeometry(i)}}));
