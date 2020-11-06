var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var NWS = NWS || function () {
	return {
		initNamespace: function (namespace, f) {
			if (typeof(f) === 'undefined') {
				alert('Must define a class');
				return;
			}
			
			var o = this, i, j, d;
			d = namespace.split(".");
			for (j = (d[0] == "NWS") ? 1 : 0; j < d.length; ++j) {
				o[d[j]] = o[d[j]] || (j == d.length - 1 ? f() : {});
				o = o[d[j]];
			}

			return o;
		}
	};
} ();


}
/*
     FILE ARCHIVED ON 17:06:03 Nov 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:33 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 301.791 (3)
  PetaboxLoader3.datanode: 459.76 (5)
  CDXLines.iter: 25.327 (3)
  load_resource: 992.288 (2)
  esindex: 0.016
  RedisCDXSource: 33.863
  PetaboxLoader3.resolve: 800.376 (3)
  exclusion.robots.policy: 0.368
  captures_list: 386.844
  exclusion.robots: 0.385
*/