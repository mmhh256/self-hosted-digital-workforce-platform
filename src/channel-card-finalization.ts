export interface FinalizableChannelCard {
  complete(text: string): Promise<void>;
  abort(reason?: string): Promise<void>;
}

export interface ChannelCardFinalizationResult {
  acknowledged: boolean;
  error?: unknown;
}

/**
 * Terminalize a provider card only after every prerequisite physical delivery
 * has been acknowledged.  `acknowledged` is deliberately stricter than
 * "complete was attempted": only a resolved provider terminal operation may
 * advance a Turn/cursor.
 */
// 前置投递未确认时只尝试中止卡片；调用过完成接口本身不能视为已确认成功。
export async function finalizeChannelCardAfterDelivery(
  card: FinalizableChannelCard,
  text: string,
  prerequisitesAcknowledged: boolean,
  abortReason: string,
): Promise<ChannelCardFinalizationResult> {
  if (!prerequisitesAcknowledged) {
    await card.abort(abortReason).catch(() => {});
    return { acknowledged: false };
  }

  try {
    await card.complete(text);
    return { acknowledged: true };
  } catch (error) {
    await card.abort(abortReason).catch(() => {});
    return { acknowledged: false, error };
  }
}
