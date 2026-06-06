# Truffle AI Platform

> 面向小团队的"需求→审核→开发→资产"协作平台

> ⚠️ **此仓库为架构骨架版本** — 完整实现代码在购买后交付。

🌐 [trufflekit.com](https://trufflekit.com)

---

## Architecture Overview

```
website/
├── frontend/          # React + TypeScript + Vite + Tailwind
│   └── src/
│       ├── components/    # UI 组件（14个）
│       ├── context/       # 状态管理（4个 Context）
│       └── lib/           # API 客户端 + 国际化
├── backend/           # FastAPI + Python + SQLite
│   └── app/
│       ├── api/           # 14 个路由模块
│       ├── auth/          # 认证系统（JWT + TOTP）
│       ├── scanner/       # 安全扫描引擎
│       └── db.py          # 数据库初始化
└── docs/              # 文档
```

Full implementation available upon purchase.
