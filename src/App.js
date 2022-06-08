import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./components/UploadFiles.js"

function App() {
  return (
    <div className="container">
      <h4> 使用 React 搭建文件上传 Demo</h4>
      <p> <a href="https://kalacloud.com/">卡拉云</a>-低代码开发工具1秒搭建 </p>
      <p>使用卡拉云无需懂任何前端技术，仅需拖拽即可搭建属于你的后台管理系统</p>
      <div className="content">
        <UploadFiles />
      </div>
    </div>
  );
}

export default App;
