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
                    res: 'data.0'
                },
                canvasOption: {
                    text: 'avue',
                    ratio: 0.1
                },
                action: 'https://avueupload.91eic.com/upload/list',
                tip: '只能上传jpg/png用户头像，且不超过500kb',
                span: 12,
                row: true,
                prop: 'img'
            }, {
                label: '姓名',
                span: 6,
                row: true,
                prop: 'name'
            }, {
                label: '用户名',
                span: 12,
                row: true,
                prop: 'username'
            }, {
                label: '手机号',
                span: 12,
                row: true,
                prop: 'phone'
            }, {
                label: '个性签名',
                prop: 'detail',
                span: 24,
                row: true,
                type: 'textarea',
                minRows: 5,
                maxRows: 8,
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
                prop: 'oldpassword'
            }, {
                label: '新密码',
                span: 12,
                row: true,
                type: 'password',
                prop: 'newpassword'
            }, {
                label: '确认密码',
                span: 12,
                row: true,
                type: 'password',
                prop: 'newpasswords'
            }]
        }
    }]
}