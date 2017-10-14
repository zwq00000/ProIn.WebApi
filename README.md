ProIn.WebApi v1.0
======================

# Swagge 和 webapi

## api 结构
  - index.yaml      (主控文档，引入各个子模块)
    - info.yaml       (接口信息/版本)
    - tags.yaml       (Tags)
    - responses.yaml  (公共的响应声明)
    - parameters.yaml (共用的参数声明)
    - Definitions    (DTO 实体定义)
        - index.yaml  (definitions 模块入口)
    - paths             (请求路径目录)
        - index.yaml    (paths 模块入口)

## 生成/合并 Swagger 文档

执行以下脚本，构建api文件，构建过程读取 index.yaml 合并各个模块生成 swagger.yaml 文件，并对该文件进行验证。

```cmd
    npm run build 
```
或者执行以下脚本
```js
    multi-file-swagger index.yaml -o yaml -f swagger.yaml
    swagger validate swagger.yaml
```

## 生成 api文档

```sh
    npm run gendoc
```
根据 swagger.yaml 文件生成 html2 文档

*需要安装 swagger-codegen-cli*


# 资源接口


## Http 响应标准
### aspnetcore 支持的标准响应类型
- 200 OK
- 201 Created
- 202 Accepted
- 204 NoContent
- 400 BedRequest
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found

- 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
- 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
- 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
- 204 NO CONTENT - [DELETE]：用户删除数据成功。
- 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
- 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
- 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
- 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
- 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
- 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
- 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
- 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。

### 错误处理
如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。
```json
{
    error: "Invalid API key"
}
```

### 返回结果

针对不同操作，服务器向用户返回的结果应该符合以下规范。
- GET /collection：返回资源对象的列表（数组）
    - status code 200
- GET /collection/resource：返回单个资源对象
    - status code 200
- POST /collection：返回新生成的资源对象
    - status code 201
- PUT /collection/resource：返回完整的资源对象
    - status code 201
- PATCH /collection/resource：返回完整的资源对象
    - status code 201
- DELETE /collection/resource：返回一个空文档
    - status code 204


[Restful api 设计参考](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

