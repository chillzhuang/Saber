<template>
  <basic-container>
    <p align="left">
      <img src="https://img.shields.io/badge/Release-V2.5.0-green.svg" alt="Downloads">
      <img src="https://img.shields.io/badge/JDK-1.8+-green.svg" alt="Build Status">
      <img src="https://img.shields.io/badge/Spring%20Cloud-Greenwich.SR3-blue.svg" alt="Coverage Status">
      <img src="https://img.shields.io/badge/Spring%20Boot-2.1.8.RELEASE-blue.svg" alt="Downloads">
      <a target="_blank" href="https://bladex.vip">
        <img src="https://img.shields.io/badge/Saber%20Author-Small%20Chill-ff69b4.svg" alt="Downloads">
      </a>
      <a target="_blank" href="https://bladex.vip">
        <img src="https://img.shields.io/badge/Copyright%20-@BladeX-%23ff3f59.svg" alt="Downloads">
      </a>
    </p>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="欢迎使用Saber" name="1">
        <div>1.Saber是SpringBlade前端UI系统</div>
        <div>2.对现有的avue2.0、element-ui库进行二次封装。</div>
        <div>3.100%兼容原生element-ui库</div>
        <div>4.基于json驱动的模块配置，打造最好用的vuejs中后台脚手架。</div>
        <div>5.使用Saber可以大幅度提升开发效率，不再为重复工作发愁。</div>
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
        <div>1.经历过较长的线上生产，积累了很多企业痛点的解决方案。</div>
        <div>2.一套代码兼容MySql、Oracle、PostgreSQL，适应企业各种不同场景的需求。</div>
        <div>3.集成了很多企业急切所需的例如多租户、Oauth2授权认证、工作流、分布式事务等等功能。</div>
        <div>4.深度定制了Flowable工作流，完美支持SpringCloud分布式服务的场景，以远程调用的方式进行操作。</div>
        <div>5.升级了核心驱动，新功能完全可以开箱即用，而开源版需要自己再花时间进行集成，需要花掉更多的时间成本。</div>
        <div>6.拥抱微服务时代，很多企业由于项目转型或升级，传统的技术已然不能满足，反而会花更多成本，而BladeX就是为此而生。</div>
        <div>7.同时提供SpringCloud版本和SpringBoot版本，两个版本的api可以与Sword和Saber无缝对接，为小型项目至大型项目保驾护航。</div>
        <div>8.授权购买即永久，源码没有混淆，完全开放，后续升级完全免费。企业只需花很少的钱即可获得一整套成熟的解决方案，你还在等什么？</div>
      </el-collapse-item>
      <el-collapse-item title="拥有的核心功能" name="4">
        <div>1.前后端分离-采用前后端分离模式，前端提供两套架构，Sword基于React，Saber基于Vue</div>
        <div>2.	分布式单体式后端架构-提供两套后端架构，基于SpringCloud的分布式架构以及基于SpringBoot的单体式架构</div>
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
        <div>23.全能代码生成器-支持自定义模型、模版 、业务建模，支持多种模板引擎，在线配置。大幅度提升开发效率，不再为重复工作发愁。</div>
        <div>24.Seata分布式事务-定制集成Seata，支持分布式事务，无代码侵入，不失灵活与简洁</div>
        <div>25.未完待续...</div>
      </el-collapse-item>
      <el-collapse-item title="软件定制开发合作" name="5">
        <div>1.接BladeX系列架构的定制服务</div>
        <div>2.接3个月以内工期的react、vue、springboot、springcloud、app、小程序等软件定制服务</div>
        <div>3.有意向请联系唯一指定QQ:85088620</div>
      </el-collapse-item>
    </el-collapse>
  </basic-container>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "wel",
    data() {
      return {
        activeNames: ['1','2','3']
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

