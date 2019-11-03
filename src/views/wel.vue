<template>
  <basic-container>
    <p style="text-align: center;">
      <img src="https://img.shields.io/badge/Release-V2.5.3-green.svg" alt="Downloads"/>
      <img src="https://img.shields.io/badge/JDK-1.8+-green.svg" alt="Build Status"/>
      <img src="https://img.shields.io/badge/Spring%20Cloud-Greenwich.SR3-blue.svg" alt="Coverage Status"/>
      <img src="https://img.shields.io/badge/Spring%20Boot-2.1.9.RELEASE-blue.svg" alt="Downloads"/>
      <a target="_blank" href="https://bladex.vip">
        <img src="https://img.shields.io/badge/Saber%20Author-Small%20Chill-ff69b4.svg" alt="Downloads"/>
      </a>
      <a target="_blank" href="https://bladex.vip">
        <img src="https://img.shields.io/badge/Copyright%20-@BladeX-%23ff3f59.svg" alt="Downloads"/>
      </a>
    </p>
    <el-col :span="16">
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
          <div>3.有意向请联系唯一指定QQ:85088620</div>
        </el-collapse-item>
      </el-collapse>
    </el-col>
    <el-col :span="8">
      <el-collapse v-model="logActiveNames" @change="handleChange">
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
    </el-col>
  </basic-container>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "wel",
    data() {
      return {
        activeNames: ['1', '2', '3'],
        logActiveNames: ['12']
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

