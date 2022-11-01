<template>
  <div>
    <basic-container>
      <third-register></third-register>
      <p style="text-align: center;">
        <img src="https://img.shields.io/badge/Release-V3.5.0-green.svg" alt="Downloads"/>
        <img src="https://img.shields.io/badge/JDK-1.8+-green.svg" alt="Build Status"/>
        <img src="https://img.shields.io/badge/Spring%20Cloud-2021-blue.svg" alt="Coverage Status"/>
        <img src="https://img.shields.io/badge/Spring%20Boot-2.7.1.RELEASE-blue.svg" alt="Downloads"/>
        <a target="_blank" href="https://bladex.vip">
          <img src="https://img.shields.io/badge/Saber%20Author-Small%20Chill-ff69b4.svg" alt="Downloads"/>
        </a>
        <a target="_blank" href="https://bladex.vip">
          <img src="https://img.shields.io/badge/Copyright%20-@BladeX-%23ff3f59.svg" alt="Downloads"/>
        </a>
      </p>
    </basic-container>
    <el-col :span="16">
      <basic-container>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="欢迎使用Saber" name="1">
            <div>1.Saber是SpringBlade前端UI系统</div>
            <div>2.对现有的avue2.0、element-ui库进行二次封装</div>
            <div>3.100%兼容原生element-ui库</div>
            <div>4.基于json驱动的模块配置，打造最好用的vuejs中后台脚手架</div>
            <div>5.使用Saber可以大幅度提升开发效率，不再为重复工作发愁</div>
          </el-collapse-item>
          <el-collapse-item title="什么是BladeX" name="2">
            <div>1.BladeX是一款精心设计的微服务架构，提供 SpringCloud 全套解决方案</div>
            <div>2.开源中国首批完美集成 SpringCloud Alibaba 系列组件的微服务架构</div>
            <div>3.基于稳定生产的商业项目升级优化而来，更加贴近企业级的需求</div>
            <div>4.追求企业开发更加高效，部署更加方便，生产更加稳定</div>
            <div>5.GVP-码云最有价值开源项目</div>
            <div>6.BladeX授权地址:<a target="_blank" href="https://bladex.vip/#/vip">点击授权</a></div>
          </el-collapse-item>
          <el-collapse-item title="为何需要BladeX" name="3">
            <div>1.经历过较长的线上生产，积累了很多企业痛点的解决方案</div>
            <div>2.一套代码兼容MySql、Oracle、PostgreSQL，适应企业各种不同场景的需求</div>
            <div>3.集成了很多企业急切所需的例如多租户、Oauth2授权认证、工作流、分布式事务等等功能</div>
            <div>4.深度定制了Flowable工作流，完美支持SpringCloud分布式服务的场景，以远程调用的方式进行操作</div>
            <div>5.升级了核心驱动，新功能完全可以开箱即用，而开源版需要自己再花时间进行集成，需要花掉更多的时间成本</div>
            <div>6.拥抱微服务时代，很多企业由于项目转型或升级，传统的技术已然不能满足，反而会花更多成本，而BladeX就是为此而生</div>
            <div>7.同时提供SpringCloud版本和SpringBoot版本，两个版本的api可以与Sword和Saber无缝对接，为小型项目至大型项目保驾护航</div>
            <div>8.授权购买即永久，源码没有混淆，完全开放，后续升级完全免费。企业只需花很少的钱即可获得一整套成熟的解决方案，你还在等什么？</div>
          </el-collapse-item>
          <el-collapse-item title="拥有的核心功能" name="4">
            <div>1.前后端分离-采用前后端分离模式，前端提供两套架构，Sword基于React，Saber基于Vue</div>
            <div>2. 分布式单体式后端架构-提供两套后端架构，基于SpringCloud的分布式架构以及基于SpringBoot的单体式架构</div>
            <div>3.API完全兼容-两套后端架构与两套前端架构，共四套架构可以任意组合，所有API完全兼容</div>
            <div>4.前后端代码生成-定制针对两套前端与后端的代码生成模板，轻松生成整个模块的前后端代码，减少重复工作量</div>
            <div>5.组件化、插件化架构-针对功能深度定制各个starter，引入开箱即用，为整个架构解耦，提升效率</div>
            <div>6.Nacos-集成阿里巴巴的Nacos完成统一的服务注册与配置</div>
            <div>7.Sentinel-集成Sentinel从流量控制、熔断降级、系统负载等多个维度保护服务的稳定性</div>
            <div>8.Dubbo-完美集成Dubbo最新版，支持远程RPC调用</div>
            <div>9.多租户系统-完整的SaaS多租户架构</div>
            <div>10.Oauth2-集成Oauth2协议，完美支持多终端的接入与认证授权</div>
            <div>11.工作流-深度定制SpringCloud分布式场景的Flowable工作流，为复杂流程保驾护航。同时提供SpringBoot集成版本</div>
            <div>12.独立流程设计器-提供独立的完全汉化的流程设计器，轻松定制流程模型</div>
            <div>13.动态网关-集成基于Nacos的轻量级、高拓展性动态网关</div>
            <div>14.动态聚合文档-实现基于Nacos的Swagger SpringCloud聚合文档</div>
            <div>15.分布式文件服务-集成minio、qiniu、alioss等优秀的第三方，提供便捷的文件上传与管理</div>
            <div>16.多租户对象存储系统-在SaaS系统中，各租户可自行配置文件上传至自己的私有OSS</div>
            <div>17.权限管理-精心设计的权限管理方案，角色权限精确到按钮</div>
            <div>18.动态数据权限-高度灵活的动态数据权限，提供注解+Web可视化两种配置方式，Web配置无需重启直接生效</div>
            <div>19.动态接口权限-高度灵活的动态接口权限，提供注解+Web可视化两种配置方式，Web配置无需重启直接生效</div>
            <div>20.多租户顶部菜单配置-提供给每个租户独立的顶部菜单配置模块，可以自定义顶部菜单切换</div>
            <div>21.主流数据库兼容-一套代码完全兼容Mysql、Postgresql、Oracle三大主流数据库</div>
            <div>22.动态网关鉴权-基于Nacos的动态网关鉴权，可在线配置，实时生效</div>
            <div>23.全能代码生成器-支持自定义模型、模版 、业务建模，支持多种模板引擎，在线配置。大幅度提升开发效率，不再为重复工作发愁</div>
            <div>24.Seata分布式事务-定制集成Seata，支持分布式事务，无代码侵入，不失灵活与简洁</div>
            <div>25.未完待续...</div>
          </el-collapse-item>
          <el-collapse-item title="软件定制开发合作" name="5">
            <div>1.接BladeX系列架构的定制服务</div>
            <div>2.接3个月以内工期的react、vue、springboot、springcloud、app、小程序等软件定制服务</div>
            <div>3.有意向请联系唯一指定QQ:1272154962</div>
          </el-collapse-item>
        </el-collapse>
      </basic-container>
    </el-col>
    <el-col :span="8">
      <el-row>
        <basic-container>
          <div class="el-font-size">
            <span>产品名称</span>
            <el-divider direction="vertical"/>
            <span><el-tag>SpringBlade企业级微服务开发平台</el-tag></span>
            <el-divider content-position="right"><i class="el-icon-star-off"/></el-divider>
            <span>账号密码</span>
            <el-divider direction="vertical"/>
            <el-tag effect="plain">管理员(admin)</el-tag>
            <el-divider content-position="right"><i class="el-icon-star-off"/></el-divider>
            <span>官网地址</span>
            <el-divider direction="vertical"/>
            <span><el-link href="https://bladex.vip" target="_blank"
                           type="primary">https://bladex.vip</el-link></span>
            <el-divider content-position="right"><i class="el-icon-star-off"/></el-divider>
            <span>社区地址</span>
            <el-divider direction="vertical"/>
            <span><el-link href="https://sns.bladex.vip" target="_blank"
                           type="primary">https://sns.bladex.vip</el-link></span>
            <el-divider content-position="right"><i class="el-icon-star-off"/></el-divider>
            <span>获取文档</span>
            <el-divider direction="vertical"/>
            <span class="tag-group">
                <el-tag type="success" style="cursor: pointer"
                        onclick="window.open('https://sns.bladex.vip/note/view/1.html')">免费版</el-tag>
                <el-divider direction="vertical"/>
                <el-tag type="danger" style="cursor: pointer"
                        onclick="window.open('https://www.kancloud.cn/@smallchill')">收费版</el-tag>
              </span>
            <el-divider content-position="right"><i class="el-icon-star-off"/></el-divider>
            <span>获取源码</span>
            <el-divider direction="vertical"/>
            <span class="tag-group">
                <el-tag type="success" effect="dark" style="cursor: pointer"
                        onclick="window.open('https://gitee.com/smallc/SpringBlade')">开源版</el-tag>
                <el-divider direction="vertical"/>
                <el-tag type="danger" effect="dark" style="cursor: pointer"
                        onclick="window.open('https://bladex.vip/#/vip')">商业版</el-tag>
              </span>
          </div>
        </basic-container>
      </el-row>
      <el-row>
        <basic-container>
          <el-collapse v-model="logActiveNames" @change="handleChange">
            <el-collapse-item title="3.5.0发布 新增报文加密 令牌签名校验提示" name="32">
              <div>1.新增 报文加密功能</div>
              <div>2.新增 日志开关功能</div>
              <div>3.新增 Minio封装</div>
              <div>4.新增 Token签名校验</div>
              <div>5.重构 oss模块</div>
            </el-collapse-item>
            <el-collapse-item title="3.4.1发布 重构Swagger封装" name="31">
              <div>1.重构Swagger封装，适配cloud最新版</div>
            </el-collapse-item>
            <el-collapse-item title="3.4.0发布 新增灰度服务功能" name="30">
              <div>1.升级 SpringCloud 至 2021.0.3</div>
              <div>2.升级 SpringBoot 至 2.7.1</div>
              <div>3.升级 SpringBootAdmin 至 2.7.1</div>
              <div>4.升级 Mybatis-Plus 至 3.5.2</div>
              <div>5.升级 Mybatis-Plus-Generator 至 3.5.3</div>
              <div>6.升级 Nacos 至 2.1.0</div>
              <div>7.升级 Seata 至 1.5.1.1</div>
              <div>8.升级 FastJson 至 1.2.83</div>
              <div>9.升级适配 SpringBoot 2.7.1 新版API</div>
              <div>10.新增基于 LoadBalancer 的灰度服务功能</div>
            </el-collapse-item>
            <el-collapse-item title="3.3.1发布 升级适配代码生成器API" name="29">
              <div>1.升级 SpringBoot 至 2.6.6</div>
              <div>2.升级 Mybatis-Plus-Generator 至 3.5.2</div>
              <div>3.代码生成适配最新版API</div>
            </el-collapse-item>
            <el-collapse-item title="3.3.0发布 升级适配 SpringCloud 2021" name="28">
              <div>1.升级 SpringBoot 至 2.6.3</div>
              <div>2.升级 SpringBootAdmin 至 2.6.2</div>
              <div>3.升级 SpringCloud 至 2021.0.1</div>
              <div>4.升级 AlibabaCloud 至 2021.0.1.0</div>
              <div>5.升级 Nacos 至 2.0.4</div>
              <div>6.升级 Mybatis-Plus 至 3.5.1</div>
              <div>7.升级 Mybatis-Plus-Generator 至 3.5.1</div>
              <div>8.重构 Xss运行逻辑</div>
              <div>9.修复 nacos地址信息配置，支持灵活自定义</div>
            </el-collapse-item>
            <el-collapse-item title="3.2.0发布 新增灵活数据权限特性" name="27">
              <div>1.升级 SpringBoot 至 2.5.6</div>
              <div>2.升级 SpringBootAdmin 至 2.5.3</div>
              <div>3.升级 SpringCloud 至 2020.0.4</div>
              <div>4.升级 Nacos 至 2.0.3</div>
              <div>5.升级 Knife4j 至 2.0.9</div>
              <div>6.升级 Mybatis-Plus 至 3.4.3.4</div>
              <div>7.新增注解配置数据权限特性</div>
              <div>8.新增Web在线配置数据权限特性</div>
              <div>9.新增自定义Sql配置数据权限特性</div>
              <div>10.新增懒加载表格树特性</div>
              <div>11.新增部门管理祖级节点字段</div>
              <div>12.新增CacheUtil工具类</div>
              <div>13.优化部门管理新增逻辑</div>
              <div>14.优化租户拦截器初始化逻辑</div>
              <div>15.优化适配各新版本API变动</div>
            </el-collapse-item>
            <el-collapse-item title="3.1.0发布 底层架构升级适配" name="26">
              <div>1.升级 SpringBoot 至 2.5.2</div>
              <div>2.升级 SpringBootAdmin 至 2.4.2</div>
              <div>3.升级 SpringCloud 至 2020.0.3</div>
              <div>4.升级 AlibabaCloud 至 2021.1</div>
              <div>5.升级 Nacos 至 2.0.2</div>
              <div>6.升级 Seata 至 1.4.2</div>
              <div>7.升级 Mybatis-Plus 至 3.4.3.1</div>
              <div>8.优化适配各新版本API变动</div>
              <div>9.移除部分过时的配置</div>
            </el-collapse-item>
            <el-collapse-item title="3.0.3发布 新增kuboard-k8s脚本一键部署方案" name="25">
              <div>1.新增blade-develop的dockerfile</div>
              <div>2.新增blade-develop推送docker配置</div>
              <div>3.新增saber的dockerfile</div>
              <div>4.新增kuboard k8s部署脚本</div>
              <div>5.新增kuboard k8s部署方案</div>
              <div>6.优化pom配置适配新版部署方案</div>
              <div>7.优化swagger加载逻辑默认开启knife4j</div>
            </el-collapse-item>
            <el-collapse-item title="3.0.2.发布 支持Nacos2.0长链接特性" name="24">
              <div>1.升级 SpringBoot 至 2.4.4</div>
              <div>2.升级 SpringCloud 至 2020.0.2</div>
              <div>3.升级 AlibabaCloud 至 2.2.5.RELEASE</div>
              <div>4.升级 FastJson 至 1.2.75</div>
              <div>5.升级 Avue 至 2.8.2</div>
              <div>6.升级 ElementUI 至 2.15.1</div>
              <div>7.新增支持Nacos2.0长链接特性</div>
              <div>8.优化七牛云地域配置为自动获取</div>
              <div>9.优化Xss过滤支持通配符匹配逻辑</div>
              <div>10.优化接口放行支持通配符匹配逻辑</div>
              <div>11.修复Feign请求头传递丢失的问题</div>
              <div>12.修复用户管理导出查询功能失效的问题</div>
            </el-collapse-item>
            <el-collapse-item title="3.0.1.发布 新增Swagger独立网关，优化代码生成" name="23">
              <div>1.升级 SpringBoot 至 2.4.2</div>
              <div>2.升级 SpringCloud 至 2020.0.1</div>
              <div>3.升级 Mybatis-Plus 至 3.4.2</div>
              <div>4.升级 Avue 至 2.7.6</div>
              <div>5.升级适配 Knife4j 2.0.8</div>
              <div>6.新增独立的Swagger网关</div>
              <div>7.新增代码生成的SqlServer驱动判断</div>
              <div>8.新增代码生成菜单Sql的ID</div>
              <div>9.优化SentinelFeign实现以适配最新API</div>
              <div>10.优化Saber个人中心实现以适配最新API</div>
              <div>11.修复Saber菜单图标选择失效的问题</div>
            </el-collapse-item>
            <el-collapse-item title="3.0.0.发布 架构升级适配SpringCloud2020" name="22">
              <div>1.升级 SpringBoot 至 2.4.1</div>
              <div>2.升级 SpringCloud 至 2020.0.0</div>
              <div>3.升级 SpringBootAdmin 至 2.3.1</div>
              <div>4.升级 Junit 至 5.7.0</div>
              <div>5.升级 Mybatis-Plus 至 3.4.1</div>
              <div>6.升级 Knife4j 至 2.0.8</div>
              <div>7.升级 Seata 至 1.4.1</div>
              <div>8.升级 Avue 至 2.7.5</div>
              <div>9.新增Sentinel自动熔断逻辑</div>
              <div>10.新增Sentinel全局限流控制器</div>
              <div>11.新增BladeCloudApplication注解</div>
              <div>12.重构Feign自动熔断逻辑以适配最新API</div>
              <div>13.重构Junit统一运行器以适配最新API</div>
              <div>14.重构Seata部分模块以适配最新API</div>
              <div>15.修改配置文件以适配最新API</div>
              <div>16.优化Gateway全局异常处理器</div>
              <div>17.优化部署脚本</div>
            </el-collapse-item>
            <el-collapse-item title="2.8.0发布 增加在线报表模块" name="21">
              <div>1.升级 SpringBoot 至 2.2.11.RELEASE</div>
              <div>2.升级 SpringCloud 至 Hoxton.SR8</div>
              <div>3.升级 AlibabaCloud 至 2.2.3.RELEASE</div>
              <div>4.升级 Knife4j 至 2.0.6</div>
              <div>5.升级 Swagger 至 2.10.5</div>
              <div>6.升级 SwaggerModel 至 1.6.2</div>
              <div>7.升级 SpringPlugin 至 2.2.0.RELEASE</div>
              <div>8.升级 JustAuth 至 1.15.8</div>
              <div>9.升级 FastJson 至 1.2.74</div>
              <div>10.升级 Guava 至 30.0-jre</div>
              <div>11.升级 JJWT 至 0.11.2</div>
              <div>12.集成UReport2，新增在线报表模块</div>
              <div>13.优化Swagger封装以支持Knife4j最新API</div>
              <div>14.引入Knife4j增强配置,生产环境将完全隔离文档访问</div>
              <div>15.优化架构，适配最新版本API</div>
              <div>16.优化部署脚本</div>
            </el-collapse-item>
            <el-collapse-item title="2.7.3发布 增强多租户功能" name="20">
              <div>1.升级至 SpringCloud Hoxton.SR8</div>
              <div>2.升级至 Mybatis-Plus 3.4.0</div>
              <div>3.重构Mybatis-Plus封装适配最新版</div>
              <div>4.多租户增加域名绑定功能</div>
              <div>5.创建多租户的同时创建对应的管理用户</div>
              <div>6.优化日志模块分页排序</div>
              <div>7.关闭日志模块外置api放行</div>
            </el-collapse-item>
            <el-collapse-item title="2.7.2发布 集成JustAuth支持第三方登录" name="19">
              <div>1.升级至 SpringCloud Hoxton.SR7</div>
              <div>2.升级至 SpringBoot 2.2.9.RELEASE</div>
              <div>3.升级至 Seata 1.3.0</div>
              <div>4.升级至 SpringBootAdmin 2.3.0</div>
              <div>5.升级至 Kinfe4j 2.0.4</div>
              <div>6.升级至 FastJson 1.2.73</div>
              <div>7.集成JustAuth支持第三方登录</div>
              <div>8.优化请求日志打印工具</div>
              <div>9.优化Token返回字段集合</div>
              <div>10.修复菜单列表API报空指针的问题</div>
              <div>11.修复角色配置数据量较大导致失败的问题</div>
            </el-collapse-item>
            <el-collapse-item title="2.7.1发布 增加行政区划管理，支持seata1.2" name="18">
              <div>1.升级至 SpringCloud Hoxton.SR5</div>
              <div>2.升级至 SpringBoot 2.2.7.RELEASE</div>
              <div>3.升级至 Seata 1.2.0</div>
              <div>4.升级至 MybatisPlus 3.3.2</div>
              <div>5.升级至 Kinfe4j 2.0.3</div>
              <div>6.升级至 FastJson 1.2.70</div>
              <div>7.升级至 Avue 2.5.3</div>
              <div>8.新增行政区划管理模块</div>
              <div>9.优化用户导入的密码配置逻辑</div>
              <div>10.优化INode结构支持懒加载数据格式</div>
              <div>11.优化代码生成模板，支持最新版Saber结构</div>
              <div>12.修复Log模块在多线程、异步场景下报错的问题</div>
            </el-collapse-item>
            <el-collapse-item title="2.7.0发布 内核全面升级，增加岗位管理，用户导入导出" name="17">
              <div>1.升级至 SpringCloud Hoxton.SR3</div>
              <div>2.升级至 SpringBoot 2.2.6.RELEASE</div>
              <div>3.升级至 Avue 2.5.0</div>
              <div>4.升级Saber内核，采用最新版本API，优化交互体验</div>
              <div>5.新增岗位管理模块</div>
              <div>6.新增用户导入导出模块</div>
              <div>7.数据库主键统一改成bigint并采用snowflake算法</div>
              <div>8.优化INode类，主键跟随修改为Long类型</div>
              <div>9.优化鉴权逻辑，支持header以及parameter两种方式</div>
              <div>10.优化代码生成模板以支持最新版API</div>
            </el-collapse-item>
            <el-collapse-item title="2.6.2发布 升级支持seata1.1 支持阿里云oss" name="16">
              <div>1.升级SpringBoot 2.2.5.RELEASE</div>
              <div>2.升级SpringCloud Hoxton.SR2</div>
              <div>3.升级Seata 1.1.0</div>
              <div>4.增加阿里云对象存储封装</div>
              <div>5.优化BladeFeignTargeter的加载逻辑</div>
              <div>6.优化系统配置</div>
            </el-collapse-item>
            <el-collapse-item title="2.6.1发布 增加登陆验证码 支持seata1.0" name="15">
              <div>1.升级SpringBoot 2.2.4.RELEASE</div>
              <div>2.升级Alibaba Cloud 2.2.0.RELEASE</div>
              <div>3.升级Mybatis-Plus 3.3.1</div>
              <div>4.增加登陆验证码功能</div>
              <div>5.增加验证码对应的CaptchaTokenGranter</div>
              <div>6.增加RedisUtil，方便业务操作</div>
              <div>7.增加Condition类getQueryWrapper自定义排除参数的入口</div>
              <div>8.优化Seata封装，完美支持1.0.0版本</div>
            </el-collapse-item>
            <el-collapse-item title="2.6.0发布 升级Hoxton.SR1 适配最新架构" name="14">
              <div>1.升级SpringCloud Hoxton.SR1</div>
              <div>2.升级SpringBoot 2.2.2.RELEASE</div>
              <div>3.升级Alibaba Cloud 2.1.1.RELEASE</div>
              <div>4.升级Seata 1.0.0</div>
              <div>5.升级Swagger-Bootstrap-UI为最新的Knife4j 2.0.1</div>
              <div>6.升级Xss过滤机制以适配最新架构</div>
              <div>7.升级前端请求机制以适配最新架构</div>
              <div>8.修复blade-resource无法进行docker打包的问题</div>
              <div>9.修复blade-demo没有配置LauncherService导致启动失败的问题</div>
            </el-collapse-item>
            <el-collapse-item title="2.5.4发布 增加多数据源示例工程" name="13">
              <div>1.增加示例工程，增加多种常见场景的解决方案</div>
              <div>2.增加不同包名运行的示例</div>
              <div>3.增加多数据源调用运行的示例</div>
              <div>4.增加自定义加载Naocs配置文件的示例</div>
              <div>5.增加根据Nacos命名空间读取配置、注册服务的示例</div>
              <div>6.修复Condition类没有过滤分页字段的问题</div>
              <div>7.拆分CommonConstant出LauncherConstant</div>
            </el-collapse-item>
            <el-collapse-item title="2.5.3发布 集成分布式链路追踪" name="12">
              <div>1.封装集成zipkin，支持分布式链路追踪</div>
              <div>2.seata升级至0.9.0，解决部分分布式事务遇到的bug</div>
              <div>3.springboot版本升级至2.1.9</div>
            </el-collapse-item>
            <el-collapse-item title="2.5.2发布 增加个人中心" name="11">
              <div>1.增加个人中心，支持用户信息自定义修改</div>
              <div>2.增加网关鉴权配置示例</div>
              <div>3.token的SIGN_KEY修改为一致</div>
              <div>4.admin模块增加对seata服务的过滤</div>
              <div>5.blade-tool增加部分工具类方法</div>
            </el-collapse-item>
            <el-collapse-item title="2.5.1发布 增加动态网关鉴权" name="10">
              <div>1.增加网关动态鉴权</div>
              <div>2.secure安全模块token校验默认关闭，交由网关处理</div>
              <div>3.boot版本开启secure token校验功能</div>
              <div>4.优化blade-gateway代码逻辑</div>
              <div>5.修复blade-resource无法启动的问题</div>
            </el-collapse-item>
            <el-collapse-item title="2.5.0发布 集成seata支持分布式事务" name="9">
              <div>1.封装集成seata，支持分布式事务</div>
              <div>2.重写blade-core-cloud模块，增强cloud场景支持</div>
              <div>3.增加hystrix自动fallback功能</div>
              <div>4.升级springboot至2.1.8.RELEASE</div>
              <div>5.升级springcloud至Greenwich.SR3</div>
            </el-collapse-item>
            <el-collapse-item title="2.4.1发布 代码生成增加多数据源，强化代码生成功能" name="8">
              <div>1.升级SpringBoot至2.1.7</div>
              <div>2.代码生成增加多数据源配置</div>
              <div>3.增强代码生成功能，支持可选基础业务、包装器配置</div>
              <div>4.优化代码生成模板</div>
            </el-collapse-item>
            <el-collapse-item title="2.4.0发布 升级AlibabaCloud毕业版本" name="7">
              <div>1.升级AlibabaCloud毕业版本</div>
              <div>2.升级支持Naocs 1.1.0、Sentinel 1.6.3</div>
              <div>3.租户系统的tenantCode统一更改为tenantId</div>
              <div>4.优化代码生成模板</div>
              <div>5.优化mybatis-plus新版配置</div>
              <div>6.修复排序字段sql注入问题</div>
            </el-collapse-item>
            <el-collapse-item title="2.3.3发布 重构令牌逻辑, 增强令牌功能" name="6">
              <div>1.重构令牌发放逻辑，可自定义令牌类型，增强可拓展性</div>
              <div>2.增加动态配置token过期时间、令牌续期功能</div>
              <div>3.增加GateWay动态聚合文档功能，简化配置</div>
              <div>4.优化Wrapper定义，代码更加简洁</div>
              <div>5.Swagger增加多包扫描</div>
              <div>6.使用 Swagger-Bootstrap-UI 最新版排序注解</div>
              <div>7.升级 SpringBoot 2.1.6，SpringCloud Greenwich.SR2</div>
              <div>8.升级 Mybatis-Plus 3.1.2</div>
              <div>9.修复排序字段可能导致的sql注入问题</div>
              <div>10.修复部分缓存清除失效的问题</div>
            </el-collapse-item>
            <el-collapse-item title="2.3.2发布 增加 OSS 封装及单元测试封装" name="5">
              <div>1.增加七牛云oss-starter</div>
              <div>2.增加blade-resource模块，对外提供服务，支持分布式下的oss场景</div>
              <div>3.LauncherService增加排序功能</div>
              <div>4.增加单元测试starter，可在启动过程中便捷地指定profile以及启动参数</div>
              <div>5.增加指定启动参数的单元测试demo</div>
              <div>6.优化docker脚本配置</div>
            </el-collapse-item>
            <el-collapse-item title="2.3.1发布 升级业务架构" name="4">
              <div>1.升级 SpringBoot 2.1.5</div>
              <div>2.前端框架Saber升级 element-ui 2.8.2</div>
              <div>3.Saber业务代码升级</div>
              <div>4.优化Saber代码生成模板</div>
              <div>5.统一日志业务表基础字段</div>
              <div>6.优化租户过滤逻辑</div>
              <div>7.BaseEntity放开主键限制，子类可自定义主键类型</div>
              <div>8.XssFilter增加放行配置，可配置放行微信api接口</div>
            </el-collapse-item>
            <el-collapse-item title="2.3.0发布 升级SpringCloud Greenwich与SpringBoot" name="3">
              <div>1.升级 SpringCloud Greenwich</div>
              <div>2.升级 SpringCloud Alibaba 组件版本为0.9.0.RELEASE，支持最新版本的nacos与sentinel</div>
              <div>3.升级 SpringBoot 2.1.4</div>
              <div>4.升级 mysql 驱动版本</div>
              <div>5.优化 LauncherService 关于环境的判断逻辑</div>
              <div>6.修复 blade-core-log 在部分情况下获取request为空的问题</div>
              <div>7.修复多租户插件判断租户过滤的逻辑</div>
              <div>8.修复请求日志打印插件部分格式空指针的问题</div>
              <div>9.降低nacos心跳日志等级，关闭心跳日志显示</div>
            </el-collapse-item>
            <el-collapse-item title="2.2.0发布 升级为多终端令牌认证系统" name="2">
              <div>1.增加多终端令牌认证系统</div>
              <div>2.增加多租户开关</div>
              <div>3.修复部分模块没有筛选已删除的问题</div>
              <div>4.调整角色分配会越权的问题</div>
              <div>5.优化部署脚本</div>
            </el-collapse-item>
            <el-collapse-item title="2.1.0发布 升级为SaaS多租户系统" name="1">
              <div>1.升级为SaaS多租户系统</div>
              <div>2.优化代码生成逻辑</div>
              <div>3.代码生成增加菜单sql</div>
              <div>4.增加SysClient，提供系统信息远程调用</div>
              <div>5.优化部署脚本，增加前端部署实例</div>
              <div>6.增加父子角色过滤，使得角色无法越权配置</div>
            </el-collapse-item>
            <el-collapse-item title="2.0.0发布 全面升级为SpringCloud微服务架构" name="0">
              <div>1.SpringBlade 2.0 是由一个商业级项目升级优化而来的SpringCloud微服务架构，采用Java8 API重构了业务代码，完全遵循阿里巴巴编码规范</div>
              <div>2.采用Spring Boot 2 、Spring Cloud Greenwich 、Mybatis 等核心技术，用于快速搭建企业级的微服务系统平台</div>
              <div>3.SpringBlade 致力于创造新颖的开发模式，将开发中遇到的痛点、生产中所踩的坑整理归纳，并将解决方案都融合到框架中</div>
            </el-collapse-item>
          </el-collapse>
        </basic-container>
      </el-row>
    </el-col>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "wel",
    data() {
      return {
        activeNames: ['1', '2', '3', '5'],
        logActiveNames: ['32']
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
    },
    created() {
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  };
</script>

<style>
  .el-divider--horizontal {
    margin: 12px 0 !important;
  }

  .el-font-size {
    font-size: 14px;
  }
</style>

