/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;(function(window,document,undefined){
// Input 0
var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
var $goog$global$$ = this;
function $goog$exportPath_$$($name$$57$$, $opt_object$$) {
  var $parts$$ = $name$$57$$.split("."), $cur$$ = $goog$global$$;
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $opt_object$$ !== $JSCompiler_alias_VOID$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$25$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$26$$) {
  if(!$fn$$1$$) {
    throw Error();
  }
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$27$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments)
}
var $goog$now$$ = Date.now || function() {
  return+new Date
};
// Input 1
function $webfont$DomHelper$$($mainWindow$$, $opt_loadWindow$$) {
  this.$mainWindow_$ = $mainWindow$$;
  this.$loadWindow_$ = $opt_loadWindow$$ || $mainWindow$$;
  this.$document_$ = this.$loadWindow_$.document;
  this.$supportForStyle_$ = $JSCompiler_alias_VOID$$
}
$webfont$DomHelper$$.prototype.createElement = function $$webfont$DomHelper$$$$createElement$($domElement_elem$$1$$, $opt_attr$$, $opt_innerHtml$$) {
  $domElement_elem$$1$$ = this.$document_$.createElement($domElement_elem$$1$$);
  if($opt_attr$$) {
    for(var $attr$$ in $opt_attr$$) {
      if($opt_attr$$.hasOwnProperty($attr$$)) {
        if("style" == $attr$$) {
          var $e$$inline_19$$ = $domElement_elem$$1$$, $styleString$$inline_20$$ = $opt_attr$$[$attr$$];
          $JSCompiler_StaticMethods_hasSupportForStyle_$$(this) ? $e$$inline_19$$.setAttribute("style", $styleString$$inline_20$$) : $e$$inline_19$$.style.cssText = $styleString$$inline_20$$
        }else {
          $domElement_elem$$1$$.setAttribute($attr$$, $opt_attr$$[$attr$$])
        }
      }
    }
  }
  $opt_innerHtml$$ && $domElement_elem$$1$$.appendChild(this.$document_$.createTextNode($opt_innerHtml$$));
  return $domElement_elem$$1$$
};
function $JSCompiler_StaticMethods_insertInto$$($JSCompiler_StaticMethods_insertInto$self_t$$, $tagName$$1$$, $e$$12$$) {
  $JSCompiler_StaticMethods_insertInto$self_t$$ = $JSCompiler_StaticMethods_insertInto$self_t$$.$document_$.getElementsByTagName($tagName$$1$$)[0];
  $JSCompiler_StaticMethods_insertInto$self_t$$ || ($JSCompiler_StaticMethods_insertInto$self_t$$ = document.documentElement);
  $JSCompiler_StaticMethods_insertInto$self_t$$ && $JSCompiler_StaticMethods_insertInto$self_t$$.lastChild && $JSCompiler_StaticMethods_insertInto$self_t$$.insertBefore($e$$12$$, $JSCompiler_StaticMethods_insertInto$self_t$$.lastChild)
}
function $JSCompiler_StaticMethods_createCssLink$$($JSCompiler_StaticMethods_createCssLink$self$$, $src$$4$$) {
  return $JSCompiler_StaticMethods_createCssLink$self$$.createElement("link", {rel:"stylesheet", href:$src$$4$$})
}
function $JSCompiler_StaticMethods_createScriptSrc$$($JSCompiler_StaticMethods_createScriptSrc$self$$, $src$$5$$) {
  return $JSCompiler_StaticMethods_createScriptSrc$self$$.createElement("script", {src:$src$$5$$})
}
function $JSCompiler_StaticMethods_appendClassName$$($e$$13$$, $name$$60$$) {
  for(var $classes$$ = $e$$13$$.className.split(/\s+/), $i$$6$$ = 0, $len$$ = $classes$$.length;$i$$6$$ < $len$$;$i$$6$$++) {
    if($classes$$[$i$$6$$] == $name$$60$$) {
      return
    }
  }
  $classes$$.push($name$$60$$);
  $e$$13$$.className = $classes$$.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
}
function $JSCompiler_StaticMethods_removeClassName$$($e$$14$$, $name$$61$$) {
  for(var $classes$$1$$ = $e$$14$$.className.split(/\s+/), $remainingClasses$$ = [], $i$$7$$ = 0, $len$$1$$ = $classes$$1$$.length;$i$$7$$ < $len$$1$$;$i$$7$$++) {
    $classes$$1$$[$i$$7$$] != $name$$61$$ && $remainingClasses$$.push($classes$$1$$[$i$$7$$])
  }
  $e$$14$$.className = $remainingClasses$$.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
}
function $JSCompiler_StaticMethods_hasClassName$$($e$$15$$, $name$$62$$) {
  for(var $classes$$2$$ = $e$$15$$.className.split(/\s+/), $i$$8$$ = 0, $len$$2$$ = $classes$$2$$.length;$i$$8$$ < $len$$2$$;$i$$8$$++) {
    if($classes$$2$$[$i$$8$$] == $name$$62$$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_hasSupportForStyle_$$($JSCompiler_StaticMethods_hasSupportForStyle_$self$$) {
  if($JSCompiler_StaticMethods_hasSupportForStyle_$self$$.$supportForStyle_$ === $JSCompiler_alias_VOID$$) {
    var $e$$17$$ = $JSCompiler_StaticMethods_hasSupportForStyle_$self$$.$document_$.createElement("p");
    $e$$17$$.innerHTML = '<a style="top:1px;">w</a>';
    $JSCompiler_StaticMethods_hasSupportForStyle_$self$$.$supportForStyle_$ = /top/.test($e$$17$$.getElementsByTagName("a")[0].getAttribute("style"))
  }
  return $JSCompiler_StaticMethods_hasSupportForStyle_$self$$.$supportForStyle_$
}
function $JSCompiler_StaticMethods_getProtocol$$($JSCompiler_StaticMethods_getProtocol$self$$) {
  var $protocol$$1$$ = $JSCompiler_StaticMethods_getProtocol$self$$.$loadWindow_$.location.protocol;
  "about:" == $protocol$$1$$ && ($protocol$$1$$ = $JSCompiler_StaticMethods_getProtocol$self$$.$mainWindow_$.location.protocol);
  return"https:" == $protocol$$1$$ ? "https:" : "http:"
}
;
// Input 2
function $webfont$BrowserInfo$$($webfontSupport$$, $webKitFallbackBug$$, $webKitMetricsBug$$) {
  this.$webfontSupport_$ = $webfontSupport$$;
  this.$webKitFallbackBug_$ = $webKitFallbackBug$$;
  this.$webKitMetricsBug_$ = $webKitMetricsBug$$
}
$goog$exportPath_$$("webfont.BrowserInfo", $webfont$BrowserInfo$$);
$webfont$BrowserInfo$$.prototype.$hasWebFontSupport$ = $JSCompiler_get$$("$webfontSupport_$");
$webfont$BrowserInfo$$.prototype.hasWebFontSupport = $webfont$BrowserInfo$$.prototype.$hasWebFontSupport$;
$webfont$BrowserInfo$$.prototype.$hasWebKitFallbackBug$ = $JSCompiler_get$$("$webKitFallbackBug_$");
$webfont$BrowserInfo$$.prototype.hasWebKitFallbackBug = $webfont$BrowserInfo$$.prototype.$hasWebKitFallbackBug$;
$webfont$BrowserInfo$$.prototype.$hasWebKitMetricsBug$ = $JSCompiler_get$$("$webKitMetricsBug_$");
$webfont$BrowserInfo$$.prototype.hasWebKitMetricsBug = $webfont$BrowserInfo$$.prototype.$hasWebKitMetricsBug$;
// Input 3
function $webfont$Version$$($opt_major$$, $opt_minor$$, $opt_patch$$, $opt_build$$) {
  this.$major$ = $opt_major$$ != $JSCompiler_alias_NULL$$ ? $opt_major$$ : $JSCompiler_alias_NULL$$;
  this.$minor$ = $opt_minor$$ != $JSCompiler_alias_NULL$$ ? $opt_minor$$ : $JSCompiler_alias_NULL$$;
  this.$patch$ = $opt_patch$$ != $JSCompiler_alias_NULL$$ ? $opt_patch$$ : $JSCompiler_alias_NULL$$;
  this.$build$ = $opt_build$$ != $JSCompiler_alias_NULL$$ ? $opt_build$$ : $JSCompiler_alias_NULL$$
}
var $webfont$Version$TOKENIZER$$ = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
$webfont$Version$$.prototype.toString = function $$webfont$Version$$$$toString$() {
  return[this.$major$, this.$minor$ || "", this.$patch$ || "", this.$build$ || ""].join("")
};
function $webfont$Version$parse$$($match_str$$8$$) {
  $match_str$$8$$ = $webfont$Version$TOKENIZER$$.exec($match_str$$8$$);
  var $major$$ = $JSCompiler_alias_NULL$$, $minor$$ = $JSCompiler_alias_NULL$$, $patch$$ = $JSCompiler_alias_NULL$$, $build$$ = $JSCompiler_alias_NULL$$;
  $match_str$$8$$ && ($match_str$$8$$[1] !== $JSCompiler_alias_NULL$$ && $match_str$$8$$[1] && ($major$$ = parseInt($match_str$$8$$[1], 10)), $match_str$$8$$[2] !== $JSCompiler_alias_NULL$$ && $match_str$$8$$[2] && ($minor$$ = parseInt($match_str$$8$$[2], 10)), $match_str$$8$$[3] !== $JSCompiler_alias_NULL$$ && $match_str$$8$$[3] && ($patch$$ = parseInt($match_str$$8$$[3], 10)), $match_str$$8$$[4] !== $JSCompiler_alias_NULL$$ && $match_str$$8$$[4] && ($build$$ = /^[0-9]+$/.test($match_str$$8$$[4]) ? 
  parseInt($match_str$$8$$[4], 10) : $match_str$$8$$[4]));
  return new $webfont$Version$$($major$$, $minor$$, $patch$$, $build$$)
}
;
// Input 4
function $webfont$UserAgent$$($name$$63$$, $version$$14$$, $versionString$$, $engine$$, $engineVersion$$, $engineVersionString$$, $platform$$, $platformVersion$$, $platformVersionString$$, $documentMode$$, $browserInfo$$) {
  this.$name_$ = $name$$63$$;
  this.$version_$ = $version$$14$$;
  this.$versionString_$ = $versionString$$;
  this.$engine_$ = $engine$$;
  this.$engineVersion_$ = $engineVersion$$;
  this.$engineVersionString_$ = $engineVersionString$$;
  this.$platform_$ = $platform$$;
  this.$platformVersion_$ = $platformVersion$$;
  this.$platformVersionString_$ = $platformVersionString$$;
  this.$documentMode_$ = $documentMode$$;
  this.$browserInfo_$ = $browserInfo$$
}
$goog$exportPath_$$("webfont.UserAgent", $webfont$UserAgent$$);
$webfont$UserAgent$$.prototype.getName = $JSCompiler_get$$("$name_$");
$webfont$UserAgent$$.prototype.getName = $webfont$UserAgent$$.prototype.getName;
$webfont$UserAgent$$.prototype.$getVersion$ = $JSCompiler_get$$("$versionString_$");
$webfont$UserAgent$$.prototype.getVersion = $webfont$UserAgent$$.prototype.$getVersion$;
$webfont$UserAgent$$.prototype.$getEngine$ = $JSCompiler_get$$("$engine_$");
$webfont$UserAgent$$.prototype.getEngine = $webfont$UserAgent$$.prototype.$getEngine$;
$webfont$UserAgent$$.prototype.$getEngineVersion$ = $JSCompiler_get$$("$engineVersionString_$");
$webfont$UserAgent$$.prototype.getEngineVersion = $webfont$UserAgent$$.prototype.$getEngineVersion$;
$webfont$UserAgent$$.prototype.$getPlatform$ = $JSCompiler_get$$("$platform_$");
$webfont$UserAgent$$.prototype.getPlatform = $webfont$UserAgent$$.prototype.$getPlatform$;
$webfont$UserAgent$$.prototype.$getPlatformVersion$ = $JSCompiler_get$$("$platformVersionString_$");
$webfont$UserAgent$$.prototype.getPlatformVersion = $webfont$UserAgent$$.prototype.$getPlatformVersion$;
$webfont$UserAgent$$.prototype.$getDocumentMode$ = $JSCompiler_get$$("$documentMode_$");
$webfont$UserAgent$$.prototype.getDocumentMode = $webfont$UserAgent$$.prototype.$getDocumentMode$;
$webfont$UserAgent$$.prototype.$getBrowserInfo$ = $JSCompiler_get$$("$browserInfo_$");
$webfont$UserAgent$$.prototype.getBrowserInfo = $webfont$UserAgent$$.prototype.$getBrowserInfo$;
// Input 5
function $webfont$UserAgentParser$$($userAgent$$, $doc$$4$$) {
  this.$userAgent_$ = $userAgent$$;
  this.$doc_$ = $doc$$4$$
}
var $webfont$UserAgentParser$UNKNOWN_USER_AGENT$$ = new $webfont$UserAgent$$("Unknown", new $webfont$Version$$, "Unknown", "Unknown", new $webfont$Version$$, "Unknown", "Unknown", new $webfont$Version$$, "Unknown", $JSCompiler_alias_VOID$$, new $webfont$BrowserInfo$$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$));
$webfont$UserAgentParser$$.prototype.parse = function $$webfont$UserAgentParser$$$$parse$() {
  var $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$;
  if(-1 != this.$userAgent_$.indexOf("MSIE")) {
    $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = $JSCompiler_StaticMethods_getPlatform_$$(this);
    var $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$ = $JSCompiler_StaticMethods_getPlatformVersionString_$$(this), $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$ = $webfont$Version$parse$$($engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$), $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, 
    /MSIE ([\d\w\.]+)/, 1), $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$ = $webfont$Version$parse$$($browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$);
    $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = new $webfont$UserAgent$$("MSIE", $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$, $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$, "MSIE", $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$, $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$, 
    $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$, $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$, $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$, $JSCompiler_StaticMethods_getDocumentMode_$$(this.$doc_$), new $webfont$BrowserInfo$$("Windows" == $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ && 
    6 <= $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$.$major$ || "Windows Phone" == $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ && 8 <= $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$.$major$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$))
  }else {
    if(-1 != this.$userAgent_$.indexOf("Opera")) {
      a: {
        $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = "Unknown";
        var $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Presto\/([\d\w\.]+)/, 1), $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$ = $webfont$Version$parse$$($engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$), $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$ = $JSCompiler_StaticMethods_getPlatformVersionString_$$(this), 
        $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$ = $webfont$Version$parse$$($browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$), $documentMode$$inline_87_supportWebFont$$inline_97$$ = $JSCompiler_StaticMethods_getDocumentMode_$$(this.$doc_$);
        $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$.$major$ !== $JSCompiler_alias_NULL$$ ? $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = "Presto" : (-1 != this.$userAgent_$.indexOf("Gecko") && ($JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = 
        "Gecko"), $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /rv:([^\)]+)/, 1), $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$ = $webfont$Version$parse$$($engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$));
        if(-1 != this.$userAgent_$.indexOf("Opera Mini/")) {
          var $browserVersionString$$inline_88_engineVersionString$$inline_98$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Opera Mini\/([\d\.]+)/, 1), $browserVersion$$inline_89_engineVersion$$inline_99$$ = $webfont$Version$parse$$($browserVersionString$$inline_88_engineVersionString$$inline_98$$);
          $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = new $webfont$UserAgent$$("OperaMini", $browserVersion$$inline_89_engineVersion$$inline_99$$, $browserVersionString$$inline_88_engineVersionString$$inline_98$$, $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$, $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$, 
          $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$, $JSCompiler_StaticMethods_getPlatform_$$(this), $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$, $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$, $documentMode$$inline_87_supportWebFont$$inline_97$$, new $webfont$BrowserInfo$$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$))
        }else {
          if(-1 != this.$userAgent_$.indexOf("Version/") && ($browserVersionString$$inline_88_engineVersionString$$inline_98$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Version\/([\d\.]+)/, 1), $browserVersion$$inline_89_engineVersion$$inline_99$$ = $webfont$Version$parse$$($browserVersionString$$inline_88_engineVersionString$$inline_98$$), $browserVersion$$inline_89_engineVersion$$inline_99$$.$major$ !== $JSCompiler_alias_NULL$$)) {
            $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = new $webfont$UserAgent$$("Opera", $browserVersion$$inline_89_engineVersion$$inline_99$$, $browserVersionString$$inline_88_engineVersionString$$inline_98$$, $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$, $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$, 
            $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$, $JSCompiler_StaticMethods_getPlatform_$$(this), $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$, $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$, $documentMode$$inline_87_supportWebFont$$inline_97$$, new $webfont$BrowserInfo$$(10 <= $browserVersion$$inline_89_engineVersion$$inline_99$$.$major$, $JSCompiler_alias_FALSE$$, 
            $JSCompiler_alias_FALSE$$));
            break a
          }
          $browserVersionString$$inline_88_engineVersionString$$inline_98$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Opera[\/ ]([\d\.]+)/, 1);
          $browserVersion$$inline_89_engineVersion$$inline_99$$ = $webfont$Version$parse$$($browserVersionString$$inline_88_engineVersionString$$inline_98$$);
          $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = $browserVersion$$inline_89_engineVersion$$inline_99$$.$major$ !== $JSCompiler_alias_NULL$$ ? new $webfont$UserAgent$$("Opera", $browserVersion$$inline_89_engineVersion$$inline_99$$, $browserVersionString$$inline_88_engineVersionString$$inline_98$$, $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$, 
          $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$, $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$, $JSCompiler_StaticMethods_getPlatform_$$(this), $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$, $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$, $documentMode$$inline_87_supportWebFont$$inline_97$$, new $webfont$BrowserInfo$$(10 <= $browserVersion$$inline_89_engineVersion$$inline_99$$.$major$, 
          $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$)) : new $webfont$UserAgent$$("Opera", new $webfont$Version$$, "Unknown", $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$, $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$, $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$, $JSCompiler_StaticMethods_getPlatform_$$(this), 
          $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$, $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$, $documentMode$$inline_87_supportWebFont$$inline_97$$, new $webfont$BrowserInfo$$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$))
        }
      }
    }else {
      /OPR\/[\d.]+/.test(this.$userAgent_$) ? $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = $JSCompiler_StaticMethods_parseWebKitUserAgentString_$$(this) : /AppleWeb(K|k)it/.test(this.$userAgent_$) ? $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = $JSCompiler_StaticMethods_parseWebKitUserAgentString_$$(this) : 
      -1 != this.$userAgent_$.indexOf("Gecko") ? ($JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = "Unknown", $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$ = new $webfont$Version$$, $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$ = "Unknown", $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$ = 
      $JSCompiler_StaticMethods_getPlatformVersionString_$$(this), $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$ = $webfont$Version$parse$$($browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$), $documentMode$$inline_87_supportWebFont$$inline_97$$ = $JSCompiler_alias_FALSE$$, -1 != this.$userAgent_$.indexOf("Firefox") ? ($JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = 
      "Firefox", $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Firefox\/([\d\w\.]+)/, 1), $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$ = $webfont$Version$parse$$($engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$), $documentMode$$inline_87_supportWebFont$$inline_97$$ = 3 <= $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$.$major$ && 
      5 <= $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$.$minor$) : -1 != this.$userAgent_$.indexOf("Mozilla") && ($JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = "Mozilla"), $browserVersionString$$inline_88_engineVersionString$$inline_98$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /rv:([^\)]+)/, 1), $browserVersion$$inline_89_engineVersion$$inline_99$$ = 
      $webfont$Version$parse$$($browserVersionString$$inline_88_engineVersionString$$inline_98$$), $documentMode$$inline_87_supportWebFont$$inline_97$$ || ($documentMode$$inline_87_supportWebFont$$inline_97$$ = 1 < $browserVersion$$inline_89_engineVersion$$inline_99$$.$major$ || 1 == $browserVersion$$inline_89_engineVersion$$inline_99$$.$major$ && 9 < $browserVersion$$inline_89_engineVersion$$inline_99$$.$minor$ || 1 == $browserVersion$$inline_89_engineVersion$$inline_99$$.$major$ && 9 == $browserVersion$$inline_89_engineVersion$$inline_99$$.$minor$ && 
      2 <= $browserVersion$$inline_89_engineVersion$$inline_99$$.$patch$ || $browserVersionString$$inline_88_engineVersionString$$inline_98$$.match(/1\.9\.1b[123]/) != $JSCompiler_alias_NULL$$ || $browserVersionString$$inline_88_engineVersionString$$inline_98$$.match(/1\.9\.1\.[\d\.]+/) != $JSCompiler_alias_NULL$$), $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = new $webfont$UserAgent$$($JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$, 
      $engineVersionString$$inline_83_platformVersionString$$inline_76_version$$inline_93$$, $engineVersion$$inline_84_platformVersion$$inline_77_versionString$$inline_94$$, "Gecko", $browserVersion$$inline_89_engineVersion$$inline_99$$, $browserVersionString$$inline_88_engineVersionString$$inline_98$$, $JSCompiler_StaticMethods_getPlatform_$$(this), $browserVersion$$inline_79_platformVersion$$inline_86_platformVersion$$inline_96$$, $browserVersionString$$inline_78_platformVersionString$$inline_85_platformVersionString$$inline_95$$, 
      $JSCompiler_StaticMethods_getDocumentMode_$$(this.$doc_$), new $webfont$BrowserInfo$$($documentMode$$inline_87_supportWebFont$$inline_97$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$))) : $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$ = $webfont$UserAgentParser$UNKNOWN_USER_AGENT$$
    }
  }
  return $JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_JSCompiler_temp$$9_engineName$$inline_82_name$$inline_92_platform$$inline_75$$
};
function $JSCompiler_StaticMethods_getPlatform_$$($JSCompiler_StaticMethods_getPlatform_$self_os$$) {
  var $mobileOs$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatform_$self_os$$.$userAgent_$, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
  if("" != $mobileOs$$) {
    return/BB\d{2}/.test($mobileOs$$) && ($mobileOs$$ = "BlackBerry"), $mobileOs$$
  }
  $JSCompiler_StaticMethods_getPlatform_$self_os$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatform_$self_os$$.$userAgent_$, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
  return"" != $JSCompiler_StaticMethods_getPlatform_$self_os$$ ? ("Mac_PowerPC" == $JSCompiler_StaticMethods_getPlatform_$self_os$$ && ($JSCompiler_StaticMethods_getPlatform_$self_os$$ = "Macintosh"), $JSCompiler_StaticMethods_getPlatform_$self_os$$) : "Unknown"
}
function $JSCompiler_StaticMethods_getPlatformVersionString_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$) {
  var $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
  if($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ || ($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /Windows Phone( OS)? ([^;)]+)/, 2)) || ($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, 
  /(iPhone )?OS ([\d_]+)/, 2))) {
    return $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$
  }
  if($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /(?:Linux|CrOS) ([^;)]+)/, 1)) {
    for(var $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$.split(/\s/), $i$$9$$ = 0;$i$$9$$ < $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$.length;$i$$9$$ += 1) {
      if(/^[\d\._]+$/.test($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$[$i$$9$$])) {
        return $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$[$i$$9$$]
      }
    }
  }
  return($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? $JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$ : "Unknown"
}
function $JSCompiler_StaticMethods_parseWebKitUserAgentString_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$) {
  var $platform$$2$$ = $JSCompiler_StaticMethods_getPlatform_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$), $platformVersionString$$3$$ = $JSCompiler_StaticMethods_getPlatformVersionString_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$), $platformVersion$$3$$ = $webfont$Version$parse$$($platformVersionString$$3$$), $webKitVersionString$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 
  1), $webKitVersion$$ = $webfont$Version$parse$$($webKitVersionString$$), $browserName$$ = "Unknown", $browserVersion$$2$$ = new $webfont$Version$$, $browserVersionString$$2$$ = "Unknown", $supportWebFont$$1$$ = $JSCompiler_alias_FALSE$$;
  /OPR\/[\d.]+/.test($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$) ? $browserName$$ = "Opera" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("Chrome") || -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("CrMo") || -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("CriOS") ? $browserName$$ = "Chrome" : /Silk\/\d/.test($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$) ? 
  $browserName$$ = "Silk" : "BlackBerry" == $platform$$2$$ || "Android" == $platform$$2$$ ? $browserName$$ = "BuiltinBrowser" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("PhantomJS") ? $browserName$$ = "PhantomJS" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("Safari") ? $browserName$$ = "Safari" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("AdobeAIR") && ($browserName$$ = 
  "AdobeAIR");
  "BuiltinBrowser" == $browserName$$ ? $browserVersionString$$2$$ = "Unknown" : "Silk" == $browserName$$ ? $browserVersionString$$2$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /Silk\/([\d\._]+)/, 1) : "Chrome" == $browserName$$ ? $browserVersionString$$2$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != 
  $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("Version/") ? $browserVersionString$$2$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == $browserName$$ ? $browserVersionString$$2$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == $browserName$$ ? 
  $browserVersionString$$2$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /OPR\/([\d.]+)/, 1) : "PhantomJS" == $browserName$$ && ($browserVersionString$$2$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /PhantomJS\/([\d.]+)/, 1));
  $browserVersion$$2$$ = $webfont$Version$parse$$($browserVersionString$$2$$);
  $supportWebFont$$1$$ = "AdobeAIR" == $browserName$$ ? 2 < $browserVersion$$2$$.$major$ || 2 == $browserVersion$$2$$.$major$ && 5 <= $browserVersion$$2$$.$minor$ : "BlackBerry" == $platform$$2$$ ? 10 <= $platformVersion$$3$$.$major$ : "Android" == $platform$$2$$ ? 2 < $platformVersion$$3$$.$major$ || 2 == $platformVersion$$3$$.$major$ && 1 < $platformVersion$$3$$.$minor$ : 526 <= $webKitVersion$$.$major$ || 525 <= $webKitVersion$$.$major$ && 13 <= $webKitVersion$$.$minor$;
  return new $webfont$UserAgent$$($browserName$$, $browserVersion$$2$$, $browserVersionString$$2$$, "AppleWebKit", $webKitVersion$$, $webKitVersionString$$, $platform$$2$$, $platformVersion$$3$$, $platformVersionString$$3$$, $JSCompiler_StaticMethods_getDocumentMode_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$doc_$), new $webfont$BrowserInfo$$($supportWebFont$$1$$, 536 > $webKitVersion$$.$major$ || 536 == $webKitVersion$$.$major$ && 11 > $webKitVersion$$.$minor$, "iPhone" == 
  $platform$$2$$ || "iPad" == $platform$$2$$ || "iPod" == $platform$$2$$ || "Macintosh" == $platform$$2$$))
}
function $JSCompiler_StaticMethods_getMatchingGroup_$$($groups_str$$9$$, $regexp$$2$$, $index$$44$$) {
  return($groups_str$$9$$ = $groups_str$$9$$.match($regexp$$2$$)) && $groups_str$$9$$[$index$$44$$] ? $groups_str$$9$$[$index$$44$$] : ""
}
function $JSCompiler_StaticMethods_getDocumentMode_$$($doc$$5$$) {
  if($doc$$5$$.documentMode) {
    return $doc$$5$$.documentMode
  }
}
;
// Input 6
function $webfont$CssClassName$$($opt_joinChar$$) {
  this.$joinChar_$ = $opt_joinChar$$ || "-"
}
$webfont$CssClassName$$.prototype.$build$ = function $$webfont$CssClassName$$$$$build$$($var_args$$30$$) {
  for(var $parts$$4$$ = [], $i$$10$$ = 0;$i$$10$$ < arguments.length;$i$$10$$++) {
    $parts$$4$$.push(arguments[$i$$10$$].replace(/[\W_]+/g, "").toLowerCase())
  }
  return $parts$$4$$.join(this.$joinChar_$)
};
// Input 7
function $webfont$Font$$($name$$66$$, $opt_variation$$) {
  this.$name_$ = $name$$66$$;
  this.$weight_$ = 4;
  this.$style_$ = "n";
  var $match$$1$$ = ($opt_variation$$ || "n4").match(/^([nio])([1-9])$/i);
  $match$$1$$ && (this.$style_$ = $match$$1$$[1], this.$weight_$ = parseInt($match$$1$$[2], 10))
}
$webfont$Font$$.prototype.getName = $JSCompiler_get$$("$name_$");
function $JSCompiler_StaticMethods_getVariation$$($JSCompiler_StaticMethods_getVariation$self$$) {
  return $JSCompiler_StaticMethods_getVariation$self$$.$style_$ + $JSCompiler_StaticMethods_getVariation$self$$.$weight_$
}
function $webfont$Font$parseCssVariation$$($css$$1$$) {
  var $weight$$1$$ = 4, $style$$1$$ = "n", $m$$ = $JSCompiler_alias_NULL$$;
  $css$$1$$ && (($m$$ = $css$$1$$.match(/(normal|oblique|italic)/i)) && $m$$[1] && ($style$$1$$ = $m$$[1].substr(0, 1).toLowerCase()), ($m$$ = $css$$1$$.match(/([1-9]00|normal|bold)/i)) && $m$$[1] && (/bold/i.test($m$$[1]) ? $weight$$1$$ = 7 : /[1-9]00/.test($m$$[1]) && ($weight$$1$$ = parseInt($m$$[1].substr(0, 1), 10))));
  return $style$$1$$ + $weight$$1$$
}
;
// Input 8
function $webfont$EventDispatcher$$($domHelper$$, $htmlElement$$1$$, $callbacks$$) {
  this.$domHelper_$ = $domHelper$$;
  this.$htmlElement_$ = $htmlElement$$1$$;
  this.$callbacks_$ = $callbacks$$;
  this.$namespace_$ = "wf";
  this.$cssClassName_$ = new $webfont$CssClassName$$("-")
}
function $JSCompiler_StaticMethods_dispatchLoading$$($JSCompiler_StaticMethods_dispatchLoading$self$$) {
  $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchLoading$self$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchLoading$self$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchLoading$self$$.$namespace_$, "loading"));
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchLoading$self$$, "loading")
}
function $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_dispatchInactive$self$$) {
  $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_dispatchInactive$self$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchInactive$self$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchInactive$self$$.$namespace_$, "loading"));
  $JSCompiler_StaticMethods_hasClassName$$($JSCompiler_StaticMethods_dispatchInactive$self$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchInactive$self$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchInactive$self$$.$namespace_$, "active")) || $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchInactive$self$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchInactive$self$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchInactive$self$$.$namespace_$, 
  "inactive"));
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchInactive$self$$, "inactive")
}
function $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatch_$self$$, $event$$3$$, $opt_font$$) {
  if($JSCompiler_StaticMethods_dispatch_$self$$.$callbacks_$[$event$$3$$]) {
    if($opt_font$$) {
      $JSCompiler_StaticMethods_dispatch_$self$$.$callbacks_$[$event$$3$$]($opt_font$$.getName(), $JSCompiler_StaticMethods_getVariation$$($opt_font$$))
    }else {
      $JSCompiler_StaticMethods_dispatch_$self$$.$callbacks_$[$event$$3$$]()
    }
  }
}
;
// Input 9
// Input 10
// Input 11
function $webfont$FontRuler$$($domHelper$$2$$, $fontTestString$$) {
  this.$domHelper_$ = $domHelper$$2$$;
  this.$fontTestString_$ = $fontTestString$$;
  this.$el_$ = this.$domHelper_$.createElement("span", {"aria-hidden":"true"}, this.$fontTestString_$)
}
function $JSCompiler_StaticMethods_setFont$$($JSCompiler_StaticMethods_setFont$self$$, $font$$3$$) {
  var $e$$inline_108$$ = $JSCompiler_StaticMethods_setFont$self$$.$el_$, $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$;
  $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$ = [];
  for(var $split$$inline_197_style$$inline_202$$ = $font$$3$$.$name_$.split(/,\s*/), $i$$inline_198_weight$$inline_203$$ = 0;$i$$inline_198_weight$$inline_203$$ < $split$$inline_197_style$$inline_202$$.length;$i$$inline_198_weight$$inline_203$$++) {
    var $part$$inline_199$$ = $split$$inline_197_style$$inline_202$$[$i$$inline_198_weight$$inline_203$$].replace(/['"]/g, "");
    -1 == $part$$inline_199$$.indexOf(" ") ? $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$.push($part$$inline_199$$) : $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$.push("'" + $part$$inline_199$$ + "'")
  }
  $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$ = $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$.join(",");
  $split$$inline_197_style$$inline_202$$ = "normal";
  $i$$inline_198_weight$$inline_203$$ = $font$$3$$.$weight_$ + "00";
  "o" === $font$$3$$.$style_$ ? $split$$inline_197_style$$inline_202$$ = "oblique" : "i" === $font$$3$$.$style_$ && ($split$$inline_197_style$$inline_202$$ = "italic");
  $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$ = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$ + ";" + ("font-style:" + $split$$inline_197_style$$inline_202$$ + ";font-weight:" + $i$$inline_198_weight$$inline_203$$ + ";");
  $JSCompiler_StaticMethods_hasSupportForStyle_$$($JSCompiler_StaticMethods_setFont$self$$.$domHelper_$) ? $e$$inline_108$$.setAttribute("style", $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$) : $e$$inline_108$$.style.cssText = $JSCompiler_inline_result$$193_quoted$$inline_196_styleString$$inline_109$$
}
function $JSCompiler_StaticMethods_insert$$($JSCompiler_StaticMethods_insert$self$$) {
  $JSCompiler_StaticMethods_insertInto$$($JSCompiler_StaticMethods_insert$self$$.$domHelper_$, "body", $JSCompiler_StaticMethods_insert$self$$.$el_$)
}
$webfont$FontRuler$$.prototype.remove = function $$webfont$FontRuler$$$$remove$() {
  var $node$$inline_111$$ = this.$el_$;
  $node$$inline_111$$.parentNode && $node$$inline_111$$.parentNode.removeChild($node$$inline_111$$)
};
// Input 12
function $webfont$FontWatchRunner$$($activeCallback_fontRuler$$inline_114$$, $inactiveCallback$$, $domHelper$$3$$, $font$$5$$, $browserInfo$$1$$, $opt_timeout$$, $opt_metricCompatibleFonts$$, $opt_fontTestString$$) {
  this.$activeCallback_$ = $activeCallback_fontRuler$$inline_114$$;
  this.$inactiveCallback_$ = $inactiveCallback$$;
  this.$domHelper_$ = $domHelper$$3$$;
  this.$font_$ = $font$$5$$;
  this.$fontTestString_$ = $opt_fontTestString$$ || "BESbswy";
  this.$browserInfo_$ = $browserInfo$$1$$;
  this.$lastResortWidths_$ = {};
  this.$timeout_$ = $opt_timeout$$ || 5E3;
  this.$metricCompatibleFonts_$ = $opt_metricCompatibleFonts$$ || $JSCompiler_alias_NULL$$;
  this.$fontRulerB_$ = this.$fontRulerA_$ = $JSCompiler_alias_NULL$$;
  $activeCallback_fontRuler$$inline_114$$ = new $webfont$FontRuler$$(this.$domHelper_$, this.$fontTestString_$);
  $JSCompiler_StaticMethods_insert$$($activeCallback_fontRuler$$inline_114$$);
  for(var $font$$inline_115$$ in $webfont$FontWatchRunner$LastResortFonts$$) {
    $webfont$FontWatchRunner$LastResortFonts$$.hasOwnProperty($font$$inline_115$$) && ($JSCompiler_StaticMethods_setFont$$($activeCallback_fontRuler$$inline_114$$, new $webfont$Font$$($webfont$FontWatchRunner$LastResortFonts$$[$font$$inline_115$$], $JSCompiler_StaticMethods_getVariation$$(this.$font_$))), this.$lastResortWidths_$[$webfont$FontWatchRunner$LastResortFonts$$[$font$$inline_115$$]] = $activeCallback_fontRuler$$inline_114$$.$el_$.offsetWidth)
  }
  $activeCallback_fontRuler$$inline_114$$.remove()
}
var $webfont$FontWatchRunner$LastResortFonts$$ = {$SERIF$:"serif", $SANS_SERIF$:"sans-serif", $MONOSPACE$:"monospace"};
$webfont$FontWatchRunner$$.prototype.start = function $$webfont$FontWatchRunner$$$$start$() {
  this.$fontRulerA_$ = new $webfont$FontRuler$$(this.$domHelper_$, this.$fontTestString_$);
  $JSCompiler_StaticMethods_insert$$(this.$fontRulerA_$);
  this.$fontRulerB_$ = new $webfont$FontRuler$$(this.$domHelper_$, this.$fontTestString_$);
  $JSCompiler_StaticMethods_insert$$(this.$fontRulerB_$);
  this.$started_$ = $goog$now$$();
  $JSCompiler_StaticMethods_setFont$$(this.$fontRulerA_$, new $webfont$Font$$(this.$font_$.getName() + ",serif", $JSCompiler_StaticMethods_getVariation$$(this.$font_$)));
  $JSCompiler_StaticMethods_setFont$$(this.$fontRulerB_$, new $webfont$Font$$(this.$font_$.getName() + ",sans-serif", $JSCompiler_StaticMethods_getVariation$$(this.$font_$)));
  $JSCompiler_StaticMethods_check_$$(this)
};
function $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$$($JSCompiler_StaticMethods_widthsMatchLastResortWidths_$self$$, $a$$2$$, $b$$1$$) {
  for(var $font$$7$$ in $webfont$FontWatchRunner$LastResortFonts$$) {
    if($webfont$FontWatchRunner$LastResortFonts$$.hasOwnProperty($font$$7$$) && $a$$2$$ === $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$self$$.$lastResortWidths_$[$webfont$FontWatchRunner$LastResortFonts$$[$font$$7$$]] && $b$$1$$ === $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$self$$.$lastResortWidths_$[$webfont$FontWatchRunner$LastResortFonts$$[$font$$7$$]]) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_check_$$($JSCompiler_StaticMethods_check_$self$$) {
  var $widthA$$ = $JSCompiler_StaticMethods_check_$self$$.$fontRulerA_$.$el_$.offsetWidth, $widthB$$ = $JSCompiler_StaticMethods_check_$self$$.$fontRulerB_$.$el_$.offsetWidth;
  $widthA$$ === $JSCompiler_StaticMethods_check_$self$$.$lastResortWidths_$.serif && $widthB$$ === $JSCompiler_StaticMethods_check_$self$$.$lastResortWidths_$["sans-serif"] || $JSCompiler_StaticMethods_check_$self$$.$browserInfo_$.$webKitFallbackBug_$ && $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$$($JSCompiler_StaticMethods_check_$self$$, $widthA$$, $widthB$$) ? $goog$now$$() - $JSCompiler_StaticMethods_check_$self$$.$started_$ >= $JSCompiler_StaticMethods_check_$self$$.$timeout_$ ? $JSCompiler_StaticMethods_check_$self$$.$browserInfo_$.$webKitFallbackBug_$ && 
  $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$$($JSCompiler_StaticMethods_check_$self$$, $widthA$$, $widthB$$) && ($JSCompiler_StaticMethods_check_$self$$.$metricCompatibleFonts_$ === $JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_check_$self$$.$metricCompatibleFonts_$.hasOwnProperty($JSCompiler_StaticMethods_check_$self$$.$font_$.getName())) ? $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_check_$self$$, $JSCompiler_StaticMethods_check_$self$$.$activeCallback_$) : 
  $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_check_$self$$, $JSCompiler_StaticMethods_check_$self$$.$inactiveCallback_$) : setTimeout($goog$bind$$(function() {
    $JSCompiler_StaticMethods_check_$$(this)
  }, $JSCompiler_StaticMethods_check_$self$$), 25) : $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_check_$self$$, $JSCompiler_StaticMethods_check_$self$$.$activeCallback_$)
}
function $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_finish_$self$$, $callback$$34$$) {
  $JSCompiler_StaticMethods_finish_$self$$.$fontRulerA_$.remove();
  $JSCompiler_StaticMethods_finish_$self$$.$fontRulerB_$.remove();
  $callback$$34$$($JSCompiler_StaticMethods_finish_$self$$.$font_$)
}
;
// Input 13
function $webfont$FontWatcher$$($userAgent$$2$$, $domHelper$$4$$, $eventDispatcher$$, $opt_timeout$$1$$) {
  this.$domHelper_$ = $domHelper$$4$$;
  this.$eventDispatcher_$ = $eventDispatcher$$;
  this.$currentlyWatched_$ = 0;
  this.$success_$ = this.$last_$ = $JSCompiler_alias_FALSE$$;
  this.$timeout_$ = $opt_timeout$$1$$;
  this.$browserInfo_$ = $userAgent$$2$$.$browserInfo_$
}
function $JSCompiler_StaticMethods_watchFonts$$($JSCompiler_StaticMethods_watchFonts$self$$, $fonts$$, $fontTestStrings$$, $metricCompatibleFonts$$, $i$$12_last$$) {
  if(0 === $fonts$$.length && $i$$12_last$$) {
    $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_watchFonts$self$$.$eventDispatcher_$)
  }else {
    $JSCompiler_StaticMethods_watchFonts$self$$.$currentlyWatched_$ += $fonts$$.length;
    $i$$12_last$$ && ($JSCompiler_StaticMethods_watchFonts$self$$.$last_$ = $i$$12_last$$);
    for($i$$12_last$$ = 0;$i$$12_last$$ < $fonts$$.length;$i$$12_last$$++) {
      var $font$$8$$ = $fonts$$[$i$$12_last$$], $fontTestString$$1$$ = $fontTestStrings$$[$font$$8$$.getName()], $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_119$$ = $JSCompiler_StaticMethods_watchFonts$self$$.$eventDispatcher_$, $font$$inline_120$$ = $font$$8$$;
      $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_119$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_119$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_119$$.$namespace_$, $font$$inline_120$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$inline_120$$).toString(), "loading"));
      $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_119$$, "fontloading", $font$$inline_120$$);
      (new $webfont$FontWatchRunner$$($goog$bind$$($JSCompiler_StaticMethods_watchFonts$self$$.$fontActive_$, $JSCompiler_StaticMethods_watchFonts$self$$), $goog$bind$$($JSCompiler_StaticMethods_watchFonts$self$$.$fontInactive_$, $JSCompiler_StaticMethods_watchFonts$self$$), $JSCompiler_StaticMethods_watchFonts$self$$.$domHelper_$, $font$$8$$, $JSCompiler_StaticMethods_watchFonts$self$$.$browserInfo_$, $JSCompiler_StaticMethods_watchFonts$self$$.$timeout_$, $metricCompatibleFonts$$, $fontTestString$$1$$)).start()
    }
  }
}
$webfont$FontWatcher$$.prototype.$fontActive_$ = function $$webfont$FontWatcher$$$$$fontActive_$$($font$$9$$) {
  var $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$ = this.$eventDispatcher_$;
  $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$namespace_$, $font$$9$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$9$$).toString(), "loading"));
  $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$namespace_$, $font$$9$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$9$$).toString(), "inactive"));
  $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$.$namespace_$, $font$$9$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$9$$).toString(), "active"));
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_122$$, "fontactive", $font$$9$$);
  this.$success_$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$(this)
};
$webfont$FontWatcher$$.prototype.$fontInactive_$ = function $$webfont$FontWatcher$$$$$fontInactive_$$($font$$10$$) {
  var $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$ = this.$eventDispatcher_$;
  $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$namespace_$, $font$$10$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$10$$).toString(), "loading"));
  $JSCompiler_StaticMethods_hasClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$namespace_$, $font$$10$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$10$$).toString(), "active")) || $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$htmlElement_$, 
  $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$.$namespace_$, $font$$10$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$10$$).toString(), "inactive"));
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_125$$, "fontinactive", $font$$10$$);
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$(this)
};
function $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$) {
  0 == --$JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$currentlyWatched_$ && $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$last_$ && ($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$success_$ ? ($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$ = 
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$eventDispatcher_$, $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$htmlElement_$, $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$namespace_$, 
  "loading")), $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$htmlElement_$, $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$namespace_$, "inactive")), $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$htmlElement_$, 
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$namespace_$, "active")), $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$, "active")) : $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_128$$.$eventDispatcher_$))
}
;
// Input 14
function $webfont$WebFont$$($mainWindow$$1$$, $fontModuleLoader$$, $userAgent$$3$$) {
  this.$mainWindow_$ = $mainWindow$$1$$;
  this.$fontModuleLoader_$ = $fontModuleLoader$$;
  this.$userAgent_$ = $userAgent$$3$$;
  this.$moduleFailedLoading_$ = this.$moduleLoading_$ = 0
}
function $JSCompiler_StaticMethods_addModule$$($name$$69$$, $factory$$1$$) {
  $globalNamespaceObject$$.$fontModuleLoader_$.$modules_$[$name$$69$$] = $factory$$1$$
}
$webfont$WebFont$$.prototype.load = function $$webfont$WebFont$$$$load$($configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$) {
  var $context_eventDispatcher$$1$$ = $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$.context || this.$mainWindow_$;
  this.$domHelper_$ = new $webfont$DomHelper$$(this.$mainWindow_$, $context_eventDispatcher$$1$$);
  $context_eventDispatcher$$1$$ = new $webfont$EventDispatcher$$(this.$domHelper_$, $context_eventDispatcher$$1$$.document.documentElement, $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$);
  if(this.$userAgent_$.$browserInfo_$.$webfontSupport_$) {
    var $JSCompiler_StaticMethods_getModules$self$$inline_205_len$$inline_141$$ = this.$fontModuleLoader_$, $domHelper$$inline_207_module$$inline_142$$ = this.$domHelper_$, $modules$$inline_208$$ = [], $i$$inline_140_key$$inline_209$$;
    for($i$$inline_140_key$$inline_209$$ in $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$) {
      if($configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$.hasOwnProperty($i$$inline_140_key$$inline_209$$)) {
        var $moduleFactory$$inline_210$$ = $JSCompiler_StaticMethods_getModules$self$$inline_205_len$$inline_141$$.$modules_$[$i$$inline_140_key$$inline_209$$];
        $moduleFactory$$inline_210$$ && $modules$$inline_208$$.push($moduleFactory$$inline_210$$($configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$[$i$$inline_140_key$$inline_209$$], $domHelper$$inline_207_module$$inline_142$$))
      }
    }
    $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$ = $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$.timeout;
    this.$moduleFailedLoading_$ = this.$moduleLoading_$ = $modules$$inline_208$$.length;
    $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$ = new $webfont$FontWatcher$$(this.$userAgent_$, this.$domHelper_$, $context_eventDispatcher$$1$$, $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$);
    $i$$inline_140_key$$inline_209$$ = 0;
    for($JSCompiler_StaticMethods_getModules$self$$inline_205_len$$inline_141$$ = $modules$$inline_208$$.length;$i$$inline_140_key$$inline_209$$ < $JSCompiler_StaticMethods_getModules$self$$inline_205_len$$inline_141$$;$i$$inline_140_key$$inline_209$$++) {
      $domHelper$$inline_207_module$$inline_142$$ = $modules$$inline_208$$[$i$$inline_140_key$$inline_209$$], $domHelper$$inline_207_module$$inline_142$$.$supportUserAgent$(this.$userAgent_$, $goog$bind$$(this.$isModuleSupportingUserAgent_$, this, $domHelper$$inline_207_module$$inline_142$$, $context_eventDispatcher$$1$$, $configuration$$1_fontWatcher$$inline_139_timeout$$inline_138$$))
    }
  }else {
    $JSCompiler_StaticMethods_dispatchInactive$$($context_eventDispatcher$$1$$)
  }
};
$webfont$WebFont$$.prototype.$isModuleSupportingUserAgent_$ = function $$webfont$WebFont$$$$$isModuleSupportingUserAgent_$$($allModulesLoaded_module$$, $eventDispatcher$$2$$, $fontWatcher$$, $support$$1$$) {
  var $that$$1$$ = this;
  $support$$1$$ ? $allModulesLoaded_module$$.load(function($fonts$$1$$, $opt_fontTestStrings$$, $opt_metricCompatibleFonts$$1$$) {
    var $allModulesLoaded$$inline_150$$ = 0 == --$that$$1$$.$moduleLoading_$;
    $allModulesLoaded$$inline_150$$ && $JSCompiler_StaticMethods_dispatchLoading$$($eventDispatcher$$2$$);
    setTimeout(function() {
      $JSCompiler_StaticMethods_watchFonts$$($fontWatcher$$, $fonts$$1$$, $opt_fontTestStrings$$ || {}, $opt_metricCompatibleFonts$$1$$ || $JSCompiler_alias_NULL$$, $allModulesLoaded$$inline_150$$)
    }, 0)
  }) : ($allModulesLoaded_module$$ = 0 == --this.$moduleLoading_$, this.$moduleFailedLoading_$--, $allModulesLoaded_module$$ && (0 == this.$moduleFailedLoading_$ ? $JSCompiler_StaticMethods_dispatchInactive$$($eventDispatcher$$2$$) : $JSCompiler_StaticMethods_dispatchLoading$$($eventDispatcher$$2$$)), $JSCompiler_StaticMethods_watchFonts$$($fontWatcher$$, [], {}, $JSCompiler_alias_NULL$$, $allModulesLoaded_module$$))
};
// Input 15
var $JSCompiler_temp_const$$3$$ = window, $userAgent$$inline_152$$ = (new $webfont$UserAgentParser$$(navigator.userAgent, document)).parse(), $globalNamespaceObject$$ = $JSCompiler_temp_const$$3$$.WebFont = new $webfont$WebFont$$(window, new function() {
  this.$modules_$ = {}
}, $userAgent$$inline_152$$);
$globalNamespaceObject$$.load = $globalNamespaceObject$$.load;
// Input 16
function $webfont$modules$Monotype$$($userAgent$$5$$, $domHelper$$5$$, $configuration$$3$$) {
  this.$userAgent_$ = $userAgent$$5$$;
  this.$domHelper_$ = $domHelper$$5$$;
  this.$configuration_$ = $configuration$$3$$;
  this.$fonts_$ = []
}
$webfont$modules$Monotype$$.prototype.$supportUserAgent$ = function $$webfont$modules$Monotype$$$$$supportUserAgent$$($userAgent$$6$$, $support$$2$$) {
  var $self$$2$$ = this, $projectId$$ = $self$$2$$.$configuration_$.projectId, $version$$16$$ = $self$$2$$.$configuration_$.version;
  if($projectId$$) {
    var $loadWindow$$ = $self$$2$$.$domHelper_$.$loadWindow_$, $sc$$ = $self$$2$$.$domHelper_$.createElement("script");
    $sc$$.id = "__MonotypeAPIScript__" + $projectId$$;
    var $done$$1$$ = $JSCompiler_alias_FALSE$$;
    $sc$$.onload = $sc$$.onreadystatechange = function $$sc$$$onreadystatechange$() {
      if(!$done$$1$$ && (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState)) {
        $done$$1$$ = $JSCompiler_alias_TRUE$$;
        if($loadWindow$$["__mti_fntLst" + $projectId$$]) {
          var $mti_fnts$$inline_154$$ = $loadWindow$$["__mti_fntLst" + $projectId$$]();
          if($mti_fnts$$inline_154$$) {
            for(var $i$$inline_155$$ = 0;$i$$inline_155$$ < $mti_fnts$$inline_154$$.length;$i$$inline_155$$++) {
              $self$$2$$.$fonts_$.push(new $webfont$Font$$($mti_fnts$$inline_154$$[$i$$inline_155$$].fontfamily))
            }
          }
        }
        $support$$2$$($userAgent$$6$$.$browserInfo_$.$webfontSupport_$);
        $sc$$.onload = $sc$$.onreadystatechange = $JSCompiler_alias_NULL$$
      }
    };
    $sc$$.src = $self$$2$$.$getScriptSrc$($projectId$$, $version$$16$$);
    $JSCompiler_StaticMethods_insertInto$$(this.$domHelper_$, "head", $sc$$)
  }else {
    $support$$2$$($JSCompiler_alias_TRUE$$)
  }
};
$webfont$modules$Monotype$$.prototype.$getScriptSrc$ = function $$webfont$modules$Monotype$$$$$getScriptSrc$$($projectId$$1$$, $version$$17$$) {
  var $p$$ = $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$), $api$$ = (this.$configuration_$.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
  return $p$$ + "//" + $api$$ + "/" + $projectId$$1$$ + ".js" + ($version$$17$$ ? "?v=" + $version$$17$$ : "")
};
$webfont$modules$Monotype$$.prototype.load = function $$webfont$modules$Monotype$$$$load$($onReady$$1$$) {
  $onReady$$1$$(this.$fonts_$)
};
$JSCompiler_StaticMethods_addModule$$("monotype", function($configuration$$4$$, $domHelper$$6$$) {
  var $userAgent$$7$$ = (new $webfont$UserAgentParser$$(navigator.userAgent, document)).parse();
  return new $webfont$modules$Monotype$$($userAgent$$7$$, $domHelper$$6$$, $configuration$$4$$)
});
// Input 17
function $webfont$modules$Fontdeck$$($domHelper$$7$$, $configuration$$5$$) {
  this.$domHelper_$ = $domHelper$$7$$;
  this.$configuration_$ = $configuration$$5$$;
  this.$fonts_$ = []
}
$webfont$modules$Fontdeck$$.prototype.$getScriptSrc$ = function $$webfont$modules$Fontdeck$$$$$getScriptSrc$$($projectId$$2$$) {
  return $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$) + (this.$configuration_$.api || "//f.fontdeck.com/s/css/js/") + (this.$domHelper_$.$loadWindow_$.location.hostname || this.$domHelper_$.$mainWindow_$.location.hostname) + "/" + $projectId$$2$$ + ".js"
};
$webfont$modules$Fontdeck$$.prototype.$supportUserAgent$ = function $$webfont$modules$Fontdeck$$$$$supportUserAgent$$($userAgent$$8$$, $support$$3$$) {
  var $projectId$$3_script$$2$$ = this.$configuration_$.id, $loadWindow$$1$$ = this.$domHelper_$.$loadWindow_$, $self$$3$$ = this;
  $projectId$$3_script$$2$$ ? ($loadWindow$$1$$.__webfontfontdeckmodule__ || ($loadWindow$$1$$.__webfontfontdeckmodule__ = {}), $loadWindow$$1$$.__webfontfontdeckmodule__[$projectId$$3_script$$2$$] = function $$loadWindow$$1$$$__webfontfontdeckmodule__$$projectId$$3_script$$2$$$($fontdeckSupports$$, $data$$21$$) {
    for(var $i$$15$$ = 0, $j$$1$$ = $data$$21$$.fonts.length;$i$$15$$ < $j$$1$$;++$i$$15$$) {
      var $font$$11$$ = $data$$21$$.fonts[$i$$15$$];
      $self$$3$$.$fonts_$.push(new $webfont$Font$$($font$$11$$.name, $webfont$Font$parseCssVariation$$("font-weight:" + $font$$11$$.weight + ";font-style:" + $font$$11$$.style)))
    }
    $support$$3$$($fontdeckSupports$$)
  }, $projectId$$3_script$$2$$ = $JSCompiler_StaticMethods_createScriptSrc$$(this.$domHelper_$, this.$getScriptSrc$($projectId$$3_script$$2$$)), $JSCompiler_StaticMethods_insertInto$$(this.$domHelper_$, "head", $projectId$$3_script$$2$$)) : $support$$3$$($JSCompiler_alias_TRUE$$)
};
$webfont$modules$Fontdeck$$.prototype.load = function $$webfont$modules$Fontdeck$$$$load$($onReady$$2$$) {
  $onReady$$2$$(this.$fonts_$)
};
$JSCompiler_StaticMethods_addModule$$("fontdeck", function($configuration$$6$$, $domHelper$$8$$) {
  return new $webfont$modules$Fontdeck$$($domHelper$$8$$, $configuration$$6$$)
});
// Input 18
function $webfont$modules$google$FontApiUrlBuilder$$($apiUrl$$, $protocol$$3$$, $text$$8$$) {
  this.$apiUrl_$ = $apiUrl$$ ? $apiUrl$$ : $protocol$$3$$ + $webfont$modules$google$FontApiUrlBuilder$DEFAULT_API_URL$$;
  this.$fontFamilies_$ = [];
  this.$subsets_$ = [];
  this.$text_$ = $text$$8$$ || ""
}
var $webfont$modules$google$FontApiUrlBuilder$DEFAULT_API_URL$$ = "//fonts.googleapis.com/css";
$webfont$modules$google$FontApiUrlBuilder$$.prototype.$build$ = function $$webfont$modules$google$FontApiUrlBuilder$$$$$build$$() {
  if(0 == this.$fontFamilies_$.length) {
    throw Error("No fonts to load !");
  }
  if(-1 != this.$apiUrl_$.indexOf("kit=")) {
    return this.$apiUrl_$
  }
  for(var $length$$14_url$$21$$ = this.$fontFamilies_$.length, $sb$$ = [], $i$$17$$ = 0;$i$$17$$ < $length$$14_url$$21$$;$i$$17$$++) {
    $sb$$.push(this.$fontFamilies_$[$i$$17$$].replace(/ /g, "+"))
  }
  $length$$14_url$$21$$ = this.$apiUrl_$ + "?family=" + $sb$$.join("%7C");
  0 < this.$subsets_$.length && ($length$$14_url$$21$$ += "&subset=" + this.$subsets_$.join(","));
  0 < this.$text_$.length && ($length$$14_url$$21$$ += "&text=" + encodeURIComponent(this.$text_$));
  return $length$$14_url$$21$$
};
// Input 19
function $webfont$modules$google$FontApiParser$$($fontFamilies$$2$$) {
  this.$fontFamilies_$ = $fontFamilies$$2$$;
  this.$parsedFonts_$ = [];
  this.$fontTestStrings_$ = {}
}
var $webfont$modules$google$FontApiParser$INT_FONTS$$ = {latin:"BESbswy", cyrillic:"&#1081;&#1103;&#1046;", greek:"&#945;&#946;&#931;", khmer:"&#x1780;&#x1781;&#x1782;", Hanuman:"&#x1780;&#x1781;&#x1782;"}, $webfont$modules$google$FontApiParser$WEIGHTS$$ = {thin:"1", extralight:"2", "extra-light":"2", ultralight:"2", "ultra-light":"2", light:"3", regular:"4", book:"4", medium:"5", "semi-bold":"6", semibold:"6", "demi-bold":"6", demibold:"6", bold:"7", "extra-bold":"8", extrabold:"8", "ultra-bold":"8", 
ultrabold:"8", black:"9", heavy:"9", l:"3", r:"4", b:"7"}, $webfont$modules$google$FontApiParser$STYLES$$ = {i:"i", italic:"i", n:"n", normal:"n"}, $webfont$modules$google$FontApiParser$VARIATION_MATCH$$ = RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");
$webfont$modules$google$FontApiParser$$.prototype.parse = function $$webfont$modules$google$FontApiParser$$$$parse$() {
  for(var $length$$15$$ = this.$fontFamilies_$.length, $i$$18$$ = 0;$i$$18$$ < $length$$15$$;$i$$18$$++) {
    var $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ = this.$fontFamilies_$[$i$$18$$].split(":"), $fontFamily$$ = $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$[0].replace(/\+/g, " "), $variations$$ = ["n4"];
    if(2 <= $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$.length) {
      var $finalSubsets$$inline_166_finalVariations$$inline_159_fvds$$;
      var $providedVariations$$inline_160_variations$$inline_158$$ = $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$[1];
      $finalSubsets$$inline_166_finalVariations$$inline_159_fvds$$ = [];
      if($providedVariations$$inline_160_variations$$inline_158$$) {
        for(var $providedVariations$$inline_160_variations$$inline_158$$ = $providedVariations$$inline_160_variations$$inline_158$$.split(","), $length$$inline_161$$ = $providedVariations$$inline_160_variations$$inline_158$$.length, $i$$inline_162$$ = 0;$i$$inline_162$$ < $length$$inline_161$$;$i$$inline_162$$++) {
          var $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$;
          $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$ = $providedVariations$$inline_160_variations$$inline_158$$[$i$$inline_162$$];
          if($fvd$$inline_163_groups$$inline_213_variation$$inline_212$$.match(/^[\w]+$/)) {
            $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$ = $webfont$modules$google$FontApiParser$VARIATION_MATCH$$.exec($fvd$$inline_163_groups$$inline_213_variation$$inline_212$$.toLowerCase());
            var $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ = $JSCompiler_alias_VOID$$;
            if($fvd$$inline_163_groups$$inline_213_variation$$inline_212$$ == $JSCompiler_alias_NULL$$) {
              $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ = ""
            }else {
              $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ = $JSCompiler_alias_VOID$$;
              $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ = $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$[1];
              if($JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ == $JSCompiler_alias_NULL$$ || "" == $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$) {
                $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ = "4"
              }else {
                var $weight$$inline_217$$ = $webfont$modules$google$FontApiParser$WEIGHTS$$[$JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$], $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ = $weight$$inline_217$$ ? $weight$$inline_217$$ : isNaN($JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$) ? "4" : $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$.substr(0, 
                1)
              }
              $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$ = [$fvd$$inline_163_groups$$inline_213_variation$$inline_212$$[2] == $JSCompiler_alias_NULL$$ || "" == $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$[2] ? "n" : $webfont$modules$google$FontApiParser$STYLES$$[$fvd$$inline_163_groups$$inline_213_variation$$inline_212$$[2]], $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$].join("")
            }
            $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$ = $JSCompiler_inline_result$$inline_215_JSCompiler_temp$$inline_214_parsedWeight$$inline_216$$
          }else {
            $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$ = ""
          }
          $fvd$$inline_163_groups$$inline_213_variation$$inline_212$$ && $finalSubsets$$inline_166_finalVariations$$inline_159_fvds$$.push($fvd$$inline_163_groups$$inline_213_variation$$inline_212$$)
        }
      }
      0 < $finalSubsets$$inline_166_finalVariations$$inline_159_fvds$$.length && ($variations$$ = $finalSubsets$$inline_166_finalVariations$$inline_159_fvds$$);
      3 == $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$.length && ($elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ = $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$[2], $finalSubsets$$inline_166_finalVariations$$inline_159_fvds$$ = [], $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ = !$elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ ? 
      $finalSubsets$$inline_166_finalVariations$$inline_159_fvds$$ : $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$.split(","), 0 < $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$.length && ($elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ = $webfont$modules$google$FontApiParser$INT_FONTS$$[$elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$[0]]) && (this.$fontTestStrings_$[$fontFamily$$] = 
      $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$))
    }
    this.$fontTestStrings_$[$fontFamily$$] || ($elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ = $webfont$modules$google$FontApiParser$INT_FONTS$$[$fontFamily$$]) && (this.$fontTestStrings_$[$fontFamily$$] = $elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$);
    for($elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ = 0;$elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ < $variations$$.length;$elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$ += 1) {
      this.$parsedFonts_$.push(new $webfont$Font$$($fontFamily$$, $variations$$[$elements$$1_fontTestString$$2_hanumanTestString_j$$2_subsets_subsets$$inline_165$$]))
    }
  }
};
// Input 20
function $webfont$modules$google$GoogleFontApi$$($userAgent$$9$$, $domHelper$$9$$, $configuration$$7$$) {
  this.$userAgent_$ = $userAgent$$9$$;
  this.$domHelper_$ = $domHelper$$9$$;
  this.$configuration_$ = $configuration$$7$$
}
var $webfont$modules$google$GoogleFontApi$METRICS_COMPATIBLE_FONTS$$ = {Arimo:$JSCompiler_alias_TRUE$$, Cousine:$JSCompiler_alias_TRUE$$, Tinos:$JSCompiler_alias_TRUE$$};
$webfont$modules$google$GoogleFontApi$$.prototype.$supportUserAgent$ = function $$webfont$modules$google$GoogleFontApi$$$$$supportUserAgent$$($userAgent$$10$$, $support$$4$$) {
  $support$$4$$($userAgent$$10$$.$browserInfo_$.$webfontSupport_$)
};
$webfont$modules$google$GoogleFontApi$$.prototype.load = function $$webfont$modules$google$GoogleFontApi$$$$load$($onReady$$3$$) {
  var $domHelper$$10$$ = this.$domHelper_$;
  if("MSIE" == this.$userAgent_$.getName() && this.$configuration_$.blocking != $JSCompiler_alias_TRUE$$) {
    var $callback$$inline_172$$ = $goog$bind$$(this.$insertLink_$, this, $onReady$$3$$), $check$$inline_174$$ = function $$check$$inline_174$$$() {
      $domHelper$$10$$.$document_$.body ? $callback$$inline_172$$() : setTimeout($check$$inline_174$$, 0)
    };
    $check$$inline_174$$()
  }else {
    this.$insertLink_$($onReady$$3$$)
  }
};
$webfont$modules$google$GoogleFontApi$$.prototype.$insertLink_$ = function $$webfont$modules$google$GoogleFontApi$$$$$insertLink_$$($onReady$$4$$) {
  for(var $domHelper$$11$$ = this.$domHelper_$, $fontApiUrlBuilder$$ = new $webfont$modules$google$FontApiUrlBuilder$$(this.$configuration_$.api, $JSCompiler_StaticMethods_getProtocol$$($domHelper$$11$$), this.$configuration_$.text), $fontApiParser_fontFamilies$$3$$ = this.$configuration_$.families, $length$$inline_222$$ = $fontApiParser_fontFamilies$$3$$.length, $i$$inline_223$$ = 0;$i$$inline_223$$ < $length$$inline_222$$;$i$$inline_223$$++) {
    var $elements$$inline_224$$ = $fontApiParser_fontFamilies$$3$$[$i$$inline_223$$].split(":");
    3 == $elements$$inline_224$$.length && $fontApiUrlBuilder$$.$subsets_$.push($elements$$inline_224$$.pop());
    var $joinCharacter$$inline_225$$ = "";
    2 == $elements$$inline_224$$.length && "" != $elements$$inline_224$$[1] && ($joinCharacter$$inline_225$$ = ":");
    $fontApiUrlBuilder$$.$fontFamilies_$.push($elements$$inline_224$$.join($joinCharacter$$inline_225$$))
  }
  $fontApiParser_fontFamilies$$3$$ = new $webfont$modules$google$FontApiParser$$($fontApiParser_fontFamilies$$3$$);
  $fontApiParser_fontFamilies$$3$$.parse();
  $JSCompiler_StaticMethods_insertInto$$($domHelper$$11$$, "head", $JSCompiler_StaticMethods_createCssLink$$($domHelper$$11$$, $fontApiUrlBuilder$$.$build$()));
  $onReady$$4$$($fontApiParser_fontFamilies$$3$$.$parsedFonts_$, $fontApiParser_fontFamilies$$3$$.$fontTestStrings_$, $webfont$modules$google$GoogleFontApi$METRICS_COMPATIBLE_FONTS$$)
};
$JSCompiler_StaticMethods_addModule$$("google", function($configuration$$8$$, $domHelper$$12$$) {
  var $userAgent$$11$$ = (new $webfont$UserAgentParser$$(navigator.userAgent, document)).parse();
  return new $webfont$modules$google$GoogleFontApi$$($userAgent$$11$$, $domHelper$$12$$, $configuration$$8$$)
});
// Input 21
function $webfont$modules$Ascender$$($domHelper$$13$$, $configuration$$9$$) {
  this.$domHelper_$ = $domHelper$$13$$;
  this.$configuration_$ = $configuration$$9$$
}
var $webfont$modules$Ascender$VARIATIONS$$ = {regular:"n4", bold:"n7", italic:"i4", bolditalic:"i7", r:"n4", b:"n7", i:"i4", bi:"i7"};
$webfont$modules$Ascender$$.prototype.$supportUserAgent$ = function $$webfont$modules$Ascender$$$$$supportUserAgent$$($userAgent$$12$$, $support$$5$$) {
  return $support$$5$$($userAgent$$12$$.$browserInfo_$.$webfontSupport_$)
};
$webfont$modules$Ascender$$.prototype.load = function $$webfont$modules$Ascender$$$$load$($onReady$$5$$) {
  $JSCompiler_StaticMethods_insertInto$$(this.$domHelper_$, "head", $JSCompiler_StaticMethods_createCssLink$$(this.$domHelper_$, $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$) + "//webfonts.fontslive.com/css/" + this.$configuration_$.key + ".css"));
  for(var $providedFamilies$$inline_180$$ = this.$configuration_$.families, $fonts$$inline_181$$ = [], $i$$inline_182$$ = 0, $len$$inline_183$$ = $providedFamilies$$inline_180$$.length;$i$$inline_182$$ < $len$$inline_183$$;$i$$inline_182$$++) {
    $fonts$$inline_181$$.push.apply($fonts$$inline_181$$, $JSCompiler_StaticMethods_parseFamilyAndVariations$$($providedFamilies$$inline_180$$[$i$$inline_182$$]))
  }
  $onReady$$5$$($fonts$$inline_181$$)
};
function $JSCompiler_StaticMethods_parseFamilyAndVariations$$($familyName_providedFamily$$) {
  var $parts$$5_variations$$inline_187$$ = $familyName_providedFamily$$.split(":");
  $familyName_providedFamily$$ = $parts$$5_variations$$inline_187$$[0];
  if($parts$$5_variations$$inline_187$$[1]) {
    for(var $providedVariations$$inline_186_result$$ = $parts$$5_variations$$inline_187$$[1].split(","), $parts$$5_variations$$inline_187$$ = [], $i$$21_i$$inline_188$$ = 0, $len$$inline_189$$ = $providedVariations$$inline_186_result$$.length;$i$$21_i$$inline_188$$ < $len$$inline_189$$;$i$$21_i$$inline_188$$++) {
      var $pv$$inline_190$$ = $providedVariations$$inline_186_result$$[$i$$21_i$$inline_188$$];
      if($pv$$inline_190$$) {
        var $v$$inline_191$$ = $webfont$modules$Ascender$VARIATIONS$$[$pv$$inline_190$$];
        $parts$$5_variations$$inline_187$$.push($v$$inline_191$$ ? $v$$inline_191$$ : $pv$$inline_190$$)
      }
    }
    $providedVariations$$inline_186_result$$ = [];
    for($i$$21_i$$inline_188$$ = 0;$i$$21_i$$inline_188$$ < $parts$$5_variations$$inline_187$$.length;$i$$21_i$$inline_188$$ += 1) {
      $providedVariations$$inline_186_result$$.push(new $webfont$Font$$($familyName_providedFamily$$, $parts$$5_variations$$inline_187$$[$i$$21_i$$inline_188$$]))
    }
    return $providedVariations$$inline_186_result$$
  }
  return[new $webfont$Font$$($familyName_providedFamily$$)]
}
$JSCompiler_StaticMethods_addModule$$("ascender", function($configuration$$10$$, $domHelper$$14$$) {
  return new $webfont$modules$Ascender$$($domHelper$$14$$, $configuration$$10$$)
});
// Input 22
function $webfont$modules$Custom$$($domHelper$$15$$, $configuration$$11$$) {
  this.$domHelper_$ = $domHelper$$15$$;
  this.$configuration_$ = $configuration$$11$$
}
$webfont$modules$Custom$$.prototype.load = function $$webfont$modules$Custom$$$$load$($onReady$$6$$) {
  var $i$$23$$, $len$$6$$, $fonts$$4_urls$$ = this.$configuration_$.urls || [], $familiesConfiguration$$ = this.$configuration_$.families || [];
  $i$$23$$ = 0;
  for($len$$6$$ = $fonts$$4_urls$$.length;$i$$23$$ < $len$$6$$;$i$$23$$++) {
    $JSCompiler_StaticMethods_insertInto$$(this.$domHelper_$, "head", $JSCompiler_StaticMethods_createCssLink$$(this.$domHelper_$, $fonts$$4_urls$$[$i$$23$$]))
  }
  $fonts$$4_urls$$ = [];
  $i$$23$$ = 0;
  for($len$$6$$ = $familiesConfiguration$$.length;$i$$23$$ < $len$$6$$;$i$$23$$++) {
    var $components$$ = $familiesConfiguration$$[$i$$23$$].split(":");
    if($components$$[1]) {
      for(var $variations$$4$$ = $components$$[1].split(","), $j$$3$$ = 0;$j$$3$$ < $variations$$4$$.length;$j$$3$$ += 1) {
        $fonts$$4_urls$$.push(new $webfont$Font$$($components$$[0], $variations$$4$$[$j$$3$$]))
      }
    }else {
      $fonts$$4_urls$$.push(new $webfont$Font$$($components$$[0]))
    }
  }
  $onReady$$6$$($fonts$$4_urls$$)
};
$webfont$modules$Custom$$.prototype.$supportUserAgent$ = function $$webfont$modules$Custom$$$$$supportUserAgent$$($userAgent$$13$$, $support$$6$$) {
  return $support$$6$$($userAgent$$13$$.$browserInfo_$.$webfontSupport_$)
};
$JSCompiler_StaticMethods_addModule$$("custom", function($configuration$$12$$, $domHelper$$16$$) {
  return new $webfont$modules$Custom$$($domHelper$$16$$, $configuration$$12$$)
});
// Input 23
function $webfont$modules$Typekit$$($domHelper$$17$$, $configuration$$13$$) {
  this.$domHelper_$ = $domHelper$$17$$;
  this.$configuration_$ = $configuration$$13$$;
  this.$fonts_$ = []
}
$webfont$modules$Typekit$$.prototype.$getScriptSrc$ = function $$webfont$modules$Typekit$$$$$getScriptSrc$$($kitId$$) {
  var $protocol$$5$$ = $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$);
  return(this.$configuration_$.api || $protocol$$5$$ + "//use.typekit.net") + "/" + $kitId$$ + ".js"
};
$webfont$modules$Typekit$$.prototype.$supportUserAgent$ = function $$webfont$modules$Typekit$$$$$supportUserAgent$$($userAgent$$14$$, $support$$7$$) {
  var $kitId$$1_script$$3$$ = this.$configuration_$.id, $configuration$$14$$ = this.$configuration_$, $loadWindow$$2$$ = this.$domHelper_$.$loadWindow_$, $self$$4$$ = this;
  $kitId$$1_script$$3$$ ? ($loadWindow$$2$$.__webfonttypekitmodule__ || ($loadWindow$$2$$.__webfonttypekitmodule__ = {}), $loadWindow$$2$$.__webfonttypekitmodule__[$kitId$$1_script$$3$$] = function $$loadWindow$$2$$$__webfonttypekitmodule__$$kitId$$1_script$$3$$$($callback$$35$$) {
    $callback$$35$$($userAgent$$14$$, $configuration$$14$$, function($typekitSupports$$, $fontFamilies$$4$$, $fontVariations$$) {
      for(var $i$$24$$ = 0;$i$$24$$ < $fontFamilies$$4$$.length;$i$$24$$ += 1) {
        var $variations$$5$$ = $fontVariations$$[$fontFamilies$$4$$[$i$$24$$]];
        if($variations$$5$$) {
          for(var $j$$4$$ = 0;$j$$4$$ < $variations$$5$$.length;$j$$4$$ += 1) {
            $self$$4$$.$fonts_$.push(new $webfont$Font$$($fontFamilies$$4$$[$i$$24$$], $variations$$5$$[$j$$4$$]))
          }
        }else {
          $self$$4$$.$fonts_$.push(new $webfont$Font$$($fontFamilies$$4$$[$i$$24$$]))
        }
      }
      $support$$7$$($typekitSupports$$)
    })
  }, $kitId$$1_script$$3$$ = $JSCompiler_StaticMethods_createScriptSrc$$(this.$domHelper_$, this.$getScriptSrc$($kitId$$1_script$$3$$)), $JSCompiler_StaticMethods_insertInto$$(this.$domHelper_$, "head", $kitId$$1_script$$3$$)) : $support$$7$$($JSCompiler_alias_TRUE$$)
};
$webfont$modules$Typekit$$.prototype.load = function $$webfont$modules$Typekit$$$$load$($onReady$$7$$) {
  $onReady$$7$$(this.$fonts_$)
};
$JSCompiler_StaticMethods_addModule$$("typekit", function($configuration$$15$$, $domHelper$$18$$) {
  return new $webfont$modules$Typekit$$($domHelper$$18$$, $configuration$$15$$)
});
// Input 24
window.WebFontConfig && $globalNamespaceObject$$.load(window.WebFontConfig);

})(this,document);
