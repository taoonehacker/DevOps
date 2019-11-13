# DevOps
## 运维部署说明
### 安装部署环境
1.安装NetCore 2.2
2.安装NetCore Hosting 2.2
3.安装IIS URLRewriter
4.安装Node.js
重启电脑

### 运维后端部署

#### 还原数据库
使用sa或者新创建的账号，登录数据库后还原数据库

### 运维前端部署

#### 修改配置文件
1.修改数据库账号密码
2.修改IP地址，把文件里面的IP地址改成服务器的IP地址

#### IIS添加项目
1.端口绑定5000
2.应用池托管模式：无托管模式
3.权限：everyone和IIS_IUSERS
4.访问http://IP:5000

#### 修改配置文件
1.修改后端地址(remoteservicebaseurl):即部署的运维的后端地址：http://IP:5000
2.修改前端地址(appbaseurl):即部署的运维前端地址：http://IP:8000

#### IIS添加项目
1.端口绑定8000
2.权限：everyone和IIS_IUSERS
3.访问http://IP:8000

### 运维采集端部署

#### 修改配置文件
1.站点：SiteId
2.数据回调地址：OpMtServerUri
3.启动采集端
