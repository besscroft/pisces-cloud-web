/** 资源列表请求参数 */
interface ResourceListRequestData {
  pageNum: number
  pageSize: number
  queryKey: string
}

/** 新增资源请求参数 */
interface AddResourceRequestData {
  /** 资源名称 */
  name: string | undefined
  /** 资源路径 */
  url: string | undefined
  /** 资源描述 */
  description: string | undefined
  /** 资源类别ID */
  categoryId: number | undefined
  /** 排序 */
  sort: number | undefined
}

/** 更新资源请求参数 */
interface UpdateResourceRequestData {
  /** 资源 id */
  resourceId: number | undefined
  /** 资源名称 */
  name: string | undefined
  /** 资源路径 */
  url: string | undefined
  /** 资源描述 */
  description: string | undefined
  /** 资源类别ID */
  categoryId: number | undefined
  /** 排序 */
  sort: number | undefined
}
