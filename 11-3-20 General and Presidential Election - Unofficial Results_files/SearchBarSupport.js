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

/*
* NOTE: THIS JS HAS A DEPENDENCY ON NWSAjaxSupport.js AND jQuery
*/
NWS.initNamespace("NWS.SearchSegmentSupport", function () {

    // global params
    var searchTimer, suggestionTimer, terms;
    var suggestionInterval = 500; // timeout in ms

    function createMessageNode(parentNode, message) {
        var messageNode = document.createElement('div');
        messageNode.textContent = message;
        if (parentNode)
            parentNode.appendChild(messageNode);
    }

    function setPaginationOverridesForBlock(pagingElement) {
        var currentPage = parseInt(pagingElement.value),
        prevPage = currentPage - 1,
        nextPage = currentPage + 1,
        source = document.getElementById('hidSrcContainer').value,
        target = document.getElementById('hidTargetContainer').value,
        segmentName = document.getElementById('hidActiveSegment').value.split('|')[0],
        linkParam = document.getElementById('hidActiveSegment').value.split('|')[1];

        var parent, prevButtons, nextButtons;
        var blockID = pagingElement.id.split('_')[0];
        linkParam += '?' + pagingElement.id + '=';

        if (blockID.toLowerCase() === 'search') {
            // search results block
            parent = pagingElement.parentNode;
        }
        else {
            // datalist or a filter block with a typical block prefix
            parent = document.querySelector('#' + blockID + '_ResultsDiv');
        }

        if (parent) {
            prevButtons = parent.querySelectorAll('li.prevButton a');
            nextButtons = parent.querySelectorAll('li.nextButton a');

            // now do the overrides for the previous and next buttons
            for (var j = 0; j < prevButtons.length; j++)
                prevButtons[j].setAttribute('onclick', 'event.preventDefault();NWS.SearchSegmentSupport.LoadSegment(\'' + segmentName + '\', \'' + linkParam + prevPage + '\', \'' + source + '\', \'' + target + '\');');

            for (var k = 0; k < nextButtons.length; k++)
                nextButtons[k].setAttribute('onclick', 'event.preventDefault();NWS.SearchSegmentSupport.LoadSegment(\'' + segmentName + '\', \'' + linkParam + nextPage + '\', \'' + source + '\', \'' + target + '\');');
        }
        
    }

    function isEnterKey(e) {
        return (e.keyCode == 13 || e.which == 13);
    }

    function isUpArrow(e) {
        return (e.keyCode == 38 || e.which == 38);
    }

    function isDownArrow(e) {
        return (e.keyCode == 40 || e.which == 40);
    }

    function changeFocus(searchBarElement, currentFocus, indexToMove) {
        var focusArr = new Array();

        focusArr.push(searchBarElement);
        var focusItems = document.querySelectorAll('.suggestionWrapper .suggestedTerm');
        for (var i = 0; i < focusItems.length; i++)
            focusArr.push(focusItems[i]);

        var currentInd = focusArr.indexOf(currentFocus);
        var newFocus = focusArr[Math.abs((focusArr.length + currentInd + indexToMove) % focusArr.length)];
        newFocus.focus();
    }

    return {
        init: function () {
            var segmentDetails = document.getElementById('hidActiveSegment');
            if (segmentDetails) {
                var segmentName = segmentDetails.value.split('|')[0];
                var linkParam = segmentDetails.value.split('|')[1];
                var source = document.getElementById('hidSrcContainer').value;
                var target = document.getElementById('hidTargetContainer').value;

                if (linkParam) {
                    // segments are supported
                    terms = document.querySelector('.searchOuterWrapper input[type="text"]').value;
                    NWS.SearchSegmentSupport.LoadSegment(segmentName, linkParam, source, target);
                }
            }
            
        },
        LoadSegment: function (name, url, sourceSelector, targetSelector) {
            var qs = url.indexOf('?') === -1 ? '?' : '&';
            var fullUrl = url + qs + 'search_keywords=' + terms;
            
            // if target container does not exist, create container div with ID
            var target = document.querySelector('#' + targetSelector);
            if (!target) {
                var targetNode = document.createElement('div');
                targetNode.id = targetSelector;
                // append to source selector if it exists on the page
                if (document.querySelector('#' + sourceSelector))
                    document.querySelector('#' + sourceSelector).appendChild(targetNode);
                else
                    document.querySelector('#contentArea .siteBounds').appendChild(targetNode);
            }
            createMessageNode(target, 'Please wait while we gather your results.');

            NWS.SearchSegmentSupport.SetActiveSegment(name, url.split('?')[0]);
            NWS.AjaxSupport.LoadContent(fullUrl, '#' + targetSelector, '#' + sourceSelector, NWS.SearchSegmentSupport.LoadSegmentBeforeSend, null, NWS.SearchSegmentSupport.LoadSegmentComplete, null, url);
        },
        LoadSegmentBeforeSend: function (jqXHR, data){
            document.querySelector(this.state.targetContainer).innerHTML = '<div class=\"loadingWrapper\"><div class=\"loading\">Loading...</div></div>';
        },
        LoadSegmentComplete: function (jqXHR, status) {
            // set the pagination overrides if blocks with paging exist in the segment
            var pagingInfo = document.querySelectorAll('input[id*=\'_PageNum\']');
            for (var i = 0; i < pagingInfo.length; i++)
                setPaginationOverridesForBlock(pagingInfo[i]);
        },
        SetActiveSegment: function (segmentName, url) {
            var segments = document.querySelectorAll('ul.searchSegments li');
            for (var i = 0; i < segments.length; i++) {
                segments[i].classList.remove('active');
            }
            tic_Utilities.AddStyle(document.querySelector('ul.searchSegments li[data-name="' + segmentName + '"]'), 'active');
            document.getElementById('hidActiveSegment').value = segmentName + '|' + url;
        },
        ResultsFilter: function (e, minCharacters, delayMS) {
            if (isEnterKey(e))
                return false;

            clearTimeout(searchTimer);
            searchTimer = setTimeout(
                function () {
                    terms = e.target.value;
                    if (terms.length >= minCharacters) {
                        var activeSegment = document.getElementById('hidActiveSegment').value.split('|')[0];
                        var activeLinkParam = document.getElementById('hidActiveSegment').value.split('|')[1];
                        var source = document.getElementById('hidSrcContainer').value;
                        var target = document.getElementById('hidTargetContainer').value;

                        NWS.SearchSegmentSupport.LoadSegment(activeSegment, activeLinkParam, source, target);
                    }
                },
                delayMS);
        },
        GetSuggestions: function (e, indexID, minCharacters, delayMS, resultsPagePath, blockID, maxSuggestions, postbackEnabled) {
            if (isEnterKey(e) && !postbackEnabled)
                return false;

            if (isDownArrow(e)) {
                changeFocus(e.target, e.target, 1);
                return false;
            }
            if (isUpArrow(e)) {
                changeFocus(e.target, e.target, -1);
                return false;
            }


            clearTimeout(suggestionTimer);
            suggestionTimer = setTimeout
                (function () {
                    var keywords = e.target.value;
                    if (keywords.length >= minCharacters) {
                        var args = new Array();
                        args[args.length] = keywords;
                        args[args.length] = indexID;
                        args[args.length] = maxSuggestions;

                        TitanDisplayServiceWrapper.MakeWebServiceCall('GetSuggestions',
                            NorthwoodsSoftwareDevelopment.Cms.WebServices.SearchBarAjax.GetSuggestions, args, NWS.SearchSegmentSupport.OnGetSuggestionsCompleted, [resultsPagePath, blockID, e.target, postbackEnabled], true);
                    }
                },
                suggestionInterval);
        },
        OnGetSuggestionsCompleted: function (resultsPage, searchID, searchBarElement, postbackEnabled, responseAsJSON, responseAsXml, responseAsText) {
            var parentEl = searchBarElement.parentNode.parentNode;
            var suggestionWrapper = parentEl.querySelector('.suggestionWrapper');
            if (!suggestionWrapper) {
                suggestionWrapper = document.createElement('div');
                suggestionWrapper.setAttribute('class', 'suggestionWrapper');
                parentEl.appendChild(suggestionWrapper);
            }
            suggestionWrapper.innerHTML = '';

            if (responseAsJSON && responseAsJSON !== '') {
                var results = responseAsJSON.split(',');

                for (var j = 0; j < results.length; j++) {
                    if (results[j] !== '' && results[j] !== undefined) {
                        var suggestionNode = document.createElement('div');
                        suggestionNode.textContent = results[j];
                        suggestionNode.setAttribute('class', 'suggestedTerm');
                        suggestionNode.setAttribute('tabindex', -1);
                        suggestionNode.addEventListener('keydown', function (e) {
                            if (isDownArrow(e) || isUpArrow(e))
                                e.preventDefault();
                        }, false);
                        suggestionNode.addEventListener('keyup', function (e) {
                            NWS.SearchSegmentSupport.SetSearchTerm(e, resultsPage, searchBarElement, postbackEnabled);
                        }, false);
                        suggestionNode.addEventListener('focus', function (e) {
                            document.getElementById(searchID + 'searchTerms').value = e.target.innerText;
                            terms = e.target.innerText;

                            if (!postbackEnabled) {
                                clearTimeout(searchTimer);
                                searchTimer = setTimeout(
                                    function () {
                                        var activeSegment = document.getElementById('hidActiveSegment').value.split('|')[0];
                                        var activeLinkParam = document.getElementById('hidActiveSegment').value.split('|')[1];
                                        var source = document.getElementById('hidSrcContainer').value;
                                        var target = document.getElementById('hidTargetContainer').value;
                                        NWS.SearchSegmentSupport.LoadSegment(activeSegment, activeLinkParam, source, target);
                                    }, suggestionInterval);
                            }

                        }, false);
                        suggestionNode.addEventListener('click', function (e) {
                            NWS.SearchSegmentSupport.CloseSuggestions();
                            document.getElementById(searchID + 'searchTerms').value = e.target.innerText;
                            if (postbackEnabled)
                                SearchSubmit(resultsPage, document.getElementById(searchID + 'searchTerms'));
                            else {
                                terms = e.target.innerText;
                                var activeSegment = document.getElementById('hidActiveSegment').value.split('|')[0];
                                var activeLinkParam = document.getElementById('hidActiveSegment').value.split('|')[1];
                                var source = document.getElementById('hidSrcContainer').value;
                                var target = document.getElementById('hidTargetContainer').value;

                                NWS.SearchSegmentSupport.LoadSegment(activeSegment, activeLinkParam, source, target);
                            }
                        }, false);

                        suggestionWrapper.appendChild(suggestionNode);
                    }
                }
            }

            // remove suggestions when user clicks outside search bar
            document.onclick = function (e) {
                if (searchBarElement.contains(e.target)) {
                    document.querySelector('.suggestionWrapper').style.display = 'block';
                } else {
                    document.querySelector('.suggestionWrapper').style.display = 'none';
                }
            }
        },
        SetSearchTerm: function (e, resultsPage, searchBar, postbackEnabled) {
            if (isDownArrow(e))
                changeFocus(searchBar, e.target, 1);

            if (isUpArrow(e))
                changeFocus(searchBar, e.target, -1);

            if (isEnterKey(e)) {
                NWS.SearchSegmentSupport.CloseSuggestions();
                if (postbackEnabled)
                    SearchSubmit(resultsPage, document.getElementById(searchBar.id));
                else
                    e.preventDefault();
            }
        },
        CloseSuggestions: function () {
            document.querySelector('.suggestionWrapper').style.display = 'none';
        }
    };

});
document.onready = NWS.SearchSegmentSupport.init;


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
  exclusion.robots.policy: 0.223
  PetaboxLoader3.resolve: 410.205 (4)
  LoadShardBlock: 298.945 (3)
  load_resource: 484.761 (2)
  RedisCDXSource: 7.478
  exclusion.robots: 0.235
  captures_list: 353.534
  esindex: 0.012
  CDXLines.iter: 23.884 (3)
  PetaboxLoader3.datanode: 321.503 (5)
*/