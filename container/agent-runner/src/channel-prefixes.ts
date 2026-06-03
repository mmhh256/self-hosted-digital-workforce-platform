/** IM channel type → JID prefix mapping. Shared between main server and agent-runner. */
export const CHANNEL_PREFIXES: Record<string, string> = {
  feishu: 'feishu:',
  telegram: 'telegram:',
  qq: 'qq:',
  wechat: 'wechat:',
  dingtalk: 'dingtalk:',
  discord: 'discord:',
  whatsapp: 'whatsapp:',
};

/** Determine the channel type from a JID string. Returns 'web' for unrecognized prefixes. */
// 未知前缀回退为 web 是分类约定，不代表该地址已经通过渠道授权。
export function getChannelFromJid(jid: string): string {
  for (const [type, prefix] of Object.entries(CHANNEL_PREFIXES)) {
    if (jid.startsWith(prefix)) return type;
  }
  return 'web';
}
