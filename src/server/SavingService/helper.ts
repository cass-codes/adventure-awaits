export function parseSavePath(savePath: string) {
  const pathParts = savePath.split(".");
  const ObjectName: string = pathParts[0];
  const propertyPath: string[] = pathParts.slice(1);
  return { ObjectName, propertyPath };
}
