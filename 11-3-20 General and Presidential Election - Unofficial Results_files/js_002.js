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
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax=function() {
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_path();},
GetResultsData:function(docID,blockID,keyword,classifications,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetResultsData',false,{docID:docID,blockID:blockID,keyword:keyword,classifications:classifications},succeededCallback,failedCallback,userContext); },
GetFilterResults:function(docID,blockID,args,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetFilterResults',false,{docID:docID,blockID:blockID,args:args},succeededCallback,failedCallback,userContext); }}
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.registerClass('NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax',Sys.Net.WebServiceProxy);
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance = new NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax();
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_path = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.set_path(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.get_path = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_path(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_timeout = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.set_timeout(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.get_timeout = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_timeout(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_defaultUserContext = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.set_defaultUserContext(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.get_defaultUserContext = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_defaultUserContext(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_defaultSucceededCallback = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.set_defaultSucceededCallback(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.get_defaultSucceededCallback = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_defaultSucceededCallback(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_defaultFailedCallback = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.set_defaultFailedCallback(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.get_defaultFailedCallback = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_defaultFailedCallback(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_enableJsonp = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.set_enableJsonp(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.get_enableJsonp = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_enableJsonp(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_jsonpCallbackParameter = function(value) { NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.set_jsonpCallbackParameter(value); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.get_jsonpCallbackParameter = function() { return NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.get_jsonpCallbackParameter(); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.set_path("/display/components/Blocks/AggregationV2/Support/AggregationV2Ajax.asmx");
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.GetResultsData= function(docID,blockID,keyword,classifications,onSuccess,onFailed,userContext) {NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.GetResultsData(docID,blockID,keyword,classifications,onSuccess,onFailed,userContext); }
NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.GetFilterResults= function(docID,blockID,args,onSuccess,onFailed,userContext) {NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax._staticInstance.GetFilterResults(docID,blockID,args,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
Type.registerNamespace('NorthwoodsSoftwareDevelopment.Cms.Utilities');
if (typeof(NorthwoodsSoftwareDevelopment.Cms.Utilities.FilterReturnData) === 'undefined') {
NorthwoodsSoftwareDevelopment.Cms.Utilities.FilterReturnData=gtc("NorthwoodsSoftwareDevelopment.Cms.Utilities.FilterReturnData");
NorthwoodsSoftwareDevelopment.Cms.Utilities.FilterReturnData.registerClass('NorthwoodsSoftwareDevelopment.Cms.Utilities.FilterReturnData');
}
if (typeof(NorthwoodsSoftwareDevelopment.Cms.WebServices.FilterQueryArgs) === 'undefined') {
NorthwoodsSoftwareDevelopment.Cms.WebServices.FilterQueryArgs=gtc("NorthwoodsSoftwareDevelopment.Cms.WebServices.FilterQueryArgs");
NorthwoodsSoftwareDevelopment.Cms.WebServices.FilterQueryArgs.registerClass('NorthwoodsSoftwareDevelopment.Cms.WebServices.FilterQueryArgs');
}


}
/*
     FILE ARCHIVED ON 17:06:03 Nov 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:35 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 262.057
  exclusion.robots: 0.221
  exclusion.robots.policy: 0.212
  RedisCDXSource: 25.754
  esindex: 0.015
  LoadShardBlock: 204.495 (3)
  PetaboxLoader3.datanode: 193.085 (5)
  CDXLines.iter: 23.692 (3)
  load_resource: 166.379 (2)
  PetaboxLoader3.resolve: 70.707 (2)
*/