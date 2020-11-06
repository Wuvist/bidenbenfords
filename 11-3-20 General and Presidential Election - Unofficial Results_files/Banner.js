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

function DebugReport(span, txt)
{
    if (document.getElementById(span))
        document.getElementById(span).innerHTML = String(txt);
}

function Banner_SmallPrevNext(id, dir, numToDisplay, evt)
{
    tic_Utilities.CancelBubble(evt);

    var bigDiv = document.getElementById(id);
    if (!bigDiv)
        return ;
        
    var smallKids = bigDiv.smallKids ;
    if (!smallKids || !smallKids.length)
        return ;        
        
    if (!bigDiv.firstSmall)
        bigDiv.firstSmall = 0 ;
        
    tic_Utilities.RemoveStyle(document.getElementById(id + "_smallPrev"), "disabled");        
    tic_Utilities.RemoveStyle(document.getElementById(id + "_smallNext"), "disabled");        
    var newFirst = bigDiv.firstSmall ;                
    newFirst += (dir == 'prev')?-1:1;
    if (newFirst <= 0)
    {
        newFirst = 0 ;
        tic_Utilities.AddStyle(document.getElementById(id + "_smallPrev"), "disabled");        
    }
    else if (newFirst+numToDisplay >= smallKids.length)
    {
        newFirst = smallKids.length - numToDisplay;
        tic_Utilities.AddStyle(document.getElementById(id + "_smallNext"), "disabled");        
    }
    bigDiv.firstSmall = newFirst;            
    
    for (var ii=0 ; ii<smallKids.length ; ++ii)
        if (ii < newFirst || ii >= newFirst + numToDisplay)
            smallKids[ii].style.display = "none";
        else 
            smallKids[ii].style.display = "inline";
}

function Banner_SmallImageClick(id, smallDiv, evt)
{
    tic_Utilities.CancelBubble(evt);
    
    var bigDiv = document.getElementById(id);
    if (!bigDiv)
        return ;
        
    var smallKids = bigDiv.smallKids ;
    if (!smallKids || smallKids.length == 0)
        return ;        
        
    var clickedItem = tic_Utilities.GetTargetCtl(evt);
    while (clickedItem && clickedItem != smallDiv)
        if (tic_Utilities.HasStyle(clickedItem, "image"))
            break ;
        else
            clickedItem = clickedItem.parentNode ;
    
    if (!clickedItem || clickedItem == smallDiv)
        return;
        
    var idx=-1;
    for (idx=0 ; idx<smallKids.length ; ++idx)
        if (smallKids[idx] == clickedItem)
            break ;

    if (idx < 0 || idx >= smallKids.length)
        return ;
        
    Banner_SetSmallSelect(smallKids, idx);                
    bigDiv.switchFunc(id, bigDiv, bigDiv.kids, idx);
}

function Banner_PlayPause(id, isPaused)
{
    var bigDiv = document.getElementById(id);
    if (!bigDiv)
        return ;

    bigDiv.isPaused = isPaused;    
    if (isPaused)
    {
        tic_Utilities.AddStyle(document.getElementById(id + "_PauseButton"), "disabled");
        tic_Utilities.RemoveStyle(document.getElementById(id + "_PlayButton"), "disabled");
    }
    else
    {
        tic_Utilities.RemoveStyle(document.getElementById(id + "_PauseButton"), "disabled");
        tic_Utilities.AddStyle(document.getElementById(id + "_PlayButton"), "disabled");
    }
}

function Banner_SetSmallSelect(smallKids, idx)
{
    if (!smallKids || smallKids.length == 0)
        return ;

    for (var ii=0 ; ii<smallKids.length ; ++ii)
        tic_Utilities.RemoveStyle(smallKids[ii], "current");
            
    tic_Utilities.AddStyle(smallKids[idx], "current");
}

function Banner_ForceNextPrev(id, dir)
{
    var bigDiv = document.getElementById(id);
    if (!bigDiv)
        return ;
        
    var newIdx = bigDiv.activeIdx + ((dir == 'next')?1:-1);    
    if (newIdx >= bigDiv.kids.length)
        newIdx = 0 ;
    else if (newIdx < 0)
        newIdx = bigDiv.kids.length - 1;        

    bigDiv.switchFunc(id, bigDiv, bigDiv.kids, newIdx);
}

function Banner_GrindCPU(id)
{  
    var bigDiv = document.getElementById(id);
    if (!bigDiv)
        return;

    var processingTime = bigDiv.processingTime;
    if (!processingTime)
        processingTime = bigDiv.imageTime;
    else if (!bigDiv.isPaused)
        processingTime = processingTime - bigDiv.sleepTime ;
    bigDiv.processingTime = processingTime ;
    
    if (bigDiv.isPaused || processingTime > bigDiv.transTime)
        return window.setTimeout("Banner_GrindCPU('" + id + "')", bigDiv.sleepTime);                                 

    return bigDiv.transFunc(id, bigDiv);        
}

function Banner_InitTransition(id, transitionType, args)
{
    var bigDiv = document.getElementById(id);
    if (!bigDiv)
        return;
    
    var kids = [] ;    
    for (var ii=0 ; ii<bigDiv.childNodes.length; ++ii)
        if (bigDiv.childNodes[ii].tagName == "DIV")
            kids[kids.length] = bigDiv.childNodes[ii];
    bigDiv.kids = kids;   

    var smallKids = [] ;   
    var smallDiv = document.getElementById(id + "_smallStuff") ;
    if (smallDiv)
        for (var ii=0 ; ii<smallDiv.childNodes.length; ++ii)
            if (smallDiv.childNodes[ii].tagName == "DIV")
                smallKids[smallKids.length] = smallDiv.childNodes[ii];
    bigDiv.smallKids = smallKids;                       
            
    bigDiv.activeIdx = kids.length-1;    
    bigDiv.isPaused = false;
    switch (transitionType)
    {
        case "fade":
            bigDiv.switchFunc = Banner_SwitchFade;
            bigDiv.transFunc = Banner_TransitionFade;
            Banner_InitFade(id, bigDiv, kids, smallKids);
            break;
        case "fadeImageOnly":
            bigDiv.switchFunc = Banner_SwitchFadeImageOnly;
            bigDiv.transFunc = Banner_TransitionFadeImageOnly;
            Banner_InitFadeImageOnly(id, bigDiv, kids, smallKids);
            break;
        case "shiftLeft":
            bigDiv.switchFunc = Banner_SwitchShiftLeft;
            bigDiv.transFunc = Banner_TransitionShiftLeft;
            Banner_InitShiftLeft(id, bigDiv, kids, smallKids);
            break;            
        default:
            return;
    }
    
    for (var arg in args)
        bigDiv[arg] = args[arg];               

    bigDiv.switchFunc(id, bigDiv, kids, 0);                   
    window.setTimeout("Banner_GrindCPU('" + bigDiv.id + "')", bigDiv.sleepTime);    
}

/* Shift Left functions */
function Banner_InitShiftLeft(id, bigDiv, kids, smallKids)
{
    for (var ii=0 ; ii<kids.length; ++ii)
        kids[ii].style.zIndex = -10000;
}

function Banner_TransitionShiftLeft(id, bigDiv)
{
    var kids = bigDiv.kids;
    var sliderIdx = bigDiv.activeIdx + 1;
    if (sliderIdx >= kids.length)
        sliderIdx = 0;
    var slider = kids[sliderIdx];
    if (!slider)
        return;

    var currentLeft = bigDiv.currentLeft ;            
    if (!currentLeft)
        currentLeft = bigDiv.shiftWidth;
              
    currentLeft -= (bigDiv.shiftWidth*bigDiv.sleepTime)/bigDiv.transTime; 
    if (currentLeft <= 0)
    {
        bigDiv.switchFunc(id, bigDiv, kids, ((bigDiv.activeIdx+1)>=kids.length)?0:(bigDiv.activeIdx+1));   
        return window.setTimeout("Banner_GrindCPU('" + bigDiv.id + "')", bigDiv.sleepTime);            
    }

    bigDiv.currentLeft = currentLeft;
    slider.style.left = currentLeft;
    window.setTimeout("Banner_GrindCPU('" + id + "')", bigDiv.sleepTime);
}

function Banner_SwitchShiftLeft(id, bigDiv, kids, newIdx)
{
    var oldIdx = bigDiv.activeIdx ;
    if (oldIdx >= 0)
    {
        var oldCurrent = kids[oldIdx];
        tic_Utilities.RemoveStyle(oldCurrent, "ShowMeNow");
        oldCurrent.style.zIndex = -10000;
        
        var oldNext = oldIdx+1;
        if (oldNext >= kids.length)
            oldNext = 0 ;

        tic_Utilities.RemoveStyle(kids[oldNext], "ShowMeNext");
        kids[oldNext].style.left = 0;
        kids[oldNext].style.zIndex = (newIdx == oldNext)?0:-10000 ;
    }

    var newNext = newIdx+1;
    if (newNext >= kids.length)
        newNext = 0 ;        

    tic_Utilities.AddStyle(kids[newIdx], "ShowMeNow");
    tic_Utilities.AddStyle(kids[newNext], "ShowMeNext");
    
    bigDiv.processingTime = bigDiv.imageTime;
    bigDiv.currentLeft = bigDiv.shiftWidth;
    bigDiv.activeIdx = newIdx;

    kids[newNext].style.left = bigDiv.currentLeft;
    kids[newIdx].style.zIndex = -1;
    kids[newNext].style.zIndex = 0;
    
    if (bigDiv.syncSmall)
        Banner_SetSmallSelect(bigDiv.smallKids, newIdx) ;
}


/* Fade functions */
function Banner_InitFade(id, bigDiv, kids, smallKids)
{
    for (var ii=0 ; ii<kids.length; ++ii)
        kids[ii].style.zIndex = -10000;
}

function Banner_TransitionFade(id, bigDiv)
{
    var kids = bigDiv.kids;
    var nextIdx = (bigDiv.activeIdx + 1);
    if (nextIdx >= kids.length)
        nextIdx = 0;
    var activeKid = kids[nextIdx];
    if (!activeKid)
        return;

    var currentFade = bigDiv.opacity ;            
    if (!currentFade)
        currentFade = 0;
              
    currentFade = Number(currentFade);
    if (currentFade >= 100)
    {
        bigDiv.switchFunc(id, bigDiv, kids, nextIdx) ; // ((activeIdx+1)>=kids.length)?0:(activeIdx+1));            
        return window.setTimeout("Banner_GrindCPU('" + bigDiv.id + "')", bigDiv.sleepTime);    
    }

    currentFade += (100*bigDiv.sleepTime)/bigDiv.transTime; 
    bigDiv.opacity = currentFade;

    Banner_FadeSetOpacity(activeKid, currentFade);    
    window.setTimeout("Banner_GrindCPU('" + id + "')", bigDiv.sleepTime);
}

function Banner_FadeSetOpacity(active, currentFade)
{
    active.style.opacity = currentFade/100.0;
    if (currentFade < 0)
        active.style.filter = 'none';
    else
        active.style.filter = 'alpha(opacity = ' + String(currentFade) + ')';
}

function Banner_SwitchFade(id, bigDiv, kids, newIdx)
{
    var oldIdx = bigDiv.activeIdx ;
    if (oldIdx >= 0)
    {
        var oldCurrent = kids[oldIdx];
        tic_Utilities.RemoveStyle(oldCurrent, "ShowMeNow");
        oldCurrent.style.zIndex = -10000;
        Banner_FadeSetOpacity(oldCurrent, -1); // turn filter off
        
        var oldNext = oldIdx+1;
        if (oldNext >= kids.length)
            oldNext = 0 ;

        tic_Utilities.RemoveStyle(kids[oldNext], "ShowMeNext");
        kids[oldNext].style.zIndex = (newIdx == oldNext)?-100:-10000 ;
        Banner_FadeSetOpacity(kids[oldNext], -1); // turn filter off
    }

    var newNext = newIdx+1;
    if (newNext >= kids.length)
        newNext = 0 ;        

    tic_Utilities.AddStyle(kids[newIdx], "ShowMeNow");
    tic_Utilities.AddStyle(kids[newNext], "ShowMeNext");
    
    kids[newIdx].style.zIndex = -100;
    kids[newNext].style.zIndex = 0;
    Banner_FadeSetOpacity(kids[newNext], 0);
    bigDiv.processingTime = bigDiv.imageTime;
    bigDiv.opacity = 0;
    bigDiv.activeIdx = newIdx;
    
    if (bigDiv.syncSmall)
        Banner_SetSmallSelect(bigDiv.smallKids, newIdx) ;
}

/* Fade Image Only functions */
function Banner_InitFadeImageOnly(id, bigDiv, kids, smallKids)
{
    for (var ii=0 ; ii<kids.length; ++ii)
        kids[ii].style.zIndex = -10000;
}

function Banner_TransitionFadeImageOnly(id, bigDiv)
{
    var kids = bigDiv.kids;
    var activeIdx = bigDiv.activeIdx;
    var activeKid = kids[activeIdx];
    if (!activeKid)
        return;

    var currentFade = bigDiv.opacity ;            
    if (!currentFade)
        currentFade = 100;
              
    currentFade = Number(currentFade);
    if (currentFade <= 0.0)
    {
        bigDiv.switchFunc(id, bigDiv, kids, ((activeIdx+1)>=kids.length)?0:(activeIdx+1));            
        return window.setTimeout("Banner_GrindCPU('" + bigDiv.id + "')", bigDiv.sleepTime);    
    }

    currentFade -= (100*bigDiv.sleepTime)/bigDiv.transTime; 
    bigDiv.opacity = currentFade;

    Banner_FadeImageOnlySetOpacity(activeKid, currentFade);    
    window.setTimeout("Banner_GrindCPU('" + id + "')", bigDiv.sleepTime);
}

function Banner_FadeImageOnlySetOpacity(active, currentFade)
{
    var imgs = active.getElementsByTagName("IMG");
    if (imgs.length == 2)
    {
        imgs[1].style.opacity = currentFade/100.0;
        imgs[1].style.filter = 'alpha(opacity = ' + String(currentFade) + ')';
    }
}

function Banner_SwitchFadeImageOnly(id, bigDiv, kids, newIdx)
{
    var oldIdx = bigDiv.activeIdx ;
    if (oldIdx >= 0)
    {
        var oldCurrent = kids[oldIdx];
        tic_Utilities.RemoveStyle(oldCurrent, "ShowMeNow");
        Banner_FadeImageOnlySetOpacity(oldCurrent, bigDiv.doImageOnly, 100);
        oldCurrent.style.zIndex = -10000;
        
        var oldNext = oldIdx+1;
        if (oldNext >= kids.length)
            oldNext = 0 ;

        tic_Utilities.RemoveStyle(kids[oldNext], "ShowMeNext");
        kids[oldNext].style.zIndex = (newIdx == oldNext)?0:-10000 ;
    }

    var newNext = newIdx+1;
    if (newNext >= kids.length)
        newNext = 0 ;        

    tic_Utilities.AddStyle(kids[newIdx], "ShowMeNow");
    tic_Utilities.AddStyle(kids[newNext], "ShowMeNext");
    
    kids[newIdx].style.zIndex = 0;
    kids[newNext].style.zIndex = -100;
    bigDiv.processingTime = bigDiv.imageTime;
    bigDiv.opacity = 100;
    bigDiv.activeIdx = newIdx;
    
    if (bigDiv.syncSmall)
        Banner_SetSmallSelect(bigDiv.smallKids, newIdx) ;
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
  LoadShardBlock: 250.348 (3)
  PetaboxLoader3.datanode: 149.983 (5)
  CDXLines.iter: 55.764 (3)
  load_resource: 152.997 (2)
  esindex: 0.016
  RedisCDXSource: 33.459
  PetaboxLoader3.resolve: 107.026 (2)
  exclusion.robots.policy: 0.323
  captures_list: 369.263
  exclusion.robots: 0.34
*/