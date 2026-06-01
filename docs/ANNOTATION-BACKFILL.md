# 代码注释补录记录

本批注释集中补录于 2026-10-21T03:33:30+08:00。

2026 年 6 月 1—30 日是提交的作者日期标签，不表示当时已经发生这些开发活动。每条提交保留实际提交者时间；现有初始源码提交未改写。改动仅包含说明性注释及本记录，不改变运行逻辑。

| 作者日期标签 | 文件 | 注释主题 |
| --- | --- | --- |
| 2026-06-01 | `src/im-channel.ts` | 统一渠道契约 |
| 2026-06-02 | `src/im-channel-capabilities.ts` | 话题映射条件 |
| 2026-06-03 | `shared/channel-prefixes.ts` | 渠道前缀回退 |
| 2026-06-04 | `src/channel-address.ts` | 会话地址粒度 |
| 2026-06-05 | `src/channel-conversation-kind.ts` | 会话类型判定 |
| 2026-06-06 | `src/channel-admission.ts` | 准入后的路由边界 |
| 2026-06-07 | `src/channel-account-routing.ts` | 账号默认绑定 |
| 2026-06-08 | `src/channel-account-secrets.ts` | 凭据引用约束 |
| 2026-06-09 | `src/channel-account-connectivity.ts` | 凭据探测结果 |
| 2026-06-10 | `src/channel-account-migration.ts` | 旧账号迁移范围 |
| 2026-06-11 | `src/channel-mount-service.ts` | 挂载解析依赖 |
| 2026-06-12 | `src/channel-native-context.ts` | 话题标题收敛 |
| 2026-06-13 | `src/channel-output-correlation.ts` | 输出与输入关联 |
| 2026-06-14 | `src/channel-card-finalization.ts` | 卡片完成确认 |
| 2026-06-15 | `src/channel-session-owner.ts` | 会话渠道归属 |
| 2026-06-16 | `src/channel-turn-runtime.ts` | 轮次租赁与心跳 |
| 2026-06-17 | `src/channel-turn-registry.ts` | 运行轮次命名空间 |
| 2026-06-18 | `src/channel-outbox-runtime-scope.ts` | 外发语义幂等键 |
| 2026-06-19 | `src/channel-outbox-delivery.ts` | 投递恢复入口 |
| 2026-06-20 | `src/channel-reliability-store.ts` | 持久化路由快照 |
| 2026-06-21 | `src/channel-reliability-recovery.ts` | 恢复扫描边界 |
| 2026-06-22 | `src/feishu-capability-outbox.ts` | 飞书外部变更封装 |
| 2026-06-23 | `src/permissions.ts` | 权限白名单归一化 |
| 2026-06-24 | `src/agent-builder-turn-auth.ts` | 确认授权的会话范围 |
| 2026-06-25 | `src/turn-output-coordinator.ts` | 进度与结果的区分 |
| 2026-06-26 | `src/turn-outcome.ts` | 执行终态与重试 |
| 2026-06-27 | `src/session-workflows.ts` | 工作流快照缓存 |
| 2026-06-28 | `src/session-files.ts` | 会话清理保留项 |
| 2026-06-29 | `src/workspace-folder.ts` | 工作区文件名边界 |
| 2026-06-30 | `src/workspace-attribution.ts` | 输出所属工作区 |
