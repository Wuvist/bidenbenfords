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
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax=function() {
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_path();},
ProcessComment:function(docID,packagedData,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'ProcessComment',false,{docID:docID,packagedData:packagedData},succeededCallback,failedCallback,userContext); }}
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.registerClass('NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax',Sys.Net.WebServiceProxy);
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance = new NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax();
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_path = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.set_path(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.get_path = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_path(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_timeout = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.set_timeout(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.get_timeout = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_timeout(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_defaultUserContext = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.set_defaultUserContext(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.get_defaultUserContext = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_defaultUserContext(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_defaultSucceededCallback = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.set_defaultSucceededCallback(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.get_defaultSucceededCallback = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_defaultSucceededCallback(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_defaultFailedCallback = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.set_defaultFailedCallback(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.get_defaultFailedCallback = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_defaultFailedCallback(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_enableJsonp = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.set_enableJsonp(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.get_enableJsonp = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_enableJsonp(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_jsonpCallbackParameter = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.set_jsonpCallbackParameter(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.get_jsonpCallbackParameter = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.get_jsonpCallbackParameter(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.set_path("/display/components/Blocks/Commenting/Support/CommentingAjax.asmx");
NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.ProcessComment= function(docID,packagedData,onSuccess,onFailed,userContext) {NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax._staticInstance.ProcessComment(docID,packagedData,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(NorthwoodsSoftwareDevelopment.Cms.WebServices.ReturnData) === 'undefined') {
NorthwoodsSoftwareDevelopment.Cms.WebServices.ReturnData=gtc("NorthwoodsSoftwareDevelopment.Cms.WebServices.ReturnData");
NorthwoodsSoftwareDevelopment.Cms.WebServices.ReturnData.registerClass('NorthwoodsSoftwareDevelopment.Cms.WebServices.ReturnData');
}


}
/*
     FILE ARCHIVED ON 17:06:03 Nov 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:34 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 1.651
  esindex: 0.012
  PetaboxLoader3.datanode: 439.628 (5)
  exclusion.robots.policy: 0.337
  RedisCDXSource: 240.975
  PetaboxLoader3.resolve: 147.252 (2)
  CDXLines.iter: 31.214 (3)
  LoadShardBlock: 524.388 (3)
  load_resource: 332.976 (2)
  captures_list: 853.272
*/