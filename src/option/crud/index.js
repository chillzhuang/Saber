export default () => {
  return {
    translate: false,
    searchLabelWidth: 100,
    excelBtn: true,
    labelWidth: 110,
    selection: true,
    tip: false,
    index: true,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    column: [{
      label: "姓名",
      prop: "name",
      search: true,
    }, {
      label: "性别",
      prop: "sex",
      type: 'select',
      dicData: [{
        label: '男',
        value: 0
      }, {
        label: '女',
        value: 1
      }],
      search: true,
    }],
  }
}