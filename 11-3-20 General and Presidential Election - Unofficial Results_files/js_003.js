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

Type.registerNamespace('NorthwoodsSoftwareDevelopment.Cms.WebServices');
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax=function() {
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_path();},
GetSuggestions:function(keyword,indexID,maxSuggestions,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetSuggestions',false,{keyword:keyword,indexID:indexID,maxSuggestions:maxSuggestions},succeededCallback,failedCallback,userContext); }}
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.registerClass('NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax',Sys.Net.WebServiceProxy);
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance = new NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax();
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_path = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.set_path(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.get_path = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_path(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_timeout = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.set_timeout(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.get_timeout = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_timeout(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_defaultUserContext = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.set_defaultUserContext(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.get_defaultUserContext = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_defaultUserContext(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_defaultSucceededCallback = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.set_defaultSucceededCallback(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.get_defaultSucceededCallback = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_defaultSucceededCallback(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_defaultFailedCallback = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.set_defaultFailedCallback(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.get_defaultFailedCallback = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_defaultFailedCallback(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_enableJsonp = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.set_enableJsonp(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.get_enableJsonp = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_enableJsonp(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_jsonpCallbackParameter = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.set_jsonpCallbackParameter(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.get_jsonpCallbackParameter = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.get_jsonpCallbackParameter(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.set_path("/display/components/Blocks/CustomBlocks/SearchBar/Support/SearchBarAjax.asmx");
NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.GetSuggestions= function(keyword,indexID,maxSuggestions,onSuccess,onFailed,userContext) {NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax._staticInstance.GetSuggestions(keyword,indexID,maxSuggestions,onSuccess,onFailed,userContext); }


}
/*
     FILE ARCHIVED ON 17:06:03 Nov 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:36 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 855.528 (3)
  exclusion.robots: 0.262
  esindex: 0.015
  PetaboxLoader3.resolve: 538.13 (4)
  captures_list: 911.776
  CDXLines.iter: 21.234 (3)
  PetaboxLoader3.datanode: 1032.314 (5)
  load_resource: 797.226 (2)
  RedisCDXSource: 22.089
  exclusion.robots.policy: 0.251
*/