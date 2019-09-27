// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
document.addEventListener('DOMContentLoaded', function () {
                          chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, function(tab){
                                            console.log(JSON.stringify(tab));
                                            chrome.cookies.get({"url":tab[0].url,"name":"words"},function (cookie){
                                                               var cvalue = cookie["value"];
                                                               var words = cvalue.split(",");
                                                               for(var i = 0; i < words.length; i++){
                                                                var para = document.createElement("p");
                                                                var a = document.createElement("a");
                                                                var node = document.createTextNode(words[i]);
                                                                a.appendChild(node);
                                                                a.setAttribute('href', 'https://www.collinsdictionary.com/dictionary/english/'+words[i]);
                                                                a.setAttribute('target','_blank');
                                                                para.appendChild(a);
                                                                document.getElementById("word_list").appendChild(para);
                                                               }
                                                               });
                                            });
});
