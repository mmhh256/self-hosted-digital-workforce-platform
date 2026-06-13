export interface CorrelatedContainerOutput {
  readonly inputTurnId?: string;
  ipcReceipts?: Array<{ deliveryId: string }>;
}

/** Resolve one immutable input identity; never consult mutable "latest" state. */
// 输出优先使用自身携带的输入 ID，避免延迟回调误关联到后来开始的输入轮次。
export function resolveContainerOutputInputTurnId(
  output: CorrelatedContainerOutput,
  coldStartInputTurnId: string,
): string {
  return (
    output.inputTurnId ??
    output.ipcReceipts?.[output.ipcReceipts.length - 1]?.deliveryId ??
    coldStartInputTurnId
  );
}
