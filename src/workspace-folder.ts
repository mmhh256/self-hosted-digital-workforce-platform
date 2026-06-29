/**
 * Workspace folders are persisted identifiers, not arbitrary filesystem paths.
 *
 * Keep this contract shared by registration and every runtime path builder so a
 * folder accepted at creation can always be handled safely during cleanup.
 */
// 工作区标识使用单段名称白名单；路径分隔符不属于有效名称，长度上限为 128 个字符。
const WORKSPACE_FOLDER_NAME_RE = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;

export function isValidWorkspaceFolderName(value: unknown): value is string {
  return typeof value === 'string' && WORKSPACE_FOLDER_NAME_RE.test(value);
}

export function assertValidWorkspaceFolderName(
  value: unknown,
  label = 'workspace folder',
): string {
  if (!isValidWorkspaceFolderName(value)) {
    throw new Error(`Invalid ${label} for filesystem isolation`);
  }
  return value;
}
