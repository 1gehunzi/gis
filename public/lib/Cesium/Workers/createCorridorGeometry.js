define(["./GeometryOffsetAttribute-369d5efa","./arrayRemoveDuplicates-7cd4e18c","./Transforms-4a1d2c0e","./Matrix2-f0fc6cd3","./RuntimeError-8f3d96ee","./ComponentDatatype-5f63ec93","./PolylineVolumeGeometryLibrary-d3ae69ea","./CorridorGeometryLibrary-2c8a56b1","./when-229515d6","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./IndexDatatype-c2b69fc2","./PolygonPipeline-583f5389","./VertexFormat-af764a6f","./combine-6d9c3903","./WebGLConstants-f63312fc","./EllipsoidTangentPlane-3f1b123a","./AxisAlignedBoundingBox-0ebb51f1","./IntersectionTests-3a1d2826","./Plane-863ea815","./PolylinePipeline-8d9de722","./EllipsoidGeodesic-412b0c43","./EllipsoidRhumbLine-0893952b"],(function(t,e,r,a,i,o,n,s,l,d,u,c,m,f,y,p,g,h,C,b,A,_,w){"use strict";const v=new a.Cartesian3,T=new a.Cartesian3,G=new a.Cartesian3,E=new a.Cartesian3,V=new a.Cartesian3,x=new a.Cartesian3,F=new a.Cartesian3,L=new a.Cartesian3;function P(t,e){for(let r=0;r<t.length;r++)t[r]=e.scaleToGeodeticSurface(t[r],t[r]);return t}function N(t,e,r,i,o,n){const l=t.normals,d=t.tangents,u=t.bitangents,c=a.Cartesian3.normalize(a.Cartesian3.cross(r,e,F),F);n.normal&&s.CorridorGeometryLibrary.addAttribute(l,e,i,o),n.tangent&&s.CorridorGeometryLibrary.addAttribute(d,c,i,o),n.bitangent&&s.CorridorGeometryLibrary.addAttribute(u,r,i,o)}function D(t,e,r){const i=t.positions,n=t.corners,m=t.endPositions,f=t.lefts,y=t.normals,p=new u.GeometryAttributes;let g,h,C,b=0,A=0,_=0;for(h=0;h<i.length;h+=2)C=i[h].length-3,b+=C,_+=2*C,A+=i[h+1].length-3;for(b+=3,A+=3,h=0;h<n.length;h++){g=n[h];const t=n[h].leftPositions;l.defined(t)?(C=t.length,b+=C,_+=C):(C=n[h].rightPositions.length,A+=C,_+=C)}const w=l.defined(m);let V;w&&(V=m[0].length-3,b+=V,A+=V,V/=3,_+=6*V);const P=b+A,D=new Float64Array(P),M={normals:e.normal?new Float32Array(P):void 0,tangents:e.tangent?new Float32Array(P):void 0,bitangents:e.bitangent?new Float32Array(P):void 0};let O,I,S,R,k,H,z=0,B=P-1,U=v,Y=T;const W=V/2,q=c.IndexDatatype.createTypedArray(P/3,_);let J=0;if(w){H=G,k=E;const t=m[0];for(U=a.Cartesian3.fromArray(y,0,U),Y=a.Cartesian3.fromArray(f,0,Y),h=0;h<W;h++)H=a.Cartesian3.fromArray(t,3*(W-1-h),H),k=a.Cartesian3.fromArray(t,3*(W+h),k),s.CorridorGeometryLibrary.addAttribute(D,k,z),s.CorridorGeometryLibrary.addAttribute(D,H,void 0,B),N(M,U,Y,z,B,e),I=z/3,R=I+1,O=(B-2)/3,S=O-1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3}let j,K,Q=0,X=0,Z=i[Q++],$=i[Q++];for(D.set(Z,z),D.set($,B-$.length+1),Y=a.Cartesian3.fromArray(f,X,Y),C=$.length-3,h=0;h<C;h+=3)j=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z,h,F),F),K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,C-h,L),L),U=a.Cartesian3.normalize(a.Cartesian3.add(j,K,U),U),N(M,U,Y,z,B,e),I=z/3,R=I+1,O=(B-2)/3,S=O-1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3;for(j=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z,C,F),F),K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,C,L),L),U=a.Cartesian3.normalize(a.Cartesian3.add(j,K,U),U),X+=3,h=0;h<n.length;h++){let t;g=n[h];const o=g.leftPositions,d=g.rightPositions;let u,c,m=x,p=G,b=E;if(U=a.Cartesian3.fromArray(y,X,U),l.defined(o)){for(N(M,U,Y,void 0,B,e),B-=3,u=R,c=S,t=0;t<o.length/3;t++)m=a.Cartesian3.fromArray(o,3*t,m),q[J++]=u,q[J++]=c-t-1,q[J++]=c-t,s.CorridorGeometryLibrary.addAttribute(D,m,void 0,B),p=a.Cartesian3.fromArray(D,3*(c-t-1),p),b=a.Cartesian3.fromArray(D,3*u,b),Y=a.Cartesian3.normalize(a.Cartesian3.subtract(p,b,Y),Y),N(M,U,Y,void 0,B,e),B-=3;m=a.Cartesian3.fromArray(D,3*u,m),p=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*c,p),m,p),b=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*(c-t),b),m,b),Y=a.Cartesian3.normalize(a.Cartesian3.add(p,b,Y),Y),N(M,U,Y,z,void 0,e),z+=3}else{for(N(M,U,Y,z,void 0,e),z+=3,u=S,c=R,t=0;t<d.length/3;t++)m=a.Cartesian3.fromArray(d,3*t,m),q[J++]=u,q[J++]=c+t,q[J++]=c+t+1,s.CorridorGeometryLibrary.addAttribute(D,m,z),p=a.Cartesian3.fromArray(D,3*u,p),b=a.Cartesian3.fromArray(D,3*(c+t),b),Y=a.Cartesian3.normalize(a.Cartesian3.subtract(p,b,Y),Y),N(M,U,Y,z,void 0,e),z+=3;m=a.Cartesian3.fromArray(D,3*u,m),p=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*(c+t),p),m,p),b=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*c,b),m,b),Y=a.Cartesian3.normalize(a.Cartesian3.negate(a.Cartesian3.add(b,p,Y),Y),Y),N(M,U,Y,void 0,B,e),B-=3}for(Z=i[Q++],$=i[Q++],Z.splice(0,3),$.splice($.length-3,3),D.set(Z,z),D.set($,B-$.length+1),C=$.length-3,X+=3,Y=a.Cartesian3.fromArray(f,X,Y),t=0;t<$.length;t+=3)j=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z,t,F),F),K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,C-t,L),L),U=a.Cartesian3.normalize(a.Cartesian3.add(j,K,U),U),N(M,U,Y,z,B,e),R=z/3,I=R-1,S=(B-2)/3,O=S+1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3;z-=3,B+=3}if(U=a.Cartesian3.fromArray(y,y.length-3,U),N(M,U,Y,z,B,e),w){z+=3,B-=3,H=G,k=E;const t=m[1];for(h=0;h<W;h++)H=a.Cartesian3.fromArray(t,3*(V-h-1),H),k=a.Cartesian3.fromArray(t,3*h,k),s.CorridorGeometryLibrary.addAttribute(D,H,void 0,B),s.CorridorGeometryLibrary.addAttribute(D,k,z),N(M,U,Y,z,B,e),R=z/3,I=R-1,S=(B-2)/3,O=S+1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3}if(p.position=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:D}),e.st){const t=new Float32Array(P/3*2);let e,r,a=0;if(w){b/=3,A/=3;const i=Math.PI/(V+1);let n;r=1/(b-V+1),e=1/(A-V+1);const s=V/2;for(h=s+1;h<V+1;h++)n=o.CesiumMath.PI_OVER_TWO+i*h,t[a++]=e*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n));for(h=1;h<A-V+1;h++)t[a++]=h*e,t[a++]=0;for(h=V;h>s;h--)n=o.CesiumMath.PI_OVER_TWO-h*i,t[a++]=1-e*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n));for(h=s;h>0;h--)n=o.CesiumMath.PI_OVER_TWO-i*h,t[a++]=1-r*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n));for(h=b-V;h>0;h--)t[a++]=h*r,t[a++]=1;for(h=1;h<s+1;h++)n=o.CesiumMath.PI_OVER_TWO+i*h,t[a++]=r*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n))}else{for(b/=3,A/=3,r=1/(b-1),e=1/(A-1),h=0;h<A;h++)t[a++]=h*e,t[a++]=0;for(h=b;h>0;h--)t[a++]=(h-1)*r,t[a++]=1}p.st=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})}return e.normal&&(p.normal=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M.normals})),e.tangent&&(p.tangent=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M.tangents})),e.bitangent&&(p.bitangent=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M.bitangents})),{attributes:p,indices:q}}function M(t,e,r){r[e++]=t[0],r[e++]=t[1],r[e++]=t[2];for(let a=3;a<t.length;a+=3){const i=t[a],o=t[a+1],n=t[a+2];r[e++]=i,r[e++]=o,r[e++]=n,r[e++]=i,r[e++]=o,r[e++]=n}return r[e++]=t[0],r[e++]=t[1],r[e++]=t[2],r}function O(e,r){const i=new f.VertexFormat({position:r.position,normal:r.normal||r.bitangent||e.shadowVolume,tangent:r.tangent,bitangent:r.normal||r.bitangent,st:r.st}),n=e.ellipsoid,u=D(s.CorridorGeometryLibrary.computePositions(e),i,n),y=e.height,p=e.extrudedHeight;let g=u.attributes;const h=u.indices;let C=g.position.values,b=C.length;const A=new Float64Array(6*b);let _=new Float64Array(b);_.set(C);let w,F=new Float64Array(4*b);C=m.PolygonPipeline.scaleToGeodeticHeight(C,y,n),F=M(C,0,F),_=m.PolygonPipeline.scaleToGeodeticHeight(_,p,n),F=M(_,2*b,F),A.set(C),A.set(_,b),A.set(F,2*b),g.position.values=A,g=function(t,e){if(!(e.normal||e.tangent||e.bitangent||e.st))return t;const r=t.position.values;let i,o;(e.normal||e.bitangent)&&(i=t.normal.values,o=t.bitangent.values);const n=t.position.values.length/18,l=3*n,d=2*n,u=2*l;let c;if(e.normal||e.bitangent||e.tangent){const n=e.normal?new Float32Array(6*l):void 0,d=e.tangent?new Float32Array(6*l):void 0,m=e.bitangent?new Float32Array(6*l):void 0;let f=v,y=T,p=G,g=E,h=V,C=x,b=u;for(c=0;c<l;c+=3){const t=b+u;f=a.Cartesian3.fromArray(r,c,f),y=a.Cartesian3.fromArray(r,c+l,y),p=a.Cartesian3.fromArray(r,(c+3)%l,p),y=a.Cartesian3.subtract(y,f,y),p=a.Cartesian3.subtract(p,f,p),g=a.Cartesian3.normalize(a.Cartesian3.cross(y,p,g),g),e.normal&&(s.CorridorGeometryLibrary.addAttribute(n,g,t),s.CorridorGeometryLibrary.addAttribute(n,g,t+3),s.CorridorGeometryLibrary.addAttribute(n,g,b),s.CorridorGeometryLibrary.addAttribute(n,g,b+3)),(e.tangent||e.bitangent)&&(C=a.Cartesian3.fromArray(i,c,C),e.bitangent&&(s.CorridorGeometryLibrary.addAttribute(m,C,t),s.CorridorGeometryLibrary.addAttribute(m,C,t+3),s.CorridorGeometryLibrary.addAttribute(m,C,b),s.CorridorGeometryLibrary.addAttribute(m,C,b+3)),e.tangent&&(h=a.Cartesian3.normalize(a.Cartesian3.cross(C,g,h),h),s.CorridorGeometryLibrary.addAttribute(d,h,t),s.CorridorGeometryLibrary.addAttribute(d,h,t+3),s.CorridorGeometryLibrary.addAttribute(d,h,b),s.CorridorGeometryLibrary.addAttribute(d,h,b+3))),b+=6}if(e.normal){for(n.set(i),c=0;c<l;c+=3)n[c+l]=-i[c],n[c+l+1]=-i[c+1],n[c+l+2]=-i[c+2];t.normal.values=n}else t.normal=void 0;if(e.bitangent?(m.set(o),m.set(o,l),t.bitangent.values=m):t.bitangent=void 0,e.tangent){const e=t.tangent.values;d.set(e),d.set(e,l),t.tangent.values=d}}if(e.st){const e=t.st.values,r=new Float32Array(6*d);r.set(e),r.set(e,d);let a=2*d;for(let t=0;t<2;t++){for(r[a++]=e[0],r[a++]=e[1],c=2;c<d;c+=2){const t=e[c],i=e[c+1];r[a++]=t,r[a++]=i,r[a++]=t,r[a++]=i}r[a++]=e[0],r[a++]=e[1]}t.st.values=r}return t}(g,r);const L=b/3;if(e.shadowVolume){const t=g.normal.values;b=t.length;let e=new Float32Array(6*b);for(w=0;w<b;w++)t[w]=-t[w];e.set(t,b),e=M(t,4*b,e),g.extrudeDirection=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e}),r.normal||(g.normal=void 0)}if(l.defined(e.offsetAttribute)){let r=new Uint8Array(6*L);if(e.offsetAttribute===t.GeometryOffsetAttribute.TOP)r=t.arrayFill(r,1,0,L),r=t.arrayFill(r,1,2*L,4*L);else{const a=e.offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1;r=t.arrayFill(r,a)}g.applyOffset=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}const P=h.length,N=L+L,O=c.IndexDatatype.createTypedArray(A.length/3,2*P+3*N);O.set(h);let I,S,R,k,H=P;for(w=0;w<P;w+=3){const t=h[w],e=h[w+1],r=h[w+2];O[H++]=r+L,O[H++]=e+L,O[H++]=t+L}for(w=0;w<N;w+=2)I=w+N,S=I+N,R=I+1,k=S+1,O[H++]=I,O[H++]=S,O[H++]=R,O[H++]=R,O[H++]=S,O[H++]=k;return{attributes:g,indices:O}}const I=new a.Cartesian3,S=new a.Cartesian3,R=new a.Cartographic;function k(t,e,r,i,o,n){const s=a.Cartesian3.subtract(e,t,I);a.Cartesian3.normalize(s,s);const l=r.geodeticSurfaceNormal(t,S),d=a.Cartesian3.cross(s,l,I);a.Cartesian3.multiplyByScalar(d,i,d);let u=o.latitude,c=o.longitude,m=n.latitude,f=n.longitude;a.Cartesian3.add(t,d,S),r.cartesianToCartographic(S,R);let y=R.latitude,p=R.longitude;u=Math.min(u,y),c=Math.min(c,p),m=Math.max(m,y),f=Math.max(f,p),a.Cartesian3.subtract(t,d,S),r.cartesianToCartographic(S,R),y=R.latitude,p=R.longitude,u=Math.min(u,y),c=Math.min(c,p),m=Math.max(m,y),f=Math.max(f,p),o.latitude=u,o.longitude=c,n.latitude=m,n.longitude=f}const H=new a.Cartesian3,z=new a.Cartesian3,B=new a.Cartographic,U=new a.Cartographic;function Y(t,r,i,o,s){t=P(t,r);const d=e.arrayRemoveDuplicates(t,a.Cartesian3.equalsEpsilon),u=d.length;if(u<2||i<=0)return new a.Rectangle;const c=.5*i;let m,f;if(B.latitude=Number.POSITIVE_INFINITY,B.longitude=Number.POSITIVE_INFINITY,U.latitude=Number.NEGATIVE_INFINITY,U.longitude=Number.NEGATIVE_INFINITY,o===n.CornerType.ROUNDED){const t=d[0];a.Cartesian3.subtract(t,d[1],H),a.Cartesian3.normalize(H,H),a.Cartesian3.multiplyByScalar(H,c,H),a.Cartesian3.add(t,H,z),r.cartesianToCartographic(z,R),m=R.latitude,f=R.longitude,B.latitude=Math.min(B.latitude,m),B.longitude=Math.min(B.longitude,f),U.latitude=Math.max(U.latitude,m),U.longitude=Math.max(U.longitude,f)}for(let t=0;t<u-1;++t)k(d[t],d[t+1],r,c,B,U);const y=d[u-1];a.Cartesian3.subtract(y,d[u-2],H),a.Cartesian3.normalize(H,H),a.Cartesian3.multiplyByScalar(H,c,H),a.Cartesian3.add(y,H,z),k(y,z,r,c,B,U),o===n.CornerType.ROUNDED&&(r.cartesianToCartographic(z,R),m=R.latitude,f=R.longitude,B.latitude=Math.min(B.latitude,m),B.longitude=Math.min(B.longitude,f),U.latitude=Math.max(U.latitude,m),U.longitude=Math.max(U.longitude,f));const p=l.defined(s)?s:new a.Rectangle;return p.north=U.latitude,p.south=B.latitude,p.east=U.longitude,p.west=B.longitude,p}function W(t){const e=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).positions,r=t.width,i=l.defaultValue(t.height,0),s=l.defaultValue(t.extrudedHeight,i);this._positions=e,this._ellipsoid=a.Ellipsoid.clone(l.defaultValue(t.ellipsoid,a.Ellipsoid.WGS84)),this._vertexFormat=f.VertexFormat.clone(l.defaultValue(t.vertexFormat,f.VertexFormat.DEFAULT)),this._width=r,this._height=Math.max(i,s),this._extrudedHeight=Math.min(i,s),this._cornerType=l.defaultValue(t.cornerType,n.CornerType.ROUNDED),this._granularity=l.defaultValue(t.granularity,o.CesiumMath.RADIANS_PER_DEGREE),this._shadowVolume=l.defaultValue(t.shadowVolume,!1),this._workerName="createCorridorGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this.packedLength=1+e.length*a.Cartesian3.packedLength+a.Ellipsoid.packedLength+f.VertexFormat.packedLength+7}W.pack=function(t,e,r){r=l.defaultValue(r,0);const i=t._positions,o=i.length;e[r++]=o;for(let t=0;t<o;++t,r+=a.Cartesian3.packedLength)a.Cartesian3.pack(i[t],e,r);return a.Ellipsoid.pack(t._ellipsoid,e,r),r+=a.Ellipsoid.packedLength,f.VertexFormat.pack(t._vertexFormat,e,r),r+=f.VertexFormat.packedLength,e[r++]=t._width,e[r++]=t._height,e[r++]=t._extrudedHeight,e[r++]=t._cornerType,e[r++]=t._granularity,e[r++]=t._shadowVolume?1:0,e[r]=l.defaultValue(t._offsetAttribute,-1),e};const q=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),J=new f.VertexFormat,j={positions:void 0,ellipsoid:q,vertexFormat:J,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,shadowVolume:void 0,offsetAttribute:void 0};return W.unpack=function(t,e,r){e=l.defaultValue(e,0);const i=t[e++],o=new Array(i);for(let r=0;r<i;++r,e+=a.Cartesian3.packedLength)o[r]=a.Cartesian3.unpack(t,e);const n=a.Ellipsoid.unpack(t,e,q);e+=a.Ellipsoid.packedLength;const s=f.VertexFormat.unpack(t,e,J);e+=f.VertexFormat.packedLength;const d=t[e++],u=t[e++],c=t[e++],m=t[e++],y=t[e++],p=1===t[e++],g=t[e];return l.defined(r)?(r._positions=o,r._ellipsoid=a.Ellipsoid.clone(n,r._ellipsoid),r._vertexFormat=f.VertexFormat.clone(s,r._vertexFormat),r._width=d,r._height=u,r._extrudedHeight=c,r._cornerType=m,r._granularity=y,r._shadowVolume=p,r._offsetAttribute=-1===g?void 0:g,r):(j.positions=o,j.width=d,j.height=u,j.extrudedHeight=c,j.cornerType=m,j.granularity=y,j.shadowVolume=p,j.offsetAttribute=-1===g?void 0:g,new W(j))},W.computeRectangle=function(t,e){const r=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).positions,i=t.width;return Y(r,l.defaultValue(t.ellipsoid,a.Ellipsoid.WGS84),i,l.defaultValue(t.cornerType,n.CornerType.ROUNDED),e)},W.createGeometry=function(i){let n=i._positions;const u=i._width,c=i._ellipsoid;n=P(n,c);const f=e.arrayRemoveDuplicates(n,a.Cartesian3.equalsEpsilon);if(f.length<2||u<=0)return;const y=i._height,p=i._extrudedHeight,g=!o.CesiumMath.equalsEpsilon(y,p,0,o.CesiumMath.EPSILON2),h=i._vertexFormat,C={ellipsoid:c,positions:f,width:u,cornerType:i._cornerType,granularity:i._granularity,saveAttributes:!0};let b;if(g)C.height=y,C.extrudedHeight=p,C.shadowVolume=i._shadowVolume,C.offsetAttribute=i._offsetAttribute,b=O(C,h);else{if(b=D(s.CorridorGeometryLibrary.computePositions(C),h,c),b.attributes.position.values=m.PolygonPipeline.scaleToGeodeticHeight(b.attributes.position.values,y,c),l.defined(i._offsetAttribute)){const e=i._offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1,r=b.attributes.position.values.length,a=new Uint8Array(r/3);t.arrayFill(a,e),b.attributes.applyOffset=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})}}const A=b.attributes,_=r.BoundingSphere.fromVertices(A.position.values,void 0,3);return h.position||(b.attributes.position.values=void 0),new d.Geometry({attributes:A,indices:b.indices,primitiveType:d.PrimitiveType.TRIANGLES,boundingSphere:_,offsetAttribute:i._offsetAttribute})},W.createShadowVolume=function(t,e,r){const a=t._granularity,i=t._ellipsoid,o=e(a,i),n=r(a,i);return new W({positions:t._positions,width:t._width,cornerType:t._cornerType,ellipsoid:i,granularity:a,extrudedHeight:o,height:n,vertexFormat:f.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(W.prototype,{rectangle:{get:function(){return l.defined(this._rectangle)||(this._rectangle=Y(this._positions,this._ellipsoid,this._width,this._cornerType)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return[0,0,0,1,1,0]}}}),function(t,e){return l.defined(e)&&(t=W.unpack(t,e)),t._ellipsoid=a.Ellipsoid.clone(t._ellipsoid),W.createGeometry(t)}}));
