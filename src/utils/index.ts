/**
 * 公共静态Util方法
 *
 * @copyright 火星科技 mars3d.cn
 * @author 木遥 2021-11-01
 */

/**
 * 判断是否 "经度,纬度" 字符串值
 *
 * @export
 * @param {string} text 传入的字符串
 * @return {boolean} 是否 经度,纬度
 */
export function isLonLat(text: string): boolean {
  const reg = /^-?((0|1?[0-7]?[0-9]?)(([.][0-9]*)?)|180(([.][0]*)?)),-?((0|[1-8]?[0-9]?)(([.][0-9]*)?)|90(([.][0]*)?))$/
  return reg.test(text)
}

/**
 * 设置自动高度值
 * @param {function} callback 窗口大小变化时的回调
 * @param {number} [lose=0] 窗口高度基础上减少的值
 * @param {string} [container="sanbox-warpper"] 窗口id
 * @return {number} 当前计算完成的高度
 */
export function setAutoHeight(callback: (v: number) => void, lose = 0, container = "sanbox-warpper"): number {
  const wapper = document.getElementById(container)
  let wapperHeight = wapper?.clientHeight || 0

  window.onresize = () => {
    wapperHeight = wapper?.clientHeight || 0
    const resizeHeight = wapperHeight - lose
    callback(resizeHeight)
  }
  return wapperHeight - lose
}

/**
 *  获取URL参数
 *
 * @export
 * @param {string} parameter url值
 * @return {string | null}  参数值
 */
export function getQueryString(parameter: string): string | null {
  return new URL(window.location.href).searchParams.get(parameter)
}
