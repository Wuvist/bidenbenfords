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

NWS.initNamespace("NWS.AjaxSupport", function () {
    var requestQueue = [];
    function inRequestQueue(requestID) {
        for (var i = 0; i < requestQueue.length; i++) {
            if (requestQueue[i].requestID == requestID) {
                return i;
            }
        }
        return -1;
    };

    function addToRequestQueue(requestID, requestData) {
        var requestQueuePos = inRequestQueue(requestID);
        if (requestQueuePos == -1)
            requestQueue[requestQueue.length] = { requestID: requestID, requestData: requestData };
        else
            requestQueue[requestQueuePos].requestData = requestData;
    };

    function removeFromRequestQuery(requestID) {
        requestQueue.splice(inRequestQueue(requestID), 1);
    };

    function isNewRequest(requestID, requestData) {
        var requestQueuePos = inRequestQueue(requestID);
        return requestQueuePos == -1 || [requestQueuePos].requestData != requestData;
    };

    return {
        LoadContentPopup: function (options, windowResize, url, targetContainerSelector, sourceContainerSelector, onBeforeSendMethod, onSuccessMethod, onCompleteMethod, postData, requestID) {
            NWS.AjaxSupport.LoadContent(url, targetContainerSelector, sourceContainerSelector, onBeforeSendMethod, onSuccessMethod, onCompleteMethod, postData, requestID);
            $(targetContainerSelector).dialog(options);
            if (typeof windowResize === "function") {
                $(window).resize(windowResize);
                $(window).scroll(windowResize);
            }
        },

        LoadContent: function (url, targetContainerSelector, sourceContainerSelector, onBeforeSendMethod, onSuccessMethod, onCompleteMethod, postData, requestID) {
            if ($(targetContainerSelector).length == 0) {
                window.console.error('No target container specified.');
                return;
            }

            if (typeof jQuery === 'undefined') {
                $(targetContainerSelector).html('<b>jQuery not loaded.  Cannot load content.</b>');
            }

            try {
                if (typeof requestID === 'undefined') requestID = targetContainerSelector;

                if (isNewRequest(requestID, isPost ? postData : ""))
                    addToRequestQueue(requestID, url + isPost ? postData : "");
                else
                    return; /* not a new request, so exit */


                var isPost = !(typeof postData === 'undefined' || postData == null);
                $.ajax({
                    url: url,
                    type: isPost ? 'GET' : 'POST',
                    data: isPost ? postData : null,
                    dataType: 'html',
                    error: NWS.AjaxSupport.LoadContentError,
                    state: { requestID: requestID, targetContainer: targetContainerSelector, sourceContainer: sourceContainerSelector },
                    beforeSend: (typeof onBeforeSendMethod === "function") ? onBeforeSendMethod : null,
                    success: (typeof onSuccessMethod === "function") ? onSuccessMethod : NWS.AjaxSupport.LoadContentSuccess,
                    complete: (typeof onCompleteMethod === "function") ? onCompleteMethod : NWS.AjaxSupport.LoadContentComplete
                });
            } catch (e) {
                window.console.error(e.message);
                $(targetContainerSelector).html('<b>Cannot load content</b>');
            }
        },
        LoadContentBeforeSend: function (jqXHR, data) {
            $(this.state.targetContainer).html("<div class=\"loading\">Loading</div>");
        },

        LoadContentSuccess: function (data, status, jqXHR) {
            var element = $(document.createElement("div"));
            element.html(data);
            $(this.state.targetContainer).html(element.find(this.state.sourceContainer).html());
        },

        LoadContentComplete: function (jqXHR, status) {
            requestQueue.splice($.inArray(jqXHR.state.requestID), 1);
        },

        LoadContentError: function (jqXHR, status, errorThrown) {
            window.console.error(status + ' - ' + errorThrown);
        }
    };
});

}
/*
     FILE ARCHIVED ON 17:06:03 Nov 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:37 Nov 06, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 85.1
  PetaboxLoader3.datanode: 2137.643 (5)
  exclusion.robots: 0.359
  exclusion.robots.policy: 0.341
  PetaboxLoader3.resolve: 951.06 (2)
  CDXLines.iter: 23.67 (3)
  captures_list: 2152.262
  esindex: 0.015
  load_resource: 1189.835 (2)
  LoadShardBlock: 2012.313 (3)
*/