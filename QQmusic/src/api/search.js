import Vue from "vue";
import {commonParams,options} from "./config";
export default{
	getHotKey(){
		const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

		  const data = Object.assign({}, commonParams, {
		    platform: 'h5',
		    needNewCode: 1,
		    callbackQuery :"jsonpCallback",	//例如："http://www.baidu.com?jsonpCallback=tan0"
    	 	callbackName  :"tan0"
		  })

		  return Vue.jsonp(url,data,options);
	},
	search(query, page, zhida, perpage){
		 const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

		  const data = Object.assign({}, commonParams, {
		    w: query,
		    p: page,
		    catZhida: zhida ? 1 : 0,
		    perpage,
		    n: perpage,
		    zhidaqu: 1,
		    platform: 'h5',
		    needNewCode: 1,
		    t: 0,
		    flag: 1,
		    ie: 'utf-8',
		    sem: 1,
		    aggr: 0,
		    uid: 0,
		    remoteplace: 'txt.mqq.all'
		  })

		  return Vue.jsonp(url, data, options)
	}
}








