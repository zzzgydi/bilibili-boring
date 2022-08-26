const oprList = "=,==,!=,>,<,>=,<=,has".split(",").join("|");
const oprRegex = new RegExp(`\\s*(\\w+)\\s+(${oprList})\\s+(.+)`, "i");

export function generateFilters(text: string): IFilterItem[] {
  const rules = text
    .split("\n")
    .map((e) => e.trim())
    .filter(Boolean);

  return rules
    .map((rule) => {
      const result = rule.match(oprRegex);
      if (!result) return;
      const [_, key, opr, val = ""] = result;
      return {
        key: key.toLocaleLowerCase(),
        opr: opr.toLocaleLowerCase(),
        val: val.trim(),
      };
    })
    .filter(Boolean) as IFilterItem[];
}

/**
 * 候选key
 * - bvid | id
 * - title
 * - up | name    // up主名称 - owner.name
 * - upid | mid   // up主的id - owner.mid
 * - view
 * - like
 * - danmaku
 * - duration   // 视频时长
 * - pubdate    // 发布日期秒数
 * - followed | follow | is_followed   // 是否关注
 */
export function executeFilter(item: IVideoItem, filter: IFilterItem): boolean {
  const { key, opr, val } = filter;

  function stringMatch(lh: any, rh: any): boolean {
    if (["=", ">=", "<=", "=="].includes(opr)) return lh == rh;
    if (opr === "!=") return lh != rh;
    if (opr === "has") return lh.toString().includes(val.toString());
    return false;
  }

  function booleanMatch(lh: any, rh: any): boolean {
    lh = lh == "false" || lh == "0" ? false : !!lh;
    rh = rh == "false" || rh == "0" ? false : !!rh;
    if (["=", ">=", "<=", "=="].includes(opr)) return lh == rh;
    if (opr === "!=") return lh != rh;
    return false;
  }

  function numberMatch(lh: any, rh: any): boolean {
    lh = +lh;
    rh = +rh;
    switch (opr) {
      case "=":
      case "==":
        return lh == rh;
      case "!=":
        return lh != rh;
      case ">":
        return lh > rh;
      case "<":
        return lh < rh;
      case ">=":
        return lh >= rh;
      case "<=":
        return lh <= rh;
      default:
        return false;
    }
  }

  if (key === "bvid" || key === "id") return stringMatch(item.bvid, val);
  if (key === "title") return stringMatch(item.title, val);
  if (key === "up" || key === "name") return stringMatch(item.owner?.name, val);
  if (key === "upid" || key === "mid") return stringMatch(item.owner?.mid, val);
  if (key === "view") return numberMatch(item.stat?.view, val);
  if (key === "like") return numberMatch(item.stat?.like, val);
  if (key === "danmaku") return numberMatch(item.stat?.danmaku, val);
  if (key === "duration") return numberMatch(item.duration, val);
  if (key === "pubdate") return numberMatch(item.pubdate, val);

  if (key === "follow" || key === "followed" || key === "is_followed")
    return booleanMatch(item.is_followed, val);

  return false;
}
