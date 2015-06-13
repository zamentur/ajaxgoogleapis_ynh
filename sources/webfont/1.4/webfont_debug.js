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
var $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
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
    !$parts$$.length && void 0 !== $opt_object$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
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
  this.$document_$ = this.$loadWindow_$.document
}
$webfont$DomHelper$$.prototype.createElement = function $$webfont$DomHelper$$$$createElement$($domElement_elem$$1$$, $opt_attr$$, $opt_innerHtml$$) {
  $domElement_elem$$1$$ = this.$document_$.createElement($domElement_elem$$1$$);
  if($opt_attr$$) {
    for(var $attr$$ in $opt_attr$$) {
      $opt_attr$$.hasOwnProperty($attr$$) && ("style" == $attr$$ ? $domElement_elem$$1$$.style.cssText = $opt_attr$$[$attr$$] : $domElement_elem$$1$$.setAttribute($attr$$, $opt_attr$$[$attr$$]))
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
function $JSCompiler_StaticMethods_getProtocol$$($JSCompiler_StaticMethods_getProtocol$self$$) {
  var $protocol$$1$$ = $JSCompiler_StaticMethods_getProtocol$self$$.$loadWindow_$.location.protocol;
  "about:" == $protocol$$1$$ && ($protocol$$1$$ = $JSCompiler_StaticMethods_getProtocol$self$$.$mainWindow_$.location.protocol);
  return"https:" == $protocol$$1$$ ? "https:" : "http:"
}
function $JSCompiler_StaticMethods_loadStylesheet$$($JSCompiler_StaticMethods_loadStylesheet$self$$, $href$$) {
  var $link$$ = $JSCompiler_StaticMethods_loadStylesheet$self$$.createElement("link", {rel:"stylesheet", href:$href$$}), $done$$ = $JSCompiler_alias_FALSE$$;
  $link$$.onload = function $$link$$$onload$() {
    $done$$ || ($done$$ = $JSCompiler_alias_TRUE$$)
  };
  $link$$.onerror = function $$link$$$onerror$() {
    $done$$ || ($done$$ = $JSCompiler_alias_TRUE$$)
  };
  $JSCompiler_StaticMethods_insertInto$$($JSCompiler_StaticMethods_loadStylesheet$self$$, "head", $link$$)
}
function $JSCompiler_StaticMethods_loadScript$$($JSCompiler_StaticMethods_loadScript$self$$, $src$$4$$, $opt_callback$$5$$, $opt_timeout$$) {
  var $head$$ = $JSCompiler_StaticMethods_loadScript$self$$.$document_$.getElementsByTagName("head")[0];
  if($head$$) {
    var $script$$1$$ = $JSCompiler_StaticMethods_loadScript$self$$.createElement("script", {src:$src$$4$$}), $done$$1$$ = $JSCompiler_alias_FALSE$$;
    $script$$1$$.onload = $script$$1$$.onreadystatechange = function $$script$$1$$$onreadystatechange$() {
      if(!$done$$1$$ && (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState)) {
        $done$$1$$ = $JSCompiler_alias_TRUE$$, $opt_callback$$5$$ && $opt_callback$$5$$($JSCompiler_alias_NULL$$), $script$$1$$.onload = $script$$1$$.onreadystatechange = $JSCompiler_alias_NULL$$, "HEAD" == $script$$1$$.parentNode.tagName && $head$$.removeChild($script$$1$$)
      }
    };
    $head$$.appendChild($script$$1$$);
    window.setTimeout(function() {
      $done$$1$$ || ($done$$1$$ = $JSCompiler_alias_TRUE$$, $opt_callback$$5$$ && $opt_callback$$5$$(Error("Script load timeout")))
    }, $opt_timeout$$ || 5E3);
    return $script$$1$$
  }
  return $JSCompiler_alias_NULL$$
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
var $webfont$UserAgentParser$UNKNOWN_USER_AGENT$$ = new $webfont$UserAgent$$("Unknown", new $webfont$Version$$, "Unknown", "Unknown", new $webfont$Version$$, "Unknown", "Unknown", new $webfont$Version$$, "Unknown", void 0, new $webfont$BrowserInfo$$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$));
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
  var $JSCompiler_inline_result$$192_quoted$$inline_195$$;
  $JSCompiler_inline_result$$192_quoted$$inline_195$$ = [];
  for(var $split$$inline_196_style$$inline_201$$ = $font$$3$$.$name_$.split(/,\s*/), $i$$inline_197_weight$$inline_202$$ = 0;$i$$inline_197_weight$$inline_202$$ < $split$$inline_196_style$$inline_201$$.length;$i$$inline_197_weight$$inline_202$$++) {
    var $part$$inline_198$$ = $split$$inline_196_style$$inline_201$$[$i$$inline_197_weight$$inline_202$$].replace(/['"]/g, "");
    -1 == $part$$inline_198$$.indexOf(" ") ? $JSCompiler_inline_result$$192_quoted$$inline_195$$.push($part$$inline_198$$) : $JSCompiler_inline_result$$192_quoted$$inline_195$$.push("'" + $part$$inline_198$$ + "'")
  }
  $JSCompiler_inline_result$$192_quoted$$inline_195$$ = $JSCompiler_inline_result$$192_quoted$$inline_195$$.join(",");
  $split$$inline_196_style$$inline_201$$ = "normal";
  $i$$inline_197_weight$$inline_202$$ = $font$$3$$.$weight_$ + "00";
  "o" === $font$$3$$.$style_$ ? $split$$inline_196_style$$inline_201$$ = "oblique" : "i" === $font$$3$$.$style_$ && ($split$$inline_196_style$$inline_201$$ = "italic");
  $JSCompiler_StaticMethods_setFont$self$$.$el_$.style.cssText = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + $JSCompiler_inline_result$$192_quoted$$inline_195$$ + ";" + ("font-style:" + $split$$inline_196_style$$inline_201$$ + ";font-weight:" + $i$$inline_197_weight$$inline_202$$ + ";")
}
function $JSCompiler_StaticMethods_insert$$($JSCompiler_StaticMethods_insert$self$$) {
  $JSCompiler_StaticMethods_insertInto$$($JSCompiler_StaticMethods_insert$self$$.$domHelper_$, "body", $JSCompiler_StaticMethods_insert$self$$.$el_$)
}
$webfont$FontRuler$$.prototype.remove = function $$webfont$FontRuler$$$$remove$() {
  var $node$$inline_110$$ = this.$el_$;
  $node$$inline_110$$.parentNode && $node$$inline_110$$.parentNode.removeChild($node$$inline_110$$)
};
// Input 12
function $webfont$FontWatchRunner$$($activeCallback_fontRuler$$inline_113$$, $inactiveCallback$$, $domHelper$$3$$, $font$$5$$, $browserInfo$$1$$, $opt_timeout$$1$$, $opt_metricCompatibleFonts$$, $opt_fontTestString$$) {
  this.$activeCallback_$ = $activeCallback_fontRuler$$inline_113$$;
  this.$inactiveCallback_$ = $inactiveCallback$$;
  this.$domHelper_$ = $domHelper$$3$$;
  this.$font_$ = $font$$5$$;
  this.$fontTestString_$ = $opt_fontTestString$$ || "BESbswy";
  this.$browserInfo_$ = $browserInfo$$1$$;
  this.$lastResortWidths_$ = {};
  this.$timeout_$ = $opt_timeout$$1$$ || 5E3;
  this.$metricCompatibleFonts_$ = $opt_metricCompatibleFonts$$ || $JSCompiler_alias_NULL$$;
  this.$fontRulerB_$ = this.$fontRulerA_$ = $JSCompiler_alias_NULL$$;
  $activeCallback_fontRuler$$inline_113$$ = new $webfont$FontRuler$$(this.$domHelper_$, this.$fontTestString_$);
  $JSCompiler_StaticMethods_insert$$($activeCallback_fontRuler$$inline_113$$);
  for(var $font$$inline_114$$ in $webfont$FontWatchRunner$LastResortFonts$$) {
    $webfont$FontWatchRunner$LastResortFonts$$.hasOwnProperty($font$$inline_114$$) && ($JSCompiler_StaticMethods_setFont$$($activeCallback_fontRuler$$inline_113$$, new $webfont$Font$$($webfont$FontWatchRunner$LastResortFonts$$[$font$$inline_114$$], $JSCompiler_StaticMethods_getVariation$$(this.$font_$))), this.$lastResortWidths_$[$webfont$FontWatchRunner$LastResortFonts$$[$font$$inline_114$$]] = $activeCallback_fontRuler$$inline_113$$.$el_$.offsetWidth)
  }
  $activeCallback_fontRuler$$inline_113$$.remove()
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
function $webfont$FontWatcher$$($userAgent$$2$$, $domHelper$$4$$, $eventDispatcher$$, $opt_timeout$$2$$) {
  this.$domHelper_$ = $domHelper$$4$$;
  this.$eventDispatcher_$ = $eventDispatcher$$;
  this.$currentlyWatched_$ = 0;
  this.$success_$ = this.$last_$ = $JSCompiler_alias_FALSE$$;
  this.$timeout_$ = $opt_timeout$$2$$;
  this.$browserInfo_$ = $userAgent$$2$$.$browserInfo_$
}
function $JSCompiler_StaticMethods_watchFonts$$($JSCompiler_StaticMethods_watchFonts$self$$, $fonts$$, $fontTestStrings$$, $metricCompatibleFonts$$, $i$$12_last$$) {
  if(0 === $fonts$$.length && $i$$12_last$$) {
    $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_watchFonts$self$$.$eventDispatcher_$)
  }else {
    $JSCompiler_StaticMethods_watchFonts$self$$.$currentlyWatched_$ += $fonts$$.length;
    $i$$12_last$$ && ($JSCompiler_StaticMethods_watchFonts$self$$.$last_$ = $i$$12_last$$);
    for($i$$12_last$$ = 0;$i$$12_last$$ < $fonts$$.length;$i$$12_last$$++) {
      var $font$$8$$ = $fonts$$[$i$$12_last$$], $fontTestString$$1$$ = $fontTestStrings$$[$font$$8$$.getName()], $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_118$$ = $JSCompiler_StaticMethods_watchFonts$self$$.$eventDispatcher_$, $font$$inline_119$$ = $font$$8$$;
      $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_118$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_118$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_118$$.$namespace_$, $font$$inline_119$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$inline_119$$).toString(), "loading"));
      $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_118$$, "fontloading", $font$$inline_119$$);
      (new $webfont$FontWatchRunner$$($goog$bind$$($JSCompiler_StaticMethods_watchFonts$self$$.$fontActive_$, $JSCompiler_StaticMethods_watchFonts$self$$), $goog$bind$$($JSCompiler_StaticMethods_watchFonts$self$$.$fontInactive_$, $JSCompiler_StaticMethods_watchFonts$self$$), $JSCompiler_StaticMethods_watchFonts$self$$.$domHelper_$, $font$$8$$, $JSCompiler_StaticMethods_watchFonts$self$$.$browserInfo_$, $JSCompiler_StaticMethods_watchFonts$self$$.$timeout_$, $metricCompatibleFonts$$, $fontTestString$$1$$)).start()
    }
  }
}
$webfont$FontWatcher$$.prototype.$fontActive_$ = function $$webfont$FontWatcher$$$$$fontActive_$$($font$$9$$) {
  var $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$ = this.$eventDispatcher_$;
  $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$namespace_$, $font$$9$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$9$$).toString(), "loading"));
  $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$namespace_$, $font$$9$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$9$$).toString(), "inactive"));
  $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$.$namespace_$, $font$$9$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$9$$).toString(), "active"));
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_121$$, "fontactive", $font$$9$$);
  this.$success_$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$(this)
};
$webfont$FontWatcher$$.prototype.$fontInactive_$ = function $$webfont$FontWatcher$$$$$fontInactive_$$($font$$10$$) {
  var $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$ = this.$eventDispatcher_$;
  $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$namespace_$, $font$$10$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$10$$).toString(), "loading"));
  $JSCompiler_StaticMethods_hasClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$namespace_$, $font$$10$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$10$$).toString(), "active")) || $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$htmlElement_$, 
  $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$.$namespace_$, $font$$10$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$10$$).toString(), "inactive"));
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_124$$, "fontinactive", $font$$10$$);
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$(this)
};
function $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$) {
  0 == --$JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$currentlyWatched_$ && $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$last_$ && ($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$success_$ ? ($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$ = 
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$eventDispatcher_$, $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$htmlElement_$, $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$namespace_$, 
  "loading")), $JSCompiler_StaticMethods_removeClassName$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$htmlElement_$, $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$namespace_$, "inactive")), $JSCompiler_StaticMethods_appendClassName$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$htmlElement_$, 
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$namespace_$, "active")), $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$, "active")) : $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_127$$.$eventDispatcher_$))
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
$webfont$WebFont$$.prototype.load = function $$webfont$WebFont$$$$load$($configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$) {
  var $context_eventDispatcher$$1$$ = $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$.context || this.$mainWindow_$;
  this.$domHelper_$ = new $webfont$DomHelper$$(this.$mainWindow_$, $context_eventDispatcher$$1$$);
  $context_eventDispatcher$$1$$ = new $webfont$EventDispatcher$$(this.$domHelper_$, $context_eventDispatcher$$1$$.document.documentElement, $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$);
  if(this.$userAgent_$.$browserInfo_$.$webfontSupport_$) {
    var $JSCompiler_StaticMethods_getModules$self$$inline_204_len$$inline_140$$ = this.$fontModuleLoader_$, $domHelper$$inline_206_module$$inline_141$$ = this.$domHelper_$, $modules$$inline_207$$ = [], $i$$inline_139_key$$inline_208$$;
    for($i$$inline_139_key$$inline_208$$ in $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$) {
      if($configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$.hasOwnProperty($i$$inline_139_key$$inline_208$$)) {
        var $moduleFactory$$inline_209$$ = $JSCompiler_StaticMethods_getModules$self$$inline_204_len$$inline_140$$.$modules_$[$i$$inline_139_key$$inline_208$$];
        $moduleFactory$$inline_209$$ && $modules$$inline_207$$.push($moduleFactory$$inline_209$$($configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$[$i$$inline_139_key$$inline_208$$], $domHelper$$inline_206_module$$inline_141$$))
      }
    }
    $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$ = $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$.timeout;
    this.$moduleFailedLoading_$ = this.$moduleLoading_$ = $modules$$inline_207$$.length;
    $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$ = new $webfont$FontWatcher$$(this.$userAgent_$, this.$domHelper_$, $context_eventDispatcher$$1$$, $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$);
    $i$$inline_139_key$$inline_208$$ = 0;
    for($JSCompiler_StaticMethods_getModules$self$$inline_204_len$$inline_140$$ = $modules$$inline_207$$.length;$i$$inline_139_key$$inline_208$$ < $JSCompiler_StaticMethods_getModules$self$$inline_204_len$$inline_140$$;$i$$inline_139_key$$inline_208$$++) {
      $domHelper$$inline_206_module$$inline_141$$ = $modules$$inline_207$$[$i$$inline_139_key$$inline_208$$], $domHelper$$inline_206_module$$inline_141$$.$supportUserAgent$(this.$userAgent_$, $goog$bind$$(this.$isModuleSupportingUserAgent_$, this, $domHelper$$inline_206_module$$inline_141$$, $context_eventDispatcher$$1$$, $configuration$$1_fontWatcher$$inline_138_timeout$$inline_137$$))
    }
  }else {
    $JSCompiler_StaticMethods_dispatchInactive$$($context_eventDispatcher$$1$$)
  }
};
$webfont$WebFont$$.prototype.$isModuleSupportingUserAgent_$ = function $$webfont$WebFont$$$$$isModuleSupportingUserAgent_$$($allModulesLoaded_module$$, $eventDispatcher$$2$$, $fontWatcher$$, $support$$1$$) {
  var $that$$1$$ = this;
  $support$$1$$ ? $allModulesLoaded_module$$.load(function($fonts$$1$$, $opt_fontTestStrings$$, $opt_metricCompatibleFonts$$1$$) {
    var $allModulesLoaded$$inline_149$$ = 0 == --$that$$1$$.$moduleLoading_$;
    $allModulesLoaded$$inline_149$$ && $JSCompiler_StaticMethods_dispatchLoading$$($eventDispatcher$$2$$);
    setTimeout(function() {
      $JSCompiler_StaticMethods_watchFonts$$($fontWatcher$$, $fonts$$1$$, $opt_fontTestStrings$$ || {}, $opt_metricCompatibleFonts$$1$$ || $JSCompiler_alias_NULL$$, $allModulesLoaded$$inline_149$$)
    }, 0)
  }) : ($allModulesLoaded_module$$ = 0 == --this.$moduleLoading_$, this.$moduleFailedLoading_$--, $allModulesLoaded_module$$ && (0 == this.$moduleFailedLoading_$ ? $JSCompiler_StaticMethods_dispatchInactive$$($eventDispatcher$$2$$) : $JSCompiler_StaticMethods_dispatchLoading$$($eventDispatcher$$2$$)), $JSCompiler_StaticMethods_watchFonts$$($fontWatcher$$, [], {}, $JSCompiler_alias_NULL$$, $allModulesLoaded_module$$))
};
// Input 15
var $JSCompiler_temp_const$$3$$ = window, $userAgent$$inline_151$$ = (new $webfont$UserAgentParser$$(navigator.userAgent, document)).parse(), $globalNamespaceObject$$ = $JSCompiler_temp_const$$3$$.WebFont = new $webfont$WebFont$$(window, new function() {
  this.$modules_$ = {}
}, $userAgent$$inline_151$$);
$globalNamespaceObject$$.load = $globalNamespaceObject$$.load;
// Input 16
function $webfont$modules$Custom$$($domHelper$$5$$, $configuration$$3$$) {
  this.$domHelper_$ = $domHelper$$5$$;
  this.$configuration_$ = $configuration$$3$$
}
$webfont$modules$Custom$$.prototype.load = function $$webfont$modules$Custom$$$$load$($onReady$$1$$) {
  var $i$$14$$, $len$$4$$, $fonts$$3_urls$$ = this.$configuration_$.urls || [], $familiesConfiguration$$ = this.$configuration_$.families || [];
  $i$$14$$ = 0;
  for($len$$4$$ = $fonts$$3_urls$$.length;$i$$14$$ < $len$$4$$;$i$$14$$++) {
    $JSCompiler_StaticMethods_loadStylesheet$$(this.$domHelper_$, $fonts$$3_urls$$[$i$$14$$])
  }
  $fonts$$3_urls$$ = [];
  $i$$14$$ = 0;
  for($len$$4$$ = $familiesConfiguration$$.length;$i$$14$$ < $len$$4$$;$i$$14$$++) {
    var $components$$ = $familiesConfiguration$$[$i$$14$$].split(":");
    if($components$$[1]) {
      for(var $variations$$ = $components$$[1].split(","), $j$$1$$ = 0;$j$$1$$ < $variations$$.length;$j$$1$$ += 1) {
        $fonts$$3_urls$$.push(new $webfont$Font$$($components$$[0], $variations$$[$j$$1$$]))
      }
    }else {
      $fonts$$3_urls$$.push(new $webfont$Font$$($components$$[0]))
    }
  }
  $onReady$$1$$($fonts$$3_urls$$)
};
$webfont$modules$Custom$$.prototype.$supportUserAgent$ = function $$webfont$modules$Custom$$$$$supportUserAgent$$($userAgent$$5$$, $support$$2$$) {
  return $support$$2$$($userAgent$$5$$.$browserInfo_$.$webfontSupport_$)
};
$JSCompiler_StaticMethods_addModule$$("custom", function($configuration$$4$$, $domHelper$$6$$) {
  return new $webfont$modules$Custom$$($domHelper$$6$$, $configuration$$4$$)
});
// Input 17
function $webfont$modules$Fontdeck$$($domHelper$$7$$, $configuration$$5$$) {
  this.$domHelper_$ = $domHelper$$7$$;
  this.$configuration_$ = $configuration$$5$$;
  this.$fonts_$ = []
}
$webfont$modules$Fontdeck$$.prototype.$getScriptSrc$ = function $$webfont$modules$Fontdeck$$$$$getScriptSrc$$($projectId$$) {
  return $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$) + (this.$configuration_$.api || "//f.fontdeck.com/s/css/js/") + (this.$domHelper_$.$loadWindow_$.location.hostname || this.$domHelper_$.$mainWindow_$.location.hostname) + "/" + $projectId$$ + ".js"
};
$webfont$modules$Fontdeck$$.prototype.$supportUserAgent$ = function $$webfont$modules$Fontdeck$$$$$supportUserAgent$$($userAgent$$6$$, $support$$3$$) {
  var $projectId$$1$$ = this.$configuration_$.id, $loadWindow$$ = this.$domHelper_$.$loadWindow_$, $self$$2$$ = this;
  $projectId$$1$$ ? ($loadWindow$$.__webfontfontdeckmodule__ || ($loadWindow$$.__webfontfontdeckmodule__ = {}), $loadWindow$$.__webfontfontdeckmodule__[$projectId$$1$$] = function $$loadWindow$$$__webfontfontdeckmodule__$$projectId$$1$$$($fontdeckSupports$$, $data$$21$$) {
    for(var $i$$15$$ = 0, $j$$2$$ = $data$$21$$.fonts.length;$i$$15$$ < $j$$2$$;++$i$$15$$) {
      var $font$$11$$ = $data$$21$$.fonts[$i$$15$$];
      $self$$2$$.$fonts_$.push(new $webfont$Font$$($font$$11$$.name, $webfont$Font$parseCssVariation$$("font-weight:" + $font$$11$$.weight + ";font-style:" + $font$$11$$.style)))
    }
    $support$$3$$($fontdeckSupports$$)
  }, $JSCompiler_StaticMethods_loadScript$$(this.$domHelper_$, this.$getScriptSrc$($projectId$$1$$), function($err$$) {
    $err$$ && $support$$3$$($JSCompiler_alias_FALSE$$)
  })) : $support$$3$$($JSCompiler_alias_FALSE$$)
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
    var $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ = this.$fontFamilies_$[$i$$18$$].split(":"), $fontFamily$$ = $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$[0].replace(/\+/g, " "), $variations$$1$$ = ["n4"];
    if(2 <= $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$.length) {
      var $finalSubsets$$inline_162_finalVariations$$inline_155_fvds$$;
      var $providedVariations$$inline_156_variations$$inline_154$$ = $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$[1];
      $finalSubsets$$inline_162_finalVariations$$inline_155_fvds$$ = [];
      if($providedVariations$$inline_156_variations$$inline_154$$) {
        for(var $providedVariations$$inline_156_variations$$inline_154$$ = $providedVariations$$inline_156_variations$$inline_154$$.split(","), $length$$inline_157$$ = $providedVariations$$inline_156_variations$$inline_154$$.length, $i$$inline_158$$ = 0;$i$$inline_158$$ < $length$$inline_157$$;$i$$inline_158$$++) {
          var $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$;
          $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$ = $providedVariations$$inline_156_variations$$inline_154$$[$i$$inline_158$$];
          if($fvd$$inline_159_groups$$inline_212_variation$$inline_211$$.match(/^[\w]+$/)) {
            $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$ = $webfont$modules$google$FontApiParser$VARIATION_MATCH$$.exec($fvd$$inline_159_groups$$inline_212_variation$$inline_211$$.toLowerCase());
            var $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ = void 0;
            if($fvd$$inline_159_groups$$inline_212_variation$$inline_211$$ == $JSCompiler_alias_NULL$$) {
              $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ = ""
            }else {
              $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ = void 0;
              $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ = $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$[1];
              if($JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ == $JSCompiler_alias_NULL$$ || "" == $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$) {
                $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ = "4"
              }else {
                var $weight$$inline_216$$ = $webfont$modules$google$FontApiParser$WEIGHTS$$[$JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$], $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ = $weight$$inline_216$$ ? $weight$$inline_216$$ : isNaN($JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$) ? "4" : $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$.substr(0, 
                1)
              }
              $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$ = [$fvd$$inline_159_groups$$inline_212_variation$$inline_211$$[2] == $JSCompiler_alias_NULL$$ || "" == $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$[2] ? "n" : $webfont$modules$google$FontApiParser$STYLES$$[$fvd$$inline_159_groups$$inline_212_variation$$inline_211$$[2]], $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$].join("")
            }
            $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$ = $JSCompiler_inline_result$$inline_214_JSCompiler_temp$$inline_213_parsedWeight$$inline_215$$
          }else {
            $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$ = ""
          }
          $fvd$$inline_159_groups$$inline_212_variation$$inline_211$$ && $finalSubsets$$inline_162_finalVariations$$inline_155_fvds$$.push($fvd$$inline_159_groups$$inline_212_variation$$inline_211$$)
        }
      }
      0 < $finalSubsets$$inline_162_finalVariations$$inline_155_fvds$$.length && ($variations$$1$$ = $finalSubsets$$inline_162_finalVariations$$inline_155_fvds$$);
      3 == $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$.length && ($elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ = $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$[2], $finalSubsets$$inline_162_finalVariations$$inline_155_fvds$$ = [], $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ = !$elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ ? 
      $finalSubsets$$inline_162_finalVariations$$inline_155_fvds$$ : $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$.split(","), 0 < $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$.length && ($elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ = $webfont$modules$google$FontApiParser$INT_FONTS$$[$elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$[0]]) && (this.$fontTestStrings_$[$fontFamily$$] = 
      $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$))
    }
    this.$fontTestStrings_$[$fontFamily$$] || ($elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ = $webfont$modules$google$FontApiParser$INT_FONTS$$[$fontFamily$$]) && (this.$fontTestStrings_$[$fontFamily$$] = $elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$);
    for($elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ = 0;$elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ < $variations$$1$$.length;$elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$ += 1) {
      this.$parsedFonts_$.push(new $webfont$Font$$($fontFamily$$, $variations$$1$$[$elements$$1_fontTestString$$2_hanumanTestString_j$$3_subsets_subsets$$inline_161$$]))
    }
  }
};
// Input 20
function $webfont$modules$google$GoogleFontApi$$($userAgent$$7$$, $domHelper$$9$$, $configuration$$7$$) {
  this.$userAgent_$ = $userAgent$$7$$;
  this.$domHelper_$ = $domHelper$$9$$;
  this.$configuration_$ = $configuration$$7$$
}
var $webfont$modules$google$GoogleFontApi$METRICS_COMPATIBLE_FONTS$$ = {Arimo:$JSCompiler_alias_TRUE$$, Cousine:$JSCompiler_alias_TRUE$$, Tinos:$JSCompiler_alias_TRUE$$};
$webfont$modules$google$GoogleFontApi$$.prototype.$supportUserAgent$ = function $$webfont$modules$google$GoogleFontApi$$$$$supportUserAgent$$($userAgent$$8$$, $support$$4$$) {
  $support$$4$$($userAgent$$8$$.$browserInfo_$.$webfontSupport_$)
};
$webfont$modules$google$GoogleFontApi$$.prototype.load = function $$webfont$modules$google$GoogleFontApi$$$$load$($onReady$$3$$) {
  var $domHelper$$10$$ = this.$domHelper_$;
  if("MSIE" == this.$userAgent_$.getName() && this.$configuration_$.blocking != $JSCompiler_alias_TRUE$$) {
    var $callback$$inline_168$$ = $goog$bind$$(this.$insertLink_$, this, $onReady$$3$$), $check$$inline_170$$ = function $$check$$inline_170$$$() {
      $domHelper$$10$$.$document_$.body ? $callback$$inline_168$$() : setTimeout($check$$inline_170$$, 0)
    };
    $check$$inline_170$$()
  }else {
    this.$insertLink_$($onReady$$3$$)
  }
};
$webfont$modules$google$GoogleFontApi$$.prototype.$insertLink_$ = function $$webfont$modules$google$GoogleFontApi$$$$$insertLink_$$($onReady$$4$$) {
  for(var $domHelper$$11$$ = this.$domHelper_$, $fontApiUrlBuilder$$ = new $webfont$modules$google$FontApiUrlBuilder$$(this.$configuration_$.api, $JSCompiler_StaticMethods_getProtocol$$($domHelper$$11$$), this.$configuration_$.text), $fontApiParser_fontFamilies$$3$$ = this.$configuration_$.families, $length$$inline_221$$ = $fontApiParser_fontFamilies$$3$$.length, $i$$inline_222$$ = 0;$i$$inline_222$$ < $length$$inline_221$$;$i$$inline_222$$++) {
    var $elements$$inline_223$$ = $fontApiParser_fontFamilies$$3$$[$i$$inline_222$$].split(":");
    3 == $elements$$inline_223$$.length && $fontApiUrlBuilder$$.$subsets_$.push($elements$$inline_223$$.pop());
    var $joinCharacter$$inline_224$$ = "";
    2 == $elements$$inline_223$$.length && "" != $elements$$inline_223$$[1] && ($joinCharacter$$inline_224$$ = ":");
    $fontApiUrlBuilder$$.$fontFamilies_$.push($elements$$inline_223$$.join($joinCharacter$$inline_224$$))
  }
  $fontApiParser_fontFamilies$$3$$ = new $webfont$modules$google$FontApiParser$$($fontApiParser_fontFamilies$$3$$);
  $fontApiParser_fontFamilies$$3$$.parse();
  $JSCompiler_StaticMethods_loadStylesheet$$($domHelper$$11$$, $fontApiUrlBuilder$$.$build$());
  $onReady$$4$$($fontApiParser_fontFamilies$$3$$.$parsedFonts_$, $fontApiParser_fontFamilies$$3$$.$fontTestStrings_$, $webfont$modules$google$GoogleFontApi$METRICS_COMPATIBLE_FONTS$$)
};
$JSCompiler_StaticMethods_addModule$$("google", function($configuration$$8$$, $domHelper$$12$$) {
  var $userAgent$$9$$ = (new $webfont$UserAgentParser$$(navigator.userAgent, document)).parse();
  return new $webfont$modules$google$GoogleFontApi$$($userAgent$$9$$, $domHelper$$12$$, $configuration$$8$$)
});
// Input 21
function $webfont$modules$Ascender$$($domHelper$$13$$, $configuration$$9$$) {
  this.$domHelper_$ = $domHelper$$13$$;
  this.$configuration_$ = $configuration$$9$$
}
var $webfont$modules$Ascender$VARIATIONS$$ = {regular:"n4", bold:"n7", italic:"i4", bolditalic:"i7", r:"n4", b:"n7", i:"i4", bi:"i7"};
$webfont$modules$Ascender$$.prototype.$supportUserAgent$ = function $$webfont$modules$Ascender$$$$$supportUserAgent$$($userAgent$$10$$, $support$$5$$) {
  return $support$$5$$($userAgent$$10$$.$browserInfo_$.$webfontSupport_$)
};
$webfont$modules$Ascender$$.prototype.load = function $$webfont$modules$Ascender$$$$load$($onReady$$5$$) {
  $JSCompiler_StaticMethods_loadStylesheet$$(this.$domHelper_$, $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$) + "//webfonts.fontslive.com/css/" + this.$configuration_$.key + ".css");
  for(var $providedFamilies$$inline_176$$ = this.$configuration_$.families, $fonts$$inline_177$$ = [], $i$$inline_178$$ = 0, $len$$inline_179$$ = $providedFamilies$$inline_176$$.length;$i$$inline_178$$ < $len$$inline_179$$;$i$$inline_178$$++) {
    $fonts$$inline_177$$.push.apply($fonts$$inline_177$$, $JSCompiler_StaticMethods_parseFamilyAndVariations$$($providedFamilies$$inline_176$$[$i$$inline_178$$]))
  }
  $onReady$$5$$($fonts$$inline_177$$)
};
function $JSCompiler_StaticMethods_parseFamilyAndVariations$$($familyName_providedFamily$$) {
  var $parts$$5_variations$$inline_183$$ = $familyName_providedFamily$$.split(":");
  $familyName_providedFamily$$ = $parts$$5_variations$$inline_183$$[0];
  if($parts$$5_variations$$inline_183$$[1]) {
    for(var $providedVariations$$inline_182_result$$ = $parts$$5_variations$$inline_183$$[1].split(","), $parts$$5_variations$$inline_183$$ = [], $i$$21_i$$inline_184$$ = 0, $len$$inline_185$$ = $providedVariations$$inline_182_result$$.length;$i$$21_i$$inline_184$$ < $len$$inline_185$$;$i$$21_i$$inline_184$$++) {
      var $pv$$inline_186$$ = $providedVariations$$inline_182_result$$[$i$$21_i$$inline_184$$];
      if($pv$$inline_186$$) {
        var $v$$inline_187$$ = $webfont$modules$Ascender$VARIATIONS$$[$pv$$inline_186$$];
        $parts$$5_variations$$inline_183$$.push($v$$inline_187$$ ? $v$$inline_187$$ : $pv$$inline_186$$)
      }
    }
    $providedVariations$$inline_182_result$$ = [];
    for($i$$21_i$$inline_184$$ = 0;$i$$21_i$$inline_184$$ < $parts$$5_variations$$inline_183$$.length;$i$$21_i$$inline_184$$ += 1) {
      $providedVariations$$inline_182_result$$.push(new $webfont$Font$$($familyName_providedFamily$$, $parts$$5_variations$$inline_183$$[$i$$21_i$$inline_184$$]))
    }
    return $providedVariations$$inline_182_result$$
  }
  return[new $webfont$Font$$($familyName_providedFamily$$)]
}
$JSCompiler_StaticMethods_addModule$$("ascender", function($configuration$$10$$, $domHelper$$14$$) {
  return new $webfont$modules$Ascender$$($domHelper$$14$$, $configuration$$10$$)
});
// Input 22
function $webfont$modules$Monotype$$($userAgent$$11$$, $domHelper$$15$$, $configuration$$11$$) {
  this.$userAgent_$ = $userAgent$$11$$;
  this.$domHelper_$ = $domHelper$$15$$;
  this.$configuration_$ = $configuration$$11$$;
  this.$fonts_$ = []
}
$webfont$modules$Monotype$$.prototype.$supportUserAgent$ = function $$webfont$modules$Monotype$$$$$supportUserAgent$$($userAgent$$12$$, $support$$6$$) {
  var $self$$3$$ = this, $projectId$$2$$ = $self$$3$$.$configuration_$.projectId, $version$$16$$ = $self$$3$$.$configuration_$.version;
  if($projectId$$2$$) {
    var $loadWindow$$1$$ = $self$$3$$.$domHelper_$.$loadWindow_$;
    $JSCompiler_StaticMethods_loadScript$$(this.$domHelper_$, $self$$3$$.$getScriptSrc$($projectId$$2$$, $version$$16$$), function($err$$1_mti_fnts$$inline_189$$) {
      if($err$$1_mti_fnts$$inline_189$$) {
        $support$$6$$($JSCompiler_alias_FALSE$$)
      }else {
        if($loadWindow$$1$$["__mti_fntLst" + $projectId$$2$$] && ($err$$1_mti_fnts$$inline_189$$ = $loadWindow$$1$$["__mti_fntLst" + $projectId$$2$$]())) {
          for(var $i$$inline_190$$ = 0;$i$$inline_190$$ < $err$$1_mti_fnts$$inline_189$$.length;$i$$inline_190$$++) {
            $self$$3$$.$fonts_$.push(new $webfont$Font$$($err$$1_mti_fnts$$inline_189$$[$i$$inline_190$$].fontfamily))
          }
        }
        $support$$6$$($userAgent$$12$$.$browserInfo_$.$webfontSupport_$)
      }
    }).id = "__MonotypeAPIScript__" + $projectId$$2$$
  }else {
    $support$$6$$($JSCompiler_alias_FALSE$$)
  }
};
$webfont$modules$Monotype$$.prototype.$getScriptSrc$ = function $$webfont$modules$Monotype$$$$$getScriptSrc$$($projectId$$3$$, $version$$17$$) {
  var $p$$ = $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$), $api$$1$$ = (this.$configuration_$.api || "fast.fonts.com/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
  return $p$$ + "//" + $api$$1$$ + "/" + $projectId$$3$$ + ".js" + ($version$$17$$ ? "?v=" + $version$$17$$ : "")
};
$webfont$modules$Monotype$$.prototype.load = function $$webfont$modules$Monotype$$$$load$($onReady$$6$$) {
  $onReady$$6$$(this.$fonts_$)
};
$JSCompiler_StaticMethods_addModule$$("monotype", function($configuration$$12$$, $domHelper$$16$$) {
  var $userAgent$$13$$ = (new $webfont$UserAgentParser$$(navigator.userAgent, document)).parse();
  return new $webfont$modules$Monotype$$($userAgent$$13$$, $domHelper$$16$$, $configuration$$12$$)
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
  var $kitId$$1$$ = this.$configuration_$.id, $configuration$$14$$ = this.$configuration_$, $loadWindow$$2$$ = this.$domHelper_$.$loadWindow_$, $self$$4$$ = this;
  $kitId$$1$$ ? ($loadWindow$$2$$.__webfonttypekitmodule__ || ($loadWindow$$2$$.__webfonttypekitmodule__ = {}), $loadWindow$$2$$.__webfonttypekitmodule__[$kitId$$1$$] = function $$loadWindow$$2$$$__webfonttypekitmodule__$$kitId$$1$$$($callback$$35$$) {
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
  }, $JSCompiler_StaticMethods_loadScript$$(this.$domHelper_$, this.$getScriptSrc$($kitId$$1$$), function($err$$2$$) {
    $err$$2$$ && $support$$7$$($JSCompiler_alias_FALSE$$)
  }, 2E3)) : $support$$7$$($JSCompiler_alias_FALSE$$)
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
