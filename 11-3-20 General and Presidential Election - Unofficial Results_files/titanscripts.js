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


/* NWS.js */
var NWS=NWS||(function(){return{initNamespace:function(namespace,initFunction){if(typeof(initFunction)==='undefined'){alert("Must be a function expression who's return value defines the namespace");return;}
var thisObj=this,names=namespace.split(".");for(var n=(names[0]=="NWS")?1:0;n<names.length;n++){thisObj[names[n]]=thisObj[names[n]]||(n==names.length-1?initFunction():{});thisObj=thisObj[names[n]];}
return thisObj;}};})();NWS.initNamespace('NWS.Display',function(params){return{InitScrollTop:function(params){var scrollFunc=function(evt){var header=document.getElementById(params.headerID),scroller=document.getElementById(params.scrollerID);if(!scroller)
return;var top=window.pageYOffset||document.documentElement.scrollTop,offsetH=(header)?header.offsetHeight:0;if(top>offsetH)
tic_Utilities.AddStyle(scroller,"fadeIn");else
tic_Utilities.RemoveStyle(scroller,"fadeIn");};var clickFunc=function(evt){evt.preventDefault();window.scrollTo(0,0);return false;};/*tic_Utilities.ShowHideById(params.scrollerID,false);*/tic_Utilities.AddEventListener(window,"scroll",scrollFunc);tic_Utilities.AddEventListener(document.getElementById(params.scrollerID),"click",clickFunc);},InitHeaderAnimation:function(params){if(!params.animateClass)
return;var scrollFunc=function(evt){var header=document.getElementById(params.headerID),position=window.getComputedStyle(header,null).getPropertyValue("position");if(position!="fixed")
return;var top=window.pageYOffset||document.documentElement.scrollTop,offsetH=(header)?header.offsetHeight:0;if(top>offsetH)
tic_Utilities.AddStyle(header,params.animateClass);else
tic_Utilities.RemoveStyle(header,params.animateClass);};var resizeFunc=function(evt){var header=document.getElementById(params.headerID),position=window.getComputedStyle(header,null).getPropertyValue("position"),top=window.pageYOffset||document.documentElement.scrollTop;if(position!="fixed")
tic_Utilities.RemoveStyle(header,params.animateClass);if(position=="fixed"&&top)
tic_Utilities.AddStyle(header,params.animateClass);};tic_Utilities.AddEventListener(window,"scroll",scrollFunc);tic_Utilities.AddEventListener(window,"resize",resizeFunc);}};});
/* DefaultButtons.js */
function SearchSubmit(baseURL,searchCtl)
{tic_Utilities.RemoveStyle(searchCtl,"error");if(tic_Utilities.Trim(searchCtl.value)===""){tic_Utilities.AddStyle(searchCtl,"error");return;}
if(baseURL.indexOf("?")>0)
location.href=baseURL+"&Search_Keywords="+encodeURIComponent(searchCtl.value);else
location.href=baseURL+"?Search_Keywords="+encodeURIComponent(searchCtl.value);}
function ShowPanel(onPanel,offPanel,suffix)
{document.getElementById(onPanel).style.display="block";document.getElementById(offPanel).style.display="none";if(!suffix)
return;for(var ii=0;ii<Page_Validators.length;++ii)
if(Page_Validators[ii].id.indexOf(suffix)==(Page_Validators[ii].id.length-suffix.length))
ValidatorEnable(Page_Validators[ii],true);else
ValidatorEnable(Page_Validators[ii],false);}
function ValidateLogin(panel,changeMessageID)
{var messageControl=document.getElementById(changeMessageID);if(!messageControl)
return;function GetMsg(){if(messageControl.textContent)
return messageControl.textContent;else if(messageControl.innerText)
return messageControl.innerText;return null;}
function SetMsg(txt){if(messageControl.textContent)
messageControl.textContent=txt;else if(messageControl.innerText)
messageControl.innerText=txt;}
SetMsg("");messageControl.style.display="none";switch(panel)
{case"changePasswordPanel":if(!document.getElementById("userNameEP").value||!document.getElementById("oldPassword").value||!document.getElementById("newPassword1").value||!document.getElementById("newPassword2").value)
SetMsg("All fields must be supplied");else if(document.getElementById("newPassword1").value!=document.getElementById("newPassword2").value)
SetMsg("New passwords do not match");else if(document.getElementById("newPassword1").value==document.getElementById("oldPassword").value)
SetMsg("New passwords matches old password");break;case"loginOnlyDiv":if(!document.getElementById("userName").value||!document.getElementById("userPassword").value)
SetMsg("All fields must be supplied");break;case"loginAndChangeDiv":if(!document.getElementById("userNameCP").value||!document.getElementById("oldPasswordCP").value||!document.getElementById("newPassword1CP").value||!document.getElementById("newPassword2CP").value)
SetMsg("All fields must be supplied");else if(document.getElementById("newPassword1CP").value!=document.getElementById("newPassword2CP").value)
SetMsg("New passwords do not match");else if(document.getElementById("newPassword1CP").value==document.getElementById("oldPasswordCP").value)
SetMsg("New passwords matches old password");break;}
if(!GetMsg())
{document.getElementById("submitType").value=panel;document.forms[0].submit();}
else
messageControl.style.display="block";}
function DefaultButton(anEvent,btn){var key=DefaultUtils.GetWhich(anEvent);if(!key||!btn)
return;if(key===13){if(btn.click)
btn.click(anEvent);else if(btn.onclick)
btn.onclick(anEvent);return DefaultUtils.CancelBubble(anEvent);}}
function DefaultFunction(evt,func){var key=DefaultUtils.GetWhich(evt);if(!key||!func)
return;if(key===13){func();return DefaultUtils.CancelBubble(evt);}}
var DefaultUtils={GetWhich:function(evt){evt=evt||window.event;if(evt.which)
return evt.which;else if(evt.keyCode)
return evt.keyCode;return null;},CancelBubble:function(evt){evt=evt||window.event;if(!evt)
return;evt.cancelBubble=true;evt.returnValue=false;if(evt.stopPropagation)
evt.stopPropagation();if(evt.preventDefault)
evt.preventDefault();return false;}};
/* FormEditorSupport.js */
function SFGetControlSet(ctlSet)
{return document.getElementsByName(ctlSet);}
function SFGetControl(ctlName)
{if(typeof(ctlName)=="string")
return document.getElementById(ctlName);else
return ctlName;}
function SFGetEditValue(ctlName){var ctl=SFGetControl(ctlName);if(ctl)
return ctl.value;return null;}
function SFGetLabelValue(ctlName)
{ctl=document.getElementById(ctlName);return ctl.innerHTML;}
function SFGetRadioValue(ctlSet)
{var radios=SFGetControlSet(ctlSet);if(radios==null)
return"";if(radios.length==null||radios.length==0)
return(radios.checked?radios.value:null);for(var ii=0;ii<radios.length;++ii)
if(radios[ii].type!='radio')
return null;else if(radios[ii].checked)
return radios[ii].value;return"";}
function SFGetRadioDefaultValue(ctlSet)
{var radios=SFGetControlSet(ctlSet);if(radios==null)
return null;for(var ii=0;ii<radios.length;++ii)
if(radios[ii].type!='radio')
return null;else if(radios[ii].defaultChecked)
return radios[ii].value;return null;}
function SFGetSelectListLength(ctlName)
{return SFGetControl(ctlName).options.length;}
function SFGetSelectValue(ctlSet)
{var options=document.getElementById(ctlSet);if(options==null)
return null;var retVal="";for(var ii=0;ii<options.length;++ii)
if(options[ii].selected)
retVal+=(retVal.length?", ":"")+options[ii].value;return retVal;}
function SFGetSelectDefaultValue(ctlSet)
{var options=document.getElementById(ctlSet);if(options==null)
return null;for(var ii=0;ii<options.length;++ii)
if(options[ii].defaultSelected)
return options[ii].value;return null;}
function SFGetCheckboxState(ctlName)
{var ctl=SFGetControl(ctlName);return(ctl)?ctl.checked:false;}
function SFValidateCheckboxesByRel(rel)
{var retVal=false;var checkboxes=document.getElementsByTagName('INPUT');if(checkboxes==null||checkboxes.length==null||checkboxes.length==0)
return false;for(var ii=0;ii<checkboxes.length;++ii){if(checkboxes[ii].type!='checkbox'||checkboxes[ii].getAttribute("rel")==null||checkboxes[ii].getAttribute("rel")!=rel)
continue;retVal=checkboxes[ii].checked;if(retVal)
break;}
return retVal;}
function SFRemoveAllWhitespace(strValue)
{return strValue.replace(/[\s|\240]/gi,"");}
function SFEditFieldValue(ctlName)
{var ctl=SFGetControl(ctlName);return ctl?SFRemoveAllWhitespace(ctl.value):false;}
function SFEditFieldHasValue(ctlName)
{return(SFEditFieldValue(ctlName)!="");}
function SFEditParseDate(ctlName)
{if(!SFEditFieldIsDate(ctlName))
return new Date();var ctl=SFGetControl(ctlName);if(!ctl||!ctl.value)
return new Date();return new Date(Date.parse(ctl.value));}
function SFEditFieldIsDate(ctlName)
{var ctl=SFGetControl(ctlName);if(!ctl||!ctl.value)
return true;return ValueIsDate(ctl.value);}
function ValueIsDate(dateString){var minDate=new Date(1901,0,1,0,0,0),maxDate=new Date(2400,11,31,23,59,59),pDate=Date.parse(dateString),date=isNaN(pDate)?null:new Date(pDate);return(date!=null&&date>=minDate&&date<=maxDate);}
function ValueIsTime(timeString){if(!timeString)
return true;var timeRE=/^ *([012]?\d)[: ]([0-5]?\d) ?([aApP]?\.?[mM]?\.?) *$/;if(timeRE.test(timeString)){var match=timeString.match(timeRE);if(match.length==4){var testTime=new Date(1900,0,01);testTime.setHours(match[1]);testTime.setMinutes(match[2]);var hours=testTime.getHours();var minutes=testTime.getMinutes();if((hours!=Number(match[1]))||(minutes!=Number(match[2]))||(testTime.getDate()!=1))
return false;var isAM=(match[3].indexOf('a')>=0||match[3].indexOf('A')>=0);if(isAM&&(testTime.getHours()==0||testTime.getHours()>12))
return false;var isPM=(match[3].indexOf('p')>=0||match[3].indexOf('P')>=0);if(isPM&&(testTime.getHours()==0||testTime.getHours()>12))
return false;timeString=String(hours)+((minutes<10)?":0":":")+String(minutes)+((match[3])?(" "+match[3]):"");return true;}}
return false;}
function ValueIsNumeric(strValue){return!isNaN(parseFloat(strValue))&&isFinite(strValue);}
function SFEditFieldIsTime(ctlName)
{var ctl=SFGetControl(ctlName);if(!ctl||!ctl.value)
return true;return ValueIsTime(ctl.value);}
function SFTrim(strValue)
{return strValue?strValue.replace(/^\s*|\s*$/gi,""):"";}
function SFEditFieldMatchesRegEx(ctlName,regEx)
{return(SFGetControl(ctlName).value.match(regEx)!=null);}
function SFEditFieldIsEmail(ctlName)
{return SFEditFieldMatchesRegEx(ctlName,"^ *[\\w._\\-']+@[\\w._\\-]+\\.[\\w._\\-]* *$");}
function SFEditFieldIsPhone(ctlName,bNonUS)
{if(bNonUS)
return SFEditFieldMatchesRegEx(ctlName,"^[\\d\\.\\- ]*$");else
return SFEditFieldMatchesRegEx(ctlName,"^ *\\(?\\d{3}\\)?[) -.]\\d{3}[ -.]\\d{4} *$");}
function GeographicPointIsValid(ctlName){ctlName=ctlName.substring(ctlName.indexOf("_")+1);var lat=SFTrim(SFGetEditValue(ctlName+"_Lat")),lng=SFTrim(SFGetEditValue(ctlName+"_Long"));if(lat==""&&lng=="")
return true;if(!lat||!lng)
return false;return(ParseLatitude(lat).IsValid&&ParseLongitude(lng).IsValid);}
function ParseLatitude(latString){var retVal={IsValid:false,Latitude:latString};if(!latString)
return retVal;var latRE=/^(-)?([1-8]?[0-9]\.\d+|90\.0+)\s?([nNsS])?$/;if(latRE.test(latString)){var match=latString.match(latRE);if(match.length==4){var lat=parseFloat(match[2]),isNeg=(match[1]&&match[1].indexOf('-')>=0),isNorth=(match[3]&&(match[3].indexOf('n')>=0||match[3].indexOf('N')>=0)),isSouth=(match[3]&&(match[3].indexOf('s')>=0||match[3].indexOf('S')>=0));if(isNaN(lat))
return retVal;if((isNorth||isSouth)&&isNeg)
return retVal;retVal.IsValid=true;retVal.Latitude=(isSouth||isNeg)?String(lat*-1):String(lat);return retVal;}}
return retVal;}
function ParseLongitude(lngString){var retVal={IsValid:false,Longitude:lngString};if(!lngString)
return retVal;var lngRE=/^(-)?((?:1[0-7][0-9]|[1-9]?[0-9])\.\d+|180\.0+)\s?([eEwW])?$/;if(lngRE.test(lngString)){var match=lngString.match(lngRE);if(match.length==4){var lng=parseFloat(match[2]),isNeg=(match[1]&&match[1].indexOf('-')>=0),isEast=(match[3]&&(match[3].indexOf('e')>=0||match[3].indexOf('E')>=0)),isWest=(match[3]&&(match[3].indexOf('w')>=0||match[3].indexOf('W')>=0));if(isNaN(lng))
return retVal;if((isEast||isWest)&&isNeg)
return retVal;retVal.IsValid=true;retVal.Longitude=(isWest||isNeg)?String(lng*-1):String(lng);return retVal;}}
return retVal;}
function internal_ActionByType(type,action,container,suffix)
{if(!container)
container=document;var ctls=container.getElementsByTagName(type);var returnValue=true;for(var ii=0;ii<ctls.length;++ii){var name=ctls[ii].name||ctls[ii].getAttribute("name");if(name&&(name.indexOf("cmsForms_")==0||name.indexOf("cmsFormS_")==0))
switch(action){case"disable":SFDisableControl(name);break;case"enable":SFEnableControl(name);break;case"validate":returnValue&=SFValidateControl(name,suffix);break;case"clearCheck":if(ctls[ii].type=="checkbox")
ctls[ii].checked=false;}}
return returnValue;}
function SFClearCheckBoxes()
{internal_ActionByType("input","clearCheck",document,null);}
function SFDisableAll(container)
{if(!container)
container=document;internal_ActionByType("input","disable",container,null);internal_ActionByType("textarea","disable",container,null);internal_ActionByType("select","disable",container,null);}
function SFEnableAll(container)
{if(!container)
container=document;internal_ActionByType("input","enable",container,null);internal_ActionByType("textarea","enable",container,null);internal_ActionByType("select","enable",container,null);}
function SFGeneralValidate(docID,blockID,useCaptcha,specialValidationFunc)
{var containerControl=document.getElementById("DataDiv_"+blockID),dataErrorDiv=document.getElementById("cmsForms_DataNotProvided_"+blockID);if(!containerControl)
{window.alert("Form Container is Missing");return false;}
tic_Utilities.ShowHideById(containerControl.id,false);var allPassed=true;if(specialValidationFunc)
allPassed&=specialValidationFunc(blockID,docID);allPassed&=internal_ActionByType("select","validate",containerControl,blockID);allPassed&=internal_ActionByType("input","validate",containerControl,blockID);allPassed&=internal_ActionByType("textarea","validate",containerControl,blockID);if(useCaptcha=="1")
allPassed&=ClientSideCaptchaValidate(blockID);if(!allPassed){tic_Utilities.ShowHideById(containerControl.id,true);if(dataErrorDiv)
tic_Positioning.ScrollToElementById(dataErrorDiv.id);else
tic_Positioning.ScrollToElementById(containerControl.id);}
return allPassed;}
function SFExtraEventValidation(blockID,docID)
{var allPassed=true;var ctlName="cmsForms_EventStartTime_"+blockID;if(document.getElementById(ctlName)&&document.getElementById(ctlName).value)
allPassed&=SFRespondToValidation(SFEditFieldIsTime(ctlName),"message_"+ctlName,"Start Time is invalid.  Accepted format is HH:MM with am, pm or in 24-hour time",ctlName,blockID);ctlName="cmsForms_EventEndTime_"+blockID;if(document.getElementById(ctlName)&&document.getElementById(ctlName).value)
allPassed&=SFRespondToValidation(SFEditFieldIsTime(ctlName),"message_"+ctlName,"End Time is invalid.  Accepted format is HH:MM with am, pm or in 24-hour time",ctlName,blockID);ctlName="cmsForms_EventStartDate_"+blockID;if(document.getElementById(ctlName)&&document.getElementById(ctlName).value)
allPassed&=SFRespondToValidation(SFEditFieldIsDate(ctlName),"message_"+ctlName,"Start Date is invalid.  Accepted format is MM-dd-yyyy",ctlName,blockID);ctlName="cmsForms_EventEndDate_"+blockID;if(document.getElementById(ctlName)&&document.getElementById(ctlName).value)
allPassed&=SFRespondToValidation(SFEditFieldIsDate(ctlName),"message_"+ctlName,"End Date is invalid.  Accepted format is MM-dd-yyyy",ctlName,blockID);ctlName="cmsForms_EventContactEmail_"+blockID;if(document.getElementById(ctlName)&&document.getElementById(ctlName).value)
allPassed&=SFRespondToValidation(SFEditFieldIsEmail(ctlName),"message_"+ctlName,"Invalid Contact Email detected",ctlName,blockID);ctlName="cmsForms_EventDescription_"+blockID;if(document.getElementById(ctlName)&&document.getElementById(ctlName))
allPassed&=SFRespondToValidation(internal_GetCommentValue(document.getElementById(ctlName))==document.getElementById(ctlName).value,"message_"+ctlName,"Description field cannot contain HTML",ctlName,blockID);ctlName="cmsForms_EventNotes_"+blockID;if(document.getElementById(ctlName)&&document.getElementById(ctlName))
allPassed&=SFRespondToValidation(internal_GetCommentValue(document.getElementById(ctlName))==document.getElementById(ctlName).value,"message_"+ctlName,"Notes field cannot contain HTML",ctlName,blockID);return allPassed;}
function SFFinalEventSubmit(docID,blockID,useCaptcha)
{var attachment=document.getElementById("cmsForms_EventAttachment_"+blockID);if(attachment&&attachment.value)
document.getElementById("cmsForms_EventHasAttachment_"+blockID).value="1";var ctl=document.getElementById("cmsForms_EventName_"+blockID);ctl.form.submit();}
function SFSubmitEvent(docID,blockID,doConfirm,useCaptcha)
{if(!SFGeneralValidate(docID,blockID,useCaptcha,SFExtraEventValidation))
return;if(doConfirm=="1")
return SFConfirmForm(blockID);SFFinalEventSubmit(docID,blockID,useCaptcha);}
function SFSubmitFormUDFButton(ctl)
{var parent=ctl.parentNode;while(parent)
if(parent.tagName=="DIV"&&parent.id&&parent.id.indexOf("DataDiv_")==0)
break;else
parent=parent.parentNode;if(!parent)
return;var blockID=parent.getAttribute("blockID");if(!blockID)
return;var realSubmit=document.getElementById("formSubmit"+blockID);if(!realSubmit)
return;return realSubmit.click();}
function SFSubmitForm(docID,blockID,doConfirm,useCaptcha,submitAction)
{if(!SFGeneralValidate(docID,blockID,useCaptcha,window["FormSpecificValidation"]))
return;if(!document.getElementById("cmsForms_submitUDF")&&submitAction=="ajax"&&doConfirm=="1")
return SFConfirmForm(blockID);SFFinalFormSubmit(docID,blockID,useCaptcha,submitAction);}
function SFReturnToEdit(blockID)
{SFEnableAll(document.getElementById("DataDiv_"+blockID));tic_Utilities.ShowHideById("VerifyMessage_"+blockID,false);tic_Utilities.ShowHideById("SubmitButtons_"+blockID,true);tic_Utilities.ShowHideById("ConfirmButtons_"+blockID,false);tic_Utilities.ShowHideById("DataDiv_"+blockID,true);}
function SFConfirmForm(blockID)
{SFDisableAll(document.getElementById("DataDiv_"+blockID));tic_Utilities.ShowHideById("VerifyMessage_"+blockID,true);tic_Utilities.ShowHideById("SubmitButtons_"+blockID,false);tic_Utilities.ShowHideById("ConfirmButtons_"+blockID,true);tic_Utilities.ShowHideById("cmsForms_DataNotProvided_"+blockID,false);tic_Utilities.ShowHideById("DataDiv_"+blockID,true);}
function SFFinalFormSubmit(docID,blockID,useCaptcha,submitAction)
{SFReturnToEdit(blockID);tic_Utilities.ShowHideById("DataDiv_"+blockID,false);internal_HandleProcessingKey(blockID);if(submitAction=="post")
return document.forms[0].submit();var packagedData=internal_PackageFormData(blockID),ajaxArgs=[docID,blockID,packagedData];TitanDisplayServiceWrapper.MakeWebServiceCall("Forms",NorthwoodsSoftwareDevelopment.Cms.WebServices.FormBlockAjax.ProcessComment,ajaxArgs,SFFormSubmitComplete,[blockID,submitAction],true);}
function internal_HandleProcessingKey(blockID){var processingKey=document.getElementById("cmsFormsControl_"+blockID+"_ProcessingKey"),keyField=document.getElementById("cmsForms_"+blockID+"_key");if(processingKey&&keyField){var hash=processingKey.getAttribute("token"),key=keyField.value;keyField.value="";processingKey.innerHTML+="<input type='text' id='cmsForms_"+blockID+"_"+key+"' name='cmsForms_"+blockID+"_"+key+"' value='"+hash+"' style='display:none'/>";}}
function internal_ResetProcessingKey(blockID,decodedFields){var processingKey=document.getElementById("cmsFormsControl_"+blockID+"_ProcessingKey"),keyField=document.getElementById("cmsForms_"+blockID+"_key"),cmsFormPrefix="cmsForms_"+blockID+"_",fields=processingKey.querySelectorAll("input[id^='"+cmsFormPrefix+"']");for(var f=0;f<fields.length;f++){if(fields[f]!=keyField){keyField.value=fields[f].id.substring(cmsFormPrefix.length);processingKey.removeChild(fields[f]);break;}}
for(var i=0;i<decodedFields.length;i++)
document.getElementById(decodedFields[i].FieldName).value=decodedFields[i].FieldValue;}
function internal_PackageFormData(blockID){var containerControl=document.getElementById("DataDiv_"+blockID);var packagedData=tic_Utilities.MakeXmlStartTag("Data",false);packagedData+=internal_PackageByType("select",containerControl);packagedData+=internal_PackageByType("input",containerControl);packagedData+=internal_PackageByType("textarea",containerControl);packagedData+=tic_Utilities.MakeXmlStartTag("Captcha",false);packagedData+=ExtractCaptchaInfo(containerControl);packagedData+=tic_Utilities.MakeXmlEndTag("Captcha",false);packagedData+=tic_Utilities.MakeXmlEndTag("Data",false);return packagedData;}
function EscapeSingleQuotes(incoming){return incoming.replace(/\'/gi,"\\\'");}
function SFFormSubmitComplete(blockID,submitAction,results,context,methodName)
{if(window["ProcessCaptchaResults"])
ProcessCaptchaResults(results);if(submitAction=="remotePost"&&document.getElementById("postURL_"+blockID))
{document.forms[0].action=document.getElementById("postURL_"+blockID).value;return document.forms[0].submit();}
if(!results.status)
{tic_Utilities.ShowHideById("DataDiv_"+blockID,true);SFRespondToValidation(false,"formsubmit",results.message,"foo",blockID);internal_ResetProcessingKey(blockID,results.data);if(document.getElementById("cmsForms_submitUDF"))
document.getElementById("SubmitButtons_"+String(blockID)).style.display="none";}
else if(document.getElementById("ThankYouDiv_"+blockID)){tic_Utilities.ShowHideById("ThankYouDiv_"+blockID,true);tic_Positioning.ScrollToElementById("ThankYouDiv_"+blockID);}
else if(document.getElementById("followupUrl_"+blockID)){var followupUrl=document.getElementById("followupUrl_"+blockID).value,lastIndex=followupUrl.lastIndexOf("DataID="),dataIDParam=(results.docID&&results.docID>0&&lastIndex!==-1&&lastIndex===(followupUrl.length-7))?results.docID:"";location.href=document.getElementById("followupUrl_"+blockID).value+dataIDParam;}}
function SFValidateAll(ctl)
{var allPassed=true;if(window.FormSpecificValidation)
allPassed&=FormSpecificValidation();allPassed&=internal_ActionByType("select","validate",document,null);allPassed&=internal_ActionByType("input","validate",document,null);allPassed&=internal_ActionByType("textarea","validate",document,null);if(allPassed)
ctl.form.submit();}
function SFValidateControl(ctlName,suffix)
{var messageName="alert_"+ctlName;var controlIsValid=true;var ctl=document.getElementById(ctlName);var displayName=ctlName.substring(ctlName.indexOf('_')+1);var bIsRequired=false;if(ctl)
{if(ctl.attributes["errorMessage"]&&ctl.attributes["errorMessage"].value!="")
displayName=ctl.attributes["errorMessage"].value;else if(ctl.attributes["errormessage"]&&ctl.attributes["errormessage"].value!="")
displayName=ctl.attributes["errormessage"].value;bIsRequired=((ctl.attributes["isRequired"]&&(ctl.attributes["isRequired"].value=='1'||ctl.attributes["isRequired"].value=='true'||ctl.attributes["isRequired"].value=="isRequired"))||(ctl.attributes["isrequired"]&&(ctl.attributes["isrequired"].value=='1'||ctl.attributes["isrequired"].value=='true'||ctl.attributes["isrequired"].value=="isrequired")));}
if(ctl&&ctl.tagName=="SELECT")
{if(bIsRequired)
{var selectedValue=SFGetSelectValue(ctlName);if(!selectedValue||selectedValue=="")
controlIsValid=false;}
SFRespondToValidation(controlIsValid,messageName,displayName,ctlName,suffix);}
else if(ctl&&ctl.tagName=='INPUT'&&ctl.type=='checkbox')
{if(bIsRequired)
{controlIsValid=(ctl.getAttribute("rel")!=null)?SFValidateCheckboxesByRel(ctl.getAttribute("rel")):ctl.checked;SFRespondToValidation(controlIsValid,messageName,displayName,ctlName,suffix);}}
else if(!ctl||(ctl.tagName=='INPUT'&&ctl.type=='radio'))
{if(!ctl)
{var ctlGroup=document.getElementsByName(ctlName);if(ctlGroup&&ctlGroup.length>0)
{bIsRequired=((ctlGroup[0].attributes["isRequired"]&&(ctlGroup[0].attributes["isRequired"].value=='true'||ctlGroup[0].attributes["isRequired"].value=="isRequired"))||(ctlGroup[0].attributes["isrequired"]&&(ctlGroup[0].attributes["isrequired"].value=='true'||ctlGroup[0].attributes["isrequired"].value=="isrequired")));var ctl=ctlGroup[0];if(ctl.attributes["errorMessage"]&&ctl.attributes["errorMessage"].value!="")
displayName=ctl.attributes["errorMessage"].value;else if(ctl.attributes["errormessage"]&&ctl.attributes["errormessage"].value!="")
displayName=ctl.attributes["errormessage"].value;}}
if(bIsRequired)
{var selectedValue=SFGetRadioValue(ctlName);if(!selectedValue||selectedValue=="")
controlIsValid=false;}
SFRespondToValidation(controlIsValid,messageName,displayName,ctlName,suffix);}
else
{var vType=(ctl.attributes["validationType"])?ctl.attributes["validationType"].value:"None",bNeedsValidation=(vType!='None'),bIsOptional=(!bIsRequired&&bNeedsValidation),regexp=(ctl.getAttribute("regExp")||ctl.getAttribute("regexp"));if(bIsRequired&&!SFEditFieldHasValue(ctlName))
controlIsValid=false;else if(bIsOptional&&!SFEditFieldHasValue(ctlName))
controlIsValid=true;else if(bNeedsValidation&&vType=="Function"){controlIsValid=false;try{controlIsValid=tic_Utilities.ExecuteFunctionByName(regexp,window,[ctlName]);}
catch(e){if(e.message=="Cannot call method 'apply' of undefined")
displayName+=" (could not locate validation function)";else
displayName+=" (error calling '"+regexp+"': "+e.message+")";}}
else if(bNeedsValidation&&!SFEditFieldMatchesRegEx(ctlName,regexp))
controlIsValid=false;SFRespondToValidation(controlIsValid,messageName,displayName,ctlName,suffix);}
return controlIsValid;}
function internal_MaskEdit(ctl)
{ctl.readOnly=true;tic_Utilities.AddStyle(ctl,"hideBorders");}
function internal_UnMaskEdit(ctl)
{ctl.readOnly=false;tic_Utilities.RemoveStyle(ctl,"hideBorders");}
function SFEnableControl(ctlName)
{var ctl=document.getElementById(ctlName);if(ctl&&ctl.tagName=="SELECT")
{ctl.style.display="block";if(document.getElementById(ctl.id+"_mask"))
document.getElementById(ctl.id+"_mask").parentNode.removeChild(document.getElementById(ctl.id+"_mask"));}
else if(ctl&&ctl.tagName=='INPUT'&&ctl.type=='checkbox')
ctl.disabled=false;else if(!ctl||(ctl.tagName=='INPUT'&&ctl.type=='radio'))
{var ctlGroup=document.getElementsByName(ctlName);for(var ii=0;ii<ctlGroup.length;++ii)
ctlGroup[ii].disabled=false;}
else
internal_UnMaskEdit(ctl);}
function SFDisableControl(ctlName)
{var ctl=document.getElementById(ctlName);if(ctl&&ctl.tagName=="SELECT")
{var parentNode=ctl.parentNode;if(!parentNode)
return window.alert("No parent element found for "+ctlName);var inputControl=document.createElement("input");if(!inputControl)
return window.alert("Unable to create element for "+ctlName);inputControl.id=ctl.id+"_mask";if(!ctl.multiple&&ctl.selectedIndex>=0)
inputControl.value=ctl.options[ctl.selectedIndex].text;else
{var str="";for(var ii=0;ii<ctl.length;++ii)
if(ctl[ii].selected)
str+=((str.length>0)?", ":"")+ctl[ii].text;inputControl.value=str;}
inputControl.className=ctl.className;parentNode.insertBefore(inputControl,ctl);internal_MaskEdit(inputControl);ctl.style.display="none";}
else if(ctl&&ctl.tagName=='INPUT'&&ctl.type=='checkbox')
ctl.disabled=true;else if(!ctl||(ctl.tagName=='INPUT'&&ctl.type=='radio'))
{var ctlGroup=document.getElementsByName(ctlName);for(var ii=0;ii<ctlGroup.length;++ii)
ctlGroup[ii].disabled=true;}
else
internal_MaskEdit(ctl);}
function SFControlIsEnabled(ctlName)
{return document.getElementById(ctlName)!=null&&!document.getElementById(ctlName).disabled;}
function SFControlExists(ctlName)
{return SFGetControl(ctlName)!=null;}
function SFValueHasChanged(ctlName)
{var ctl=SFGetControl(ctlName);if(ctl==null)
return;var value;if(!ctl.tagName)
value=SFGetRadioValue(ctlName);else if(ctl.tagName=="SELECT")
value=SFGetSelectValue(ctlName);else if(ctl.tagName=='INPUT'&&ctl.type=='checkbox')
value=ctl.checked?ctl.value:"";else
value=((!ctl.value)?"":ctl.value);var defaultValue;if(!ctl.tagName)
defaultValue=SFGetRadioDefaultValue(ctlName);else if(ctl.tagName=="SELECT")
defaultValue=SFGetSelectDefaultValue(ctlName);else if(ctl.tagName=='INPUT'&&ctl.type=='checkbox')
defaultValue=ctl.defaultChecked?ctl.value:"";else if(ctl.hasAttribute("defaultValue"))
defaultValue=ctl.getAttribute("defaultValue");else
defaultValue=((!ctl.defaultValue)?"":ctl.defaultValue);defaultValue=(defaultValue?defaultValue:"");value=(value?value:"");return(defaultValue!=value);}
function SFSetRadioValue(ctlName,ctlValue)
{var ctl=SFGetControlSet(ctlName);if(ctl==null)
return;if(ctl.length&&ctl.length>0)
for(var ii=0;ii<ctl.length;++ii)
ctl[ii].checked=(ctl[ii].value==ctlValue);else
ctl.checked=(ctl.value==ctlValue);}
function SFClearRadioButton(ctlName,ctlValue)
{var ctl=SFGetControlSet(ctlName);if(ctl==null)
return;for(var ii=0;clt.length&&ii<ctl.length;++ii)
if(ctl[ii].value==ctlValue)
ctl[ii].selected=ctl[ii].checked=false;}
function SFSetControlValue(ctlName,ctlValue,bFireChangeEvent)
{var ctl=document.getElementById(ctlName);if(ctl==null)
{ctl=document.getElementsByName(ctlName);if(ctl==null||ctl.length==0)
return;}
var arrayOfValues;if(ctl.tagName=="SELECT"&&ctl.multiple)
arrayOfValues=ctlValue.split(',');else
arrayOfValues=[ctlValue];if(ctl.length&&ctl.length>0)
{for(var ii=0;ii<ctl.length;++ii)
{ctl[ii].selected=false;ctl[ii].checked=false;ctl[ii].defaultChecked=false;ctl[ii].defaultSelected=false;}
for(var jj=0;jj<arrayOfValues.length;++jj)
{for(var ii=0;ii<ctl.length;++ii)
{if(ctl[ii].value.replace(/ /g,'')==arrayOfValues[jj].replace(/ /g,''))
{ctl[ii].selected=true;ctl[ii].checked=true;ctl[ii].defaultChecked=true;ctl[ii].defaultSelected=true;if(bFireChangeEvent&&ctl[ii].onclick)
ctl[ii].onclick();}}}
if(bFireChangeEvent&&ctl.onchange)
ctl.onchange();}
else if(ctl.tagName=="INPUT"&&ctl.type=="file");else if(ctl.tagName=='INPUT'&&ctl.type=='radio')
{var ctlGroup=document.getElementsByName(ctlName);for(var ii=0;ii<ctlGroup.length;++ii)
if(ctlGroup[ii].value==ctlValue)
{ctlGroup[ii].checked=true;if(bFireChangeEvent&&ctl.onclick)
ctl.onclick();}}
else if(ctl.tagName=='INPUT'&&ctl.type=='checkbox')
{ctl.defaultChecked=ctl.checked=(ctlValue!=""&&ctlValue!=0&&ctlValue!="No"&&ctlValue!="off"&&ctlValue!=false);if(bFireChangeEvent&&ctl.onclick)
ctl.onclick();}
else
{ctl.value=ctlValue;ctl.defaultValue=ctlValue;if(bFireChangeEvent&&ctl.onchange)
ctl.onchange();}}
function SFExtractMessageControl(suffix)
{var ctlName="cmsForms_DataNotProvided";if(suffix)
ctlName+="_"+suffix;return document.getElementById(ctlName);}
function SFFindMessage(msgCtl,msgName)
{var message=document.getElementById(msgName);if(message)
msgCtl.style.display="block";return message;}
function SFMessageAreaHasMessage(suffix)
{var ctl=SFExtractMessageControl(suffix);var embeddedDivs=ctl.getElementsByTagName("DIV");for(var ii=0;ii<embeddedDivs.length;++ii)
if(embeddedDivs[ii].className&&embeddedDivs[ii].className=="SFMessage")
return true;return false;}
function SFMessageAreaFinalAdjust(suffix)
{var msgCtl=SFExtractMessageControl(suffix);if(SFMessageAreaHasMessage(suffix))
{msgCtl.style.display="block";if(msgCtl.getAttribute("useClass")=="1")
tic_Utilities.RemoveStyle(msgCtl,"error");else
msgCtl.style.display="none";}
else
{if(msgCtl.getAttribute("useClass")=="1")
tic_Utilities.AddStyle(msgCtl,"error");else
msgCtl.style.display="none";}}
function SFAddMessage(msgName,msgText,suffix)
{var msgCtl=SFExtractMessageControl(suffix);if(SFFindMessage(msgCtl,msgName))
return;var newMessage=document.createElement("DIV");newMessage.className="SFMessage";newMessage.id=msgName;newMessage.textContent=msgText;msgCtl.appendChild(newMessage);if(msgCtl.getAttribute("useClass")=="1")
tic_Utilities.AddStyle(msgCtl,"error");else
msgCtl.style.display="block";return true;}
function SFRemoveMessage(msgName,suffix)
{var msgCtl=SFExtractMessageControl(suffix);var ctlToRemove=SFFindMessage(msgCtl,msgName);if(ctlToRemove==null||msgCtl==null)
return;msgCtl.removeChild(ctlToRemove);if(msgCtl.getElementsByTagName("DIV").length>0)
return;if(msgCtl.getAttribute("useClass")=="1")
tic_Utilities.RemoveStyle(msgCtl,"error");else
msgCtl.style.display="none";}
function SFDisplayMessage(msgName,message,suffix)
{if(SFFindMessage(SFExtractMessageControl(suffix),msgName))
return;SFAddMessage(msgName,message,suffix);}
function SFRespondToValidation(testHasPassed,msgName,message,ctlName,suffix)
{var containingDiv=null;var errorCtl=document.getElementById(ctlName+"_Error");if(errorCtl)
{containingDiv=errorCtl;while(containingDiv&&containingDiv.tagName!="DIV")
containingDiv=containingDiv.parentNode;if(containingDiv&&containingDiv.tagName!="DIV")
containingDiv=null;}
if(testHasPassed)
{SFRemoveMessage(msgName,suffix);tic_Utilities.RemoveStyle(containingDiv,"messageOn");return true;}
else
{SFDisplayMessage(msgName,message,suffix);tic_Utilities.AddStyle(containingDiv,"messageOn");return false;}}
function IsPhotoDiv(div)
{if(!div.id)
return false;if(div.id.indexOf("/")!=0)
return false;return true;}
function ChangeImageSource(ctlName,newSource,blockIndex)
{var ctl=document.getElementById(ctlName);var divChildren=ctl.getElementsByTagName("DIV");for(var ii=0;ii<divChildren.length;++ii)
{if(!IsPhotoDiv(divChildren[ii]))
continue;if(!divChildren[ii].style.display||divChildren[ii].style.display=="block")
divChildren[ii].style.display="none";if(divChildren[ii].id==newSource)
{divChildren[ii].style.display="block";ResetImageTag(divChildren[ii]);if(document.getElementById("rightArrow"+String(blockIndex)))
document.getElementById("rightArrow"+String(blockIndex)).style.visibility=(((ii+1)<divChildren.length)?"visible":"hidden");if(document.getElementById("leftArrow"+String(blockIndex)))
document.getElementById("leftArrow"+String(blockIndex)).style.visibility=(((ii)>0)?"visible":"hidden");}}}
function OpenFullImage(fullImageLink)
{var hwnd=window.open(fullImageLink);hwnd.focus();}
function ResetImageTag(outerDiv)
{var images=outerDiv.getElementsByTagName("IMG");if(!images||!images.length)
return;var img=images[0];img.src=img.getAttribute("realSrc");}
function PhotoBlockMove(direction,ctlName,blockIndex)
{var ctl=document.getElementById(ctlName);var divChildren=ctl.getElementsByTagName("DIV");for(var ii=0;ii<divChildren.length;++ii)
{if(!IsPhotoDiv(divChildren[ii]))
continue;if(divChildren[ii].style.display&&divChildren[ii].style.display=="none")
continue;if(direction=="right")
{if((ii+1)<divChildren.length)
{divChildren[ii].style.display="none";divChildren[ii+1].style.display="block";ResetImageTag(divChildren[ii+1]);}
document.getElementById("rightArrow"+String(blockIndex)).style.visibility=(((ii+2)<divChildren.length)?"visible":"hidden");document.getElementById("leftArrow"+String(blockIndex)).style.visibility="visible";}
else if(direction=="left")
{if((ii-1)>=0)
{divChildren[ii].style.display="none";divChildren[ii-1].style.display="block";ResetImageTag(divChildren[ii-1]);}
document.getElementById("leftArrow"+String(blockIndex)).style.visibility=(((ii-1)>0)?"visible":"hidden");document.getElementById("rightArrow"+String(blockIndex)).style.visibility="visible";}
break;}}
function internal_ControlHasBeenProcessed(processed,newCtlName)
{for(var ii=0;ii<processed.length;++ii)
if(processed[ii]==newCtlName)
return true;return false;}
function internal_GetCommentValue(ctl)
{switch(ctl.tagName)
{case"INPUT":if(ctl.type=="radio")
return SFGetRadioValue(ctl.name);else if(ctl.type=="checkbox")
return SFGetCheckboxState(ctl.name)?"yes":"no";case"TEXTAREA":return ctl.value.replace(/<|>|&lt;|&gt;|&#60;|&#62;|&#x3c;|&#x3e;|%3c|%3e/gi,"");case"SELECT":return SFGetSelectValue(ctl.id);}}
function internal_PackageByType(type,container)
{if(!container)
container=document;var processedControls=[],returnValue="",ctls=container.getElementsByTagName(type);for(var ii=0;ii<ctls.length;++ii){if(ctls[ii].getAttribute("no-qs")=="1")
continue;var name=ctls[ii].name||ctls[ii].getAttribute("name"),isXml=(type=="textarea"&&ctls[ii].getAttribute("isXml")!=undefined)?ctls[ii].getAttribute("isXml"):null;if(name&&(name.indexOf("upl_C")==0||name.indexOf("cmsForms_")==0||name.indexOf("cmsFormS_")==0)){if(internal_ControlHasBeenProcessed(processedControls,name))
continue;processedControls[processedControls.length]=name;if(isXml!=null){returnValue+=tic_Utilities.MakeXmlStartTagWithAttributes(name,true,"isXml",isXml);returnValue+=internal_GetCommentValue(ctls[ii]);returnValue+=tic_Utilities.MakeXmlEndTag(name,true);}
else
returnValue+=tic_Utilities.PackageXml(name,internal_GetCommentValue(ctls[ii]),true);}}
return returnValue;}
function CRValidateAndSubmit(ctl)
{var containerControl=document.getElementById("titanComments_CommentForm");if(!containerControl)
return window.alert("Commenting form container is missing");tic_Utilities.ShowHideById("titanComments_CommentForm",false);var allPassed=true;if(window["CommentRating_UserSuppliedValidation"])
allPassed&=CommentRating_UserSuppliedValidation();allPassed&=internal_ActionByType("select","validate",containerControl,null);allPassed&=internal_ActionByType("input","validate",containerControl,null);allPassed&=internal_ActionByType("textarea","validate",containerControl,null);if(window["ClientSideCaptchaValidate"])
allPassed&=ClientSideCaptchaValidate(null);if(!allPassed)
{SFMessageAreaFinalAdjust(null);return tic_Utilities.ShowHideById("titanComments_CommentForm",true);}
var packagedData=tic_Utilities.MakeXmlStartTag("Data",false);packagedData+=internal_PackageByType("select",containerControl);packagedData+=internal_PackageByType("input",containerControl);packagedData+=internal_PackageByType("textarea",containerControl);packagedData+=tic_Utilities.MakeXmlStartTag("Captcha",false);packagedData+=ExtractCaptchaInfo(containerControl);packagedData+=tic_Utilities.MakeXmlEndTag("Captcha",false);packagedData+=tic_Utilities.MakeXmlEndTag("Data",false);var ajaxArgs=new Array();ajaxArgs[ajaxArgs.length]=document.getElementById("cmsForms_DocID").value;ajaxArgs[ajaxArgs.length]=packagedData;SFRespondToValidation(true,"captcha","","cmsForms_TitanRatingReCaptchaZone",null);TitanDisplayServiceWrapper.MakeWebServiceCall("Commenting",NorthwoodsSoftwareDevelopment.Cms.WebServices.CommentingAjax.ProcessComment,ajaxArgs,CRSaveComplete,[],true);}
function CRSaveComplete(results,context,methodName)
{if(!results.status)
{tic_Utilities.ShowHideById("titanComments_CommentForm",true);SFRespondToValidation(false,"formsubmit",results.message,"cmsForms_TitanRatingReCaptchaZone",null);}
else if(document.getElementById("titanComments_Confirmation"))
tic_Utilities.ShowHideById("titanComments_Confirmation",true);else
document.location.href=document.location.href;if(window["ProcessCaptchaResults"])
ProcessCaptchaResults(results);}
function ClientSideCaptchaValidate(suffix)
{if(!document.getElementById("cmsForms_CommentingCaptchaEnabled")||document.getElementById("cmsForms_CommentingCaptchaEnabled").value!="1")
return true;if(document.getElementById("cmsForms_TitanRatingReCaptchaZone"))
return SFRespondToValidation(grecaptcha.getResponse(),"titan_captcha","You must respond to the Recaptcha request","cmsForms_TitanCaptcha",suffix);return true;}
function ProcessCaptchaResults(results)
{try
{if(window["grecaptcha"]&&grecaptcha.render)
grecaptcha.reset();}
catch(e)
{}}
function ExtractCaptchaInfo(containerControl)
{if(!window["grecaptcha"]||document.querySelector(".g-recaptcha[data-sitekey]")==null)
return;return tic_Utilities.PackageXml("RecaptchaResponse",grecaptcha.getResponse(),true);}
function CRCommentLimit(ctl,numChars)
{var baseID=ctl.id;var limitSpanCtl=document.getElementById(baseID+"_Count");if(ctl.value.length>numChars)
ctl.value=ctl.value.substring(0,numChars);if(limitSpanCtl)
limitSpanCtl.innerHTML=String(numChars-ctl.value.length);}
function Wkst_ValueIsNumber(ctlName){if(!SFEditFieldMatchesRegEx(ctlName,"^[+-]?\\d+$"))
return false;var min=-2147483648,max=2147483647,v=parseInt(SFGetEditValue(ctlName),10);return(v>=min&&v<=max);}
function GetBaseID(ctlName){return ctlName.substring(0,ctlName.lastIndexOf("_"));}
var ItemList={IsChanged:function(baseID){return ItemList.GetFieldset(baseID).getAttribute("changed")=="1";},DefaultData:function(baseID){return document.getElementById(baseID+"_previousData").innerHTML;},PackageData:function(baseID,asText){var itemsUL=ItemList.GetItemsUL(baseID),dataAreas=itemsUL.querySelectorAll("li textarea"),saveData=new StringBuilder();for(var i=0;i<dataAreas.length-1;i++){var dataText=(dataAreas[i].textContent)?dataAreas[i].textContent:dataAreas[i].innerText;if(dataText.indexOf("<Option")==0){saveData.Append(dataText);continue;}
var data=JSON.parse(dataAreas[i].innerHTML);if(!data)
continue
data.linkText=data.linkText.replace(/\'/gi,"&apos;");var titlePrefix="";switch(data.linkType){case"2":titlePrefix="Page Link - ";break;case"3":titlePrefix="External Link - ";break;case"4":titlePrefix="File Link - ";break;case"5":titlePrefix="MailTo Link - ";break;case"8":titlePrefix="Data Link - ";break;case"9":titlePrefix="Tel Link - ";break;}
saveData.Append("<Option");saveData.Append(" Value='",data.linkText,"'");saveData.Append(" title='",titlePrefix,data.linkText,"'");saveData.Append(" titan-linktype='",data.linkType,"'");saveData.Append(" titan-usenewwindow='",(data.target=="_blank")?"1":"0","'>");if(asText)
saveData.Append(data.attributeData.linkedText);else
saveData.Append("<![CDATA[",data.attributeData.linkedText,"]]>");saveData.Append("</Option>");}
return saveData.ReturnAndEmpty();},KeyUp:function(evt){tic_Utilities.CancelBubble(evt);var target=tic_Utilities.GetTargetCtl(evt),baseID=GetBaseID(target.id),key=tic_Utilities.GetWhich(evt),item=ItemList.GetSelectedItem(baseID);if(!key||!baseID)
return;target.focus();if(key===45)
ItemList.AddNew(baseID);else if(key===27){ItemList.DeSelectAll(baseID);ItemList.EnableDisableButtons(baseID,true);}
if(!item)
return;if(key===13||key===32)
ItemList.Edit(baseID,evt);else if(key===37)
ItemList.SortUp(evt);else if(key===39)
ItemList.SortDown(evt);else if(key===46)
ItemList.Delete(baseID,evt);},AddNew:function(baseID){var ul=document.getElementById(baseID+"_options"),marker=ItemList.GetMarker(baseID),afterSelectedLI=ItemList.GetAfterSelectedItem(baseID);if(!ul||!marker)
return;var newField=marker.cloneNode(true);newField.className="";if(afterSelectedLI)
ul.insertBefore(newField,afterSelectedLI);else
ul.insertBefore(newField,marker);newField.scrollIntoViewIfNeeded(true,true);ItemList.Select(null,newField);ItemList.Edit(baseID,null);},Edit:function(baseID,evt){var baseCtl=document.getElementById(baseID);if(!baseCtl)
baseCtl=DataEditor._getFieldContainer(document.getElementById("cmsForms_"+baseID));if(!baseCtl)
return;var editFunc=baseCtl.getAttribute("editFunc"),editArgs=JSON.parse(baseCtl.getAttribute("editArgs"));editArgs[editArgs.length]=baseID;editArgs[editArgs.length]=evt;tic_Utilities.ExecuteFunctionByName(editFunc,window,editArgs);},Delete:function(baseID,evt){var itemsUL=ItemList.GetItemsUL(baseID),selected=ItemList.GetSelectedItem(baseID),selectedSpan=selected.querySelector("span.name"),selectedTitle=(selectedSpan.textContent)?selectedSpan.textContent:selectedSpan.innerText;if(itemsUL&&selected&&confirm("Are you sure you want to remove '"+selectedTitle+"' from the list?")){itemsUL.removeChild(selected);ItemList.SetChanged(baseID);ItemList.Select(null,itemsUL);}},SilentDelete:function(li){if(!li)
return;var baseID=GetBaseID(li.parentNode.id),ul=li.parentNode;if(ul.getElementsByTagName("LI").length<=2)
ItemList.Select(null,ul);else
ItemList.SelectPrev(baseID);ul.removeChild(li);},GetFieldset:function(baseID){return document.getElementById(baseID+"_optionList");},FocusFieldset:function(baseID){ItemList.GetFieldset(baseID).focus();},SetChanged:function(baseID){ItemList.GetFieldset(baseID).setAttribute("changed","1");},GetItemsUL:function(baseID){return document.getElementById(baseID+"_options");},GetSelectedItem:function(baseID){return ItemList.GetItemsUL(baseID).querySelector("li.select");},GetAfterSelectedItem:function(baseID){var ul=ItemList.GetItemsUL(baseID),allLIs=ul.getElementsByTagName("LI");for(var ii=0;ii<allLIs.length;++ii)
if(tic_Utilities.HasStyle(allLIs[ii],"select"))
return allLIs[ii+1];return null;},GetMarker:function(baseID){return ItemList.GetItemsUL(baseID).querySelector("li.marker");},Select:function(evt,target){target=target||tic_Utilities.GetTargetCtl(evt);var baseID=null;if(target.nodeName=="UL"){baseID=GetBaseID(target.id);ItemList.DeSelectAll(baseID);ItemList.EnableDisableButtons(baseID,true);return;}
while(target.nodeName!="LI")
target=target.parentNode;baseID=GetBaseID(target.parentNode.id);if(tic_Utilities.HasStyle(target,"select")){tic_Utilities.RemoveStyle(target,"select");ItemList.EnableDisableButtons(baseID,true);return;}
ItemList.DeSelectAll(baseID);tic_Utilities.AddStyle(target,"select");ItemList.EnableDisableButtons(baseID,false);},SelectPrev:function(baseID){var ul=ItemList.GetItemsUL(baseID),lis=ul.getElementsByTagName("LI"),idx=lis.length-2;for(var i=0;i<lis.length-1;i++)
if(tic_Utilities.RemoveStyle(lis[i],"select")){idx=(i==0)?lis.length-2:i-1;break;}
ItemList.Select(null,lis[idx]);},SelectNext:function(baseID){var ul=ItemList.GetItemsUL(baseID),lis=ul.getElementsByTagName("LI"),idx=0;for(var i=0;i<lis.length-1;i++)
if(tic_Utilities.RemoveStyle(lis[i],"select")){idx=(i==lis.length-2)?0:i+1;break;}
ItemList.Select(null,lis[idx]);},DeSelectAll:function(baseID){var ul=ItemList.GetItemsUL(baseID),lis=ul.getElementsByTagName("LI");for(var i=0;i<lis.length;i++)
tic_Utilities.RemoveStyle(lis[i],"select");},EnableDisableButtons:function(baseID,isDisabled){var ul=ItemList.GetItemsUL(baseID),edt=document.getElementById(baseID+"_editButton"),del=document.getElementById(baseID+"_deleteButton"),sUp=document.getElementById(baseID+"_sortUp"),sDn=document.getElementById(baseID+"_sortDown");edt.disabled=isDisabled;del.disabled=isDisabled;sUp.disabled=isDisabled;sUp.className=(isDisabled)?"sortUp disabled":"sortUp";sDn.disabled=isDisabled;sDn.className=(isDisabled)?"sortDown disabled":"sortDown";ItemList.FocusFieldset(baseID);},SortUp:function(evt){tic_Utilities.CancelBubble(evt);var target=tic_Utilities.GetTargetCtl(evt),baseID=GetBaseID(target.id),ul=ItemList.GetItemsUL(baseID),moveMe=ItemList.GetSelectedItem(baseID);ItemList.FocusFieldset(baseID);if(!moveMe)
return;var allKids=ul.getElementsByTagName("LI");for(var ii=0;ii<allKids.length;++ii){if(allKids[ii]==moveMe&&ii>0){allKids[ii].parentNode.insertBefore(allKids[ii],allKids[ii-1]);ItemList.SetChanged(baseID);return;}
if(allKids[ii]==moveMe)
return;}},SortDown:function(evt){tic_Utilities.CancelBubble(evt);var target=tic_Utilities.GetTargetCtl(evt),baseID=GetBaseID(target.id),ul=ItemList.GetItemsUL(baseID),moveMe=ItemList.GetSelectedItem(baseID);ItemList.FocusFieldset(baseID);if(!moveMe)
return;var allKids=ul.getElementsByTagName("LI");for(var ii=0;ii<(allKids.length-2);++ii){if(allKids[ii]==moveMe&&ii<(allKids.length-2)){allKids[ii].parentNode.insertBefore(allKids[ii],(ii>=(allKids.length-2))?null:allKids[ii+2]);ItemList.SetChanged(baseID);return;}
if(allKids[ii]==moveMe)
return;}}};
/* BlockSupport.js */
function FilterBlocks_MakePrefix(blockID)
{return"F"+String(blockID)+"_";}
function FilterBlocks_MakeFullPrefix(blockID,classID)
{return FilterBlocks_MakePrefix(blockID)+"C"+String(classID)+"_";}
function FilterBlocks_GetPageNumCtl(prefix)
{return document.getElementById(prefix+"PageNum");}
function FilterBlocks_GetSortOrderCtl(prefix)
{return document.getElementById(prefix+"SortOrder");}
function FilterBlocks_GetKeywordCtl(prefix)
{return document.getElementById(prefix+"keywordFilter");}
function FilterBlocks_GetFolderIDCtl(prefix)
{return document.getElementById(prefix+"FolderID");}
function FilterBlocks_GetDocIDCtl(prefix)
{return document.getElementById(prefix+"DocID");}
function FilterBlocks_ClassificationMinMax(blockID,classID)
{FilterBlocks_RecalcSeeAllLess(blockID,classID);var fieldset=FilterBlocks_GetTagFieldset(blockID,classID);if(!fieldset)
return;if(tic_Utilities.HasStyle(fieldset,"min"))
tic_Utilities.RemoveStyle(fieldset,"min");else
tic_Utilities.AddStyle(fieldset,"min");}
function FilterBlocks_RecalcSeeAllLess(blockID,classID)
{var fieldset=FilterBlocks_GetTagFieldset(blockID,classID);if(!fieldset)
return;if(!fieldset.getAttribute("limitNum"))
return;var limit=parseInt(fieldset.getAttribute("limitNum"));if(!limit||limit>1000)
return;var inputsDiv=FilterBlocks_GetInputsDiv(blockID,classID);if(!inputsDiv)
return;var hideZeros=tic_Utilities.HasStyle(fieldset,"hideZero");var prefix=FilterBlocks_MakeFullPrefix(blockID,classID);var allInputs=inputsDiv.getElementsByTagName("DIV");for(var ii=0;ii<allInputs.length;++ii)
{if(!allInputs[ii].id||allInputs[ii].id.indexOf(prefix)!=0)
continue;if(tic_Utilities.HasStyle(allInputs[ii],"selected"))
{limit--;tic_Utilities.RemoveStyle(allInputs[ii],"seeMore");}}
var oneHidden=false;for(var ii=0;ii<allInputs.length;++ii)
{if(!allInputs[ii].id||allInputs[ii].id.indexOf(prefix)!=0)
continue;if(tic_Utilities.HasStyle(allInputs[ii],"selected"))
continue;if(hideZeros&&tic_Utilities.HasStyle(allInputs[ii],"zero"))
continue;if(limit--<=0)
{tic_Utilities.AddStyle(allInputs[ii],"seeMore");oneHidden=true;}
else
tic_Utilities.RemoveStyle(allInputs[ii],"seeMore");}
var more=document.getElementById(prefix+"more");var less=document.getElementById(prefix+"less");if(more)
more.style.display=(oneHidden)?"":"none";if(less)
less.style.display=(oneHidden)?"":"none";}
function FilterBlocks_SeeAllLess(blockID,classID)
{var fieldset=FilterBlocks_GetTagFieldset(blockID,classID);if(!fieldset)
return;FilterBlocks_RecalcSeeAllLess(blockID,classID);if(tic_Utilities.HasStyle(fieldset,"seeMore"))
{tic_Utilities.RemoveStyle(fieldset,"seeMore");tic_Utilities.AddStyle(fieldset,"seeLess");}
else
{tic_Utilities.RemoveStyle(fieldset,"seeLess");tic_Utilities.AddStyle(fieldset,"seeMore");}}
function FilterBlocks_ResetSelectClass(target,selected,blockID,classID)
{if(selected)
FilterBlocks_SetInputWrapperSelect(target.id);else
FilterBlocks_RemoveInputWraperSelect(target.id);FilterBlocks_CollapseTagSet(blockID,classID,selected);}
function FilterBlocks_GetFilterDocumentRoot(blockPrefix)
{var root=document.getElementById("FilterArea_"+blockPrefix);if(!root)
return document;return root;}
function FilterBlocks_ResetSelections(blockID,classID)
{var div=FilterBlocks_GetInputsDiv(blockID,classID);if(!div)
return;var boxes=div.getElementsByTagName("INPUT");for(var ii=0;ii<boxes.length;++ii)
if(boxes[ii].checked)
{tic_Utilities.RemoveStyle(document.getElementById(boxes[ii].id+"_div"),"selected");boxes[ii].checked=false;}
FilterBlocks_RecalcSeeAllLess(blockID,classID);var fieldset=FilterBlocks_GetTagFieldset(blockID,classID);tic_Utilities.RemoveStyle(fieldset,"min");if(tic_Utilities.RemoveStyle(fieldset,"seeMore"))
tic_Utilities.AddStyle(fieldset,"seeLess");}
function FilterBlocks_HaveClassificationsChanged(blockPrefix,blockID)
{var hasChanges=false;var allInputs=FilterBlocks_GetFilterDocumentRoot(blockPrefix).getElementsByTagName("INPUT");for(var ii=0;ii<allInputs.length;++ii)
{var myId=allInputs[ii].id;if(allInputs[ii].type=="checkbox"&&myId.indexOf(blockPrefix)==0)
{hasChanges|=(allInputs[ii].checked!=allInputs[ii].defaultChecked);FilterBlocks_ResetSelectClass(allInputs[ii],allInputs[ii].checked,blockID,parseInt(myId.substring(blockPrefix.length+1)));}
if(allInputs[ii].type=="radio"&&myId.indexOf(blockPrefix)==0)
{hasChanges|=(allInputs[ii].checked!=allInputs[ii].defaultChecked);FilterBlocks_ResetSelectClass(allInputs[ii],allInputs[ii].checked,blockID,parseInt(myId.substring(blockPrefix.length+1)));}}
var allSelects=FilterBlocks_GetFilterDocumentRoot(blockPrefix).getElementsByTagName("SELECT");for(var ii=0;ii<allSelects.length;++ii)
{if(allSelects[ii].id.indexOf(blockPrefix)==0&&SFGetSelectValue(allSelects[ii].id)!=SFGetSelectDefaultValue(allSelects[ii].id))
{return true;}}
return hasChanges;}
function FilterBlocks_GetInputWrapperDivFromCtl(prefix,target,container)
{while(target)
{var myTarget=target;target=target.parentNode;if(!target)
return null;if(myTarget.tagName!="DIV")
continue;if(myTarget==container)
return null;if(!myTarget.id||myTarget.id.indexOf(prefix)!=0)
continue;return myTarget;}
return null;}
function FilterBlocks_GetInputWrapperDiv(prefix,container,evt)
{return FilterBlocks_GetInputWrapperDivFromCtl(prefix,tic_Utilities.GetTargetCtl(evt),container);}
function FilterBlocks_ClearInputWrapperSelect(container,fullPrefix)
{var allKids=container.getElementsByTagName("DIV");for(var ii=0;ii<allKids.length;++ii)
if(allKids[ii].id&&allKids[ii].id.indexOf(fullPrefix)==0)
tic_Utilities.RemoveStyle(allKids[ii],"selected");}
function FilterBlocks_SetInputWrapperSelect(id)
{tic_Utilities.AddStyle(document.getElementById(id+"_div"),"selected");}
function FilterBlocks_RemoveInputWraperSelect(id)
{tic_Utilities.RemoveStyle(document.getElementById(id+"_div"),"selected");}
function FilterBlocks_GetTagFieldset(blockID,classID)
{return document.getElementById(FilterBlocks_MakeFullPrefix(blockID,classID)+"fieldset");}
function FilterBlocks_GetInputsDiv(blockID,classID)
{var div=document.getElementById(FilterBlocks_MakeFullPrefix(blockID,classID)+"div");if(tic_Utilities.HasStyle(div,"inputs"))
return div;return null;}
function FilterBlocks_CollapseTagSet(blockID,classID,turnOn)
{var fieldset=FilterBlocks_GetTagFieldset(blockID,classID);if(!fieldset)
return;if(fieldset.getAttribute("runaway")!="1")
return;if(turnOn)
tic_Utilities.AddStyle(fieldset,"min");else
tic_Utilities.RemoveStyle(fieldset,"min");}
function FilterBlocks_HandleCommonLinkSelect(blockID,classID,container,evt)
{var fullPrefix=FilterBlocks_MakeFullPrefix(blockID,classID);var target=FilterBlocks_GetInputWrapperDiv(fullPrefix,container,evt);if(!target)
return;FilterBlocks_ClearInputWrapperSelect(container,fullPrefix);var submitID=target.id.substring(0,target.id.lastIndexOf("_"));FilterBlocks_SetInputWrapperSelect(submitID);SFSetRadioValue(fullPrefix.substring(0,fullPrefix.length-1),submitID);FilterBlocks_CollapseTagSet(blockID,classID,true);}
function FilterBlocks_HasClassifications(blockPrefix)
{var allInputs=FilterBlocks_GetFilterDocumentRoot(blockPrefix).getElementsByTagName("INPUT");for(var ii=0;ii<allInputs.length;++ii)
if(allInputs[ii].id&&allInputs[ii].id.indexOf(blockPrefix)==0)
return true;var allSelects=FilterBlocks_GetFilterDocumentRoot(blockPrefix).getElementsByTagName("SELECT");for(var ii=0;ii<allSelects.length;++ii)
if(allSelects[ii].id&&allSelects[ii].id.indexOf(blockPrefix)==0)
return true;return false;}
function FilterBlocks_FormatClassifications(blockPrefix)
{var checkBoxes=new StringBuilder();checkBoxes.Append("!");var allInputs=FilterBlocks_GetFilterDocumentRoot(blockPrefix).getElementsByTagName("INPUT");for(var ii=0;ii<allInputs.length;++ii)
{var myId=allInputs[ii].id;if(allInputs[ii].type=="checkbox"&&allInputs[ii].checked&&myId.indexOf(blockPrefix)==0)
checkBoxes.Append(myId,"!");if(allInputs[ii].type=="radio"&&allInputs[ii].checked&&myId.indexOf(blockPrefix)==0)
checkBoxes.Append(myId,"!");}
var allSelects=FilterBlocks_GetFilterDocumentRoot(blockPrefix).getElementsByTagName("SELECT");for(var ii=0;ii<allSelects.length;++ii)
{if(!allSelects[ii].value||allSelects[ii].getAttribute("no-tag")=="1")
continue;if(allSelects[ii].id.indexOf(blockPrefix)==0)
checkBoxes.Append(encodeURIComponent(allSelects[ii].value),"!");}
var retVal=checkBoxes.ReturnAndEmpty();return retVal.substring(1,Math.max(0,retVal.length-1));}
function FilterBlocks_FormatDefaultClassifications(blockPrefix)
{var root=FilterBlocks_GetFilterDocumentRoot(blockPrefix);var checkBoxes=new StringBuilder();checkBoxes.Append("!");var allInputs=root.getElementsByTagName("INPUT");for(var ii=0;ii<allInputs.length;++ii)
{var myId=allInputs[ii].id;if(allInputs[ii].type=="checkbox"&&allInputs[ii].defaultChecked&&myId.indexOf(blockPrefix)==0)
checkBoxes.Append(myId,"!");if(allInputs[ii].type=="radio"&&allInputs[ii].defaultChecked&&myId.indexOf(blockPrefix)==0)
checkBoxes.Append(myId,"!");}
var allSelects=root.getElementsByTagName("SELECT");for(var ii=0;ii<allSelects.length;++ii)
{if(!allSelects[ii].value)
continue;if(allSelects[ii].id.indexOf(blockPrefix)==0)
checkBoxes.Append(SFGetSelectDefaultValue(allSelects[ii].id),"!");}
return checkBoxes.ReturnAndEmpty();}
function FilterBlocks_RemoveExistingFilterBlockParams(params,removeSearch)
{if(!params)
return"";var retVal="&";var paramArray=params.split("&");for(var ii=0;ii<paramArray.length;++ii)
if(paramArray[ii].indexOf("FB_Values")==0||paramArray[ii].match(/^F\d*_/));else if(removeSearch&&paramArray[ii].indexOf("Search_Keywords")==0);else if(paramArray[ii].length)
retVal+=paramArray[ii]+"&";return retVal.substring(1);}
function FilterBlocks_NonTagQueryStringValues(blockPrefix)
{var newQueryString=new StringBuilder();newQueryString.Append("&");var allInputs=document.getElementsByTagName("INPUT");for(var ii=0;ii<allInputs.length;++ii)
{if(allInputs[ii].getAttribute("no-qs")=="1")
continue;var myId=allInputs[ii].id;if(allInputs[ii].type=="hidden"&&myId.indexOf(blockPrefix)==0)
newQueryString.Append(myId,"=",encodeURIComponent(allInputs[ii].value),"&");else if(allInputs[ii].type=="text"&&myId.indexOf(blockPrefix)==0)
newQueryString.Append(myId,"=",encodeURIComponent(allInputs[ii].value),"&");}
var allSelects=FilterBlocks_GetFilterDocumentRoot(blockPrefix).getElementsByTagName("SELECT")
for(var ii=0;ii<allSelects.length;++ii){if(!allSelects[ii].getAttribute("no-tag")||allSelects[ii].getAttribute("no-tag")!=1)
continue;if(!allSelects[ii].value||allSelects[ii].getAttribute("no-qs")=="1")
continue;var myId=allSelects[ii].id;if(myId.indexOf(blockPrefix)==0)
newQueryString.Append(myId,"=",encodeURIComponent(allSelects[ii].value),"&");}
var retVal=newQueryString.ReturnAndEmpty();return retVal.substring(1,Math.max(0,retVal.length-1));}
function FilterBlocks_NonTagQueryStringDefaultValues(blockPrefix)
{var newQueryString=new StringBuilder();newQueryString.Append("&");var allInputs=document.getElementsByTagName("INPUT");for(var ii=0;ii<allInputs.length;++ii)
{if(allInputs[ii].getAttribute("no-qs")=="1")
continue;var myId=allInputs[ii].id;if(allInputs[ii].type=="hidden"&&myId.indexOf(blockPrefix)==0)
newQueryString.Append(myId,"=",encodeURIComponent(allInputs[ii].defaultValue),"&");else if(allInputs[ii].type=="text"&&myId.indexOf(blockPrefix)==0)
newQueryString.Append(myId,"=",encodeURIComponent(allInputs[ii].defaultValue),"&");}
var retVal=newQueryString.ReturnAndEmpty();return retVal.substring(1,Math.max(0,retVal.length-1));}
function FilterBlocks_ExtractQSParams(blockID,useCurrent)
{var prefix=FilterBlocks_MakePrefix(blockID);if(useCurrent||FilterBlocks_IsAjax(prefix))
return FilterBlocks_NonTagQueryStringValues(prefix);else
return FilterBlocks_NonTagQueryStringDefaultValues(prefix);}
function FilterBlocks_IsAjax(prefix)
{var enabledCtl=document.getElementById(prefix+"ajaxEnabled");if(!enabledCtl)
return false;return enabledCtl.value=="1";}
function FilterBlocks_ExtractTagQueryString(blockID,useCurrent)
{var prefix=FilterBlocks_MakePrefix(blockID);if(useCurrent||FilterBlocks_IsAjax(prefix))
return FilterBlocks_FormatClassifications(prefix);else
return FilterBlocks_FormatDefaultClassifications(prefix);}
function FilterBlocks_BuildFullQueryString(submittingBlockID)
{var params=window.location.search;if(params.indexOf("?")==0)
params=params.substring(1,params.length);params=FilterBlocks_RemoveExistingFilterBlockParams(params,false);if(params.length>0)
params+="&";var tagValues=new StringBuilder();var qsParams=new StringBuilder();var isSegSearch=false;var allDivs=document.getElementsByTagName("DIV");for(var ii=0;ii<allDivs.length;++ii)
{if(!allDivs[ii].id)
continue;if(allDivs[ii].id.indexOf("FilterArea_F")!=0)
continue;var blockID=allDivs[ii].getAttribute("blockID");if(!blockID)
continue;if(allDivs[ii].getAttribute("blockPrefix")=="SegmentedSearch_")
{isSegSearch=1;params=SegmentedSearch_RemoveSegSearchParams(params);}
else if(allDivs[ii].getAttribute("blockPrefix")=="CalendarBlock_")
{params=CalendarBlock_RemoveExistingCalendarParams(params);calendarParams=Cal_PackageQueryStringData(blockID);if(calendarParams&&calendarParams.length)
qsParams.Append(calendarParams,"&");continue;}
var newTags=FilterBlocks_ExtractTagQueryString(blockID,blockID==submittingBlockID);var newQSArgs=FilterBlocks_ExtractQSParams(blockID,blockID==submittingBlockID);if(newTags.length>0)
tagValues.Append(newTags,"!");if(newQSArgs.length>0)
qsParams.Append(newQSArgs,"&");}
if(document.getElementById("FilterArea_F"+String(submittingBlockID)+"_")==null)
qsParams.Append(FilterBlocks_ExtractQSParams(submittingBlockID,true),"&");if(isSegSearch)
{var sort=SS_SortOps.GetValues(blockID);if(sort)
qsParams.Append("SS_Sort=",sort.sortKey,"&SS_SortDir=",sort.sortDir);qsParams.Append("&SS_MinMax=",SS_MinMax.Get(blockID));qsParams.Append("&SS_PageNum=",SS_PageNum.Get(blockID));qsParams.Append("&SS_MinDate=",SS_DateOps.GetMin(blockID),"&SS_MaxDate=",SS_DateOps.GetMax(blockID));qsParams.Append("&SS_Action=",String(SS_NavOps.SelectedAction(blockID)),"&SS_Position=",String(SS_NavOps.SelectedPosition(blockID)));qsParams.Append("&SS_Keyword=",SS_Keyword.Get(blockID));}
params+="FB_Values="+tagValues.ReturnAndEmpty();if(!qsParams.IsEmpty())
params+="&"+qsParams.ReturnAndEmpty();return params;}
function FilterBlocks_Submit(submittingBlockID)
{location.search=FilterBlocks_BuildFullQueryString(submittingBlockID);}
function FilterBlocks_ResubmitCheckForChanges(blockID)
{var prefix=FilterBlocks_MakePrefix(blockID);var retVal=false;var pageNum=FilterBlocks_GetPageNumCtl(prefix);if(pageNum&&pageNum.value!=pageNum.defaultValue)
retVal|=true;var sortOrderCtl=FilterBlocks_GetSortOrderCtl(prefix);if(sortOrderCtl&&sortOrderCtl.value!=sortOrderCtl.defaultValue)
retVal|=true;var keywordFilterCtl=FilterBlocks_GetKeywordCtl(prefix);if(keywordFilterCtl&&keywordFilterCtl.value!=keywordFilterCtl.defaultValue)
retVal|=true;retVal|=FilterBlocks_HaveClassificationsChanged(prefix,blockID);return retVal;}
function FilterBlocks_UpdateFilterCounts(blockID,filterArray)
{var dataArray=TitanDisplayServiceWrapper.SaferEval(filterArray);if(!dataArray||dataArray.length==0)
return FilterBlocks_ResetFieldsetState(blockID);for(var ii=0;ii<dataArray.length;++ii)
{var ctl=document.getElementById(dataArray[ii].i+"_div");if(!ctl)
continue;if(dataArray[ii].v==0)
tic_Utilities.AddStyle(ctl,"zero");else
tic_Utilities.RemoveStyle(ctl,"zero");var spans=ctl.getElementsByTagName("SPAN");for(var jj=0;jj<spans.length;++jj)
if(tic_Utilities.HasStyle(spans[jj],"uses"))
{spans[jj].innerHTML="&#160;("+String(dataArray[ii].v)+")";spans[jj].setAttribute("uses",dataArray[ii].v);break;}}
FilterBlocks_ResetFieldsetState(blockID);}
function FilterBlocks_UpdateFilterSuggestions(blockID,suggestionUpdates){if(!suggestionUpdates||suggestionUpdates.length==0)
return;for(var ii=0;ii<suggestionUpdates.length;ii++){var attribs=document.getElementById(suggestionUpdates[ii].id+"_attributes");if(attribs)
attribs.value=JSON.stringify(suggestionUpdates[ii]);}}
function FilterBlocks_ResetFieldsetState(blockID){var fieldsets=document.getElementsByTagName("FIELDSET");for(var ii=0;ii<fieldsets.length;++ii){var nonZero=false,hasSelection=false;var allSpans=fieldsets[ii].getElementsByTagName("SPAN");for(var jj=0;jj<allSpans.length;++jj){if(!tic_Utilities.HasStyle(allSpans[jj],"uses"))
continue;if(allSpans[jj].getAttribute("uses")!="0")
nonZero=true;else
continue;var parent=allSpans[jj].parentNode;while(parent&&parent.tagName!="DIV")
parent=parent.parentNode;if(tic_Utilities.HasStyle(parent,"selected"))
hasSelection=true;if(nonZero&&hasSelection)
break;}
if(fieldsets[ii].getAttribute("runaway")=="1"&&hasSelection)
tic_Utilities.AddStyle(fieldsets[ii],"min");if(tic_Utilities.HasStyle(fieldsets[ii],"hideZero")&&!nonZero)
fieldsets[ii].style.display="none";else{fieldsets[ii].style.display=null;var blockDataFieldID=blockID;if(fieldsets[ii].getAttribute("dataField"))
blockDataFieldID=blockDataFieldID+"_DF"+fieldsets[ii].getAttribute("dataField");FilterBlocks_RecalcSeeAllLess(blockDataFieldID,fieldsets[ii].getAttribute("classID"));}}}
function FilterBlocks_ShowHideWaiting(blockID,isWaiting){var prefix=FilterBlocks_MakePrefix(blockID),waitingDiv=document.getElementById(prefix+"Waiting"),resultsArea=document.getElementById(prefix+"ResultsDiv");if(waitingDiv)
waitingDiv.className=(isWaiting)?"loading waiting":"loading";if(resultsArea)
resultsArea.style.display=(isWaiting)?"none":"block";}
var TagSuggest={SelectSuggestion:function(blockID,classID,funcPrefix,evt){if(TagSuggest.BlurTimeout)
clearTimeout(TagSuggest.BlurTimeout);var baseID=FilterBlocks_MakeFullPrefix(blockID,classID);if(!TagSuggest.HasResults(baseID))
return;var target=tic_Utilities.GetTargetCtl(evt);if(target.nodeName=="SPAN")
target=target.parentNode;if(target.nodeName!="LI")
return;TagSuggest.Close(blockID,classID,"");if(funcPrefix=="Upload"){TagSuggest.HandleSelectionHtmlForUpload(blockID,classID,target);return;}
else if(funcPrefix=="Reg"){TagSuggest.HandleSelectionHtmlForReg(blockID,classID,target);return;}
TagSuggest.HandleSelectionHtmlForFilter(blockID,classID,target,funcPrefix);tic_Utilities.ExecuteFunctionByName(funcPrefix+"ClassificationCheck",window,[blockID]);},HandleSelectionHtmlForUpload:function(blockID,classID,target){var baseID=FilterBlocks_MakeFullPrefix(blockID,classID),itemID=target.getAttribute("i"),attribName=target.getAttribute("v"),allowMulti=(document.getElementById(baseID+"suggestions").getAttribute("allowMulti")=="1"),type=(allowMulti)?"checkbox":"radio",idPrefix=(allowMulti)?"upl_CM_":"upl_CS_",id=idPrefix+classID+"_"+itemID+"_"+blockID,name=(allowMulti)?id:"upl_CS_"+classID+"_"+blockID,div=document.getElementById(baseID+"div"),check=document.getElementById(id);if(check&&!check.checked)
check.checked=true;if(check)
return;var sb=new StringBuilder();sb.Append("<span>");sb.Append("<input");sb.Append(" type='",type,"'");sb.Append(" id='",id,"'");sb.Append(" name='",name,"'");if(type=="radio")
sb.Append(" value='",itemID,"'");sb.Append(" checked='checked'></input>");sb.Append("<label for='",id,"'>",attribName,"</label>");sb.Append("</span>");var state=TagSuggest.GetState(div);div.innerHTML+=sb.ReturnAndEmpty();TagSuggest.SetState(state);check=document.getElementById(id);check.checked=true;},HandleSelectionHtmlForReg:function(blockID,classID,target){var baseID=FilterBlocks_MakeFullPrefix(blockID,classID),itemID=target.getAttribute("i"),attribName=target.getAttribute("v"),idPrefix="reg_C_",id=idPrefix+classID+"_"+itemID+"_"+blockID,div=document.getElementById(baseID+"div"),check=document.getElementById(id);if(check&&!check.checked)
check.checked=true;if(check)
return;var sb=new StringBuilder();sb.Append("<span>");sb.Append("<input");sb.Append(" type='checkbox'");sb.Append(" id='",id,"'");sb.Append(" name='",id,"'");sb.Append(" checked='checked'></input>");sb.Append("<label for='",id,"'>",attribName,"</label>");sb.Append("</span>");var state=TagSuggest.GetState(div);div.innerHTML+=sb.ReturnAndEmpty();TagSuggest.SetState(state);check=document.getElementById(id);check.checked=true;},HandleSelectionHtmlForFilter:function(blockID,classID,target,funcPrefix){var baseID=FilterBlocks_MakeFullPrefix(blockID,classID),attribID=target.getAttribute("classID"),attribName=target.getAttribute("v"),attribUses=target.getAttribute("u"),div=document.getElementById(baseID+"div"),check=document.getElementById(attribID);if(check&&!check.checked){tic_Utilities.AddStyle(document.getElementById(attribID+"_div"),"selected");check.checked=true;}
if(check)
return;var sb=new StringBuilder();sb.Append("<div id='",attribID,"_div' class='selected'>");sb.Append("<span>");sb.Append("<input type='checkbox' checked='checked'");sb.Append(" name='",attribID,"'");sb.Append(" id='",attribID,"'");sb.Append(" onclick='",funcPrefix,"ClassificationDynamicCheck(",blockID,", ",classID,", this)'>");sb.Append("</input>");sb.Append("<label for='",attribID,"'>",attribName,"<span class='uses' uses='",attribUses,"'> (",attribUses,")</span></label>");sb.Append("</span>");sb.Append("</div>");var state=TagSuggest.GetState(div);div.innerHTML+=sb.ReturnAndEmpty();TagSuggest.SetState(state);check=document.getElementById(attribID);check.checked=true;},GetState:function(div){var allChecks=div.querySelectorAll("input[type='checkbox'], input[type='radio']"),retVal=[];for(var c=0;c<allChecks.length;c++)
retVal.push({id:allChecks[c].id,checked:allChecks[c].checked});return retVal;},SetState:function(state){for(var c=0;c<state.length;c++)
document.getElementById(state[c].id).checked=state[c].checked;},KeyUp:function(blockID,classID,funcPrefix,evt){var baseID=FilterBlocks_MakeFullPrefix(blockID,classID),target=tic_Utilities.GetTargetCtl(evt),key=tic_Utilities.GetWhich(evt);tic_Utilities.CancelBubble(evt);if(key===27||target.value==="")
TagSuggest.Close(blockID,classID,"");else if(key===38)
TagSuggest.HoverPrev(baseID);else if(key===40)
TagSuggest.HoverNext(baseID);else{var selection=TagSuggest.GetCurrent(baseID,target);if(key===13&&selection){TagSuggest.SelectSuggestion(blockID,classID,funcPrefix,{target:selection});return;}
if(SFTrim(target.value)=="")
return;RequeryTimer.KeyUp(target,TagSuggest.Suggest,[baseID,target.value],10);}},Reset:function(blockID,classID,funcPrefix,evt){if(TagSuggest.BlurTimeout)
clearTimeout(TagSuggest.BlurTimeout);tic_Utilities.CancelBubble(evt);var baseID=FilterBlocks_MakeFullPrefix(blockID,classID),div=document.getElementById(baseID+"div");tic_Utilities.ExecuteFunctionByName(funcPrefix+"ResetClassificationCheckbox",window,[blockID,classID]);div.innerHTML="<!-- placeholder -->";TagSuggest.Close(blockID,classID,"");},Focus:function(blockID,classID){var baseID=FilterBlocks_MakeFullPrefix(blockID,classID),query=document.getElementById(baseID+"query");if(query.value!="")
TagSuggest.Suggest(baseID,query.value);},BlurTimeout:null,Blur:function(blockID,classID,queryText,evt){tic_Utilities.CancelBubble(evt);var delay=function(){TagSuggest.Close(blockID,classID,queryText);}
TagSuggest.BlurTimeout=setTimeout(delay,200);},Close:function(blockID,classID,queryText){var baseID=FilterBlocks_MakeFullPrefix(blockID,classID),query=document.getElementById(baseID+"query"),totals=document.getElementById(baseID+"totals"),suggestions=document.getElementById(baseID+"suggestions");query.value=queryText;RequeryTimer.LastValue.Set(query.id,"");totals.textContent="";suggestions.innerHTML="";suggestions.parentNode.style.display="none";},HasResults:function(baseID){var ul=document.getElementById(baseID+"suggestions"),noResult=ul.querySelector("li.noResults"),lis=ul.querySelectorAll("li"),ulParent=ul.parentNode;if(noResult)
return false;if(!lis||lis.length===0||ulParent.style.display=="none")
return false;return(lis.length>0);},Suggest:function(baseID,searchFor){searchFor=searchFor.toLowerCase();var fieldset=document.getElementById(baseID+"fieldset"),attributes=JSON.parse(document.getElementById(baseID+"attributes").value).suggestions,totals=document.getElementById(baseID+"totals"),ul=document.getElementById(baseID+"suggestions"),ulParent=ul.parentNode,limitNum=fieldset.getAttribute("limitNum"),matches=[];for(var ii=0;ii<attributes.length;ii++){var lname=attributes[ii].name.toLowerCase();if(lname.indexOf(searchFor)==0)
matches.push(attributes[ii]);if(matches.length==parseInt(limitNum,10))
break;}
if(matches.length===0){ul.innerHTML="<li class='noResults'>no matches found</li>";ulParent.style.display="block";return;}
totals.textContent=matches.length+" of "+attributes.length;var suggestLIs=new StringBuilder();for(var i=0;i<matches.length;i++){suggestLIs.Append("<li classID='",matches[i].id,"' i='",matches[i].itemID,"' v=",JSON.stringify(matches[i].name)," u='",matches[i].uses.toString(),"'>");suggestLIs.Append(matches[i].name);if(matches[i].uses>=0)
suggestLIs.Append(" <span class='uses'>(",matches[i].uses.toString(),")</span>");suggestLIs.Append("</li>");}
ul.innerHTML=suggestLIs.ReturnAndEmpty();ulParent.style.display="block";},GetCurrent:function(baseID,txtBxCtl){if(!TagSuggest.HasResults(baseID))
return;var ulParent=document.getElementById(baseID+"suggestions").parentNode,selectedLI=ulParent.querySelector("li.hover");if(!selectedLI)
return null;return selectedLI;},HoverNext:function(baseID){if(!TagSuggest.HasResults(baseID))
return;var lis=document.getElementById(baseID+"suggestions").querySelectorAll("li"),newHover=0;for(i=0;i<lis.length;i++){if(lis[i].className=="hover"){lis[i].className="";newHover=(i==(lis.length-1))?0:i+1;break;}}
lis[newHover].className="hover";},HoverPrev:function(baseID){if(!TagSuggest.HasResults(baseID))
return;var lis=document.getElementById(baseID+"suggestions").querySelectorAll("li"),newHover=lis.length-1;for(i=0;i<lis.length;i++){if(lis[i].className=="hover"){lis[i].className="";newHover=(i==0)?lis.length-1:i-1;break;}}
lis[newHover].className="hover";}};var CalendarFilter={_months:["January","February","March","April","May","June","July","August","September","October","November","December"],SetStartEnd:function(blockID,start,end){var prefix=FilterBlocks_MakePrefix(blockID),pageNumCtl=FilterBlocks_GetPageNumCtl(prefix),fromCtl=SFGetControl(prefix+"calendarFrom"),startCtl=SFGetControl(prefix+"Start"),toCtl=SFGetControl(prefix+"calendarTo"),endCtl=SFGetControl(prefix+"End");if(fromCtl&&fromCtl.value==startCtl.value&&toCtl&&toCtl.value==endCtl.value)
return;startCtl.value=start;endCtl.value=(end!="")?end+" 11:59 PM":end;if(pageNumCtl)
pageNumCtl.value="1";CalendarFilter.DoCallback(blockID);},DoCallback:function(blockID){var callback=SFGetControl("F"+blockID+"_ChangeFunction"),docID=SFGetControl("F"+blockID+"_DocID");if(window[callback.value])
tic_Utilities.ExecuteFunctionByName(callback.value,window,[blockID,docID.value]);},WidgetInit:function(blockID){var prefix=FilterBlocks_MakePrefix(blockID),start=SFGetControl(prefix+"Start"),today=(start&&start.value)?new Date(start.value):new Date(),firstOfMonth=new Date(today.getFullYear(),today.getMonth(),1);var widget=SFGetControl("widget"+blockID);widget.setAttribute("selectedDate",today.toString());CalendarFilter.WidgetReset(blockID,firstOfMonth);},WidgetClick:function(blockID,ctl,evt){var targetCell=tic_Utilities.GetTargetCtl(evt);if(tic_Utilities.HasStyle(targetCell,"otherMonth")||targetCell.tagName!="TD"||targetCell.parentNode.tagName!="TR"||targetCell.parentNode.parentNode.tagName!="TBODY")
return;var firstOfMonth=new Date(ctl.getAttribute("currentMonth")),selectedDate=new Date(ctl.getAttribute("currentMonth"));selectedDate.setDate(selectedDate.getDate()+Number(targetCell.textContent)-1);ctl.setAttribute("selectedDate",selectedDate.toString());CalendarFilter.WidgetReset(blockID,firstOfMonth);CalendarFilter.SetStartEnd(blockID,String(selectedDate.getMonth()+1)+"/"+selectedDate.getDate()+"/"+selectedDate.getFullYear(),"");},WidgetChangeMonth:function(blockID,monthOffset,bSetEnd){var widget=SFGetControl("widget"+blockID),calDate=new Date(widget.getAttribute("currentMonth"));calDate.setMonth(calDate.getMonth()+parseInt(monthOffset,10));var endDate=new Date(calDate);endDate.setMonth(endDate.getMonth()+1);endDate.setDate(endDate.getDate()-1);var start=String(calDate.getMonth()+1)+"/"+calDate.getDate()+"/"+calDate.getFullYear(),end=bSetEnd?String(endDate.getMonth()+1)+"/"+endDate.getDate()+"/"+endDate.getFullYear():"";widget.setAttribute("selectedDate",calDate.toString());CalendarFilter.WidgetReset(blockID,calDate);CalendarFilter.SetStartEnd(blockID,start,end);},WidgetReset:function(blockID,firstOfMonth){var widget=SFGetControl("widget"+blockID),title=SFGetControl("widgetTitle"+blockID),dropdown=SFGetControl("monthDropdown"+blockID),selectedDate=new Date(widget.getAttribute("selectedDate")),dateToFill=new Date(firstOfMonth.toString());title.textContent=CalendarFilter._months[firstOfMonth.getMonth()]+" "+firstOfMonth.getFullYear();dateToFill.setDate(firstOfMonth.getDate()-(firstOfMonth.getDay()==0?7:firstOfMonth.getDay()));if(widget.tagName=="TABLE"){var dateRows=CalendarFilter.WidgetDateRows(blockID);for(var rows=0;rows<6;++rows)
for(var cols=0;cols<7;++cols,dateToFill.setDate(dateToFill.getDate()+1)){var cell=dateRows[rows][cols];cell.textContent=dateToFill.getDate();cell.className=(dateToFill.getMonth()!=firstOfMonth.getMonth())?"otherMonth":"";if(!tic_Utilities.HasStyle(cell,"otherMonth")&&cell.textContent==selectedDate.getDate()){tic_Utilities.AddStyle(cell,"selected");tic_Utilities.AddStyle(cell,"selectedDate");}}}
if(dropdown){dropdown.length=0;for(var m=-10;m<15;m++){var month=new Date(firstOfMonth.toString());month.setMonth(firstOfMonth.getMonth()+m);dropdown.options[dropdown.options.length]=new Option(CalendarFilter._months[month.getMonth()]+" "+month.getFullYear(),String(m),false,(m===0));}}
widget.setAttribute("currentMonth",firstOfMonth.toString());},WidgetDateRows:function(blockID){var table=SFGetControl("widget"+blockID),allRows=table.getElementsByTagName("TR"),retArray=[];for(var ii=0;ii<6;++ii)
retArray.push(allRows[ii+2].getElementsByTagName("TD"));return retArray;},FromToKeyUp:function(inputCtl,blockID){RequeryTimer.KeyUp(inputCtl,CalendarFilter.FromToChanged,[blockID]);},FromToChanged:function(blockID){var from=SFGetControl("F"+blockID+"_calendarFrom"),to=SFGetControl("F"+blockID+"_calendarTo");if((!from.value||ValueIsDate(from.value))&&(!to.value||ValueIsDate(to.value)))
CalendarFilter.SetStartEnd(blockID,from.value,to.value);}};var UserRanges={FormatUserRanges:function(blockID){var userRangeFilters=document.querySelectorAll("#FilterArea_F"+blockID+"_ fieldset.userValue"),retVal=[];for(var i=0;i<userRangeFilters.length;i++)
if(userRangeFilters[i].getAttribute("data-prefix")!="")
retVal.push(JSON.parse(SFGetEditValue(userRangeFilters[i].getAttribute("data-prefix")+"userRange")));return retVal;},SubmitMin:function(blockID,docID,prefix,parseType){var min=SFGetControl(prefix+"minValue"),data=JSON.parse(SFGetEditValue(prefix+"userRange")),parseFunc=(parseType=="fraction")?UserRanges.ParseFraction:UserRanges.ParseNumber,parsed=(data.rangeType!="Number")?{isValid:true,value:min.value}:parseFunc(min.value);UserRanges.EvalErrorState(min,parsed.isValid);if(!parsed.isValid)
return false;data.minValue=parsed.value;min.value=parsed.value;SFGetControl(prefix+"userRange").value=JSON.stringify(data);UserRanges.Submit(blockID,docID);},SubmitMax:function(blockID,docID,prefix,parseType){var max=SFGetControl(prefix+"maxValue"),data=JSON.parse(SFGetEditValue(prefix+"userRange")),parseFunc=(parseType=="fraction")?UserRanges.ParseFraction:UserRanges.ParseNumber,parsed=(data.rangeType!="Number")?{isValid:true,value:max.value}:parseFunc(max.value);UserRanges.EvalErrorState(max,parsed.isValid);if(!parsed.isValid)
return;data.maxValue=parsed.value;max.value=parsed.value;SFGetControl(prefix+"userRange").value=JSON.stringify(data);UserRanges.Submit(blockID,docID);},SubmitBetween:function(blockID,docID,prefix,parseType){var btwMin=SFGetControl(prefix+"betweenMinValue"),btwMax=SFGetControl(prefix+"betweenMaxValue"),data=JSON.parse(SFGetEditValue(prefix+"userRange")),parseFunc=(parseType=="fraction")?UserRanges.ParseFraction:UserRanges.ParseNumber,parsedMin=(data.rangeType!="Number")?{isValid:true,value:btwMin.value}:parseFunc(btwMin.value),parsedMax=(data.rangeType!="Number")?{isValid:true,value:btwMax.value}:parseFunc(btwMax.value);UserRanges.EvalErrorState(btwMin,parsedMin.isValid);if(!parsedMin.isValid)
return;UserRanges.EvalErrorState(btwMax,parsedMax.isValid);if(!parsedMax.isValid)
return;data.betweenMinValue=parsedMin.value;btwMin.value=parsedMin.value;data.betweenMaxValue=parsedMax.value;btwMax.value=parsedMax.value;SFGetControl(prefix+"userRange").value=JSON.stringify(data);UserRanges.Submit(blockID,docID);},EvalErrorState:function(ctl,isValid){var span=ctl.parentNode,div=span.parentNode;tic_Utilities.RemoveStyle(span,"error");tic_Utilities.RemoveStyle(div,"error");if(!isValid){tic_Utilities.AddStyle(span,"error");tic_Utilities.AddStyle(div,"error");}},Submit:function(blockID,docID){var blockPrefix=FilterBlocks_MakePrefix(blockID);FilterBlocks_GetPageNumCtl(blockPrefix).value="1";DataList_Submit(blockID,docID);},KeyUp:function(blockID,docID,prefix,parseType,evt){var target=tic_Utilities.GetTargetCtl(evt),attribute=target.getAttribute("data-attrib"),key=tic_Utilities.GetWhich(evt);tic_Utilities.CancelBubble(evt);if(key===13){RequeryTimer.Clear(target);UserRanges.UserValueChanged(attribute,blockID,docID,prefix,parseType);return;}
RequeryTimer.KeyUp(target,UserRanges.UserValueChanged,[attribute,blockID,docID,prefix,parseType],500);},UserValueChanged:function(attribute,blockID,docID,prefix,parseType){switch(attribute){case"minValue":UserRanges.SubmitMin(blockID,docID,prefix,parseType);break;case"maxValue":UserRanges.SubmitMax(blockID,docID,prefix,parseType);break;case"betweenMinValue":case"betweenMaxValue":UserRanges.SubmitBetween(blockID,docID,prefix,parseType);break;}},ParseNumber:function(value){value=value.trim();if(value=="")
return{value:"",isValid:true};return{value:value,isValid:!isNaN(value)};},ParseFraction:function(value){value=value.trim();if(value=="")
return{value:"",isValid:true};var parts=value.split(" ");if(parts.length>2)
return{value:value,isValid:false};var retVal={value:value,isValid:true},frac=[];if(parts.length>=1){frac=parts[0].split("/");if(frac.length>2)
retVal.isValid=false;if(frac.length==2){retVal.isValid=(!isNaN(frac[0])&&!isNaN(frac[1])&&eval(frac[1])!=0);if(retVal.isValid)
retVal.value=String((eval(frac[0])/eval(frac[1])).toFixed(4));}
if(frac.length==1){retVal.isValid=!isNaN(frac[0]);if(retVal.isValid)
retVal.value=String(eval(frac[0]).toFixed(4));}}
if(retVal.isValid&&parts.length==2){frac=parts[1].split("/");if(frac.length!=2||frac[0]==""||frac[1]==""){retVal.isValid=false;retVal.value=value;}
else{retVal.isValid=(!isNaN(frac[0])&&!isNaN(frac[1])&&eval(frac[1])!=0);retVal.value=(retVal.isValid)?String((eval(retVal.value)+(eval(frac[0])/eval(frac[1]))).toFixed(4)):value;}}
return retVal;}};function PrintPage_PrintPage(printPageString)
{if(printPageString&&printPageString.length&&printPageString[printPageString.length-1]!="&")
printPageString+="&";var params=PrintPage_FormatParams();window.open(window.location.protocol+"//"+window.location.host+window.location.pathname+printPageString+params);}
function PrintPage_Email(subjectLine)
{var params=PrintPage_FormatParams();window.open("mailto:?subject="+encodeURIComponent(subjectLine)+"&body="+encodeURIComponent(window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+params),"_self");}
function PrintPage_FormatParams()
{return FilterBlocks_BuildFullQueryString(-1);}
function FilterBlock_PageEvent(blockID,pageNum)
{FilterBlock_Submit(blockID,pageNum);}
function FilterBlock_Submit(blockID,pageNum)
{if(!pageNum)
pageNum=1;var prefix=FilterBlocks_MakePrefix(blockID),pageNumCtl=FilterBlocks_GetPageNumCtl(prefix);if(pageNumCtl)
pageNumCtl.value=pageNum;if(FilterBlocks_IsAjax(prefix))
return FilterBlock_ClassificationCheck(blockID);else
return FilterBlocks_Submit(blockID);}
function FilterBlock_ResetClassificationLink(blockID,classID)
{FilterBlock_ResetClassificationCheckbox(blockID,classID);var prefix=FilterBlocks_MakePrefix(blockID);if(!FilterBlocks_IsAjax(prefix))
FilterBlock_Submit(blockID,1);}
function FilterBlock_ResetClassificationCheckbox(blockID,classID)
{FilterBlocks_ResetSelections(blockID,classID);FilterBlock_ClassificationCheck(blockID);var prefix=FilterBlocks_MakePrefix(blockID);if(!FilterBlocks_IsAjax(prefix))
FilterBlock_Submit(blockID,1);}
function FilterBlock_ClassificationSelectChange(blockID)
{FilterBlock_ClassificationCheck(blockID);}
function FilterBlock_ClassificationDynamicCheck(blockID,classID,ctl)
{FilterBlocks_ResetSelectClass(ctl,ctl.checked,blockID,classID);FilterBlock_ClassificationCheck(blockID);}
function FilterBlock_ClassificationLinkSelect(blockID,classID,container,evt)
{FilterBlocks_HandleCommonLinkSelect(blockID,classID,container,evt)
var prefix=FilterBlocks_MakePrefix(blockID);FilterBlock_Submit(blockID,1);}
function FilterBlock_KeywordFilter(blockID)
{var blockPrefix=FilterBlocks_MakePrefix(blockID),keywordCtl=FilterBlocks_GetKeywordCtl(blockPrefix);if(!FilterBlocks_IsAjax(blockPrefix))
return;RequeryTimer.KeyUp(keywordCtl,FilterBlock_Submit,[blockID]);}
function FilterBlock_ReCheck(blockID,docID)
{var prefix=FilterBlocks_MakePrefix(blockID);var skipResubmit=(FilterBlock_GetResultsDiv(prefix)&&!FilterBlocks_ResubmitCheckForChanges(blockID))
if(skipResubmit)
return FilterBlock_AjaxComplete(blockID,null,null,null);else
return FilterBlock_ClassificationCheck(blockID);}
function FilterBlock_ClassificationCheck(blockID)
{var prefix=FilterBlocks_MakePrefix(blockID);if(!FilterBlocks_IsAjax(prefix))
return;var docID=document.getElementById(prefix+"DocID").value,pageNumCtl=FilterBlocks_GetPageNumCtl(prefix),keywordCtl=FilterBlocks_GetKeywordCtl(prefix),queryArgs={pageNumber:(pageNumCtl&&pageNumCtl.value)?pageNumCtl.value:"1",keyword:(keywordCtl)?keywordCtl.value.replace(/&/g,"&amp;"):"",classifications:FilterBlocks_FormatClassifications(prefix)},ajaxArgs=[docID,blockID,queryArgs];FilterBlocks_ShowHideWaiting(blockID,true);TitanDisplayServiceWrapper.MakeWebServiceCall("FilterBlock_"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.AggregationV2Ajax.GetFilterResults,ajaxArgs,FilterBlock_AjaxComplete,[blockID],true);}
function FilterBlock_GetResultsDiv(prefix)
{return document.getElementById(prefix+"ResultsDiv");}
function FilterBlock_AjaxComplete(blockID,resultsAsJSON)
{var blockPrefix=FilterBlocks_MakePrefix(blockID);var resultsArea=FilterBlock_GetResultsDiv(blockPrefix);if(!resultsArea)
return;if(resultsAsJSON&&resultsAsJSON.htmlData)
resultsArea.innerHTML=resultsAsJSON.htmlData;if(resultsAsJSON&&resultsAsJSON.suggestionUpdates)
FilterBlocks_UpdateFilterSuggestions(blockID,resultsAsJSON.suggestionUpdates);if(resultsAsJSON&&resultsAsJSON.filterUpdateArray)
FilterBlocks_UpdateFilterCounts(blockID,resultsAsJSON.filterUpdateArray);else
FilterBlocks_ResetFieldsetState(blockID);FilterBlocks_ShowHideWaiting(blockID,false);}
function ProductBlock_PageEvent(blockID,docID,newPageNum)
{var prefix=FilterBlocks_MakePrefix(blockID);FilterBlocks_GetPageNumCtl(prefix).value=String(newPageNum);ProductBlock_Submit(blockID,docID);}
function ProductBlock_ChangeSortOrder(blockID,docID,newSortOrder,evt)
{var target=tic_Utilities.GetTargetCtl(evt);if(!target)
return;while(target.tagName!="LI")
target=target.parentNode;if(!target)
return;if(tic_Utilities.HasStyle(target,"selected"))
return;var prefix=FilterBlocks_MakePrefix(blockID);var lis=document.getElementById(prefix+"SortList").getElementsByTagName("LI");for(var ii=0;ii<lis.length;++ii)
tic_Utilities.RemoveStyle(lis[ii],"selected");tic_Utilities.AddStyle(target,"selected");FilterBlocks_GetSortOrderCtl(prefix).value=target.getAttribute("sortValue");FilterBlocks_GetPageNumCtl(prefix).value="1";ProductBlock_Submit(blockID,docID);}
function ProductBlock_Submit(blockID,docID)
{var prefix=FilterBlocks_MakePrefix(blockID);var ajaxArgs=new Array();ajaxArgs[ajaxArgs.length]=docID;ajaxArgs[ajaxArgs.length]=blockID;var pageNumCtl=FilterBlocks_GetPageNumCtl(prefix);if(pageNumCtl&&pageNumCtl.value)
ajaxArgs[ajaxArgs.length]=pageNumCtl.value;else
ajaxArgs[ajaxArgs.length]="1";var sortOrderCtl=FilterBlocks_GetSortOrderCtl(prefix);if(sortOrderCtl)
ajaxArgs[ajaxArgs.length]=sortOrderCtl.value;else
ajaxArgs[ajaxArgs.length]="";var keywordFilterCtl=FilterBlocks_GetKeywordCtl(prefix);if(keywordFilterCtl)
ajaxArgs[ajaxArgs.length]=keywordFilterCtl.value.replace(/&/g,"&amp;");else
ajaxArgs[ajaxArgs.length]="";var folderIDCtl=FilterBlocks_GetFolderIDCtl(prefix);if(folderIDCtl&&folderIDCtl.value)
ajaxArgs[ajaxArgs.length]=folderIDCtl.value;else
ajaxArgs[ajaxArgs.length]="0";ajaxArgs[ajaxArgs.length]=FilterBlocks_FormatClassifications(prefix);document.getElementById("Product"+blockID+"_Waiting").className+=" waiting";document.getElementById("Product"+blockID+"_ResultsDiv").style.display="none";TitanDisplayServiceWrapper.MakeWebServiceCall("Product_Main"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.ProductAjax.GetResultsData,ajaxArgs,ProductBlock_AjaxComplete,[blockID],true);}
function ProductBlock_ResetClassificationLink(blockID,classID)
{ProductBlock_ResetClassificationCheckbox(blockID,classID);}
function ProductBlock_ResetClassificationCheckbox(blockID,classID)
{FilterBlocks_ResetSelections(blockID,classID);var docID=document.getElementById(FilterBlocks_MakePrefix(blockID)+"DocID").value;ProductBlock_Submit(blockID,docID);}
function ProductBlock_ClassificationCheck(blockID)
{var prefix=FilterBlocks_MakePrefix(blockID);var pageNumCtl=FilterBlocks_GetPageNumCtl(prefix);if(pageNumCtl&&pageNumCtl.value)
pageNumCtl.value=1;var docID=document.getElementById(prefix+"DocID").value;ProductBlock_Submit(blockID,docID);}
function ProductBlock_ClassificationLinkSelect(blockID,classID,container,evt)
{FilterBlocks_HandleCommonLinkSelect(blockID,classID,container,evt);ProductBlock_ClassificationCheck(blockID);}
function ProductBlock_ClassificationSelectChange(blockID)
{ProductBlock_ClassificationCheck(blockID);}
function ProductBlock_ClassificationDynamicCheck(blockID,classID,ctl)
{FilterBlocks_ResetSelectClass(ctl,ctl.checked,blockID,classID);ProductBlock_ClassificationCheck(blockID);}
function ProductBlock_KeywordFilter(blockID)
{var blockPrefix=FilterBlocks_MakePrefix(blockID),keywordCtl=FilterBlocks_GetKeywordCtl(blockPrefix);RequeryTimer.KeyUp(keywordCtl,ProductBlock_ClassificationCheck,[blockID]);}
function ProductBlock_ReCheck(blockID,docID)
{var skipResubmit=(ProductBlock_GetResultsDiv(blockID)&&!FilterBlocks_ResubmitCheckForChanges(blockID))
var prefix=FilterBlocks_MakePrefix(blockID);var sortCtl=FilterBlocks_GetSortOrderCtl(prefix);if(!sortCtl)
return;var selected=sortCtl.value;var lis=document.getElementById(prefix+"SortList").getElementsByTagName("LI");for(var ii=0;ii<lis.length;++ii)
if(lis[ii].getAttribute("sortValue")==selected)
tic_Utilities.AddStyle(lis[ii],"selected");else
tic_Utilities.RemoveStyle(lis[ii],"selected");if(skipResubmit)
return ProductBlock_AjaxComplete(blockID,null,null,null);else
return ProductBlock_Submit(blockID,docID);}
function ProductBlock_GetResultsDiv(blockID)
{return document.getElementById("Product"+blockID+"_ResultsDiv");}
function ProductBlock_AjaxComplete(blockID,responseAsJSON,responseAsXml,responseAsText)
{var resultsArea=ProductBlock_GetResultsDiv(blockID);if(!resultsArea)
return;if(responseAsJSON&&responseAsJSON.htmlData)
resultsArea.innerHTML=responseAsJSON.htmlData;if(responseAsJSON&&responseAsJSON.suggestionUpdates)
FilterBlocks_UpdateFilterSuggestions(blockID,responseAsJSON.suggestionUpdates);if(responseAsJSON&&responseAsJSON.filterUpdateArray)
FilterBlocks_UpdateFilterCounts(blockID,responseAsJSON.filterUpdateArray);else
FilterBlocks_ResetFieldsetState(blockID);resultsArea.style.display="block";}
function ProductBlock_DetailThumbClick(detailCtlName,imgUrl,stdSize,zoomSize,isZoom)
{var detail=document.getElementById(detailCtlName+"Zoom");if(detail)
detail.src=imgUrl+"?"+zoomSize;if(isZoom)
return;detail=document.getElementById(detailCtlName);if(detail)
detail.src=imgUrl+"?"+stdSize;}
function ProductBlock_DetailImageClick(blockID,size)
{ProductBlock_PopUpResize(blockID);var popup=document.getElementById("productPopUp"+String(blockID));if(popup)
popup.style.display="block";return;}
function ProductBlock_PopUpResize(blockID)
{return;}
function ProductBlock_PopUpClose(blockID,stdSize,zoomSize,evt)
{tic_Utilities.CancelBubble(evt);document.getElementById("productPopUp"+String(blockID)).style.display="none";var stdDetail=document.getElementById("imgDetail_"+String(blockID));var zoomDetail=document.getElementById("imgDetail_"+String(blockID)+"Zoom");if(!stdDetail||!zoomDetail)
return;zoomDetail.src=decodeURIComponent(stdDetail.src).replace(stdSize,zoomSize);}
function DataList_PageEvent(blockID,docID,newPageNum)
{var prefix=FilterBlocks_MakePrefix(blockID);FilterBlocks_GetPageNumCtl(prefix).value=String(newPageNum);DataList_Submit(blockID,docID);}
function DataList_ChangeSortOrder(blockID,docID,evt)
{var target=tic_Utilities.GetTargetCtl(evt);if(!target)
return;while(target&&target.tagName!="LI")
target=target.parentNode;if(!target)
return;if(tic_Utilities.HasStyle(target,"selected"))
return;var prefix=FilterBlocks_MakePrefix(blockID);var lis=document.getElementById(prefix+"SortList").getElementsByTagName("LI");for(var ii=0;ii<lis.length;++ii)
tic_Utilities.RemoveStyle(lis[ii],"selected");tic_Utilities.AddStyle(target,"selected");document.getElementById(prefix+"SortKey").value=target.getAttribute("sortKey");document.getElementById(prefix+"SortDir").value=target.getAttribute("sortDir");FilterBlocks_GetPageNumCtl(prefix).value="1";DataList_Submit(blockID,docID);}
function DataList_Submit(blockID,docID)
{var prefix=FilterBlocks_MakePrefix(blockID),pageNumCtl=FilterBlocks_GetPageNumCtl(prefix),sortKeyCtl=SFGetControl(prefix+"SortKey"),sortDirCtl=SFGetControl(prefix+"SortDir"),keywordCtl=FilterBlocks_GetKeywordCtl(prefix),startCtl=SFGetControl(prefix+"Start"),endCtl=SFGetControl(prefix+"End"),widget=SFGetControl("widget"+blockID),widgetDate=(widget&&widget.hasAttribute("currentMonth"))?new Date(widget.getAttribute("currentMonth")):null,latitudeCtl=SFGetControl(prefix+"latitude"),longitudeCtl=SFGetControl(prefix+"longitude"),radiusCtl=SFGetControl(prefix+"radius"),queryArgs={pageNumber:(pageNumCtl&&pageNumCtl.value)?pageNumCtl.value:"1",sortKey:(sortKeyCtl)?sortKeyCtl.value:"",sortDirection:(sortDirCtl)?sortDirCtl.value:"",keyword:(keywordCtl)?keywordCtl.value.replace(/&/g,"&amp;"):"",classifications:FilterBlocks_FormatClassifications(prefix),startDate:(startCtl)?startCtl.value:"",endDate:(endCtl)?endCtl.value:"",widgetDate:(widgetDate!=null)?String(widgetDate.getMonth()+1)+"/"+String(widgetDate.getDate())+"/"+String(widgetDate.getFullYear()):"",latitude:(latitudeCtl&&latitudeCtl.value)?latitudeCtl.value:"NaN",longitude:(longitudeCtl&&longitudeCtl.value)?longitudeCtl.value:"NaN",radius:(radiusCtl)?radiusCtl.value:"NaN",userRanges:UserRanges.FormatUserRanges(blockID)},ajaxArgs=[docID,blockID,queryArgs];FilterBlocks_ShowHideWaiting(blockID,true);TitanDisplayServiceWrapper.MakeWebServiceCall("DataList_Main"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.DataAjax.GetDataListResults,ajaxArgs,DataList_AjaxComplete,[blockID],true);}
function DataList_ResetClassificationLink(blockDataFieldID,classID)
{DataList_ResetClassificationCheckbox(blockDataFieldID,classID);}
function DataList_ResetClassificationCheckbox(blockDataFieldID,classID)
{FilterBlocks_ResetSelections(blockDataFieldID,classID);var blockID=DataList_GetBlockID(blockDataFieldID),docID=document.getElementById(FilterBlocks_MakePrefix(blockID)+"DocID").value;DataList_Submit(blockID,docID);}
function DataList_ClassificationCheck(blockDataFieldID)
{var blockID=DataList_GetBlockID(blockDataFieldID),prefix=FilterBlocks_MakePrefix(blockID);var pageNumCtl=FilterBlocks_GetPageNumCtl(prefix);if(pageNumCtl&&pageNumCtl.value)
pageNumCtl.value=1;var docID=document.getElementById(prefix+"DocID").value;DataList_Submit(blockID,docID);}
function DataList_ClassificationLinkSelect(blockDataFieldID,classID,container,evt)
{FilterBlocks_HandleCommonLinkSelect(blockDataFieldID,classID,container,evt);DataList_ClassificationCheck(blockDataFieldID);}
function DataList_ClassificationSelectChange(blockDataFieldID)
{DataList_ClassificationCheck(blockDataFieldID);}
function DataList_ClassificationDynamicCheck(blockDataFieldID,classID,ctl)
{FilterBlocks_ResetSelectClass(ctl,ctl.checked,blockDataFieldID,classID);DataList_ClassificationCheck(blockDataFieldID);}
function DataList_KeywordFilter(blockID)
{var blockPrefix=FilterBlocks_MakePrefix(blockID),keywordCtl=FilterBlocks_GetKeywordCtl(blockPrefix);RequeryTimer.KeyUp(keywordCtl,DataList_ClassificationCheck,[blockID]);}
function DataList_BrowserLocation(blockID,docID,callback,callbackArgs){var Found=function(position){var baseID=FilterBlocks_MakePrefix(blockID);SFSetControlValue(baseID+"latitude",position.coords.latitude,false);SFSetControlValue(baseID+"longitude",position.coords.longitude,false);SFSetControlValue(baseID+"location","My Location",false);callback.apply(window,callbackArgs);};var NotFound=function(positionError){if(positionError.code==2)
alert('Unable to determine your current location.');callback.apply(window,callbackArgs);};if('geolocation'in navigator)
navigator.geolocation.getCurrentPosition(Found,NotFound,{enableHighAccuracy:false,maximumAge:300000});}
function DataList_RadiusFilter(blockID){var prefix=FilterBlocks_MakePrefix(blockID),docID=SFGetEditValue(prefix+"DocID");if(!SFEditFieldHasValue(prefix+"latitude")||!SFEditFieldHasValue(prefix+"longitude"))
return;FilterBlocks_GetPageNumCtl(prefix).value="1";DataList_Submit(blockID,docID);}
function DataList_ReCheck(blockID,docID)
{var skipResubmit=(DataList_GetResultsDiv(blockID)&&!FilterBlocks_ResubmitCheckForChanges(blockID)),prefix=FilterBlocks_MakePrefix(blockID),calendarWidget=SFGetControl("widget"+blockID),sortKeyCtl=document.getElementById(prefix+"SortKey"),sortDirCtl=document.getElementById(prefix+"SortDir");if(calendarWidget&&calendarWidget.hasAttribute("doInit")){CalendarFilter.WidgetInit(blockID);calendarWidget.removeAttribute("doInit");}
if(!sortKeyCtl||!sortDirCtl)
return;var selectedKey=sortKeyCtl.value,selectedDir=sortDirCtl.value;var lis=document.getElementById(prefix+"SortList").getElementsByTagName("LI");for(var ii=0;ii<lis.length;++ii)
if(lis[ii].getAttribute("sortKey")==selectedKey&&lis[ii].getAttribute("sortDir")==selectedDir)
tic_Utilities.AddStyle(lis[ii],"selected");else
tic_Utilities.RemoveStyle(lis[ii],"selected");if(skipResubmit)
return DataList_AjaxComplete(blockID,null,null,null);else
return DataList_Submit(blockID,docID);}
function DataList_GetBlockID(blockDataFieldID){var idx=String(blockDataFieldID).lastIndexOf("_");if(idx==-1)
return blockDataFieldID;return blockDataFieldID.substring(0,idx);}
function DataList_GetResultsDiv(blockID)
{return document.getElementById("F"+blockID+"_ResultsDiv");}
function DataList_AjaxComplete(blockID,responseAsJSON,responseAsXml,responseAsText)
{var resultsArea=DataList_GetResultsDiv(blockID);if(!resultsArea)
return;if(responseAsJSON&&responseAsJSON.javascript)
Cal_SelectDates("widget"+blockID,TitanDisplayServiceWrapper.EvalJavascript(responseAsJSON.javascript));if(responseAsJSON&&responseAsJSON.htmlData)
resultsArea.innerHTML=responseAsJSON.htmlData;if(responseAsJSON&&responseAsJSON.suggestionUpdates)
FilterBlocks_UpdateFilterSuggestions(blockID,responseAsJSON.suggestionUpdates);if(responseAsJSON&&responseAsJSON.filterUpdateArray)
FilterBlocks_UpdateFilterCounts(blockID,responseAsJSON.filterUpdateArray);else
FilterBlocks_ResetFieldsetState(blockID);TitanLoad();FilterBlocks_ShowHideWaiting(blockID,false);}
var LocationSuggest={SelectSuggestion:function(blockID,funcPrefix,evt){if(LocationSuggest.BlurTimeout)
clearTimeout(LocationSuggest.BlurTimeout);var baseID=FilterBlocks_MakePrefix(blockID);if(!LocationSuggest.HasResults(baseID))
return;var target=tic_Utilities.GetTargetCtl(evt);if(target.nodeName=="SPAN")
target=target.parentNode;if(target.nodeName!="LI")
return;LocationSuggest.SetAndGo(blockID,target.textContent,target.getAttribute("lat"),target.getAttribute("lng"));},SetAndGo:function(blockID,search,lat,lng){var baseID=FilterBlocks_MakePrefix(blockID);LocationSuggest.Close(blockID,search);SFSetControlValue(baseID+"latitude",lat,false);SFSetControlValue(baseID+"longitude",lng,false);FilterBlocks_GetPageNumCtl(baseID).value="1";var docID=SFGetEditValue(baseID+"DocID"),funcPrefix=SFGetControl("FilterArea_"+baseID).getAttribute("blockPrefix");tic_Utilities.ExecuteFunctionByName(funcPrefix+"Submit",window,[blockID,docID]);},KeyUp:function(blockID,funcPrefix,evt){var baseID=FilterBlocks_MakePrefix(blockID),target=tic_Utilities.GetTargetCtl(evt),key=tic_Utilities.GetWhich(evt);tic_Utilities.CancelBubble(evt);if(key===27)
LocationSuggest.Close(blockID,"");else if(target.value==="")
LocationSuggest.SetAndGo(blockID,"","","");else if(key===38)
LocationSuggest.HoverPrev(baseID);else if(key===40)
LocationSuggest.HoverNext(baseID);else{var selection=LocationSuggest.GetCurrent(baseID,target);if(key===13&&selection){LocationSuggest.SelectSuggestion(blockID,funcPrefix,{target:selection});return;}
var val=SFTrim(target.value);if(val=="")
return;if(val=="My Location")
return;var regexp=SFGetEditValue(baseID+"validationRegEx"),errMsg=SFGetEditValue(baseID+"validationErrorMsg");if(regexp&&!SFEditFieldMatchesRegEx(target.id,regexp)){alert(errMsg);return;}
RequeryTimer.KeyUp(target,LocationSuggest.Suggest,[blockID,val],500);}},BlurTimeout:null,Blur:function(blockID,queryText,evt){tic_Utilities.CancelBubble(evt);var delay=function(){LocationSuggest.Close(blockID,queryText);};LocationSuggest.BlurTimeout=setTimeout(delay,200);},Close:function(blockID,queryText){var baseID=FilterBlocks_MakePrefix(blockID),suggestions=SFGetControl(baseID+"locationSuggestions");SFSetControlValue(baseID+"location",queryText,false);RequeryTimer.LastValue.Set(baseID+"location",queryText);suggestions.innerHTML="";suggestions.parentNode.style.display="none";},Focus:function(blockID){var baseID=FilterBlocks_MakePrefix(blockID),query=SFGetControl(baseID+"location");if(query.value==""||query.value=="My Location"||query.value==RequeryTimer.LastValue.Get(query.id))
return;var regexp=SFGetEditValue(baseID+"validationRegEx"),errMsg=SFGetEditValue(baseID+"validationErrorMsg");if(regexp&&!SFEditFieldMatchesRegEx(target.id,regexp)){alert(errMsg);return;}
LocationSuggest.Suggest(blockID,query.value);},HasResults:function(baseID){var ul=SFGetControl(baseID+"locationSuggestions"),noResult=ul.querySelector("li.noResults"),lis=ul.querySelectorAll("li"),ulParent=ul.parentNode;if(noResult)
return false;if(!lis||lis.length===0||ulParent.style.display=="none")
return false;return(lis.length>0);},Suggest:function(blockID,searchFor){var baseID=FilterBlocks_MakePrefix(blockID),docID=SFGetEditValue(baseID+"DocID"),ajaxArgs=[docID,blockID,searchFor];TitanDisplayServiceWrapper.MakeWebServiceCall("LocationSuggest"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.DataAjax.GetLocations,ajaxArgs,LocationSuggest.SuggestCallback,[blockID],true);},SuggestCallback:function(blockID,responseAsJSON,responseAsXml,responseAsText){var baseID=FilterBlocks_MakePrefix(blockID);if(responseAsJSON.length==1&&responseAsJSON[0].IsMatch){LocationSuggest.SetAndGo(blockID,SFGetEditValue(baseID+"location"),responseAsJSON[0].Latitude,responseAsJSON[0].Longitude);return;}
else if(responseAsJSON.length==0){LocationSuggest.SetAndGo(blockID,SFGetEditValue(baseID+"location"),"","");return;}
var ul=SFGetControl(baseID+"locationSuggestions"),ulParent=ul.parentNode,suggestLIs=new StringBuilder();for(var i=0;i<responseAsJSON.length;i++){suggestLIs.Append("<li lat='",responseAsJSON[i].Latitude,"' lng='",responseAsJSON[i].Longitude,"'>");suggestLIs.Append(responseAsJSON[i].Description);suggestLIs.Append("</li>");}
ul.innerHTML=suggestLIs.ReturnAndEmpty();ulParent.style.display="block";},GetCurrent:function(baseID,txtBxCtl){if(!LocationSuggest.HasResults(baseID))
return;var ulParent=SFGetControl(baseID+"locationSuggestions").parentNode,selectedLI=ulParent.querySelector("li.hover");if(!selectedLI)
return null;return selectedLI;},HoverNext:function(baseID){if(!LocationSuggest.HasResults(baseID))
return;var lis=SFGetControl(baseID+"locationSuggestions").querySelectorAll("li"),newHover=0;for(i=0;i<lis.length;i++){if(lis[i].className=="hover"){lis[i].className="";newHover=(i==(lis.length-1))?0:i+1;break;}}
lis[newHover].className="hover";},HoverPrev:function(baseID){if(!LocationSuggest.HasResults(baseID))
return;var lis=SFGetControl(baseID+"locationSuggestions").querySelectorAll("li"),newHover=lis.length-1;for(i=0;i<lis.length;i++){if(lis[i].className=="hover"){lis[i].className="";newHover=(i==0)?lis.length-1:i-1;break;}}
lis[newHover].className="hover";}};function ShowTab(ctl,blockID)
{var tabUL=ctl.parentNode,tabLIs=tabUL.getElementsByTagName("LI"),container=tabUL.parentNode,selectedDiv=container.querySelector("div#"+ctl.id+"_Content"),tabDIVs=container.querySelector("div#TabsContent_"+blockID).getElementsByTagName("DIV");for(var ii=0;ii!=tabLIs.length;++ii)
tic_Utilities.RemoveStyle(tabLIs[ii],"selected");for(var ii=0;ii!=tabDIVs.length;++ii)
tic_Utilities.RemoveStyle(tabDIVs[ii],"selected");tic_Utilities.AddStyle(ctl,"selected");tic_Utilities.AddStyle(selectedDiv,"selected");}
var Accordion={Toggle:function(position,blockID){var outer=SFGetControl("Accordion_"+blockID),heading=SFGetControl("Accordion_"+blockID+"_"+position),content=SFGetControl("Accordion_"+blockID+"_"+position+"_Content");tic_Utilities.ToggleStyle(heading,"open");tic_Utilities.ToggleStyle(content,"open");content.scrollIntoViewIfNeeded();if(Accordion.AreAllOpen(blockID))
tic_Utilities.AddStyle(outer,"open");else
tic_Utilities.RemoveStyle(outer,"open");},AreAllOpen:function(blockID){var container=SFGetControl("AccordionArea_"+blockID),divs=container.getElementsByTagName("DIV");for(var ii=0;ii<divs.length;ii++)
if(tic_Utilities.HasStyle(divs[ii],"accordionHeading")&&!tic_Utilities.HasStyle(divs[ii],"open"))
return false;return true;},OpenAll:function(blockID){var outer=SFGetControl("Accordion_"+blockID),container=SFGetControl("AccordionArea_"+blockID),divs=container.getElementsByTagName("DIV");tic_Utilities.AddStyle(outer,"open");for(var ii=0;ii<divs.length;ii++)
if(tic_Utilities.HasStyle(divs[ii],"accordionHeading")||tic_Utilities.HasStyle(divs[ii],"accordionContent"))
tic_Utilities.AddStyle(divs[ii],"open");},CloseAll:function(blockID){var outer=SFGetControl("Accordion_"+blockID),container=SFGetControl("AccordionArea_"+blockID),divs=container.getElementsByTagName("DIV");tic_Utilities.RemoveStyle(outer,"open");for(var ii=0;ii<divs.length;ii++)
if(tic_Utilities.HasStyle(divs[ii],"accordionHeading")||tic_Utilities.HasStyle(divs[ii],"accordionContent"))
tic_Utilities.RemoveStyle(divs[ii],"open");}}
var DataDetail={DownloadICS:function(blockID,docID){var icsFields=SFGetControl("F"+blockID+"_ICSFields");if(!icsFields||!icsFields.value||!docID)
return;var url=new StringBuilder(window.location.protocol,"//",window.location.host,"/calendar.ics","?");url.Append("DocID=",docID,"&");url.Append(icsFields.value);return window.open(url.ReturnAndEmpty(),"_self");},WriteOccurrencesToId:function(blockID,start,end,ctlName){var patternID=SFGetControl("F"+blockID+"_patternID").value,callbackArgs=[ctlName];DataDetail.GetOccurrences(blockID,patternID,start,end,DataDetail.WriteOccurrencesCallback,callbackArgs);},WriteOccurrencesCallback:function(ctlName,responseAsJSON,responseAsXml,responseAsText){var resultsArea=SFGetControl(ctlName);if(!responseAsJSON.length){resultsArea.innerHTML="No occurrences found.";return;}
resultsArea.innerHTML="";for(var ii=0;ii<responseAsJSON.length;ii++){var d=(Date.parseLocale)?Date.parseLocale(responseAsJSON[ii]):new Date(responseAsJSON[ii]);resultsArea.innerHTML+=d.toDateString()+"<br/>";}},GetOccurrences:function(blockID,patternID,startDate,endDate,callbackFunction,callbackArgs){TitanDisplayServiceWrapper.MakeWebServiceCall("DataDetail_GetOccurrences"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.DataAjax.GetOccurrences,[patternID,startDate,endDate],callbackFunction,callbackArgs,true);}};var DataEditor={Populate:function(docID,blockID,itemID){TitanDisplayServiceWrapper.MakeWebServiceCall("DataEditor_Populate"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.DataEditorDisplayAjax.GetEditorInitData,[docID,blockID,itemID],DataEditor.PopulateCallback,[blockID],true);},PopulateCallback:function(blockID,responseAsJSON,responseAsXml,responseAsText){DataEditor.RedirectIfNeeded(responseAsJSON);if(!responseAsJSON)
return;var processingKey=document.getElementById("cmsFormsControl_"+blockID+"_ProcessingKey"),parentNode=processingKey.parentNode;processingKey.setAttribute("itemID",responseAsJSON.itemID);var updates=parentNode.querySelectorAll("div.dataField[fieldtype='freeform'], div.dataField[fieldtype='filepicker'], div.dataField[fieldtype='linkpicker'], div.dataField[fieldtype='multifilepicker']");for(var ii=0;ii<updates.length;ii++)
updates[ii].setAttribute("blockID",blockID);var inputs=responseAsJSON.inputs;if(inputs){for(var i=0;i<inputs.length;i++){var field=document.getElementById(inputs[i].FieldID);if(!field)
continue;if(field.tagName=="TEXTAREA")
field.value=inputs[i].InnerHtml;else
field.innerHTML=inputs[i].InnerHtml;}}
var fieldContent=responseAsJSON.fieldContent;if(fieldContent.length==0)
return;for(var f=0;f<fieldContent.length;f++){var fieldDiv=parentNode.querySelector("div[fieldName='"+fieldContent[f].FieldName+"']");if(fieldDiv)
DataEditor.InitializeField(fieldDiv,SFTrim(fieldContent[f].FieldValue));}},InitializeField:function(fieldDiv,dataValue){var type=fieldDiv.getAttribute("fieldType"),name=fieldDiv.getAttribute("fieldName"),field=fieldDiv.querySelector("#cmsForms_"+name);if(!field||dataValue=="")
return;switch(type){case"checkbox":field.checked=(dataValue!=0&&dataValue!="no"&&dataValue!="off"&&dataValue!=false);break;case"date":var d=DataEditor.ParseDateTime(dataValue);field.value=DataEditor.ToDateTimeString(d,true,false);break;case"datetime":var dt=DataEditor.ParseDateTime(dataValue);field.value=DataEditor.ToDateTimeString(dt,true,true);fieldDiv.querySelector("#"+name+"_Date").value=DataEditor.ToDateTimeString(dt,true,false);fieldDiv.querySelector("#"+name+"_Time").value=DataEditor.ToDateTimeString(dt,false,true);break;case"datetimerecur":var configElement=fieldDiv.querySelector("#"+name+"_recurConfig"),data=JSON.parse(dataValue),pattern=new RecurrencePattern(data);field.value=pattern.ReturnXml();configElement.setAttribute("defaultValue",dataValue);configElement.value=dataValue;if(configElement.hasAttribute("skipConfirm")&&data.count!=1)
configElement.removeAttribute("skipConfirm");fieldDiv.querySelector("#"+name+"_Date").value=data.startDate;fieldDiv.querySelector("#"+name+"_Time").value=data.startTime;fieldDiv.querySelector("#"+name+"_patternLabel").textContent=pattern.ReturnLabelAndEmpty();break;case"latlong":var data=JSON.parse(dataValue);field.value=data.Point;fieldDiv.querySelector("#"+name+"_Lat").value=data.Latitude;fieldDiv.querySelector("#"+name+"_Long").value=data.Longitude;break;case"dropdown":field.value=dataValue;break;case"radio":field.value=dataValue;var r=fieldDiv.querySelectorAll("input[name='"+name+"']");if(r.length&&r.length>0)
for(var ii=0;ii<r.length;ii++)
r[ii].checked=(r[ii].value==dataValue);else
r.checked=(r.value==dataValue);break;case"filepicker":field.value=dataValue;break;case"freeform":document.getElementById(name+"_preview").innerHTML=dataValue;field.value=dataValue;break;case"textarea":field.value=dataValue;break;case"xmltextarea":field.value=dataValue;break;case"textbox":field.value=dataValue;break;}},ParseDateTime:function(dateString){var dateTime=null;if(Date.parse&&!isNaN(Date.parse(dateString)))
dateTime=new Date(Date.parse(dateString));return dateTime;},ToDateTimeString:function(dateObj,doDate,doTime){if(dateObj==null)
return"";var d=String(dateObj.getMonth()+1)+"/"+String(dateObj.getDate())+"/"+String(dateObj.getFullYear()),t="";if(doTime){var isAM=(dateObj.getHours()<12),hours=dateObj.getHours(),minutes=dateObj.getMinutes();hours=(hours==0)?12:(hours>12)?hours-12:hours;t=String(hours)+((minutes<10)?":0":":")+String(minutes)+((isAM)?" AM":" PM");}
return((doDate)?d:"")+((doDate&&doTime)?" ":"")+((doTime)?t:"");},UpdateDateTime:function(fieldName){var field=document.getElementById("cmsForms_"+fieldName),date=document.getElementById(fieldName+"_Date"),time=document.getElementById(fieldName+"_Time");field.value=date.value+" "+time.value;},UpdateLatLong:function(fieldName){var field=document.getElementById("cmsForms_"+fieldName),lat=SFTrim(SFGetEditValue(fieldName+"_Lat")),lng=SFTrim(SFGetEditValue(fieldName+"_Long"));if(lat==""&&lng==""){field.value="POINT EMPTY";return;}
var pLat=ParseLatitude(lat),pLng=ParseLongitude(lng);field.value="POINT ("+pLng.Longitude+" "+pLat.Latitude+")";},_getFieldContainer:function(target){while(target.nodeName!="DIV"||!target.attributes["fieldType"]||!target.attributes["fieldName"]){target=target.parentNode;if(!target||!target.nodeName)
return null;}
return target;},OpenEditor:function(path,itemID){tic_Utilities.CancelBubble();var args={Title:(itemID==-1)?"Create New":"Editing",MaxWidth:900,MaxHeight:615,Path:path};tic_RadWindowOps.DisplayDialogWithUrl2("EditorDialog","/display/components/Blocks/DataEditor/Support/DataEditorDialog.aspx?DataID="+itemID,400,200,args,"",null,true);},OpenDialog:function(name,evt){tic_Utilities.CancelBubble();var field=document.getElementById("cmsForms_"+name),container=DataEditor._getFieldContainer(field),type=container.getAttribute("fieldType"),blockID=container.getAttribute("blockID"),processingKey=document.getElementById("cmsFormsControl_"+blockID+"_ProcessingKey"),args={Title:field.getAttribute("title"),MaxWidth:1000,MaxHeight:(type=="freeform")?665:555,FieldID:field.id,FieldType:type,FieldName:name,DocID:processingKey.getAttribute("docID"),ItemID:processingKey.getAttribute("itemID"),BlockID:blockID,PrevArgs:"",GetInitData:DataEditor.GetInitData,Callback:DataEditor.Callback};if(type!="freeform"){args.PrevArgs=JSON.stringify(DataEditor.GetInitData(type,field.id));if(!evt){args.Ctl=ItemList.GetSelectedItem(name);args.SilentDelete=ItemList.SilentDelete;}}
tic_RadWindowOps.DisplayDialogWithUrl2("FieldDialog","/display/components/Blocks/DataEditor/Support/FieldDialog.aspx",400,200,args,"",null,true);},GetInitData:function(type,fieldID){var inputCtl=document.getElementById(fieldID);if(type=="freeform")
return document.getElementById(inputCtl.getAttribute("FieldName")+"_preview").innerHTML;else if(type=="filepicker"){return{url:inputCtl.value,type:"21",newwin:"0",text:""};}
else{var li=ItemList.GetSelectedItem(inputCtl.getAttribute("FieldName"));if(!li)
return;var nameSpan=li.querySelector("span.name"),prevUrl="",prevType="2",prevNewWin="0",prevLinkedText="";if(li.getAttribute("value")&&li.getAttribute("value")!="1")
prevUrl=li.getAttribute("value");if(li.getAttribute("titan-linkType"))
prevType=li.getAttribute("titan-linkType");if(li.getAttribute("titan-useNewWindow"))
prevNewWin=li.getAttribute("titan-useNewWindow");if(nameSpan.textContent)
prevLinkedText=nameSpan.textContent;else if(nameSpan.innerText)
prevLinkedText=nameSpan.innerText;return{url:prevUrl,type:prevType,newwin:prevNewWin,text:prevLinkedText};}},Callback:function(type,fieldID,data){var ctl=document.getElementById(fieldID);if(type=="freeform"){document.getElementById(ctl.getAttribute("FieldName")+"_preview").innerHTML=data;ctl.value=data;}
else if(type=="filepicker"){ctl.value=data.href;}
else{var baseID=ctl.getAttribute("FieldName"),optionList=ItemList.GetFieldset(baseID),selected=ItemList.GetSelectedItem(baseID),linkedTextSpan=selected.querySelector("span.name"),linkSpan=selected.querySelector("span.link"),textArea=selected.querySelector("textarea");var titlePrefix="* ";switch(data.linkType){case"2":titlePrefix+="Page Link - ";break;case"3":titlePrefix+="External Link - ";break;case"4":titlePrefix+="File Link - ";break;case"5":titlePrefix+="MailTo Link - ";break;case"8":titlePrefix+="Data Link - ";break;case"9":titlePrefix+="Tel Link - ";break;}
selected.setAttribute("value",data.linkText);selected.setAttribute("title",titlePrefix+data.linkText);selected.setAttribute("titan-linkType",data.linkType);selected.setAttribute("titan-useNewWindow",(data.target=="_blank")?"1":"0");if(SFTrim(data.attributeData.linkedText).length==0)
data.attributeData.linkedText=data.linkText;if(linkedTextSpan.textContent)
linkedTextSpan.textContent=data.attributeData.linkedText;else if(linkedTextSpan.innerText)
linkedTextSpan.innerText=data.attributeData.linkedText;if(linkSpan.textContent)
linkSpan.textContent=data.linkText;else if(linkSpan.innerText)
linkSpan.innerText=data.linkText;textArea.innerHTML=JSON.stringify(data);ItemList.SetChanged(baseID);ItemList.FocusFieldset(baseID);}},Submit:function(docID,blockID,doConfirm,submitAction){var processingKey=document.getElementById("cmsFormsControl_"+blockID+"_ProcessingKey"),token=processingKey.getAttribute("token"),key=document.getElementById("cmsForms_"+blockID+"_key").value,data=[];var textareas=document.querySelectorAll("div[fieldtype='freeform'], div[fieldtype='xmltextarea']"),itemLists=document.querySelectorAll("div[fieldtype='linkpicker'], div[fieldtype='multifilepicker']"),recurringDates=document.querySelectorAll("div[fieldtype='datetimerecur']");for(var ta=0;ta<textareas.length;ta++){var id="cmsForms_"+textareas[ta].getAttribute("fieldName");data.push({FieldName:id,FieldValue:document.getElementById(id).value});}
for(var il=0;il<itemLists.length;il++){var name=itemLists[il].getAttribute("fieldName"),id="cmsForms_"+name,xml=ItemList.PackageData(name,false);document.getElementById(id).value=(xml!="")?"1":"";data.push({FieldName:id,FieldValue:xml});}
for(var rd=0;rd<recurringDates.length;rd++){var name=recurringDates[rd].getAttribute("fieldName"),id="cmsForms_"+recurringDates[rd].getAttribute("fieldName"),xml=RecurringDate.PackageData(name);document.getElementById(id).value=(xml!="")?"1":"";data.push({FieldName:id,FieldValue:xml});}
TitanDisplayServiceWrapper.MakeWebServiceCall("EncodeFieldData"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.DataEditorDisplayAjax.EncodeFieldData,[data,token,key],DataEditor.SubmitCallback,[docID,blockID,doConfirm,submitAction],true);},SubmitCallback:function(docID,blockID,doConfirm,submitAction,responseAsJSON,responseAsText,responseAsXml){DataEditor.RedirectIfNeeded(responseAsJSON);if(responseAsJSON&&responseAsJSON.data)
document.getElementById("cmsFormsControl_"+blockID+"_decode").value=JSON.stringify(responseAsJSON.data);DataEditor.SubmitForm(docID,blockID,doConfirm,submitAction);},SubmitForm:function(docID,blockID,doConfirm,submitAction){var isValid=SFGeneralValidate(docID,blockID,"0",window["FormSpecificValidation"]);if(!isValid)
return;if(doConfirm=="1")
return SFConfirmForm(blockID);if(tic_RadWindowOps.GetRadWindow())
DataEditorDialog.PostValidatePrep();DataEditor.FinalFormSubmit(docID,blockID,submitAction);},FinalFormSubmit:function(docID,blockID,submitAction){SFReturnToEdit(blockID);tic_Utilities.ShowHideById("DataDiv_"+blockID,false);internal_HandleProcessingKey(blockID);var encodedFields=JSON.parse(document.getElementById("cmsFormsControl_"+blockID+"_decode").value);for(var i=0;i<encodedFields.length;i++)
document.getElementById(encodedFields[i].FieldName).value=encodedFields[i].FieldValue;var packagedData=internal_PackageFormData(blockID),itemID=document.getElementById("cmsFormsControl_"+blockID+"_ProcessingKey").getAttribute("itemID"),ajaxArgs=[docID,blockID,itemID,packagedData,encodedFields];var finalCallback=SFFormSubmitComplete,callbackArgs=[blockID,submitAction];if(tic_RadWindowOps.GetRadWindow()){finalCallback=DataEditorDialog.Complete;}
SFRemoveMessage("formsubmit",blockID);TitanDisplayServiceWrapper.MakeWebServiceCall("DataEditorSubmit"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.DataEditorDisplayAjax.ProcessSubmit,ajaxArgs,DataEditor.FinalFormSubmitCallback,[finalCallback,callbackArgs],true);},FinalFormSubmitCallback:function(callback,callbackArgs,responseAsJSON,responseAsText,responseAsXml){DataEditor.RedirectIfNeeded(responseAsJSON);callbackArgs[callbackArgs.length]=responseAsJSON;callbackArgs[callbackArgs.length]=responseAsText;callbackArgs[callbackArgs.length]=responseAsXml;callback.apply(window,callbackArgs);},RedirectIfNeeded:function(returnData){if(!returnData.statusCode||returnData.statusCode===200)
return;var loc=location;if(tic_RadWindowOps.GetRadWindow())
loc=tic_RadWindowOps.GetRadWindow().location;if(returnData.statusCode===401)
loc.reload(true);}};function DisplaySideUpload_Expand(dataArea,link)
{if(document.getElementById(dataArea).style.display=="none")
{document.getElementById(dataArea).style.display="block";document.getElementById(link).innerHTML="Hide Upload Data";}
else
{document.getElementById(dataArea).style.display="none";document.getElementById(link).innerHTML="Upload File";}}
function DisplaySideUpload_Upload(btnCtl,baseID)
{if(document.getElementById(baseID+"_submitAction"))
document.getElementById(baseID+"_submitAction").value="1";document.getElementById(baseID+"_fileName").value=document.getElementById(baseID+"_fileUploader").value;btnCtl.disabled=true;window.setTimeout("document.forms[0].submit()",0);}
var TitanDisplayServiceWrapper={gCallbackQueue:new Array(),SaferEval:function(script)
{if(!script||script.indexOf("TITAN")!=0)
return"";if(script)
{try
{return eval(script.substring(5));}
catch(e)
{return window.alert("JSLoad: "+e.message);}}},EvalJavascript:function(script)
{if(script)
{try
{return eval(script);}
catch(e)
{return window.alert("JSLoad: "+e.message);}}},WebServiceCallComplete:function(results,context,methodName)
{var callInfo=null;if(TitanDisplayServiceWrapper.gCallbackQueue.length)
callInfo=TitanDisplayServiceWrapper.gCallbackQueue[0];if(callInfo&&!callInfo.discard)
{var matchesExist=false;for(var ii=1;ii<TitanDisplayServiceWrapper.gCallbackQueue.length;++ii)
if(TitanDisplayServiceWrapper.gCallbackQueue[ii].name==callInfo.name&&TitanDisplayServiceWrapper.gCallbackQueue[ii].canSkip)
{matchesExist=true;break;}
if(!matchesExist&&callInfo.postOp)
{var callInfoArgs=callInfo.postOpArgs;callInfoArgs[callInfoArgs.length]=results;callInfoArgs[callInfoArgs.length]=context;callInfoArgs[callInfoArgs.length]=methodName;callInfo.postOp.apply(window,callInfoArgs);}}
TitanDisplayServiceWrapper.gCallbackQueue.shift();document.body.style.cursor="default";if(TitanDisplayServiceWrapper.gCallbackQueue.length)
TitanDisplayServiceWrapper.ActualAsyncCall();},WebServiceErrorFunction:function(myArgs)
{if(myArgs._statusCode!=0)
window.alert("An error was encountered processing your request");},ClearWebServiceQueue:function(name)
{var newQueue=[];if(TitanDisplayServiceWrapper.gCallbackQueue.length>0)
{newQueue[0]=TitanDisplayServiceWrapper.gCallbackQueue[0];newQueue[0].discard=true;}
for(var ii=1;ii<TitanDisplayServiceWrapper.gCallbackQueue.length;++ii)
if(TitanDisplayServiceWrapper.gCallbackQueue[ii].name!=name)
newQueue.push(TitanDisplayServiceWrapper.gCallbackQueue[ii]);TitanDisplayServiceWrapper.gCallbackQueue=newQueue;},MakeWebServiceCall:function(name,webServiceFunction,arrayOfArgs,postOpFunction,postOpArguments,canSkip)
{arrayOfArgs[arrayOfArgs.length]=TitanDisplayServiceWrapper.WebServiceCallComplete;arrayOfArgs[arrayOfArgs.length]=TitanDisplayServiceWrapper.WebServiceErrorFunction;var newQueueItem={name:name,callName:webServiceFunction,args:arrayOfArgs,postOp:postOpFunction,postOpArgs:postOpArguments,canSkip:canSkip,discard:false};if(canSkip)
{for(var ii=1;ii<TitanDisplayServiceWrapper.gCallbackQueue.length;++ii)
if(TitanDisplayServiceWrapper.gCallbackQueue[ii].name==name&&TitanDisplayServiceWrapper.gCallbackQueue[ii].canSkip)
{TitanDisplayServiceWrapper.gCallbackQueue[ii]=newQueueItem;return;}}
TitanDisplayServiceWrapper.gCallbackQueue.push(newQueueItem);if(TitanDisplayServiceWrapper.gCallbackQueue.length==1)
TitanDisplayServiceWrapper.ActualAsyncCall();},ActualAsyncCall:function()
{if(TitanDisplayServiceWrapper.gCallbackQueue.length==0)
return;var callInfo=TitanDisplayServiceWrapper.gCallbackQueue[0];callInfo.callName.apply(window,callInfo.args);}};function Login_ToUSubmit(blockID)
{var touCheck=document.getElementById("agreeToToU"+blockID);if(!touCheck)
return;if(!touCheck.checked)
return document.getElementById("touError"+blockID).style.display="block";tic_Utilities.DisableButtons();document.forms[0].submit();}
function Login_ChangePassword(blockID)
{var userCtl=document.getElementById("username"+blockID);var oldPass=document.getElementById("oldpassword"+blockID);var passCtl1=document.getElementById("newpassword1"+blockID);var passCtl2=document.getElementById("newpassword2"+blockID);if(!(userCtl&&oldPass&&passCtl1&&passCtl2))
return;var user=tic_Utilities.Trim(userCtl.value);var old=tic_Utilities.Trim(oldPass.value);var new1=tic_Utilities.Trim(passCtl1.value);var new2=tic_Utilities.Trim(passCtl2.value);var badInfoCtl=document.getElementById("badInfo"+blockID);badInfoCtl.innerHTML=""
if(!(user&&old&&new1&&new2))
return badInfoCtl.innerHTML="All values must be provided";if(new1!=new2)
return badInfoCtl.innerHTML="New password values do not match";if(old==new2)
return badInfoCtl.innerHTML="New password cannot be the same as old password";tic_Utilities.DisableButtons();document.forms[0].submit();}
function Login_ForgotPassword1(blockID)
{var loginPrompt=document.getElementById("login_forgotName_"+blockID);if(!loginPrompt)
return;if(!tic_Utilities.Trim(loginPrompt.value))
return document.getElementById("forgot_ErrorDiv"+blockID).style.display="block";tic_Utilities.DisableButtons();document.forms[0].submit();}
function Login_ForgotPassword2(blockID)
{var regex=new RegExp("login_Response_\\d*_"+blockID);var allElements=document.forms[0].elements;for(var ii=0;ii<allElements.length;++ii)
{var ctl=allElements[ii];if(!ctl.id)
continue;if(regex.test(ctl.id)&&!tic_Utilities.Trim(ctl.value))
return document.getElementById("forgetError"+blockID).style.display="block";}
document.getElementById("login_forgetSubmitted_"+blockID).value="1";tic_Utilities.DisableButtons();document.forms[0].submit();}
function Registration_CreateAccount(blockID,loginIsEmail)
{if(Registration_ValidateForm(blockID,true,loginIsEmail))
{tic_Utilities.DisableButtons();document.forms[0].submit();}}
function Registration_ValidateForm(blockID,isCreate,loginIsEmail)
{var staticErrorDiv=document.getElementById("reg_StaticError"+blockID);if(staticErrorDiv)
staticErrorDiv.style.display="none";var errorDiv=document.getElementById("reg_errorDiv"+blockID);errorDiv.style.display="none";var allElts=document.forms[0].elements;var myCtlTest=new RegExp("^reg_.*"+String(blockID)+"$");var errorLis="";for(var ii=0;ii<allElts.length;++ii)
{var ctl=allElts[ii];if(!myCtlTest.test(ctl.id))
continue;var errorString="";if(ctl.getAttribute("required")=="1"&&!tic_Utilities.Trim(ctl.value))
errorString=ctl.getAttribute("requiredText");var extraValidation=ctl.getAttribute("validation");if(!errorString&&extraValidation)
{if(!window[extraValidation])
{window.alert("Missing validation function: "+extraValidation);continue;}
errorString=window[extraValidation](blockID,loginIsEmail,isCreate,ctl);}
if(errorString)
{tic_Utilities.AddStyle(ctl.parentNode,"error");errorLis+="<li>"+errorString+"</li>"}
else
tic_Utilities.RemoveStyle(ctl.parentNode,"error");}
if(errorLis)
{document.getElementById("reg_errorUL"+blockID).innerHTML=errorLis;errorDiv.style.display="block";errorDiv.scrollIntoViewIfNeeded(true,true);return false;}
document.getElementById("reg_FormSubmit"+blockID).value="1";return true;}
function Registration_TermsChecked(blockID,loginIsEmail,isCreate,ctl)
{return(ctl.checked?"":"You must acknowledge the Terms of Use");}
function Registration_PasswordValidate(blockID,loginIsEmail,isCreate,ctl)
{if(isCreate&&!tic_Utilities.Trim(ctl.value))
return"Please provide a password";if(tic_Utilities.Trim(ctl.value)&&tic_Utilities.Trim(ctl.value)!=tic_Utilities.Trim(document.getElementById("reg_Password2"+blockID).value))
return"Password fields do not match";var oldPasswordCtl=document.getElementById("reg_OldPassword"+blockID);if(oldPasswordCtl&&tic_Utilities.Trim(ctl.value)&&!tic_Utilities.Trim(oldPasswordCtl.value))
return"Current password must be provided to change your password";if(oldPasswordCtl&&tic_Utilities.Trim(oldPasswordCtl.value)&&tic_Utilities.Trim(ctl.value)==tic_Utilities.Trim(oldPasswordCtl.value))
return"New password cannot match old password";if(ctl.value.indexOf("<")>=0||ctl.value.indexOf(">")>=0)
return"New password cannot contain angle brackets (i.e., <, >)";return"";}
function Registration_GetLabelText(ctl)
{var labels=ctl.parentNode.getElementsByTagName("LABEL");if(!labels||labels.length==0)
return"";var label=labels[0].innerHTML;if(label.indexOf('<')>=0)
return label.substring(0,label.indexOf('<'));if(label.indexOf(':')>=0)
return label.substring(0,label.indexOf(':'));return label;}
function Registration_IsEmail(blockID,loginIsEmail,isCreate,ctl)
{if(!tic_Utilities.Trim(ctl.value))
return"";if(!SFEditFieldIsEmail(ctl))
return"Invalid email format for "+Registration_GetLabelText(ctl);return"";}
function Registration_LoginIsEmail(blockID,loginIsEmail,isCreate,ctl)
{if(!isCreate||!tic_Utilities.Trim(ctl.value)||!loginIsEmail)
return"";if(!SFEditFieldIsEmail(ctl))
return"Your login name must be a valid email address";return"";}
function Registration_LoginMatches(blockID,loginIsEmail,isCreate,ctl)
{if(!isCreate||!tic_Utilities.Trim(ctl.value))
return"";if(tic_Utilities.Trim(ctl.value)&&tic_Utilities.Trim(ctl.value)!=tic_Utilities.Trim(document.getElementById("reg_UserCN"+blockID).value))
return(loginIsEmail?"Email":"Login")+" values do not match";return"";}
function Registration_IsPhone(blockID,loginIsEmail,isCreate,ctl)
{if(!tic_Utilities.Trim(ctl.value))
return"";var countryCtl=document.getElementById("reg_Country"+blockID);var nonUSValue=(countryCtl&&tic_Utilities.Trim(countryCtl.value)&&tic_Utilities.Trim(countryCtl.value)!="United States");if(!SFEditFieldIsPhone(ctl,nonUSValue))
return"Invalid phone number format for "+Registration_GetLabelText(ctl);return"";}
function Registration_HintQuestion(blockID,loginIsEmail,isCreate,ctl)
{var ctlID=ctl.id;var ctlID=ctlID.substring(0,ctlID.length-String(blockID).length);var counter=ctlID.substring(ctlID.lastIndexOf("_")+1);var answer1=tic_Utilities.Trim(document.getElementById("reg_HintResponse_"+counter+blockID).value);var answer2=tic_Utilities.Trim(document.getElementById("reg_HintResponse2_"+counter+blockID).value);var questionChanged=(tic_Utilities.Trim(ctl.defaultValue)!=tic_Utilities.Trim(ctl.value));if(!answer1&&!answer2&&!isCreate&&!questionChanged)
return"";if((!answer1||!answer2)&&(questionChanged&&!isCreate))
return"You have changed "+Registration_GetLabelText(ctl)+'. Please provide new responses';if(!answer1)
return"Please provide "+Registration_GetLabelText(document.getElementById("reg_HintResponse_"+counter+blockID));if(!answer2)
return"Please provide "+Registration_GetLabelText(document.getElementById("reg_HintResponse2_"+counter+blockID));if(answer1!=answer2)
return"Password hint responses for "+Registration_GetLabelText(ctl)+" do not match.";return"";}
function Registration_SaveChanges(blockID)
{if(Registration_ValidateForm(blockID,false,false))
{tic_Utilities.DisableButtons();document.forms[0].submit();}}
function NavInjectionHref(href,evt)
{tic_Utilities.CancelBubble(evt);location.href=href;return false;}
function GoBack(evt)
{tic_Utilities.CancelBubble(evt);history.back();return false;}
function RouterValidation()
{if(window.ValidatorOnSubmit)
return ValidatorOnSubmit();return true;}
function MoveViewState()
{if(document.forms.length==0)
return;if(window["SetupCaptchaInfo"])
SetupCaptchaInfo();var topLevelViewStateVars=document.forms[0]["__VIEWSTATE"];if(topLevelViewStateVars==null)
return;if(topLevelViewStateVars.length)
{for(var ii=1;ii<topLevelViewStateVars.length;++ii)
topLevelViewStateVars[ii].name="EmbeddedControlViewState";}
var target=location.pathname+location.search;target=target.replace("?","\\?");var myPattern=new RegExp(target,"gi");var viewStateData=document.getElementsByName("__VIEWSTATE")[0].value;for(var ii=0;ii<document.forms.length;++ii)
{var aForm=document.forms[ii];if(aForm.action.match(myPattern)!=null&&aForm.__VIEWSTATE!=null)
aForm.__VIEWSTATE.value=viewStateData;}}
var g_playerCtls=[];function TitanLoad()
{if(window["MoveViewState"])
MoveViewState();var flowSettings=document.getElementById("flowPlayerSettings");if(!flowSettings)
return;g_playerCtls.length=0;var allDivs=document.body.getElementsByTagName("DIV");for(var ii=0;ii<allDivs.length;++ii)
if(allDivs[ii].className=="titanFlowHolder")
g_playerCtls.push(allDivs[ii]);if(g_playerCtls.length==0)
return;var baseDir=flowSettings.getAttribute("baseDir"),js=flowSettings.getAttribute("js");if(!baseDir||!js)
return;tic_Utilities.LoadScriptFile(baseDir+js);window.setTimeout(TitanFlowPlayer,100);}
function TitanFlowPlayer()
{if(g_playerCtls.length==0)
return;if(!window["flowplayer"])
return window.setTimeout(TitanFlowPlayer,100);var flowSettings=document.getElementById("flowPlayerSettings"),baseDir=flowSettings.getAttribute("baseDir"),swf=baseDir+flowSettings.getAttribute("swf"),pseudo=baseDir+flowSettings.getAttribute("pseudo"),keyArray=[],keyCtl=document.getElementById("flowPlayerKeys");if(keyCtl){var keys=keyCtl.value.split(' ');for(var jj=0;jj<keys.length;++jj){var key=tic_Utilities.Trim(keys[jj]);if(key.length)
keyArray.push(key);}}
for(var ii=0;ii<g_playerCtls.length;++ii){var settings={wmode:'opaque',clip:{},plugins:{pseudo:{},controls:{}}},fadeIn=g_playerCtls[ii].getAttribute("fadin"),fadeOut=g_playerCtls[ii].getAttribute("fadeout"),template=g_playerCtls[ii].getAttribute("templates");if(keyArray.length)
settings.key=keyArray;settings.clip.url=g_playerCtls[ii].getAttribute("filename");settings.clip.provider="pseudo";settings.clip.scaling=g_playerCtls[ii].getAttribute("scaling");settings.clip.autoPlay=(g_playerCtls[ii].getAttribute("autoplay")=="1");settings.clip.autoBuffering=(g_playerCtls[ii].getAttribute("autobuffering")=="1");settings.clip.fadeInSpeed=((fadeIn=='slow')?2000:((fadeIn=='medium')?1000:500));settings.clip.fadeOutSpeed=((fadeOut=='slow')?2000:((fadeOut=='medium')?1000:500));settings.plugins.pseudo.url=pseudo;settings.plugins.controls.stop=(g_playerCtls[ii].getAttribute("stopbutton")=="1");settings.plugins.controls.scrubber=(g_playerCtls[ii].getAttribute("progressbar")=="1");settings.plugins.controls.fullscreen=(g_playerCtls[ii].getAttribute("fullscreen")=="1");if(flowSettings.getAttribute(template))
settings.plugins.controls.url=baseDir+flowSettings.getAttribute(template);if(settings.clip.autoPlay)
g_playerCtls[ii].innerHTML="";else if(g_playerCtls[ii].getAttribute("staticimage"))
settings.clip.autoPlay=true;else
g_playerCtls[ii].innerHTML="";flowplayer(g_playerCtls[ii],swf,settings);}}
function SS_BlocketteUniqueID(docID,blockID,position,isNav)
{return(isNav?"blocketteNav":"blockette")+String(docID)+"_"+String(position)+"_"+String(blockID);}
function SS_GetDocIDFromBlockID(blockID)
{var root=FilterBlocks_GetFilterDocumentRoot(FilterBlocks_MakePrefix(blockID));if(!root)
return-1;return root.getAttribute("DocID");}
var SS_SortOps={Reset:function(blockID,isLoading,sortOptions)
{var toolsDiv=document.getElementById("SSTools"+String(blockID));var sortDiv=document.getElementById("SSSortDiv"+String(blockID));var sortCtl=document.getElementById("SSSort"+String(blockID));if(!toolsDiv||!sortDiv||!sortCtl)
return;if(isLoading)
{SS_MinMax.Set(blockID,'max')
toolsDiv.style.display="none";return;}
toolsDiv.style.display="block";var optPairs=[];if(sortOptions)
optPairs=TitanDisplayServiceWrapper.SaferEval(sortOptions);sortDiv.style.display=(optPairs.length)?"block":"none";sortCtl.style.display=(optPairs.length)?"block":"none";if(!optPairs.length)
return;sortCtl.options.length=0;for(var ii=0;ii<optPairs.length;++ii)
{var newOpt=new Option(optPairs[ii].text,optPairs[ii].value);if(optPairs[ii].selected=="1")
newOpt.selected=1;newOpt.setAttribute("dir",optPairs[ii].dir);sortCtl.options[sortCtl.options.length]=newOpt;}},GetValues:function(blockID)
{var toolsDiv=document.getElementById("SSTools"+String(blockID));var sortDiv=document.getElementById("SSSortDiv"+String(blockID));var sortCtl=document.getElementById("SSSort"+String(blockID));if(!toolsDiv||!sortDiv||!sortCtl)
return null;if(toolsDiv.style.display=="none"||sortDiv.style.display=="none"||sortCtl.style.display=="none")
return null;var selectedIdx=sortCtl.selectedIndex;if(selectedIdx<0)
return null;var opt=sortCtl.options[selectedIdx];if(!opt)
return null;return{sortKey:opt.value,sortDir:opt.getAttribute("dir")};}};var SS_ResultsOps={Divs:function(blockID)
{var allDivs=[];var containerDiv=document.getElementById("SegmentedSearchBody_"+String(blockID));if(!containerDiv)
return allDivs;var childNodes=containerDiv.childNodes;for(var ii=0;ii<childNodes.length;++ii)
{var div=childNodes[ii];if(div.id&&div.getAttribute("docID"))
allDivs[allDivs.length]=div;}
return allDivs;},Get:function(docID,blockID,position)
{return document.getElementById(SS_BlocketteUniqueID(docID,blockID,position,false));},Hide:function(docID,blockID,position)
{var div=SS_ResultsOps.Get(docID,blockID,position);if(div)
div.style.display="none";},NoResultsView:function(blockID,isNothing)
{var emptyDiv=document.getElementById("noResultsFound"+String(blockID));if(!emptyDiv)
return;emptyDiv.style.display=isNothing?"block":"none";},OneResultsView:function(docID,blockID,position)
{var containerDiv=document.getElementById("SegmentedSearchBody_"+String(blockID));tic_Utilities.AddStyle(containerDiv,"fullSegment");var keeperDivID=SS_BlocketteUniqueID(docID,blockID,position,false);var keeperNavID=SS_BlocketteUniqueID(docID,blockID,position,true);var allDivs=SS_ResultsOps.Divs(blockID);for(var ii=0;ii<allDivs.length;++ii)
if(allDivs[ii].id&&allDivs[ii].id!=keeperDivID)
allDivs[ii].style.display="none";SS_NavOps.ClearCounts(blockID);tic_Positioning.ScrollToElementById(keeperDivID);}};var SS_NavOps={_NavRoots:function(blockID)
{var allRoots=[];var container=document.getElementById("SegmentedSearchNav_"+String(blockID));if(!container)
return allRoots;var childNodes=container.childNodes;for(var ii=0;ii<childNodes.length;++ii)
{var li=childNodes[ii];if(li.onclick&&li.id&&li.id.indexOf("blocketteNav")==0)
allRoots[allRoots.length]=li;}
return allRoots;},SelectedAction:function(blockID)
{var navRoots=SS_NavOps._NavRoots(blockID);for(var ii=0;ii<navRoots.length;++ii)
if(tic_Utilities.HasStyle(navRoots[ii],"selected"))
return tic_Utilities.HasStyle(navRoots[ii],"everything")?"Everything":"TopLevel";return"Everything";},SelectedPosition:function(blockID)
{var navRoots=SS_NavOps._NavRoots(blockID);for(var ii=0;ii<navRoots.length;++ii)
if(tic_Utilities.HasStyle(navRoots[ii],"selected"))
return ii;return 0;},_ClearCount:function(item)
{if(!item||item.id.indexOf("blocketteNav")!=0)
return;var allSpans=item.getElementsByTagName("SPAN");if(allSpans.length>1)
allSpans[1].innerHTML="";},_SetCount:function(item,count)
{if(!item||item.id.indexOf("blocketteNav")!=0)
return;var allSpans=item.getElementsByTagName("SPAN");if(allSpans.length>1)
allSpans[1].innerHTML=" ("+count+")";},ClearCounts:function(blockID)
{var allNavRoots=SS_NavOps._NavRoots(blockID);for(var ii=0;ii<allNavRoots.length;++ii)
SS_NavOps._ClearCount(allNavRoots[ii]);},UpdateCounts:function(docID,blockID,position,count)
{if(count==0)
SS_ResultsOps.Hide(docID,blockID,position);var myID=SS_BlocketteUniqueID(docID,blockID,position,true);var allRoots=SS_NavOps._NavRoots(blockID);var pending=false;var totalCount=0;for(var ii=0;ii<allRoots.length;++ii)
{if(tic_Utilities.HasStyle(allRoots[ii],"everything"))
{totalCount=Number(allRoots[ii].getAttribute("total"))+count;allRoots[ii].setAttribute("total",totalCount);}
else if(allRoots[ii].id==myID)
{SS_NavOps._SetCount(allRoots[ii],count);allRoots[ii].setAttribute("pending","0");}
else
pending|=(allRoots[ii].getAttribute("pending")=="1");}
return pending||totalCount;},EverythingIsSelected:function(blockID)
{var allRoots=SS_NavOps._NavRoots(blockID);if(allRoots.length>0&&tic_Utilities.HasStyle(allRoots[0],"everything"))
return tic_Utilities.HasStyle(allRoots[0],"selected");return false;},ResetTopLevel:function(blockID,newSelectedID,isEverything,hideSubNav)
{var containerDiv=document.getElementById("SegmentedSearchBody_"+String(blockID));tic_Utilities.RemoveStyle(containerDiv,"fullSegment");var prevSelectedID=null;var allRoots=SS_NavOps._NavRoots(blockID);for(var ii=0;ii<allRoots.length;++ii)
{if(tic_Utilities.HasStyle(allRoots[ii],"everything"))
allRoots[ii].setAttribute("total",0);else if(isEverything||allRoots[ii].id==newSelectedID)
allRoots[ii].setAttribute("pending","1");if(tic_Utilities.HasStyle(allRoots[ii],"selected"))
prevSelectedID==allRoots[ii].id;if(allRoots[ii].id==newSelectedID)
tic_Utilities.AddStyle(allRoots[ii],"selected");else
tic_Utilities.RemoveStyle(allRoots[ii],"selected");SS_NavOps._ClearCount(allRoots[ii]);}
if(hideSubNav)
SS_NavOps.HideSubNav(blockID);},HideSubNav:function(blockID)
{var nav=FilterBlocks_GetFilterDocumentRoot(FilterBlocks_MakePrefix(blockID));if(nav)
nav.style.display="none";},SetSubNav:function(blockID,filterData,suggestionData)
{var nav=FilterBlocks_GetFilterDocumentRoot(FilterBlocks_MakePrefix(blockID));if(!nav||!filterData)
return;nav.innerHTML=filterData;if(suggestionData)
FilterBlocks_UpdateFilterSuggestions(blockID,suggestionData);FilterBlocks_UpdateFilterCounts(blockID,null);tic_Utilities.RemoveStyle(nav,"loading");nav.style.display="block";}};var SS_Keyword={ReloadGet:function(blockID,reloadValue)
{if(!document.getElementById("Keyword"+blockID))
return reloadValue;return document.getElementById("Keyword"+blockID).value;},Get:function(blockID)
{if(!document.getElementById("Keyword"+blockID))
return"";if(document.getElementById("KeywordSubmit"+blockID))
return document.getElementById("Keyword"+blockID).defaultValue;return document.getElementById("Keyword"+blockID).value;},Set:function(blockID,newValue)
{if(!document.getElementById("Keyword"+blockID))
return;document.getElementById("Keyword"+blockID).value=newValue;document.getElementById("Keyword"+blockID).defaultValue=newValue;},SetSuggestion:function(field,blockID,newHtml){if(!document.getElementById(field+blockID))
return;document.getElementById(field+blockID).innerHTML=newHtml;}};var SS_DateOps={_ExtractValue:function(blockID,whichOne,defaultValue)
{var root=SS_DateOps._GetRoot(blockID)
if(!root)
return defaultValue;if(root.tagName=="SELECT")
{var idx=root.selectedIndex;if(idx==-1||!root.options||root.options.length<idx)
return defaultValue;return root.options[idx].getAttribute(whichOne);}
else if(root.tagName=="DIV")
{var allRanges=root.getElementsByTagName("SPAN");for(var ii=0;ii<allRanges.length;++ii)
if(!tic_Utilities.HasStyle(allRanges[ii],"item"))
continue;else if(tic_Utilities.HasStyle(allRanges[ii].parentNode,"selected"))
return allRanges[ii].getAttribute(whichOne);return defaultValue;}},_GetLinks:function(root,blockID)
{return root.getElementsByTagName("SPAN");},_GetRoot:function(blockID)
{return document.getElementById("SSDateRange_"+String(blockID));},VerifySelection:function(blockID,evt)
{var root=SS_DateOps._GetRoot(blockID);if(!root)
return;if(root.tagName=="SELECT")
return;if(root.tagName!="DIV")
return;var span=tic_Utilities.GetTargetCtl(evt);if(!span)
return;var allRanges=SS_DateOps._GetLinks(root,blockID);for(var ii=0;ii<allRanges.length;++ii)
{if(!tic_Utilities.HasStyle(allRanges[ii],"item"))
continue;if(allRanges[ii]==span)
tic_Utilities.AddStyle(allRanges[ii].parentNode,"selected");else
tic_Utilities.RemoveStyle(allRanges[ii].parentNode,"selected");}},GetMin:function(blockID,position)
{return SS_DateOps._ExtractValue(blockID,"minValue",-9999);},GetMax:function(blockID,position)
{return SS_DateOps._ExtractValue(blockID,"maxValue",36500);}}
var SS_PageNum={Reset:function(blockID)
{SS_PageNum.Set(blockID,"1");},Get:function(blockID)
{var ctl=document.getElementById("PageNum"+blockID);if(!ctl||!ctl.value)
return 1;return ctl.value;},Set:function(blockID,pageNum)
{var ctl=document.getElementById("PageNum"+blockID);if(!ctl)
return;ctl.value=pageNum;}};var SS_MinMax={Set:function(blockID,direction)
{var ctl=document.getElementById("SegmentedSearchBody_"+blockID);if(direction=="min")
tic_Utilities.AddStyle(ctl,"min");else
tic_Utilities.RemoveStyle(ctl,"min");},Get:function(blockID)
{var ctl=document.getElementById("SegmentedSearchBody_"+blockID);if(!ctl)
return"max";return tic_Utilities.HasStyle(ctl,"min")?"min":"max";}};function SegmentedSearch_PageEvent(docID,blockID,newPageNum)
{SS_PageNum.Set(blockID,newPageNum);SegmentedSearch_AjaxSubmit(docID,blockID);}
function SegmentedSearch_ForceKeywordChange(docID,blockID,newKeyword)
{SS_Keyword.Set(blockID,newKeyword);SegmentedSearch_Resubmit(docID,blockID);}
function SegmentedSearch_KeywordSubmit(docID,blockID)
{SS_Keyword.Set(blockID,document.getElementById("Keyword"+blockID).value);SegmentedSearch_Resubmit(docID,blockID);}
function SegmentedSearch_KeywordFilter(docID,blockID)
{var keywordCtl=document.getElementById("Keyword"+blockID);RequeryTimer.KeyUp(keywordCtl,SegmentedSearch_AjaxKeyword,[docID,blockID]);}
function SegmentedSearch_MinMax(blockID,direction)
{return SS_MinMax.Set(blockID,direction);}
function SegmentedSearch_SortChanged(docID,blockID)
{return SegmentedSearch_PageEvent(docID,blockID,"1");}
function SegmentedSearch_RemoveSegSearchParams(params)
{if(!params)
return"";var retVal="&";var paramArray=params.split("&");for(var ii=0;ii<paramArray.length;++ii)
if(paramArray[ii].indexOf("SS_")==0);else if(paramArray[ii].length)
retVal+=paramArray[ii]+"&";return retVal.substring(1);}
function SegmentedSearch_Resubmit(docID,blockID)
{var params=window.location.search;if(params.indexOf("?")==0)
params=params.substring(1,params.length);params=FilterBlocks_RemoveExistingFilterBlockParams(params,true);params=SegmentedSearch_RemoveSegSearchParams(params);if(params.length&&params[params.length-1]!='&')
params+="&";window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+params+"Search_Keywords="+encodeURIComponent(SS_Keyword.Get(blockID));}
function SegmentedSearch_DateRangeChanged(docID,blockID,position,evt)
{SS_DateOps.VerifySelection(blockID,evt);SS_PageNum.Set(blockID,"1");SegmentedSearch_AjaxSubmit(docID,blockID);}
function SegmentedSearch_AjaxKeyword(docID,blockID){var args=[docID,blockID,SS_Keyword.Get(blockID)];TitanDisplayServiceWrapper.MakeWebServiceCall("GetKeywordSuggestions",NorthwoodsSoftwareDevelopment.Cms.WebServices.BlocketteAjax.GetKeywordSuggestions,args,SegmentedSearch_AjaxKeywordComplete,[docID,blockID],false);}
function SegmentedSearch_AjaxKeywordComplete(docID,blockID,resultsAsJSON){SS_Keyword.SetSuggestion("TryThis",blockID,resultsAsJSON.tryThisHtml);SS_Keyword.SetSuggestion("DidYouMean",blockID,resultsAsJSON.didYouMeanHtml);SegmentedSearch_AjaxSubmit(docID,blockID);}
function SegmentedSearch_AjaxSubmit(docID,blockID)
{SegmentedSearch_NavClick(docID,blockID,SS_NavOps.SelectedPosition(blockID),SS_NavOps.SelectedAction(blockID)+"Ajax",null);}
function SegmentedSearch_NavClick(docID,blockID,position,action,evt)
{tic_Utilities.CancelBubble(evt);if(action=="Everything"||action=="EverythingAjax")
{TitanDisplayServiceWrapper.ClearWebServiceQueue(SS_BlocketteUniqueID(docID,blockID,1,false));SS_NavOps.ResetTopLevel(blockID,SS_BlocketteUniqueID(docID,blockID,position,true),true,action=="Everything");var allDivs=SS_ResultsOps.Divs(blockID);for(var ii=0;ii<allDivs.length;++ii)
SegmentedSearch_MakeWebCall(action,allDivs[ii].getAttribute("docID"),allDivs[ii].getAttribute("blockID"),allDivs[ii].getAttribute("position"));}
else if(action=="TopLevel")
{TitanDisplayServiceWrapper.ClearWebServiceQueue(SS_BlocketteUniqueID(docID,blockID,1,false));SS_PageNum.Reset(blockID);SS_NavOps.ResetTopLevel(blockID,SS_BlocketteUniqueID(docID,blockID,position,true),false,true);SS_ResultsOps.OneResultsView(docID,blockID,position);SegmentedSearch_MakeWebCall(action,docID,blockID,position);}
else if(action=="TopLevelAjax")
{SS_NavOps.ResetTopLevel(blockID,SS_BlocketteUniqueID(docID,blockID,position,true),false,true);SS_ResultsOps.OneResultsView(docID,blockID,position);SegmentedSearch_MakeWebCall(action,docID,blockID,position);}}
function SegmentedSearch_AjaxComplete(action,docID,blockID,position,resultsAsJSON)
{if(resultsAsJSON.javascript){TitanDisplayServiceWrapper.EvalJavascript(resultsAsJSON.javascript);}
var div=SS_ResultsOps.Get(docID,blockID,position);if(div)
{tic_Utilities.RemoveStyle(div,"loading");div.style.display="block";div.innerHTML=resultsAsJSON.htmlData;}
if(!SS_NavOps.UpdateCounts(docID,blockID,position,resultsAsJSON.totalCount))
SS_ResultsOps.NoResultsView(blockID,true);SS_SortOps.Reset(blockID,SegmentedSearch_IsEverythingAction(action),resultsAsJSON.sortOptions);if(action!="Loading"&&action!="EverythingAjax")
SS_NavOps.SetSubNav(blockID,resultsAsJSON.updatedFilters,resultsAsJSON.suggestionUpdates);FilterBlocks_ResetFieldsetState(blockID);}
function SegmentedSearch_Recheck(blockID,docID)
{SegmentedSearch_AjaxSubmit(docID,blockID);}
function SegmentedSearch_IsEverythingAction(action)
{return action=="Loading"||action=="Everything"||action=="EverythingAjax";}
function SegmentedSearch_MakeWebCall(action,docID,blockID,position)
{var div=SS_ResultsOps.Get(docID,blockID,position);if(!div)
return;var sortOpts=(action=="TopLevel")?null:SS_SortOps.GetValues(blockID);var ajaxArgs=new Array();ajaxArgs[ajaxArgs.length]=action;ajaxArgs[ajaxArgs.length]=docID;ajaxArgs[ajaxArgs.length]=blockID;ajaxArgs[ajaxArgs.length]=position;ajaxArgs[ajaxArgs.length]=SS_PageNum.Get(blockID);ajaxArgs[ajaxArgs.length]=(sortOpts?sortOpts.sortKey:"");ajaxArgs[ajaxArgs.length]=(sortOpts?sortOpts.sortDir:"");ajaxArgs[ajaxArgs.length]=SS_Keyword.Get(blockID);ajaxArgs[ajaxArgs.length]=SegmentedSearch_FormatClassifications(action,FilterBlocks_MakePrefix(blockID));ajaxArgs[ajaxArgs.length]=SS_DateOps.GetMin(blockID);ajaxArgs[ajaxArgs.length]=SS_DateOps.GetMax(blockID);return SegmentedSearch_CommonWebCall(docID,blockID,ajaxArgs);}
function SegmentedSearch_CommonWebCall(docID,blockID,args)
{var div=SS_ResultsOps.Get(docID,blockID,args[3]);if(!div)
return;SS_ResultsOps.NoResultsView(blockID,false);tic_Utilities.AddStyle(div,"loading");div.style.display="block";var showArea=document.getElementById("searchResults"+String(blockID));if(showArea.innerHTML!=args[7])
showArea.innerHTML=args[7];TitanDisplayServiceWrapper.MakeWebServiceCall(SS_BlocketteUniqueID(docID,blockID,1,false),NorthwoodsSoftwareDevelopment.Cms.WebServices.BlocketteAjax.GetResultsData,args,SegmentedSearch_AjaxComplete,[args[0],docID,blockID,args[3]],!SegmentedSearch_IsEverythingAction(args[0]));}
function SegmentedSearch_FormatClassifications(action,prefix)
{if(action!="TopLevelAjax"||!FilterBlocks_HasClassifications(prefix))
return"NONE";return FilterBlocks_FormatClassifications(prefix);}
function CloneArray(sourceArray)
{var newArray=[];for(var ii=0;ii<sourceArray.length;++ii)
newArray[newArray.length]=sourceArray[ii];return newArray;}
function SegmentedSearch_ReloadPage(blockID,docID,args)
{if(args[3]!=0)
{var containerDiv=document.getElementById("SegmentedSearchBody_"+String(blockID));tic_Utilities.AddStyle(containerDiv,"fullSegment");return SegmentedSearch_CommonWebCall(docID,blockID,args);}
var allDivs=SS_ResultsOps.Divs(blockID);for(var ii=0;ii<allDivs.length;++ii)
{var cloned=CloneArray(args);cloned[3]=allDivs[ii].getAttribute("position");cloned[7]=SS_Keyword.ReloadGet(blockID,cloned[7]);SegmentedSearch_CommonWebCall(docID,blockID,cloned);}}
function SegmentedSearch_ClassificationSelectChange(blockID)
{return SegmentedSearch_ClassificationCheck(blockID);}
function SegmentedSearch_ClassificationLinkSelect(blockID,classID,container,evt)
{FilterBlocks_HandleCommonLinkSelect(blockID,classID,container,evt);return SegmentedSearch_ClassificationCheck(blockID);}
function SegmentedSearch_ClassificationCheck(blockID)
{SS_PageNum.Reset(blockID);SegmentedSearch_AjaxSubmit(SS_GetDocIDFromBlockID(blockID),blockID);}
function SegmentedSearch_ClassificationDynamicCheck(blockID,classID,ctl)
{FilterBlocks_ResetSelectClass(ctl,ctl.checked,blockID,classID);SegmentedSearch_ClassificationCheck(blockID);}
function SegmentedSearch_ResetClassificationLink(blockID,classID)
{return SegmentedSearch_ResetClassificationCheckbox(blockID,classID);}
function SegmentedSearch_ResetClassificationCheckbox(blockID,classID)
{FilterBlocks_ResetSelections(blockID,classID);SegmentedSearch_ClassificationCheck(blockID);}
function SearchResult_LogResultClick(blockID,evt){var target=tic_Utilities.GetTargetCtl(evt);if(target.tagName=="IMG")
target=target.parentNode;if(target.tagName!="A"||!target.hasAttribute("ResultID"))
return;var resultID=target.getAttribute("ResultID"),searchPhrase=SFGetEditValue("Search_Keywords"+blockID),fCallback=function(){var e=arguments[0];if(e._statusCode!==0&&console)
console.error("Error: "+e._message);};NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchResultsAjax.LogResultClick(resultID,searchPhrase,null,fCallback,window);}
function SegmentedSearch_LogResultClick(blockID,evt){var target=tic_Utilities.GetTargetCtl(evt);if(target.tagName=="IMG")
target=target.parentNode;if(target.tagName!="A"||!target.hasAttribute("ResultID"))
return;var resultID=target.getAttribute("ResultID"),searchPhrase=SFGetEditValue("Keyword"+blockID),fCallback=function(){var e=arguments[0];if(e._statusCode!==0&&console)
console.error("Error: "+e._message);};NorthwoodsSoftwareDevelopment.Cms.WebServices.BlocketteAjax.LogResultClick(resultID,searchPhrase,null,fCallback,window);}
var RequeryTimer={Timers:[],TimerIDs:[],LastValue:{Set:function(id,value){var idx=RequeryTimer.TimerIDs.indexOf(id);if(idx==-1)
return;RequeryTimer.Timers[idx].lastValue=value;},Get:function(id){var idx=RequeryTimer.TimerIDs.indexOf(id);return(idx==-1)?"":RequeryTimer.Timers[idx].lastValue;}},Clear:function(ctl){var idx=RequeryTimer.TimerIDs.indexOf(ctl.id);if(idx==-1)
return;window.clearTimeout(RequeryTimer.Timers[idx].timer);},KeyUp:function(ctl,methodToCall,methodArgs,delayMs){var idx=RequeryTimer.TimerIDs.indexOf(ctl.id);if(idx==-1){idx=RequeryTimer.Timers.length;RequeryTimer.Timers.push({id:ctl.id,lastValue:ctl.defaultValue,timer:null});RequeryTimer.TimerIDs.push(ctl.id);}
else{RequeryTimer.Clear(ctl);}
RequeryTimer.Timers[idx].timer=window.setTimeout(function(){var newValue=ctl.value;if(newValue!=RequeryTimer.LastValue.Get(ctl.id)){RequeryTimer.LastValue.Set(ctl.id,newValue);ctl.value=newValue;methodToCall.apply(methodToCall,methodArgs);}},(!delayMs||isNaN(delayMs))?500:delayMs);}};
/* CalendarDisplay.js */
function CalendarBlock_ReCheck(blockID)
{var filterPrefix=FilterBlocks_MakePrefix(blockID);var calID=CalendarBlock_MakeCalID(blockID);var cal=document.getElementById(calID);if(!cal)
return FilterBlocks_ResetFieldsetState(blockID);var hasChanges=FilterBlocks_ResubmitCheckForChanges(blockID);hasChanges|=(document.getElementById(calID+"_DateRange").value!=cal.getAttribute("dateRange"));hasChanges|=(document.getElementById(calID+"_SelectedDate").value!=cal.getAttribute("selectedDate"));hasChanges|=(document.getElementById(calID+"_CurrentMonth").value!=cal.getAttribute("currentMonth"));Cal_UpdateRangeDisplay(calID,document.getElementById(calID+"_DateRange").value);cal.setAttribute("dateRange",document.getElementById(calID+"_DateRange").value);cal.setAttribute("selectedDate",document.getElementById(calID+"_SelectedDate").value);cal.setAttribute("currentMonth",document.getElementById(calID+"_CurrentMonth").value);if(hasChanges)
Cal_ResetCalendar(cal,new Date(document.getElementById(calID+"_CurrentMonth").value));else
FilterBlocks_ResetFieldsetState(blockID);}
function CalendarBlock_MakeCalID(blockID)
{return"cal"+String(blockID);}
function CalendarBlock_BlockIDFromCalID(calID)
{if(calID.length<3)
return-1;return parseInt(calID.substring(3));}
function CalendarBlock_KeywordFilter(blockID)
{var blockPrefix=FilterBlocks_MakePrefix(blockID),keywordCtl=FilterBlocks_GetKeywordCtl(blockPrefix),calID=CalendarBlock_MakeCalID(blockID);RequeryTimer.KeyUp(keywordCtl,Cal_ReloadAjaxData,[calID]);}
function CalendarBlock_ClassificationSelectChange(blockID)
{Cal_ReloadAjaxData(CalendarBlock_MakeCalID(blockID));}
function CalendarBlock_ResetClassificationLink(blockID,classID)
{return CalendarBlock_ResetClassificationCheckbox(blockID,classID);}
function CalendarBlock_ResetClassificationCheckbox(blockID,classID)
{FilterBlocks_ResetSelections(blockID,classID);Cal_ReloadAjaxData(CalendarBlock_MakeCalID(blockID));}
function CalendarBlock_ClassificationLinkSelect(blockID,classID,container,evt)
{FilterBlocks_HandleCommonLinkSelect(blockID,classID,container,evt)
Cal_ReloadAjaxData(CalendarBlock_MakeCalID(blockID));}
function CalendarBlock_ClassificationCheck(blockID)
{Cal_ReloadAjaxData(CalendarBlock_MakeCalID(blockID));}
function CalendarBlock_ClassificationDynamicCheck(blockID,classID,ctl)
{FilterBlocks_ResetSelectClass(ctl,ctl.checked,blockID,classID);Cal_ReloadAjaxData(CalendarBlock_MakeCalID(blockID));}
function Cal_ResetHiddenState(calTable)
{var calID=calTable.id;if(!document.getElementById(calID+"_DateRange"))
return;document.getElementById(calID+"_DateRange").value=calTable.getAttribute("dateRange");document.getElementById(calID+"_SelectedDate").value=calTable.getAttribute("selectedDate");document.getElementById(calID+"_CurrentMonth").value=calTable.getAttribute("currentMonth");}
function Cal_PackageQueryStringData(blockID)
{var calID="cal"+String(blockID);var calTable=document.getElementById(calID);var prefix=FilterBlocks_MakePrefix(blockID);var params="&DateRange="+calTable.getAttribute("dateRange");var selectedDate=new Date(calTable.getAttribute("selectedDate"));params+="&Date="+String(selectedDate.getMonth()+1)+"/"+String(selectedDate.getDate())+"/"+String(selectedDate.getFullYear());if(FilterBlocks_GetKeywordCtl(prefix))
params+="&Keyword="+FilterBlocks_GetKeywordCtl(prefix).value.replace(/&/g,"&amp;");params+="&Classifications="+Cal_FormatClassifications(blockID);if(document.getElementById("Calendar"+blockID+"_EventID"))
params+=(params.length?"&EventID=":"EventID=")+document.getElementById("Calendar"+blockID+"_EventID").value;return params;}
function CalendarBlock_RemoveExistingCalendarParams(params)
{if(!params)
return"";var retVal="";var paramArray=params.split("&");for(var ii=0;ii<paramArray.length;ii++)
if(paramArray[ii].indexOf("DateRange")==0||paramArray[ii].indexOf("Date")==0||paramArray[ii].indexOf("Keyword")==0||paramArray[ii].indexOf("Classifications")==0||paramArray[ii].indexOf("EventID")==0);else
retVal+=(retVal.length?"&":"")+paramArray[ii];return retVal;}
function Cal_TableClick(ctl,evt)
{var targetCell=tic_Utilities.GetTargetCtl(evt);if(tic_Utilities.HasStyle(targetCell,"otherMonth")||targetCell.tagName!="TD"||targetCell.parentNode.tagName!="TR"||targetCell.parentNode.parentNode.tagName!="TBODY")
return;var selectedDate=new Date(ctl.getAttribute("currentMonth"));selectedDate.setDate(selectedDate.getDate()+Number(targetCell.innerHTML)-1);ctl.setAttribute("selectedDate",selectedDate);if(tic_Utilities.HasStyle(targetCell,"selected"))
return Cal_SwitchRange(ctl.id,"day");Cal_ResetSelection(ctl);}
function Cal_ResetSelection(calTable)
{var firstDay=-1,lastDay=-1,selectedDay=-1;var currentMonth=new Date(calTable.getAttribute("currentMonth"));var selectedDate=new Date(calTable.getAttribute("selectedDate"));if(currentMonth.getMonth()==selectedDate.getMonth()&&currentMonth.getFullYear()==selectedDate.getFullYear())
{selectedDay=selectedDate.getDate();switch(calTable.getAttribute("dateRange"))
{default:case"day":firstDay=lastDay=selectedDay;break;case"month":case"year":firstDay=1;lastDay=31;break;case"week":firstDay=selectedDay-selectedDate.getDay();lastDay=selectedDay+6-selectedDate.getDay();break;}}
var dateRows=Cal_GetDateRows(calTable);var searchRow=0,searchCol=0;for(searchCol=0;searchCol<7;++searchCol)
if(!tic_Utilities.HasStyle(dateRows[searchRow][searchCol],"otherMonth"))
break;for(var rows=searchRow;rows<6;++rows)
for(var cols=(rows?0:searchCol);cols<7;++cols)
{var cell=dateRows[rows][cols];if(tic_Utilities.HasStyle(cell,"otherMonth")&&calTable.getAttribute("dateRange")!="year")
break;if(tic_Utilities.HasStyle(cell,"otherMonth")&&calTable.getAttribute("dateRange")=="year")
{tic_Utilities.AddStyle(cell,"selected");continue;}
var cellDate=Number(cell.innerHTML);if(cellDate>=firstDay&&cellDate<=lastDay)
tic_Utilities.AddStyle(cell,"selected");else
tic_Utilities.RemoveStyle(cell,"selected");if(cellDate==selectedDay)
tic_Utilities.AddStyle(cell,"selectedDate");else
tic_Utilities.RemoveStyle(cell,"selectedDate");}
Cal_ResetHiddenState(calTable);Cal_ReloadAjaxData(calTable.id);}
function Cal_GetRangeDiv(calID)
{var container=document.getElementById(calID+"_calendarNav");if(!container)
return null;if(tic_Utilities.HasStyle(container,'calendarNav'))
return container;return null;}
function Cal_UpdateRangeDisplay(calID,range)
{var container=Cal_GetRangeDiv(calID);if(!container)
return;var anchors=container.getElementsByTagName("SPAN");for(var ii=0;ii<anchors.length;ii++)
if(anchors[ii].getAttribute("dateRange")==range)
anchors[ii].className="selected";else
anchors[ii].className="";}
function Cal_SwitchRange(calID,range)
{if(!Cal_GetRangeDiv(calID))
return;var calTable=document.getElementById(calID);var currRange=calTable.getAttribute("dateRange");if(currRange==range)
return;Cal_UpdateRangeDisplay(calID,range);calTable.setAttribute("dateRange",range);if(currRange=="year")
{var calDate=new Date(calTable.getAttribute("currentMonth"));Cal_ResetCalendar(calTable,calDate);}
else
Cal_ResetSelection(calTable);}
function Cal_InitCalendar(calID)
{var calTable=document.getElementById(calID);var today=new Date(),firstOfMonth=new Date();firstOfMonth.setDate(1);var lastOfMonth=Cal_FindLastOfMonth(new Date());Cal_ResetCalendar(calTable,firstOfMonth);}
function Cal_FindLastOfMonth(dayInMonth)
{var maxDaysToEnd=31-dayInMonth.getDate();var lastOfMonth=new Date();lastOfMonth.setDate(dayInMonth.getDate()+maxDaysToEnd);while(lastOfMonth.getDate()<10)
lastOfMonth.setDate(lastOfMonth.getDate()-1);return lastOfMonth;}
function Cal_ResetCalendar(calTable,firstOfMonth)
{var becauseMacsDontPlayFair=["January","February","March","April","May","June","July","August","September","October","November","December"];Cal_GetHeaderCell(calTable).innerHTML=becauseMacsDontPlayFair[firstOfMonth.getMonth()]+" "+firstOfMonth.getFullYear();var dateRows=Cal_GetDateRows(calTable);var dateToFill=new Date(firstOfMonth.toString());dateToFill.setDate(firstOfMonth.getDate()-(firstOfMonth.getDay()==0?7:firstOfMonth.getDay()));for(var rows=0;rows<6;++rows)
for(var cols=0;cols<7;++cols,dateToFill.setDate(dateToFill.getDate()+1))
{var cell=dateRows[rows][cols];cell.innerHTML=dateToFill.getDate();cell.className=(dateToFill.getMonth()!=firstOfMonth.getMonth())?"otherMonth":"";}
calTable.setAttribute("currentMonth",firstOfMonth.toString());Cal_ResetSelection(calTable);}
function Cal_SelectDates(calID,arrOfDates)
{var calTable=document.getElementById(calID);if(!calTable||calTable.tagName!="TABLE")
return;var dateIndex=0;var dateRows=Cal_GetDateRows(calTable);var dateToFill=new Date(calTable.getAttribute("currentMonth"));var currentMonth=dateToFill.getMonth();dateToFill.setDate(dateToFill.getDate()-(dateToFill.getDay()==0?7:dateToFill.getDay()));for(dateIndex=0;dateIndex<arrOfDates.length;++dateIndex)
if(arrOfDates[dateIndex].getTime()>=dateToFill.getTime())
break;for(var rows=0;rows<6;++rows)
for(var cols=0;cols<7;++cols,dateToFill.setDate(dateToFill.getDate()+1))
{var cell=dateRows[rows][cols];cell.innerHTML=dateToFill.getDate();if(dateIndex<arrOfDates.length&&arrOfDates[dateIndex].getTime()==dateToFill.getTime())
{tic_Utilities.AddStyle(cell,"hasEvent");dateIndex++;}
else
tic_Utilities.RemoveStyle(cell,"hasEvent");}}
function Cal_JumpSelection(selectedDate,newFirstOfMonth)
{var newDate=new Date(newFirstOfMonth);newDate.setDate(selectedDate.getDate());while(newDate.getMonth()!=newFirstOfMonth.getMonth())
newDate.setDate(newDate.getDate()-1);return newDate;}
function Cal_NextMonth(calID,evt){Cal_NextMonthIfAllowed(calID,true,evt);}
function Cal_NextMonthIfAllowed(calID,bAllowFuture,evt)
{var calTable=document.getElementById(calID);if(!calTable)
return;var today=new Date(),calDate=new Date(calTable.getAttribute("currentMonth"));if(!bAllowFuture&&today.getMonth()==calDate.getMonth()&&today.getFullYear()==calDate.getFullYear())
return;calDate.setMonth(calDate.getMonth()+1);var selectedDate=new Date(calTable.getAttribute("selectedDate"));calTable.setAttribute("selectedDate",Cal_JumpSelection(selectedDate,calDate).toString());Cal_ResetCalendar(calTable,calDate);tic_Utilities.CancelBubble(evt);}
function Cal_PrevMonth(calID,evt)
{var calTable=document.getElementById(calID);if(!calTable)
return;var calDate=new Date(calTable.getAttribute("currentMonth"));calDate.setMonth(calDate.getMonth()-1);var selectedDate=new Date(calTable.getAttribute("selectedDate"));calTable.setAttribute("selectedDate",Cal_JumpSelection(selectedDate,calDate).toString());Cal_ResetCalendar(calTable,calDate);tic_Utilities.CancelBubble(evt);}
function Cal_GetDateRows(calTable)
{var allRows=calTable.getElementsByTagName("TR");var retArray=new Array(6);for(var ii=0;ii<6;++ii)
retArray[ii]=allRows[ii+2].getElementsByTagName("TD");return retArray;}
function Cal_GetHeaderCell(calTable)
{return document.getElementById('calTitle'+calTable.getAttribute("blockId"));}
function Cal_PrevRange(calID)
{var calTable=document.getElementById(calID);if(!calTable)
return;var selectedDate=new Date(calTable.getAttribute("selectedDate"));switch(calTable.getAttribute("dateRange"))
{default:case'day':selectedDate.setDate(selectedDate.getDate()-1);break;case'week':selectedDate.setDate(selectedDate.getDate()-7);break;case'month':case'year':return Cal_PrevMonth(calID);break;}
var firstOfMonth=new Date(selectedDate.toString());firstOfMonth.setDate(1);calTable.setAttribute("selectedDate",selectedDate);Cal_ResetCalendar(calTable,firstOfMonth);}
function Cal_NextRange(calID)
{var calTable=document.getElementById(calID);if(!calTable)
return;var selectedDate=new Date(calTable.getAttribute("selectedDate"));switch(calTable.getAttribute("dateRange"))
{default:case'day':selectedDate.setDate(selectedDate.getDate()+1);break;case'week':selectedDate.setDate(selectedDate.getDate()+7);break;case'month':case'year':return Cal_NextMonth(calID);break;}
var firstOfMonth=new Date(selectedDate.toString());firstOfMonth.setDate(1);calTable.setAttribute("selectedDate",selectedDate);Cal_ResetCalendar(calTable,firstOfMonth);}
function Cal_Return(calID)
{Cal_ReloadAjaxData(calID);}
function Cal_FormatClassifications(blockID)
{var blockPrefix=FilterBlocks_MakePrefix(blockID);return FilterBlocks_FormatClassifications(blockPrefix);}
function Cal_ReloadAjaxData(calID)
{if(!NorthwoodsSoftwareDevelopment||!NorthwoodsSoftwareDevelopment.Cms||!NorthwoodsSoftwareDevelopment.Cms.WebServices||!NorthwoodsSoftwareDevelopment.Cms.WebServices.CalendarAjax||!NorthwoodsSoftwareDevelopment.Cms.WebServices.CalendarAjax.GetResultsData)
return;var calTable=document.getElementById(calID);if(calTable&&calTable.id=="DP_PopupCalendar")
return;var blockID=CalendarBlock_BlockIDFromCalID(calID);var docID;if(calTable)
docID=calTable.getAttribute("docID");else if(document.getElementById("CalendarFilter_"+blockID))
docID=document.getElementById("CalendarFilter_"+blockID).getAttribute("docID");else
return;var prefix=FilterBlocks_MakePrefix(blockID);var selectedDate=(calTable?(new Date(calTable.getAttribute("selectedDate"))):(new Date()));var ajaxArgs=new Array();ajaxArgs[ajaxArgs.length]=docID;ajaxArgs[ajaxArgs.length]=blockID;ajaxArgs[ajaxArgs.length]=String(selectedDate.getMonth()+1)+"/"+String(selectedDate.getDate())+"/"+String(selectedDate.getFullYear());ajaxArgs[ajaxArgs.length]=calTable?calTable.getAttribute("dateRange"):"nocal";if(FilterBlocks_GetKeywordCtl(prefix))
ajaxArgs[ajaxArgs.length]=FilterBlocks_GetKeywordCtl(prefix).value.replace(/&/g,"&amp;");else
ajaxArgs[ajaxArgs.length]="";ajaxArgs[ajaxArgs.length]=Cal_FormatClassifications(blockID);document.getElementById("CalendarResults_"+blockID).className+=" waiting";TitanDisplayServiceWrapper.MakeWebServiceCall("Calendar_Main"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.CalendarAjax.GetResultsData,ajaxArgs,Cal_AjaxComplete,[blockID,calID],true);}
function Cal_ViewCalItem(calID,itemNumber)
{var calTable=document.getElementById(calID);var blockID=calTable.getAttribute("blockID");var ajaxArgs=new Array();ajaxArgs[ajaxArgs.length]=calTable.getAttribute("docID");ajaxArgs[ajaxArgs.length]=blockID;ajaxArgs[ajaxArgs.length]=itemNumber;document.getElementById("CalendarResults_"+blockID).className+=" waiting";TitanDisplayServiceWrapper.MakeWebServiceCall("Calendar_Main"+blockID,NorthwoodsSoftwareDevelopment.Cms.WebServices.CalendarAjax.GetEventItem,ajaxArgs,Cal_AjaxComplete,[blockID,calID],true);}
function Cal_AjaxComplete(blockID,calID,responseAsJSON,responseAsXml,responseAsText)
{var resultsArea=document.getElementById("CalendarResults_"+blockID);if(!resultsArea)
return window.alert("Lost results");resultsArea.className="CalendarResults";resultsArea.innerHTML=responseAsJSON.htmlData;if(responseAsJSON&&responseAsJSON.suggestionUpdates)
FilterBlocks_UpdateFilterSuggestions(blockID,responseAsJSON.suggestionUpdates);if(responseAsJSON.javascript)
Cal_SelectDates(calID,TitanDisplayServiceWrapper.EvalJavascript(responseAsJSON.javascript));if(responseAsJSON&&responseAsJSON.filterUpdateArray)
FilterBlocks_UpdateFilterCounts(blockID,responseAsJSON.filterUpdateArray);else
FilterBlocks_ResetFieldsetState(blockID);}
function GetCursorPosition(evt){evt=evt||window.event;var cursor={x:0,y:0};if(evt.pageX||evt.pageY){cursor.x=evt.pageX;cursor.y=evt.pageY;}
else{cursor.x=evt.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)-document.documentElement.clientLeft;cursor.y=evt.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-document.documentElement.clientTop;}
return cursor;}
function DP_ShowPopup(evt,parent,xOff,yOff)
{var popup=document.getElementById("DP_PopupCalendarContainer");var pos=GetCursorPosition(evt);var space=document.documentElement.scrollHeight-pos.y+yOff;if(space<180)
yOff-=(180-space);popup.style.position="absolute";popup.style.left=pos.x+xOff+"px";popup.style.top=pos.y+yOff+"px";popup.style.display="block";}
function DP_HidePopup(evt)
{document.getElementById("DP_PopupCalendarContainer").style.display="none";tic_Utilities.CancelBubble(evt);}
function DP_MouseOut(evt)
{var target=tic_Utilities.GetTargetCtl(evt);if(target.id!="DP_PopupCalendarContainer"&&!tic_Utilities.HasStyle(target,"calendarIcon"))
return;}
function DP_EnableCalendar(inputName,spanCtl,xOff,yOff,evt)
{tic_Utilities.CancelBubble(evt);var calTable=document.getElementById('DP_PopupCalendar');if(calTable.getAttribute("doInit")=="1")
Cal_InitCalendar('DP_PopupCalendar');calTable.setAttribute("openFor",inputName);var date=new Date();var ctl=document.getElementById(inputName);if(SFEditFieldIsDate(inputName))
date=SFEditParseDate(inputName);calTable.setAttribute("selectedDate",date);var setDate=new Date(date);setDate.setDate(1);Cal_ResetCalendar(calTable,setDate);DP_ShowPopup(evt,spanCtl,xOff,yOff);}
function DP_TableClick(ctl,evt)
{var calTable=document.getElementById("DP_PopupCalendar");if(!calTable)
return;var inputCtl=document.getElementById(calTable.getAttribute("openFor"));if(!inputCtl)
return;var target=tic_Utilities.GetTargetCtl(evt);if(target.tagName=="TD"&&(target.className==""||tic_Utilities.HasStyle(target,"selectedDate")))
{var selectedDate=new Date(ctl.getAttribute("currentMonth"));selectedDate.setDate(selectedDate.getDate()+Number(target.innerHTML)-1);var newVal=String(selectedDate.getMonth()+1)+"/"+selectedDate.getDate()+"/"+selectedDate.getFullYear();inputCtl.value=newVal;inputCtl.focus();inputCtl.blur();SFSetControlValue(inputCtl.id,newVal,true);DP_HidePopup(evt);}
tic_Utilities.CancelBubble(evt);}
var RecurringDate={Enable:function(baseID,xOffset,yOffset,evt){tic_Utilities.CancelBubble(evt);DP_HidePopup(evt);var config=RecurringDate.GetCurrentConfig(baseID,true),wasEmpty=config.wasEmpty,startDate=new Date(config.startDate);delete config.wasEmpty;var editorArgs={UpdateCallback:"RecurringDate.Update",BeforeCancel:(wasEmpty)?"RecurringDate.Clear":null,baseID:baseID,initConfig:config,startConfig:{day:startDate.getDate(),month:startDate.getMonth(),dayOfWeek:Math.pow(2,startDate.getDay()),weekOfMonth:Math.ceil(startDate.getDate()/7)}};RecurrenceEditor.Open(editorArgs,xOffset,yOffset,evt);},Update:function(baseID,data,bPropagate){var patternLabel=SFGetControl(baseID+"_patternLabel"),pattern=new RecurrencePattern(data),recurConfig=SFGetControl(baseID+"_recurConfig");if(ValueIsDate(data.startDate)&&ValueIsTime(data.startTime)){SFSetControlValue(baseID+"_Date",data.startDate,false);SFSetControlValue(baseID+"_Time",data.startTime,false);SFSetControlValue(baseID+"_recurConfig",JSON.stringify(data),false);patternLabel.textContent=pattern.ReturnLabelAndEmpty();recurConfig.setAttribute("skipConfirm",(data.skipConfirm)?"true":"false");}
if(bPropagate&&window["Wkst_PropChangeMessage"])
Wkst_PropChangeMessage(SFGetControl(baseID+"_Date"),baseID);},InitCurrentDateTime:function(){var now=new Date(),minute=(now.getMinutes()>30)?"00":"30",hourOffset=(now.getMinutes()>30)?1:0,hour=(now.getHours()+hourOffset>12)?String(now.getHours()-12+hourOffset):String(now.getHours()+hourOffset),amPM=(now.getHours()+hourOffset<12)?"AM":"PM";return{date:String(now.getMonth()+1)+"/"+now.getDate()+"/"+now.getFullYear(),time:hour+":"+minute+" "+amPM};},StartDateTimeChanged:function(baseID,ctl){var config=RecurringDate.GetCurrentConfig(baseID,false);if(!config.skipConfirm&&!RecurrenceEditor.ConfirmChange()){ctl.value=ctl.defaultValue;return;}
config.skipConfirm=true;RecurringDate.Update(baseID,config,true);},Remove:function(baseID,evt){tic_Utilities.CancelBubble(evt);var config=RecurringDate.GetCurrentConfig(baseID,false);if(config.count==1)
return;config.frequency=1;config.interval=1;config.type=0;config.patternDOW=0;config.patternNth=null;config.count=1;config.endDate="";config.exclude=[];if(!config.skipConfirm&&!RecurrenceEditor.ConfirmChange())
return;config.skipConfirm=true;RecurringDate.Update(baseID,config,true);},Clear:function(baseID){var defaultConfig={patternID:-1,frequency:1,type:0,interval:1,patternDOW:0,patternNth:null,count:1,startDate:"",startTime:"",endDate:"",exclude:[],skipConfirm:true};RecurringDate.Update(baseID,defaultConfig,false);return defaultConfig;},GetCurrentConfig:function(baseID,bInitIfEmpty){var dateCtl=SFGetControl(baseID+"_Date"),timeCtl=SFGetControl(baseID+"_Time"),init=RecurringDate.InitCurrentDateTime(),bothEmpty=(dateCtl.value==""&&timeCtl.value==""),dateValue=(bInitIfEmpty&&(bothEmpty||(dateCtl.value!=""&&!ValueIsDate(dateCtl.value))))?init.date:dateCtl.value,timeValue=(bInitIfEmpty&&(bothEmpty||!SFEditFieldIsTime(baseID+"_Time")))?init.time:timeCtl.value,recurConfig=SFGetControl(baseID+"_recurConfig"),config=(recurConfig&&recurConfig.value!="")?JSON.parse(recurConfig.value):null;if(config==null)
config=RecurringDate.Clear(baseID);config.wasEmpty=bothEmpty;config.skipConfirm=(recurConfig.hasAttribute("skipConfirm")&&recurConfig.getAttribute("skipConfirm")=="true");dateCtl.value=config.startDate=dateValue;timeCtl.value=config.startTime=timeValue;return config;},GetLabel:function(baseID){var recurConfig=SFGetControl(baseID+"_recurConfig");if(!recurConfig||!recurConfig.value)
return"";var config=JSON.parse(recurConfig.value),dateCtl=SFGetControl(baseID+"_Date"),dateValue=(dateCtl&&ValueIsDate(dateCtl.value))?dateCtl.value:"",timeCtl=SFGetControl(baseID+"_Time"),timeValue=(timeCtl&&SFEditFieldIsTime(baseID+"_Time"))?timeCtl.value:"";config.startDate=dateValue;config.startTime=timeValue;var pattern=new RecurrencePattern(config);return pattern.ReturnLabelAndEmpty();},GetDefaultLabel:function(baseID){var recurConfig=SFGetControl(baseID+"_recurConfig");if(!recurConfig||!recurConfig.value)
return"";var config=JSON.parse(recurConfig.getAttribute("defaultValue")),pattern=new RecurrencePattern(config);return pattern.ReturnLabelAndEmpty();},CancelIfOpen:function(){var lilCalOpen=(document.getElementById("DP_PopupCalendarContainer").style.display!="none"),recurOpen=RecurrenceEditor.IsOpen();if(lilCalOpen)
DP_HidePopup(null);if(recurOpen)
RecurrenceEditor.Cancel();},PackageData:function(baseID){var recurConfig=SFGetControl(baseID+"_recurConfig");if(!recurConfig||!recurConfig.value)
return"";var dateCtl=SFGetControl(baseID+"_Date"),timeCtl=SFGetControl(baseID+"_Time"),config=JSON.parse(recurConfig.value);config.startDate=(dateCtl&&ValueIsDate(dateCtl.value))?dateCtl.value:"";config.startTime=(timeCtl&&SFEditFieldIsTime(baseID+"_Time"))?timeCtl.value:"";var pattern=new RecurrencePattern(config);return pattern.ReturnXmlAndEmpty();}};var RecurrenceEditor={IsOpen:function(){return(SFGetControl("RecurrenceEditor").style.display!="none");},Open:function(editorArgs,xOffset,yOffset,evt){RecurrenceEditor.Init(editorArgs);var popup=SFGetControl("RecurrenceEditor"),pos=GetCursorPosition(evt),space=document.documentElement.scrollHeight-pos.y+yOffset;if(pos.y+yOffset<119)
yOffset=(119-pos.y);if(space<294)
yOffset-=(294-space-yOffset);popup.style.position="absolute";popup.style.left=pos.x+xOffset+"px";popup.style.top=pos.y+yOffset+"px";popup.style.display="block";},Close:function(){var popup=SFGetControl("RecurrenceEditor");popup.style.display="none";tic_Utilities.RemoveStyle(popup,"error");DP_HidePopup(null);RecurrenceEditor.EditorArgs.Set({});},OK:function(){if(!RecurrenceEditor.IsValid())
return;var editorArgs=RecurrenceEditor.EditorArgs.Get(),config=editorArgs.initConfig,freq=SFGetRadioValue("freq"),startDate=new Date(config.startDate),retData={patternID:config.patternID,frequency:parseInt(freq,10),type:0,interval:1,patternDOW:0,patternNth:null,count:-1,startDate:config.startDate,startTime:config.startTime,endDate:"",exclude:[]};if(freq=="1"){var dailyOpts=SFGetRadioValue("dailyOpts");retData.type=parseInt(dailyOpts,10);retData.interval=(dailyOpts=="0")?parseInt(SFGetEditValue("NthDay"),10):1;}
else if(freq=="2"){retData.type=1;retData.interval=parseInt(SFGetEditValue("NthWeek"),10);var checkboxes=SFGetControlSet("DOWchk"),checkedDays=[];for(var ii=0;ii<checkboxes.length;ii++){if(checkboxes[ii].checked){retData.patternDOW+=parseInt(checkboxes[ii].value,10);checkedDays.push(parseInt(checkboxes[ii].getAttribute("day"),10));}}
var startDay=startDate.getDay(),startMatches=false;for(var jj=0;jj<checkedDays.length;jj++)
startMatches|=(checkedDays[jj]===startDay);if(!startMatches){if(startDay<checkedDays[0])
startDate.setDate(startDate.getDate()+(checkedDays[0]-startDay));else if(startDay>checkedDays[0])
startDate.setDate(startDate.getDate()+((checkedDays[0]-startDay)+(7*retData.interval)));retData.startDate=String(startDate.getMonth()+1)+"/"+String(startDate.getDate())+"/"+String(startDate.getFullYear());}}
else if(freq=="3"){var monthlyOpts=SFGetRadioValue("monthlyOpts"),dowCtl=SFGetControl("DOW"),startDay=(monthlyOpts=="2")?parseInt(SFGetEditValue("DayX"),10):RecurrenceEditor.GetNthDOWOfMonth(parseInt(SFGetEditValue("DayXth"),10),dowCtl.selectedIndex,startDate.getMonth(),startDate.getFullYear());startDate.setDate(startDay);retData.startDate=String(startDate.getMonth()+1)+"/"+String(startDate.getDate())+"/"+String(startDate.getFullYear());retData.type=parseInt(monthlyOpts,10);retData.interval=parseInt(SFGetEditValue("NthMonth"),10);retData.patternDOW=(monthlyOpts=="2")?0:parseInt(SFGetEditValue("DOW"),10);retData.patternNth=(monthlyOpts=="2")?startDay:parseInt(SFGetEditValue("DayXth"),10);}
else if(freq=="4"){var yearlyOpts=SFGetRadioValue("yearlyOpts"),dowCtl=SFGetControl("SpecificDayXth_DOW"),startMonth=(yearlyOpts=="2")?parseInt(SFGetEditValue("SpecificDay_Month"),10):parseInt(SFGetEditValue("SpecificDayXth_Month"),10),startDay=(yearlyOpts=="2")?parseInt(SFGetEditValue("SpecificDay_Day"),10):RecurrenceEditor.GetNthDOWOfMonth(parseInt(SFGetEditValue("SpecificDayXth"),10),dowCtl.selectedIndex,startMonth,startDate.getFullYear());startDate.setMonth(startMonth,startDay);retData.startDate=String(startDate.getMonth()+1)+"/"+String(startDate.getDate())+"/"+String(startDate.getFullYear());retData.type=parseInt(yearlyOpts,10);retData.interval=parseInt(SFGetEditValue("NthYear"),10);retData.patternDOW=(yearlyOpts=="2")?0:parseInt(SFGetEditValue("SpecificDayXth_DOW"),10);retData.patternNth=(yearlyOpts=="2")?startDay:parseInt(SFGetEditValue("SpecificDayXth"),10);}
var endType=SFGetRadioValue("endOpts");if(endType=="1")
retData.count=parseInt(SFGetEditValue("AfterN"),10);else if(endType=="2")
retData.endDate=SFGetEditValue("EndDate");var excludes=SFGetControl("excludeOptions");if(excludes.options.length>0)
for(var e=0;e<excludes.options.length;e++)
retData.exclude.push(excludes.options[e].value);var old=new RecurrencePattern(config).ReturnLabelAndEmpty(),cur=new RecurrencePattern(retData).ReturnLabelAndEmpty();if(!config.skipConfirm&&config.count!=1&&old!=cur&&!RecurrenceEditor.ConfirmChange())
return;retData.skipConfirm=true;tic_Utilities.ExecuteFunctionByName(editorArgs.UpdateCallback,window,[editorArgs.baseID,retData,true]);RecurrenceEditor.Close();},GetNthDOWOfMonth:function(nth,dow,month,year){var date=new Date(year,month,1),days=[];while(date.getDay()!==dow)
date.setDate(date.getDate()+1);while(date.getMonth()===month){days.push(date.getDate());date.setDate(date.getDate()+7);}
return(nth===5)?days[days.length-1]:days[nth-1];},ConfirmChange:function(){var msg=new StringBuilder();msg.Append("Warning -- These changes may affect past and future occurrences.\n\n");msg.Append("To keep past occurrences, Cancel these changes and do the following:\n");msg.Append(" 1. Create a new record with the new recurrence settings\n");msg.Append(" 2. Edit this record to end the recurrence on the date the new settings start\n\n");msg.Append("Do you want to change all past and future occurrences?");return confirm(msg.ReturnAndEmpty());},Cancel:function(){var editorArgs=RecurrenceEditor.EditorArgs.Get();if(editorArgs.BeforeCancel!=null)
tic_Utilities.ExecuteFunctionByName(editorArgs.BeforeCancel,window,[editorArgs.baseID]);RecurrenceEditor.Close();},EditorArgs:{Get:function(){return JSON.parse(SFGetControl("EditorArgs").value);},Set:function(argsObj){SFSetControlValue("EditorArgs",JSON.stringify(argsObj),false);}},IsValid:function(){var freq=SFGetRadioValue("freq"),IsValidInterval=function(ctlName){var ctl=SFGetControl(ctlName),val=parseInt(ctl.value,10),min=parseInt(ctl.getAttribute("min"),10),max=parseInt(ctl.getAttribute("max"),10),regEx="^\\d+$";return(SFTrim(ctl.value).match(regEx)!=null&&val>=min&&val<=max);},InvalidMsg=function(ctlName){var ctl=SFGetControl(ctlName),min=parseInt(ctl.getAttribute("min"),10),max=parseInt(ctl.getAttribute("max"),10);return"Invalid interval value. Please enter a number between "+min+" and "+max;},editorDiv=SFGetControl("RecurrenceEditor"),errorDiv=SFGetControl("RecurrenceErrors"),errors=new StringBuilder();tic_Utilities.RemoveStyle(editorDiv,"error");errorDiv.innerHTML="";if(freq=="1"){var dailyOpts=SFGetRadioValue("dailyOpts");if(dailyOpts=="0"&&!IsValidInterval("NthDay"))
errors.Append(InvalidMsg("NthDay"),"<br/>");}
else if(freq=="2"&&!IsValidInterval("NthWeek"))
errors.Append(InvalidMsg("NthWeek"),"<br/>");else if(freq=="2"){var dowTotal=0,checkboxes=SFGetControlSet("DOWchk");for(var ii=0;ii<checkboxes.length;ii++)
if(checkboxes[ii].checked)
dowTotal+=parseInt(checkboxes[ii].value,10);if(dowTotal===0)
errors.Append("Please select days of the week for the recurrence.","<br/>");}
else if(freq=="3"){if(!IsValidInterval("NthMonth"))
errors.Append(InvalidMsg("NthMonth"),"<br/>");var monthlyOpts=SFGetRadioValue("monthlyOpts");if(monthlyOpts=="2"&&!IsValidInterval("DayX"))
errors.Append(InvalidMsg("DayX"),"<br/>");if(monthlyOpts=="2"&&parseInt(SFGetEditValue("DayX"),10)>28&&parseInt(SFGetEditValue("DayX"),10)<=31)
alert("Some months have fewer than "+SFGetEditValue("DayX")+" days. For these months, the occurence will fall on the last day of the month.");}
else if(freq=="4"){if(!IsValidInterval("NthYear"))
errors.Append(InvalidMsg("NthYear"),"<br/>");var yearlyOpts=SFGetRadioValue("yearlyOpts");if(yearlyOpts=="2"&&!IsValidInterval("SpecificDay_Day"))
errors.Append(InvalidMsg("SpecificDay_Day"),"<br/>");var testDate=new Date();if(yearlyOpts=="2"&&!ValueIsDate(String(parseInt(SFGetEditValue("SpecificDay_Month"),10)+1)+"/"+SFGetEditValue("SpecificDay_Day")+"/"+testDate.getFullYear()))
errors.Append("Invalid date","<br/>");}
var endType=SFGetRadioValue("endOpts");if(endType=="1"&&!IsValidInterval("AfterN"))
errors.Append(InvalidMsg("AfterN"),"<br/>");if(endType=="2"&&!SFEditFieldIsDate("EndDate"))
errors.Append("Invalid End Date - enter a date between 1/1/1901 and 12/31/2400","<br/>");if(!errors.IsEmpty()){errorDiv.innerHTML=errors.ReturnAndEmpty();tic_Utilities.AddStyle(editorDiv,"error");return false;}
return true;},Init:function(editorArgs){var config=editorArgs.initConfig,startDate=new Date(config.startDate);RecurrenceEditor.EditorArgs.Set(editorArgs);SFSetControlValue("freq",String(config.frequency),true);if(config.frequency===1){SFSetControlValue("dailyOpts",String(config.type),false);SFSetControlValue("NthDay",config.interval,false);}
else if(config.frequency===2){SFSetControlValue("NthWeek",config.interval,false);for(var ii=0;ii<7;ii++)
SFGetControl("dow"+ii).checked=Boolean(config.patternDOW&Math.pow(2,ii));}
else if(config.frequency===3){SFSetControlValue("NthMonth",config.interval,false);SFSetControlValue("monthlyOpts",String(config.type),false);if(config.type===2)
SFSetControlValue("DayX",config.patternNth,false);else if(config.type===3){SFSetControlValue("DayXth",String(config.patternNth),false);SFSetControlValue("DOW",String(config.patternDOW),false);}}
else if(config.frequency===4){SFSetControlValue("NthYear",config.interval,false);SFSetControlValue("yearlyOpts",String(config.type),false);var month=SFGetControl("SpecificDay_Month"),xthMonth=SFGetControl("SpecificDayXth_Month");month.value=startDate.getMonth();xthMonth.value=startDate.getMonth();if(config.type===2)
SFSetControlValue("SpecificDay_Day",String(config.patternNth),false);else if(config.type===3){SFSetControlValue("SpecificDayXth",String(config.patternNth),false);SFSetControlValue("SpecificDayXth_DOW",String(config.patternDOW),false);}}
if(config.count===-1&&config.endDate=="")
SFSetControlValue("endOpts","-1",true);else if(config.count===-1){SFSetControlValue("endOpts","2",true);SFSetControlValue("EndDate",config.endDate,false);}
else{SFSetControlValue("endOpts","1",true);SFSetControlValue("AfterN",config.count,false);}
SFSetControlValue("excludeDate","",true);var excludes=SFGetControl("excludeOptions");excludes.length=0;if(config.exclude.length>0){for(var e=0;e<config.exclude.length;e++)
excludes.options[e]=new Option(SFTrim(config.exclude[e]),SFTrim(config.exclude[e]),false,false);}},FreqChanged:function(ctl){var editorArgs=RecurrenceEditor.EditorArgs.Get(),startConfig=editorArgs.startConfig,editor=SFGetControl("RecurrenceEditor"),allDivs=editor.getElementsByTagName("DIV");if(ctl.value=="1"){SFSetControlValue("dailyOpts","0",false);SFSetControlValue("NthDay","1",false);}
else if(ctl.value=="2"){SFSetControlValue("NthWeek","1",false);for(var ii=0;ii<7;ii++)
SFGetControl("dow"+ii).checked=Boolean(startConfig.dayOfWeek&Math.pow(2,ii));}
else if(ctl.value=="3"){SFSetControlValue("NthMonth","1",false);SFSetControlValue("monthlyOpts","2",false);SFSetControlValue("DayX",String(startConfig.day),false);SFSetControlValue("DayXth",String(startConfig.weekOfMonth),false);SFSetControlValue("DOW",String(startConfig.dayOfWeek),false);}
else if(ctl.value=="4"){SFSetControlValue("NthYear","1",false);SFSetControlValue("yearlyOpts","2",false);SFSetControlValue("SpecificDay_Month",String(startConfig.month),false);SFSetControlValue("SpecificDay_Day",String(startConfig.day),false);SFSetControlValue("SpecificDayXth_Month",String(startConfig.month),false);SFSetControlValue("SpecificDayXth",String(startConfig.weekOfMonth),false);SFSetControlValue("SpecificDayXth_DOW",String(startConfig.dayOfWeek),false);}
for(var ii=0;ii<allDivs.length;ii++)
if(tic_Utilities.HasStyle(allDivs[ii],"frequency")){allDivs[ii].className="frequency "+ctl.getAttribute("cssValue");return;}},EndChanged:function(ctl){RecurrenceEditor.SetRadioForEnd(parseInt(ctl.value,10));},SetRadioForType:function(typeValue){var freq=SFGetRadioValue("freq");if(freq=="1")
SFSetControlValue("dailyOpts",String(typeValue),false);else if(freq=="3")
SFSetControlValue("monthlyOpts",String(typeValue),false);else if(freq=="4")
SFSetControlValue("yearlyOpts",String(typeValue),false);},SetRadioForEnd:function(typeValue){SFSetControlValue("endOpts",String(typeValue),false);if(typeValue===-1){SFSetControlValue("AfterN","",false);SFSetControlValue("EndDate","",false);}
else if(typeValue===1&&!SFEditFieldHasValue("AfterN")){SFSetControlValue("AfterN","1",true);SFSetControlValue("EndDate","",false);}
else if(typeValue===1)
SFSetControlValue("EndDate","",false);else if(typeValue===2)
SFSetControlValue("AfterN","",false);},CheckExcludeButtons:function(){var excludes=SFGetControl("Excludes"),ctl=SFGetControl("excludeOptions"),selectedItem=(ctl.selectedIndex!=-1),stuffToSave=(SFValueHasChanged("excludeDate")),stuffIsValid=(SFGetEditValue("excludeDate")==""||ValueIsDate(SFGetEditValue("excludeDate"))),exists=false,msgs=SFGetControl("excludeMsg"),errors=new StringBuilder();msgs.innerHTML="";if(stuffToSave&&stuffIsValid){var newDate=new Date(SFGetEditValue("excludeDate"));for(var ii=0;ii<ctl.options.length;ii++)
exists|=(new Date(ctl.options[ii].value).toDateString()==newDate.toDateString());}
if(exists)
errors.Append("Date already excluded");if(!stuffIsValid)
errors.Append("Invalid Date - enter a date between 1/1/1901 and 12/31/2400");if(!errors.IsEmpty())
msgs.innerHTML=errors.ReturnAndEmpty();SFGetControl("excludeDelete").disabled=!selectedItem;SFGetControl("excludeUpdate").disabled=!selectedItem||!stuffToSave||!stuffIsValid||exists;SFGetControl("excludeInsert").disabled=!stuffToSave||!stuffIsValid||exists;},UpdateOption:function(){var valueCtl=SFGetControl("excludeDate"),newDate=new Date(valueCtl.value),dateStr=String(newDate.getMonth()+1)+"/"+String(newDate.getDate())+"/"+String(newDate.getFullYear()),ctl=SFGetControl("excludeOptions");var idx=ctl.selectedIndex;if(idx<0||!ctl.options[idx])
return;ctl.setAttribute("changed","1");if(ctl.onblur)
ctl.onblur();ctl.options[idx]=new Option(dateStr,dateStr);SFSetControlValue("excludeDate",dateStr,false);RecurrenceEditor.SortExcludes();RecurrenceEditor.ResetExcludeDefaults();},InsertOption:function(){var valueCtl=SFGetControl("excludeDate"),newDate=new Date(valueCtl.value),dateStr=String(newDate.getMonth()+1)+"/"+String(newDate.getDate())+"/"+String(newDate.getFullYear()),ctl=SFGetControl("excludeOptions");ctl.setAttribute("changed","1");if(ctl.onblur)
ctl.onblur();ctl.options[ctl.options.length]=new Option(dateStr,dateStr);ctl.selectedIndex=ctl.options.length-1;SFSetControlValue("excludeDate","",false);RecurrenceEditor.SortExcludes();RecurrenceEditor.ResetExcludeDefaults();},DeleteOption:function(){var ctl=SFGetControl("excludeOptions"),idx=ctl.selectedIndex;if(idx<0)
return;ctl.setAttribute("changed","1");if(ctl.onblur)
ctl.onblur();if(ctl.options.remove)
ctl.options.remove(idx);else
ctl.options[idx]=null;SFSetControlValue("excludeDate","",false);RecurrenceEditor.ResetExcludeDefaults();},SortExcludes:function(){var ctl=SFGetControl("excludeOptions"),ary=[];for(var ii=0;ii<ctl.options.length;ii++)
ary.push(ctl.options[ii].value);ary.sort(function(a,b){return new Date(a)-new Date(b);});ctl.options.length=0;for(var ii=0;ii<ary.length;ii++)
ctl.options[ctl.options.length]=new Option(ary[ii],ary[ii]);},ResetExcludeDefaults:function(){var valueCtl=SFGetControl("excludeDate");valueCtl.setAttribute("defaultValue",valueCtl.value);if(valueCtl.value)
valueCtl.select();RecurrenceEditor.CheckExcludeButtons();},SelectOneExcludeOption:function(ctl){var idx=ctl.selectedIndex;if(idx<0)
return;var opt=ctl.options[idx];if(!opt||!opt.value)
return;RecurrenceEditor.SetExcludeOptionField(opt);RecurrenceEditor.ResetExcludeDefaults();},SetExcludeOptionField:function(option){SFSetControlValue("excludeDate",option.value,false);}};function RecurrencePattern(config){this._newConfig={patternID:-1,frequency:1,type:0,interval:1,patternDOW:0,patternNth:null,count:1,startDate:"",startTime:"",endDate:"",exclude:[]};this.Empty=function(){this._config=null;this._newConfig=null;};this._config=config||this._newConfig;}
RecurrencePattern.prototype.ReturnLabel=function(){if(this._config.startDate=="")
return"";var startingLabel=this._config.startDate;if(this._config.startTime!="")
startingLabel+=" at "+this._config.startTime;if(this._config.count===1)
return"Occurs once on "+startingLabel;var startDate=new Date(this._config.startDate),patternText=new StringBuilder(""),BitmaskToDOW=function(patternDOW){var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],checkedDays=[];for(var ii=0;ii<7;ii++)
if(Boolean(patternDOW&Math.pow(2,ii)))
checkedDays.push(daysOfWeek[ii]);return checkedDays.join(", ");},nth=["first","second","third","fourth","last"],months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(this._config.frequency===1)
patternText.Append("Every ",(this._config.type===0)?this._config.interval+" day(s); ":" weekday; ");else if(this._config.frequency===2){var checkedDays=BitmaskToDOW(this._config.patternDOW);patternText.Append("Every ",this._config.interval," week(s) on ",checkedDays,"; ");}
else if(this._config.frequency===3){patternText.Append("Every ",this._config.interval," month(s) on ");if(this._config.type===2)
patternText.Append("day ",this._config.patternNth,"; ");else if(this._config.type===3)
patternText.Append("the ",nth[this._config.patternNth-1]," ",BitmaskToDOW(this._config.patternDOW),"; ");}
else if(this._config.frequency===4){patternText.Append("Every ",this._config.interval," year(s) on ");if(this._config.type===2)
patternText.Append(months[startDate.getMonth()]," ",this._config.patternNth,"; ");else if(this._config.type===3)
patternText.Append("the ",nth[this._config.patternNth-1]," ",BitmaskToDOW(this._config.patternDOW)," of ",months[startDate.getMonth()],"; ");}
patternText.Append("starting ",startingLabel,", ");if(this._config.count===-1&&this._config.endDate=="")
patternText.Append("no end");else if(this._config.count===-1)
patternText.Append("ending ",this._config.endDate);else
patternText.Append("ending after ",this._config.count," occurrences");if(this._config.exclude.length>0)
patternText.Append(" (excluding ",this._config.exclude.join(", "),")");return patternText.ReturnAndEmpty();}
RecurrencePattern.prototype.ReturnLabelAndEmpty=function(){var label=this.ReturnLabel();this.Empty();return label;}
RecurrencePattern.prototype.ReturnXml=function(){var retXml=new StringBuilder();if(this._config.patternID!=-1&&this._config.startDate==""){retXml.Append(tic_Utilities.MakeXmlStartTagWithAttributes("RecurrencePattern",false,"ID",this._config.patternID,"Delete","1"));retXml.Append(tic_Utilities.MakeXmlEndTag("RecurrencePattern",false));}
else if(this._config.startDate!=""){retXml.Append(tic_Utilities.MakeXmlStartTagWithAttributes("RecurrencePattern",false,"ID",this._config.patternID));retXml.Append(tic_Utilities.PackageXml("Frequency",this._config.frequency,false));retXml.Append(tic_Utilities.PackageXml("Type",this._config.type,false));retXml.Append(tic_Utilities.PackageXml("Interval",this._config.interval,false));retXml.Append(tic_Utilities.PackageXml("PatternDOW",this._config.patternDOW,false));if(this._config.patternNth!=undefined&&this._config.patternNth!=null)
retXml.Append(tic_Utilities.PackageXml("PatternNth",this._config.patternNth,false));retXml.Append(tic_Utilities.PackageXml("Count",this._config.count,false));retXml.Append(tic_Utilities.MakeXmlStartTag("Dates",false));retXml.Append(tic_Utilities.PackageXml("Start",SFTrim(this._config.startDate+" "+this._config.startTime),false));retXml.Append(tic_Utilities.PackageXml("End",this._config.endDate,false));if(this._config.exclude.length>0)
for(var e=0;e<this._config.exclude.length;e++)
retXml.Append(tic_Utilities.PackageXml("Exclude",this._config.exclude[e],false));retXml.Append(tic_Utilities.MakeXmlEndTag("Dates",false));retXml.Append(tic_Utilities.MakeXmlEndTag("RecurrencePattern",false));}
return retXml.ReturnAndEmpty();}
RecurrencePattern.prototype.ReturnXmlAndEmpty=function(){var xml=this.ReturnXml();this.Empty();return xml;}
/* Utilities.js */
var tic_Utilities={LoadScriptFile:function(fileName){var fileNameLower=fileName.toLowerCase();var head=document.getElementsByTagName("head")[0]
var allScripts=head.getElementsByTagName("script");for(var ii=0;ii<allScripts.length;ii++)
if(allScripts[ii].hasAttribute("src")&&allScripts[ii].getAttribute("src").toLowerCase()==fileNameLower)
return;var newElt=document.createElement("script");newElt.src=fileName;newElt.type="text/javascript";head.appendChild(newElt);},GetVoidUrl:function(){if(tic_Utilities.IsIE())
return"";else
return"javascript: void(0);";},SetElementStyles:function(element,styleDict){var style=element.style;for(var styleName in styleDict)
style[styleName]=styleDict[styleName];},GetCurrentElementStyle:function(element,propertyName){if(tic_Utilities.IsIE())
return element.currentStyle[propertyName];else
return element.ownerDocument.defaultView.getComputedStyle(element,'').getPropertyValue(propertyName);},ResetStyles:function(element){element.style.cssText='margin:0;padding:0;border:0;background-color:transparent;background-image:none;';},Bind:function(subject,func){return function(){return func.apply(subject,arguments);};},AddEventListener:function(sourceObject,eventName,listener){if(!sourceObject)
return;if(sourceObject.addEventListener)
sourceObject.addEventListener(eventName,listener,false);else if(sourceObject.attachEvent)
sourceObject.attachEvent('on'+eventName,listener);},RemoveEventListener:function(sourceObject,eventName,listener){if(!sourceObject)
return;if(sourceObject.removeEventListener)
sourceObject.removeEventListener(eventName,listener,false);else if(sourceObject.detachEvent)
sourceObject.detachEvent('on'+eventName,listener);},RemoveNode:function(node,excludeChildren){if(excludeChildren){var eChild;while((eChild=node.firstChild))
node.parentNode.insertBefore(node.removeChild(eChild),node);}
if(node.parentNode)
return node.parentNode.removeChild(node);else
return null;},IsFirefox:function(){var htmlTags=document.getElementsByTagName("HTML");if(htmlTags&&htmlTags.length>0)
return tic_Utilities.HasStyle(htmlTags[0],"Firefox");return false;},IsIE:function(version){var htmlTags=document.getElementsByTagName("HTML");if(!htmlTags||htmlTags.length==0)
return false;if(version)
return tic_Utilities.HasStyle(htmlTags[0],"IE"+version);return tic_Utilities.HasStyle(htmlTags[0],"IE");},GetTargetCtl:function(evt){evt=evt||window.event;if(!evt)
return null;else if(evt.target)
return evt.target;else if(evt.originalTarget)
return evt.originalTarget;else if(evt.srcElement)
return evt.srcElement;return null;},GetWhich:function(evt){evt=evt||window.event;if(!evt)
return null;else if(evt.which)
return evt.which;else if(evt.keyCode)
return evt.keyCode;return null;},GetQueryStringArg:function(){var hashValue=null;if(location.hash)
hashValue=location.hash;else if(location.search)
hashValue=location.search;return hashValue;},ImagePreview:function(docID,siteID,evt){tic_RadWindowOps.DisplayDialogWithUrl2("ImagePreview","/display/components/Blocks/Support/ImageEditor/ImagePreview.aspx?DocID="+docID+"&SiteID="+siteID,634,535,null,"Image Details",null,true);tic_Utilities.CancelBubble(evt);},DisableOneButton:function(buttonCtl){if(buttonCtl&&(buttonCtl.type=="button"||buttonCtl.type=="submit"||buttonCtl.tagName=="SPAN")){buttonCtl.disabled=true;tic_Utilities.AddStyle(buttonCtl,"disabled");}},DisableButtons:function(){var buttons=document.getElementsByTagName("INPUT");for(var ii=0;ii<buttons.length;++ii)
tic_Utilities.DisableOneButton(buttons[ii]);},EnableOneButton:function(buttonCtl){if(buttonCtl&&(buttonCtl.type=="button"||buttonCtl.type=="submit"||buttonCtl.tagName=="SPAN")){buttonCtl.disabled=false;tic_Utilities.RemoveStyle(buttonCtl,"disabled");}},EnableButtons:function(){var buttons=document.getElementsByTagName("INPUT");for(var ii=0;ii<buttons.length;++ii)
tic_Utilities.EnableOneButton(buttons[ii]);},EnableDisableOneButtonById:function(buttonID,doEnable){var ctlButton=document.getElementById(buttonID);if(!ctlButton)
return;if(doEnable)
tic_Utilities.EnableOneButton(ctlButton);else
tic_Utilities.DisableOneButton(ctlButton);},DisableBackspaceHistory:function(){var rx=/INPUT|SELECT|TEXTAREA/i,rxType=/BUTTON|CHECKBOX|RADIO|SUBMIT/i,backspaceHistoryBlocker=function(e){if(e.which!=8)
return;if(!rx.test(e.target.tagName)||rxType.test(e.target.type)||e.target.disabled||e.target.readOnly)
e.preventDefault();};tic_Utilities.AddEventListener(window,"keydown",backspaceHistoryBlocker);tic_Utilities.AddEventListener(window,"keypress",backspaceHistoryBlocker);},StyleArray:function(ctl){if(!ctl||!ctl.className)
return new Array();return ctl.className.split(" ");},HasStyle:function(ctl,style){if(ctl.classList&&ctl.classList.contains)
return ctl.classList.contains(style);var styles=tic_Utilities.StyleArray(ctl);if(!styles||!styles.length)
return false;for(var ii=0;ii<styles.length;++ii)
if(styles[ii]==style)
return true;return false;},ToggleStyle:function(ctl,style){if(tic_Utilities.HasStyle(ctl,style))
return tic_Utilities.RemoveStyle(ctl,style);tic_Utilities.AddStyle(ctl,style);return"";},RemoveStyle:function(ctl,style){var styles=tic_Utilities.StyleArray(ctl);if(!styles||!styles.length)
return false;var newStyle="";var retVal=false;for(var ii=0;ii<styles.length;++ii){if(styles[ii]==style)
retVal=true;else
newStyle+=((newStyle?" ":"")+styles[ii]);}
if(retVal)
ctl.className=newStyle;return retVal;},AddStyle:function(ctl,style){if(!ctl)
return;if(tic_Utilities.HasStyle(ctl,style))
return;if(!ctl.className)
ctl.className=style;else
ctl.className+=" "+style;},CancelBubble:function(evt){evt=evt||window.event;if(!evt)
return;evt.cancelBubble=true;if(evt.stopPropagation)
evt.stopPropagation();if(evt.preventDefault)
evt.preventDefault();return false;},LeftTrim:function(strVal){return strVal?strVal.replace(/^\s+/,''):"";},RightTrim:function(strVal){return strVal?strVal.replace(/\s+$/,''):"";},Trim:function(strVal){return strVal?strVal.replace(/^\s+|\s+$/g,''):"";},PackageXml:function(tagName,data,includeCData){var retVal=tic_Utilities.MakeXmlStartTag(tagName,includeCData);retVal+=data;retVal+=tic_Utilities.MakeXmlEndTag(tagName,includeCData);return retVal;},XmlWithAttributes:function(tagName){var retVal="<"+tagName;for(var ii=1;ii<arguments.length;ii+=2)
retVal+=" "+arguments[ii]+"='"+EscapeSingleQuotes(String(arguments[ii+1]))+"'";return retVal+"/>";},MakeXmlStartTag:function(tagName,includeCData){if(!tagName||tagName.length==0)
return"";return"<"+tagName+">"+(includeCData?"<![CDATA[":"");},MakeXmlStartTagWithAttributes:function(tagName,includeCData){if(!tagName||tagName.length==0)
return"";var retVal="<"+tagName;for(var ii=2;ii<arguments.length;ii+=2)
retVal+=" "+arguments[ii]+"='"+EscapeSingleQuotes(String(arguments[ii+1]))+"'";return retVal+">"+(includeCData?"<![CDATA[":"");},MakeXmlEndTag:function(tagName,includeCData){if(!tagName||tagName.length==0)
return''
return(includeCData?"]]>":"")+"</"+tagName+">";},SetDialogClass:function(actionType){var bodyTag=document.getElementById("bodyTag");if(!bodyTag)
return;switch(actionType){case"alert":case"error":case"warning":bodyTag.className="dialog_alert";break;case"input":case"form":case"forms":bodyTag.className="dialog_input";break;default:case"prompt":case"yesno":bodyTag.className="dialog_prompt";break;case"working":case"loading":bodyTag.className="dialog_processing";break;}},ShowHideById:function(ctlID,doShow){var ctl=document.getElementById(ctlID);if(ctl)
ctl.style.display=(doShow?"block":"none");},ToggleShowHide:function(ctlID){var ctl=document.getElementById(ctlID);if(ctl)
ctl.style.display=(ctl.style.display=="none"?"block":"none");},ForceVisible:function(id){var item=document.getElementById(id);if(!item)
return;item.style.display="block";item.style.visibility="visible";},ToggleContextHelp:function(regionName,evt){tic_Utilities.CancelBubble(evt);var area=document.getElementById(regionName);if(area)
area.style.display=((area.style.display=="block")?"none":"block");},ExecuteFunctionByName:function(funcName,context,argsArray){var namespaces=funcName.split("."),func=namespaces.pop();for(var i=0;i<namespaces.length;i++)
context=context[namespaces[i]];return context[func].apply(this,argsArray);},DisplayContentFilePicker:function(txtControlName,filter){var prevFileCtl=document.getElementById(txtControlName),prevFileUrl="",args={};if(prevFileCtl.value)
prevFileUrl=prevFileCtl.value;args.Ctl=prevFileCtl;args.Callback=function(ctl,data){SFSetControlValue(ctl.id,data.linkText,true);};args.AttributeData={url:prevFileUrl,type:"",newwin:"0",text:""};var dialogUrl=new StringBuilder("/display/components/Blocks/Support/ContentPicker/Operations/ContentFilePicker.aspx");dialogUrl.Append("?Filter=",filter);tic_RadWindowOps.DisplayDialogWithUrl2("FilePicker",dialogUrl.ReturnAndEmpty(),900,492,args,"File Picker",null,true);},DisplayLinkBuilder:function(txtControlName,showData,showFile,showExt,showEmail,showTel,showMRU,showUpload){var linkCtl=document.getElementById(txtControlName),prevUrl="",prevType="",prevNewWin="0",args={};if(linkCtl.value)
prevUrl=linkCtl.value;if(linkCtl.getAttribute("titan-linkType"))
prevType=linkCtl.getAttribute("titan-linkType");if(linkCtl.getAttribute("titan-useNewWindow"))
prevNewWin=linkCtl.getAttribute("titan-useNewWindow");args.Ctl=linkCtl;args.Callback=function(ctl,data){ctl.value=data.linkText;ctl.setAttribute("titan-linkType",data.linkType);ctl.setAttribute("titan-useNewWindow",(data.target=="_blank")?"1":"0");ctl.defaultValue="changed";if(ctl.onchange)
ctl.onchange();};args.AttributeData={url:prevUrl,type:prevType,newwin:prevNewWin,text:""};var dialogUrl=new StringBuilder("/display/components/Blocks/Support/ContentPicker/Operations/ContentLinkPicker.aspx");dialogUrl.Append("?ShowData=",(showData)?"1":"0");dialogUrl.Append("&ShowFile=",(showFile)?"1":"0");dialogUrl.Append("&ShowExternal=",(showExt)?"1":"0");dialogUrl.Append("&ShowEmail=",(showEmail)?"1":"0");dialogUrl.Append("&ShowTelephone=",(showTel)?"1":"0");dialogUrl.Append("&ShowMRU=",(showMRU)?"1":"0");dialogUrl.Append("&ShowUpload=",(showUpload)?"1":"0");tic_RadWindowOps.DisplayDialogWithUrl2("LinkBuilder",dialogUrl.ReturnAndEmpty(),900,492,args,"Link Picker",null,true);},DisplayFolderPicker:function(txtControlName){var obj={SelectedItem:document.getElementById(txtControlName).value,retFunction:function(sentArgs,newValue){document.getElementById(sentArgs.FollowupControl).value=newValue;},FollowupControl:txtControlName}
tic_RadWindowOps.DisplayDialogWithUrl2("FolderPicker","/display/components/Blocks/FormBlock/Support/ContentItemPicker.aspx?Show=ShowFoldersOnly&UseWkstSec=1",500,500,obj,"Choose Folder for Uploaded Files",null,true);}};function StringBuilder(){this.strings=new Array("");for(var ii=0;ii<arguments.length;++ii)
if(arguments[ii])
this.strings.push(arguments[ii]);}
StringBuilder.prototype.Append=function(){for(var ii=0;ii<arguments.length;++ii)
if(arguments[ii])
this.strings.push(arguments[ii]);}
StringBuilder.prototype.ReturnAndEmpty=function(){var retString=this.strings.join("");this.strings=null;return retString;}
StringBuilder.prototype.IsEmpty=function(){return this.strings.length==1;}
var tic_Positioning={GetViewPaneSize:function(win){if(tic_Utilities.IsIE()){var oSizeSource;var oDoc=win.document.documentElement;if(oDoc&&oDoc.clientWidth)
oSizeSource=oDoc;else
oSizeSource=win.document.body;if(oSizeSource)
return{Width:oSizeSource.clientWidth,Height:oSizeSource.clientHeight};else
return{Width:0,Height:0};}
else
return{Width:win.innerWidth,Height:win.innerHeight};},GetScrollPosition:function(relativeWindow){if(tic_Utilities.IsIE()){var oDoc=relativeWindow.document;var oPos={X:oDoc.documentElement.scrollLeft,Y:oDoc.documentElement.scrollTop};if(oPos.X>0||oPos.Y>0)
return oPos;return{X:oDoc.body.scrollLeft,Y:oDoc.body.scrollTop};}
else
return{X:relativeWindow.pageXOffset,Y:relativeWindow.pageYOffset};},GetElementDocument:function(element){return element.ownerDocument||element.document;},GetElementWindow:function(element){return tic_Positioning.GetDocumentWindow(tic_Positioning.GetElementDocument(element));},GetDocumentWindow:function(document){return document.parentWindow||document.defaultView;},GetDocumentPosition:function(w,node){var x=0;var y=0;var curNode=node;var prevNode=null;var curWindow=tic_Positioning.GetElementWindow(curNode);if(tic_Utilities.IsFirefox()){var obj=tic_Positioning.GetElementPositionForFirefox(node,w);return{"x":obj.X,"y":obj.Y};}
while(curNode&&!(curWindow==w&&(curNode==w.document.body||curNode==w.document.documentElement))){x+=curNode.offsetLeft-curNode.scrollLeft;y+=curNode.offsetTop-curNode.scrollTop;if(prevNode&&prevNode.tagName=="IFRAME"&&prevNode.id){var scrollNode=prevNode;while(scrollNode&&scrollNode!=curNode){x-=scrollNode.scrollLeft;y-=scrollNode.scrollTop;scrollNode=scrollNode.parentNode;}}
prevNode=curNode;if(curNode.offsetParent)
curNode=curNode.offsetParent;else{if(curWindow!=w){curNode=curWindow.frameElement;prevNode=null;if(curNode)
curWindow=curNode.contentWindow.parent;}
else
curNode=null;}}
if(tic_Utilities.GetCurrentElementStyle(w.document.body,'position')!='static'||(tic_Utilities.IsIE()&&tic_Positioning.GetPositionedAncestor(node)==null)){x+=w.document.body.offsetLeft;y+=w.document.body.offsetTop;}
return{"x":x,"y":y};},GetPositionedAncestor:function(element){var currentElement=element;while(currentElement!=tic_Positioning.GetElementDocument(currentElement).documentElement){if(tic_Utilities.GetCurrentElementStyle(currentElement,'position')!='static')
return currentElement;if(currentElement==tic_Positioning.GetElementDocument(currentElement).documentElement&&currentWindow!=w)
currentElement=currentWindow.frameElement;else
currentElement=currentElement.parentNode;}
return null;},GetElementPositionForFirefox:function(el,relativeWindow){var c={X:0,Y:0};var oWindow=relativeWindow||window;var oOwnerWindow=tic_Positioning.GetElementWindow(el);var previousElement=null;while(el){c.X+=el.offsetLeft-el.scrollLeft;c.Y+=el.offsetTop-el.scrollTop;if(previousElement&&previousElement.tagName=="IFRAME"&&previousElement.id){var scrollElement=previousElement;while(scrollElement&&scrollElement!=el){c.X-=scrollElement.scrollLeft;c.Y-=scrollElement.scrollTop;scrollElement=scrollElement.parentNode;}}
previousElement=el;if(el.offsetParent)
el=el.offsetParent;else{if(oOwnerWindow!=oWindow){el=oOwnerWindow.frameElement;previousElement=null;if(el)
oOwnerWindow=tic_Positioning.GetElementWindow(el);}
else{c.X+=el.scrollLeft;c.Y+=el.scrollTop;break;}}}
return c;},ScrollToElementById:function(id){var element=document.getElementById(id);if(element){element.scrollIntoViewIfNeeded(true,true);}}};if(typeof Element!=="undefined"&&!Element.prototype.scrollIntoViewIfNeeded){Element.prototype.scrollIntoViewIfNeeded=function(centerIfNeeded,bubbleUp,scrollableParent){centerIfNeeded=arguments.length===0?true:!!centerIfNeeded;var parent=scrollableParent||this.parentNode;if(parent.nodeType!==parent.ELEMENT_NODE)
return;var overTop=this.offsetTop-parent.offsetTop<parent.scrollTop,overBottom=(this.offsetTop-parent.offsetTop+this.clientHeight)>(parent.scrollTop+parent.clientHeight),overLeft=this.offsetLeft-parent.offsetLeft<parent.scrollLeft,overRight=(this.offsetLeft-parent.offsetLeft+this.clientWidth)>(parent.scrollLeft+parent.clientWidth),alignWithTop=overTop&&!overBottom,hasScrolled=false;if((overTop||overBottom)&&centerIfNeeded){parent.scrollTop=this.offsetTop-parent.offsetTop-parent.clientHeight/2+this.clientHeight/2;hasScrolled=true;}
if((overLeft||overRight)&&centerIfNeeded){parent.scrollLeft=this.offsetLeft-parent.offsetLeft-parent.clientWidth/2+this.clientWidth/2;hasScrolled=true;}
if((overTop||overBottom||overLeft||overRight)&&!centerIfNeeded){this.scrollIntoView(alignWithTop);hasScrolled=true;}
if(!hasScrolled&&bubbleUp){this.scrollIntoViewIfNeeded.call(this,centerIfNeeded,bubbleUp,parent.parentNode);}};}
if(Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get){(function(){var innerText=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function(){return innerText.get.call(this)},set:function(x){return innerText.set.call(this,x)}});})();}
/* DialogWrapper.js */
function GetGlobalZIndex(topDocument){return 20000+(topDocument.body.childNodes.length+1)*100;}
var TitanDialog=(function(){var cover;var topWindow=window.parent;while(topWindow.parent&&topWindow.parent!=topWindow){try{if(topWindow.parent.document.domain!=document.domain)
break;if(topWindow.parent.document.getElementsByTagName('frameset').length>0)
break;}
catch(e){break;}
topWindow=topWindow.parent;}
var topDocument=topWindow.document;var resizeHandler=function(){if(!cover)
return;var relElement=topDocument.documentElement;tic_Utilities.SetElementStyles(cover,{'width':Math.max(relElement.scrollWidth,relElement.clientWidth,topDocument.scrollWidth||0)-1+'px','height':Math.max(relElement.scrollHeight,relElement.clientHeight,topDocument.scrollHeight||0)-1+'px'});}
return{OpenDialog:function(dialogName,dialogTitle,dialogPage,width,height,customValue,cssFile,allowCancel){var rootZIndex=GetGlobalZIndex(topDocument);this.DisplayMainCover(rootZIndex+100);var dialogInfo={Title:dialogTitle,CssFile:cssFile,Page:dialogPage,CustomValue:customValue,TopWindow:topWindow,AllowCancel:allowCancel,BeforeCancel:null,TitanDialog:this}
var viewSize=tic_Positioning.GetViewPaneSize(topWindow);var scrollPosition=tic_Positioning.GetScrollPosition(topWindow);var iTop=Math.max(scrollPosition.Y+(viewSize.Height-height-20)/2,0);var iLeft=Math.max(scrollPosition.X+(viewSize.Width-width-20)/2,0);var dialog=topDocument.createElement('iframe');dialog.id="titanDialog_"+dialogName;tic_Utilities.ResetStyles(dialog);dialog.src='/display/dialog.aspx';dialog.frameBorder=0;dialog.allowTransparency=true;tic_Utilities.SetElementStyles(dialog,{'position':'absolute','top':iTop+'px','left':iLeft+'px','width':width+'px','height':height+'px','zIndex':rootZIndex+200});dialog._DialogArguments=dialogInfo;topDocument.body.appendChild(dialog);},OnDialogClose:function(dialogWindow){var dialog=dialogWindow;if(dialog.frameElement)
dialog=dialog.frameElement;tic_Utilities.RemoveNode(dialog);this.HideMainCover();},DisplayMainCover:function(zIndex){document.body.style.cursor="wait";cover=topDocument.createElement('div');cover.id="titanDialogCover";cover.style.zIndex=zIndex;tic_Utilities.AddEventListener(topWindow,'resize',resizeHandler);resizeHandler();topDocument.body.appendChild(cover);},HideMainCover:function(){tic_Utilities.RemoveNode(cover);document.body.style.cursor="default";},GetCover:function(){return cover;}};})();var tic_DragAndDrop=function(){var registeredWindows=[];var lastCoords;var currentPos;var cleanUpHandlers=function(){for(var i=0;i<registeredWindows.length;i++){tic_Utilities.RemoveEventListener(registeredWindows[i].document,'mousemove',dragMouseMoveHandler);tic_Utilities.RemoveEventListener(registeredWindows[i].document,'mouseup',dragMouseUpHandler);}}
var dragMouseMoveHandler=function(evt){if(!lastCoords)
return;if(!evt)
evt=tic_Positioning.GetElementDocument(this).parentWindow.event;var currentCoords={x:evt.screenX,y:evt.screenY};currentPos={x:currentPos.x+(currentCoords.x-lastCoords.x),y:currentPos.y+(currentCoords.y-lastCoords.y)};lastCoords=currentCoords;frameElement.style.left=currentPos.x+'px';frameElement.style.top=currentPos.y+'px';if(evt.preventDefault)
evt.preventDefault();else
evt.returnValue=false;}
var dragMouseUpHandler=function(evt){if(!lastCoords)
return;if(!evt)
evt=tic_Positioning.GetElementDocument(this).parentWindow.event;cleanUpHandlers();lastCoords=null;}
return{MouseDownHandler:function(evt){var view=null;if(!evt){view=tic_Positioning.GetElementDocument(this).parentWindow;evt=view.event;}
else
view=evt.view;var target=tic_Utilities.GetTargetCtl(evt);if(target.id=='closeButton'||target.className=='PopupTab'||target.className=='PopupTabSelected')
return;lastCoords={x:evt.screenX,y:evt.screenY};currentPos={x:parseInt(tic_Utilities.GetCurrentElementStyle(frameElement,'left'),10),y:parseInt(tic_Utilities.GetCurrentElementStyle(frameElement,'top'),10)};for(var i=0;i<registeredWindows.length;i++){tic_Utilities.AddEventListener(registeredWindows[i].document,'mousemove',dragMouseMoveHandler);tic_Utilities.AddEventListener(registeredWindows[i].document,'mouseup',dragMouseUpHandler);}
if(evt.preventDefault)
evt.preventDefault();else
evt.returnValue=false;},RegisterHandlers:function(w){registeredWindows.push(w);}}}();var tic_RadWindowOps={GetRadWindow:function(){if(window.parent==window)
return null;return window.parent;},GetContainerWindow:function(){return tic_RadWindowOps.GetRadWindow().BrowserWindow;},DisplayDialogWithUrl2:function(name,url,width,height,dialogArgs,title,cssFile,allowCancel){if(String(width).indexOf("px")>0)
width=width.substring(0,width.indexOf("px"));if(String(height).indexOf("px")>0)
height=height.substring(0,height.indexOf("px"));if(url.indexOf("/")!=0)
url=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")+1)+url;TitanDialog.OpenDialog(name,title,url,width,height,dialogArgs,cssFile,allowCancel,10000);},WindowIsOpen:function(){var body=document.body;var children=body.childNodes;for(var ii=0;ii<children.length;++ii)
if(children[ii].id&&children[ii].id.indexOf("titanDialog_")==0)
return true;return false;},CloseWindows:function(){var body=document.body;var children=body.childNodes,toDeletes=[];for(var ii=0;ii<children.length;++ii)
if(children[ii].id&&children[ii].id.indexOf("titanDialog_")==0)
toDeletes[toDeletes.length]=children[ii];for(var ii=0;ii<toDeletes.length;++ii)
TitanDialog.OnDialogClose(toDeletes[ii]);}};var CK_EditorSupport={EditorIsReady:function(id){var ed=CKEDITOR.instances[id];if(!ed)
return false;return ed.titanFlag==1;},EditorCanSave:function(id){var ed=CKEDITOR.instances[id];return ed.document;},EditorExists:function(id){return CKEDITOR.instances[id];},ChangeDetector:function(id){try{if(!CK_EditorSupport.EditorIsReady(id))
return false;var editor=CKEDITOR.instances[id];if(!editor)
return false;return editor.checkDirty();}
catch(e)
{return false;}},ExtractData:function(id){var badData="Editor failed to complete initialization.  Reload your browser (CTRL-R) to restore the data for this block.  Note: reloading the browser will remove any changes you have just made; saving before reloading will lose the content of this block.",retVal=badData;try{var editor=CKEDITOR.instances[id];if(!editor)
return retVal;retVal=editor.getData();if(retVal==null)
retVal=badData;}
catch(e)
{if(!retVal)
retVal=badData;}
return retVal;},SetData:function(id,data){try{var editor=CKEDITOR.instances[id];if(!editor)
return false;editor.setData(data);editor.resetDirty();return true;}
catch(e){return false;}}};

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
  exclusion.robots: 0.341
  esindex: 0.015
  PetaboxLoader3.datanode: 602.252 (5)
  exclusion.robots.policy: 0.324
  RedisCDXSource: 4.548
  PetaboxLoader3.resolve: 134.023 (2)
  CDXLines.iter: 22.87 (3)
  LoadShardBlock: 578.814 (3)
  load_resource: 191.978 (2)
  captures_list: 629.629
*/