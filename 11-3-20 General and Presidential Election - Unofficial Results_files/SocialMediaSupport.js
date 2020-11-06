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

function PrintPage_Sharing(shareTo) {
    PrintPage_Sharing(shareTo, "", "");
}

function PrintPage_Sharing(shareTo, medium, campaign) {
    var utmParams = "?";
    if (medium != "" && campaign != "")
        utmParams += "utm_source=" + shareTo + "&utm_medium=" + medium + "&utm_campaign=" + campaign;

    var params = PrintPage_FormatParams();
    if (utmParams.length > 1 && params.length > 0)
        utmParams += "&";

    var url = window.location.protocol + "//" + window.location.host + window.location.pathname + utmParams + params;
    var title = document.title;
    var desc = "";
    var metas = document.getElementsByTagName('meta');
    for (var x = 0; x < metas.length; x++) {
        if (metas[x].name.toLowerCase() == "description") {
            desc = metas[x].content;
        }
    }

    switch (shareTo) {
        case "Facebook":
            window.open('https://web.archive.org/web/20201105170603/http://facebook.com/sharer.php?u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(title), 'website');
            break;
        case "Digg":
            window.open('https://web.archive.org/web/20201105170603/http://digg.com/submit?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title), 'website');
            break;
        case "Twitter":
            window.open('https://web.archive.org/web/20201105170603/http://twitter.com/home?status=' + encodeURIComponent(title) + '+-+' + encodeURIComponent(url), 'website');
            break;
        case "LinkedIn":
            window.open('https://web.archive.org/web/20201105170603/http://linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(desc), 'website');
            break;
        case "GooglePlus":
            window.open('https://web.archive.org/web/20201105170603/http://plusone.google.com/_/+1/confirm?hl=en&url=' + encodeURIComponent(url), 'website');
            break;
        /*
        case "Pinterest":
            window.open('https://web.archive.org/web/20201105170603/http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&media=&description=' + encodeURIComponent(desc), 'website');
            break;
        */
        default:
            break;
    }

    return false;
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
  load_resource: 2949.447 (2)
  PetaboxLoader3.resolve: 232.831 (2)
  RedisCDXSource: 17.551
  esindex: 0.015
  PetaboxLoader3.datanode: 2988.895 (5)
  LoadShardBlock: 329.877 (3)
  exclusion.robots.policy: 0.346
  exclusion.robots: 0.363
  captures_list: 393.576
  CDXLines.iter: 26.89 (3)
*/