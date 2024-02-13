export function parseSavePath(savePath: string) {
  const pathParts = savePath.split(".");
  const ObjectName: string = pathParts[0];
  const propertyName: string = pathParts[1];
  return { ObjectName, propertyName };
}
