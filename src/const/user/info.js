export default {
  column: [{
    label: '个人信息',
    prop: 'info',
    option: {
      submitText: '修改',
      column: [{
        label: '头像',
        type: 'upload',
        listType: 'picture-img',
        propsHttp: {
          res: 'data',
          url: 'link',
        },
        canvasOption: {
          text: 'blade',
          ratio: 0.1
        },
        action: '/api/blade-resource/oss/endpoint/put-file',
        tip: '只能上传jpg/png用户头像，且不超过500kb',
        span: 12,
        row: true,
        prop: 'avatar'
      }, {
        label: '姓名',
        span: 12,
        row: true,
        prop: 'name'
      }, {
        label: '用户名',
        span: 12,
        row: true,
        prop: 'realName'
      }, {
        label: '手机号',
        span: 12,
        row: true,
        prop: 'phone'
      }, {
        label: '邮箱',
        prop: 'email',
        span: 12,
        row: true,
      }]
    }
  }, {
    label: '修改密码',
    prop: 'password',
    option: {
      submitText: '修改',
      column: [{
        label: '原密码',
        span: 12,
        row: true,
        type: 'password',
        prop: 'oldPassword'
      }, {
        label: '新密码',
        span: 12,
        row: true,
        type: 'password',
        prop: 'newPassword'
      }, {
        label: '确认密码',
        span: 12,
        row: true,
        type: 'password',
        prop: 'newPassword1'
      }]
    }
  }]
}
