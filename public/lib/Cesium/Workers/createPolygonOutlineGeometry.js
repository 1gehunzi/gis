define(["./when-229515d6","./Matrix2-f0fc6cd3","./ArcType-e1641d8d","./GeometryOffsetAttribute-369d5efa","./Transforms-4a1d2c0e","./RuntimeError-8f3d96ee","./ComponentDatatype-5f63ec93","./EllipsoidTangentPlane-3f1b123a","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./GeometryInstance-28411208","./GeometryPipeline-c36432c1","./IndexDatatype-c2b69fc2","./PolygonGeometryLibrary-0cf237e6","./PolygonPipeline-583f5389","./combine-6d9c3903","./WebGLConstants-f63312fc","./AxisAlignedBoundingBox-0ebb51f1","./IntersectionTests-3a1d2826","./Plane-863ea815","./AttributeCompression-0ee09568","./EncodedCartesian3-55eee0ea","./arrayRemoveDuplicates-7cd4e18c","./EllipsoidRhumbLine-0893952b"],(function(e,t,i,r,o,n,a,s,l,y,u,p,d,c,f,g,m,h,b,P,E,A,_,G){"use strict";const L=[],T=[];function H(e,t,r,o,n){const p=s.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,L);let g,m;f.PolygonPipeline.computeWindingOrder2D(p)===f.WindingOrder.CLOCKWISE&&(p.reverse(),t=t.slice().reverse());let h=t.length,b=0;if(o)for(g=new Float64Array(2*h*3),m=0;m<h;m++){const e=t[m],i=t[(m+1)%h];g[b++]=e.x,g[b++]=e.y,g[b++]=e.z,g[b++]=i.x,g[b++]=i.y,g[b++]=i.z}else{let o=0;if(n===i.ArcType.GEODESIC)for(m=0;m<h;m++)o+=c.PolygonGeometryLibrary.subdivideLineCount(t[m],t[(m+1)%h],r);else if(n===i.ArcType.RHUMB)for(m=0;m<h;m++)o+=c.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[m],t[(m+1)%h],r);for(g=new Float64Array(3*o),m=0;m<h;m++){let o;n===i.ArcType.GEODESIC?o=c.PolygonGeometryLibrary.subdivideLine(t[m],t[(m+1)%h],r,T):n===i.ArcType.RHUMB&&(o=c.PolygonGeometryLibrary.subdivideRhumbLine(e,t[m],t[(m+1)%h],r,T));const a=o.length;for(let e=0;e<a;++e)g[b++]=o[e]}}h=g.length/3;const P=2*h,E=d.IndexDatatype.createTypedArray(h,P);for(b=0,m=0;m<h-1;m++)E[b++]=m,E[b++]=m+1;return E[b++]=h-1,E[b++]=0,new u.GeometryInstance({geometry:new l.Geometry({attributes:new y.GeometryAttributes({position:new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:g})}),indices:E,primitiveType:l.PrimitiveType.LINES})})}function v(e,t,r,o,n){const p=s.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,L);let g,m;f.PolygonPipeline.computeWindingOrder2D(p)===f.WindingOrder.CLOCKWISE&&(p.reverse(),t=t.slice().reverse());let h=t.length;const b=new Array(h);let P=0;if(o)for(g=new Float64Array(2*h*3*2),m=0;m<h;++m){b[m]=P/3;const e=t[m],i=t[(m+1)%h];g[P++]=e.x,g[P++]=e.y,g[P++]=e.z,g[P++]=i.x,g[P++]=i.y,g[P++]=i.z}else{let o=0;if(n===i.ArcType.GEODESIC)for(m=0;m<h;m++)o+=c.PolygonGeometryLibrary.subdivideLineCount(t[m],t[(m+1)%h],r);else if(n===i.ArcType.RHUMB)for(m=0;m<h;m++)o+=c.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[m],t[(m+1)%h],r);for(g=new Float64Array(3*o*2),m=0;m<h;++m){let o;b[m]=P/3,n===i.ArcType.GEODESIC?o=c.PolygonGeometryLibrary.subdivideLine(t[m],t[(m+1)%h],r,T):n===i.ArcType.RHUMB&&(o=c.PolygonGeometryLibrary.subdivideRhumbLine(e,t[m],t[(m+1)%h],r,T));const a=o.length;for(let e=0;e<a;++e)g[P++]=o[e]}}h=g.length/6;const E=b.length,A=2*(2*h+E),_=d.IndexDatatype.createTypedArray(h+E,A);for(P=0,m=0;m<h;++m)_[P++]=m,_[P++]=(m+1)%h,_[P++]=m+h,_[P++]=(m+1)%h+h;for(m=0;m<E;m++){const e=b[m];_[P++]=e,_[P++]=e+h}return new u.GeometryInstance({geometry:new l.Geometry({attributes:new y.GeometryAttributes({position:new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:g})}),indices:_,primitiveType:l.PrimitiveType.LINES})})}function O(r){const o=r.polygonHierarchy,n=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84),s=e.defaultValue(r.granularity,a.CesiumMath.RADIANS_PER_DEGREE),l=e.defaultValue(r.perPositionHeight,!1),y=l&&e.defined(r.extrudedHeight),u=e.defaultValue(r.arcType,i.ArcType.GEODESIC);let p=e.defaultValue(r.height,0),d=e.defaultValue(r.extrudedHeight,p);if(!y){const e=Math.max(p,d);d=Math.min(p,d),p=e}this._ellipsoid=t.Ellipsoid.clone(n),this._granularity=s,this._height=p,this._extrudedHeight=d,this._arcType=u,this._polygonHierarchy=o,this._perPositionHeight=l,this._perPositionHeightExtrude=y,this._offsetAttribute=r.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=c.PolygonGeometryLibrary.computeHierarchyPackedLength(o)+t.Ellipsoid.packedLength+8}O.pack=function(i,r,o){return o=e.defaultValue(o,0),o=c.PolygonGeometryLibrary.packPolygonHierarchy(i._polygonHierarchy,r,o),t.Ellipsoid.pack(i._ellipsoid,r,o),o+=t.Ellipsoid.packedLength,r[o++]=i._height,r[o++]=i._extrudedHeight,r[o++]=i._granularity,r[o++]=i._perPositionHeightExtrude?1:0,r[o++]=i._perPositionHeight?1:0,r[o++]=i._arcType,r[o++]=e.defaultValue(i._offsetAttribute,-1),r[o]=i.packedLength,r};const x=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),C={polygonHierarchy:{}};return O.unpack=function(i,r,o){r=e.defaultValue(r,0);const n=c.PolygonGeometryLibrary.unpackPolygonHierarchy(i,r);r=n.startingIndex,delete n.startingIndex;const a=t.Ellipsoid.unpack(i,r,x);r+=t.Ellipsoid.packedLength;const s=i[r++],l=i[r++],y=i[r++],u=1===i[r++],p=1===i[r++],d=i[r++],f=i[r++],g=i[r];return e.defined(o)||(o=new O(C)),o._polygonHierarchy=n,o._ellipsoid=t.Ellipsoid.clone(a,o._ellipsoid),o._height=s,o._extrudedHeight=l,o._granularity=y,o._perPositionHeight=p,o._perPositionHeightExtrude=u,o._arcType=d,o._offsetAttribute=-1===f?void 0:f,o.packedLength=g,o},O.fromPositions=function(t){return new O({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},O.createGeometry=function(t){const i=t._ellipsoid,n=t._granularity,s=t._polygonHierarchy,y=t._perPositionHeight,u=t._arcType,d=c.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(s,!y,i);if(0===d.length)return;let g;const m=[],h=a.CesiumMath.chordLength(n,i.maximumRadius),b=t._height,P=t._extrudedHeight;let E,A;if(t._perPositionHeightExtrude||!a.CesiumMath.equalsEpsilon(b,P,0,a.CesiumMath.EPSILON2))for(A=0;A<d.length;A++){if(g=v(i,d[A],h,y,u),g.geometry=c.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(g.geometry,b,P,i,y),e.defined(t._offsetAttribute)){const e=g.geometry.attributes.position.values.length/3;let i=new Uint8Array(e);t._offsetAttribute===r.GeometryOffsetAttribute.TOP?i=r.arrayFill(i,1,0,e/2):(E=t._offsetAttribute===r.GeometryOffsetAttribute.NONE?0:1,i=r.arrayFill(i,E)),g.geometry.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}m.push(g)}else for(A=0;A<d.length;A++){if(g=H(i,d[A],h,y,u),g.geometry.attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(g.geometry.attributes.position.values,b,i,!y),e.defined(t._offsetAttribute)){const e=g.geometry.attributes.position.values.length,i=new Uint8Array(e/3);E=t._offsetAttribute===r.GeometryOffsetAttribute.NONE?0:1,r.arrayFill(i,E),g.geometry.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}m.push(g)}const _=p.GeometryPipeline.combineInstances(m)[0],G=o.BoundingSphere.fromVertices(_.attributes.position.values);return new l.Geometry({attributes:_.attributes,indices:_.indices,primitiveType:_.primitiveType,boundingSphere:G,offsetAttribute:t._offsetAttribute})},function(i,r){return e.defined(r)&&(i=O.unpack(i,r)),i._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),O.createGeometry(i)}}));
