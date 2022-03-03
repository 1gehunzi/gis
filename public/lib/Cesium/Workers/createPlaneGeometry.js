define(["./when-229515d6","./Transforms-4a1d2c0e","./Matrix2-f0fc6cd3","./RuntimeError-8f3d96ee","./ComponentDatatype-5f63ec93","./GeometryAttribute-4b6dfc85","./GeometryAttributes-b253752a","./VertexFormat-af764a6f","./combine-6d9c3903","./WebGLConstants-f63312fc"],(function(t,e,n,r,a,o,i,m,u,c){"use strict";function p(e){e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT);const n=t.defaultValue(e.vertexFormat,m.VertexFormat.DEFAULT);this._vertexFormat=n,this._workerName="createPlaneGeometry"}p.packedLength=m.VertexFormat.packedLength,p.pack=function(e,n,r){return r=t.defaultValue(r,0),m.VertexFormat.pack(e._vertexFormat,n,r),n};const s=new m.VertexFormat,y={vertexFormat:s};p.unpack=function(e,n,r){n=t.defaultValue(n,0);const a=m.VertexFormat.unpack(e,n,s);return t.defined(r)?(r._vertexFormat=m.VertexFormat.clone(a,r._vertexFormat),r):new p(y)};const f=new n.Cartesian3(-.5,-.5,0),l=new n.Cartesian3(.5,.5,0);return p.createGeometry=function(t){const r=t._vertexFormat,m=new i.GeometryAttributes;let u,c;if(r.position){if(c=new Float64Array(12),c[0]=f.x,c[1]=f.y,c[2]=0,c[3]=l.x,c[4]=f.y,c[5]=0,c[6]=l.x,c[7]=l.y,c[8]=0,c[9]=f.x,c[10]=l.y,c[11]=0,m.position=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),r.normal){const t=new Float32Array(12);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=1,t[9]=0,t[10]=0,t[11]=1,m.normal=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(r.st){const t=new Float32Array(8);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,m.st=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})}if(r.tangent){const t=new Float32Array(12);t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,m.tangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(r.bitangent){const t=new Float32Array(12);t[0]=0,t[1]=1,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=1,t[8]=0,t[9]=0,t[10]=1,t[11]=0,m.bitangent=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}u=new Uint16Array(6),u[0]=0,u[1]=1,u[2]=2,u[3]=0,u[4]=2,u[5]=3}return new o.Geometry({attributes:m,indices:u,primitiveType:o.PrimitiveType.TRIANGLES,boundingSphere:new e.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(e,n){return t.defined(n)&&(e=p.unpack(e,n)),p.createGeometry(e)}}));
