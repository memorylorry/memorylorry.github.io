/**
 * 取参数
 * @param {*} fromHash 是否从hash中取数据，默认从search中取
 */
export default function GetRequestParam(fromHash) { 
	var url = fromHash?location.hash:location.search; //获取url中"?"符后的字串 
	var theRequest = new Object();

	if (url.indexOf("?") != -1) {
		var str = url.substr(url.indexOf('?')+1); 
		var strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
		}
	} 
	return theRequest;
}