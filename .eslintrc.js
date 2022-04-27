module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "rules": {
    "semi": ["error", "always"], // 禁止使用分号
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 上线环境用打印就报警告, 开发环境关闭此规则
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // debugger可以终止代码执行
    'no-multiple-empty-lines': 'off' // 不允许有连续多行空行(关闭规则)
  }
};