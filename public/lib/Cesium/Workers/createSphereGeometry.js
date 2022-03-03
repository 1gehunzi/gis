define(["./when-229515d6","./Matrix2-f0fc6cd3","./RuntimeError-8f3d96ee","./EllipsoidGeometry-51deea95","./VertexFormat-af764a6f","./ComponentDatatype-5f63ec93","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-369d5efa","./Transforms-4a1d2c0e","./combine-6d9c3903","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./IndexDatatype-c2b69fc2"],(function(e,t,i,r,o,a,n,s,c,d,l,m,f){"use strict";function u(i){const o=e.defaultValue(i.radius,1),a={radii:new t.Cartesian3(o,o,o),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,vertexFormat:i.vertexFormat};this._ellipsoidGeometry=new r.EllipsoidGeometry(a),this._workerName="createSphereGeometry"}u.packedLength=r.EllipsoidGeometry.packedLength,u.pack=function(e,t,i){return r.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,i)};const p=new r.EllipsoidGeometry,y={radius:void 0,radii:new t.Cartesian3,vertexFormat:new o.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return u.unpack=function(i,a,n){const s=r.EllipsoidGeometry.unpack(i,a,p);return y.vertexFormat=o.VertexFormat.clone(s._vertexFormat,y.vertexFormat),y.stackPartitions=s._stackPartitions,y.slicePartitions=s._slicePartitions,e.defined(n)?(t.Cartesian3.clone(s._radii,y.radii),n._ellipsoidGeometry=new r.EllipsoidGeometry(y),n):(y.radius=s._radii.x,new u(y))},u.createGeometry=function(e){return r.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,i){return e.defined(i)&&(t=u.unpack(t,i)),u.createGeometry(t)}}));
