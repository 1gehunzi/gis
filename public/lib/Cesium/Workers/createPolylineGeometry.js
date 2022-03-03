define(["./when-229515d6","./Matrix2-f0fc6cd3","./ArcType-e1641d8d","./arrayRemoveDuplicates-7cd4e18c","./Transforms-4a1d2c0e","./Color-f48e883d","./ComponentDatatype-5f63ec93","./RuntimeError-8f3d96ee","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./IndexDatatype-c2b69fc2","./PolylinePipeline-8d9de722","./VertexFormat-af764a6f","./combine-6d9c3903","./WebGLConstants-f63312fc","./EllipsoidGeodesic-412b0c43","./EllipsoidRhumbLine-0893952b","./IntersectionTests-3a1d2826","./Plane-863ea815"],(function(e,t,o,n,r,a,i,l,s,c,p,d,u,y,m,f,h,C,g){"use strict";const _=[];function A(e,t,o,n,r){const i=_;let l;i.length=r;const s=o.red,c=o.green,p=o.blue,d=o.alpha,u=n.red,y=n.green,m=n.blue,f=n.alpha;if(a.Color.equals(o,n)){for(l=0;l<r;l++)i[l]=a.Color.clone(o);return i}const h=(u-s)/r,C=(y-c)/r,g=(m-p)/r,A=(f-d)/r;for(l=0;l<r;l++)i[l]=new a.Color(s+l*h,c+l*C,p+l*g,d+l*A);return i}function E(n){const r=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).positions,l=n.colors,s=e.defaultValue(n.width,1),c=e.defaultValue(n.colorsPerVertex,!1);this._positions=r,this._colors=l,this._width=s,this._colorsPerVertex=c,this._vertexFormat=u.VertexFormat.clone(e.defaultValue(n.vertexFormat,u.VertexFormat.DEFAULT)),this._arcType=e.defaultValue(n.arcType,o.ArcType.GEODESIC),this._granularity=e.defaultValue(n.granularity,i.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84)),this._workerName="createPolylineGeometry";let p=1+r.length*t.Cartesian3.packedLength;p+=e.defined(l)?1+l.length*a.Color.packedLength:1,this.packedLength=p+t.Ellipsoid.packedLength+u.VertexFormat.packedLength+4}E.pack=function(o,n,r){let i;r=e.defaultValue(r,0);const l=o._positions;let s=l.length;for(n[r++]=s,i=0;i<s;++i,r+=t.Cartesian3.packedLength)t.Cartesian3.pack(l[i],n,r);const c=o._colors;for(s=e.defined(c)?c.length:0,n[r++]=s,i=0;i<s;++i,r+=a.Color.packedLength)a.Color.pack(c[i],n,r);return t.Ellipsoid.pack(o._ellipsoid,n,r),r+=t.Ellipsoid.packedLength,u.VertexFormat.pack(o._vertexFormat,n,r),r+=u.VertexFormat.packedLength,n[r++]=o._width,n[r++]=o._colorsPerVertex?1:0,n[r++]=o._arcType,n[r]=o._granularity,n};const P=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),b=new u.VertexFormat,w={positions:void 0,colors:void 0,ellipsoid:P,vertexFormat:b,width:void 0,colorsPerVertex:void 0,arcType:void 0,granularity:void 0};E.unpack=function(o,n,r){let i;n=e.defaultValue(n,0);let l=o[n++];const s=new Array(l);for(i=0;i<l;++i,n+=t.Cartesian3.packedLength)s[i]=t.Cartesian3.unpack(o,n);l=o[n++];const c=l>0?new Array(l):void 0;for(i=0;i<l;++i,n+=a.Color.packedLength)c[i]=a.Color.unpack(o,n);const p=t.Ellipsoid.unpack(o,n,P);n+=t.Ellipsoid.packedLength;const d=u.VertexFormat.unpack(o,n,b);n+=u.VertexFormat.packedLength;const y=o[n++],m=1===o[n++],f=o[n++],h=o[n];return e.defined(r)?(r._positions=s,r._colors=c,r._ellipsoid=t.Ellipsoid.clone(p,r._ellipsoid),r._vertexFormat=u.VertexFormat.clone(d,r._vertexFormat),r._width=y,r._colorsPerVertex=m,r._arcType=f,r._granularity=h,r):(w.positions=s,w.colors=c,w.width=y,w.colorsPerVertex=m,w.arcType=f,w.granularity=h,new E(w))};const x=new t.Cartesian3,T=new t.Cartesian3,D=new t.Cartesian3,k=new t.Cartesian3;return E.createGeometry=function(l){const u=l._width,y=l._vertexFormat;let m=l._colors;const f=l._colorsPerVertex,h=l._arcType,C=l._granularity,g=l._ellipsoid;let E,P,b;const w=[];let v=n.arrayRemoveDuplicates(l._positions,t.Cartesian3.equalsEpsilon,!1,w);if(e.defined(m)&&w.length>0){let e=0,t=w[0];m=m.filter((function(o,n){let r=!1;return r=f?n===t||0===n&&1===t:n+1===t,!r||(e++,t=w[e],!1)}))}let V=v.length;if(V<2||u<=0)return;if(h===o.ArcType.GEODESIC||h===o.ArcType.RHUMB){let t,n;h===o.ArcType.GEODESIC?(t=i.CesiumMath.chordLength(C,g.maximumRadius),n=d.PolylinePipeline.numberOfPoints):(t=C,n=d.PolylinePipeline.numberOfPointsRhumbLine);const r=d.PolylinePipeline.extractHeights(v,g);if(e.defined(m)){let e=1;for(E=0;E<V-1;++E)e+=n(v[E],v[E+1],t);const o=new Array(e);let r=0;for(E=0;E<V-1;++E){const i=v[E],l=v[E+1],s=m[E],c=n(i,l,t);if(f&&E<e){const e=A(0,0,s,m[E+1],c),t=e.length;for(P=0;P<t;++P)o[r++]=e[P]}else for(P=0;P<c;++P)o[r++]=a.Color.clone(s)}o[r]=a.Color.clone(m[m.length-1]),m=o,_.length=0}v=h===o.ArcType.GEODESIC?d.PolylinePipeline.generateCartesianArc({positions:v,minDistance:t,ellipsoid:g,height:r}):d.PolylinePipeline.generateCartesianRhumbArc({positions:v,granularity:t,ellipsoid:g,height:r})}V=v.length;const L=4*V-4,F=new Float64Array(3*L),G=new Float64Array(3*L),O=new Float64Array(3*L),R=new Float32Array(2*L),I=y.st?new Float32Array(2*L):void 0,S=e.defined(m)?new Uint8Array(4*L):void 0;let B,U=0,N=0,M=0,H=0;for(P=0;P<V;++P){let o,n;0===P?(B=x,t.Cartesian3.subtract(v[0],v[1],B),t.Cartesian3.add(v[0],B,B)):B=v[P-1],t.Cartesian3.clone(B,D),t.Cartesian3.clone(v[P],T),P===V-1?(B=x,t.Cartesian3.subtract(v[V-1],v[V-2],B),t.Cartesian3.add(v[V-1],B,B)):B=v[P+1],t.Cartesian3.clone(B,k),e.defined(S)&&(o=0===P||f?m[P]:m[P-1],P!==V-1&&(n=m[P]));const r=P===V-1?2:4;for(b=0===P?2:0;b<r;++b){t.Cartesian3.pack(T,F,U),t.Cartesian3.pack(D,G,U),t.Cartesian3.pack(k,O,U),U+=3;const r=b-2<0?-1:1;if(R[N++]=b%2*2-1,R[N++]=r*u,y.st&&(I[M++]=P/(V-1),I[M++]=Math.max(R[N-2],0)),e.defined(S)){const e=b<2?o:n;S[H++]=a.Color.floatToByte(e.red),S[H++]=a.Color.floatToByte(e.green),S[H++]=a.Color.floatToByte(e.blue),S[H++]=a.Color.floatToByte(e.alpha)}}}const W=new c.GeometryAttributes;W.position=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F}),W.prevPosition=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:G}),W.nextPosition=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:O}),W.expandAndWidth=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:R}),y.st&&(W.st=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:I})),e.defined(S)&&(W.color=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:S,normalize:!0}));const Y=p.IndexDatatype.createTypedArray(L,6*V-6);let q=0,z=0;const J=V-1;for(P=0;P<J;++P)Y[z++]=q,Y[z++]=q+2,Y[z++]=q+1,Y[z++]=q+1,Y[z++]=q+2,Y[z++]=q+3,q+=4;return new s.Geometry({attributes:W,indices:Y,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:r.BoundingSphere.fromPoints(v),geometryType:s.GeometryType.POLYLINES})},function(o,n){return e.defined(n)&&(o=E.unpack(o,n)),o._ellipsoid=t.Ellipsoid.clone(o._ellipsoid),E.createGeometry(o)}}));
